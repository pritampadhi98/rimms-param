"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkIcon, Search } from "lucide-react"

export function CrossReference() {
  const [activeTab, setActiveTab] = useState("references")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Cross-Reference Functionality</CardTitle>
        <CardDescription>
          Create and manage cross-references between regulatory submissions and documents
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="references" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="references">References</TabsTrigger>
            <TabsTrigger value="create">Create Reference</TabsTrigger>
            <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="references" className="space-y-4 mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-1">
                <Input placeholder="Search references by document, submission, or type" />
              </div>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Source Document</TableHead>
                  <TableHead>Target Document</TableHead>
                  <TableHead>Reference Type</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referenceData.map((ref) => (
                  <TableRow key={ref.id}>
                    <TableCell className="font-medium">{ref.source}</TableCell>
                    <TableCell>{ref.target}</TableCell>
                    <TableCell>{ref.type}</TableCell>
                    <TableCell>{ref.created}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(ref.status)}>{ref.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <LinkIcon className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="create" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Source Document</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select source document</option>
                    <option value="doc1">Module 3.2.P.3 - Manufacturing Process</option>
                    <option value="doc2">Module 3.2.P.5 - Control of Drug Product</option>
                    <option value="doc3">Module 3.2.P.8 - Stability</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Source Submission</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select source submission</option>
                    <option value="sub1">ANDA-2023-0045 (Product A)</option>
                    <option value="sub2">NDA-2023-0018 (Product C)</option>
                    <option value="sub3">MAA-2023-0032 (Product B)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Reference Type</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select reference type</option>
                    <option value="direct">Direct Reference</option>
                    <option value="supporting">Supporting Information</option>
                    <option value="related">Related Document</option>
                    <option value="dependency">Dependency</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Document</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select target document</option>
                    <option value="doc1">Module 3.2.P.3 - Manufacturing Process</option>
                    <option value="doc2">Module 3.2.P.5 - Control of Drug Product</option>
                    <option value="doc3">Module 3.2.P.8 - Stability</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Submission</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select target submission</option>
                    <option value="sub1">ANDA-2023-0045 (Product A)</option>
                    <option value="sub2">NDA-2023-0018 (Product C)</option>
                    <option value="sub3">MAA-2023-0032 (Product B)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Input placeholder="Enter reference description" />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="impact" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Impact Analysis</h3>
              <Button variant="outline" size="sm">
                Generate Report
              </Button>
            </div>
            <div className="border rounded-md p-4">
              <p className="text-muted-foreground text-sm mb-4">
                Analyze the impact of changes to referenced documents
              </p>
              <div className="space-y-4">
                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-2">Module 3.2.P.3 - Manufacturing Process</h4>
                  <p className="text-sm text-muted-foreground mb-2">Referenced by 5 documents across 3 submissions</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-amber-50 text-amber-700">
                      High Impact
                    </Badge>
                    <span className="text-sm text-muted-foreground">Changes may affect multiple submissions</span>
                  </div>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-2">Module 3.2.P.5 - Control of Drug Product</h4>
                  <p className="text-sm text-muted-foreground mb-2">Referenced by 2 documents across 1 submission</p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Low Impact
                    </Badge>
                    <span className="text-sm text-muted-foreground">Changes have limited impact</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>Create Reference</Button>
      </CardFooter>
    </Card>
  )
}

const referenceData = [
  {
    id: 1,
    source: "Module 3.2.P.3 - Manufacturing Process",
    target: "Module 3.2.P.5 - Control of Drug Product",
    type: "Direct Reference",
    created: "2023-05-10",
    status: "Active",
  },
  {
    id: 2,
    source: "Module 3.2.P.8 - Stability",
    target: "Module 3.2.P.3 - Manufacturing Process",
    type: "Supporting Information",
    created: "2023-04-22",
    status: "Active",
  },
  {
    id: 3,
    source: "Module 3.2.S.2 - Manufacture",
    target: "Module 3.2.S.4 - Control of Drug Substance",
    type: "Dependency",
    created: "2023-03-15",
    status: "Inactive",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Active":
      return "default"
    case "Inactive":
      return "secondary"
    case "Broken":
      return "destructive"
    default:
      return "outline"
  }
}
