"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Download, FileText, Eye, FileUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ApplicationForms() {
  const [searchQuery, setSearchQuery] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")

  // Mock application form data
  const applicationForms = [
    {
      id: "FORM-001",
      name: "FDA Form 356h",
      region: "North America",
      authority: "FDA",
      type: "New Drug Application",
      format: "PDF",
      validationRules: 28,
      lastUpdated: "2023-07-15",
      status: "Active",
    },
    {
      id: "FORM-002",
      name: "EU Application Form",
      region: "Europe",
      authority: "EMA",
      type: "Marketing Authorization",
      format: "PDF/Word",
      validationRules: 35,
      lastUpdated: "2023-08-22",
      status: "Active",
    },
    {
      id: "FORM-003",
      name: "PMDA Application Form",
      region: "Asia Pacific",
      authority: "PMDA",
      type: "New Drug Application",
      format: "PDF",
      validationRules: 32,
      lastUpdated: "2023-06-10",
      status: "Active",
    },
    {
      id: "FORM-004",
      name: "Health Canada HC/SC 3011",
      region: "North America",
      authority: "Health Canada",
      type: "New Drug Submission",
      format: "PDF",
      validationRules: 25,
      lastUpdated: "2023-09-05",
      status: "Active",
    },
    {
      id: "FORM-005",
      name: "ANVISA Form FP1",
      region: "Latin America",
      authority: "ANVISA",
      type: "New Registration",
      format: "PDF",
      validationRules: 30,
      lastUpdated: "2023-05-18",
      status: "Active",
    },
    {
      id: "FORM-006",
      name: "TGA eBS Form",
      region: "Asia Pacific",
      authority: "TGA",
      type: "New Registration",
      format: "Electronic",
      validationRules: 22,
      lastUpdated: "2023-08-30",
      status: "Active",
    },
    {
      id: "FORM-007",
      name: "FDA Form 3542",
      region: "North America",
      authority: "FDA",
      type: "Patent Information",
      format: "PDF",
      validationRules: 15,
      lastUpdated: "2023-07-20",
      status: "Active",
    },
    {
      id: "FORM-008",
      name: "EU Variation Application Form",
      region: "Europe",
      authority: "EMA",
      type: "Type II Variation",
      format: "PDF/Word",
      validationRules: 20,
      lastUpdated: "2023-09-12",
      status: "Active",
    },
    {
      id: "FORM-009",
      name: "SAHPRA CTD Application Form",
      region: "Africa",
      authority: "SAHPRA",
      type: "New Registration",
      format: "PDF",
      validationRules: 28,
      lastUpdated: "2023-06-25",
      status: "Active",
    },
    {
      id: "FORM-010",
      name: "NMPA Registration Application",
      region: "Asia Pacific",
      authority: "NMPA",
      type: "New Drug Application",
      format: "PDF",
      validationRules: 40,
      lastUpdated: "2023-08-05",
      status: "Active",
    },
  ]

  const filteredForms = applicationForms.filter(
    (form) =>
      (form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        form.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        form.type.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (regionFilter === "all" || form.region === regionFilter),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Form Templates</CardTitle>
        <CardDescription>Market-specific application templates with validation rules</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search application forms..."
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
              <TableHead>Form Name</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Authority</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Format</TableHead>
              <TableHead>Validation Rules</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredForms.map((form) => (
              <TableRow key={form.id}>
                <TableCell className="font-medium">{form.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                    {form.name}
                  </div>
                </TableCell>
                <TableCell>{form.region}</TableCell>
                <TableCell>{form.authority}</TableCell>
                <TableCell>{form.type}</TableCell>
                <TableCell>{form.format}</TableCell>
                <TableCell>{form.validationRules}</TableCell>
                <TableCell>{form.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Template</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <FileUp className="h-4 w-4" />
                      <span className="sr-only">Use Template</span>
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
