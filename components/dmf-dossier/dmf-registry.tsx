"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Globe, Search, Plus, Edit, Trash2, Eye, Link2, BarChart3, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

export function DMFRegistry() {
  const [activeTab, setActiveTab] = useState("registry")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  // Filter DMFs based on search term, region, and status
  const filteredDmfs = dmfData.filter((dmf) => {
    const matchesSearch =
      dmf.dmfId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dmf.substance.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dmf.holder.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRegion = selectedRegion === "all" || dmf.region === selectedRegion
    const matchesStatus = selectedStatus === "all" || dmf.status === selectedStatus

    return matchesSearch && matchesRegion && matchesStatus
  })

  return (
    <div className="space-y-6">
      <Tabs defaultValue="registry" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="registry">Registry</TabsTrigger>
          <TabsTrigger value="add">Add DMF</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="map">Global Map</TabsTrigger>
        </TabsList>

        <TabsContent value="registry" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search DMFs by ID, substance, or holder"
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap md:flex-nowrap">
              <select
                className="p-2 border rounded-md"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="all">All Regions</option>
                <option value="US FDA">US FDA</option>
                <option value="EU EMA">EU EMA</option>
                <option value="Health Canada">Health Canada</option>
                <option value="Japan PMDA">Japan PMDA</option>
              </select>
              <select
                className="p-2 border rounded-md"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
                <option value="Withdrawn">Withdrawn</option>
              </select>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add DMF
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">DMF ID</TableHead>
                  <TableHead>Substance/Material</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Holder</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submission Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDmfs.length > 0 ? (
                  filteredDmfs.map((dmf) => (
                    <TableRow key={dmf.id}>
                      <TableCell className="font-medium">{dmf.dmfId}</TableCell>
                      <TableCell>{dmf.substance}</TableCell>
                      <TableCell>{dmf.type}</TableCell>
                      <TableCell>{dmf.holder}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Globe className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                          {dmf.region}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(dmf.status)}>{dmf.status}</Badge>
                      </TableCell>
                      <TableCell>{dmf.submissionDate}</TableCell>
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
                              <Edit className="mr-2 h-4 w-4" /> Edit DMF
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link2 className="mr-2 h-4 w-4" /> Manage LOAs
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" /> View Documents
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-4 text-muted-foreground">
                      No DMFs found matching your search criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredDmfs.length} of {dmfData.length} DMFs
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

        <TabsContent value="add" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New DMF</CardTitle>
              <CardDescription>Register a new Drug Master File in the global registry</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">DMF ID</label>
                    <Input placeholder="Enter DMF ID" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Substance/Material</label>
                    <Input placeholder="Enter substance or material name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">DMF Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select DMF type</option>
                      <option value="type1">Type I - Manufacturing Site and Facilities</option>
                      <option value="type2">Type II - Drug Substance</option>
                      <option value="type3">Type III - Packaging Materials</option>
                      <option value="type4">Type IV - Excipient, Colorant, Flavor</option>
                      <option value="type5">Type V - FDA Accepted Reference Information</option>
                      <option value="asmf">ASMF - Active Substance Master File (EU)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">DMF Holder</label>
                    <Input placeholder="Enter DMF holder name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Holder Contact</label>
                    <Input placeholder="Enter contact person name" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Region</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select region</option>
                      <option value="us-fda">US FDA</option>
                      <option value="eu-ema">EU EMA</option>
                      <option value="japan-pmda">Japan PMDA</option>
                      <option value="canada-health">Health Canada</option>
                      <option value="uk-mhra">UK MHRA</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select status</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="inactive">Inactive</option>
                      <option value="withdrawn">Withdrawn</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Submission Date</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expiration Date (if applicable)</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notes</label>
                    <textarea
                      className="w-full p-2 border rounded-md h-[80px]"
                      placeholder="Additional notes"
                    ></textarea>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save DMF</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">DMF Reports</h3>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-blue-500" />
                  Total DMFs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">142</div>
                <p className="text-sm text-muted-foreground">Across all regions</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">By Type</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Type I:</span>
                    <span className="font-medium">12</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Type II:</span>
                    <span className="font-medium">68</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Type III:</span>
                    <span className="font-medium">42</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Type IV:</span>
                    <span className="font-medium">23</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Type V:</span>
                    <span className="font-medium">9</span>
                  </li>
                  <li className="flex justify-between">
                    <span>ASMF:</span>
                    <span className="font-medium">18</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">By Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Active:</span>
                    <span className="font-medium">98</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pending:</span>
                    <span className="font-medium">24</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Inactive:</span>
                    <span className="font-medium">15</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Withdrawn:</span>
                    <span className="font-medium">5</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">DMF Distribution by Region</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">US FDA</span>
                  <span className="text-sm text-muted-foreground">56 DMFs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "39%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">EU EMA</span>
                  <span className="text-sm text-muted-foreground">38 DMFs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "27%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Health Canada</span>
                  <span className="text-sm text-muted-foreground">27 DMFs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "19%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Japan PMDA</span>
                  <span className="text-sm text-muted-foreground">21 DMFs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">DMF Submissions Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-end space-x-2">
                  {[35, 42, 58, 75, 68, 92, 105, 120, 142].map((value, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-primary/80 rounded-t-sm"
                        style={{ height: `${(value / 142) * 150}px` }}
                      ></div>
                      <span className="text-xs mt-2">{2015 + i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top DMF Holders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">PharmaCo Inc.</span>
                      <span className="text-sm text-muted-foreground">18 DMFs</span>
                    </div>
                    <Progress value={18 / 0.42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">ExcipientCorp</span>
                      <span className="text-sm text-muted-foreground">12 DMFs</span>
                    </div>
                    <Progress value={12 / 0.42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">EuroDrug Ltd.</span>
                      <span className="text-sm text-muted-foreground">9 DMFs</span>
                    </div>
                    <Progress value={9 / 0.42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">API Manufacturers Inc.</span>
                      <span className="text-sm text-muted-foreground">7 DMFs</span>
                    </div>
                    <Progress value={7 / 0.42} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="map" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Global DMF Distribution</CardTitle>
              <CardDescription>Geographic distribution of Drug Master Files across regions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] bg-muted rounded-md flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive global map visualization would be displayed here</p>
                  <p className="text-sm text-muted-foreground mt-2">Showing DMF distribution across 32 countries</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="border rounded-md p-3">
                  <h4 className="text-sm font-medium text-muted-foreground">North America</h4>
                  <p className="text-2xl font-bold">83</p>
                  <p className="text-xs text-muted-foreground">DMFs</p>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Europe</h4>
                  <p className="text-2xl font-bold">38</p>
                  <p className="text-xs text-muted-foreground">DMFs</p>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Asia Pacific</h4>
                  <p className="text-2xl font-bold">21</p>
                  <p className="text-xs text-muted-foreground">DMFs</p>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Rest of World</h4>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-xs text-muted-foreground">DMFs</p>
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

const dmfData = [
  {
    id: 1,
    dmfId: "DMF12345",
    substance: "Acetaminophen",
    type: "Type II",
    holder: "PharmaCo Inc.",
    region: "US FDA",
    status: "Active",
    submissionDate: "2022-05-15",
  },
  {
    id: 2,
    dmfId: "DMF23456",
    substance: "Microcrystalline Cellulose",
    type: "Type IV",
    holder: "ExcipientCorp",
    region: "US FDA",
    status: "Active",
    submissionDate: "2022-07-22",
  },
  {
    id: 3,
    dmfId: "ASMF-789",
    substance: "Ibuprofen",
    type: "ASMF",
    holder: "EuroDrug Ltd.",
    region: "EU EMA",
    status: "Active",
    submissionDate: "2022-09-10",
  },
  {
    id: 4,
    dmfId: "DMF34567",
    substance: "HDPE Bottle",
    type: "Type III",
    holder: "PackagingPro",
    region: "US FDA",
    status: "Active",
    submissionDate: "2022-11-05",
  },
  {
    id: 5,
    dmfId: "DMF45678",
    substance: "Manufacturing Facility",
    type: "Type I",
    holder: "PharmaCo Inc.",
    region: "US FDA",
    status: "Pending",
    submissionDate: "2023-01-18",
  },
  {
    id: 6,
    dmfId: "DMF56789",
    substance: "Magnesium Stearate",
    type: "Type IV",
    holder: "ExcipientCorp",
    region: "US FDA",
    status: "Active",
    submissionDate: "2022-08-30",
  },
  {
    id: 7,
    dmfId: "J-DMF-456",
    substance: "Lactose Monohydrate",
    type: "Type IV",
    holder: "JapanExcipients Co.",
    region: "Japan PMDA",
    status: "Active",
    submissionDate: "2022-10-12",
  },
  {
    id: 8,
    dmfId: "HC-DMF-789",
    substance: "Metformin HCl",
    type: "Type II",
    holder: "CanadaPharma Ltd.",
    region: "Health Canada",
    status: "Active",
    submissionDate: "2022-12-05",
  },
  {
    id: 9,
    dmfId: "DMF67890",
    substance: "Blister Packaging",
    type: "Type III",
    holder: "PackagingPro",
    region: "US FDA",
    status: "Inactive",
    submissionDate: "2021-11-15",
  },
  {
    id: 10,
    dmfId: "ASMF-456",
    substance: "Metformin HCl",
    type: "ASMF",
    holder: "EuroDrug Ltd.",
    region: "EU EMA",
    status: "Active",
    submissionDate: "2022-06-20",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Active":
      return "default"
    case "Pending":
      return "secondary"
    case "Inactive":
      return "outline"
    case "Withdrawn":
      return "destructive"
    default:
      return "outline"
  }
}
