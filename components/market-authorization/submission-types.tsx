"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, FileText, Info } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SubmissionTypes() {
  const [searchQuery, setSearchQuery] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")

  // Mock submission type data
  const submissionTypes = [
    {
      id: "ST-001",
      name: "New Drug Application (NDA)",
      region: "North America",
      authority: "FDA",
      category: "Initial Application",
      timeline: "10-12 months",
      requirements: 42,
      status: "Active",
    },
    {
      id: "ST-002",
      name: "Marketing Authorization Application (MAA)",
      region: "Europe",
      authority: "EMA",
      category: "Initial Application",
      timeline: "12-14 months",
      requirements: 48,
      status: "Active",
    },
    {
      id: "ST-003",
      name: "New Drug Application (NDA)",
      region: "Asia Pacific",
      authority: "PMDA",
      category: "Initial Application",
      timeline: "12 months",
      requirements: 45,
      status: "Active",
    },
    {
      id: "ST-004",
      name: "Abbreviated New Drug Application (ANDA)",
      region: "North America",
      authority: "FDA",
      category: "Generic",
      timeline: "8-10 months",
      requirements: 32,
      status: "Active",
    },
    {
      id: "ST-005",
      name: "Type II Variation",
      region: "Europe",
      authority: "EMA",
      category: "Variation",
      timeline: "6 months",
      requirements: 25,
      status: "Active",
    },
    {
      id: "ST-006",
      name: "Partial Change Application (PCA)",
      region: "Asia Pacific",
      authority: "PMDA",
      category: "Variation",
      timeline: "6-8 months",
      requirements: 28,
      status: "Active",
    },
    {
      id: "ST-007",
      name: "Prior Approval Supplement (PAS)",
      region: "North America",
      authority: "FDA",
      category: "Variation",
      timeline: "4-6 months",
      requirements: 22,
      status: "Active",
    },
    {
      id: "ST-008",
      name: "Biologics License Application (BLA)",
      region: "North America",
      authority: "FDA",
      category: "Biologic",
      timeline: "12 months",
      requirements: 50,
      status: "Active",
    },
    {
      id: "ST-009",
      name: "New Registration Application",
      region: "Latin America",
      authority: "ANVISA",
      category: "Initial Application",
      timeline: "12-18 months",
      requirements: 38,
      status: "Active",
    },
    {
      id: "ST-010",
      name: "New Chemical Entity (NCE)",
      region: "Asia Pacific",
      authority: "TGA",
      category: "Initial Application",
      timeline: "11 months",
      requirements: 40,
      status: "Active",
    },
  ]

  const filteredSubmissionTypes = submissionTypes.filter(
    (type) =>
      (type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        type.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        type.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (regionFilter === "all" || type.region === regionFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submission Type Classification</CardTitle>
        <CardDescription>Comprehensive categorization of submission types by regulatory region</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search submission types..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={regionFilter} onValueChange={setRegionFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="North America">North America</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
              <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
              <SelectItem value="Latin America">Latin America</SelectItem>
              <SelectItem value="Africa">Africa</SelectItem>
              <SelectItem value="Middle East">Middle East</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Submission Type</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Authority</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead>Requirements</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubmissionTypes.map((type) => (
              <TableRow key={type.id}>
                <TableCell className="font-medium">{type.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                    {type.name}
                  </div>
                </TableCell>
                <TableCell>{type.region}</TableCell>
                <TableCell>{type.authority}</TableCell>
                <TableCell>{type.category}</TableCell>
                <TableCell>{type.timeline}</TableCell>
                <TableCell>{type.requirements}</TableCell>
                <TableCell>
                  <Badge variant="success">{type.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Info className="h-4 w-4" />
                    <span className="sr-only">View Details</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
