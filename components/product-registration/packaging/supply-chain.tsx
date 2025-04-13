"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Eye } from "lucide-react"

interface FilterProps {
  searchQuery: string
  therapeuticArea: string
  formulation: string
  market: string
}

interface ComponentInventory {
  id: string
  name: string
  type: "primary" | "secondary" | "tertiary"
  supplier: string
  stockLevel: number
  reorderPoint: number
  leadTime: number
  status: "in-stock" | "low-stock" | "out-of-stock" | "on-order"
  lastUpdated: string
  associatedProducts: string[]
}

interface Supplier {
  id: string
  name: string
  location: string
  components: string[]
  qualificationStatus: "qualified" | "pending" | "disqualified"
  lastAudit: string
  nextAudit: string
  performanceRating: number
  contactPerson: string
  contactEmail: string
}

interface AlternativePackaging {
  id: string
  originalComponent: string
  alternativeComponent: string
  supplier: string
  compatibilityStatus: "fully-compatible" | "partially-compatible" | "not-compatible"
  regulatoryStatus: "approved" | "pending" | "not-submitted"
  implementationTime: number
  costImpact: "none" | "low" | "medium" | "high"
  notes: string
}

// Sample data
const componentInventory: ComponentInventory[] = [
  {
    id: "comp-001",
    name: "PVC/Aluminum blister",
    type: "primary",
    supplier: "PackageCorp Inc.",
    stockLevel: 75,
    reorderPoint: 30,
    leadTime: 14,
    status: "in-stock",
    lastUpdated: "2023-06-10",
    associatedProducts: ["Cardiostat", "Neurobalance"],
  },
  {
    id: "comp-002",
    name: "HDPE bottle with child-resistant closure",
    type: "primary",
    supplier: "ContainerTech Inc.",
    stockLevel: 25,
    reorderPoint: 30,
    leadTime: 21,
    status: "low-stock",
    lastUpdated: "2023-06-08",
    associatedProducts: ["Cardiostat"],
  },
  {
    id: "comp-003",
    name: "Cardboard carton",
    type: "secondary",
    supplier: "BoxMakers Ltd.",
    stockLevel: 60,
    reorderPoint: 40,
    leadTime: 10,
    status: "in-stock",
    lastUpdated: "2023-06-12",
    associatedProducts: ["Cardiostat", "Neurobalance", "Respiraclear"],
  },
  {
    id: "comp-004",
    name: "Type I glass vial with rubber stopper",
    type: "primary",
    supplier: "GlassMed Inc.",
    stockLevel: 5,
    reorderPoint: 20,
    leadTime: 28,
    status: "out-of-stock",
    lastUpdated: "2023-06-05",
    associatedProducts: ["Respiraclear"],
  },
  {
    id: "comp-005",
    name: "Aluminum canister with metering valve",
    type: "primary",
    supplier: "InhaleTech Corp.",
    stockLevel: 40,
    reorderPoint: 25,
    leadTime: 21,
    status: "in-stock",
    lastUpdated: "2023-06-01",
    associatedProducts: ["Respiraclear"],
  },
]

const suppliers: Supplier[] = [
  {
    id: "sup-001",
    name: "PackageCorp Inc.",
    location: "United States",
    components: ["PVC/Aluminum blister", "PVC/PVDC/Aluminum blister"],
    qualificationStatus: "qualified",
    lastAudit: "2023-01-15",
    nextAudit: "2024-01-15",
    performanceRating: 92,
    contactPerson: "John Smith",
    contactEmail: "j.smith@packagecorp.com",
  },
  {
    id: "sup-002",
    name: "ContainerTech Inc.",
    location: "United States",
    components: ["HDPE bottle with child-resistant closure"],
    qualificationStatus: "qualified",
    lastAudit: "2023-02-20",
    nextAudit: "2024-02-20",
    performanceRating: 88,
    contactPerson: "Lisa Johnson",
    contactEmail: "l.johnson@containertech.com",
  },
  {
    id: "sup-003",
    name: "BoxMakers Ltd.",
    location: "United Kingdom",
    components: ["Cardboard carton", "Corrugated shipping box"],
    qualificationStatus: "qualified",
    lastAudit: "2023-03-10",
    nextAudit: "2024-03-10",
    performanceRating: 95,
    contactPerson: "David Williams",
    contactEmail: "d.williams@boxmakers.co.uk",
  },
  {
    id: "sup-004",
    name: "GlassMed Inc.",
    location: "Germany",
    components: ["Type I glass vial with rubber stopper"],
    qualificationStatus: "pending",
    lastAudit: "2023-04-05",
    nextAudit: "2023-07-05",
    performanceRating: 78,
    contactPerson: "Anna Schmidt",
    contactEmail: "a.schmidt@glassmed.de",
  },
  {
    id: "sup-005",
    name: "InhaleTech Corp.",
    location: "Switzerland",
    components: ["Aluminum canister with metering valve", "Pressurized metered-dose inhaler"],
    qualificationStatus: "qualified",
    lastAudit: "2023-05-12",
    nextAudit: "2024-05-12",
    performanceRating: 90,
    contactPerson: "Marc Dubois",
    contactEmail: "m.dubois@inhaletech.ch",
  },
]

