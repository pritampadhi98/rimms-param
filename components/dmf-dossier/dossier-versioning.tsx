"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpDown, Clock, FileText, GitBranch, History } from "lucide-react"

export function DossierVersioning() {
  const [activeTab, setActiveTab] = useState("versions")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dossier Versioning</CardTitle>
        <CardDescription>
          Track and manage different versions of regulatory dossiers throughout the submission lifecycle
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="versions" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="versions">Versions</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="versions" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Product X - US NDA</h3>
              <Button size="sm">
                <GitBranch className="h-4 w-4 mr-2" />
                Create New Version
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Version</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Created By</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {versionData.map((version) => (
                  <TableRow key={version.id}>
                    <TableCell className="font-medium">{version.version}</TableCell>
                    <TableCell>{version.description}</TableCell>
                    <TableCell>{version.createdBy}</TableCell>
                    <TableCell>{version.date}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(version.status)}>{version.status}</Badge>
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
          </TabsContent>
          <TabsContent value="compare" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Base Version</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="1.0">Version 1.0 (Initial Submission)</option>
                  <option value="1.1">Version 1.1 (Response to Deficiency)</option>
                  <option value="1.2">Version 1.2 (Label Update)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Compare Version</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="1.0">Version 1.0 (Initial Submission)</option>
                  <option value="1.1">Version 1.1 (Response to Deficiency)</option>
                  <option value="1.2" selected>
                    Version 1.2 (Label Update)
                  </option>
                </select>
              </div>
            </div>
            <Button className="mb-4">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Compare Versions
            </Button>
            <div className="border rounded-md p-4">
              <p className="text-muted-foreground text-sm">Select two versions to compare and view differences</p>
            </div>
          </TabsContent>
          <TabsContent value="history" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Version History</h3>
              <Button variant="outline" size="sm">
                <History className="h-4 w-4 mr-2" />
                Export History
              </Button>
            </div>
            <div className="space-y-4">
              {versionData.map((version) => (
                <div key={version.id} className="border rounded-md p-4 flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Version {version.version}</h4>
                      <span className="text-sm text-muted-foreground">{version.date}</span>
                    </div>
                    <p className="text-sm mt-1">{version.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-muted-foreground">Created by {version.createdBy}</span>
                      <Badge variant={getStatusVariant(version.status)} className="ml-4">
                        {version.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>Export Version</Button>
      </CardFooter>
    </Card>
  )
}

const versionData = [
  {
    id: 1,
    version: "1.2",
    description: "Label Update",
    createdBy: "Jane Smith",
    date: "2023-04-15",
    status: "Current",
  },
  {
    id: 2,
    version: "1.1",
    description: "Response to Deficiency",
    createdBy: "John Doe",
    date: "2023-03-10",
    status: "Superseded",
  },
  {
    id: 3,
    version: "1.0",
    description: "Initial Submission",
    createdBy: "John Doe",
    date: "2023-02-01",
    status: "Superseded",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Current":
      return "default"
    case "Superseded":
      return "secondary"
    case "Rejected":
      return "destructive"
    default:
      return "outline"
  }
}
