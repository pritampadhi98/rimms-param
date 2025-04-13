"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, RefreshCw, FileText, Clock } from "lucide-react"

interface TimelineEvent {
  id: string
  type: "approval" | "update" | "submission" | "expiry" | "issue"
  product: string
  formulation: string
  market: string
  date: string
  user: {
    name: string
    avatar: string
    initials: string
  }
  details: string
}

const recentEvents: TimelineEvent[] = [
  {
    id: "evt-001",
    type: "approval",
    product: "Cardiostat",
    formulation: "Tablet 10mg",
    market: "United States",
    date: "Today at 10:23 AM",
    user: {
      name: "Sarah Johnson",
      avatar: "",
      initials: "SJ",
    },
    details: "Received final approval for extended release formulation",
  },
  {
    id: "evt-002",
    type: "update",
    product: "Neurobalance",
    formulation: "Capsule 25mg",
    market: "European Union",
    date: "Yesterday at 3:45 PM",
    user: {
      name: "Michael Chen",
      avatar: "",
      initials: "MC",
    },
    details: "Updated excipient composition to address stability concerns",
  },
  {
    id: "evt-003",
    type: "submission",
    product: "Respiraclear",
    formulation: "Inhalation Solution",
    market: "Japan",
    date: "May 15, 2023",
    user: {
      name: "Emily Rodriguez",
      avatar: "",
      initials: "ER",
    },
    details: "Submitted variation for manufacturing site change",
  },
  {
    id: "evt-004",
    type: "issue",
    product: "Dermashield",
    formulation: "Topical Cream",
    market: "Brazil",
    date: "May 12, 2023",
    user: {
      name: "David Kim",
      avatar: "",
      initials: "DK",
    },
    details: "Identified stability issue requiring reformulation",
  },
  {
    id: "evt-005",
    type: "expiry",
    product: "Immunoboost",
    formulation: "Injectable 50mg/mL",
    market: "Australia",
    date: "May 10, 2023",
    user: {
      name: "Lisa Patel",
      avatar: "",
      initials: "LP",
    },
    details: "Registration renewal deadline approaching in 30 days",
  },
]

// Additional events for detailed view
const allEvents: TimelineEvent[] = [
  ...recentEvents,
  {
    id: "evt-006",
    type: "approval",
    product: "Gastroease",
    formulation: "Tablet 20mg",
    market: "Canada",
    date: "May 8, 2023",
    user: {
      name: "Robert Wilson",
      avatar: "",
      initials: "RW",
    },
    details: "Received conditional approval pending additional stability data",
  },
  {
    id: "evt-007",
    type: "update",
    product: "Cardiostat",
    formulation: "Tablet 5mg",
    market: "United Kingdom",
    date: "May 5, 2023",
    user: {
      name: "Sarah Johnson",
      avatar: "",
      initials: "SJ",
    },
    details: "Updated product information to include new drug interactions",
  },
  {
    id: "evt-008",
    type: "submission",
    product: "Neurobalance",
    formulation: "Oral Solution",
    market: "Germany",
    date: "May 3, 2023",
    user: {
      name: "Michael Chen",
      avatar: "",
      initials: "MC",
    },
    details: "Submitted new formulation for pediatric use",
  },
  {
    id: "evt-009",
    type: "issue",
    product: "Respiraclear",
    formulation: "Inhalation Powder",
    market: "France",
    date: "May 1, 2023",
    user: {
      name: "Emily Rodriguez",
      avatar: "",
      initials: "ER",
    },
    details: "Addressed deficiency letter regarding particle size distribution",
  },
  {
    id: "evt-010",
    type: "expiry",
    product: "Dermashield",
    formulation: "Ointment",
    market: "Italy",
    date: "April 28, 2023",
    user: {
      name: "David Kim",
      avatar: "",
      initials: "DK",
    },
    details: "Completed renewal application for 5-year extension",
  },
]

export function RecentActivityTimeline({ detailed = false }: { detailed?: boolean }) {
  const events = detailed ? allEvents : recentEvents

  const getEventIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "approval":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "issue":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "update":
        return <RefreshCw className="h-4 w-4 text-blue-500" />
      case "submission":
        return <FileText className="h-4 w-4 text-purple-500" />
      case "expiry":
        return <Clock className="h-4 w-4 text-amber-500" />
    }
  }

  const getEventBadge = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "approval":
        return <Badge className="bg-green-500">Approval</Badge>
      case "issue":
        return <Badge className="bg-red-500">Issue</Badge>
      case "update":
        return <Badge className="bg-blue-500">Update</Badge>
      case "submission":
        return <Badge className="bg-purple-500">Submission</Badge>
      case "expiry":
        return <Badge className="bg-amber-500">Expiry</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div key={event.id} className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-muted bg-background">
              {getEventIcon(event.type)}
            </div>
            <div className="h-full w-px bg-muted" />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center">
              {getEventBadge(event.type)}
              <span className="ml-2 text-sm text-muted-foreground">{event.date}</span>
            </div>
            <h3 className="font-medium leading-none">
              {event.product} - {event.formulation}
            </h3>
            <p className="text-sm text-muted-foreground">{event.details}</p>
            <div className="flex items-center pt-2">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={event.user.avatar || "/placeholder.svg"} alt={event.user.name} />
                <AvatarFallback className="text-xs">{event.user.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{event.user.name}</span>
              <Badge variant="outline" className="ml-auto">
                {event.market}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
