"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Clock, BarChart, Info } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ReviewTimelines() {
  const [searchQuery, setSearchQuery] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Mock review timeline data
  const timelines = [
    {
      id: "TL-001",
      submissionType: "New Drug Application (NDA)",
      authority: "FDA",
      country: "United States",
      region: "North America",
      averageTime: "10-12 months",
      clockStops: "Yes",
      fastTrack: "Available",
      lastUpdated: "2023-08-15",
    },
    {
      id: "TL-002",
      submissionType: "Marketing Authorization Application (MAA)",
      authority: "EMA",
      country: "European Union",
      region: "Europe",
      averageTime: "12-14 months",
      clockStops: "Yes",
      fastTrack: "Available",
      lastUpdated: "2023-09-02",
    },
    {
      id: "TL-003",
      submissionType: "New Drug Application (NDA)",
      authority: "PMDA",
      country: "Japan",
      region: "Asia Pacific",
      averageTime: "12 months",
      clockStops: "Yes",
      fastTrack: "Available",
      lastUpdated: "2023-07-20",
    },
    {
      id: "TL-004",
      submissionType: "Abbreviated New Drug Application (ANDA)",
      authority: "FDA",
      country: "United States",
      region: "North America",
      averageTime: "8-10 months",
      clockStops: "Yes",
      fastTrack: "Not Available",
      lastUpdated: "2023-08-10",
    },
    {
      id: "TL-005",
      submissionType: "Type II Variation",
      authority: "EMA",
      country: "European Union",
      region: "Europe",
      averageTime: "6 months",
      clockStops: "Yes",
      fastTrack: "Not Available",
      lastUpdated: "2023-09-05",
    },
    {
      id: "TL-006",
      submissionType: "New Drug Submission (NDS)",
      authority: "Health Canada",
      country: "Canada",
      region: "North America",
      averageTime: "10-12 months",
      clockStops: "Yes",
      fastTrack: "Available",
      lastUpdated: "2023-08-22",
    },
    {
      id: "TL-007",
      submissionType: "New Chemical Entity (NCE)",
      authority: "TGA",
      country: "Australia",
      region: "Asia Pacific",
      averageTime: "11 months",
      clockStops: "Yes",
      fastTrack: "Available",
      lastUpdated: "2023-07-15",
    },
    {
      id: "TL-008",
      submissionType: "New Registration Application",
      authority: "ANVISA",
      country: "Brazil",
      region: "Latin America",
      averageTime: "12-18 months",
      clockStops: "Yes",
      fastTrack: "Limited",
      lastUpdated: "2023-06-30",
    },
    {
      id: "TL-009",
      submissionType: "New Drug Application",
      authority: "NMPA",
      country: "China",
      region: "Asia Pacific",
      averageTime: "12-18 months",
      clockStops: "Yes",
      fastTrack: "Available",
      lastUpdated: "2023-08-05",
    },
    {
      id: "TL-010",
      submissionType: "New Drug Application",
      authority: "CDSCO",
      country: "India",
      region: "Asia Pacific",
      averageTime: "12-18 months",
      clockStops: "Yes",
      fastTrack: "Limited",
      lastUpdated: "2023-07-28",
    },
  ]

  // Get unique submission types for filter
  const uniqueTypes = Array.from(new Set(timelines.map((timeline) => timeline.submissionType)))

  const filteredTimelines = timelines.filter(
    (timeline) =>
      (timeline.submissionType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        timeline.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
        timeline.country.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (regionFilter === "all" || timeline.region === regionFilter) &&
      (typeFilter === "all" || timeline.submissionType === typeFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review Timeline Database</CardTitle>
        <CardDescription>Expected review cycles by submission type and country</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search timelines..."
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
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select submission type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Submission Types</SelectItem>
              {uniqueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Submission Type</TableHead>
              <TableHead>Authority</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Average Time</TableHead>
              <TableHead>Clock Stops</TableHead>
              <TableHead>Fast Track</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTimelines.map((timeline) => (
              <TableRow key={timeline.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    {timeline.submissionType}
                  </div>
                </TableCell>
                <TableCell>{timeline.authority}</TableCell>
                <TableCell>{timeline.country}</TableCell>
                <TableCell>{timeline.region}</TableCell>
                <TableCell>{timeline.averageTime}</TableCell>
                <TableCell>{timeline.clockStops}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      timeline.fastTrack === "Available"
                        ? "success"
                        : timeline.fastTrack === "Limited"
                          ? "default"
                          : "outline"
                    }
                  >
                    {timeline.fastTrack}
                  </Badge>
                </TableCell>
                <TableCell>{timeline.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <BarChart className="h-4 w-4" />
                      <span className="sr-only">View Statistics</span>
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
