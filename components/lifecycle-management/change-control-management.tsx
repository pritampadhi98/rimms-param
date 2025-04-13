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
  BarChart4,
  Users,
  ArrowRight,
  Clipboard,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

interface ChangeControlManagementProps {
  searchQuery?: string
  productFilter?: string
  statusFilter?: string
  typeFilter?: string
  priorityFilter?: string
}

export function ChangeControlManagement({
  searchQuery = "",
  productFilter = "all",
  statusFilter = "all",
  typeFilter = "all",
  priorityFilter = "all",
}: ChangeControlManagementProps) {
  const [activeTab, setActiveTab] = useState("active")
  const [isLoading, setIsLoading] = useState(true)
  const [searchQueryLocal, setSearchQueryLocal] = useState(searchQuery)
  const [selectedChange, setSelectedChange] = useState<string | null>(null)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Sample change control data
  const changeControlData = [
    {
      id: "cc-001",
      title: "Cardiostat Tablet Formulation Update",
      type: "formulation",
      product: "Cardiostat",
      initiatedDate: "2023-05-15",
      targetCompletionDate: "2023-09-30",
      status: "in-progress",
      priority: "high",
      initiatedBy: "John Smith",
      assignedTo: "Sarah Johnson",
      description: "Update to excipient composition to improve stability",
      justification: "Stability studies showed potential for improved shelf life with modified formulation",
      regulatoryImpact: "medium",
      markets: ["us", "eu", "japan"],
      progress: 65,
      currentStage: "implementation",
      stages: [
        { id: "stage-001", name: "Initiation", status: "completed", completedDate: "2023-05-15" },
        { id: "stage-002", name: "Risk Assessment", status: "completed", completedDate: "2023-06-10" },
        { id: "stage-003", name: "Planning", status: "completed", completedDate: "2023-07-05" },
        { id: "stage-004", name: "Implementation", status: "in-progress", startDate: "2023-07-10" },
        { id: "stage-005", name: "Verification", status: "pending" },
        { id: "stage-006", name: "Closure", status: "pending" },
      ],
      documents: [
        { id: "doc-001", name: "Change Request Form", status: "approved" },
        { id: "doc-002", name: "Risk Assessment Report", status: "approved" },
        { id: "doc-003", name: "Implementation Plan", status: "approved" },
        { id: "doc-004", name: "Stability Protocol", status: "in-review" },
      ],
      approvals: [
        { id: "app-001", role: "Quality Assurance", approver: "Jane Doe", status: "approved", date: "2023-06-15" },
        {
          id: "app-002",
          role: "Regulatory Affairs",
          approver: "Michael Johnson",
          status: "approved",
          date: "2023-06-18",
        },
        {
          id: "app-003",
          role: "Manufacturing",
          approver: "Robert Chen",
          status: "approved",
          date: "2023-06-20",
        },
      ],
    },
    {
      id: "cc-002",
      title: "Respiraclear Manufacturing Site Transfer",
      type: "manufacturing",
      product: "Respiraclear",
      initiatedDate: "2023-04-10",
      targetCompletionDate: "2023-10-15",
      status: "in-progress",
      priority: "high",
      initiatedBy: "Emily Rodriguez",
      assignedTo: "Robert Chen",
      description: "Transfer of manufacturing from Site A to Site B",
      justification: "Increased capacity and cost optimization",
      regulatoryImpact: "high",
      markets: ["us", "eu", "japan", "china"],
      progress: 40,
      currentStage: "implementation",
      stages: [
        { id: "stage-007", name: "Initiation", status: "completed", completedDate: "2023-04-10" },
        { id: "stage-008", name: "Risk Assessment", status: "completed", completedDate: "2023-05-20" },
        { id: "stage-009", name: "Planning", status: "completed", completedDate: "2023-06-15" },
        { id: "stage-010", name: "Implementation", status: "in-progress", startDate: "2023-06-20" },
        { id: "stage-011", name: "Verification", status: "pending" },
        { id: "stage-012", name: "Closure", status: "pending" },
      ],
      documents: [
        { id: "doc-005", name: "Change Request Form", status: "approved" },
        { id: "doc-006", name: "Site Transfer Protocol", status: "approved" },
        { id: "doc-007", name: "Comparability Protocol", status: "approved" },
        { id: "doc-008", name: "Validation Master Plan", status: "in-review" },
        { id: "doc-009", name: "Regulatory Strategy", status: "approved" },
      ],
      approvals: [
        { id: "app-004", role: "Quality Assurance", approver: "Jane Doe", status: "approved", date: "2023-05-25" },
        {
          id: "app-005",
          role: "Regulatory Affairs",
          approver: "Michael Johnson",
          status: "approved",
          date: "2023-05-28",
        },
        {
          id: "app-006",
          role: "Manufacturing",
          approver: "Robert Chen",
          status: "approved",
          date: "2023-05-30",
        },
        {
          id: "app-007",
          role: "Supply Chain",
          approver: "Lisa Wong",
          status: "approved",
          date: "2023-06-02",
        },
      ],
    },
    {
      id: "cc-003",
      title: "Neurobalance Packaging Update",
      type: "packaging",
      product: "Neurobalance",
      initiatedDate: "2023-06-05",
      targetCompletionDate: "2023-09-15",
      status: "in-progress",
      priority: "medium",
      initiatedBy: "Sarah Johnson",
      assignedTo: "Emily Rodriguez",
      description: "Update to packaging design and materials",
      justification: "Improved child-resistant features and sustainability goals",
      regulatoryImpact: "low",
      markets: ["eu", "uk", "canada"],
      progress: 50,
      currentStage: "planning",
      stages: [
        { id: "stage-013", name: "Initiation", status: "completed", completedDate: "2023-06-05" },
        { id: "stage-014", name: "Risk Assessment", status: "completed", completedDate: "2023-07-01" },
        { id: "stage-015", name: "Planning", status: "in-progress", startDate: "2023-07-05" },
        { id: "stage-016", name: "Implementation", status: "pending" },
        { id: "stage-017", name: "Verification", status: "pending" },
        { id: "stage-018", name: "Closure", status: "pending" },
      ],
      documents: [
        { id: "doc-010", name: "Change Request Form", status: "approved" },
        { id: "doc-011", name: "Packaging Specifications", status: "in-review" },
        { id: "doc-012", name: "Artwork Proofs", status: "in-review" },
        { id: "doc-013", name: "Regulatory Assessment", status: "approved" },
      ],
      approvals: [
        { id: "app-008", role: "Quality Assurance", approver: "Jane Doe", status: "approved", date: "2023-07-10" },
        {
          id: "app-009",
          role: "Regulatory Affairs",
          approver: "Michael Johnson",
          status: "approved",
          date: "2023-07-12",
        },
        {
          id: "app-010",
          role: "Packaging",
          approver: "David Lee",
          status: "in-review",
        },
      ],
    },
    {
      id: "cc-004",
      title: "Cardiostat XR Analytical Method Update",
      type: "analytical",
      product: "Cardiostat XR",
      initiatedDate: "2023-05-20",
      targetCompletionDate: "2023-08-15",
      status: "completed",
      priority: "medium",
      initiatedBy: "Robert Chen",
      assignedTo: "John Smith",
      description: "Update to dissolution test method",
      justification: "Improved specificity and reduced testing time",
      regulatoryImpact: "low",
      markets: ["us", "eu"],
      progress: 100,
      currentStage: "closure",
      stages: [
        { id: "stage-019", name: "Initiation", status: "completed", completedDate: "2023-05-20" },
        { id: "stage-020", name: "Risk Assessment", status: "completed", completedDate: "2023-06-10" },
        { id: "stage-021", name: "Planning", status: "completed", completedDate: "2023-06-25" },
        { id: "stage-022", name: "Implementation", status: "completed", completedDate: "2023-07-20" },
        { id: "stage-023", name: "Verification", status: "completed", completedDate: "2023-08-05" },
        { id: "stage-024", name: "Closure", status: "completed", completedDate: "2023-08-15" },
      ],
      documents: [
        { id: "doc-014", name: "Change Request Form", status: "approved" },
        { id: "doc-015", name: "Method Validation Protocol", status: "approved" },
        { id: "doc-016", name: "Validation Report", status: "approved" },
        { id: "doc-017", name: "SOP Update", status: "approved" },
      ],
      approvals: [
        { id: "app-011", role: "Quality Assurance", approver: "Jane Doe", status: "approved", date: "2023-06-15" },
        {
          id: "app-012",
          role: "Regulatory Affairs",
          approver: "Michael Johnson",
          status: "approved",
          date: "2023-06-18",
        },
        {
          id: "app-013",
          role: "Analytical Development",
          approver: "Lisa Wong",
          status: "approved",
          date: "2023-06-20",
        },
      ],
    },
    {
      id: "cc-005",
      title: "Oncotarget Specification Update",
      type: "specification",
      product: "Oncotarget",
      initiatedDate: "2023-07-01",
      targetCompletionDate: "2023-10-30",
      status: "in-progress",
      priority: "medium",
      initiatedBy: "Michael Johnson",
      assignedTo: "Sarah Johnson",
      description: "Update to API specification limits",
      justification: "Alignment with ICH Q3D requirements for elemental impurities",
      regulatoryImpact: "medium",
      markets: ["us", "eu"],
      progress: 30,
      currentStage: "risk-assessment",
      stages: [
        { id: "stage-025", name: "Initiation", status: "completed", completedDate: "2023-07-01" },
        { id: "stage-026", name: "Risk Assessment", status: "in-progress", startDate: "2023-07-15" },
        { id: "stage-027", name: "Planning", status: "pending" },
        { id: "stage-028", name: "Implementation", status: "pending" },
        { id: "stage-029", name: "Verification", status: "pending" },
        { id: "stage-030", name: "Closure", status: "pending" },
      ],
      documents: [
        { id: "doc-018", name: "Change Request Form", status: "approved" },
        { id: "doc-019", name: "Risk Assessment", status: "in-review" },
        { id: "doc-020", name: "Specification Update", status: "draft" },
      ],
      approvals: [
        { id: "app-014", role: "Quality Assurance", approver: "Jane Doe", status: "in-review" },
        {
          id: "app-015",
          role: "Regulatory Affairs",
          approver: "Michael Johnson",
          status: "approved",
          date: "2023-07-10",
        },
      ],
    },
    {
      id: "cc-006",
      title: "Immunoboost Labeling Update",
      type: "labeling",
      product: "Immunoboost",
      initiatedDate: "2023-06-15",
      targetCompletionDate: "2023-09-01",
      status: "at-risk",
      priority: "high",
      initiatedBy: "Emily Rodriguez",
      assignedTo: "Michael Johnson",
      description: "Update to product labeling for new safety information",
      justification: "Regulatory requirement based on pharmacovigilance findings",
      regulatoryImpact: "high",
      markets: ["us"],
      progress: 45,
      currentStage: "implementation",
      stages: [
        { id: "stage-031", name: "Initiation", status: "completed", completedDate: "2023-06-15" },
        { id: "stage-032", name: "Risk Assessment", status: "completed", completedDate: "2023-06-30" },
        { id: "stage-033", name: "Planning", status: "completed", completedDate: "2023-07-15" },
        { id: "stage-034", name: "Implementation", status: "in-progress", startDate: "2023-07-20" },
        { id: "stage-035", name: "Verification", status: "pending" },
        { id: "stage-036", name: "Closure", status: "pending" },
      ],
      documents: [
        { id: "doc-021", name: "Change Request Form", status: "approved" },
        { id: "doc-022", name: "Safety Assessment", status: "approved" },
        { id: "doc-023", name: "Labeling Text", status: "in-review" },
        { id: "doc-024", name: "Implementation Plan", status: "approved" },
      ],
      approvals: [
        { id: "app-016", role: "Quality Assurance", approver: "Jane Doe", status: "approved", date: "2023-07-05" },
        {
          id: "app-017",
          role: "Regulatory Affairs",
          approver: "Michael Johnson",
          status: "approved",
          date: "2023-07-08",
        },
        {
          id: "app-018",
          role: "Pharmacovigilance",
          approver: "Sarah Johnson",
          status: "approved",
          date: "2023-07-10",
        },
      ],
    },
    {
      id: "cc-007",
      title: "Respiraclear Supplier Change",
      type: "supplier",
      product: "Respiraclear",
      initiatedDate: "2023-05-05",
      targetCompletionDate: "2023-11-15",
      status: "in-progress",
      priority: "medium",
      initiatedBy: "Robert Chen",
      assignedTo: "Lisa Wong",
      description: "Change of API supplier",
      justification: "Supply chain resilience and cost optimization",
      regulatoryImpact: "high",
      markets: ["us", "eu", "japan", "china"],
      progress: 35,
      currentStage: "planning",
      stages: [
        { id: "stage-037", name: "Initiation", status: "completed", completedDate: "2023-05-05" },
        { id: "stage-038", name: "Risk Assessment", status: "completed", completedDate: "2023-06-10" },
        { id: "stage-039", name: "Planning", status: "in-progress", startDate: "2023-06-15" },
        { id: "stage-040", name: "Implementation", status: "pending" },
        { id: "stage-041", name: "Verification", status: "pending" },
        { id: "stage-042", name: "Closure", status: "pending" },
      ],
      documents: [
        { id: "doc-025", name: "Change Request Form", status: "approved" },
        { id: "doc-026", name: "Supplier Qualification", status: "in-progress" },
        { id: "doc-027", name: "Comparability Protocol", status: "in-review" },
        { id: "doc-028", name: "Regulatory Strategy", status: "approved" },
      ],
      approvals: [
        { id: "app-019", role: "Quality Assurance", approver: "Jane Doe", status: "approved", date: "2023-06-20" },
        {
          id: "app-020",
          role: "Regulatory Affairs",
          approver: "Michael Johnson",
          status: "approved",
          date: "2023-06-22",
        },
        {
          id: "app-021",
          role: "Supply Chain",
          approver: "Lisa Wong",
          status: "approved",
          date: "2023-06-25",
        },
      ],
    },
  ]

  // Filter changes based on search and filters
  const filteredChanges = changeControlData.filter((change) => {
    // Search query filter
    if (
      searchQueryLocal &&
      !change.title.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !change.product.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !change.description.toLowerCase().includes(searchQueryLocal.toLowerCase())
    ) {
      return false
    }

    // Product filter
    if (productFilter !== "all" && change.product !== productFilter) {
      return false
    }

    // Status filter
    if (statusFilter !== "all" && change.status !== statusFilter) {
      return false
    }

    // Type filter
    if (typeFilter !== "all" && change.type !== typeFilter) {
      return false
    }

    // Priority filter
    if (priorityFilter !== "all" && change.priority !== priorityFilter) {
      return false
    }

    return true
  })

  // Filter changes based on tab
  const tabFilteredChanges = filteredChanges.filter((change) => {
    if (activeTab === "active") {
      return change.status === "in-progress" || change.status === "at-risk"
    }
    if (activeTab === "completed") {
      return change.status === "completed"
    }
    return true
  })

  // Sort changes by initiated date (most recent first)
  const sortedChanges = [...tabFilteredChanges].sort(
    (a, b) => new Date(b.initiatedDate).getTime() - new Date(a.initiatedDate).getTime(),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-500">In Progress</Badge>
      case "pending":
        return <Badge className="bg-gray-500">Pending</Badge>
      case "at-risk":
        return <Badge className="bg-amber-500">At Risk</Badge>
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "in-review":
        return <Badge className="bg-blue-500">In Review</Badge>
      case "draft":
        return <Badge className="bg-gray-500">Draft</Badge>
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
      case "formulation":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Formulation
          </Badge>
        )
      case "manufacturing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Manufacturing
          </Badge>
        )
      case "packaging":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Packaging
          </Badge>
        )
      case "analytical":
        return (
          <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
            Analytical
          </Badge>
        )
      case "specification":
        return (
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
            Specification
          </Badge>
        )
      case "labeling":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Labeling
          </Badge>
        )
      case "supplier":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Supplier
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "high":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            High Impact
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Medium Impact
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Low Impact
          </Badge>
        )
      default:
        return <Badge variant="outline">{impact}</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-gray-500" />
      case "at-risk":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const handleViewChange = (changeId: string) => {
    setSelectedChange(changeId)
    setActiveTab("details")
  }

  const selectedChangeData = selectedChange ? changeControlData.find((c) => c.id === selectedChange) : null

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
          <TabsTrigger value="active">Active Changes</TabsTrigger>
          <TabsTrigger value="completed">Completed Changes</TabsTrigger>
          <TabsTrigger value="all">All Changes</TabsTrigger>
          <TabsTrigger value="details">Change Details</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Active Change Controls</CardTitle>
                <CardDescription>Ongoing change control processes</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search changes..."
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
                  New Change
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Change Control</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Current Stage</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Target Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedChanges
                    .filter((change) => change.status !== "completed")
                    .map((change) => (
                      <TableRow key={change.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            {getStatusIcon(change.status)}
                            <span className="ml-2">{change.title}</span>
                          </div>
                        </TableCell>
                        <TableCell>{change.product}</TableCell>
                        <TableCell>{getTypeBadge(change.type)}</TableCell>
                        <TableCell>{getStatusBadge(change.status)}</TableCell>
                        <TableCell>{getPriorityBadge(change.priority)}</TableCell>
                        <TableCell className="capitalize">{change.currentStage}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Progress value={change.progress} className="h-2 w-[60px]" />
                            <span className="text-xs text-muted-foreground">{change.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{change.targetCompletionDate}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => handleViewChange(change.id)}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Change Control Progress</CardTitle>
                <CardDescription>Progress of active changes by stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedChanges
                    .filter((change) => change.status !== "completed")
                    .slice(0, 5)
                    .map((change) => (
                      <div key={change.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {getStatusIcon(change.status)}
                            <span className="ml-2 font-medium">{change.title}</span>
                          </div>
                          <span className="text-sm">{change.progress}%</span>
                        </div>
                        <Progress value={change.progress} className="h-2" />
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Current Stage: {change.currentStage}</span>
                          <span>Target: {change.targetCompletionDate}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Approvals</CardTitle>
                <CardDescription>Pending approvals for active changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {changeControlData
                    .flatMap((change) =>
                      change.approvals
                        .filter((approval) => approval.status === "in-review")
                        .map((approval) => ({ ...approval, changeId: change.id, changeTitle: change.title })),
                    )
                    .slice(0, 5)
                    .map((approval, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{approval.changeTitle}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{approval.role}</span>
                            <span className="mx-1">•</span>
                            <span>{approval.approver}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(approval.status)}
                          <Button variant="ghost" size="sm" onClick={() => handleViewChange(approval.changeId)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Completed Change Controls</CardTitle>
                <CardDescription>Successfully implemented changes</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart4 className="h-4 w-4 mr-1" />
                  Analytics
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Change Control</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Initiated</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedChanges
                    .filter((change) => change.status === "completed")
                    .map((change) => {
                      const completedStage = change.stages.find((stage) => stage.name === "Closure")
                      const completedDate = completedStage?.completedDate || ""
                      const initiatedDate = new Date(change.initiatedDate)
                      const completionDate = new Date(completedDate)
                      const durationDays = Math.round(
                        (completionDate.getTime() - initiatedDate.getTime()) / (1000 * 60 * 60 * 24),
                      )

                      return (
                        <TableRow key={change.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {change.title}
                            </div>
                          </TableCell>
                          <TableCell>{change.product}</TableCell>
                          <TableCell>{getTypeBadge(change.type)}</TableCell>
                          <TableCell>{change.initiatedDate}</TableCell>
                          <TableCell>{completedDate}</TableCell>
                          <TableCell>{durationDays} days</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" onClick={() => handleViewChange(change.id)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Change Control Analytics</CardTitle>
              <CardDescription>Performance metrics for change control processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Average Completion Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold">87</div>
                      <div className="text-sm text-muted-foreground mt-1">Days</div>
                      <div className="flex items-center text-green-500 text-sm mt-2">
                        <span>↓ 12 days from previous period</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">On-Time Completion Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold">78%</div>
                      <div className="text-sm text-muted-foreground mt-1">Last 12 months</div>
                      <div className="flex items-center text-green-500 text-sm mt-2">
                        <span>↑ 5% from previous period</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">First-Time Approval Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold">92%</div>
                      <div className="text-sm text-muted-foreground mt-1">Approval rate</div>
                      <div className="flex items-center text-green-500 text-sm mt-2">
                        <span>↑ 3% from previous period</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Change Control Overview</CardTitle>
                <CardDescription>All change control processes</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="formulation">Formulation</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="packaging">Packaging</SelectItem>
                    <SelectItem value="analytical">Analytical</SelectItem>
                    <SelectItem value="specification">Specification</SelectItem>
                    <SelectItem value="labeling">Labeling</SelectItem>
                    <SelectItem value="supplier">Supplier</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold">{changeControlData.length}</div>
                      <div className="text-sm text-muted-foreground">Total Changes</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold">
                        {changeControlData.filter((c) => c.status === "in-progress").length}
                      </div>
                      <div className="text-sm text-muted-foreground">In Progress</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold">
                        {changeControlData.filter((c) => c.status === "completed").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <div className="text-3xl font-bold">
                        {changeControlData.filter((c) => c.status === "at-risk").length}
                      </div>
                      <div className="text-sm text-muted-foreground">At Risk</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="p-4 border rounded-md bg-muted/20">
                  <p className="text-center text-muted-foreground">
                    Change control distribution visualization would appear here
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Recent Changes</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Change Control</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Initiated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedChanges.slice(0, 5).map((change) => (
                        <TableRow key={change.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              {getStatusIcon(change.status)}
                              <span className="ml-2">{change.title}</span>
                            </div>
                          </TableCell>
                          <TableCell>{change.product}</TableCell>
                          <TableCell>{getTypeBadge(change.type)}</TableCell>
                          <TableCell>{getStatusBadge(change.status)}</TableCell>
                          <TableCell>{change.initiatedDate}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" onClick={() => handleViewChange(change.id)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="mt-4">
          {selectedChangeData ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{selectedChangeData.title}</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    {getTypeBadge(selectedChangeData.type)}
                    {getStatusBadge(selectedChangeData.status)}
                    {getPriorityBadge(selectedChangeData.priority)}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("active")}>
                    Back to List
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                  <Button>
                    <Clipboard className="h-4 w-4 mr-1" />
                    Edit Change
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Change Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Product:</span>
                      <p className="text-sm text-muted-foreground">{selectedChangeData.product}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Description:</span>
                      <p className="text-sm text-muted-foreground">{selectedChangeData.description}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Justification:</span>
                      <p className="text-sm text-muted-foreground">{selectedChangeData.justification}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Regulatory Impact:</span>
                      <div className="mt-1">{getImpactBadge(selectedChangeData.regulatoryImpact)}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Markets:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedChangeData.markets.map((market) => (
                          <Badge key={market} variant="outline" className="text-xs">
                            {market.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Timeline</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Initiated Date:</span>
                      <p className="text-sm text-muted-foreground">{selectedChangeData.initiatedDate}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Target Completion:</span>
                      <p className="text-sm text-muted-foreground">{selectedChangeData.targetCompletionDate}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Current Stage:</span>
                      <p className="text-sm text-muted-foreground capitalize">{selectedChangeData.currentStage}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Progress:</span>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={selectedChangeData.progress} className="h-2" />
                        <span className="text-xs text-muted-foreground">{selectedChangeData.progress}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Responsibility</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">Initiated By:</span>
                      <p className="text-sm text-muted-foreground">{selectedChangeData.initiatedBy}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Assigned To:</span>
                      <p className="text-sm text-muted-foreground">{selectedChangeData.assignedTo}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Required Approvals:</span>
                      <div className="space-y-1 mt-1">
                        {selectedChangeData.approvals.map((approval) => (
                          <div key={approval.id} className="flex items-center justify-between text-sm">
                            <span>
                              {approval.role}: {approval.approver}
                            </span>
                            {getStatusBadge(approval.status)}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Change Control Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-9 top-0 bottom-0 w-px bg-muted-foreground/20" />
                    <div className="space-y-6">
                      {selectedChangeData.stages.map((stage, index) => (
                        <div key={stage.id} className="relative flex items-start">
                          <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                            {stage.status === "completed" ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : stage.status === "in-progress" ? (
                              <Clock className="h-4 w-4 text-blue-500" />
                            ) : (
                              <Clock className="h-4 w-4 text-gray-500" />
                            )}
                          </div>
                          <div className="ml-10 flex-1">
                            <div
                              className={`rounded-md border p-4 ${
                                stage.status === "in-progress" ? "bg-blue-50 border-blue-200" : ""
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="font-medium">
                                    {index + 1}. {stage.name}
                                  </span>
                                </div>
                                <div>{getStatusBadge(stage.status)}</div>
                              </div>
                              {stage.completedDate && (
                                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>Completed: {stage.completedDate}</span>
                                </div>
                              )}
                              {stage.startDate && !stage.completedDate && (
                                <div className="mt-2 flex items-center text-xs text-muted-foreground">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  <span>Started: {stage.startDate}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Required Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Document</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedChangeData.documents.map((doc) => (
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stakeholders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Quality Assurance</p>
                            <p className="text-sm text-muted-foreground">
                              {selectedChangeData.approvals.find((a) => a.role === "Quality Assurance")?.approver ||
                                "Not assigned"}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Regulatory Affairs</p>
                            <p className="text-sm text-muted-foreground">
                              {selectedChangeData.approvals.find((a) => a.role === "Regulatory Affairs")?.approver ||
                                "Not assigned"}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Manufacturing</p>
                            <p className="text-sm text-muted-foreground">
                              {selectedChangeData.approvals.find((a) => a.role === "Manufacturing")?.approver ||
                                "Not assigned"}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center h-60">
                <Clipboard className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Change Selected</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Select a change control from the list to view its details
                </p>
                <Button onClick={() => setActiveTab("active")}>View Active Changes</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ChangeControlManagement
