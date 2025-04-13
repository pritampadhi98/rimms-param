"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Eye,
  Calendar,
  Download,
  Filter,
  Search,
  Plus,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  BarChart,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

interface RegulatoryMilestoneTrackingProps {
  searchQuery?: string
  productFilter?: string
  marketFilter?: string
  statusFilter?: string
  typeFilter?: string
}

export function RegulatoryMilestoneTracking({
  searchQuery = "",
  productFilter = "all",
  marketFilter = "all",
  statusFilter = "all",
  typeFilter = "all",
}: RegulatoryMilestoneTrackingProps) {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [isLoading, setIsLoading] = useState(true)
  const [searchQueryLocal, setSearchQueryLocal] = useState(searchQuery)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Sample milestone data
  const milestoneData = [
    {
      id: "mile-001",
      title: "EU Renewal Submission",
      product: "Cardiostat",
      type: "renewal",
      market: "eu",
      dueDate: "2023-08-30",
      status: "pending",
      priority: "high",
      assignedTo: "Jane Smith",
      description: "5-year renewal of marketing authorization",
      progress: 75,
      documents: [
        { id: "doc-001", name: "Renewal Application Form", status: "completed" },
        { id: "doc-002", name: "Updated SmPC", status: "completed" },
        { id: "doc-003", name: "PSUR Summary", status: "in-progress" },
      ],
    },
    {
      id: "mile-002",
      title: "Japan Post-Approval Commitment",
      product: "Cardiostat",
      type: "commitment",
      market: "japan",
      dueDate: "2023-09-15",
      status: "pending",
      priority: "medium",
      assignedTo: "Robert Chen",
      description: "Submission of additional stability data",
      progress: 50,
      documents: [
        { id: "doc-004", name: "Stability Protocol", status: "completed" },
        { id: "doc-005", name: "Stability Data Report", status: "in-progress" },
      ],
    },
    {
      id: "mile-003",
      title: "US NDA Submission",
      product: "Neurobalance",
      type: "submission",
      market: "us",
      dueDate: "2023-10-05",
      status: "pending",
      priority: "high",
      assignedTo: "Emily Rodriguez",
      description: "Initial NDA submission",
      progress: 30,
      documents: [
        { id: "doc-006", name: "Module 1", status: "completed" },
        { id: "doc-007", name: "Module 2", status: "in-progress" },
        { id: "doc-008", name: "Module 3", status: "not-started" },
        { id: "doc-009", name: "Module 4", status: "not-started" },
        { id: "doc-010", name: "Module 5", status: "not-started" },
      ],
    },
    {
      id: "mile-004",
      title: "China Manufacturing Site Change",
      product: "Respiraclear",
      type: "variation",
      market: "china",
      dueDate: "2023-07-20",
      status: "overdue",
      priority: "high",
      assignedTo: "Robert Chen",
      description: "Manufacturing site change variation",
      progress: 60,
      documents: [
        { id: "doc-011", name: "Site Master File", status: "completed" },
        { id: "doc-012", name: "Comparability Protocol", status: "completed" },
        { id: "doc-013", name: "Validation Report", status: "in-progress" },
      ],
    },
    {
      id: "mile-005",
      title: "Phase III Data Submission",
      product: "Oncotarget",
      type: "clinical",
      market: "global",
      dueDate: "2023-07-15",
      status: "completed",
      priority: "high",
      assignedTo: "Sarah Johnson",
      description: "Final clinical study report submission",
      progress: 100,
      documents: [
        { id: "doc-014", name: "Clinical Study Report", status: "completed" },
        { id: "doc-015", name: "Statistical Analysis", status: "completed" },
        { id: "doc-016", name: "Data Listings", status: "completed" },
      ],
    },
    {
      id: "mile-006",
      title: "FDA Pre-NDA Meeting",
      product: "Oncotarget",
      type: "meeting",
      market: "us",
      dueDate: "2023-09-30",
      status: "pending",
      priority: "medium",
      assignedTo: "Sarah Johnson",
      description: "FDA pre-submission meeting",
      progress: 40,
      documents: [
        { id: "doc-017", name: "Meeting Request", status: "completed" },
        { id: "doc-018", name: "Briefing Document", status: "in-progress" },
        { id: "doc-019", name: "Presentation Slides", status: "not-started" },
      ],
    },
    {
      id: "mile-007",
      title: "Phase II Interim Analysis",
      product: "Immunoboost",
      type: "clinical",
      market: "global",
      dueDate: "2023-08-10",
      status: "at-risk",
      priority: "high",
      assignedTo: "Michael Johnson",
      description: "Interim efficacy and safety analysis",
      progress: 65,
      documents: [
        { id: "doc-020", name: "Statistical Analysis Plan", status: "completed" },
        { id: "doc-021", name: "Data Management Plan", status: "completed" },
        { id: "doc-022", name: "Interim Analysis Report", status: "in-progress" },
      ],
    },
    {
      id: "mile-008",
      title: "EU Discontinuation Notification",
      product: "Gluconorm",
      type: "discontinuation",
      market: "eu",
      dueDate: "2023-07-30",
      status: "pending",
      priority: "medium",
      assignedTo: "Jane Smith",
      description: "Final discontinuation notification to authorities",
      progress: 90,
      documents: [
        { id: "doc-023", name: "Discontinuation Form", status: "completed" },
        { id: "doc-024", name: "Impact Assessment", status: "completed" },
        { id: "doc-025", name: "Communication Plan", status: "in-progress" },
      ],
    },
    {
      id: "mile-009",
      title: "Annual Report Submission",
      product: "Cardiostat",
      type: "report",
      market: "us",
      dueDate: "2023-11-15",
      status: "pending",
      priority: "medium",
      assignedTo: "Jane Smith",
      description: "Annual report to FDA",
      progress: 10,
      documents: [
        { id: "doc-026", name: "Product Summary", status: "in-progress" },
        { id: "doc-027", name: "Manufacturing Changes", status: "not-started" },
        { id: "doc-028", name: "Distribution Data", status: "not-started" },
      ],
    },
    {
      id: "mile-010",
      title: "PSUR Submission",
      product: "Neurobalance",
      type: "report",
      market: "eu",
      dueDate: "2023-12-05",
      status: "pending",
      priority: "medium",
      assignedTo: "Emily Rodriguez",
      description: "Periodic Safety Update Report",
      progress: 5,
      documents: [
        { id: "doc-029", name: "Safety Data Analysis", status: "not-started" },
        { id: "doc-030", name: "Benefit-Risk Assessment", status: "not-started" },
        { id: "doc-031", name: "PSUR Document", status: "not-started" },
      ],
    },
  ]

  // Filter milestones based on search and filters
  const filteredMilestones = milestoneData.filter((milestone) => {
    // Search query filter
    if (
      searchQueryLocal &&
      !milestone.title.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !milestone.product.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !milestone.description.toLowerCase().includes(searchQueryLocal.toLowerCase())
    ) {
      return false
    }

    // Product filter
    if (productFilter !== "all" && milestone.product !== productFilter) {
      return false
    }

    // Market filter
    if (marketFilter !== "all" && milestone.market !== marketFilter) {
      return false
    }

    // Status filter
    if (statusFilter !== "all" && milestone.status !== statusFilter) {
      return false
    }

    // Type filter
    if (typeFilter !== "all" && milestone.type !== typeFilter) {
      return false
    }

    return true
  })

  // Filter milestones based on tab
  const tabFilteredMilestones = filteredMilestones.filter((milestone) => {
    if (activeTab === "upcoming") {
      return milestone.status === "pending" || milestone.status === "at-risk"
    }
    if (activeTab === "overdue") {
      return milestone.status === "overdue"
    }
    if (activeTab === "completed") {
      return milestone.status === "completed"
    }
    return true
  })

  // Sort milestones by due date
  const sortedMilestones = [...tabFilteredMilestones].sort((a, b) => {
    if (activeTab === "completed") {
      // For completed tab, sort by most recently completed first
      return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
    }
    // For other tabs, sort by earliest due date first
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "pending":
        return <Badge className="bg-blue-500">Pending</Badge>
      case "overdue":
        return <Badge className="bg-red-500">Overdue</Badge>
      case "at-risk":
        return <Badge className="bg-amber-500">At Risk</Badge>
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>
      case "not-started":
        return <Badge className="bg-gray-500">Not Started</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            High
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Low
          </Badge>
        )
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "submission":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Submission
          </Badge>
        )
      case "renewal":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Renewal
          </Badge>
        )
      case "variation":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Variation
          </Badge>
        )
      case "commitment":
        return (
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
            Commitment
          </Badge>
        )
      case "clinical":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Clinical
          </Badge>
        )
      case "meeting":
        return (
          <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
            Meeting
          </Badge>
        )
      case "report":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Report
          </Badge>
        )
      case "discontinuation":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Discontinuation
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "overdue":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "at-risk":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

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

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="upcoming">Upcoming Milestones</TabsTrigger>
          <TabsTrigger value="overdue">Overdue Milestones</TabsTrigger>
          <TabsTrigger value="completed">Completed Milestones</TabsTrigger>
          <TabsTrigger value="all">All Milestones</TabsTrigger>
        </TabsList>

        <div className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Regulatory Milestones</CardTitle>
                <CardDescription>
                  {activeTab === "upcoming"
                    ? "Upcoming regulatory milestones and deadlines"
                    : activeTab === "overdue"
                      ? "Overdue regulatory milestones"
                      : activeTab === "completed"
                        ? "Completed regulatory milestones"
                        : "All regulatory milestones"}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search milestones..."
                    className="w-[200px]"
                    value={searchQueryLocal}
                    onChange={(e) => setSearchQueryLocal(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Milestone
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Milestone</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Market</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedMilestones.map((milestone) => (
                    <TableRow key={milestone.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {getStatusIcon(milestone.status)}
                          <span className="ml-2">{milestone.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>{milestone.product}</TableCell>
                      <TableCell>{getTypeBadge(milestone.type)}</TableCell>
                      <TableCell className="uppercase">{milestone.market}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{milestone.dueDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(milestone.status)}</TableCell>
                      <TableCell>{getPriorityBadge(milestone.priority)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={milestone.progress} className="h-2 w-[60px]" />
                          <span className="text-xs text-muted-foreground">{milestone.progress}%</span>
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
        </div>

        <TabsContent value="upcoming" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Next 30 days regulatory deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedMilestones
                    .filter((m) => {
                      const dueDate = new Date(m.dueDate)
                      const today = new Date()
                      const thirtyDaysFromNow = new Date()
                      thirtyDaysFromNow.setDate(today.getDate() + 30)
                      return dueDate >= today && dueDate <= thirtyDaysFromNow
                    })
                    .slice(0, 5)
                    .map((milestone) => (
                      <div key={milestone.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{milestone.title}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{milestone.product}</span>
                            <span className="mx-1">•</span>
                            <span className="uppercase">{milestone.market}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{milestone.dueDate}</span>
                          </div>
                          <div className="mt-1">{getPriorityBadge(milestone.priority)}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Milestone Progress</CardTitle>
                <CardDescription>Progress of upcoming milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedMilestones.slice(0, 5).map((milestone) => (
                    <div key={milestone.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {getStatusIcon(milestone.status)}
                          <span className="ml-2 font-medium">{milestone.title}</span>
                        </div>
                        <span className="text-sm">{milestone.progress}%</span>
                      </div>
                      <Progress value={milestone.progress} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Assigned to: {milestone.assignedTo}</span>
                        <span>Due: {milestone.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Milestone Documents</CardTitle>
              <CardDescription>Required documents for regulatory milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mile-001">
                <TabsList className="w-full mb-4 flex flex-nowrap overflow-x-auto">
                  {milestoneData.slice(0, 5).map((milestone) => (
                    <TabsTrigger key={milestone.id} value={milestone.id} className="flex-shrink-0">
                      {milestone.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {milestoneData.slice(0, 5).map((milestone) => (
                  <TabsContent key={milestone.id} value={milestone.id}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(milestone.status)}
                          {getPriorityBadge(milestone.priority)}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Required Documents</span>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-1" />
                            Add Document
                          </Button>
                        </div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Document</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {milestone.documents.map((doc) => (
                              <TableRow key={doc.id}>
                                <TableCell className="font-medium">
                                  <div className="flex items-center">
                                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                                    {doc.name}
                                  </div>
                                </TableCell>
                                <TableCell>{getStatusBadge(doc.status)}</TableCell>
                                <TableCell className="text-right">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Milestone Analytics</CardTitle>
              <CardDescription>Performance metrics for regulatory milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">On-Time Completion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold">85%</div>
                      <div className="text-sm text-muted-foreground mt-1">Last 12 months</div>
                      <div className="flex items-center text-green-500 text-sm mt-2">
                        <span>↑ 5% from previous period</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Average Completion Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold">28</div>
                      <div className="text-sm text-muted-foreground mt-1">Days before deadline</div>
                      <div className="flex items-center text-green-500 text-sm mt-2">
                        <span>↑ 3 days from previous period</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Milestone Success Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold">92%</div>
                      <div className="text-sm text-muted-foreground mt-1">Approval rate</div>
                      <div className="flex items-center text-green-500 text-sm mt-2">
                        <span>↑ 2% from previous period</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Milestone Completion Trend</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <BarChart className="h-4 w-4 mr-1" />
                      View Detailed Reports
                    </Button>
                  </div>
                </div>
                <div className="p-4 border rounded-md bg-muted/20">
                  <p className="text-center text-muted-foreground">
                    Milestone completion trend visualization would appear here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default RegulatoryMilestoneTracking
