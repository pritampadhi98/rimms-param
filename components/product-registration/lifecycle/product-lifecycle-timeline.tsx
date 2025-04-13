"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronDown, Calendar, CheckCircle, Clock, FileText, AlertCircle } from "lucide-react"
import { useState } from "react"

type TimelineEvent = {
  id: string
  date: string
  title: string
  description: string
  type: "milestone" | "submission" | "approval" | "renewal" | "change" | "alert"
  status: "completed" | "pending" | "upcoming" | "delayed"
}

type Product = {
  id: string
  name: string
  therapeuticArea: string
  stage: "development" | "submission" | "approved" | "marketed" | "discontinued"
  events: TimelineEvent[]
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "Cardiostat 10mg",
    therapeuticArea: "Cardiology",
    stage: "marketed",
    events: [
      {
        id: "ev-1",
        date: "2023-01-15",
        title: "Initial Development",
        description: "Formulation development initiated",
        type: "milestone",
        status: "completed",
      },
      {
        id: "ev-2",
        date: "2023-06-20",
        title: "FDA Submission",
        description: "NDA submitted to FDA",
        type: "submission",
        status: "completed",
      },
      {
        id: "ev-3",
        date: "2023-12-10",
        title: "FDA Approval",
        description: "NDA approved by FDA",
        type: "approval",
        status: "completed",
      },
      {
        id: "ev-4",
        date: "2024-06-15",
        title: "Annual Report Due",
        description: "FDA annual report submission",
        type: "renewal",
        status: "upcoming",
      },
    ],
  },
  {
    id: "prod-2",
    name: "Neurobalance 25mg",
    therapeuticArea: "Neurology",
    stage: "submission",
    events: [
      {
        id: "ev-5",
        date: "2023-03-10",
        title: "Initial Development",
        description: "Formulation development initiated",
        type: "milestone",
        status: "completed",
      },
      {
        id: "ev-6",
        date: "2023-11-05",
        title: "EMA Submission",
        description: "MAA submitted to EMA",
        type: "submission",
        status: "completed",
      },
      {
        id: "ev-7",
        date: "2024-05-20",
        title: "EMA Approval",
        description: "Expected approval date",
        type: "approval",
        status: "pending",
      },
    ],
  },
  {
    id: "prod-3",
    name: "Oncoshield 50mg",
    therapeuticArea: "Oncology",
    stage: "development",
    events: [
      {
        id: "ev-8",
        date: "2023-09-01",
        title: "Initial Development",
        description: "Formulation development initiated",
        type: "milestone",
        status: "completed",
      },
      {
        id: "ev-9",
        date: "2024-02-15",
        title: "Stability Testing",
        description: "Long-term stability initiated",
        type: "milestone",
        status: "completed",
      },
      {
        id: "ev-10",
        date: "2024-08-30",
        title: "FDA Pre-IND Meeting",
        description: "Scheduled pre-IND meeting",
        type: "milestone",
        status: "upcoming",
      },
    ],
  },
  {
    id: "prod-4",
    name: "ImmunoGuard 100mg",
    therapeuticArea: "Immunology",
    stage: "approved",
    events: [
      {
        id: "ev-11",
        date: "2022-05-10",
        title: "Initial Development",
        description: "Formulation development initiated",
        type: "milestone",
        status: "completed",
      },
      {
        id: "ev-12",
        date: "2022-11-20",
        title: "FDA Submission",
        description: "NDA submitted to FDA",
        type: "submission",
        status: "completed",
      },
      {
        id: "ev-13",
        date: "2023-07-15",
        title: "FDA Approval",
        description: "NDA approved by FDA",
        type: "approval",
        status: "completed",
      },
      {
        id: "ev-14",
        date: "2023-10-05",
        title: "Manufacturing Delay",
        description: "Production delay due to supply issues",
        type: "alert",
        status: "delayed",
      },
      {
        id: "ev-15",
        date: "2024-04-30",
        title: "Commercial Launch",
        description: "Planned market launch",
        type: "milestone",
        status: "upcoming",
      },
    ],
  },
  {
    id: "prod-5",
    name: "InfectoClear 250mg",
    therapeuticArea: "Infectious Disease",
    stage: "discontinued",
    events: [
      {
        id: "ev-16",
        date: "2021-02-15",
        title: "Initial Development",
        description: "Formulation development initiated",
        type: "milestone",
        status: "completed",
      },
      {
        id: "ev-17",
        date: "2021-08-10",
        title: "FDA Submission",
        description: "NDA submitted to FDA",
        type: "submission",
        status: "completed",
      },
      {
        id: "ev-18",
        date: "2022-03-20",
        title: "FDA Approval",
        description: "NDA approved by FDA",
        type: "approval",
        status: "completed",
      },
      {
        id: "ev-19",
        date: "2023-09-15",
        title: "Discontinuation Decision",
        description: "Decision to discontinue due to safety concerns",
        type: "milestone",
        status: "completed",
      },
      {
        id: "ev-20",
        date: "2024-03-30",
        title: "Market Withdrawal",
        description: "Complete market withdrawal",
        type: "milestone",
        status: "upcoming",
      },
    ],
  },
]

export function ProductLifecycleTimeline() {
  const [expandedProducts, setExpandedProducts] = useState<string[]>([])

  const toggleProduct = (productId: string) => {
    setExpandedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const getStatusIcon = (type: TimelineEvent["type"], status: TimelineEvent["status"]) => {
    if (status === "completed") {
      return <CheckCircle className="h-4 w-4 text-green-500" />
    } else if (status === "pending") {
      return <Clock className="h-4 w-4 text-amber-500" />
    } else if (status === "upcoming") {
      return <Calendar className="h-4 w-4 text-blue-500" />
    } else if (status === "delayed") {
      return <AlertCircle className="h-4 w-4 text-red-500" />
    }

    return <FileText className="h-4 w-4" />
  }

  const getStageColor = (stage: Product["stage"]) => {
    switch (stage) {
      case "development":
        return "bg-blue-500"
      case "submission":
        return "bg-amber-500"
      case "approved":
        return "bg-green-500"
      case "marketed":
        return "bg-purple-500"
      case "discontinued":
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-2">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50"
            onClick={() => toggleProduct(product.id)}
          >
            <div className="flex items-center gap-3">
              {expandedProducts.includes(product.id) ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
              <div className="font-medium">{product.name}</div>
              <Badge variant="outline" className="flex items-center gap-1">
                <span className={`h-2 w-2 rounded-full ${getStageColor(product.stage)}`}></span>
                {product.stage.charAt(0).toUpperCase() + product.stage.slice(1)}
              </Badge>
              <Badge variant="secondary">{product.therapeuticArea}</Badge>
            </div>
            <div className="text-sm text-muted-foreground">{product.events.length} events</div>
          </div>

          {expandedProducts.includes(product.id) && (
            <CardContent className="pt-0">
              <div className="relative ml-6 pl-6 border-l border-border">
                {product.events.map((event, index) => (
                  <div key={event.id} className={`relative pb-6 ${index === product.events.length - 1 ? "" : ""}`}>
                    <div className="absolute -left-10 mt-1.5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-background border border-border">
                        {getStatusIcon(event.type, event.status)}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <div className="text-sm font-medium text-muted-foreground min-w-[100px]">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.description}</div>
                      </div>
                      <Badge
                        variant={
                          event.status === "completed"
                            ? "default"
                            : event.status === "pending"
                              ? "secondary"
                              : event.status === "upcoming"
                                ? "outline"
                                : "destructive"
                        }
                        className="capitalize"
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}
