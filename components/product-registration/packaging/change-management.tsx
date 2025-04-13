"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, User, Calendar, ArrowRight } from "lucide-react"

interface FilterProps {
  searchQuery: string
  therapeuticArea: string
  formulation: string
  market: string
}

interface ChangeRequest {
  id: string
  title: string
  description: string
  product: string
  component: string
  changeType: "material" | "supplier" | "design" | "specification" | "process"
  status: "draft" | "pending-review" | "approved" | "rejected" | "implemented"
  priority: "low" | "medium" | "high" | "critical"
  submittedBy: string
  submittedDate: string
  implementationDate: string | null
  markets: string[]
  impactAssessment: {
    regulatory: "none" | "low" | "medium" | "high"
    quality: "none" | "low" | "medium" | "high"
    supply: "none" | "low" | "medium" | "high"
    cost: "none" | "low" | "medium" | "high"
  }
}

interface ChangeHistory {
  id: string
  changeRequestId: string
  product: string
  component: string
  description: string
  fromState: string
  toState: string
  implementationDate: string
  implementedBy: string
  markets: string[]
  documents: string[]
}

// Sample data
const changeRequests: ChangeRequest[] = [
  {
    id: "cr-001",
    title: "Change PVC thickness in blister packaging",
    description: "Increase PVC film thickness from 250μm to 300μm to improve moisture barrier properties",
    product: "Cardiostat",
    component: "PVC/Aluminum blister",
    changeType: "material",
    status: "pending-review",
    priority: "medium",
    submittedBy: "Sarah Johnson",
    submittedDate: "2023-06-05",
    implementationDate: null,
    markets: ["us", "eu", "japan"],
    impactAssessment: {
      regulatory: "medium",
      quality: "low",
      supply: "low",
      cost: "medium",
    },
  },
  {
    id: "cr-002",
    title: "Change bottle supplier",
    description: "Switch HDPE bottle supplier from ContainerTech Inc. to PlasticPharma Ltd.",
    product: "Cardiostat",
    component: "HDPE bottle with child-resistant closure",
    changeType: "supplier",
    status: "approved",
    priority: "medium",
    submittedBy: "Michael Chen",
    submittedDate: "2023-05-20",
    implementationDate: "2023-08-15",
    markets: ["us", "canada"],
    impactAssessment: {
      regulatory: "medium",
      quality: "medium",
      supply: "high",
      cost: "low",
    },
  },
  {
    id: "cr-003",
    title: "Update carton artwork",
    description: "Revise carton artwork to include updated regulatory text and braille",
    product: "Neurobalance",
    component: "Cardboard carton",
    changeType: "design",
    status: "implemented",
    priority: "high",
    submittedBy: "Emily Rodriguez",
    submittedDate: "2023-04-10",
    implementationDate: "2023-06-01",
    markets: ["eu", "uk"],
    impactAssessment: {
      regulatory: "high",
      quality: "none",
      supply: "low",
      cost: "low",
    },
  },
  {
    id: "cr-004",
    title: "Modify vial stopper formulation",
    description: "Change rubber stopper formulation to reduce extractables and leachables",
    product: "Respiraclear",
    component: "Type I glass vial with rubber stopper",
    changeType: "material",
    status: "draft",
    priority: "critical",
    submittedBy: "David Kim",
    submittedDate: "2023-06-12",
    implementationDate: null,
    markets: ["us", "eu", "japan", "china"],
    impactAssessment: {
      regulatory: "high",
      quality: "high",
      supply: "medium",
      cost: "high",
    },
  },
]

const changeHistory: ChangeHistory[] = [
  {
    id: "ch-001",
    changeRequestId: "cr-003",
    product: "Neurobalance",
    component: "Cardboard carton",
    description: "Updated carton artwork with new regulatory text and braille",
    fromState: "Version 1.2 without updated warnings",
    toState: "Version 1.4 with updated warnings and braille text",
    implementationDate: "2023-06-01",
    implementedBy: "Emily Rodriguez",
    markets: ["eu", "uk"],
    documents: ["Artwork Approval Form", "Regulatory Assessment", "Implementation Report"],
  },
  {
    id: "ch-002",
    changeRequestId: "hist-001",
    product: "Cardiostat",
    component: "Package Insert",
    description: "Updated package insert with new safety information",
    fromState: "Version 3.1 without updated warnings",
    toState: "Version 3.2 with updated warnings",
    implementationDate: "2023-05-15",
    implementedBy: "Sarah Johnson",
    markets: ["us", "eu", "japan"],
    documents: ["Text Approval Form", "Regulatory Assessment", "Implementation Report"],
  },
  {
    id: "ch-003",
    changeRequestId: "hist-002",
    product: "Respiraclear",
    component: "Aluminum canister with metering valve",
    description: "Changed valve supplier due to quality issues",
    fromState: "ValveTech Inc. components",
    toState: "MedValve GmbH components",
    implementationDate: "2023-04-20",
    implementedBy: "David Kim",
    markets: ["us", "eu", "japan"],
    documents: ["Supplier Qualification Report", "Comparative Assessment", "Implementation Report"],
  },
]

