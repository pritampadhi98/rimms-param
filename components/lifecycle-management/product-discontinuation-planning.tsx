"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Eye, Calendar, Filter, Search, Plus, CheckCircle, AlertTriangle, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"

interface DiscontinuationProps {
  searchQuery?: string
  status?: string
  region?: string
  timeframe?: string
}

export default function ProductDiscontinuationPlanning({
  searchQuery = "",
  status = "all",
  region = "all",
  timeframe = "all",
}: DiscontinuationProps) {
  const [activeTab, setActiveTab] = useState("planned")
  const [isLoading, setIsLoading] = useState(true)
  const [searchFilter, setSearchFilter] = useState(searchQuery)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Sample discontinuation data
  const discontinuationData = [
    {
      id: "disc-001",
      product: "Gluconorm",
      formulation: "Tablets",
      strengths: ["5 mg", "10 mg"],
      status: "planned",
      reason: "Commercial viability",
      initiationDate: "2023-03-15",
      plannedExitDate: "2023-12-31",
      markets: [
        { region: "North America", country: "United States", status: "planned", date: "2023-12-31" },
        { region: "Europe", country: "European Union", status: "planned", date: "2023-12-31" },
        { region: "Asia Pacific", country: "Japan", status: "planned", date: "2023-12-31" },
      ],
      alternativeProducts: ["Cardiostat"],
      progress: 60,
      tasks: [
        { id: "task-001", name: "Initial Assessment", status: "completed", dueDate: "2023-04-15" },
        { id: "task-002", name: "Impact Analysis", status: "completed", dueDate: "2023-05-30" },
        { id: "task-003", name: "Regulatory Notification Plan", status: "completed", dueDate: "2023-06-30" },
        { id: "task-004", name: "Supply Chain Wind-Down", status: "in-progress", dueDate: "2023-09-30" },
        { id: "task-005", name: "Customer Communication", status: "in-progress", dueDate: "2023-08-15" },
        { id: "task-006", name: "Final Market Exit", status: "not-started", dueDate: "2023-12-31" },
      ],
      impactAssessment: {
        financial: "Medium - Annual revenue loss of $5M, offset by cost savings",
        patients: "Low - Alternative treatments widely available",
        regulatory: "Medium - Requires notifications in all markets",
        supply: "Low - Sufficient inventory for transition period",
        overall: "medium",
      },
      stakeholders: [
        { name: "Commercial Team", lead: "Emma Brown" },
        { name: "Regulatory Affairs", lead: "Michael Johnson" },
        { name: "Supply Chain", lead: "Robert Chen" },
        { name: "Medical Affairs", lead: "Sarah Johnson" },
      ],
      communications: [
        {
          id: "comm-001",
          audience: "Healthcare Professionals",
          channel: "Direct Mail",
          date: "2023-09-15",
          status: "planned",
        },
        { id: "comm-002", audience: "Patients", channel: "Website", date: "2023-09-15", status: "planned" },
        { id: "comm-003", audience: "Distributors", channel: "Email", date: "2023-08-01", status: "completed" },
        {
          id: "comm-004",
          audience: "Regulatory Authorities",
          channel: "Formal Notification",
          date: "2023-07-15",
          status: "completed",
        },
      ],
    },
    {
      id: "disc-002",
      product: "Analgesix",
      formulation: "Injection",
      strengths: ["50 mg/ml"],
      status: "in-progress",
      reason: "Manufacturing issues",
      initiationDate: "2023-01-10",
      plannedExitDate: "2023-09-30",
      markets: [
        { region: "North America", country: "United States", status: "in-progress", date: "2023-09-30" },
        { region: "Europe", country: "European Union", status: "in-progress", date: "2023-09-30" },
        { region: "Europe", country: "United Kingdom", status: "in-progress", date: "2023-09-30" },
      ],
      alternativeProducts: ["Painrelief XR"],
      progress: 80,
      tasks: [
        { id: "task-007", name: "Initial Assessment", status: "completed", dueDate: "2023-02-15" },
        { id: "task-008", name: "Impact Analysis", status: "completed", dueDate: "2023-03-15" },
        { id: "task-009", name: "Regulatory Notification Plan", status: "completed", dueDate: "2023-04-15" },
        { id: "task-010", name: "Supply Chain Wind-Down", status: "completed", dueDate: "2023-06-30" },
        { id: "task-011", name: "Customer Communication", status: "completed", dueDate: "2023-05-15" },
        { id: "task-012", name: "Final Market Exit", status: "in-progress", dueDate: "2023-09-30" },
      ],
      impactAssessment: {
        financial: "Low - Limited revenue impact",
        patients: "Medium - Transition to alternatives required",
        regulatory: "Medium - Requires notifications in all markets",
        supply: "High - Limited inventory for transition period",
        overall: "medium",
      },
      stakeholders: [
        { name: "Commercial Team", lead: "David Wilson" },
        { name: "Regulatory Affairs", lead: "Jane Doe" },
        { name: "Supply Chain", lead: "Robert Chen" },
        { name: "Medical Affairs", lead: "Emily Rodriguez" },
      ],
      communications: [
        {
          id: "comm-005",
          audience: "Healthcare Professionals",
          channel: "Direct Mail",
          date: "2023-05-15",
          status: "completed",
        },
        { id: "comm-006", audience: "Patients", channel: "Website", date: "2023-05-15", status: "completed" },
        { id: "comm-007", audience: "Distributors", channel: "Email", date: "2023-04-01", status: "completed" },
        {
          id: "comm-008",
          audience: "Regulatory Authorities",
          channel: "Formal Notification",
          date: "2023-03-15",
          status: "completed",
        },
      ],
    },
    {
      id: "disc-003",
      product: "Dermasoothe",
      formulation: "Cream",
      strengths: ["0.5%", "1%"],
      status: "completed",
      reason: "Portfolio rationalization",
      initiationDate: "2022-06-10",
      completionDate: "2022-12-15",
      markets: [
        { region: "North America", country: "United States", status: "completed", date: "2022-12-15" },
        { region: "North America", country: "Canada", status: "completed", date: "2022-12-15" },
        { region: "Europe", country: "European Union", status: "completed", date: "2022-12-15" },
      ],
      alternativeProducts: ["Dermacalm"],
      progress: 100,
      tasks: [
        { id: "task-013", name: "Initial Assessment", status: "completed", dueDate: "2022-07-15" },
        { id: "task-014", name: "Impact Analysis", status: "completed", dueDate: "2022-08-15" },
        { id: "task-015", name: "Regulatory Notification Plan", status: "completed", dueDate: "2022-09-15" },
        { id: "task-016", name: "Supply Chain Wind-Down", status: "completed", dueDate: "2022-11-30" },
        { id: "task-017", name: "Customer Communication", status: "completed", dueDate: "2022-10-15" },
        { id: "task-018", name: "Final Market Exit", status: "completed", dueDate: "2022-12-15" },
      ],
      impactAssessment: {
        financial: "Low - Minimal revenue impact",
        patients: "Low - Alternative treatments widely available",
        regulatory: "Low - Standard notifications only",
        supply: "Low - Sufficient inventory for transition period",
        overall: "low",
      },
      stakeholders: [
        { name: "Commercial Team", lead: "Emma Brown" },
        { name: "Regulatory Affairs", lead: "Jane Doe" },
        { name: "Supply Chain", lead: "Robert Chen" },
      ],
      communications: [
        {
          id: "comm-009",
          audience: "Healthcare Professionals",
          channel: "Direct Mail",
          date: "2022-10-15",
          status: "completed",
        },
        { id: "comm-010", audience: "Patients", channel: "Website", date: "2022-10-15", status: "completed" },
        { id: "comm-011", audience: "Distributors", channel: "Email", date: "2022-09-01", status: "completed" },
        {
          id: "comm-012",
          audience: "Regulatory Authorities",
          channel: "Formal Notification",
          date: "2022-08-15",
          status: "completed",
        },
      ],
    },
    {
      id: "disc-004",
      product: "Cardiostat",
      formulation: "Oral Solution",
      strengths: ["5 mg/ml"],
      status: "planned",
      reason: "Low demand",
      initiationDate: "2023-05-20",
      plannedExitDate: "2024-03-31",
      markets: [
        { region: "North America", country: "United States", status: "planned", date: "2024-03-31" },
        { region: "Europe", country: "European Union", status: "planned", date: "2024-03-31" },
      ],
      alternativeProducts: ["Cardiostat Tablets"],
      progress: 30,
      tasks: [
        { id: "task-019", name: "Initial Assessment", status: "completed", dueDate: "2023-06-30" },
        { id: "task-020", name: "Impact Analysis", status: "completed", dueDate: "2023-07-31" },
        { id: "task-021", name: "Regulatory Notification Plan", status: "in-progress", dueDate: "2023-09-30" },
        { id: "task-022", name: "Supply Chain Wind-Down", status: "not-started", dueDate: "2023-12-31" },
        { id: "task-023", name: "Customer Communication", status: "not-started", dueDate: "2023-11-30" },
        { id: "task-024", name: "Final Market Exit", status: "not-started", dueDate: "2024-03-31" },
      ],
      impactAssessment: {
        financial: "Low - Minimal revenue impact",
        patients: "Low - Tablet formulation widely available",
        regulatory: "Low - Standard notifications only",
        supply: "Low - Sufficient inventory for transition period",
        overall: "low",
      },
      stakeholders: [
        { name: "Commercial Team", lead: "Emma Brown" },
        { name: "Regulatory Affairs", lead: "Michael Johnson" },
        { name: "Supply Chain", lead: "Robert Chen" },
        { name: "Medical Affairs", lead: "Sarah Johnson" },
      ],
      communications: [
        {
          id: "comm-013",
          audience: "Healthcare Professionals",
          channel: "Direct Mail",
          date: "2023-12-15",
          status: "planned",
        },
        { id: "comm-014", audience: "Patients", channel: "Website", date: "2023-12-15", status: "planned" },
        { id: "comm-015", audience: "Distributors", channel: "Email", date: "2023-11-01", status: "planned" },
        {
          id: "comm-016",
          audience: "Regulatory Authorities",
          channel: "Formal Notification",
          date: "2023-10-15",
          status: "planned",
        },
      ],
    },
  ]

  // Filter discontinuations based on search and filters
  const filteredDiscontinuations = discontinuationData.filter((disc) => {
    // Search filter
    if (
      searchFilter &&
      !disc.product.toLowerCase().includes(searchFilter.toLowerCase()) &&
      !disc.formulation.toLowerCase().includes(searchFilter.toLowerCase())
    ) {
      return false
    }

    // Status filter
    if (status !== "all" && disc.status !== status) {
      return false
    }

    // Region filter
    if (region !== "all" && !disc.markets.some((m) => m.region === region)) {
      return false
    }

    // Timeframe filter
    if (timeframe === "upcoming") {
      return disc.status === "planned" || disc.status === "in-progress"
    } else if (timeframe === "completed") {
      return disc.status === "completed"
    }

    return true
  })

  // Filter discontinuations based on active tab
  const tabFilteredDiscontinuations = filteredDiscontinuations.filter((disc) => {
    if (activeTab === "planned") {
      return disc.status === "planned"
    } else if (activeTab === "in-progress") {
      return disc.status === "in-progress"
    } else if (activeTab === "completed") {
      return disc.status === "completed"
    } else if (activeTab === "all") {
      return true
    }
    return false
  })

  // Sort discontinuations by date (planned exit date or completion date)
  const sortedDiscontinuations = [...tabFilteredDiscontinuations].sort((a, b) => {
    const dateA = a.plannedExitDate || a.completionDate || ""
    const dateB = b.plannedExitDate || b.completionDate || ""
    return new Date(dateA).getTime() - new Date(dateB).getTime()
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "planned":
        return <Badge className="bg-blue-500">Planned</Badge>
      case "in-progress":
        return <Badge className="bg-amber-500">In Progress</Badge>
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "not-started":
        return <Badge className="bg-gray-500">Not Started</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "high":
        return <Badge className="bg-red-500">High</Badge>
      case "medium":
        return <Badge className="bg-amber-500">Medium</Badge>
      case "low":
        return <Badge className="bg-green-500">Low</Badge>
      default:
        return <Badge className="bg-gray-500">{impact}</Badge>
    }
  }

  const handleViewProduct = (productId: string) => {
    setSelectedProduct(productId)
  }

  const selectedProductData = selectedProduct ? discontinuationData.find((p) => p.id === selectedProduct) : null

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-40">
            <div className="space-y-2 w-full max-w-md">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
              <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (selectedProductData) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">
              {selectedProductData.product} {selectedProductData.formulation} Discontinuation
            </h2>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex flex-wrap gap-1">
                {selectedProductData.strengths.map((strength, index) => (
                  <Badge key={index} variant="outline">
                    {strength}
                  </Badge>
                ))}
              </div>
              <span className="mx-2">•</span>
              {getStatusBadge(selectedProductData.status)}
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => setSelectedProduct(null)}>
            Back to List
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Discontinuation Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Reason for Discontinuation</h4>
                <p className="text-sm">{selectedProductData.reason}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Initiation Date</h4>
                  <p className="text-sm">{selectedProductData.initiationDate}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">
                    {selectedProductData.status === "completed" ? "Completion Date" : "Planned Exit Date"}
                  </h4>
                  <p className="text-sm">{selectedProductData.completionDate || selectedProductData.plannedExitDate}</p>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Alternative Products</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProductData.alternativeProducts.map((product, index) => (
                    <Badge key={index} variant="outline">
                      {product}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Markets</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Region</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Exit Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedProductData.markets.map((market, index) => (
                      <TableRow key={index}>
                        <TableCell>{market.region}</TableCell>
                        <TableCell>{market.country}</TableCell>
                        <TableCell>{getStatusBadge(market.status)}</TableCell>
                        <TableCell>{market.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">{selectedProductData.progress}%</span>
                </div>
                <Progress value={selectedProductData.progress} className="h-2" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Impact Assessment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Financial Impact:</span>
                    <span className="text-sm">{selectedProductData.impactAssessment.financial}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Patient Impact:</span>
                    <span className="text-sm">{selectedProductData.impactAssessment.patients}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Regulatory Impact:</span>
                    <span className="text-sm">{selectedProductData.impactAssessment.regulatory}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Supply Chain Impact:</span>
                    <span className="text-sm">{selectedProductData.impactAssessment.supply}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-sm font-medium">Overall Impact:</span>
                    <span>{getImpactBadge(selectedProductData.impactAssessment.overall)}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Key Stakeholders</h4>
                <div className="space-y-2">
                  {selectedProductData.stakeholders.map((stakeholder, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm">{stakeholder.name}</span>
                      <span className="text-sm font-medium">{stakeholder.lead}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedProductData.tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{task.dueDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(task.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Communications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Audience</TableHead>
                    <TableHead>Channel</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {selectedProductData.communications.map((comm) => (
                    <TableRow key={comm.id}>
                      <TableCell className="font-medium">{comm.audience}</TableCell>
                      <TableCell>{comm.channel}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{comm.date}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(comm.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Product Discontinuation Planning</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search discontinuations..."
              className="w-[200px]"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-1" />
            New Discontinuation
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Discontinuation Plans</CardTitle>
            <div className="flex space-x-1">
              <Button
                variant={activeTab === "planned" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("planned")}
              >
                Planned
              </Button>
              <Button
                variant={activeTab === "in-progress" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("in-progress")}
              >
                In Progress
              </Button>
              <Button
                variant={activeTab === "completed" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("completed")}
              >
                Completed
              </Button>
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("all")}
              >
                All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {sortedDiscontinuations.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Formulation</TableHead>
                  <TableHead>Strengths</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Markets</TableHead>
                  <TableHead>Exit Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedDiscontinuations.map((disc) => (
                  <TableRow key={disc.id}>
                    <TableCell className="font-medium">{disc.product}</TableCell>
                    <TableCell>{disc.formulation}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {disc.strengths.map((strength, index) => (
                          <Badge key={index} variant="outline">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{disc.reason}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {Array.from(new Set(disc.markets.map((m) => m.region))).map((region, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {region}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span>{disc.plannedExitDate || disc.completionDate}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(disc.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={disc.progress} className="h-2 w-[60px]" />
                        <span className="text-xs">{disc.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewProduct(disc.id)}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center h-60">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Discontinuations Found</h3>
              <p className="text-muted-foreground text-center mb-4">
                No product discontinuation plans match your current filters
              </p>
              <Button onClick={() => setActiveTab("all")}>View All Plans</Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Discontinuation Statistics</CardTitle>
            <CardDescription>Overview of product discontinuation status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-md p-4">
                <div className="text-2xl font-bold">
                  {discontinuationData.filter((d) => d.status === "planned").length}
                </div>
                <div className="text-sm text-muted-foreground">Planned Discontinuations</div>
              </div>
              <div className="border rounded-md p-4">
                <div className="text-2xl font-bold">
                  {discontinuationData.filter((d) => d.status === "in-progress").length}
                </div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="border rounded-md p-4">
                <div className="text-2xl font-bold">
                  {discontinuationData.filter((d) => d.status === "completed").length}
                </div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="border rounded-md p-4">
                <div className="text-2xl font-bold">
                  {Array.from(new Set(discontinuationData.flatMap((d) => d.markets.map((m) => m.country)))).length}
                </div>
                <div className="text-sm text-muted-foreground">Affected Markets</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Discontinuation Reasons</h4>
              <div className="space-y-2">
                {Array.from(new Set(discontinuationData.map((d) => d.reason))).map((reason) => (
                  <div key={reason} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{reason}</span>
                    </div>
                    <span className="font-medium">{discontinuationData.filter((d) => d.reason === reason).length}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>Key discontinuation milestones in the next 90 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discontinuationData
                .filter((d) => d.status !== "completed")
                .flatMap((d) =>
                  d.tasks
                    .filter(
                      (t) =>
                        t.status !== "completed" &&
                        new Date(t.dueDate) > new Date() &&
                        new Date(t.dueDate) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                    )
                    .map((t) => ({ ...t, product: d.product, formulation: d.formulation })),
                )
                .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                .slice(0, 5)
                .map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <div>
                        <p className="font-medium">{task.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {task.product} {task.formulation}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <p className="text-sm font-medium">Due Date:</p>
                        <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                      </div>
                      {getStatusBadge(task.status)}
                    </div>
                  </div>
                ))}
              {discontinuationData
                .filter((d) => d.status !== "completed")
                .flatMap((d) =>
                  d.tasks.filter(
                    (t) =>
                      t.status !== "completed" &&
                      new Date(t.dueDate) > new Date() &&
                      new Date(t.dueDate) < new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                  ),
                ).length === 0 && (
                <div className="flex flex-col items-center justify-center h-40">
                  <p className="text-muted-foreground">No upcoming milestones in the next 90 days</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
