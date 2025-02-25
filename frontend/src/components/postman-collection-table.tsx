"use client"

import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRight, ChevronDown } from "lucide-react"

type Status = "Pending" | "Failed" | "Success"

interface Request {
  id: string
  name: string
  status: Status
  lastRun: string
}

interface Group {
  id: string
  name: string
  requests: Request[]
  subgroups?: Group[]
}

const collection: Group[] = [
  {
    id: "1",
    name: "1. Simple ShipmentRecord",
    requests: [
      { id: "1.1", name: "Create Shipment Record", status: "Success", lastRun: "2023-05-15 10:30:00" },
      { id: "1.2", name: "Subscribe Carrier to Shipment Record", status: "Pending", lastRun: "2023-05-15 10:35:00" },
    ],
  },
  {
    id: "2",
    name: "2. ShipmentRecord with updated weights",
    requests: [
      { id: "2.1", name: "Create Shipment Record", status: "Failed", lastRun: "2023-05-15 11:00:00" },
      { id: "2.2", name: "Update Shipment Weight", status: "Success", lastRun: "2023-05-15 11:05:00" },
    ],
  },
]

const statusColors: Record<Status, string> = {
  Pending: "bg-yellow-200 text-yellow-800",
  Failed: "bg-red-200 text-red-800",
  Success: "bg-green-200 text-green-800",
}

const StatusBadge: React.FC<{ status: Status }> = ({ status }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>{status}</span>
)

const GroupRow: React.FC<{ group: Group }> = ({ group }) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const totalRequests = group.requests.length
  const successCount = group.requests.filter((r) => r.status === "Success").length
  const failedCount = group.requests.filter((r) => r.status === "Failed").length
  const pendingCount = group.requests.filter((r) => r.status === "Pending").length

  return (
    <>
      <TableRow className="bg-muted/50">
        <TableCell className="font-medium" colSpan={4}>
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
            {isOpen ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
            {group.name}
          </button>
        </TableCell>
        <TableCell>
          {successCount}/{totalRequests} <StatusBadge status="Success" /> {failedCount}/{totalRequests}{" "}
          <StatusBadge status="Failed" /> {pendingCount}/{totalRequests} <StatusBadge status="Pending" />
        </TableCell>
      </TableRow>
      {isOpen &&
        group.requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="pl-10">{request.id}</TableCell>
            <TableCell>{request.name}</TableCell>
            <TableCell>
              <StatusBadge status={request.status} />
            </TableCell>
            <TableCell>{request.lastRun}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
    </>
  )
}

const PostmanCollectionTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Run</TableHead>
          <TableHead>Group Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collection.map((group) => (
          <GroupRow key={group.id} group={group} />
        ))}
      </TableBody>
    </Table>
  )
}

export default PostmanCollectionTable

