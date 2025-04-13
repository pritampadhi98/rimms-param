"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, Eye, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ApprovalCertificates() {
  const [searchQuery, setSearchQuery] = useState("")
  const [productFilter, setProductFilter] = useState("all")

  // Mock certificate data
  const certificates = [
    {
      id: "CERT-001",
      product: "Cardiostat 10mg",
      country: "United States",
      authority: "FDA",
      approvalDate: "2022-05-15",
      expiryDate: "2027-05-14",
      certificateNumber: "NDA-123456",
      status: "Active",
    },
    {
      id: "CERT-002",
      product: "Cardiostat 10mg",
      country: "European Union",
      authority: "EMA",
      approvalDate: "2022-07-22",
      expiryDate: "2027-07-21",
      certificateNumber: "EU/1/22/1234",
      status: "Active",
    },
    {
      id: "CERT-003",
      product: "Neurobalance 25mg",
      country: "United States",
      authority: "FDA",
      approvalDate: "2021-11-10",
      expiryDate: "2026-11-09",
      certificateNumber: "NDA-654321",
      status: "Active",
    },
    {
      id: "CERT-004",
      product: "Neurobalance 25mg",
      country: "Japan",
      authority: "PMDA",
      approvalDate: "2022-03-18",
      expiryDate: "2027-03-17",
      certificateNumber: "JPN-22-1234",
      status: "Active",
    },
    {
      id: "CERT-005",
      product: "Respiroclear Inhaler",
      country: "United States",
      authority: "FDA",
      approvalDate: "2023-01-25",
      expiryDate: "2028-01-24",
      certificateNumber: "NDA-789012",
      status: "Active",
    },
    {
      id: "CERT-006",
      product: "Respiroclear Inhaler",
      country: "Canada",
      authority: "Health Canada",
      approvalDate: "2023-03-12",
      expiryDate: "2028-03-11",
      certificateNumber: "DIN-12345678",
      status: "Active",
    },
    {
      id: "CERT-007",
      product: "Gastroease 50mg",
      country: "Australia",
      authority: "TGA",
      approvalDate: "2022-09-05",
      expiryDate: "2027-09-04",
      certificateNumber: "AUST-R-123456",
      status: "Active",
    },
    {
      id: "CERT-008",
      product: "Dermacalm Cream",
      country: "Brazil",
      authority: "ANVISA",
      approvalDate: "2022-11-30",
      expiryDate: "2027-11-29",
      certificateNumber: "BR-12345678",
      status: "Active",
    },
    {
      id: "CERT-009",
      product: "Cardiostat 5mg",
      country: "United States",
      authority: "FDA",
      approvalDate: "2022-05-15",
      expiryDate: "2027-05-14",
      certificateNumber: "NDA-123457",
      status: "Active",
    },
    {
      id: "CERT-010",
      product: "Neurobalance 50mg",
      country: "European Union",
      authority: "EMA",
      approvalDate: "2022-07-22",
      expiryDate: "2027-07-21",
      certificateNumber: "EU/1/22/1235",
      status: "Active",
    },
  ]

  const filteredCertificates = certificates.filter(
    (cert) =>
      (cert.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (productFilter === "all" || cert.product === productFilter),
  )

  // Get unique products for filter
  const uniqueProducts = Array.from(new Set(certificates.map((cert) => cert.product)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Approval Certificate Management</CardTitle>
        <CardDescription>Digital storage of all market authorization certificates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search certificates..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={productFilter} onValueChange={setProductFilter}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {uniqueProducts.map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
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
              <TableHead>Certificate ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Authority</TableHead>
              <TableHead>Certificate Number</TableHead>
              <TableHead>Approval Date</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCertificates.map((cert) => (
              <TableRow key={cert.id}>
                <TableCell className="font-medium">{cert.id}</TableCell>
                <TableCell>{cert.product}</TableCell>
                <TableCell>{cert.country}</TableCell>
                <TableCell>{cert.authority}</TableCell>
                <TableCell>{cert.certificateNumber}</TableCell>
                <TableCell>{cert.approvalDate}</TableCell>
                <TableCell>{cert.expiryDate}</TableCell>
                <TableCell>
                  <Badge variant="success">{cert.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View Certificate</span>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Calendar className="h-4 w-4" />
                      <span className="sr-only">Renewal</span>
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
