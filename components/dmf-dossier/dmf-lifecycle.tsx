"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  FileText,
  History,
  Plus,
  ChevronDown,
  Eye,
  Edit,
  Download,
  ArrowUpDown,
  Clock,
  AlertCircle,
  CheckCircle,
  RefreshCw,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DMFLifecycle() {
  const [activeTab, setActiveTab] = useState("lifecycle")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDMF, setSelectedDMF] = useState("DMF12345")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  // Sort versions based on sort order
  const sortedVersions = [...versionData].sort((a, b) => {
    const versionA = Number.parseFloat(a.version)
    const versionB = Number.parseFloat(b.version)
    return sortOrder === "asc" ? versionA - versionB : versionB - versionA
  })

  return (
    <div className="space-y-6">
      <Tabs defaultValue="lifecycle" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="lifecycle">Version History</TabsTrigger>
          <TabsTrigger value="updates">Updates</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="lifecycle" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-1">
              <select
                className="w-full p-2 border rounded-md"
                value={selectedDMF}
                onChange={(e) => setSelectedDMF(e.target.value)}
              >
                <option value="DMF12345">DMF12345 - Acetaminophen</option>
                <option value="DMF23456">DMF23456 - Microcrystalline Cellulose</option>
                <option value="ASMF-789">ASMF-789 - Ibuprofen</option>
              </select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                <ArrowUpDown className="h-4 w-4 mr-2" />
                {sortOrder === "asc" ? "Oldest First" : "Newest First"}
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Version
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="default">Active</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Initial Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">2022-05-15</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Last Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">2023-03-22</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Current Version</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium">3.0</div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Version</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Submission Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reviewer</TableHead>
                  <TableHead>Changes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedVersions.map((version) => (
                  <TableRow key={version.id}>
                    <TableCell className="font-medium">{version.version}</TableCell>
                    <TableCell>{version.description}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                        {version.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(version.status)}>{version.status}</Badge>
                    </TableCell>
                    <TableCell>{version.reviewer}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{version.changes} files</Badge>
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
                            <Edit className="mr-2 h-4 w-4" /> Edit Version
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" /> Download Files
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <History className="mr-2 h-4 w-4" /> Compare Versions
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="updates" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create DMF Update</CardTitle>
              <CardDescription>Submit a new version or update to an existing DMF</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">DMF ID</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select DMF</option>
                      <option value="dmf12345" selected>
                        DMF12345 - Acetaminophen
                      </option>
                      <option value="dmf23456">DMF23456 - Microcrystalline Cellulose</option>
                      <option value="asmf-789">ASMF-789 - Ibuprofen</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Update Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select update type</option>
                      <option value="annual">Annual Report</option>
                      <option value="manufacturing">Manufacturing Change</option>
                      <option value="specification">Specification Change</option>
                      <option value="administrative">Administrative Change</option>
                      <option value="deficiency">Deficiency Response</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">New Version</label>
                    <Input type="text" placeholder="Enter version number" value="3.1" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      className="w-full p-2 border rounded-md h-[100px]"
                      placeholder="Enter description of changes"
                    ></textarea>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Submission Date</label>
                    <div className="flex">
                      <Input type="date" />
                      <Button variant="outline" size="icon" className="ml-2">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Impact Assessment</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select impact level</option>
                      <option value="none">None - No impact on quality or safety</option>
                      <option value="minor">Minor - Minimal impact, no regulatory action needed</option>
                      <option value="moderate">Moderate - Some impact, may require notification</option>
                      <option value="major">Major - Significant impact, requires approval</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Affected Sections</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="section1" className="rounded" />
                        <label htmlFor="section1" className="text-sm">
                          Administrative
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="section2" className="rounded" />
                        <label htmlFor="section2" className="text-sm">
                          Manufacturing Process
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="section3" className="rounded" />
                        <label htmlFor="section3" className="text-sm">
                          Specifications
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="section4" className="rounded" />
                        <label htmlFor="section4" className="text-sm">
                          Stability Data
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="section5" className="rounded" />
                        <label htmlFor="section5" className="text-sm">
                          Analytical Methods
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="section6" className="rounded" />
                        <label htmlFor="section6" className="text-sm">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Upload Files</label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
                      <Button variant="outline" size="sm">
                        Browse Files
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <div className="flex gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button>Submit Update</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">DMF Timeline</h3>
            <div className="flex gap-2">
              <select className="p-2 border rounded-md">
                <option value="DMF12345">DMF12345 - Acetaminophen</option>
                <option value="DMF23456">DMF23456 - Microcrystalline Cellulose</option>
                <option value="ASMF-789">ASMF-789 - Ibuprofen</option>
              </select>
              <Button variant="outline" size="sm">
                <History className="h-4 w-4 mr-2" />
                Export Timeline
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {timelineData.map((item) => (
              <div key={item.id} className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${getTimelineIconBackground(item.type)}`}
                  >
                    {getTimelineIcon(item.type)}
                  </div>
                  <div className="h-full w-px bg-border"></div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center">
                    <h4 className="font-medium">{item.title}</h4>
                    <Badge variant="outline" className="ml-2">
                      {item.date}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {item.details && <div className="mt-2 rounded-md bg-muted p-2 text-sm">{item.details}</div>}
                  {item.actions && (
                    <div className="mt-2 flex gap-2">
                      {item.actions.map((action, index) => (
                        <Button key={index} variant="outline" size="sm">
                          {action}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>DMF Lifecycle Analytics</CardTitle>
              <CardDescription>Insights and trends across DMF versions and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">142</div>
                      <p className="text-sm text-muted-foreground">Total DMF Versions</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2.4</div>
                      <p className="text-sm text-muted-foreground">Avg. Versions per DMF</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">18</div>
                      <p className="text-sm text-muted-foreground">Pending Updates</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Update Types Distribution</h3>
                <div className="h-[200px] bg-muted rounded-md flex items-end justify-around p-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary w-12 h-[120px] rounded-t-md"></div>
                    <p className="text-xs mt-2">Annual</p>
                    <p className="text-xs font-medium">42%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary w-12 h-[80px] rounded-t-md"></div>
                    <p className="text-xs mt-2">Manufacturing</p>
                    <p className="text-xs font-medium">28%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary w-12 h-[40px] rounded-t-md"></div>
                    <p className="text-xs mt-2">Specification</p>
                    <p className="text-xs font-medium">14%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary w-12 h-[30px] rounded-t-md"></div>
                    <p className="text-xs mt-2">Administrative</p>
                    <p className="text-xs font-medium">10%</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-primary w-12 h-[20px] rounded-t-md"></div>
                    <p className="text-xs mt-2">Other</p>
                    <p className="text-xs font-medium">6%</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">DMF Updates Over Time</h3>
                <div className="h-[200px] bg-muted rounded-md p-4">
                  <div className="h-full flex items-end">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className="bg-primary w-4 rounded-t-sm"
                          style={{ height: `${Math.floor(Math.random() * 120) + 20}px` }}
                        ></div>
                        <p className="text-xs mt-2">{`M${i + 1}`}</p>
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

const versionData = [
  {
    id: 1,
    version: "3.0",
    description: "Updated manufacturing process",
    date: "2023-03-22",
    status: "Active",
    reviewer: "John Smith",
    changes: 12,
  },
  {
    id: 2,
    version: "2.0",
    description: "Annual report update",
    date: "2022-11-15",
    status: "Superseded",
    reviewer: "Jane Doe",
    changes: 8,
  },
  {
    id: 3,
    version: "1.0",
    description: "Initial submission",
    date: "2022-05-15",
    status: "Superseded",
    reviewer: "Jane Doe",
    changes: 24,
  },
]

const timelineData = [
  {
    id: 1,
    title: "DMF Submitted",
    date: "2022-05-15",
    description: "Initial submission of DMF for Acetaminophen",
    details: "Submitted by John Doe. Included manufacturing process, specifications, and stability data.",
    type: "submission",
    actions: ["View Details"],
  },
  {
    id: 2,
    title: "DMF Acknowledged",
    date: "2022-06-10",
    description: "FDA acknowledged receipt of DMF",
    details: null,
    type: "acknowledgment",
    actions: ["View Letter"],
  },
  {
    id: 3,
    title: "Annual Report Submitted",
    date: "2022-11-15",
    description: "First annual report update",
    details: "Updated stability data and minor administrative changes.",
    type: "update",
    actions: ["View Report"],
  },
  {
    id: 4,
    title: "Manufacturing Change",
    date: "2023-03-22",
    description: "Updated manufacturing process",
    details: "Changed manufacturing process to improve yield and reduce impurities.",
    type: "update",
    actions: ["View Changes", "Compare Versions"],
  },
  {
    id: 5,
    title: "Deficiency Letter Received",
    date: "2023-04-18",
    description: "FDA identified issues with the manufacturing process",
    details: "Concerns about impurity profile and process validation.",
    type: "deficiency",
    actions: ["View Letter", "Create Response"],
  },
  {
    id: 6,
    title: "Response Submitted",
    date: "2023-05-20",
    description: "Response to FDA deficiency letter",
    details: "Provided additional validation data and impurity characterization.",
    type: "response",
    actions: ["View Response"],
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Active":
      return "default"
    case "Superseded":
      return "secondary"
    case "Rejected":
      return "destructive"
    default:
      return "outline"
  }
}

function getTimelineIconBackground(type: string): string {
  switch (type) {
    case "submission":
      return "bg-blue-100"
    case "acknowledgment":
      return "bg-green-100"
    case "update":
      return "bg-purple-100"
    case "deficiency":
      return "bg-red-100"
    case "response":
      return "bg-yellow-100"
    default:
      return "bg-gray-100"
  }
}

function getTimelineIcon(type: string) {
  switch (type) {
    case "submission":
      return <FileText className="h-5 w-5 text-blue-600" />
    case "acknowledgment":
      return <CheckCircle className="h-5 w-5 text-green-600" />
    case "update":
      return <RefreshCw className="h-5 w-5 text-purple-600" />
    case "deficiency":
      return <AlertCircle className="h-5 w-5 text-red-600" />
    case "response":
      return <Clock className="h-5 w-5 text-yellow-600" />
    default:
      return <Clock className="h-5 w-5 text-gray-600" />
  }
}
