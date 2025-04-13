"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Download, Filter, Search, Plus, FileText, ImageIcon, BarChart4, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PresentationManagementProps {
  searchQuery?: string
  productFilter?: string
  marketFilter?: string
  statusFilter?: string
}

export function PresentationManagement({
  searchQuery = "",
  productFilter = "all",
  marketFilter = "all",
  statusFilter = "all",
}: PresentationManagementProps) {
  const [activeTab, setActiveTab] = useState("presentations")
  const [localSearch, setLocalSearch] = useState(searchQuery)

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="presentations">Presentations</TabsTrigger>
          <TabsTrigger value="packaging">Packaging</TabsTrigger>
          <TabsTrigger value="artwork">Artwork</TabsTrigger>
          <TabsTrigger value="markets">Market Distribution</TabsTrigger>
        </TabsList>

        <TabsContent value="presentations" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Product Presentations</CardTitle>
                <CardDescription>Manage product presentations and packaging configurations</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search presentations..."
                    className="w-[200px]"
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Presentation
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Presentation</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Configuration</TableHead>
                    <TableHead>Markets</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 10mg Tablets 30s</TableCell>
                    <TableCell>Cardiostat</TableCell>
                    <TableCell>Blister pack, 30 tablets</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          +3
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 10mg Tablets 90s</TableCell>
                    <TableCell>Cardiostat</TableCell>
                    <TableCell>Bottle, 90 tablets</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Neurobalance 25mg Capsules 28s</TableCell>
                    <TableCell>Neurobalance</TableCell>
                    <TableCell>Blister pack, 28 capsules</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          UK
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Respiraclear 2mg/ml Solution 120ml</TableCell>
                    <TableCell>Respiraclear</TableCell>
                    <TableCell>Bottle with dropper, 120ml</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          JP
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat XR 50mg Tablets 30s</TableCell>
                    <TableCell>Cardiostat XR</TableCell>
                    <TableCell>Bottle, 30 tablets</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="packaging" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Packaging Specifications</CardTitle>
                <CardDescription>Detailed specifications for all packaging configurations</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="blister">
                <TabsList className="w-full">
                  <TabsTrigger value="blister">Blister Packs</TabsTrigger>
                  <TabsTrigger value="bottle">Bottles</TabsTrigger>
                  <TabsTrigger value="vial">Vials</TabsTrigger>
                  <TabsTrigger value="ampoule">Ampoules</TabsTrigger>
                  <TabsTrigger value="other">Other</TabsTrigger>
                </TabsList>
                <TabsContent value="blister" className="mt-4">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Standard Blister Pack</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">Specifications</h4>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Value</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>Material</TableCell>
                                    <TableCell>PVC/Aluminum</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Dimensions</TableCell>
                                    <TableCell>80mm x 120mm</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Cavity Size</TableCell>
                                    <TableCell>10mm diameter</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Configuration</TableCell>
                                    <TableCell>10 tablets per blister</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Products Using This Configuration</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                  <span>Cardiostat 10mg Tablets 30s</span>
                                  <Badge variant="outline">3 blisters</Badge>
                                </div>
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                  <span>Neurobalance 25mg Capsules 28s</span>
                                  <Badge variant="outline">4 blisters (7 units each)</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Child-Resistant Blister Pack</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">Specifications</h4>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Value</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>Material</TableCell>
                                    <TableCell>PVC/PVDC/Aluminum</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Dimensions</TableCell>
                                    <TableCell>85mm x 125mm</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Cavity Size</TableCell>
                                    <TableCell>11mm diameter</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Configuration</TableCell>
                                    <TableCell>7 tablets per blister</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Products Using This Configuration</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                  <span>Neurobalance 50mg Capsules 28s</span>
                                  <Badge variant="outline">4 blisters (7 units each)</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="artwork" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Artwork Management</CardTitle>
                <CardDescription>Track and manage artwork versions for all presentations</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Artwork
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Presentation</TableHead>
                    <TableHead>Artwork Type</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 10mg Tablets 30s</TableCell>
                    <TableCell>Primary Packaging</TableCell>
                    <TableCell>3.2</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Approved</Badge>
                    </TableCell>
                    <TableCell>2023-05-15</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 10mg Tablets 30s</TableCell>
                    <TableCell>Secondary Packaging</TableCell>
                    <TableCell>2.5</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Approved</Badge>
                    </TableCell>
                    <TableCell>2023-04-20</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 10mg Tablets 30s</TableCell>
                    <TableCell>Patient Information Leaflet</TableCell>
                    <TableCell>4.1</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Approved</Badge>
                    </TableCell>
                    <TableCell>2023-06-10</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Neurobalance 25mg Capsules 28s</TableCell>
                    <TableCell>Primary Packaging</TableCell>
                    <TableCell>2.0</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Approved</Badge>
                    </TableCell>
                    <TableCell>2023-03-18</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Respiraclear 2mg/ml Solution 120ml</TableCell>
                    <TableCell>Label</TableCell>
                    <TableCell>1.5</TableCell>
                    <TableCell>
                      <Badge className="bg-amber-500">In Review</Badge>
                    </TableCell>
                    <TableCell>2023-07-02</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="markets" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Market Distribution</CardTitle>
                <CardDescription>Global distribution of product presentations by market</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="apac">Asia Pacific</SelectItem>
                    <SelectItem value="latam">Latin America</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">United States</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Presentations:</span>
                        <Badge>12</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Cardiostat</span>
                          <Badge variant="outline">4 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Respiraclear</span>
                          <Badge variant="outline">3 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Other Products</span>
                          <Badge variant="outline">5 presentations</Badge>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          <BarChart4 className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">European Union</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Presentations:</span>
                        <Badge>15</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Cardiostat</span>
                          <Badge variant="outline">5 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Neurobalance</span>
                          <Badge variant="outline">4 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Other Products</span>
                          <Badge variant="outline">6 presentations</Badge>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          <BarChart4 className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Japan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Presentations:</span>
                        <Badge>8</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Cardiostat</span>
                          <Badge variant="outline">3 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Respiraclear</span>
                          <Badge variant="outline">2 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Other Products</span>
                          <Badge variant="outline">3 presentations</Badge>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          <BarChart4 className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">United Kingdom</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Presentations:</span>
                        <Badge>10</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Cardiostat</span>
                          <Badge variant="outline">3 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Neurobalance</span>
                          <Badge variant="outline">4 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Other Products</span>
                          <Badge variant="outline">3 presentations</Badge>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          <BarChart4 className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Canada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Presentations:</span>
                        <Badge>7</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Cardiostat</span>
                          <Badge variant="outline">2 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Neurobalance</span>
                          <Badge variant="outline">3 presentations</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Other Products</span>
                          <Badge variant="outline">2 presentations</Badge>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          <BarChart4 className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Global Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Total Markets:</span>
                        <Badge>25</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Total Presentations:</span>
                          <Badge>42</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded-md">
                          <span className="text-sm">Multi-Market Products:</span>
                          <Badge>18</Badge>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          <Globe className="h-4 w-4 mr-1" />
                          Global View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PresentationManagement
