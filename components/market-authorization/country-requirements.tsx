"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Globe, Info } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CountryRequirements() {
  const [searchQuery, setSearchQuery] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")

  // Mock country data
  const countries = [
    {
      id: "US",
      name: "United States",
      region: "North America",
      authority: "FDA",
      requirements: 32,
      lastUpdated: "2023-08-15",
      status: "Active",
    },
    {
      id: "EU",
      name: "European Union",
      region: "Europe",
      authority: "EMA",
      requirements: 45,
      lastUpdated: "2023-09-02",
      status: "Active",
    },
    {
      id: "JP",
      name: "Japan",
      region: "Asia Pacific",
      authority: "PMDA",
      requirements: 38,
      lastUpdated: "2023-07-20",
      status: "Active",
    },
    {
      id: "CN",
      name: "China",
      region: "Asia Pacific",
      authority: "NMPA",
      requirements: 42,
      lastUpdated: "2023-06-10",
      status: "Active",
    },
    {
      id: "BR",
      name: "Brazil",
      region: "Latin America",
      authority: "ANVISA",
      requirements: 29,
      lastUpdated: "2023-08-05",
      status: "Active",
    },
    {
      id: "CA",
      name: "Canada",
      region: "North America",
      authority: "Health Canada",
      requirements: 30,
      lastUpdated: "2023-09-10",
      status: "Active",
    },
    {
      id: "AU",
      name: "Australia",
      region: "Asia Pacific",
      authority: "TGA",
      requirements: 28,
      lastUpdated: "2023-07-28",
      status: "Active",
    },
    {
      id: "RU",
      name: "Russia",
      region: "Europe",
      authority: "MoH",
      requirements: 35,
      lastUpdated: "2023-05-15",
      status: "Active",
    },
    {
      id: "IN",
      name: "India",
      region: "Asia Pacific",
      authority: "CDSCO",
      requirements: 33,
      lastUpdated: "2023-08-22",
      status: "Active",
    },
    {
      id: "ZA",
      name: "South Africa",
      region: "Africa",
      authority: "SAHPRA",
      requirements: 25,
      lastUpdated: "2023-06-30",
      status: "Active",
    },
  ]

  const filteredCountries = countries.filter(
    (country) =>
      (country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.authority.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (regionFilter === "all" || country.region === regionFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Country-Specific Requirements</CardTitle>
        <CardDescription>Pre-configured regulatory requirements for 150+ countries</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search countries..."
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
              <TableHead>Country</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Regulatory Authority</TableHead>
              <TableHead>Requirements</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCountries.map((country) => (
              <TableRow key={country.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                    {country.name} ({country.id})
                  </div>
                </TableCell>
                <TableCell>{country.region}</TableCell>
                <TableCell>{country.authority}</TableCell>
                <TableCell>{country.requirements}</TableCell>
                <TableCell>{country.lastUpdated}</TableCell>
                <TableCell>
                  <Badge variant="success">{country.status}</Badge>
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
