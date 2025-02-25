"use client";
import { SwimlaneDiagram } from "@/components/ne-one-simulate/swim-lane-diagram";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestRunResults from "../components/test-run-results";
import { use } from "react";
import actors from "@/config/actors";

interface TestPageProps {
  params: Promise<{ id: string }>;
}

function getActorFromUri(uri: string) {
  const serverEndpoint = new URL(uri).origin;
  return actors.find(actor => actor.serverEndpoint === serverEndpoint) || {
    name: 'Unknown',
    color: '#666666',
    serverEndpoint
  };
}

export default function TestPage({ params }: TestPageProps) {
  const resolvedParams = use(params);  
  const testIndex = Math.max(Number(resolvedParams.id.split('-').pop() ?? 0) - 1, 0);
  const runCollectionResponse = JSON.parse(localStorage.getItem("runCollectionResponse") || "[]");
  const testData = runCollectionResponse[testIndex] || {};
  
  // Enhance test data with actor information
  const enhancedTestData = {
    ...testData,
    requests: testData.requests?.map((request: any) => ({
      ...request,
      actor: getActorFromUri(request.request.client_logistics_agent_uri)
    }))
  };

  

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex-col space-y-6 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Change weight of Piece</h1>
            <p className="text-muted-foreground">
              ID: {resolvedParams.id}
            </p>
          </div>
        </div>

        <div className="grid gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <SwimlaneDiagram data={enhancedTestData.requests} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <TestRunResults data={enhancedTestData.requests} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
