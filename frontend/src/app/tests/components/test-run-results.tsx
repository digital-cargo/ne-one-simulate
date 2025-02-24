import { CheckCircle } from "lucide-react"

export default function TestRunResults() {
    return (


        <div className="border-t border-gray-200">
            <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Create Waybill</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <div className="mb-2">
                            <span className="font-semibold">POST</span>{" "}
                            http://localhost:8989/realms/neone/protocol/openid-connect/token
                            <span className="ml-2 text-green-600">[200 OK, 2.05kB, 24ms]</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-semibold">POST</span> http://localhost:8080/logistics-objects
                            <span className="ml-2 text-green-600">[201 Created, 166B, 116ms]</span>
                        </div>
                        <div className="flex items-center text-green-600">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Status code is 201
                        </div>
                        <div className="flex items-center text-green-600">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Response has 'Location' header
                        </div>
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Get Waybill</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <div className="mb-2">
                            <span className="font-semibold">GET</span>{" "}
                            http://localhost:8080/logistics-objects/waybill-020-31021847
                            <span className="ml-2 text-green-600">[200 OK, 722B, 250ms]</span>
                        </div>
                        <div className="flex items-center text-green-600">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Waybill exists
                        </div>
                    </dd>
                </div>
            </dl>
        </div>

    )
}

