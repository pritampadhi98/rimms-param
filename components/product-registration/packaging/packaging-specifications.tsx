"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Download, FileText, Package, Box, Layers } from "lucide-react"

interface FilterProps {
  searchQuery: string
  therapeuticArea: string
  formulation: string
  market: string
}

interface PackagingSpecification {
  id: string
  productName: string
  formulation: string
  strength: string
  presentationName: string
  packSize: string
  primaryPackaging: string
  primaryMaterial: string
  primarySupplier: string
  secondaryPackaging: string
  secondaryMaterial: string
  secondarySupplier: string
  tertiaryPackaging: string | null
  shelfLife: string
  storageConditions: string
  markets: string[]
  status: "approved" | "pending" | "rejected"
  therapeuticArea: string
}

// Sample data
const packagingSpecifications: PackagingSpecification[] = [
  {
    id: "spec-001",
    productName: "Cardiostat",
    formulation: "Tablet",
    strength: "10 mg",
    presentationName: "Blister Pack",
    packSize: "30 tablets",
    primaryPackaging: "PVC/Aluminum blister",
    primaryMaterial: "PVC 250μm / Aluminum 20μm",
    primarySupplier: "PackageCorp Inc.",
    secondaryPackaging: "Cardboard carton",
    secondaryMaterial: "300gsm cardboard",
    secondarySupplier: "BoxMakers Ltd.",
    tertiaryPackaging: "Corrugated shipping box (12 units)",
    shelfLife: "36 months",
    storageConditions: "Store below 25°C in original packaging",
    markets: ["us", "eu", "japan"],
    status: "approved",
    therapeuticArea: "cardiovascular",
  },
  {
    id: "spec-002",
    productName: "Cardiostat",
    formulation: "Tablet",
    strength: "10 mg",
    presentationName: "Bottle",
    packSize: "90 tablets",
    primaryPackaging: "HDPE bottle with child-resistant closure",
    primaryMaterial: "HDPE with PP closure",
    primarySupplier: "ContainerTech Inc.",
    secondaryPackaging: "Cardboard carton",
    secondaryMaterial: "300gsm cardboard",
    secondarySupplier: "BoxMakers Ltd.",
    tertiaryPackaging: "Corrugated shipping box (24 units)",
    shelfLife: "36 months",
    storageConditions: "Store below 25°C in original packaging",
    markets: ["us", "canada"],
    status: "approved",
    therapeuticArea: "cardiovascular",
  },
  {
    id: "spec-003",
    productName: "Neurobalance",
    formulation: "Capsule",
    strength: "25 mg",
    presentationName: "Blister Pack",
    packSize: "28 capsules",
    primaryPackaging: "PVC/PVDC/Aluminum blister",
    primaryMaterial: "PVC 250μm / PVDC 40g/m² / Aluminum 20μm",
    primarySupplier: "PackageCorp Inc.",
    secondaryPackaging: "Cardboard carton with leaflet",
    secondaryMaterial: "300gsm cardboard",
    secondarySupplier: "BoxMakers Ltd.",
    tertiaryPackaging: "Corrugated shipping box (12 units)",
    shelfLife: "24 months",
    storageConditions: "Store below 30°C protected from moisture",
    markets: ["eu", "uk", "canada"],
    status: "approved",
    therapeuticArea: "cns",
  },
  {
    id: "spec-004",
    productName: "Respiraclear",
    formulation: "Solution",
    strength: "2 mg/ml",
    presentationName: "Vial",
    packSize: "10 ml",
    primaryPackaging: "Type I glass vial with rubber stopper",
    primaryMaterial: "Type I borosilicate glass, bromobutyl rubber stopper",
    primarySupplier: "GlassMed Inc.",
    secondaryPackaging: "Cardboard carton with molded insert",
    secondaryMaterial: "350gsm cardboard with PET insert",
    secondarySupplier: "MedPack Solutions",
    tertiaryPackaging: "Corrugated shipping box (50 units)",
    shelfLife: "24 months",
    storageConditions: "Store between 2-8°C. Do not freeze.",
    markets: ["us", "eu", "japan", "china"],
    status: "approved",
    therapeuticArea: "respiratory",
  },
  {
    id: "spec-005",
    productName: "Respiraclear",
    formulation: "Inhalation",
    strength: "100 mcg/dose",
    presentationName: "Inhaler",
    packSize: "200 doses",
    primaryPackaging: "Pressurized metered-dose inhaler",
    primaryMaterial: "Aluminum canister with metering valve",
    primarySupplier: "InhaleTech Corp.",
    secondaryPackaging: "Cardboard carton with leaflet",
    secondaryMaterial: "300gsm cardboard",
    secondarySupplier: "BoxMakers Ltd.",
    tertiaryPackaging: null,
    shelfLife: "24 months",
    storageConditions: "Store below 25°C. Protect from frost and direct sunlight.",
    markets: ["us", "eu", "japan"],
    status: "approved",
    therapeuticArea: "respiratory",
  },
]

