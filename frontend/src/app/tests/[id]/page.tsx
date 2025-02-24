import { SwimlaneDiagram } from "@/components/ne-one-simulate/swim-lane-diagram";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Test Details: Update weight of Piece</CardTitle>
        </CardHeader>
        <CardContent>
          <SwimlaneDiagram />
        </CardContent>
      </Card>
    </div>
  )
}
