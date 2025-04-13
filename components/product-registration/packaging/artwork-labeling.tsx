"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Download, History, Check } from "lucide-react"

interface FilterProps {
  searchQuery: string
  therapeuticArea: string
  formulation: string
  market: string
}

interface ArtworkItem {
  id: string
  productName: string
  component: string
  market: string
  version: string
  status: "approved" | "pending" | "rejected" | "draft"
  lastUpdated: string
  updatedBy: string
  imageUrl: string
}

interface LabelingItem {
  id: string
  productName: string
  component: string
  market: string
  version: string
  status: "approved" | "pending" | "rejected" | "draft"
  lastUpdated: string
  updatedBy: string
  content: string
}

// Sample data
const artworkItems: ArtworkItem[] = [
  {
    id: "art-001",
    productName: "Cardiostat",
    component: "Carton",
    market: "United States",
    version: "3.2",
    status: "approved",
    lastUpdated: "2023-05-15",
    updatedBy: "Sarah Johnson",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "art-002",
    productName: "Cardiostat",
    component: "Blister",
    market: "United States",
    version: "2.1",
    status: "approved",
    lastUpdated: "2023-05-10",
    updatedBy: "Michael Chen",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "art-003",
    productName: "Neurobalance",
    component: "Carton",
    market: "European Union",
    version: "1.4",
    status: "pending",
    lastUpdated: "2023-06-02",
    updatedBy: "Emily Rodriguez",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "art-004",
    productName: "Respiraclear",
    component: "Label",
    market: "Japan",
    version: "2.0",
    status: "approved",
    lastUpdated: "2023-04-20",
    updatedBy: "David Kim",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

const labelingItems: LabelingItem[] = [
  {
    id: "lab-001",
    productName: "Cardiostat",
    component: "Package Insert",
    market: "United States",
    version: "4.3",
    status: "approved",
    lastUpdated: "2023-05-18",
    updatedBy: "Sarah Johnson",
    content:
      "CARDIOSTAT (cardiostatium) 10mg, 25mg tablets\n\nINDICATIONS AND USAGE\nCardiostat is indicated for the treatment of hypertension...",
  },
  {
    id: "lab-002",
    productName: "Cardiostat",
    component: "Carton Text",
    market: "United States",
    version: "3.2",
    status: "approved",
    lastUpdated: "2023-05-15",
    updatedBy: "Sarah Johnson",
    content:
      "CARDIOSTAT (cardiostatium) 10mg\nRx Only\n30 Tablets\nStore at controlled room temperature 20-25°C (68-77°F)...",
  },
  {
    id: "lab-003",
    productName: "Neurobalance",
    component: "Package Insert",
    market: "European Union",
    version: "2.5",
    status: "pending",
    lastUpdated: "2023-06-05",
    updatedBy: "Emily Rodriguez",
    content:
      "NEUROBALANCE 25mg, 50mg capsules\n\n1. NAME OF THE MEDICINAL PRODUCT\nNeurobalance 25mg capsules\nNeurobalance 50mg capsules...",
  },
  {
    id: "lab-004",
    productName: "Respiraclear",
    component: "Package Insert",
    market: "Japan",
    version: "3.0",
    status: "approved",
    lastUpdated: "2023-04-22",
    updatedBy: "David Kim",
    content: "レスピラクリア 2mg/ml 溶液\n\n効能・効果\n気管支喘息の緩和...",
  },
]

export function ArtworkLabeling({ searchQuery, therapeuticArea, formulation, market }: FilterProps) {
  const [activeTab, setActiveTab] = useState("artwork")
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [selectedItemType, setSelectedItemType] = useState<"artwork" | "labeling" | null>(null)

  // Filter artwork items based on search and filters
  const filteredArtwork = artworkItems.filter((item) => {
    // Search query filter
    if (
      searchQuery &&
      !item.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.component.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.market.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Market filter
    if (market !== "all") {
      if (market === "us" && item.market !== "United States") return false
      if (market === "eu" && item.market !== "European Union") return false
      if (market === "japan" && item.market !== "Japan") return false
      if (market === "china" && item.market !== "China") return false
    }

    return true
  })

  // Filter labeling items based on search and filters
  const filteredLabeling = labelingItems.filter((item) => {
    // Search query filter
    if (
      searchQuery &&
      !item.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.component.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.market.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.content.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Market filter
    if (market !== "all") {
      if (market === "us" && item.market !== "United States") return false
      if (market === "eu" && item.market !== "European Union") return false
      if (market === "japan" && item.market !== "Japan") return false
      if (market === "china" && item.market !== "China") return false
    }

    return true
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "draft":
        return <Badge variant="outline">Draft</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const handleViewArtwork = (id: string) => {
    setSelectedItem(id)
    setSelectedItemType("artwork")
  }

  const handleViewLabeling = (id: string) => {
    setSelectedItem(id)
    setSelectedItemType("labeling")
  }

  const selectedArtwork =
    selectedItem && selectedItemType === "artwork" ? artworkItems.find((item) => item.id === selectedItem) : null

  const selectedLabeling =
    selectedItem && selectedItemType === "labeling" ? labelingItems.find((item) => item.id === selectedItem) : null

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="artwork">Artwork</TabsTrigger>
          <TabsTrigger value="labeling">Labeling Text</TabsTrigger>
        </TabsList>

        <TabsContent value="artwork" className="mt-4">
          {selectedArtwork ? (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>
                    {selectedArtwork.productName} - {selectedArtwork.component}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {selectedArtwork.market} | Version {selectedArtwork.version}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(selectedArtwork.status)}
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    History
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedItem(null)}>
                    Back to List
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="border rounded-md overflow-hidden">
                      <img
                        src={selectedArtwork.imageUrl || "/placeholder.svg"}
                        alt={`${selectedArtwork.productName} ${selectedArtwork.component} Artwork`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Artwork Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Product</p>
                          <p className="text-sm text-muted-foreground">{selectedArtwork.productName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Component</p>
                          <p className="text-sm text-muted-foreground">{selectedArtwork.component}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Market</p>
                          <p className="text-sm text-muted-foreground">{selectedArtwork.market}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Version</p>
                          <p className="text-sm text-muted-foreground">{selectedArtwork.version}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Last Updated</p>
                          <p className="text-sm text-muted-foreground">{selectedArtwork.lastUpdated}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Updated By</p>
                          <p className="text-sm text-muted-foreground">{selectedArtwork.updatedBy}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Approval Status</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Regulatory Affairs</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Quality Assurance</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Marketing</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Legal</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Artwork Components</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Component</TableHead>
                      <TableHead>Market</TableHead>
                      <TableHead>Version</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredArtwork.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.productName}</TableCell>
                        <TableCell>{item.component}</TableCell>
                        <TableCell>{item.market}</TableCell>
                        <TableCell>{item.version}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => handleViewArtwork(item.id)}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="labeling" className="mt-4">
          {selectedLabeling ? (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>
                    {selectedLabeling.productName} - {selectedLabeling.component}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {selectedLabeling.market} | Version {selectedLabeling.version}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(selectedLabeling.status)}
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    History
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedItem(null)}>
                    Back to List
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Labeling Content</h3>
                    <div className="border rounded-md p-4 bg-muted/50 whitespace-pre-line h-[400px] overflow-y-auto">
                      {selectedLabeling.content}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Labeling Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Product</p>
                          <p className="text-sm text-muted-foreground">{selectedLabeling.productName}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Component</p>
                          <p className="text-sm text-muted-foreground">{selectedLabeling.component}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Market</p>
                          <p className="text-sm text-muted-foreground">{selectedLabeling.market}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Version</p>
                          <p className="text-sm text-muted-foreground">{selectedLabeling.version}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Last Updated</p>
                          <p className="text-sm text-muted-foreground">{selectedLabeling.lastUpdated}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Updated By</p>
                          <p className="text-sm text-muted-foreground">{selectedLabeling.updatedBy}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Approval Status</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Regulatory Affairs</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Quality Assurance</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Medical Affairs</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Legal</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Labeling Components</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Component</TableHead>
                      <TableHead>Market</TableHead>
                      <TableHead>Version</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLabeling.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.productName}</TableCell>
                        <TableCell>{item.component}</TableCell>
                        <TableCell>{item.market}</TableCell>
                        <TableCell>{item.version}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" onClick={() => handleViewLabeling(item.id)}>
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
