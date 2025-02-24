import { SwimlaneDiagram } from "@/components/ne-one-simulate/swim-lane-diagram";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TestRunResults from "../components/test-run-results";

interface TestPageProps {
  params: {
    id: string
  }
}

export default function TestPage({ params }: TestPageProps) {
  const mockData = {
    actions: [
      {
        id: "1",
        actor: "Client",
        name: "Send Request",
        status: "success" as const,
      },
      {
        id: "2",
        actor: "Server",
        name: "Process Request",
        status: "success" as const,
      },
      {
        id: "3",
        actor: "Server",
        name: "Send Response",
        status: "success" as const,
      },
      {
        id: "4",
        actor: "Client",
        name: "Receive Response",
        status: "default" as const,
      },
    ],
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

      <div className="flex-col space-y-6 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Change weight of Piece</h1>
            <p className="text-muted-foreground">
              ID: TEST-1
            </p>
          </div>
        </div>

        <div className="grid gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <SwimlaneDiagram />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <TestRunResults />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>


  )
}
