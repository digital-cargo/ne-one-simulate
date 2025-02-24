const { exec } = require("child_process");

const COLLECTION_FILE = "1R-ShipmentRecord.postman_collection.json";

exec(`newman run ${COLLECTION_FILE}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing Newman: ${stderr}`);
        return;
    }

    const lines = stdout.split("\n");
    const results = [];
    
    let currentRequest = "";
    let lastUrl = "";

    lines.forEach((line) => {
        if (line.startsWith("↳")) {
            currentRequest = line.replace("↳", "").trim();
            lastUrl = ""; // Reset last URL for new request
        }

        // Extract HTTP method and URL
        const urlMatch = line.match(/([A-Z]+)\s+(http[s]?:\/\/\S+)\s+\[/);
        if (urlMatch) {
            lastUrl = `${urlMatch[1]} ${urlMatch[2]}`;
        }

        if (line.includes("✓") || line.includes("✗")) {
            const status = line.includes("✓") ? "Success" : "Failure";
            results.push({
                request: currentRequest,
                status: status,
                lastUrl: lastUrl
            });
        }
    });

    // Remove duplicates and display results
    const uniqueResults = [...new Set(results.map(JSON.stringify))].map(JSON.parse);
    uniqueResults.forEach(result => {
        console.log(`${result.request}: ${result.status}${result.lastUrl ? ` URL: ${result.lastUrl}` : ''}`);
    });
});
