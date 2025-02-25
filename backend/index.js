const express = require('express');
const newman = require('newman');
const fs = require('fs');
const cors = require('cors');
const { jwtDecode } = require('jwt-decode');

const app = express();
app.use(cors());
const port = process.env.PORT || 3333;

app.use(express.json({ limit: '50mb' })); // To handle large base64 encoded JSON

app.post('/run-collection', (req, res) => {
    const base64Collection = req.body.collection;
    if (!base64Collection) {
        return res.status(400).json({ error: 'No collection provided in the request body' });
    }

    let collection;
    try {
        const collectionJson = Buffer.from(base64Collection, 'base64').toString('utf8');
        collection = JSON.parse(collectionJson);
    } catch (error) {
        return res.status(400).json({ error: 'Invalid base64 encoded collection' });
    }

    const testResults = [];
    const requestsMaps = new Map();

    // Initialize with a default test case for requests not in folders
    const defaultTestCase = {
        test_case: 'Default Test Case',
        overall_passed: true,
        requests: []
    };
    testResults.push(defaultTestCase);
    requestsMaps.set(defaultTestCase.test_case, new Map());

    // Add test cases for folders if they exist
    if (collection.item && collection.item.length > 0) {
        collection.item.forEach(item => {
            // Check if the item is a folder
            if (item.item) {
                const testCase = {
                    test_case: item.name || 'Unnamed Test Case',
                    overall_passed: true,
                    requests: []
                };
                testResults.push(testCase);
                requestsMaps.set(testCase.test_case, new Map());
            }
        });
    }

    newman.run({
        collection: collection,
        reporters: 'json',
        iterationCount: 1,
        timeoutRequest: 300000,
    })
        .on('start', function (err, args) {
            if (!err) {
                console.log('Running a collection...');
            } else {
                console.error('Error during collection start:', err);
            }
        })
        .on('assertion', function (err, assertion) {
            // Get folder name safely
            const folderName = assertion.item.parent() && assertion.item.parent().name 
                ? assertion.item.parent().name 
                : 'Default Test Case';

            const itemName = assertion.item.name;
            const testCase = testResults.find(t => t.test_case === folderName);
            const requestsMap = requestsMaps.get(folderName);

            if (!requestsMap.has(itemName)) {
                requestsMap.set(itemName, {
                    name: itemName,
                    assertions: [],
                    request: {},
                    response: {}
                });
            }
            
            const assertionResult = {
                assertion: assertion.assertion,
                passed: !assertion.error
            };
            
            const request = requestsMap.get(itemName);
            if (!request.assertions.some(a => a.assertion === assertionResult.assertion)) {
                request.assertions.push(assertionResult);
                if (assertion.error && testCase) {
                    testCase.overall_passed = false;
                }
            }
        })
        .on('beforeRequest', function (err, args) {
            if (!err && args.request) {
                // Get folder name safely
                const folderName = args.item.parent() && args.item.parent().name 
                    ? args.item.parent().name 
                    : 'Default Test Case';

                const itemName = args.item.name;
                const requestsMap = requestsMaps.get(folderName);

                if (!requestsMap.has(itemName)) {
                    requestsMap.set(itemName, {
                        name: itemName,
                        assertions: [],
                        request: {},
                        response: {}
                    });
                }

                const request = requestsMap.get(itemName);
                const headers = args.request.headers.reduce((acc, h) => {
                    acc[h.key] = h.value;
                    return acc;
                }, {});

                request.request = {
                    method: args.request.method,
                    headers: headers,
                    body: args.request.body?.raw || '',
                    url: args.request.url.toString()
                };
            }
        })
        .on('request', function (err, args) {
            if (!err && args.response) {
                // Get folder name safely
                const folderName = args.item.parent() && args.item.parent().name 
                    ? args.item.parent().name 
                    : 'Default Test Case';

                const itemName = args.item.name;
                const requestsMap = requestsMaps.get(folderName);
                const request = requestsMap.get(itemName);
                
                if (request) {
                    request.response = {
                        status: args.response.code,
                        headers: args.response.headers.reduce((acc, h) => ({ ...acc, [h.key]: h.value }), {}),
                        body: args.response.stream?.toString() || ''
                    };
                }
            }
        })
        .on('done', function (err, summary) {
            if (err || !summary.run || !summary.run.stats) {
                console.error('Error running the collection:', err);
                return res.status(500).json({ error: 'Error running the collection' });
            }
            // persist the summary to a file
            fs.writeFileSync('newman-summary.json', JSON.stringify(summary, null, 2));

            // Populate requests for each test case
            testResults.forEach(testCase => {
                const requestsMap = requestsMaps.get(testCase.test_case);
                if (requestsMap) {
                    testCase.requests = Array.from(requestsMap.values())
                        .filter(request => request.name);

                    // Clean up response bodies and handle JWT tokens
                    testCase.requests.forEach(request => {
                        try {
                            if (request.response.body) {
                                const parsedBody = JSON.parse(request.response.body);
                                request.response.body = JSON.stringify(parsedBody, null, 2);
                            }
                        } catch (e) {
                            // If parsing fails, leave the body as is
                        }

                        const authorizationHeader = request.request.headers.Authorization || request.request.headers.authorization;
                        if (authorizationHeader) {
                            const token = authorizationHeader.split(' ')[1];
                            try {
                                const decodedToken = jwtDecode(token);
                                if (decodedToken.logistics_agent_uri) {
                                    request.request.client_logistics_agent_uri = decodedToken.logistics_agent_uri;
                                }
                            } catch (error) {
                                console.error('Error decoding JWT token:', error);
                            }
                        }
                    });
                }
            });

            // Filter out empty test cases
            const finalResults = testResults.filter(testCase => testCase.requests.length > 0);

            //write testResults to a file
            fs.writeFileSync('newman-test-results.json', JSON.stringify(finalResults, null, 2));

            return res.json(finalResults);
        });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});