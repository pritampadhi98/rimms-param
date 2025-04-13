"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Search, Plus, ChevronDown, Eye, Edit, Trash2, Mail, BarChart3 } from "lucide-react"
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

export function DMFAuthorization() {
  const [activeTab, setActiveTab] = useState("loa")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dmfFilter, setDmfFilter] = useState("all")

  // Filter LOAs based on search term, status, and DMF
  const filteredLoas = loaData.filter((loa) => {
    const matchesSearch =
      loa.loaId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loa.dmf.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loa.authorizedParty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loa.application.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || loa.status === statusFilter
    const matchesDmf = dmfFilter === "all" || loa.dmf.includes(dmfFilter)

    return matchesSearch && matchesStatus && matchesDmf
  })

  return (
    <div className="space-y-6">
      <Tabs defaultValue="loa" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="loa">LOA List</TabsTrigger>
          <TabsTrigger value="create">Create LOA</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="loa" className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search LOAs by ID, DMF, or authorized party"
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
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Expired">Expired</option>
                <option value="Withdrawn">Withdrawn</option>
              </select>
              <select
                className="p-2 border rounded-md"
                value={dmfFilter}
                onChange={(e) => setDmfFilter(e.target.value)}
              >
                <option value="all">All DMFs</option>
                <option value="DMF12345">DMF12345 - Acetaminophen</option>
                <option value="DMF23456">DMF23456 - Microcrystalline Cellulose</option>
                <option value="ASMF-789">ASMF-789 - Ibuprofen</option>
              </select>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                New LOA
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">LOA ID</TableHead>
                  <TableHead>DMF</TableHead>
                  <TableHead>Authorized Party</TableHead>
                  <TableHead>Application</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Expiration Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLoas.length > 0 ? (
                  filteredLoas.map((loa) => (
                    <TableRow key={loa.id}>
                      <TableCell className="font-medium">{loa.loaId}</TableCell>
                      <TableCell>{loa.dmf}</TableCell>
                      <TableCell>{loa.authorizedParty}</TableCell>
                      <TableCell>{loa.application}</TableCell>
                      <TableCell>{loa.issueDate}</TableCell>
                      <TableCell>{loa.expirationDate || "N/A"}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(loa.status)}>{loa.status}</Badge>
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
                              <Edit className="mr-2 h-4 w-4" /> Edit LOA
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" /> Download PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" /> Email LOA
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
                      No LOAs found matching your search criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {filteredLoas.length} of {loaData.length} LOAs
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

        <TabsContent value="create" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Letter of Authorization</CardTitle>
              <CardDescription>Generate a new Letter of Authorization for a DMF</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">LOA ID</label>
                    <Input placeholder="Enter LOA ID (auto-generated if left blank)" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">DMF</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select DMF</option>
                      <option value="dmf12345">DMF12345 - Acetaminophen</option>
                      <option value="dmf23456">DMF23456 - Microcrystalline Cellulose</option>
                      <option value="asmf-789">ASMF-789 - Ibuprofen</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Authorized Party</label>
                    <Input placeholder="Enter authorized party name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Authorized Party Contact</label>
                    <Input placeholder="Enter contact person name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Authorized Party Email</label>
                    <Input type="email" placeholder="Enter contact email" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Application</label>
                    <Input placeholder="Enter application number (e.g., ANDA, NDA)" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Application Type</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select application type</option>
                      <option value="anda">ANDA (Abbreviated New Drug Application)</option>
                      <option value="nda">NDA (New Drug Application)</option>
                      <option value="ind">IND (Investigational New Drug)</option>
                      <option value="maa">MAA (Marketing Authorization Application)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Issue Date</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expiration Date (if applicable)</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select status</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="expired">Expired</option>
                      <option value="withdrawn">Withdrawn</option>
                    </select>
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
              <div className="flex gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button>Create LOA</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">LOA Reports</h3>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total LOAs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">86</div>
                <p className="text-sm text-muted-foreground">Across all DMFs</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active LOAs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">68</div>
                <p className="text-sm text-muted-foreground">Currently active</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Expiring Soon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Expiring in next 90 days</p>
              </CardContent>
            </Card>
          </div>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">LOAs by DMF</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">DMF12345 - Acetaminophen</span>
                  <span className="text-sm text-muted-foreground">32 LOAs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "43%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">DMF23456 - Microcrystalline Cellulose</span>
                  <span className="text-sm text-muted-foreground">24 LOAs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "29%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">ASMF-789 - Ibuprofen</span>
                  <span className="text-sm text-muted-foreground">18 LOAs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "18%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">LOA Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Active</span>
                      <span className="text-sm text-muted-foreground">68 (79%)</span>
                    </div>
                    <Progress value={79} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Pending</span>
                      <span className="text-sm text-muted-foreground">8 (9%)</span>
                    </div>
                    <Progress value={9} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Expired</span>
                      <span className="text-sm text-muted-foreground">6 (7%)</span>
                    </div>
                    <Progress value={7} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Withdrawn</span>
                      <span className="text-sm text-muted-foreground">4 (5%)</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">LOAs by Application Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">ANDA</span>
                      <span className="text-sm text-muted-foreground">42 LOAs</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">NDA</span>
                      <span className="text-sm text-muted-foreground">18 LOAs</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">IND</span>
                      <span className="text-sm text-muted-foreground">12 LOAs</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">MAA</span>
                      <span className="text-sm text-muted-foreground">14 LOAs</span>
                    </div>
                    <Progress value={14} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>LOA Templates</CardTitle>
                  <CardDescription>Manage and customize Letter of Authorization templates</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  New Template
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">US FDA Standard</CardTitle>
                    <CardDescription>Standard template for US FDA submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p>Last updated: 2023-03-15</p>
                      <p>Used 42 times</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">EU EMA Standard</CardTitle>
                    <CardDescription>Standard template for EU EMA submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p>Last updated: 2023-02-22</p>
                      <p>Used 18 times</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Health Canada</CardTitle>
                    <CardDescription>Standard template for Health Canada submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p>Last updated: 2023-01-10</p>
                      <p>Used 12 times</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Template Usage Analytics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const loaData = [
  {
    id: 1,
    loaId: "LOA-2023-001",
    dmf: "DMF12345 - Acetaminophen",
    authorizedParty: "Pharma Solutions Inc.",
    application: "ANDA 203456",
    issueDate: "2023-01-15",
    expirationDate: "2025-01-15",
    status: "Active",
  },
  {
    id: 2,
    loaId: "LOA-2023-002",
    dmf: "DMF23456 - Microcrystalline Cellulose",
    authorizedParty: "Generic Meds Ltd.",
    application: "ANDA 204789",
    issueDate: "2023-02-22",
    expirationDate: "2025-02-22",
    status: "Active",
  },
  {
    id: 3,
    loaId: "LOA-2022-015",
    dmf: "ASMF-789 - Ibuprofen",
    authorizedParty: "EuroPharm GmbH",
    application: "MA-EU-2022-456",
    issueDate: "2022-11-05",
    expirationDate: "2024-11-05",
    status: "Pending",
  },
  {
    id: 4,
    loaId: "LOA-2021-008",
    dmf: "DMF34567 - Magnesium Stearate",
    authorizedParty: "Tablet Formulations Co.",
    application: "ANDA 198765",
    issueDate: "2021-08-30",
    expirationDate: "2023-08-30",
    status: "Expired",
  },
  {
    id: 5,
    loaId: "LOA-2023-003",
    dmf: "DMF12345 - Acetaminophen",
    authorizedParty: "MediGeneric Inc.",
    application: "ANDA 205123",
    issueDate: "2023-03-10",
    expirationDate: "2025-03-10",
    status: "Active",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Active":
      return "default"
    case "Pending":
      return "secondary"
    case "Expired":
      return "destructive"
    case "Withdrawn":
      return "outline"
    default:
      return "outline"
  }
}
