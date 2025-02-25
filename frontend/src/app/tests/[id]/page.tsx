"use client";
import { SwimlaneDiagram } from "@/components/ne-one-simulate/swim-lane-diagram";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestRunResults from "../components/test-run-results";
import { use } from "react";

interface TestPageProps {
  params: Promise<{ id: string }>;
}

export default function TestPage({ params }: TestPageProps) {
  const resolvedParams = use(params);
  const testIndex = Math.max(Number(resolvedParams.id.split('-').pop() ?? 0) - 1, 0);
  const runCollectionResponse = JSON.parse(localStorage.getItem("runCollectionResponse") || "[]");
  const testData = runCollectionResponse[testIndex] || {};
  
  const mockData = {
    actions: [
      { id: "1", actor: "Client", name: "Send Request", status: "success" as const },
      { id: "2", actor: "Server", name: "Process Request", status: "success" as const },
      { id: "3", actor: "Server", name: "Send Response", status: "success" as const },
      { id: "4", actor: "Client", name: "Receive Response", status: "default" as const },
    ],
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex-col space-y-6 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Change weight of Piece</h1>
            <p className="text-muted-foreground">
              ID: {resolvedParams.id} (Test Index: {testIndex})
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
              <TestRunResults data={testData.requests} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
