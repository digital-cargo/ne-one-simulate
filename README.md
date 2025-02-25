<p align="center">
  <img height="250" src="https://i.imgur.com/6Gfpg9O.png">
</p>

## Problem Description
ONE Record is a powerful framework designed to standardize data sharing across the air cargo industry; however, differing interpretations of the standard can lead to inconsistencies and interoperability issues. Organizations implementing ONE Record often encounter challenges with data model compatibility, API implementation variations, and security model interpretations. These inconsistencies create friction during integration efforts, increasing development costs and time-to-market for new digital cargo solutions.

## Our Solution: ONE Record Simulation Suite
We present a comprehensive testing suite for ONE Record, featuring:
- A Postman collection for easy API testing that covers standard endpoints defined in the ONE Record specification.
- An intuitive graphical tool for real-time testing and result evaluation that visualizes data flows between systems and highlights potential compatibility issues. The tool provides a drag-and-drop interface for test scenarios and displays color-coded results to quickly identify areas requiring attention.
- A set of reference implementations representing different roles in the air cargo supply chain (airline, forwarder, GHA, etc.) that demonstrate correct implementation of the standard. These reference implementations serve as benchmarks for testing and validation.

This solution ensures seamless data integration and an excellent user experience. We will demonstrate the capabilities of the suite using the Shipment Record as our starting point.

## Our Team
We are a diverse team composed of competing European airlines, world's largest applied research organisation and the leading IT provider in air cargo, joining forces to drive innovation and efficiency.

## Getting Started
To get started with the ONE Record Simulation Suite, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/one-record-simulation-suite.git
   ```

2. **Install dependencies:**
   ```bash
   cd one-record-simulation-suite
   npm install
   ```

3. **Configure your environment:**
   ```bash
   cp .env.example .env
   # Edit the .env file with your specific settings
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## Features
- **API Testing**: Comprehensive Postman collection for testing ONE Record API endpoints
- **Real-time Validation**: Visual feedback on data compliance and interoperability
- **Scenario Simulation**: Pre-configured test scenarios based on real-world use cases
- **Custom Test Creation**: Build and save your own test scenarios
- **Reporting**: Generate detailed reports on test results and compliance issues

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- IATA ONE Record
- All participating colleges
- The open-source community for their valuable tools and frameworks
