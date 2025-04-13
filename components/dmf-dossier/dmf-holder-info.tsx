"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Filter, Search, FileText, Plus, Download, Mail, Phone } from "lucide-react"

export function DMFHolderInfo() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search holders by name, ID, or location"
            className="w-full p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Add Holder
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Holder ID</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>DMF Count</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Primary Contact</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holderData.map((holder) => (
            <TableRow key={holder.id}>
              <TableCell className="font-medium">{holder.holderId}</TableCell>
              <TableCell>{holder.companyName}</TableCell>
              <TableCell>{holder.location}</TableCell>
              <TableCell>{holder.dmfCount}</TableCell>
              <TableCell>
                <Badge variant={holder.status === "Active" ? "default" : "secondary"}>{holder.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{holder.primaryContact}</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Mail className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Phone className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
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

      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {holderData.length} of {holderData.length} holders
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Total Holders</h3>
                <p className="text-3xl font-bold mt-2">24</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Active Holders</h3>
                <p className="text-3xl font-bold mt-2">18</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <Badge className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Total DMFs</h3>
                <p className="text-3xl font-bold mt-2">42</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const holderData = [
  {
    id: 1,
    holderId: "H-2023-001",
    companyName: "PharmaCo Inc.",
    location: "United States",
    dmfCount: 8,
    status: "Active",
    primaryContact: "John Smith",
  },
  {
    id: 2,
    holderId: "H-2023-002",
    companyName: "ExcipientCorp",
    location: "United States",
    dmfCount: 5,
    status: "Active",
    primaryContact: "Jane Doe",
  },
  {
    id: 3,
    holderId: "H-2022-015",
    companyName: "EuroDrug Ltd.",
    location: "Germany",
    dmfCount: 3,
    status: "Active",
    primaryContact: "Hans Mueller",
  },
  {
    id: 4,
    holderId: "H-2021-008",
    companyName: "PackagingPro",
    location: "Canada",
    dmfCount: 2,
    status: "Inactive",
    primaryContact: "Sarah Johnson",
  },
  {
    id: 5,
    holderId: "H-2022-022",
    companyName: "API Manufacturers Inc.",
    location: "India",
    dmfCount: 6,
    status: "Active",
    primaryContact: "Raj Patel",
  },
]
