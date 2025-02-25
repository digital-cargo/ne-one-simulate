"use client";
import { CheckCircle, XCircle } from "lucide-react"

interface Assertion {
  assertion: string;
  passed: boolean;
}

interface RequestDetails {
  method: string;
  url: string;
  headers: Record<string, string>;
  body: string;
  client_logistics_agent_uri: string;
}

interface Request {
  name: string;
  assertions: Assertion[];
  request: RequestDetails;
  response: Record<string, any>;
  actor: {
    name: string;
    color: string;
    serverEndpoint: string;
  };
}

interface TestRunResultsProps {
  data?: Request[];
}

const TestRunResults: React.FC<TestRunResultsProps> = ({ data = [] }) => {
//     console.log("okay"),
//   console.log(JSON.stringify(data, null, 2));
  return (
    <div className="border-t border-gray-200">
      <dl>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6`}
          >
            <dt className="text-sm font-medium text-gray-500">
              
                  <strong>{item.actor.name}</strong>
              
            </dt>
            <dt className="text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="mb-2">
                <span className="font-semibold">{item.request.method}</span>{" "}
                {item.request.url}
              </div>
              {item.assertions?.map((assertion, assertIndex) => (
                <div
                  key={assertIndex}
                  className={`flex items-center ${assertion.passed ? 'text-green-600' : 'text-red-600'}`}
                >
                  {assertion.passed ? (
                    <CheckCircle className="h-5 w-5 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 mr-2" />
                  )}
                  {assertion.assertion}
                </div>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default TestRunResults;

