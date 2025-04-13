"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download, FileText, Search, Upload } from "lucide-react"

export function DocumentRepository() {
  const [activeTab, setActiveTab] = useState("browse")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Document Reuse Repository</CardTitle>
        <CardDescription>
          Centralized repository for reusable regulatory documents to streamline dossier assembly
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="browse" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browse">Browse</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="reuse">Reuse History</TabsTrigger>
          </TabsList>
          <TabsContent value="browse" className="space-y-4 mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-1">
                <Input placeholder="Search documents by title, type, or content" />
              </div>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Document Title</TableHead>
                  <TableHead>Document Type</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead>Reuse Count</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documentData.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.title}</TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.module}</TableCell>
                    <TableCell>{doc.version}</TableCell>
                    <TableCell>{doc.lastUsed}</TableCell>
                    <TableCell>{doc.reuseCount}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="upload" className="space-y-4 mt-4">
            <div className="border border-dashed rounded-md p-8 text-center">
              <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Upload Documents</h3>
              <p className="text-sm text-muted-foreground mb-4">Drag and drop files here or click to browse</p>
              <Button>Browse Files</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Document Title</label>
                  <Input placeholder="Enter document title" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Document Type</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select document type</option>
                    <option value="protocol">Study Protocol</option>
                    <option value="report">Study Report</option>
                    <option value="method">Analytical Method</option>
                    <option value="specification">Specification</option>
                    <option value="sop">Standard Operating Procedure</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">eCTD Module</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select module</option>
                    <option value="m1">Module 1</option>
                    <option value="m2">Module 2</option>
                    <option value="m3">Module 3</option>
                    <option value="m4">Module 4</option>
                    <option value="m5">Module 5</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tags</label>
                  <Input placeholder="Add tags (comma separated)" />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reuse" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Document Reuse History</h3>
              <Button variant="outline" size="sm">
                Export Report
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Reused In</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Modifications</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Quality Overall Summary</TableCell>
                  <TableCell>Product X - EU MAA</TableCell>
                  <TableCell>2023-04-10</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>
                    <Badge variant="outline">Minor</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Manufacturing Process Description</TableCell>
                  <TableCell>Product Y - US NDA</TableCell>
                  <TableCell>2023-03-22</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>
                    <Badge variant="outline">Major</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Stability Protocol</TableCell>
                  <TableCell>Product Z - Japan PMDA</TableCell>
                  <TableCell>2023-02-15</TableCell>
                  <TableCell>Sarah Johnson</TableCell>
                  <TableCell>
                    <Badge variant="outline">None</Badge>
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
        <Button>Add to Dossier</Button>
      </CardFooter>
    </Card>
  )
}

const documentData = [
  {
    id: 1,
    title: "Quality Overall Summary",
    type: "Summary",
    module: "Module 2.3",
    version: "1.2",
    lastUsed: "2023-04-10",
    reuseCount: 5,
  },
  {
    id: 2,
    title: "Manufacturing Process Description",
    type: "Technical",
    module: "Module 3.2.P.3",
    version: "2.1",
    lastUsed: "2023-03-22",
    reuseCount: 3,
  },
  {
    id: 3,
    title: "Stability Protocol",
    type: "Protocol",
    module: "Module 3.2.P.8",
    version: "1.0",
    lastUsed: "2023-02-15",
    reuseCount: 2,
  },
  {
    id: 4,
    title: "Clinical Study Report - Phase 3",
    type: "Report",
    module: "Module 5.3.5",
    version: "1.1",
    lastUsed: "2023-01-30",
    reuseCount: 1,
  },
]
