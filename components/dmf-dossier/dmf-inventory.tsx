"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Download, FileText, Plus, Search, XCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function DMFInventory() {
  const [selectedDMF, setSelectedDMF] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <select
            className="w-full p-2 border rounded-md"
            value={selectedDMF}
            onChange={(e) => setSelectedDMF(e.target.value)}
          >
            <option value="">Select DMF</option>
            <option value="DMF12345">DMF12345 - Acetaminophen</option>
            <option value="DMF23456">DMF23456 - Microcrystalline Cellulose</option>
            <option value="ASMF-789">ASMF-789 - Ibuprofen</option>
          </select>
        </div>
        <Button>
          <Search className="h-4 w-4 mr-2" />
          View Inventory
        </Button>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Document
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-2">Completeness</h3>
          <div className="flex items-center space-x-2">
            <Progress value={85} className="h-2 flex-1" />
            <span className="font-bold">85%</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">15 of 18 required documents</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-2">Document Count</h3>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm text-muted-foreground">Total documents in inventory</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-2">Last Updated</h3>
          <p className="text-xl font-medium">2023-04-15</p>
          <p className="text-sm text-muted-foreground">By John Smith</p>
        </div>
      </div>

      <div className="border rounded-md p-4 mb-6">
        <h3 className="text-lg font-medium mb-4">DMF12345 - Acetaminophen (Type II)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Administrative Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                <span>DMF Submission Letter</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </li>
              <li className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                <span>Administrative Contacts</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </li>
              <li className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                <span>Environmental Assessment</span>
                <XCircle className="h-5 w-5 text-red-500" />
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Chemistry Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                <span>Manufacturing Process</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </li>
              <li className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                <span>Specifications</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </li>
              <li className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                <span>Stability Data</span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Document Title</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventoryData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.section}</TableCell>
              <TableCell>{item.version}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Badge variant={item.status === "Complete" ? "default" : "destructive"}>{item.status}</Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const inventoryData = [
  {
    id: 1,
    title: "Manufacturing Process Description",
    section: "Chemistry",
    version: "2.1",
    date: "2023-03-15",
    status: "Complete",
  },
  {
    id: 2,
    title: "Analytical Methods",
    section: "Chemistry",
    version: "1.3",
    date: "2023-02-22",
    status: "Complete",
  },
  {
    id: 3,
    title: "Stability Data (36 months)",
    section: "Chemistry",
    version: "1.0",
    date: "2023-01-10",
    status: "Complete",
  },
  {
    id: 4,
    title: "Environmental Assessment",
    section: "Administrative",
    version: "-",
    date: "-",
    status: "Missing",
  },
  {
    id: 5,
    title: "DMF Submission Letter",
    section: "Administrative",
    version: "1.0",
    date: "2022-11-15",
    status: "Complete",
  },
]
