"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Filter,
  Search,
  Plus,
  Calendar,
  ChevronDown,
  Eye,
  MessageSquare,
  Edit,
  BarChart3,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DMFReview() {
  const [activeTab, setActiveTab] = useState("active")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Filter reviews based on search term, status, and type
  const filteredReviews = reviewData.filter((review) => {
    const matchesSearch =
      review.dmfId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.reviewer.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || review.status === statusFilter
    const matchesType = typeFilter === "all" || review.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    <div className="space-y-6">
      <Tabs defaultValue="active" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="active">Active Reviews</TabsTrigger>
          <TabsTrigger value="deficiencies">Deficiencies</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by DMF ID, title, or reviewer"
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
              <select
                className="p-2 border rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Under Review">Under Review</option>
                <option value="Information Request">Information Request</option>
                <option value="Pending Validation">Pending Validation</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
              <select
                className="p-2 border rounded-md"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Type II">Type II</option>
                <option value="Type III">Type III</option>
                <option value="Type IV">Type IV</option>
                <option value="ASMF">ASMF</option>
              </select>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                New Review
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">DMF ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Agency</TableHead>
                  <TableHead>Reviewer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReviews.length > 0 ? (
                  filteredReviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell className="font-medium">{review.dmfId}</TableCell>
                      <TableCell>{review.title}</TableCell>
                      <TableCell>{review.type}</TableCell>
                      <TableCell>{review.agency}</TableCell>
                      <TableCell>{review.reviewer}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(review.status)}>{review.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={review.progress} className="h-2 w-[60px]" />
                          <span className="text-xs">{review.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                          {review.dueDate}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              Actions <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Options</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" /> Update Status
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" /> Add Comment
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" /> View Documents
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-4 text-muted-foreground">
                      No reviews found matching your search criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredReviews.length} of {reviewData.length} reviews
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="deficiencies" className="space-y-4 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Deficiency Notifications</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export List
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Open Deficiencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Across all DMFs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Critical Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Requiring immediate attention</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Resolved This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Successfully addressed</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">DMF ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Deficiency Type</TableHead>
                  <TableHead>Date Received</TableHead>
                  <TableHead>Response Due</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deficiencyData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.dmfId}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.type === "Chemistry"
                            ? "default"
                            : item.type === "Manufacturing"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.dateReceived}</TableCell>
                    <TableCell className={item.isOverdue ? "text-red-500 font-medium" : ""}>
                      {item.responseDue}
                      {item.isOverdue && <span className="text-xs ml-2">(Overdue)</span>}
                    </TableCell>
                    <TableCell>{item.assignedTo}</TableCell>
                    <TableCell>
                      <Badge variant={getDeficiencyStatusVariant(item.status)}>{item.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Completed Reviews</h3>
            <div className="flex gap-2">
              <Input type="date" className="w-[180px]" />
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export List
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">DMF ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Agency</TableHead>
                  <TableHead>Completion Date</TableHead>
                  <TableHead>Reviewer</TableHead>
                  <TableHead>Outcome</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {completedReviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell className="font-medium">{review.dmfId}</TableCell>
                    <TableCell>{review.title}</TableCell>
                    <TableCell>{review.type}</TableCell>
                    <TableCell>{review.agency}</TableCell>
                    <TableCell>{review.completionDate}</TableCell>
                    <TableCell>{review.reviewer}</TableCell>
                    <TableCell>
                      <Badge variant={review.outcome === "Adequate" ? "success" : "destructive"}>
                        {review.outcome}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View Report
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="dashboard" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-amber-500" />
                  Under Review
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-sm text-muted-foreground">DMFs currently under review</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span className="text-muted-foreground">45%</span>
                  </div>
                  <Progress value={45} className="h-1" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                  Deficiencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Open deficiency notifications</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Resolution Rate</span>
                    <span className="text-muted-foreground">67%</span>
                  </div>
                  <Progress value={67} className="h-1" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                  Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">98</div>
                <p className="text-sm text-muted-foreground">Successfully completed reviews</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Approval Rate</span>
                    <span className="text-muted-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-1" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Review Status by Agency</CardTitle>
                <CardDescription>Distribution of review statuses across regulatory agencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">US FDA</span>
                      <span className="text-sm text-muted-foreground">56 DMFs</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Adequate: 36</span>
                      <span>Under Review: 12</span>
                      <span>Deficiencies: 8</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">EU EMA</span>
                      <span className="text-sm text-muted-foreground">38 DMFs</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Adequate: 28</span>
                      <span>Under Review: 6</span>
                      <span>Deficiencies: 4</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Japan PMDA</span>
                      <span className="text-sm text-muted-foreground">21 DMFs</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "57%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Adequate: 12</span>
                      <span>Under Review: 6</span>
                      <span>Deficiencies: 3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Review Timeline</CardTitle>
                <CardDescription>Average review duration by DMF type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Type II - Drug Substance</span>
                      <span className="text-sm text-muted-foreground">180 days avg.</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Type III - Packaging</span>
                      <span className="text-sm text-muted-foreground">120 days avg.</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Type IV - Excipient</span>
                      <span className="text-sm text-muted-foreground">90 days avg.</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "37.5%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">ASMF</span>
                      <span className="text-sm text-muted-foreground">210 days avg.</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                      <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "87.5%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Review Trends</CardTitle>
              <CardDescription>Monthly review completions and deficiency rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] flex items-end space-x-2">
                {[
                  { completed: 8, deficiencies: 3 },
                  { completed: 12, deficiencies: 5 },
                  { completed: 10, deficiencies: 4 },
                  { completed: 15, deficiencies: 6 },
                  { completed: 18, deficiencies: 4 },
                  { completed: 14, deficiencies: 3 },
                ].map((month, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center">
                      <div
                        className="w-full bg-red-400 rounded-t-sm"
                        style={{ height: `${(month.deficiencies / 18) * 150}px` }}
                      ></div>
                      <div
                        className="w-full bg-green-500 rounded-b-sm"
                        style={{ height: `${(month.completed / 18) * 150}px` }}
                      ></div>
                    </div>
                    <span className="text-xs mt-2">{getMonthName(i)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4 space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                  <span className="text-xs">Completed Reviews</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-sm mr-2"></div>
                  <span className="text-xs">Deficiencies</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Detailed Analytics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const reviewData = [
  {
    id: 1,
    dmfId: "DMF12345",
    title: "Acetaminophen",
    type: "Type II",
    agency: "US FDA",
    reviewer: "John Smith",
    status: "Under Review",
    progress: 60,
    dueDate: "2023-06-15",
  },
  {
    id: 2,
    dmfId: "DMF23456",
    title: "Microcrystalline Cellulose",
    type: "Type IV",
    agency: "US FDA",
    reviewer: "Jane Doe",
    status: "Information Request",
    progress: 40,
    dueDate: "2023-06-22",
  },
  {
    id: 3,
    dmfId: "ASMF-789",
    title: "Ibuprofen",
    type: "ASMF",
    agency: "EU EMA",
    reviewer: "Robert Johnson",
    status: "Under Review",
    progress: 75,
    dueDate: "2023-07-10",
  },
  {
    id: 4,
    dmfId: "J-DMF-456",
    title: "Lactose Monohydrate",
    type: "Type IV",
    agency: "Japan PMDA",
    reviewer: "Takashi Yamamoto",
    status: "Pending Validation",
    progress: 25,
    dueDate: "2023-06-30",
  },
  {
    id: 5,
    dmfId: "HC-DMF-789",
    title: "Metformin HCl",
    type: "Type II",
    agency: "Health Canada",
    reviewer: "Sarah Williams",
    status: "Under Review",
    progress: 50,
    dueDate: "2023-07-15",
  },
]

const deficiencyData = [
  {
    id: 1,
    dmfId: "DMF12345",
    title: "Acetaminophen",
    type: "Chemistry",
    dateReceived: "2023-04-15",
    responseDue: "2023-05-15",
    isOverdue: true,
    assignedTo: "John Smith",
    status: "Open",
  },
  {
    id: 2,
    dmfId: "DMF23456",
    title: "Microcrystalline Cellulose",
    type: "Manufacturing",
    dateReceived: "2023-03-22",
    responseDue: "2023-04-22",
    isOverdue: true,
    assignedTo: "Jane Doe",
    status: "In Progress",
  },
  {
    id: 3,
    dmfId: "ASMF-789",
    title: "Ibuprofen",
    type: "Stability",
    dateReceived: "2023-05-10",
    responseDue: "2023-06-10",
    isOverdue: false,
    assignedTo: "Robert Johnson",
    status: "In Progress",
  },
  {
    id: 4,
    dmfId: "J-DMF-456",
    title: "Lactose Monohydrate",
    type: "Analytical",
    dateReceived: "2023-05-05",
    responseDue: "2023-06-05",
    isOverdue: false,
    assignedTo: "Takashi Yamamoto",
    status: "Open",
  },
  {
    id: 5,
    dmfId: "HC-DMF-789",
    title: "Metformin HCl",
    type: "Chemistry",
    dateReceived: "2023-02-10",
    responseDue: "2023-03-10",
    isOverdue: true,
    assignedTo: "Sarah Williams",
    status: "Resolved",
  },
]

const completedReviews = [
  {
    id: 1,
    dmfId: "DMF34567",
    title: "Magnesium Stearate",
    type: "Type IV",
    agency: "US FDA",
    completionDate: "2023-01-15",
    reviewer: "John Smith",
    outcome: "Adequate",
  },
  {
    id: 2,
    dmfId: "DMF45678",
    title: "Manufacturing Facility",
    type: "Type I",
    agency: "US FDA",
    completionDate: "2022-11-30",
    reviewer: "Jane Doe",
    outcome: "Adequate",
  },
  {
    id: 3,
    dmfId: "ASMF-456",
    title: "Metformin HCl",
    type: "ASMF",
    agency: "EU EMA",
    completionDate: "2022-10-15",
    reviewer: "Robert Johnson",
    outcome: "Inadequate",
  },
  {
    id: 4,
    dmfId: "J-DMF-123",
    title: "Povidone",
    type: "Type IV",
    agency: "Japan PMDA",
    completionDate: "2023-02-20",
    reviewer: "Takashi Yamamoto",
    outcome: "Adequate",
  },
  {
    id: 5,
    dmfId: "HC-DMF-456",
    title: "Croscarmellose Sodium",
    type: "Type IV",
    agency: "Health Canada",
    completionDate: "2023-03-05",
    reviewer: "Sarah Williams",
    outcome: "Adequate",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Under Review":
      return "default"
    case "Information Request":
      return "secondary"
    case "Pending Validation":
      return "outline"
    case "Approved":
      return "success"
    case "Rejected":
      return "destructive"
    default:
      return "outline"
  }
}

function getDeficiencyStatusVariant(status: string): "default" | "secondary" | "destructive" | "success" | "outline" {
  switch (status) {
    case "Open":
      return "destructive"
    case "In Progress":
      return "secondary"
    case "Resolved":
      return "success"
    default:
      return "outline"
  }
}

function getMonthName(index: number): string {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  return months[index] || ""
}
