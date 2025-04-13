"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  ChevronDown,
  Package,
  Pill,
  Box,
  Layers,
  Eye,
  FileText,
  BarChart4,
  Globe,
  Calendar,
  AlertTriangle,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface FilterProps {
  searchQuery: string
  therapeuticArea: string
  formulation: string
  market: string
}

interface ProductData {
  id: string
  name: string
  therapeuticArea: string
  status: "active" | "development" | "discontinued" | "pending"
  lifecycleStage: "early-development" | "late-development" | "commercial" | "mature" | "end-of-life"
  approvalDate?: string
  marketingAuthorizationHolder: string
  formulations: FormulationData[]
}

interface FormulationData {
  id: string
  name: string
  type: string
  approvalStatus: "approved" | "pending" | "rejected"
  developmentPhase?: string
  strengths: StrengthData[]
}

interface StrengthData {
  id: string
  value: string
  unit: string
  referenceStandard?: string
  presentations: PresentationData[]
}

interface PresentationData {
  id: string
  name: string
  packSize: string
  markets: string[]
  status: "approved" | "pending" | "rejected"
  primaryPackaging: string
  secondaryPackaging: string
  tertiaryPackaging?: string
  shelfLife: string
  storageConditions: string
  launchDate?: string
  marketingStatus: "active" | "discontinued" | "planned"
  complianceStatus: "compliant" | "non-compliant" | "pending-review"
}

