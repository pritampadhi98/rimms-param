"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search, Plus, Download, Info, Edit, Trash2, ChevronDown, ChevronUp } from "lucide-react"
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

export function DMFClassification() {
  const [activeTab, setActiveTab] = useState("types")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedType, setExpandedType] = useState<string | null>(null)

  const toggleExpand = (typeId: string) => {
    if (expandedType === typeId) {
      setExpandedType(null)
    } else {
      setExpandedType(typeId)
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="types" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="types">DMF Types</TabsTrigger>
          <TabsTrigger value="add">Add/Edit Type</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="types" className="space-y-4 pt-4">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search DMF types or attributes..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Type
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]"></TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Count</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dmfTypes.map((type) => (
                  <>
                    <TableRow key={type.id} className={expandedType === type.id ? "bg-muted/50" : ""}>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleExpand(type.id)}
                          aria-label={expandedType === type.id ? "Collapse" : "Expand"}
                        >
                          {expandedType === type.id ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </Button>
                      </TableCell>
                      <TableCell className="font-medium">{type.name}</TableCell>
                      <TableCell>{type.description}</TableCell>
                      <TableCell>{type.region}</TableCell>
                      <TableCell>
                        <Badge>{type.count}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={type.status === "Active" ? "default" : "secondary"}>{type.status}</Badge>
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
                              <Info className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" /> Edit Type
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    {expandedType === type.id && (
                      <TableRow>
                        <TableCell colSpan={7} className="bg-muted/30 p-4">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium mb-2">Attributes</h4>
                                <ul className="space-y-1 text-sm">
                                  {type.attributes.map((attr, index) => (
                                    <li key={index} className="flex items-center">
                                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                                      {attr}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Requirements</h4>
                                <ul className="space-y-1 text-sm">
                                  {type.requirements.map((req, index) => (
                                    <li key={index} className="flex items-center">
                                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Related DMFs</h4>
                              <div className="grid grid-cols-3 gap-2">
                                {type.relatedDMFs.map((dmf, index) => (
                                  <Badge key={index} variant="outline" className="justify-start">
                                    {dmf}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="add" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Add/Edit DMF Type</CardTitle>
              <CardDescription>Define a new DMF type or modify an existing one</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type Name</label>
                    <Input placeholder="e.g., Type II - Drug Substance" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                      className="w-full min-h-[100px] p-2 border rounded-md"
                      placeholder="Detailed description of the DMF type"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Region</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="">Select region</option>
                      <option value="us-fda">US FDA</option>
                      <option value="eu-ema">EU EMA</option>
                      <option value="japan-pmda">Japan PMDA</option>
                      <option value="health-canada">Health Canada</option>
                      <option value="global">Global</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Attributes (one per line)</label>
                    <textarea
                      className="w-full min-h-[100px] p-2 border rounded-md"
                      placeholder="Enter attributes, one per line"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Requirements (one per line)</label>
                    <textarea
                      className="w-full min-h-[100px] p-2 border rounded-md"
                      placeholder="Enter requirements, one per line"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <select className="w-full p-2 border rounded-md">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save DMF Type</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>DMF Type Analytics</CardTitle>
              <CardDescription>Distribution and usage statistics for DMF types</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">142</div>
                      <p className="text-sm text-muted-foreground">Total DMFs</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">5</div>
                      <p className="text-sm text-muted-foreground">DMF Types</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">4</div>
                      <p className="text-sm text-muted-foreground">Regions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">DMF Distribution by Type</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Type II - Drug Substance</span>
                      <span className="text-sm text-muted-foreground">68 DMFs (48%)</span>
                    </div>
                    <Progress value={48} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Type III - Packaging</span>
                      <span className="text-sm text-muted-foreground">42 DMFs (30%)</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Type IV - Excipient</span>
                      <span className="text-sm text-muted-foreground">23 DMFs (16%)</span>
                    </div>
                    <Progress value={16} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Type V - FDA Accepted Reference</span>
                      <span className="text-sm text-muted-foreground">9 DMFs (6%)</span>
                    </div>
                    <Progress value={6} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">DMF Distribution by Region</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">US FDA</span>
                      <span className="text-sm text-muted-foreground">56 DMFs (39%)</span>
                    </div>
                    <Progress value={39} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">EU EMA</span>
                      <span className="text-sm text-muted-foreground">38 DMFs (27%)</span>
                    </div>
                    <Progress value={27} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Health Canada</span>
                      <span className="text-sm text-muted-foreground">27 DMFs (19%)</span>
                    </div>
                    <Progress value={19} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Japan PMDA</span>
                      <span className="text-sm text-muted-foreground">21 DMFs (15%)</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Export Analytics
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const dmfTypes = [
  {
    id: "type-ii",
    name: "Type II - Drug Substance",
    description: "Information on drug substance manufacturing and processing",
    region: "US FDA",
    count: 68,
    status: "Active",
    attributes: [
      "Active Pharmaceutical Ingredients (APIs)",
      "Intermediates",
      "Drug substances",
      "Material used in their preparation",
      "Manufacturing process details",
    ],
    requirements: [
      "Manufacturing process description",
      "Impurity profiles",
      "Stability data",
      "Packaging information",
      "Quality control procedures",
    ],
    relatedDMFs: ["DMF12345", "DMF23456", "DMF34567", "DMF45678"],
  },
  {
    id: "type-iii",
    name: "Type III - Packaging Material",
    description: "Information on packaging materials",
    region: "US FDA",
    count: 42,
    status: "Active",
    attributes: [
      "Container closure systems",
      "Packaging components",
      "Materials of construction",
      "Processing methods",
      "Quality control information",
    ],
    requirements: [
      "Component specifications",
      "Test methods",
      "Validation data",
      "Stability information",
      "Extractables/leachables data",
    ],
    relatedDMFs: ["DMF56789", "DMF67890", "DMF78901"],
  },
  {
    id: "type-iv",
    name: "Type IV - Excipient",
    description: "Information on excipients, colorants, flavors, essences",
    region: "US FDA",
    count: 23,
    status: "Active",
    attributes: ["Excipients", "Colorants", "Flavors", "Essences", "Other additives"],
    requirements: [
      "Manufacturing information",
      "Chemical characterization",
      "Impurity profile",
      "Specifications",
      "Stability data",
    ],
    relatedDMFs: ["DMF89012", "DMF90123"],
  },
  {
    id: "type-v",
    name: "Type V - FDA Accepted Reference",
    description: "FDA accepted reference information",
    region: "US FDA",
    count: 9,
    status: "Active",
    attributes: [
      "Reference information",
      "Site information",
      "Sterile manufacturing process",
      "Biotech manufacturing processes",
      "Novel delivery systems",
    ],
    requirements: [
      "Reference to FDA accepted information",
      "Detailed process information",
      "Validation data",
      "Quality control procedures",
      "Stability data",
    ],
    relatedDMFs: ["DMF01234"],
  },
  {
    id: "asmf",
    name: "ASMF - Active Substance Master File",
    description: "European equivalent of Type II DMF",
    region: "EU EMA",
    count: 18,
    status: "Active",
    attributes: [
      "Active substance information",
      "Manufacturing process",
      "Quality control",
      "Applicant's part (open)",
      "Restricted part (closed)",
    ],
    requirements: [
      "Quality Overall Summary",
      "Applicant's Part (open part)",
      "Restricted Part (closed part)",
      "Manufacturing process description",
      "Process validation data",
    ],
    relatedDMFs: ["ASMF-789", "ASMF-456", "ASMF-123"],
  },
]
