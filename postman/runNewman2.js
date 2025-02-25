const newman = require('newman');
const fs = require('fs');
const path = require('path');

// Define the path to your Postman collection
const collectionFilePath = './1R-ShipmentRecord.postman_collection.json';

if (!fs.existsSync(collectionFilePath)) {
    console.error(`Error: The collection file "${collectionFilePath}" does not exist.`);
    process.exit(1);
}

// Run the collection
newman.run({
    collection: collectionFilePath,
    reporters: 'json',  // Specify JSON reporter to get summary in JSON format
    reporter: {
        json: {
            export: './newman-results.json'  // Path where you want to save the results
        }
    },
    iterationCount: 1,  // Number of times to run each request
    timeoutRequest: 300000,  // Timeout for requests in milliseconds
})
.on('start', function (err, args) {
    if (!err) {
        console.log('Running a collection...');
    } else {
        console.error('Error during collection start:', err);
    }
})
.on('beforeItem', function (err, args) {
    if (!err) {
        console.log(`Starting item: ${args.item.name}`);
    } else {
        console.error(`Error before item "${args.item.name}":`, err);
    }
})
.on('item', function (err, args) {
    if (!err) {
        console.log(`Completed item: ${args.item.name}`);
        if (args.response && args.response.code) {
            console.log(`Response Code: ${args.response.code}`);
        } else {
            console.error(`No response received for item "${args.item.name}"`);
        }
    } else {
        console.error(`Error during item "${args.item.name}":`, err);
    }
})
.on('done', function (err, summary) {
    if (!err && summary.run && summary.run.stats) {
        // Print the JSON summary
        const jsonSummary = JSON.stringify(summary.run.stats, null, 2);
        console.log(jsonSummary);

        // Optionally, you can log or use this JSON as needed
        fs.writeFile('./summary.json', jsonSummary, (writeErr) => {
            if (writeErr) {
                console.error('Error writing summary to file:', writeErr);
            } else {
                console.log('Summary saved to ./summary.json');
            }
        });
    } else {
        console.error('Error running the collection:', err);
    }

    // Log any errors that occurred during execution
    if (summary && summary.run && summary.run.failures) {
        summary.run.failures.forEach(failure => {
            console.error(`Failure: ${failure.item.name}`);
            console.error(`Request URL: ${failure.request.url.raw}`);
            console.error(`Response Code: ${failure.response.code}`);
            console.error(`Response Status: ${failure.response.status}`);
            console.error(`Error Message: ${failure.error.message}`);
            if (failure.error.stack) {
                console.error(`Stack Trace:\n${failure.error.stack}`);
            }
        });
    }

    // Log execution statistics
    if (summary && summary.run && summary.run.stats) {
        const stats = summary.run.stats;
        console.log('Execution Statistics:');
        console.log(`Total Requests: ${stats.requests.total}`);
        console.log(`Successful Requests: ${stats.requests.successful}`);
        console.log(`Failed Requests: ${stats.requests.failed}`);
        console.log(`Skipped Requests: ${stats.requests.skipped}`);
    }
});