export function ChangeManagement({ searchQuery, therapeuticArea, formulation, market }: FilterProps) {
  const [activeTab, setActiveTab] = useState("requests")

  // Filter change requests based on search and filters
  const filteredRequests = changeRequests.filter((request) => {
    // Search query filter
    if (
      searchQuery &&
      !request.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.product.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !request.component.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Market filter
    if (market !== "all" && !request.markets.includes(market.toLowerCase())) {
      return false
    }

    return true
  })

  // Filter change history based on search and filters
  const filteredHistory = changeHistory.filter((history) => {
    // Search query filter
    if (
      searchQuery &&
      !history.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !history.product.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !history.component.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Market filter
    if (market !== "all" && !history.markets.includes(market.toLowerCase())) {
      return false
    }

    return true
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "draft":
        return <Badge variant="outline">Draft</Badge>
      case "pending-review":
        return <Badge className="bg-blue-500">Pending Review</Badge>
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "implemented":
        return <Badge className="bg-purple-500">Implemented</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "low":
        return <Badge className="bg-green-500">Low</Badge>
      case "medium":
        return <Badge className="bg-blue-500">Medium</Badge>
      case "high":
        return <Badge className="bg-amber-500">High</Badge>
      case "critical":
        return <Badge className="bg-red-500">Critical</Badge>
      default:
        return <Badge className="bg-gray-500">{priority}</Badge>
    }
  }

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "none":
        return <Badge className="bg-green-500">None</Badge>
      case "low":
        return <Badge className="bg-blue-500">Low</Badge>
      case "medium":
        return <Badge className="bg-amber-500">Medium</Badge>
      case "high":
        return <Badge className="bg-red-500">High</Badge>
      default:
        return <Badge className="bg-gray-500">{impact}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="requests">Change Requests</TabsTrigger>
          <TabsTrigger value="history">Change History</TabsTrigger>
        </TabsList>

        <TabsContent value="requests" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Packaging Change Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Component</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">
                        <div>
                          <p>{request.title}</p>
                          <p className="text-xs text-muted-foreground">{request.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>{request.product}</TableCell>
                      <TableCell>{request.component}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {request.changeType}
                        </Badge>
                      </TableCell>
                      <TableCell>{getStatusBadge(request.status)}</TableCell>
                      <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span className="text-xs">{request.submittedDate}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <User className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span className="text-xs">{request.submittedBy}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div className="flex items-center">
                            <span className="mr-1">Reg:</span>
                            {getImpactBadge(request.impactAssessment.regulatory)}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-1">QA:</span>
                            {getImpactBadge(request.impactAssessment.quality)}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-1">Supply:</span>
                            {getImpactBadge(request.impactAssessment.supply)}
                          </div>
                          <div className="flex items-center">
                            <span className="mr-1">Cost:</span>
                            {getImpactBadge(request.impactAssessment.cost)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Packaging Change History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Component</TableHead>
                    <TableHead>Change Description</TableHead>
                    <TableHead>From/To</TableHead>
                    <TableHead>Implementation Date</TableHead>
                    <TableHead>Implemented By</TableHead>
                    <TableHead>Markets</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredHistory.map((history) => (
                    <TableRow key={history.id}>
                      <TableCell className="font-medium">{history.product}</TableCell>
                      <TableCell>{history.component}</TableCell>
                      <TableCell>{history.description}</TableCell>
                      <TableCell>
                        <div className="flex items-center text-xs">
                          <span className="text-muted-foreground">{history.fromState}</span>
                          <ArrowRight className="h-3 w-3 mx-1" />
                          <span>{history.toState}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{history.implementationDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>{history.implementedBy}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {history.markets.map((m) => (
                            <Badge key={m} variant="outline" className="text-xs">
                              {m.toUpperCase()}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
