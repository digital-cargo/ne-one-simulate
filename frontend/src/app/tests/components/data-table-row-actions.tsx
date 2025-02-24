"use client"

import { Row } from "@tanstack/react-table"
import { Eye } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter()
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.push(`/tests/${row.id}`)}
      className="h-8 w-8 p-0"
    >
      <Eye className="h-4 w-4" />
      <span className="sr-only">Inspect test</span>
    </Button>
  )
}