const alternativePackaging: AlternativePackaging[] = [
  {
    id: "alt-001",
    originalComponent: "PVC/Aluminum blister",
    alternativeComponent: "PVC/PVDC/Aluminum blister",
    supplier: "PackageCorp Inc.",
    compatibilityStatus: "fully-compatible",
    regulatoryStatus: "approved",
    implementationTime: 4,
    costImpact: "low",
    notes: "Direct substitute with improved moisture barrier properties",
  },
  {
    id: "alt-002",
    originalComponent: "HDPE bottle with child-resistant closure",
    alternativeComponent: "PET bottle with child-resistant closure",
    supplier: "PlasticTech Solutions",
    compatibilityStatus: "fully-compatible",
    regulatoryStatus: "pending",
    implementationTime: 8,
    costImpact: "medium",
    notes: "Requires stability data update but compatible with existing production lines",
  },
  {
    id: "alt-003",
    originalComponent: "Type I glass vial with rubber stopper",
    alternativeComponent: "Type I glass vial with fluoropolymer-coated stopper",
    supplier: "MedGlass International",
    compatibilityStatus: "partially-compatible",
    regulatoryStatus: "not-submitted",
    implementationTime: 12,
    costImpact: "high",
    notes: "Improved compatibility with sensitive formulations but requires filling process validation",
  },
]

export function SupplyChainIntelligence({ searchQuery, therapeuticArea, formulation, market }: FilterProps) {
  const [activeTab, setActiveTab] = useState("inventory")

  // Filter inventory based on search
  const filteredInventory = componentInventory.filter((item) => {
    // Search query filter
    if (
      searchQuery &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.supplier.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.associatedProducts.some((product) => product.toLowerCase().includes(searchQuery.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  // Filter suppliers based on search
  const filteredSuppliers = suppliers.filter((supplier) => {
    // Search query filter
    if (
      searchQuery &&
      !supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !supplier.components.some((component) => component.toLowerCase().includes(searchQuery.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  // Filter alternatives based on search
  const filteredAlternatives = alternativePackaging.filter((alt) => {
    // Search query filter
    if (
      searchQuery &&
      !alt.originalComponent.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !alt.alternativeComponent.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !alt.supplier.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    return true
  })

  const getInventoryStatusBadge = (status: string) => {
    switch (status) {
      case "in-stock":
        return <Badge className="bg-green-500">In Stock</Badge>
      case "low-stock":
        return <Badge className="bg-amber-500">Low Stock</Badge>
      case "out-of-stock":
        return <Badge className="bg-red-500">Out of Stock</Badge>
      case "on-order":
        return <Badge className="bg-blue-500">On Order</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getQualificationStatusBadge = (status: string) => {
    switch (status) {
      case "qualified":
        return <Badge className="bg-green-500">Qualified</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "disqualified":
        return <Badge className="bg-red-500">Disqualified</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getCompatibilityStatusBadge = (status: string) => {
    switch (status) {
      case "fully-compatible":
        return <Badge className="bg-green-500">Fully Compatible</Badge>
      case "partially-compatible":
        return <Badge className="bg-amber-500">Partially Compatible</Badge>
      case "not-compatible":
        return <Badge className="bg-red-500">Not Compatible</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getRegulatoryStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "not-submitted":
        return <Badge variant="outline">Not Submitted</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getCostImpactBadge = (impact: string) => {
    switch (impact) {
      case "none":
        return <Badge className="bg-green-500">None</Badge>
      case "low":
        return <Badge className="bg-blue-500">Low</Badge>
      case "medium":
        return <Badge className="bg-amber-500">Medium</Badge>
      case "high":
        return <Badge className="bg-red-500">High</Badge>
      default:
        return <Badge className="bg-gray-500">{impact}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="inventory">Component Inventory</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          <TabsTrigger value="alternatives">Alternative Packaging</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Packaging Component Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Stock Level</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Lead Time</TableHead>
                    <TableHead>Associated Products</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {item.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span>{item.stockLevel}%</span>
                            <span className="text-muted-foreground">Reorder: {item.reorderPoint}%</span>
                          </div>
                          <Progress
                            value={item.stockLevel}
                            className={`h-2 ${item.stockLevel < item.reorderPoint ? "bg-red-100" : "bg-muted"}`}
                          />
                        </div>
                      </TableCell>
                      <TableCell>{getInventoryStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.leadTime} days</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {item.associatedProducts.map((product) => (
                            <Badge key={product} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
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
        </TabsContent>

        <TabsContent value="suppliers" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Information</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Components</TableHead>
                    <TableHead>Qualification Status</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Last Audit</TableHead>
                    <TableHead>Next Audit</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell>{supplier.location}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {supplier.components.map((component, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {component.length > 20 ? component.substring(0, 20) + "..." : component}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{getQualificationStatusBadge(supplier.qualificationStatus)}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span>{supplier.performanceRating}%</span>
                          </div>
                          <Progress
                            value={supplier.performanceRating}
                            className={`h-2 ${supplier.performanceRating < 80 ? "bg-amber-100" : "bg-muted"}`}
                          />
                        </div>
                      </TableCell>
                      <TableCell>{supplier.lastAudit}</TableCell>
                      <TableCell>{supplier.nextAudit}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
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
        </TabsContent>

        <TabsContent value="alternatives" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Alternative Packaging Options</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Original Component</TableHead>
                    <TableHead>Alternative Component</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Compatibility</TableHead>
                    <TableHead>Regulatory Status</TableHead>
                    <TableHead>Implementation Time</TableHead>
                    <TableHead>Cost Impact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAlternatives.map((alt) => (
                    <TableRow key={alt.id}>
                      <TableCell className="font-medium">{alt.originalComponent}</TableCell>
                      <TableCell>{alt.alternativeComponent}</TableCell>
                      <TableCell>{alt.supplier}</TableCell>
                      <TableCell>{getCompatibilityStatusBadge(alt.compatibilityStatus)}</TableCell>
                      <TableCell>{getRegulatoryStatusBadge(alt.regulatoryStatus)}</TableCell>
                      <TableCell>{alt.implementationTime} weeks</TableCell>
                      <TableCell>{getCostImpactBadge(alt.costImpact)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
