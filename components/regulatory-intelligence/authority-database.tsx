"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Globe, Info, ExternalLink } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AuthorityDatabase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")

  // Mock authority data
  const authorities = [
    {
      id: "AUTH-001",
      name: "Food and Drug Administration",
      acronym: "FDA",
      country: "United States",
      region: "North America",
      website: "https://www.fda.gov",
      submissionFormat: "eCTD",
      reviewTimeline: "10-12 months",
      lastUpdated: "2023-09-15",
    },
    {
      id: "AUTH-002",
      name: "European Medicines Agency",
      acronym: "EMA",
      country: "European Union",
      region: "Europe",
      website: "https://www.ema.europa.eu",
      submissionFormat: "eCTD",
      reviewTimeline: "12-14 months",
      lastUpdated: "2023-09-10",
    },
    {
      id: "AUTH-003",
      name: "Pharmaceuticals and Medical Devices Agency",
      acronym: "PMDA",
      country: "Japan",
      region: "Asia Pacific",
      website: "https://www.pmda.go.jp",
      submissionFormat: "eCTD",
      reviewTimeline: "12 months",
      lastUpdated: "2023-08-22",
    },
    {
      id: "AUTH-004",
      name: "Health Canada",
      acronym: "HC",
      country: "Canada",
      region: "North America",
      website: "https://www.canada.ca/en/health-canada.html",
      submissionFormat: "eCTD",
      reviewTimeline: "10-12 months",
      lastUpdated: "2023-09-05",
    },
    {
      id: "AUTH-005",
      name: "Therapeutic Goods Administration",
      acronym: "TGA",
      country: "Australia",
      region: "Asia Pacific",
      website: "https://www.tga.gov.au",
      submissionFormat: "eCTD",
      reviewTimeline: "11 months",
      lastUpdated: "2023-08-18",
    },
    {
      id: "AUTH-006",
      name: "National Medical Products Administration",
      acronym: "NMPA",
      country: "China",
      region: "Asia Pacific",
      website: "https://www.nmpa.gov.cn",
      submissionFormat: "CTD",
      reviewTimeline: "12-18 months",
      lastUpdated: "2023-07-30",
    },
    {
      id: "AUTH-007",
      name: "Brazilian Health Regulatory Agency",
      acronym: "ANVISA",
      country: "Brazil",
      region: "Latin America",
      website: "https://www.gov.br/anvisa",
      submissionFormat: "CTD",
      reviewTimeline: "12-18 months",
      lastUpdated: "2023-08-12",
    },
    {
      id: "AUTH-008",
      name: "Medicines and Healthcare products Regulatory Agency",
      acronym: "MHRA",
      country: "United Kingdom",
      region: "Europe",
      website: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
      submissionFormat: "eCTD",
      reviewTimeline: "12-14 months",
      lastUpdated: "2023-09-08",
    },
    {
      id: "AUTH-009",
      name: "South African Health Products Regulatory Authority",
      acronym: "SAHPRA",
      country: "South Africa",
      region: "Africa",
      website: "https://www.sahpra.org.za",
      submissionFormat: "CTD",
      reviewTimeline: "12-24 months",
      lastUpdated: "2023-07-15",
    },
    {
      id: "AUTH-010",
      name: "Central Drugs Standard Control Organization",
      acronym: "CDSCO",
      country: "India",
      region: "Asia Pacific",
      website: "https://cdsco.gov.in",
      submissionFormat: "CTD",
      reviewTimeline: "12-18 months",
      lastUpdated: "2023-08-05",
    },
  ]

  const filteredAuthorities = authorities.filter(
    (authority) =>
      (authority.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        authority.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
        authority.country.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (regionFilter === "all" || authority.region === regionFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Authority Database</CardTitle>
        <CardDescription>Comprehensive information on 200+ global regulatory authorities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search authorities..."
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
              <TableHead>Authority</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Submission Format</TableHead>
              <TableHead>Review Timeline</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAuthorities.map((authority) => (
              <TableRow key={authority.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                      {authority.name}
                    </div>
                    <Badge variant="outline" className="mt-1 w-fit">
                      {authority.acronym}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{authority.country}</TableCell>
                <TableCell>{authority.region}</TableCell>
                <TableCell>{authority.submissionFormat}</TableCell>
                <TableCell>{authority.reviewTimeline}</TableCell>
                <TableCell>{authority.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">View Details</span>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={authority.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit Website</span>
                      </a>
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
