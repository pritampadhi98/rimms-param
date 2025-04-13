"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Eye,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Calendar,
  FileText,
  Download,
  Globe,
  ArrowUpRight,
  Filter,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FilterProps {
  searchQuery: string
  therapeuticArea: string
  formulation: string
  market: string
}

interface RegulatoryRequirement {
  id: string
  country: string
  region: string
  requirement: string
  description: string
  applicableProducts: string[]
  complianceStatus: "compliant" | "non-compliant" | "pending" | "not-applicable"
  dueDate: string | null
  lastUpdated: string
}

interface ComplianceIssue {
  id: string
  product: string
  market: string
  issue: string
  severity: "high" | "medium" | "low"
  status: "open" | "in-progress" | "resolved"
  dueDate: string
  assignedTo: string
}

// Sample data
const regulatoryRequirements: RegulatoryRequirement[] = [
  {
    id: "req-001",
    country: "United States",
    region: "North America",
    requirement: "Child-Resistant Packaging",
    description: "All oral prescription medications must be in child-resistant packaging per PPPA regulations",
    applicableProducts: ["Cardiostat", "Neurobalance"],
    complianceStatus: "compliant",
    dueDate: null,
    lastUpdated: "2023-04-15",
  },
  {
    id: "req-002",
    country: "European Union",
    region: "Europe",
    requirement: "Braille Labeling",
    description: "Product name must appear in Braille on outer packaging per Directive 2001/83/EC",
    applicableProducts: ["Cardiostat", "Neurobalance", "Respiraclear"],
    complianceStatus: "compliant",
    dueDate: null,
    lastUpdated: "2023-05-20",
  },
  {
    id: "req-003",
    country: "Japan",
    region: "Asia Pacific",
    requirement: "Package Insert Format",
    description: "Package inserts must follow PMDA-specified format and content requirements",
    applicableProducts: ["Cardiostat", "Respiraclear"],
    complianceStatus: "non-compliant",
    dueDate: "2023-07-30",
    lastUpdated: "2023-06-10",
  },
  {
    id: "req-004",
    country: "Brazil",
    region: "Latin America",
    requirement: "ANVISA Registration Number",
    description: "ANVISA registration number must be prominently displayed on all packaging",
    applicableProducts: ["Cardiostat"],
    complianceStatus: "pending",
    dueDate: "2023-08-15",
    lastUpdated: "2023-06-05",
  },
  {
    id: "req-005",
    country: "China",
    region: "Asia Pacific",
    requirement: "Chinese Character Requirements",
    description: "All text must be in simplified Chinese characters with minimum font size requirements",
    applicableProducts: ["Respiraclear"],
    complianceStatus: "compliant",
    dueDate: null,
    lastUpdated: "2023-03-12",
  },
]

const complianceIssues: ComplianceIssue[] = [
  {
    id: "issue-001",
    product: "Respiraclear",
    market: "Japan",
    issue: "Package insert format does not comply with PMDA requirements",
    severity: "high",
    status: "in-progress",
    dueDate: "2023-07-30",
    assignedTo: "Sarah Johnson",
  },
  {
    id: "issue-002",
    product: "Cardiostat",
    market: "Brazil",
    issue: "ANVISA registration number placement pending approval",
    severity: "medium",
    status: "open",
    dueDate: "2023-08-15",
    assignedTo: "Michael Chen",
  },
  {
    id: "issue-003",
    product: "Neurobalance",
    market: "Canada",
    issue: "Bilingual labeling requirements not fully implemented",
    severity: "medium",
    status: "in-progress",
    dueDate: "2023-09-10",
    assignedTo: "Emily Rodriguez",
  },
]

