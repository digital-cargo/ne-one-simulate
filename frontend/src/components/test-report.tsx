"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Timer, CheckCircle2, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for demonstration
const testResults = {
  summary: {
    total: 156,
    passed: 142,
    failed: 14,
    duration: "45.3s",
  },
  byActor: {
    "Carrier": { total: 45, passed: 42, failed: 3 },
    "Forwarder": { total: 62, passed: 55, failed: 7 },
    "GHA": { total: 49, passed: 45, failed: 4 },
  },
  failedTests: [
    { test_step: "Update Non-Existing ShipmentRecord", test_case: "ShipmentRecord", duration: "2.3s", error: "ShipmentRecord does not exist" },
    { test_step: "Update Weight in Shipment", test_case: "ShipmentRecord", duration: "13.3s", error: "ShipmentRecord does not exist" },
    { test_step: "Update Weight in Shipment", test_case: "ShipmentRecord", duration: "9.3s", error: "Something else" },
  ],
}

export default function TestReport() {
  const [formattedDate, setFormattedDate] = useState<string>("")
  
  useEffect(() => {
    setFormattedDate(new Date().toLocaleString('en-US', { 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }))
  }, [])

  const chartData = [
    { name: "Passed", value: testResults.summary.passed },
    { name: "Failed", value: testResults.summary.failed },
  ]

  const categoryData = Object.entries(testResults.byActor).map(([name, data]) => ({
    name,
    value: data.total,
  }))

  const COLORS = {
    chart: ["#4ade80", "#ff6b6b"],
    category: ["#fcba03", "#fc03c6", "#078f91"],
  }

  return (
    <div className="flex-col space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">
            Simulation completed on {formattedDate}
          </p>
        </div>
        <Button>Download Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testResults.summary.total}</div>
            <p className="text-xs text-muted-foreground">Duration: {testResults.summary.duration}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Passed Tests</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testResults.summary.passed}</div>
            <p className="text-xs text-muted-foreground">
              Success Rate: {((testResults.summary.passed / testResults.summary.total) * 100).toFixed(1)}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Requests</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testResults.summary.failed}</div>
            <p className="text-xs text-muted-foreground">
              Failure Rate: {((testResults.summary.failed / testResults.summary.total) * 100).toFixed(1)}%
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Test Results Distribution</CardTitle>
            <CardDescription>Overall pass/fail ratio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS.chart[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tests by Actors</CardTitle>
            <CardDescription>Distribution across involved actors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    paddingAngle={5}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS.category[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Failed Tests</CardTitle>
          <CardDescription>Detailed information about failed test cases</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                <TableHead>Test case</TableHead>
                <TableHead>Step</TableHead>                  
                  <TableHead>Duration</TableHead>
                  <TableHead>Error Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testResults.failedTests.map((test, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{test.test_case}</TableCell>
                    <TableCell>{test.test_step}</TableCell>
                    <TableCell>{test.duration}</TableCell>
                    <TableCell className="text-red-500">{test.error}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

