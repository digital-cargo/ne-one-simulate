const postmanData =
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
                            "assertion": "Response has 'Location' header",
                            "passed": true
                        }
                    ],
                    "request": {
                        "method": "POST",
                        "headers": {
                            "Content-Type": "application/ld+json",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDEsImlhdCI6MTc0MDQzODE0MSwianRpIjoiYjE4MDM3ZjQtZTUyMS00Y2RkLWEyNjUtMjZjZTFhYzg2ZTkwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.7u4t-WuCeUuCQFXPFWiZ7Fr3WXGxPd5F-QMex5FOyNIUob2NsMD3aE0ptLLOf9EMxWuP_oPElWdxR_H8bulc_4f7b6k2LTjX7DbWBTHIbWJpeMpXq_QALhKQdNOqj3wJJw3YHQl254bIChA3jz5uwh3N5kzKJeRHBpPRab5qXSPBpFR4hiR3FCkv5rXOJYnwltjMOAIzJmuIBjQMonHBVRqscUYNF4jPWgJvwtremlQDyDl4IZYLbEd1CUYJ30-LWREDOQj_ySaNoGS1-E6tS1jFv_Wyki5b4nlU7kLjRJT-PlUE2u9Cd_fln0l2PnrDxhUALfN6UZ3St4LE9IoBWw"
                        },
                        "body": "{\n    \"@context\": {\n        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n    },\n    \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-43202977\",\n    \"@type\": \"cargo:Waybill\",\n    \"cargo:waybillType\": {\n        \"@id\": \"https://onerecord.iata.org/ns/cargo#MASTER\"\n    },\n    \"cargo:waybillPrefix\": \"020\",\n    \"cargo:waybillNumber\": \"43202977\",\n    \"cargo:customsOriginCode\": \"X\",\n    \"cargo:arrivalLocation\": \"PVG\",\n    \"cargo:departureLocation\": \"HAJ\",\n    \"cargo:consignorDeclarationSignature\": \"CompanyName\",\n    \"cargo:carrierDeclarationDate\": \"2023-01-18T00:00:00\",\n    \"cargo:carrierDeclarationSignature\": \"PersonName1\",\n    \"cargo:carrierDeclarationPlace\": \"CityName1\",\n    \"cargo:shipment\": [\n        {\n        \"@id\": \"http://localhost:8080/logistics-objects/shipment-020-43202977\",\n        \"@type\": \"cargo:Shipment\",\n        \"cargo:totalGrossWeight\": \"600\",\n        \"cargo:totalDimension\": {\n            \"cargo:volume\": \"1\"\n        },\n        \"cargo:goodsDescription\": \"PARTS FOR GRAB ACCESSORIES NOT RESTRICTED\",\n        \"cargo:textualHandlingInstructions\": \"[[Marks: Address Att. docs: Commercial invoice References: AB67713]]\",\n        \"cargo:pieces\": [\n            {\n            \"@id\": \"http://localhost:8080/logistics-objects/pieces-020-43202977\",\n            \"@type\": \"cargo:Piece\",\n            \"cargo:dimension\": {\n                \"cargo:height\": \"95\",\n                \"cargo:lenght\": \"140\",\n                \"cargo:width\": \"90\",\n                \"cargo:volume\": \"1.20\"\n            },\n            \"cargo:grossWeight\": \"600\",\n            \"cargo:volumetricWeight\": {\n                \"cargo:chargeableWeight\": \"600\"\n            },\n            \"cargo:ndvForCarriage\": \"True\",\n            \"cargo:nvdForCustoms\": \"{{NvdForCustomsTrue}}\"\n            }\n        ],\n        \"cargo:customsInformation\": [\n            {\n            \"cargo:contentCode\": \"CP\",\n            \"cargo:subjectCode\": \"CNE\",\n            \"cargo:country\": \"CN\",\n            \"cargo:otherCustomsInformation\": \"PersonName2\"\n            }\n        ]\n        }\n    ],\n    \"cargo:otherCharges:\": [\n        {\n        \"cargo:chargePaymentType\": \"P\",\n        \"cargo:entitlement\": \"C\",\n        \"cargo:otherChargeCode\": \"MY\",\n        \"cargo:otherChargeAmount\": {\n            \"cargo:numericalValue\": \"267,75\",\n            \"cargo:currencyUnit\": \"EUR\"\n        }\n        },\n        {\n        \"cargo:chargePaymentType\": \"P\",\n        \"cargo:entitlement\": \"C\",\n        \"cargo:otherChargeCode\": \"DG\",\n        \"cargo:otherChargeAmount\": {\n            \"cargo:numericalValue\": \"125,00\",\n            \"cargo:currencyUnit\": \"EUR\"\n        }\n        }\n    ],\n    \"cargo:accountingNote\": {\n        \"cargo:accountingNoteIdentifier\": \"GEN\",\n        \"cargo:accountingNoteText\": \"Express CargoYNZ\"\n    }\n    }",
                        "url": "http://localhost:8080/logistics-objects",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                },
                {
                    "name": "Get ShipmentRecord",
                    "assertions": [
                        {
                            "assertion": "ShipmentRecord exists",
                            "passed": true
                        },
                        {
                            "assertion": "Revision header is a positive numerical value",
                            "passed": true
                        },
                        {
                            "assertion": "Latest-Revision header is a non-negative numerical value",
                            "passed": true
                        }
                    ],
                    "request": {
                        "method": "GET",
                        "headers": {
                            "Content-Type": "application/ld+json",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDEsImlhdCI6MTc0MDQzODE0MSwianRpIjoiYjE4MDM3ZjQtZTUyMS00Y2RkLWEyNjUtMjZjZTFhYzg2ZTkwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.7u4t-WuCeUuCQFXPFWiZ7Fr3WXGxPd5F-QMex5FOyNIUob2NsMD3aE0ptLLOf9EMxWuP_oPElWdxR_H8bulc_4f7b6k2LTjX7DbWBTHIbWJpeMpXq_QALhKQdNOqj3wJJw3YHQl254bIChA3jz5uwh3N5kzKJeRHBpPRab5qXSPBpFR4hiR3FCkv5rXOJYnwltjMOAIzJmuIBjQMonHBVRqscUYNF4jPWgJvwtremlQDyDl4IZYLbEd1CUYJ30-LWREDOQj_ySaNoGS1-E6tS1jFv_Wyki5b4nlU7kLjRJT-PlUE2u9Cd_fln0l2PnrDxhUALfN6UZ3St4LE9IoBWw"
                        },
                        "body": "",
                        "url": "http://localhost:8080/logistics-objects/waybill-020-43202977?embedded=true",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                },
                {
                    "name": "Change grossweight of Piece",
                    "assertions": [
                        {
                            "assertion": "Status code is 201",
                            "passed": true
                        },
                        {
                            "assertion": "Response has 'Location' header",
                            "passed": true
                        }
                    ],
                    "request": {
                        "method": "PATCH",
                        "headers": {
                            "Content-Type": "application/ld+json",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDEsImlhdCI6MTc0MDQzODE0MSwianRpIjoiYjE4MDM3ZjQtZTUyMS00Y2RkLWEyNjUtMjZjZTFhYzg2ZTkwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.7u4t-WuCeUuCQFXPFWiZ7Fr3WXGxPd5F-QMex5FOyNIUob2NsMD3aE0ptLLOf9EMxWuP_oPElWdxR_H8bulc_4f7b6k2LTjX7DbWBTHIbWJpeMpXq_QALhKQdNOqj3wJJw3YHQl254bIChA3jz5uwh3N5kzKJeRHBpPRab5qXSPBpFR4hiR3FCkv5rXOJYnwltjMOAIzJmuIBjQMonHBVRqscUYNF4jPWgJvwtremlQDyDl4IZYLbEd1CUYJ30-LWREDOQj_ySaNoGS1-E6tS1jFv_Wyki5b4nlU7kLjRJT-PlUE2u9Cd_fln0l2PnrDxhUALfN6UZ3St4LE9IoBWw"
                        },
                        "body": "{\r\n \"@context\": {\r\n        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\",\r\n        \"api\": \"https://onerecord.iata.org/ns/api#\"\r\n    },\r\n    \"@type\": \"api:Change\",\r\n    \"api:hasLogisticsObject\": {\r\n        \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-43202977\"\r\n    },\r\n        \"api:hasDescription\": \"Update totalGrossWeight\",\r\n    \"api:hasOperation\": [{\r\n            \r\n            \"@type\": \"api:Operation\",\r\n            \"api:op\": { \"@id\": \"api:DELETE\" },\r\n            \"api:s\": \"http://localhost:8080/logistics-objects/shipment-020-43202977\",\r\n            \"api:p\": \"https://onerecord.iata.org/ns/cargo#totalGrossWeight\",\r\n            \"api:o\": [{\r\n                \"@type\": \"api:OperationObject\",\r\n                \"api:hasDatatype\": \"http://www.w3.org/2001/XMLSchema#string\",\r\n                \"api:hasValue\": \"600\"\r\n            }]\r\n        },\r\n    {\r\n            \"@type\": \"api:Operation\",\r\n            \"api:op\": { \"@id\": \"api:ADD\" },\r\n            \"api:s\": \"http://localhost:8080/logistics-objects/shipment-020-43202977\",\r\n            \"api:p\": \"https://onerecord.iata.org/ns/cargo#totalGrossWeight\",\r\n            \"api:o\": [{\r\n                \"@type\": \"api:OperationObject\",\r\n                \"api:hasDatatype\": \"http://www.w3.org/2001/XMLSchema#string\",\r\n                \"api:hasValue\": \"1100\"\r\n            }]\r\n        }\r\n    ],\r\n    \"api:hasRevision\": {\r\n        \"@type\": \"http://www.w3.org/2001/XMLSchema#positiveInteger\",\r\n        \"@value\": \"1\"\r\n    }\r\n}",
                        "url": "http://localhost:8080/logistics-objects/waybill-020-43202977",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                },
                {
                    "name": "Approve Action Request",
                    "assertions": [
                        {
                            "assertion": "Response Status code is 204",
                            "passed": true
                        }
                    ],
                    "request": {
                        "method": "PATCH",
                        "headers": {
                            "Content-Type": "application/ld+json; version=2.0.0-dev",
                            "Accept": "application/ld+json; version=2.0.0-dev",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDEsImlhdCI6MTc0MDQzODE0MSwianRpIjoiYjE4MDM3ZjQtZTUyMS00Y2RkLWEyNjUtMjZjZTFhYzg2ZTkwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.7u4t-WuCeUuCQFXPFWiZ7Fr3WXGxPd5F-QMex5FOyNIUob2NsMD3aE0ptLLOf9EMxWuP_oPElWdxR_H8bulc_4f7b6k2LTjX7DbWBTHIbWJpeMpXq_QALhKQdNOqj3wJJw3YHQl254bIChA3jz5uwh3N5kzKJeRHBpPRab5qXSPBpFR4hiR3FCkv5rXOJYnwltjMOAIzJmuIBjQMonHBVRqscUYNF4jPWgJvwtremlQDyDl4IZYLbEd1CUYJ30-LWREDOQj_ySaNoGS1-E6tS1jFv_Wyki5b4nlU7kLjRJT-PlUE2u9Cd_fln0l2PnrDxhUALfN6UZ3St4LE9IoBWw"
                        },
                        "body": "",
                        "url": "http://localhost:8080/action-requests/dfb68441-5888-4577-9ea2-1580b0e32530?status=REQUEST_ACCEPTED",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                },
                {
                    "name": "Get Change request",
                    "assertions": [
                        {
                            "assertion": "Status code is 200",
                            "passed": true
                        },
                        {
                            "assertion": "Response contains REQUEST_ACCEPTED status",
                            "passed": true
                        }
                    ],
                    "request": {
                        "method": "GET",
                        "headers": {
                            "Content-Type": "application/ld+json",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDEsImlhdCI6MTc0MDQzODE0MSwianRpIjoiYjE4MDM3ZjQtZTUyMS00Y2RkLWEyNjUtMjZjZTFhYzg2ZTkwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.7u4t-WuCeUuCQFXPFWiZ7Fr3WXGxPd5F-QMex5FOyNIUob2NsMD3aE0ptLLOf9EMxWuP_oPElWdxR_H8bulc_4f7b6k2LTjX7DbWBTHIbWJpeMpXq_QALhKQdNOqj3wJJw3YHQl254bIChA3jz5uwh3N5kzKJeRHBpPRab5qXSPBpFR4hiR3FCkv5rXOJYnwltjMOAIzJmuIBjQMonHBVRqscUYNF4jPWgJvwtremlQDyDl4IZYLbEd1CUYJ30-LWREDOQj_ySaNoGS1-E6tS1jFv_Wyki5b4nlU7kLjRJT-PlUE2u9Cd_fln0l2PnrDxhUALfN6UZ3St4LE9IoBWw"
                        },
                        "body": "",
                        "url": "http://localhost:8080/action-requests/dfb68441-5888-4577-9ea2-1580b0e32530",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                }
            ]
        },
        {
            "test_case": "Verification request",
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
                            "assertion": "Response has 'Location' header",
                            "passed": true
                        }
                    ],
                    "request": {
                        "method": "POST",
                        "headers": {
                            "Content-Type": "application/ld+json",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDIsImlhdCI6MTc0MDQzODE0MiwianRpIjoiZmQxMGMzOGQtM2QwZS00OTkwLTlmZjYtY2U3NTZjZjIxMzQwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.0oQM4tawRdxDGhb6jGAH5Mv1ZDXKTBouxQn5-1dS8HbhVW8B6Uo8gaBShZZfDi5zwZ0orLjnfD4yTZkbG-AH1XIllDtAgbt-rdaD7sTvSa4ppRXm5BsgS9YGGZjoVxV7UBEr0hG5pXcDhLkv2Hk5A2gZhzgpYB7Lkhlez6AhWxqX9LhS-H8VFhGHK1T2zGjc2eoSzmc5yHVfZDtBZWfQa49PL-zhxX03bfE5KTJQBXXZaBv6104UZK37Qd87JrpaOH2L_o0sC6rqxyd_7-ZsRal1XSGUdX40Rl81_u4X2BIO9B8JNG4i8Smt_j-25aTTaaGppbeLs2yxePC201szkw"
                        },
                        "body": "{\n    \"@context\": {\n        \"cargo\": \"https://onerecord.iata.org/ns/cargo#\"\n    },\n    \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-68753306\",\n    \"@type\": \"cargo:Waybill\",\n    \"cargo:waybillType\": {\n        \"@id\": \"https://onerecord.iata.org/ns/cargo#MASTER\"\n    },\n    \"cargo:waybillPrefix\": \"020\",\n    \"cargo:waybillNumber\": \"68753306\",\n    \"cargo:customsOriginCode\": \"X\",\n    \"cargo:arrivalLocation\": \"PVG\",\n    \"cargo:departureLocation\": \"HAJ\",\n    \"cargo:consignorDeclarationSignature\": \"CompanyName\",\n    \"cargo:carrierDeclarationDate\": \"2023-01-18T00:00:00\",\n    \"cargo:carrierDeclarationSignature\": \"PersonName1\",\n    \"cargo:carrierDeclarationPlace\": \"CityName1\",\n    \"cargo:shipment\": [\n        {\n        \"@id\": \"http://localhost:8080/logistics-objects/shipment-020-68753306\",\n        \"@type\": \"cargo:Shipment\",\n        \"cargo:totalGrossWeight\": \"600\",\n        \"cargo:totalDimension\": {\n            \"cargo:volume\": \"1\"\n        },\n        \"cargo:goodsDescription\": \"PARTS FOR GRAB ACCESSORIES NOT RESTRICTED\",\n        \"cargo:textualHandlingInstructions\": \"[[Marks: Address Att. docs: Commercial invoice References: AB67713]]\",\n        \"cargo:pieces\": [\n            {\n            \"@id\": \"http://localhost:8080/logistics-objects/pieces-020-68753306\",\n            \"@type\": \"cargo:Piece\",\n            \"cargo:dimension\": {\n                \"cargo:height\": \"95\",\n                \"cargo:lenght\": \"140\",\n                \"cargo:width\": \"90\",\n                \"cargo:volume\": \"1.20\"\n            },\n            \"cargo:grossWeight\": \"600\",\n            \"cargo:volumetricWeight\": {\n                \"cargo:chargeableWeight\": \"600\"\n            },\n            \"cargo:ndvForCarriage\": \"True\",\n            \"cargo:nvdForCustoms\": \"{{NvdForCustomsTrue}}\"\n            }\n        ],\n        \"cargo:customsInformation\": [\n            {\n            \"cargo:contentCode\": \"CP\",\n            \"cargo:subjectCode\": \"CNE\",\n            \"cargo:country\": \"CN\",\n            \"cargo:otherCustomsInformation\": \"PersonName2\"\n            }\n        ]\n        }\n    ],\n    \"cargo:otherCharges:\": [\n        {\n        \"cargo:chargePaymentType\": \"P\",\n        \"cargo:entitlement\": \"C\",\n        \"cargo:otherChargeCode\": \"MY\",\n        \"cargo:otherChargeAmount\": {\n            \"cargo:numericalValue\": \"267,75\",\n            \"cargo:currencyUnit\": \"EUR\"\n        }\n        },\n        {\n        \"cargo:chargePaymentType\": \"P\",\n        \"cargo:entitlement\": \"C\",\n        \"cargo:otherChargeCode\": \"DG\",\n        \"cargo:otherChargeAmount\": {\n            \"cargo:numericalValue\": \"125,00\",\n            \"cargo:currencyUnit\": \"EUR\"\n        }\n        }\n    ],\n    \"cargo:accountingNote\": {\n        \"cargo:accountingNoteIdentifier\": \"GEN\",\n        \"cargo:accountingNoteText\": \"Express CargoYNZ\"\n    }\n    }",
                        "url": "http://localhost:8080/logistics-objects",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                },
                {
                    "name": "Get ShipmentRecord",
                    "assertions": [
                        {
                            "assertion": "ShipmentRecord exists",
                            "passed": true
                        },
                        {
                            "assertion": "Revision header is a positive numerical value",
                            "passed": true
                        },
                        {
                            "assertion": "Latest-Revision header is a non-negative numerical value",
                            "passed": true
                        }
                    ],
                    "request": {
                        "method": "GET",
                        "headers": {
                            "Content-Type": "application/ld+json",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDIsImlhdCI6MTc0MDQzODE0MiwianRpIjoiZmQxMGMzOGQtM2QwZS00OTkwLTlmZjYtY2U3NTZjZjIxMzQwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.0oQM4tawRdxDGhb6jGAH5Mv1ZDXKTBouxQn5-1dS8HbhVW8B6Uo8gaBShZZfDi5zwZ0orLjnfD4yTZkbG-AH1XIllDtAgbt-rdaD7sTvSa4ppRXm5BsgS9YGGZjoVxV7UBEr0hG5pXcDhLkv2Hk5A2gZhzgpYB7Lkhlez6AhWxqX9LhS-H8VFhGHK1T2zGjc2eoSzmc5yHVfZDtBZWfQa49PL-zhxX03bfE5KTJQBXXZaBv6104UZK37Qd87JrpaOH2L_o0sC6rqxyd_7-ZsRal1XSGUdX40Rl81_u4X2BIO9B8JNG4i8Smt_j-25aTTaaGppbeLs2yxePC201szkw"
                        },
                        "body": "",
                        "url": "http://localhost:8080/logistics-objects/waybill-020-68753306?embedded=true",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                },
                {
                    "name": "Change grossweight of Piece",
                    "assertions": [
                        {
                            "assertion": "Status code is 201",
                            "passed": false
                        },
                        {
                            "assertion": "Response has 'Location' header",
                            "passed": false
                        }
                    ],
                    "request": {
                        "method": "PATCH",
                        "headers": {
                            "Content-Type": "application/ld+json",
                            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGYzdaSHZUNGozbldNenZkX2xuYUsySGZWWnUtYWtBLTB0TGMwLVgwc1BZIn0.eyJleHAiOjE3NDA0NzQxNDIsImlhdCI6MTc0MDQzODE0MiwianRpIjoiZmQxMGMzOGQtM2QwZS00OTkwLTlmZjYtY2U3NTZjZjIxMzQwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4OTg5L3JlYWxtcy9uZW9uZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIwYWU4OThmMy1kMjQ4LTRlYWMtODY4MS1iMDM4MWM4MmQ2YzAiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJuZW9uZS1jbGllbnQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1uZW9uZSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiY2xpZW50SG9zdCI6IjE5Mi4xNjguNjUuMSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibG9naXN0aWNzX2FnZW50X3VyaSI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpc3RpY3Mtb2JqZWN0cy9fZGF0YS1ob2xkZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtbmVvbmUtY2xpZW50IiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguNjUuMSIsImNsaWVudF9pZCI6Im5lb25lLWNsaWVudCJ9.0oQM4tawRdxDGhb6jGAH5Mv1ZDXKTBouxQn5-1dS8HbhVW8B6Uo8gaBShZZfDi5zwZ0orLjnfD4yTZkbG-AH1XIllDtAgbt-rdaD7sTvSa4ppRXm5BsgS9YGGZjoVxV7UBEr0hG5pXcDhLkv2Hk5A2gZhzgpYB7Lkhlez6AhWxqX9LhS-H8VFhGHK1T2zGjc2eoSzmc5yHVfZDtBZWfQa49PL-zhxX03bfE5KTJQBXXZaBv6104UZK37Qd87JrpaOH2L_o0sC6rqxyd_7-ZsRal1XSGUdX40Rl81_u4X2BIO9B8JNG4i8Smt_j-25aTTaaGppbeLs2yxePC201szkw"
                        },
                        "body": "{\r\n \"@context\": {\r\n        \"cargo\": \"https: //onerecord.iata.org/ns/cargo#\",\r\n        \"api\": \"https: //onerecord.iata.org/ns/api#\",\r\n        \"xsd\": \"http://www.w3.org/2001/XMLSchema\"\r\n    },\r\n    \"@type\": \"api:Verification\",\r\n    \"api:hasLogisticsObject\": {\r\n        \"@id\": \"http://localhost:8080/logistics-objects/waybill-020-68753306\"\r\n    },\r\n    \"api:hasError\": [{\r\n            \"@type\": \"api:Error\",\r\n            \"api:hasTitle\": \"Generic goodsDescription. Please use a descriptive goodsDescription for customs checks\",\r\n            \"api:hasErrorDetail\": {\r\n                \"@type\": \"api:ErrorDetail\",\r\n                \"api:hasProperty\": {\r\n                    \"@value\": \"https: //onerecord.iata.org/ns/cargo#goodsDescription\",\r\n                    \"@type\": \"xsd:anyURI\"\r\n                }\r\n            }\r\n        }\r\n    ],\r\n    \"api:hasRevision\": {\r\n        \"@type\": \"http://www.w3.org/2001/XMLSchema#positiveInteger\",\r\n        \"@value\": \"1\"\r\n    }\r\n}",
                        "url": "http://localhost:8080/logistics-objects/waybill-020-68753306",
                        "client_logistics_agent_uri": "http://localhost:8080/logistics-objects/_data-holder"
                    },
                    "response": {}
                }
            ]
        }
    ]

export default postmanData;