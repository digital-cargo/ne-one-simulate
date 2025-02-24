"use client"

import {
  BookOpen,
  Bot,
  FileText,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquarePlay,
  SquareTerminal,
  Workflow
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
//import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from "@/components/ui/sidebar"
import Image from "next/image"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ShipmentRecord",
      logo: FileText,
      plan: "Use Case",
    },
    {
      name: "ShipmentTracking",
      logo: Map,
      plan: "Use Case",
    },
  ],
  navMain: [
    {
      title: "Simulations",
      url: "#",
      icon: SquarePlay,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "History",
          url: "#",
        },
      ],
    },
    {
      title: "Test scenarios",
      url: "#",
      isActive: true,
      icon: Workflow,
      items: [
        {
          title: "Requests",
          url: "/requests",
        },
        {
          "title": "Used LogisticsObjects",
          "url": "#"
        }
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        {
          title: "Actors",
          url: "#",
        }
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-center py-4">
          <Image
            src="/logo.svg"
            alt="NE:ONE simulate logo"
            width={160}
            height={40}
            priority
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
        <TeamSwitcher teams={data.teams} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