// Sample data
const productData: ProductData[] = [
  {
    id: "prod-001",
    name: "Cardiostat",
    therapeuticArea: "cardiovascular",
    status: "active",
    lifecycleStage: "commercial",
    approvalDate: "2020-05-15",
    marketingAuthorizationHolder: "Pharma Global Inc.",
    formulations: [
      {
        id: "form-001",
        name: "Cardiostat Tablets",
        type: "tablet",
        approvalStatus: "approved",
        strengths: [
          {
            id: "str-001",
            value: "10",
            unit: "mg",
            referenceStandard: "USP",
            presentations: [
              {
                id: "pres-001",
                name: "Blister Pack",
                packSize: "30 tablets",
                markets: ["us", "eu", "japan"],
                status: "approved",
                primaryPackaging: "PVC/Aluminum blister",
                secondaryPackaging: "Cardboard carton",
                tertiaryPackaging: "Corrugated shipping box (12 units)",
                shelfLife: "36 months",
                storageConditions: "Store below 25°C in original packaging",
                launchDate: "2020-07-01",
                marketingStatus: "active",
                complianceStatus: "compliant",
              },
              {
                id: "pres-002",
                name: "Bottle",
                packSize: "90 tablets",
                markets: ["us", "canada"],
                status: "approved",
                primaryPackaging: "HDPE bottle with child-resistant closure",
                secondaryPackaging: "Cardboard carton",
                shelfLife: "36 months",
                storageConditions: "Store below 25°C in original packaging",
                launchDate: "2020-08-15",
                marketingStatus: "active",
                complianceStatus: "compliant",
              },
            ],
          },
          {
            id: "str-002",
            value: "25",
            unit: "mg",
            referenceStandard: "USP",
            presentations: [
              {
                id: "pres-003",
                name: "Blister Pack",
                packSize: "30 tablets",
                markets: ["us", "eu", "japan"],
                status: "approved",
                primaryPackaging: "PVC/Aluminum blister",
                secondaryPackaging: "Cardboard carton",
                shelfLife: "36 months",
                storageConditions: "Store below 25°C in original packaging",
                launchDate: "2020-07-01",
                marketingStatus: "active",
                complianceStatus: "compliant",
              },
            ],
          },
        ],
      },
      {
        id: "form-002",
        name: "Cardiostat XR",
        type: "tablet",
        approvalStatus: "approved",
        strengths: [
          {
            id: "str-003",
            value: "50",
            unit: "mg",
            referenceStandard: "USP",
            presentations: [
              {
                id: "pres-004",
                name: "Bottle",
                packSize: "30 tablets",
                markets: ["us", "eu"],
                status: "approved",
                primaryPackaging: "HDPE bottle with child-resistant closure",
                secondaryPackaging: "Cardboard carton",
                shelfLife: "36 months",
                storageConditions: "Store below 25°C in original packaging",
                launchDate: "2021-03-10",
                marketingStatus: "active",
                complianceStatus: "compliant",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "prod-002",
    name: "Neurobalance",
    therapeuticArea: "cns",
    status: "active",
    lifecycleStage: "commercial",
    approvalDate: "2021-02-18",
    marketingAuthorizationHolder: "Pharma Global Inc.",
    formulations: [
      {
        id: "form-003",
        name: "Neurobalance Capsules",
        type: "capsule",
        approvalStatus: "approved",
        strengths: [
          {
            id: "str-004",
            value: "25",
            unit: "mg",
            referenceStandard: "USP",
            presentations: [
              {
                id: "pres-005",
                name: "Blister Pack",
                packSize: "28 capsules",
                markets: ["eu", "uk", "canada"],
                status: "approved",
                primaryPackaging: "PVC/PVDC/Aluminum blister",
                secondaryPackaging: "Cardboard carton with leaflet",
                shelfLife: "24 months",
                storageConditions: "Store below 30°C protected from moisture",
                launchDate: "2021-04-15",
                marketingStatus: "active",
                complianceStatus: "compliant",
              },
            ],
          },
          {
            id: "str-005",
            value: "50",
            unit: "mg",
            referenceStandard: "USP",
            presentations: [
              {
                id: "pres-006",
                name: "Blister Pack",
                packSize: "28 capsules",
                markets: ["eu", "uk", "canada"],
                status: "approved",
                primaryPackaging: "PVC/PVDC/Aluminum blister",
                secondaryPackaging: "Cardboard carton with leaflet",
                shelfLife: "24 months",
                storageConditions: "Store below 30°C protected from moisture",
                launchDate: "2021-04-15",
                marketingStatus: "active",
                complianceStatus: "compliant",
              },
              {
                id: "pres-007",
                name: "Bottle",
                packSize: "60 capsules",
                markets: ["us"],
                status: "pending",
                primaryPackaging: "HDPE bottle with child-resistant closure",
                secondaryPackaging: "Cardboard carton",
                shelfLife: "24 months",
                storageConditions: "Store below 30°C protected from moisture",
                marketingStatus: "planned",
                complianceStatus: "pending-review",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "prod-003",
    name: "Respiraclear",
    therapeuticArea: "respiratory",
    status: "active",
    lifecycleStage: "commercial",
    approvalDate: "2019-11-30",
    marketingAuthorizationHolder: "Pharma Global Inc.",
    formulations: [
      {
        id: "form-004",
        name: "Respiraclear Solution",
        type: "solution",
        approvalStatus: "approved",
        strengths: [
          {
            id: "str-006",
            value: "2",
            unit: "mg/ml",
            referenceStandard: "Ph. Eur.",
            presentations: [
              {
                id: "pres-008",
                name: "Vial",
                packSize: "10 ml",
                markets: ["us", "eu", "japan", "china"],
                status: "approved",
                primaryPackaging: "Type I glass vial with rubber stopper",
                secondaryPackaging: "Cardboard carton",
                shelfLife: "24 months",
                storageConditions: "Store between 2-8°C. Do not freeze.",
                launchDate: "2020-01-15",
                marketingStatus: "active",
                complianceStatus: "non-compliant",
              },
            ],
          },
        ],
      },
      {
        id: "form-005",
        name: "Respiraclear Inhaler",
        type: "inhalation",
        approvalStatus: "approved",
        strengths: [
          {
            id: "str-007",
            value: "100",
            unit: "mcg/dose",
            referenceStandard: "Ph. Eur.",
            presentations: [
              {
                id: "pres-009",
                name: "Inhaler",
                packSize: "200 doses",
                markets: ["us", "eu", "japan"],
                status: "approved",
                primaryPackaging: "Pressurized metered-dose inhaler",
                secondaryPackaging: "Cardboard carton",
                shelfLife: "24 months",
                storageConditions: "Store below 25°C. Protect from frost and direct sunlight.",
                launchDate: "2020-02-28",
                marketingStatus: "active",
                complianceStatus: "compliant",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "prod-004",
    name: "Oncotarget",
    therapeuticArea: "oncology",
    status: "development",
    lifecycleStage: "late-development",
    marketingAuthorizationHolder: "Pharma Global Inc.",
    formulations: [
      {
        id: "form-006",
        name: "Oncotarget Injection",
        type: "injectable",
        approvalStatus: "pending",
        developmentPhase: "Phase III",
        strengths: [
          {
            id: "str-008",
            value: "50",
            unit: "mg/ml",
            referenceStandard: "USP",
            presentations: [
              {
                id: "pres-010",
                name: "Single-use Vial",
                packSize: "1 vial",
                markets: ["us", "eu"],
                status: "pending",
                primaryPackaging: "Type I glass vial with rubber stopper",
                secondaryPackaging: "Cardboard carton with protective insert",
                shelfLife: "18 months",
                storageConditions: "Store between 2-8°C. Do not freeze.",
                marketingStatus: "planned",
                complianceStatus: "pending-review",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "prod-005",
    name: "Immunoboost",
    therapeuticArea: "infectious",
    status: "development",
    lifecycleStage: "early-development",
    marketingAuthorizationHolder: "Pharma Global Inc.",
    formulations: [
      {
        id: "form-007",
        name: "Immunoboost Tablets",
        type: "tablet",
        approvalStatus: "pending",
        developmentPhase: "Phase II",
        strengths: [
          {
            id: "str-009",
            value: "500",
            unit: "mg",
            referenceStandard: "In-house",
            presentations: [
              {
                id: "pres-011",
                name: "Blister Pack",
                packSize: "14 tablets",
                markets: ["us"],
                status: "pending",
                primaryPackaging: "PVC/Aluminum blister",
                secondaryPackaging: "Cardboard carton",
                shelfLife: "24 months",
                storageConditions: "Store below 25°C in original packaging",
                marketingStatus: "planned",
                complianceStatus: "pending-review",
              },
            ],
          },
        ],
      },
    ],
  },
]

export function ProductHierarchy({ searchQuery, therapeuticArea, formulation, market }: FilterProps) {
  const [expandedProducts, setExpandedProducts] = useState<string[]>([])
  const [expandedFormulations, setExpandedFormulations] = useState<string[]>([])
  const [expandedStrengths, setExpandedStrengths] = useState<string[]>([])
  const [viewType, setViewType] = useState<"tree" | "cards" | "table">("tree")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [selectedPresentation, setSelectedPresentation] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Filter products based on search and filters
  const filteredProducts = productData.filter((product) => {
    // Search query filter
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.formulations.some(
        (form) =>
          form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          form.strengths.some((str) =>
            str.presentations.some((pres) => pres.name.toLowerCase().includes(searchQuery.toLowerCase())),
          ),
      )
    ) {
      return false
    }

    // Therapeutic area filter
    if (therapeuticArea !== "all" && product.therapeuticArea !== therapeuticArea) {
      return false
    }

    // Formulation filter
    if (
      formulation !== "all" &&
      !product.formulations.some((form) => form.type.toLowerCase() === formulation.toLowerCase())
    ) {
      return false
    }

    // Market filter
    if (
      market !== "all" &&
      !product.formulations.some((form) =>
        form.strengths.some((str) => str.presentations.some((pres) => pres.markets.includes(market.toLowerCase()))),
      )
    ) {
      return false
    }

    return true
  })

  const toggleProduct = (productId: string) => {
    setExpandedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const toggleFormulation = (formulationId: string) => {
    setExpandedFormulations((prev) =>
      prev.includes(formulationId) ? prev.filter((id) => id !== formulationId) : [...prev, formulationId],
    )
  }

  const toggleStrength = (strengthId: string) => {
    setExpandedStrengths((prev) =>
      prev.includes(strengthId) ? prev.filter((id) => id !== strengthId) : [...prev, strengthId],
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "development":
        return <Badge className="bg-blue-500">Development</Badge>
      case "discontinued":
        return <Badge className="bg-red-500">Discontinued</Badge>
      case "planned":
        return <Badge className="bg-blue-500">Planned</Badge>
      case "compliant":
        return <Badge className="bg-green-500">Compliant</Badge>
      case "non-compliant":
        return <Badge className="bg-red-500">Non-Compliant</Badge>
      case "pending-review":
        return <Badge className="bg-amber-500">Pending Review</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getLifecycleBadge = (stage: string) => {
    switch (stage) {
      case "early-development":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Early Development
          </Badge>
        )
      case "late-development":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Late Development
          </Badge>
        )
      case "commercial":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Commercial
          </Badge>
        )
      case "mature":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Mature
          </Badge>
        )
      case "end-of-life":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            End of Life
          </Badge>
        )
      default:
        return <Badge variant="outline">{stage}</Badge>
    }
  }

  const handleViewProduct = (productId: string) => {
    setSelectedProduct(productId)
  }

  const handleViewPresentation = (presentationId: string) => {
    setSelectedPresentation(presentationId)
  }

  const selectedProductData = selectedProduct ? productData.find((p) => p.id === selectedProduct) : null

  // Find the selected presentation across all products
  const findSelectedPresentation = () => {
    if (!selectedPresentation) return null

    for (const product of productData) {
      for (const formulation of product.formulations) {
        for (const strength of formulation.strengths) {
          const presentation = strength.presentations.find((p) => p.id === selectedPresentation)
          if (presentation) {
            return {
              product,
              formulation,
              strength,
              presentation,
            }
          }
        }
      }
    }
    return null
  }

  const selectedPresentationData = findSelectedPresentation()

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-40">
            <div className="space-y-2 w-full max-w-md">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
              <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (selectedPresentationData) {
    const { product, formulation, strength, presentation } = selectedPresentationData

    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Packaging Presentation Details</CardTitle>
            <CardDescription>
              {product.name} - {formulation.name} - {strength.value} {strength.unit} - {presentation.name}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusBadge(presentation.status)}
            <Button variant="outline" size="sm" onClick={() => setSelectedPresentation(null)}>
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
                    <p className="text-sm text-muted-foreground">{product.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Formulation</p>
                    <p className="text-sm text-muted-foreground">{formulation.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Strength</p>
                    <p className="text-sm text-muted-foreground">
                      {strength.value} {strength.unit}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Presentation</p>
                    <p className="text-sm text-muted-foreground">{presentation.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pack Size</p>
                    <p className="text-sm text-muted-foreground">{presentation.packSize}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Markets</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {presentation.markets.map((m) => (
                        <Badge key={m} variant="outline" className="text-xs">
                          {m.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Packaging Components</h3>
                <div className="space-y-3">
                  <div className="border rounded-md p-3">
                    <div className="flex items-center mb-2">
                      <Package className="h-5 w-5 mr-2 text-blue-500" />
                      <span className="font-medium">Primary Packaging</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{presentation.primaryPackaging}</p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="flex items-center mb-2">
                      <Box className="h-5 w-5 mr-2 text-green-500" />
                      <span className="font-medium">Secondary Packaging</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{presentation.secondaryPackaging}</p>
                  </div>
                  {presentation.tertiaryPackaging && (
                    <div className="border rounded-md p-3">
                      <div className="flex items-center mb-2">
                        <Layers className="h-5 w-5 mr-2 text-purple-500" />
                        <span className="font-medium">Tertiary Packaging</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{presentation.tertiaryPackaging}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Storage & Stability</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Shelf Life</p>
                    <p className="text-sm text-muted-foreground">{presentation.shelfLife}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Storage Conditions</p>
                    <p className="text-sm text-muted-foreground">{presentation.storageConditions}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Regulatory Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Marketing Status</span>
                    {getStatusBadge(presentation.marketingStatus)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Compliance Status</span>
                    {getStatusBadge(presentation.complianceStatus)}
                  </div>
                  {presentation.launchDate && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Launch Date</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{presentation.launchDate}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-1" />
                  Specifications
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart4 className="h-4 w-4 mr-1" />
                  Analytics
                </Button>
                <Button variant="outline" size="sm">
                  <Globe className="h-4 w-4 mr-1" />
                  Market Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (selectedProduct) {
    const product = productData.find((p) => p.id === selectedProduct)
    if (!product) return null

    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{product.name} Overview</CardTitle>
            <CardDescription>
              {getLifecycleBadge(product.lifecycleStage)} {getStatusBadge(product.status)}
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={() => setSelectedProduct(null)}>
            Back to List
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Product Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <span className="text-sm font-medium">Therapeutic Area:</span>
                  <p className="text-sm text-muted-foreground capitalize">{product.therapeuticArea}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Marketing Authorization Holder:</span>
                  <p className="text-sm text-muted-foreground">{product.marketingAuthorizationHolder}</p>
                </div>
                {product.approvalDate && (
                  <div>
                    <span className="text-sm font-medium">Initial Approval Date:</span>
                    <p className="text-sm text-muted-foreground">{product.approvalDate}</p>
                  </div>
                )}
                <div>
                  <span className="text-sm font-medium">Lifecycle Stage:</span>
                  <div className="mt-1">{getLifecycleBadge(product.lifecycleStage)}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Formulations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {product.formulations.map((form) => (
                    <div key={form.id} className="flex items-center justify-between">
                      <span className="text-sm">{form.name}</span>
                      {getStatusBadge(form.approvalStatus)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Market Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Array.from(
                    new Set(
                      product.formulations.flatMap((form) =>
                        form.strengths.flatMap((str) => str.presentations.flatMap((pres) => pres.markets)),
                      ),
                    ),
                  ).map((market) => (
                    <Badge key={market} variant="outline" className="mr-1 mb-1">
                      {market.toUpperCase()}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Packaging Presentations</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Formulation</TableHead>
                      <TableHead>Strength</TableHead>
                      <TableHead>Presentation</TableHead>
                      <TableHead>Markets</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Compliance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {product.formulations.flatMap((form) =>
                      form.strengths.flatMap((str) =>
                        str.presentations.map((pres) => (
                          <TableRow key={pres.id}>
                            <TableCell>{form.name}</TableCell>
                            <TableCell>
                              {str.value} {str.unit}
                            </TableCell>
                            <TableCell>
                              {pres.name} ({pres.packSize})
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {pres.markets.map((m) => (
                                  <Badge key={m} variant="outline" className="text-xs">
                                    {m.toUpperCase()}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(pres.status)}</TableCell>
                            <TableCell>{getStatusBadge(pres.complianceStatus)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" onClick={() => handleViewPresentation(pres.id)}>
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        )),
                      ),
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{filteredProducts.length} Products</h3>
        <div className="flex items-center space-x-2">
          <Tabs
            value={viewType}
            onValueChange={(v) => setViewType(v as "tree" | "cards" | "table")}
            className="w-[300px]"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="tree">Tree View</TabsTrigger>
              <TabsTrigger value="cards">Card View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {viewType === "tree" ? (
        <Card>
          <CardHeader>
            <CardTitle>Product Hierarchy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredProducts.map((product) => (
                <Collapsible
                  key={product.id}
                  open={expandedProducts.includes(product.id)}
                  onOpenChange={() => toggleProduct(product.id)}
                  className="border rounded-md"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-muted/50">
                    <div className="flex items-center">
                      <Pill className="h-5 w-5 mr-2" />
                      <span className="font-medium">{product.name}</span>
                      <Badge className="ml-2" variant="outline">
                        {product.therapeuticArea}
                      </Badge>
                      <div className="ml-2">{getLifecycleBadge(product.lifecycleStage)}</div>
                    </div>
                    <div className="flex items-center">
                      {getStatusBadge(product.status)}
                      <Button variant="ghost" size="sm">
                        {expandedProducts.includes(product.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 pr-4 pb-4">
                    <div className="flex justify-end mb-2">
                      <Button variant="outline" size="sm" onClick={() => handleViewProduct(product.id)}>
                        <Eye className="h-4 w-4 mr-1" />
                        View Product Details
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {product.formulations.map((formulation) => (
                        <Collapsible
                          key={formulation.id}
                          open={expandedFormulations.includes(formulation.id)}
                          onOpenChange={() => toggleFormulation(formulation.id)}
                          className="border rounded-md"
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-3 hover:bg-muted/50">
                            <div className="flex items-center">
                              <Box className="h-5 w-5 mr-2" />
                              <span className="font-medium">{formulation.name}</span>
                              <Badge className="ml-2" variant="outline">
                                {formulation.type}
                              </Badge>
                              {formulation.developmentPhase && (
                                <Badge className="ml-2 bg-blue-500">{formulation.developmentPhase}</Badge>
                              )}
                            </div>
                            <div className="flex items-center">
                              {getStatusBadge(formulation.approvalStatus)}
                              <Button variant="ghost" size="sm">
                                {expandedFormulations.includes(formulation.id) ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-6 pr-4 pb-3">
                            <div className="space-y-2">
                              {formulation.strengths.map((strength) => (
                                <Collapsible
                                  key={strength.id}
                                  open={expandedStrengths.includes(strength.id)}
                                  onOpenChange={() => toggleStrength(strength.id)}
                                  className="border rounded-md"
                                >
                                  <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-muted/50">
                                    <div className="flex items-center">
                                      <Layers className="h-5 w-5 mr-2" />
                                      <span className="font-medium">
                                        {strength.value} {strength.unit}
                                      </span>
                                      {strength.referenceStandard && (
                                        <span className="ml-2 text-xs text-muted-foreground">
                                          ({strength.referenceStandard})
                                        </span>
                                      )}
                                      <Badge className="ml-2" variant="outline">
                                        {strength.presentations.length} presentations
                                      </Badge>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                      {expandedStrengths.includes(strength.id) ? (
                                        <ChevronDown className="h-4 w-4" />
                                      ) : (
                                        <ChevronRight className="h-4 w-4" />
                                      )}
                                    </Button>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent className="pl-6 pr-4 pb-2">
                                    <div className="space-y-2">
                                      {strength.presentations.map((presentation) => (
                                        <div
                                          key={presentation.id}
                                          className="flex items-center justify-between p-2 border rounded-md"
                                        >
                                          <div className="flex items-center">
                                            <Package className="h-5 w-5 mr-2" />
                                            <div>
                                              <span className="font-medium">{presentation.name}</span>
                                              <div className="text-xs text-muted-foreground">
                                                {presentation.packSize} | Primary: {presentation.primaryPackaging}
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex items-center space-x-2">
                                            <div className="flex space-x-1">
                                              {presentation.markets.map((m) => (
                                                <Badge key={m} variant="outline" className="text-xs">
                                                  {m.toUpperCase()}
                                                </Badge>
                                              ))}
                                            </div>
                                            {getStatusBadge(presentation.status)}
                                            {presentation.complianceStatus === "non-compliant" && (
                                              <AlertTriangle className="h-4 w-4 text-red-500" />
                                            )}
                                            <Button
                                              variant="ghost"
                                              size="sm"
                                              onClick={() => handleViewPresentation(presentation.id)}
                                            >
                                              <Eye className="h-4 w-4" />
                                            </Button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </CollapsibleContent>
                                </Collapsible>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : viewType === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground capitalize">{product.therapeuticArea}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    {getStatusBadge(product.status)}
                    {getLifecycleBadge(product.lifecycleStage)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="space-y-3">
                  {product.formulations.map((formulation) => (
                    <div key={formulation.id} className="border rounded-md p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Box className="h-4 w-4 mr-2" />
                          <span className="font-medium text-sm">{formulation.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Badge variant="outline" className="text-xs">
                            {formulation.type}
                          </Badge>
                          {getStatusBadge(formulation.approvalStatus)}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {formulation.strengths.map((strength) => (
                          <div key={strength.id} className="text-sm pl-6">
                            <div className="flex items-center">
                              <Layers className="h-4 w-4 mr-1" />
                              <span>
                                {strength.value} {strength.unit}
                              </span>
                              <span className="text-xs text-muted-foreground ml-2">
                                ({strength.presentations.length} presentations)
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <Button size="sm" onClick={() => handleViewProduct(product.id)}>
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Product Hierarchy Table</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Therapeutic Area</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Lifecycle Stage</TableHead>
                  <TableHead>Formulations</TableHead>
                  <TableHead>Presentations</TableHead>
                  <TableHead>Markets</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => {
                  const presentationCount = product.formulations.reduce(
                    (count, form) =>
                      count + form.strengths.reduce((strCount, str) => strCount + str.presentations.length, 0),
                    0,
                  )

                  const markets = Array.from(
                    new Set(
                      product.formulations.flatMap((form) =>
                        form.strengths.flatMap((str) => str.presentations.flatMap((pres) => pres.markets)),
                      ),
                    ),
                  )

                  return (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell className="capitalize">{product.therapeuticArea}</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell>{getLifecycleBadge(product.lifecycleStage)}</TableCell>
                      <TableCell>{product.formulations.length}</TableCell>
                      <TableCell>{presentationCount}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {markets.map((m) => (
                            <Badge key={m} variant="outline" className="text-xs">
                              {m.toUpperCase()}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleViewProduct(product.id)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
