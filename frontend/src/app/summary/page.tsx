import { AppSidebar } from "@/components/app-sidebar"
import TestReport from "@/components/test-report"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    
      
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <TestReport />
        </div>
      
  )
}
