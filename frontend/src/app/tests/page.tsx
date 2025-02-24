import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/new-york/ui/card"

export const metadata: Metadata = {
  title: "Test scenarios",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {

  const data = await fs.readFile(
    path.join(process.cwd(), "/src/app/tests/data/tasks.json")
  )


  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

      <div className="flex-col space-y-6 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Test scenarios</h1>
            <p className="text-muted-foreground">
              This is a list of the test scenarios defined in the uploaded Postman collection.
            </p>
          </div>

        </div>

        <div className="grid gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable data={tasks} columns={columns} />
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
