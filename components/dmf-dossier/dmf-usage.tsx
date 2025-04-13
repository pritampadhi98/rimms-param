"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Download, FileText, LinkIcon, Search } from "lucide-react"

export function DMFUsage() {
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
          View Usage
        </Button>
        <Button variant="outline">
          <BarChart3 className="h-4 w-4 mr-2" />
          Analytics
        </Button>
      </div>

      <div className="border rounded-md p-4 mb-6">
        <h3 className="text-lg font-medium mb-2">DMF12345 - Acetaminophen (Type II)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="border rounded-md p-3">
            <h4 className="font-medium mb-1">Total References</h4>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Applications referencing this DMF</p>
          </div>
          <div className="border rounded-md p-3">
            <h4 className="font-medium mb-1">Active LOAs</h4>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Current active authorizations</p>
          </div>
          <div className="border rounded-md p-3">
            <h4 className="font-medium mb-1">Companies</h4>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Unique companies using this DMF</p>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Application</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>LOA Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Region</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usageData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.application}</TableCell>
              <TableCell>{item.company}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.loaDate}</TableCell>
              <TableCell>
                <Badge variant={item.status === "Active" ? "default" : "secondary"}>{item.status}</Badge>
              </TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  View
                </Button>
                <Button variant="ghost" size="sm">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  LOA
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {usageData.length} of {usageData.length} references
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  )
}

const usageData = [
  {
    id: 1,
    application: "ANDA 203456",
    company: "Pharma Solutions Inc.",
    product: "Generic Acetaminophen Tablets",
    loaDate: "2023-01-15",
    status: "Active",
    region: "US FDA",
  },
  {
    id: 2,
    application: "ANDA 204789",
    company: "Generic Meds Ltd.",
    product: "Pain Relief Tablets",
    loaDate: "2023-02-22",
    status: "Active",
    region: "US FDA",
  },
  {
    id: 3,
    application: "MA-EU-2022-456",
    company: "EuroPharm GmbH",
    product: "Paracetamol Tablets",
    loaDate: "2022-11-05",
    status: "Active",
    region: "EU EMA",
  },
  {
    id: 4,
    application: "ANDA 198765",
    company: "Tablet Formulations Co.",
    product: "Fever Reducer Tablets",
    loaDate: "2021-08-30",
    status: "Inactive",
    region: "US FDA",
  },
  {
    id: 5,
    application: "ANDA 205123",
    company: "MediGeneric Inc.",
    product: "Pain Relief Capsules",
    loaDate: "2023-03-10",
    status: "Active",
    region: "US FDA",
  },
]