// Add a new section at the beginning of the component function to include a regulatory dashboard
export function RegulatoryCompliance({ searchQuery, therapeuticArea, formulation, market }: FilterProps) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isLoading, setIsLoading] = useState(true)
  const [complianceFilter, setComplianceFilter] = useState("all")
  const [regionFilter, setRegionFilter] = useState("all")
  const [deadlineFilter, setDeadlineFilter] = useState("all")
  const [searchQueryLocal, setSearchQuery] = useState(searchQuery)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Filter requirements based on search and filters
  const filteredRequirements = regulatoryRequirements.filter((req) => {
    // Search query filter
    if (
      searchQueryLocal &&
      !req.country.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !req.requirement.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !req.description.toLowerCase().includes(searchQueryLocal.toLowerCase())
    ) {
      return false
    }

    // Market filter
    if (market !== "all") {
      if (market === "us" && req.country !== "United States") return false
      if (market === "eu" && req.country !== "European Union") return false
      if (market === "japan" && req.country !== "Japan") return false
      if (market === "china" && req.country !== "China") return false
    }

    // Compliance filter
    if (complianceFilter !== "all" && req.complianceStatus !== complianceFilter) {
      return false
    }

    // Region filter
    if (regionFilter !== "all" && req.region !== regionFilter) {
      return false
    }

    // Deadline filter
    if (deadlineFilter === "upcoming" && !req.dueDate) {
      return false
    } else if (deadlineFilter === "overdue" && (!req.dueDate || new Date(req.dueDate) > new Date())) {
      return false
    }

    return true
  })

  // Filter issues based on search and filters
  const filteredIssues = complianceIssues.filter((issue) => {
    // Search query filter
    if (
      searchQueryLocal &&
      !issue.product.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !issue.market.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !issue.issue.toLowerCase().includes(searchQueryLocal.toLowerCase())
    ) {
      return false
    }

    // Market filter
    if (market !== "all") {
      if (market === "us" && issue.market !== "United States") return false
      if (market === "eu" && issue.market !== "European Union") return false
      if (market === "japan" && issue.market !== "Japan") return false
      if (market === "china" && issue.market !== "China") return false
    }

    // Severity filter
    if (complianceFilter === "compliant" && issue.severity !== "low") {
      return false
    } else if (complianceFilter === "non-compliant" && issue.severity !== "high") {
      return false
    } else if (complianceFilter === "pending" && issue.severity !== "medium") {
      return false
    }

    return true
  })

  const getComplianceStatusBadge = (status: string) => {
    switch (status) {
      case "compliant":
        return <Badge className="bg-green-500">Compliant</Badge>
      case "non-compliant":
        return <Badge className="bg-red-500">Non-Compliant</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "not-applicable":
        return <Badge variant="outline">Not Applicable</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getIssueSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-500">High</Badge>
      case "medium":
        return <Badge className="bg-amber-500">Medium</Badge>
      case "low":
        return <Badge className="bg-green-500">Low</Badge>
      default:
        return <Badge className="bg-gray-500">{severity}</Badge>
    }
  }

  const getIssueStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-red-500">Open</Badge>
      case "in-progress":
        return <Badge className="bg-amber-500">In Progress</Badge>
      case "resolved":
        return <Badge className="bg-green-500">Resolved</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  // Calculate compliance statistics
  const totalRequirements = regulatoryRequirements.length
  const compliantCount = regulatoryRequirements.filter((req) => req.complianceStatus === "compliant").length
  const nonCompliantCount = regulatoryRequirements.filter((req) => req.complianceStatus === "non-compliant").length
  const pendingCount = regulatoryRequirements.filter((req) => req.complianceStatus === "pending").length
  const complianceRate = Math.round((compliantCount / totalRequirements) * 100)

  // Calculate upcoming deadlines
  const today = new Date()
  const upcomingDeadlines = regulatoryRequirements
    .filter((req) => req.dueDate && new Date(req.dueDate) > today)
    .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime())
    .slice(0, 5)

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
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Compliance</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{complianceRate}%</div>
            <p className="text-xs text-muted-foreground">Compliance rate across all requirements</p>
            <div className="mt-3">
              <Progress value={complianceRate} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliant Requirements</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{compliantCount}</div>
            <p className="text-xs text-muted-foreground">Requirements met</p>
            <div className="mt-3">
              <Progress value={(compliantCount / totalRequirements) * 100} className="h-1 bg-muted" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Non-Compliant Requirements</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nonCompliantCount}</div>
            <p className="text-xs text-muted-foreground">Requirements not met</p>
            <div className="mt-3">
              <Progress value={(nonCompliantCount / totalRequirements) * 100} className="h-1 bg-muted" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requirements</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCount}</div>
            <p className="text-xs text-muted-foreground">Requirements in progress</p>
            <div className="mt-3">
              <Progress value={(pendingCount / totalRequirements) * 100} className="h-1 bg-muted" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Compliance Dashboard</TabsTrigger>
          <TabsTrigger value="requirements">Regulatory Requirements</TabsTrigger>
          <TabsTrigger value="issues">Compliance Issues</TabsTrigger>
          <TabsTrigger value="deadlines">Upcoming Deadlines</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Compliance by Region</CardTitle>
                <CardDescription>Regulatory compliance status across different regions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">North America</span>
                      </div>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Europe</span>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Asia Pacific</span>
                      </div>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Latin America</span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Middle East & Africa</span>
                      </div>
                      <span className="text-sm font-medium">58%</span>
                    </div>
                    <Progress value={58} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Critical Compliance Issues</CardTitle>
                <CardDescription>High priority issues requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceIssues
                    .filter((issue) => issue.severity === "high")
                    .map((issue) => (
                      <div key={issue.id} className="flex items-center justify-between p-3 border rounded-md bg-red-50">
                        <div>
                          <p className="font-medium text-sm">{issue.product}</p>
                          <p className="text-xs text-muted-foreground">{issue.issue}</p>
                          <div className="flex items-center mt-1">
                            <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Due: {issue.dueDate}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          {getIssueSeverityBadge(issue.severity)}
                          <Badge variant="outline">{issue.market}</Badge>
                        </div>
                      </div>
                    ))}
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    View All Issues
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Regulatory Deadlines</CardTitle>
                <CardDescription>Packaging compliance deadlines in the next 90 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((req, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium text-sm">{req.requirement}</p>
                        <p className="text-xs text-muted-foreground">{req.country}</p>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Due: {req.dueDate}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        {getComplianceStatusBadge(req.complianceStatus)}
                        <Badge variant="outline">{req.region}</Badge>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    View All Deadlines
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Documentation</CardTitle>
                <CardDescription>Required packaging documentation status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-blue-500" />
                      <div>
                        <p className="font-medium text-sm">Packaging Technical Files</p>
                        <p className="text-xs text-muted-foreground">428 documents</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">96% Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-purple-500" />
                      <div>
                        <p className="font-medium text-sm">Artwork Specifications</p>
                        <p className="text-xs text-muted-foreground">356 documents</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">92% Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-amber-500" />
                      <div>
                        <p className="font-medium text-sm">Regulatory Submissions</p>
                        <p className="text-xs text-muted-foreground">284 documents</p>
                      </div>
                    </div>
                    <Badge className="bg-amber-500">85% Complete</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-green-500" />
                      <div>
                        <p className="font-medium text-sm">Compliance Certificates</p>
                        <p className="text-xs text-muted-foreground">312 documents</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">94% Complete</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Documentation Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="requirements" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Market-Specific Packaging Requirements</CardTitle>
                <CardDescription>Regulatory requirements for packaging across different markets</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search requirements..."
                    className="w-[200px]"
                    value={searchQueryLocal}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={complianceFilter} onValueChange={setComplianceFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Compliance Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="compliant">Compliant</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="North America">North America</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
                    <SelectItem value="Latin America">Latin America</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  More Filters
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>Requirement</TableHead>
                    <TableHead>Applicable Products</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRequirements.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell className="font-medium">{req.country}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{req.requirement}</p>
                          <p className="text-xs text-muted-foreground">{req.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {req.applicableProducts.map((product) => (
                            <Badge key={product} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{getComplianceStatusBadge(req.complianceStatus)}</TableCell>
                      <TableCell>
                        {req.dueDate ? (
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{req.dueDate}</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">N/A</span>
                        )}
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

        <TabsContent value="issues" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Non-Compliance Issues and Remediation</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Market</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredIssues.map((issue) => (
                    <TableRow key={issue.id}>
                      <TableCell className="font-medium">{issue.product}</TableCell>
                      <TableCell>{issue.market}</TableCell>
                      <TableCell>
                        <p className="text-sm">{issue.issue}</p>
                      </TableCell>
                      <TableCell>{getIssueSeverityBadge(issue.severity)}</TableCell>
                      <TableCell>{getIssueStatusBadge(issue.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{issue.dueDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>{issue.assignedTo}</TableCell>
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

        <TabsContent value="deadlines" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Regulatory Deadlines</CardTitle>
              <CardDescription>Packaging compliance deadlines requiring action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Next 30 Days</h3>
                  <Select value={deadlineFilter} onValueChange={setDeadlineFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Deadline Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Deadlines</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  {regulatoryRequirements
                    .filter(
                      (req) =>
                        req.dueDate && new Date(req.dueDate) <= new Date(new Date().setDate(new Date().getDate() + 30)),
                    )
                    .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime())
                    .map((req) => (
                      <div key={req.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-red-500" />
                            <p className="font-medium">{req.dueDate}</p>
                          </div>
                          <p className="text-sm mt-1">{req.requirement}</p>
                          <div className="flex items-center mt-1">
                            <Globe className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{req.country}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          {getComplianceStatusBadge(req.complianceStatus)}
                          <Button variant="ghost" size="sm">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">31-90 Days</h3>
                  <div className="space-y-2">
                    {regulatoryRequirements
                      .filter(
                        (req) =>
                          req.dueDate &&
                          new Date(req.dueDate) > new Date(new Date().setDate(new Date().getDate() + 30)) &&
                          new Date(req.dueDate) <= new Date(new Date().setDate(new Date().getDate() + 90)),
                      )
                      .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime())
                      .map((req) => (
                        <div key={req.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                              <p className="font-medium">{req.dueDate}</p>
                            </div>
                            <p className="text-sm mt-1">{req.requirement}</p>
                            <div className="flex items-center mt-1">
                              <Globe className="h-3 w-3 mr-1 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{req.country}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-1">
                            {getComplianceStatusBadge(req.complianceStatus)}
                            <Button variant="ghost" size="sm">
                              <ArrowUpRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
