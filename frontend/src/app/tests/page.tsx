"use client";

import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
const postmanData = JSON.parse(localStorage.getItem("runCollectionResponse") || "[]");
import { chownSync } from "fs";


export default function TestPage() {
  
  // counter 
  // id is a counter
  console.log(postmanData);
  const formattedData = postmanData.map((item: any, index: number) => {
    const result = item.requests.reduce(
      (acc: any, request: any) => {
      request.assertions.forEach((assertion: any) => {
        if (assertion.passed) {
        acc.passed += 1;
        } else {
        acc.failed += 1;
        }
      });
      return acc;
      },
      { passed: 0, failed: 0 }
    );

    return {
      id: `TEST-${index + 1}`,
      title: item.test_case,
      result: `${result.passed}/${result.passed + result.failed}`,
      passed: true,
    };
  });
  
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex-col space-y-6 p-8">
        <div className="flex items-center justify-between"></div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Test scenarios</h1>
          <p className="text-muted-foreground">
            Overview of executed test scenarios and their results.
          </p>
        </div>
      </div>

      <div className="grid gap-4 mt-4">
        <Card>
          <CardContent className="pt-6">
            <DataTable data={formattedData} columns={columns} />
          </CardContent>
        </Card>
      </div>
    </div>

  )
}
