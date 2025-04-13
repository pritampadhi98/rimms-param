"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftRight, Download, FileText, Layers } from "lucide-react"

export function ContentHarmonization() {
  const [activeTab, setActiveTab] = useState("harmonize")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Content Harmonization Tools</CardTitle>
        <CardDescription>
          Harmonize content across different regulatory submissions to ensure consistency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="harmonize" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="harmonize">Harmonize</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="harmonize" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Source Document</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select source document</option>
                  <option value="doc1">Module 3.2.P.3 - Manufacturing Process (US)</option>
                  <option value="doc2">Module 3.2.P.5 - Control of Drug Product (US)</option>
                  <option value="doc3">Module 3.2.P.8 - Stability (US)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Documents</label>
                <select className="w-full p-2 border rounded-md" multiple size={3}>
                  <option value="doc1-eu">Module 3.2.P.3 - Manufacturing Process (EU)</option>
                  <option value="doc1-jp">Module 3.2.P.3 - Manufacturing Process (Japan)</option>
                  <option value="doc1-ca">Module 3.2.P.3 - Manufacturing Process (Canada)</option>
                </select>
              </div>
            </div>
            <Button className="mb-4">
              <Layers className="h-4 w-4 mr-2" />
              Harmonize Content
            </Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Document</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Differences</TableHead>
                  <TableHead>Harmonization Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {harmonizationData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.document}</TableCell>
                    <TableCell>{item.region}</TableCell>
                    <TableCell>{item.differences}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(item.status)}>{item.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ArrowLeftRight className="h-4 w-4 mr-2" />
                        Compare
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="templates" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Harmonization Templates</h3>
              <Button size="sm">
                <FileText className="h-4 w-4 mr-2" />
                New Template
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Manufacturing Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Template for harmonizing manufacturing process descriptions across regions
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Global</Badge>
                    <span className="text-xs text-muted-foreground">Updated: 2023-05-10</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <FileText className="h-4 w-4 mr-2" />
                    Use
                  </Button>
                </CardFooter>
              </Card>
              <Card className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Stability Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Template for harmonizing stability data presentation across regions
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Global</Badge>
                    <span className="text-xs text-muted-foreground">Updated: 2023-04-22</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <FileText className="h-4 w-4 mr-2" />
                    Use
                  </Button>
                </CardFooter>
              </Card>
              <Card className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Control Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    Template for harmonizing control strategy documentation across regions
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Global</Badge>
                    <span className="text-xs text-muted-foreground">Updated: 2023-03-15</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <FileText className="h-4 w-4 mr-2" />
                    Use
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="history" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Harmonization History</h3>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export History
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Source Document</TableHead>
                  <TableHead>Target Documents</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-05-15</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Manufacturing Process (US)</TableCell>
                  <TableCell>EU, Japan, Canada</TableCell>
                  <TableCell>
                    <Badge variant="default">Complete</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-04-22</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>Stability Data (US)</TableCell>
                  <TableCell>EU, Japan</TableCell>
                  <TableCell>
                    <Badge variant="default">Complete</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-03-10</TableCell>
                  <TableCell>Robert Johnson</TableCell>
                  <TableCell>Control Strategy (US)</TableCell>
                  <TableCell>EU, Canada</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Partial</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>Apply Harmonization</Button>
      </CardFooter>
    </Card>
  )
}

const harmonizationData = [
  {
    id: 1,
    document: "Manufacturing Process",
    region: "EU",
    differences: "Minor text differences",
    status: "Ready",
  },
  {
    id: 2,
    document: "Manufacturing Process",
    region: "Japan",
    differences: "Different formatting, content variations",
    status: "Needs Review",
  },
  {
    id: 3,
    document: "Manufacturing Process",
    region: "Canada",
    differences: "Minor text differences",
    status: "Ready",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Ready":
      return "default"
    case "Needs Review":
      return "secondary"
    case "Conflict":
      return "destructive"
    default:
      return "outline"
  }
}
