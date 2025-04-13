"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, FileText, Globe, Plus, Upload } from "lucide-react"

export function CoreDossier() {
  const [activeTab, setActiveTab] = useState("dossiers")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Global Core Dossier Management</CardTitle>
        <CardDescription>
          Manage core dossier content that can be reused across multiple regional submissions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="dossiers" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dossiers">Core Dossiers</TabsTrigger>
            <TabsTrigger value="create">Create/Edit</TabsTrigger>
            <TabsTrigger value="regions">Regional Adaptations</TabsTrigger>
          </TabsList>
          <TabsContent value="dossiers" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Available Core Dossiers</h3>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Core Dossier
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Dossier Name</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dossierData.map((dossier) => (
                  <TableRow key={dossier.id}>
                    <TableCell className="font-medium">{dossier.name}</TableCell>
                    <TableCell>{dossier.product}</TableCell>
                    <TableCell>{dossier.version}</TableCell>
                    <TableCell>{dossier.updated}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(dossier.status)}>{dossier.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4 mr-2" />
                        Clone
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="create" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Dossier Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter dossier name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Product</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select product</option>
                    <option value="product-a">Product A</option>
                    <option value="product-b">Product B</option>
                    <option value="product-c">Product C</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Version</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter version" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    className="w-full p-2 border rounded-md h-[120px]"
                    placeholder="Enter description"
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select status</option>
                    <option value="draft">Draft</option>
                    <option value="in-review">In Review</option>
                    <option value="approved">Approved</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border border-dashed rounded-md p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Upload Core Documents</h3>
              <p className="text-sm text-muted-foreground mb-4">Drag and drop files here or click to browse</p>
              <Button>Browse Files</Button>
            </div>
          </TabsContent>
          <TabsContent value="regions" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Regional Adaptations</h3>
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                Add Region
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regionData.map((region) => (
                <Card key={region.id} className="cursor-pointer hover:bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-muted-foreground" />
                      {region.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{region.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{region.status}</Badge>
                      <span className="text-xs text-muted-foreground">Updated: {region.updated}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>Save Core Dossier</Button>
      </CardFooter>
    </Card>
  )
}

const dossierData = [
  {
    id: 1,
    name: "Product A Core Dossier",
    product: "Product A",
    version: "2.1",
    updated: "2023-05-15",
    status: "Approved",
  },
  {
    id: 2,
    name: "Product B Core Dossier",
    product: "Product B",
    version: "1.3",
    updated: "2023-04-22",
    status: "In Review",
  },
  {
    id: 3,
    name: "Product C Core Dossier",
    product: "Product C",
    version: "1.0",
    updated: "2023-03-10",
    status: "Draft",
  },
]

const regionData = [
  {
    id: 1,
    name: "US FDA",
    description: "Adaptation for United States FDA requirements",
    updated: "2023-05-10",
    status: "Complete",
  },
  {
    id: 2,
    name: "EU EMA",
    description: "Adaptation for European Union EMA requirements",
    updated: "2023-04-28",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Japan PMDA",
    description: "Adaptation for Japan PMDA requirements",
    updated: "2023-04-15",
    status: "Pending",
  },
  {
    id: 4,
    name: "Canada Health",
    description: "Adaptation for Health Canada requirements",
    updated: "2023-03-22",
    status: "Complete",
  },
  {
    id: 5,
    name: "UK MHRA",
    description: "Adaptation for UK MHRA requirements",
    updated: "2023-03-10",
    status: "In Progress",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Approved":
      return "default"
    case "In Review":
      return "secondary"
    case "Draft":
      return "outline"
    case "Archived":
      return "destructive"
    default:
      return "outline"
  }
}
