Node.js backend to run the Postman collection with Newman and return the results as json

# Example response
```json
[
  {
    "test_case": "Change totalGrossWeight",
    "overall_passed": true,
    "requests": [
      {
        "name": "Create ShipmentRecord",
        "assertions": [
          {
            "assertion": "Status code is 201",
            "passed": true
          },
          {
            "assertion": "Response time is less than 2000ms",
            "passed": true
          }
        ],
        "request": {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": "{\n    \"@context\": {\n        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n    },\n    \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-95193749\",\n    \"@type\": \"cargo:Waybill\",\n    \"cargo:waybillType\": {\n        \"@id\": \"https://onerecord.iata.org/ns/cargo#MASTER\"\n    },\n    \"cargo:waybillPrefix\": \"020\",\n    \"cargo:waybillNumber\": \"95193749\"    \n}",
          "url": "http://localhost:8080/logistics-objects/waybill-020-95193749"
        },
        "response": {
          "status": 201,
          "headers": {
            "content-type": "application/json"
          },
          "body": "{\n    \"@context\": {\n        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n    },\n    \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-95193749\",\n    \"@type\": \"cargo:Waybill\",\n    \"cargo:waybillType\": {\n        \"@id\": \"https://onerecord.iata.org/ns/cargo#MASTER\"\n    },\n    \"cargo:waybillPrefix\": \"020\",\n    \"cargo:waybillNumber\": \"95193749\"    \n}"
        }
      }
    ]
  },
  {
    "test_case": "Verify totalGrossWeight",
    "overall_passed": false,
    "requests": [
      {
        "name": "Create ShipmentRecord",
        "assertions": [
          {
            "assertion": "Status code is 201",
            "passed": true
          },
          {
            "assertion": "Response time is less than 2000ms",
            "passed": false
          }
        ],
        "request": {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": "{\n    \"@context\": {\n        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n    },\n    \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-95193749\",\n    \"@type\": \"cargo:Waybill\",\n    \"cargo:waybillType\": {\n        \"@id\": \"https://onerecord.iata.org/ns/cargo#MASTER\"\n    },\n    \"cargo:waybillPrefix\": \"020\",\n    \"cargo:waybillNumber\": \"95193749\"    \n}",
          "url": "http://localhost:8080/logistics-objects/waybill-020-95193749"
        },
        "response": {
          "status": 201,
          "headers": {
            "content-type": "application/json"
          },
          "body": "{\n    \"@context\": {\n        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n    },\n    \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-95193749\",\n    \"@type\": \"cargo:Waybill\",\n    \"cargo:waybillType\": {\n        \"@id\": \"https://onerecord.iata.org/ns/cargo#MASTER\"\n    },\n    \"cargo:waybillPrefix\": \"020\",\n    \"cargo:waybillNumber\": \"95193749\"    \n}"
        }
      }
    ]
  }
]
```