export function PackagingSpecifications({ searchQuery, therapeuticArea, formulation, market }: FilterProps) {
  const [viewType, setViewType] = useState<"table" | "detailed">("table")
  const [selectedSpecification, setSelectedSpecification] = useState<string | null>(null)

  // Filter specifications based on search and filters
  const filteredSpecifications = packagingSpecifications.filter((spec) => {
    // Search query filter
    if (
      searchQuery &&
      !spec.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !spec.presentationName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !spec.primaryPackaging.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !spec.secondaryPackaging.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Therapeutic area filter
    if (therapeuticArea !== "all" && spec.therapeuticArea !== therapeuticArea) {
      return false
    }

    // Formulation filter
    if (formulation !== "all" && spec.formulation.toLowerCase() !== formulation.toLowerCase()) {
      return false
    }

    // Market filter
    if (market !== "all" && !spec.markets.includes(market.toLowerCase())) {
      return false
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
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const handleViewSpecification = (id: string) => {
    setSelectedSpecification(id)
    setViewType("detailed")
  }

  const selectedSpec = selectedSpecification
    ? packagingSpecifications.find((spec) => spec.id === selectedSpecification)
    : null

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{filteredSpecifications.length} Packaging Specifications</h3>
        <div className="flex items-center space-x-2">
          <Tabs value={viewType} onValueChange={(v) => setViewType(v as "table" | "detailed")} className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="detailed">Detailed View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {viewType === "table" ? (
        <Card>
          <CardHeader>
            <CardTitle>Packaging Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Formulation</TableHead>
                  <TableHead>Strength</TableHead>
                  <TableHead>Presentation</TableHead>
                  <TableHead>Primary Packaging</TableHead>
                  <TableHead>Markets</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSpecifications.map((spec) => (
                  <TableRow key={spec.id}>
                    <TableCell className="font-medium">{spec.productName}</TableCell>
                    <TableCell>{spec.formulation}</TableCell>
                    <TableCell>{spec.strength}</TableCell>
                    <TableCell>
                      {spec.presentationName} ({spec.packSize})
                    </TableCell>
                    <TableCell>{spec.primaryPackaging}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {spec.markets.map((m) => (
                          <Badge key={m} variant="outline" className="text-xs">
                            {m.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(spec.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewSpecification(spec.id)}>
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
      ) : selectedSpec ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>
                {selectedSpec.productName} - {selectedSpec.presentationName}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {selectedSpec.formulation} {selectedSpec.strength}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusBadge(selectedSpec.status)}
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-1" />
                Print
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setViewType("table")}>
                Back to List
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">General Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Product</p>
                      <p className="text-sm text-muted-foreground">{selectedSpec.productName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Formulation</p>
                      <p className="text-sm text-muted-foreground">{selectedSpec.formulation}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Strength</p>
                      <p className="text-sm text-muted-foreground">{selectedSpec.strength}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Presentation</p>
                      <p className="text-sm text-muted-foreground">{selectedSpec.presentationName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Pack Size</p>
                      <p className="text-sm text-muted-foreground">{selectedSpec.packSize}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Markets</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedSpec.markets.map((m) => (
                          <Badge key={m} variant="outline" className="text-xs">
                            {m.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Storage & Stability</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Shelf Life</p>
                      <p className="text-sm text-muted-foreground">{selectedSpec.shelfLife}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Storage Conditions</p>
                      <p className="text-sm text-muted-foreground">{selectedSpec.storageConditions}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Packaging Components</h3>
                  <div className="space-y-4">
                    <div className="border rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <Package className="h-5 w-5 mr-2 text-blue-500" />
                        <span className="font-medium">Primary Packaging</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium">Component</p>
                          <p className="text-muted-foreground">{selectedSpec.primaryPackaging}</p>
                        </div>
                        <div>
                          <p className="font-medium">Material</p>
                          <p className="text-muted-foreground">{selectedSpec.primaryMaterial}</p>
                        </div>
                        <div>
                          <p className="font-medium">Supplier</p>
                          <p className="text-muted-foreground">{selectedSpec.primarySupplier}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <Box className="h-5 w-5 mr-2 text-green-500" />
                        <span className="font-medium">Secondary Packaging</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium">Component</p>
                          <p className="text-muted-foreground">{selectedSpec.secondaryPackaging}</p>
                        </div>
                        <div>
                          <p className="font-medium">Material</p>
                          <p className="text-muted-foreground">{selectedSpec.secondaryMaterial}</p>
                        </div>
                        <div>
                          <p className="font-medium">Supplier</p>
                          <p className="text-muted-foreground">{selectedSpec.secondarySupplier}</p>
                        </div>
                      </div>
                    </div>

                    {selectedSpec.tertiaryPackaging && (
                      <div className="border rounded-md p-3">
                        <div className="flex items-center mb-2">
                          <Layers className="h-5 w-5 mr-2 text-purple-500" />
                          <span className="font-medium">Tertiary Packaging</span>
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div>
                            <p className="font-medium">Component</p>
                            <p className="text-muted-foreground">{selectedSpec.tertiaryPackaging}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <p className="text-muted-foreground">Select a specification to view details</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
