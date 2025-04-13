"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, Download, MapPin } from "lucide-react"

export default function ManufacturingSitesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock manufacturing site data
  const sites = [
    {
      id: "SITE-001",
      name: "North America Production Facility",
      location: "Boston, USA",
      type: "Manufacturing",
      gmpStatus: "Certified",
      approvedMarkets: ["USA", "Canada", "Mexico", "Brazil"],
      products: 28,
    },
    {
      id: "SITE-002",
      name: "European Production Center",
      location: "Dublin, Ireland",
      type: "Manufacturing & Packaging",
      gmpStatus: "Certified",
      approvedMarkets: ["EU", "UK", "Switzerland", "Norway"],
      products: 35,
    },
    {
      id: "SITE-003",
      name: "Asia Pacific Manufacturing Hub",
      location: "Singapore",
      type: "Manufacturing",
      gmpStatus: "Certified",
      approvedMarkets: ["Singapore", "Japan", "Australia", "New Zealand"],
      products: 22,
    },
    {
      id: "SITE-004",
      name: "Quality Control Laboratory",
      location: "Zurich, Switzerland",
      type: "Testing",
      gmpStatus: "Certified",
      approvedMarkets: ["Global"],
      products: 42,
    },
    {
      id: "SITE-005",
      name: "Secondary Packaging Facility",
      location: "Toronto, Canada",
      type: "Packaging",
      gmpStatus: "Certified",
      approvedMarkets: ["USA", "Canada"],
      products: 18,
    },
  ]

  const filteredSites = sites.filter(
    (site) =>
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manufacturing Sites</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Site
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Site Search</CardTitle>
          <CardDescription>Search for manufacturing, testing, and packaging facilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search sites..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Manufacturing Site Registry</CardTitle>
          <CardDescription>
            Database of all manufacturing, testing, and packaging facilities with approval status by market
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Site ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>GMP Status</TableHead>
                <TableHead>Approved Markets</TableHead>
                <TableHead>Products</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSites.length > 0 ? (
                filteredSites.map((site) => (
                  <TableRow key={site.id}>
                    <TableCell className="font-medium">{site.id}</TableCell>
                    <TableCell>{site.name}</TableCell>
                    <TableCell className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                      {site.location}
                    </TableCell>
                    <TableCell>{site.type}</TableCell>
                    <TableCell>
                      <Badge variant="success">{site.gmpStatus}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {site.approvedMarkets.length > 3 ? (
                          <>
                            {site.approvedMarkets.slice(0, 2).map((market) => (
                              <Badge key={market} variant="outline" className="mr-1">
                                {market}
                              </Badge>
                            ))}
                            <Badge variant="outline">+{site.approvedMarkets.length - 2} more</Badge>
                          </>
                        ) : (
                          site.approvedMarkets.map((market) => (
                            <Badge key={market} variant="outline" className="mr-1">
                              {market}
                            </Badge>
                          ))
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{site.products}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No sites found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
