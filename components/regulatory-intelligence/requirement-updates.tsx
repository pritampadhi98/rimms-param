"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Bell, Eye, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RequirementUpdates() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")

  // Mock regulatory updates data
  const updates = [
    {
      id: "UPD-001",
      title: "Updated eCTD Requirements for Module 3",
      authority: "FDA",
      country: "United States",
      type: "Submission Format",
      publicationDate: "2023-09-10",
      effectiveDate: "2024-01-01",
      impact: "High",
      status: "Upcoming",
    },
    {
      id: "UPD-002",
      title: "New Safety Reporting Requirements for Biologics",
      authority: "EMA",
      country: "European Union",
      type: "Safety Reporting",
      publicationDate: "2023-08-15",
      effectiveDate: "2023-11-01",
      impact: "High",
      status: "Upcoming",
    },
    {
      id: "UPD-003",
      title: "Revised Clinical Trial Application Process",
      authority: "PMDA",
      country: "Japan",
      type: "Clinical Trials",
      publicationDate: "2023-07-22",
      effectiveDate: "2023-10-01",
      impact: "Medium",
      status: "Active",
    },
    {
      id: "UPD-004",
      title: "Updated Fee Schedule for 2024",
      authority: "Health Canada",
      country: "Canada",
      type: "Fees",
      publicationDate: "2023-09-05",
      effectiveDate: "2024-04-01",
      impact: "Low",
      status: "Upcoming",
    },
    {
      id: "UPD-005",
      title: "New Requirements for Pediatric Investigation Plans",
      authority: "EMA",
      country: "European Union",
      type: "Pediatrics",
      publicationDate: "2023-08-30",
      effectiveDate: "2024-03-01",
      impact: "Medium",
      status: "Upcoming",
    },
    {
      id: "UPD-006",
      title: "Updated GMP Requirements for Sterile Products",
      authority: "TGA",
      country: "Australia",
      type: "GMP",
      publicationDate: "2023-07-15",
      effectiveDate: "2023-10-15",
      impact: "High",
      status: "Upcoming",
    },
    {
      id: "UPD-007",
      title: "New Pharmacovigilance Inspection Program",
      authority: "MHRA",
      country: "United Kingdom",
      type: "Pharmacovigilance",
      publicationDate: "2023-08-10",
      effectiveDate: "2023-11-10",
      impact: "Medium",
      status: "Upcoming",
    },
    {
      id: "UPD-008",
      title: "Revised Bioequivalence Study Requirements",
      authority: "ANVISA",
      country: "Brazil",
      type: "Bioequivalence",
      publicationDate: "2023-09-01",
      effectiveDate: "2024-01-15",
      impact: "Medium",
      status: "Upcoming",
    },
    {
      id: "UPD-009",
      title: "New Electronic Submission Gateway",
      authority: "NMPA",
      country: "China",
      type: "Submission Format",
      publicationDate: "2023-08-25",
      effectiveDate: "2024-02-01",
      impact: "High",
      status: "Upcoming",
    },
    {
      id: "UPD-010",
      title: "Updated Requirements for Post-Approval Changes",
      authority: "CDSCO",
      country: "India",
      type: "Post-Approval",
      publicationDate: "2023-07-30",
      effectiveDate: "2023-12-01",
      impact: "Medium",
      status: "Upcoming",
    },
  ]

  const filteredUpdates = updates.filter(
    (update) =>
      (update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.country.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (typeFilter === "all" || update.type === typeFilter),
  )

  // Get unique update types for filter
  const uniqueTypes = Array.from(new Set(updates.map((update) => update.type)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Regulatory Requirement Updates</CardTitle>
        <CardDescription>Automated monitoring of regulatory changes by market</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search updates..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {uniqueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
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
              <TableHead>Update</TableHead>
              <TableHead>Authority</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Publication Date</TableHead>
              <TableHead>Effective Date</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUpdates.map((update) => (
              <TableRow key={update.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-muted-foreground" />
                    {update.title}
                  </div>
                </TableCell>
                <TableCell>{update.authority}</TableCell>
                <TableCell>{update.country}</TableCell>
                <TableCell>{update.type}</TableCell>
                <TableCell>{update.publicationDate}</TableCell>
                <TableCell>{update.effectiveDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      update.impact === "High" ? "destructive" : update.impact === "Medium" ? "default" : "outline"
                    }
                  >
                    {update.impact}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      update.status === "Active" ? "success" : update.status === "Upcoming" ? "default" : "outline"
                    }
                  >
                    {update.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Calendar className="h-4 w-4" />
                      <span className="sr-only">Add to Calendar</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
