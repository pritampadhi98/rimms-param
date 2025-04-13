"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Eye,
  FileText,
  Calendar,
  Pill,
  FlaskRoundIcon as Flask,
  CheckCircle,
  Globe,
  Archive,
  AlertTriangle,
  Clock,
  Download,
  Filter,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PortfolioOverviewProps {
  searchQuery?: string
  therapeuticArea?: string
  formulation?: string
  lifecycleStage?: string
  market?: string
}

export const PortfolioOverview = ({
  searchQuery = "",
  therapeuticArea = "all",
  formulation = "all",
  lifecycleStage = "all",
  market = "all",
}: PortfolioOverviewProps) => {
  const [expandedProducts, setExpandedProducts] = useState<string[]>([])
  const [viewType, setViewType] = useState<"timeline" | "table" | "cards">("timeline")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [timelineView, setTimelineView] = useState<"all" | "upcoming" | "critical">("all")

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Sample product data
  const productData = [
    {
      id: "prod-001",
      name: "Cardiostat",
      therapeuticArea: "cardiovascular",
      lifecycleStage: "marketed",
      approvalDate: "2020-05-15",
      marketingAuthorizationHolder: "Pharma Global Inc.",
      formulations: [
        {
          id: "form-001",
          name: "Cardiostat Tablets",
          type: "tablet",
          approvalStatus: "approved",
          strengths: ["10mg", "25mg"],
          markets: ["us", "eu", "japan"],
        },
        {
          id: "form-002",
          name: "Cardiostat XR",
          type: "tablet",
          approvalStatus: "approved",
          strengths: ["50mg"],
          markets: ["us", "eu"],
        },
      ],
      markets: ["us", "eu", "japan", "canada", "australia"],
      upcomingMilestones: [
        {
          id: "mile-001",
          title: "EU Renewal",
          date: "2023-08-30",
          type: "renewal",
          status: "pending",
          market: "eu",
          description: "5-year renewal of marketing authorization",
        },
        {
          id: "mile-002",
          title: "Japan Post-Approval Commitment",
          date: "2023-09-15",
          type: "variation",
          status: "pending",
          market: "japan",
          description: "Submission of additional stability data",
        },
      ],
      status: "active",
    },
    {
      id: "prod-002",
      name: "Neurobalance",
      therapeuticArea: "cns",
      lifecycleStage: "marketed",
      approvalDate: "2021-02-18",
      marketingAuthorizationHolder: "Pharma Global Inc.",
      formulations: [
        {
          id: "form-003",
          name: "Neurobalance Capsules",
          type: "capsule",
          approvalStatus: "approved",
          strengths: ["25mg", "50mg"],
          markets: ["eu", "uk", "canada"],
        },
      ],
      markets: ["eu", "uk", "canada", "australia"],
      upcomingMilestones: [
        {
          id: "mile-003",
          title: "US Submission",
          date: "2023-10-05",
          type: "submission",
          status: "pending",
          market: "us",
          description: "Initial NDA submission",
        },
      ],
      status: "active",
    },
    {
      id: "prod-003",
      name: "Respiraclear",
      therapeuticArea: "respiratory",
      lifecycleStage: "marketed",
      approvalDate: "2019-11-30",
      marketingAuthorizationHolder: "Pharma Global Inc.",
      formulations: [
        {
          id: "form-004",
          name: "Respiraclear Solution",
          type: "solution",
          approvalStatus: "approved",
          strengths: ["2mg/ml"],
          markets: ["us", "eu", "japan", "china"],
        },
        {
          id: "form-005",
          name: "Respiraclear Inhaler",
          type: "inhalation",
          approvalStatus: "approved",
          strengths: ["100mcg/dose"],
          markets: ["us", "eu", "japan"],
        },
      ],
      markets: ["us", "eu", "japan", "china", "brazil", "mexico"],
      upcomingMilestones: [
        {
          id: "mile-004",
          title: "China Variation",
          date: "2023-07-20",
          type: "variation",
          status: "pending",
          market: "china",
          description: "Manufacturing site change",
        },
      ],
      status: "active",
    },
    {
      id: "prod-004",
      name: "Oncotarget",
      therapeuticArea: "oncology",
      lifecycleStage: "development",
      developmentPhase: "Phase III",
      marketingAuthorizationHolder: "Pharma Global Inc.",
      formulations: [
        {
          id: "form-006",
          name: "Oncotarget Injection",
          type: "injectable",
          approvalStatus: "pending",
          developmentPhase: "Phase III",
          strengths: ["50mg/ml"],
          markets: ["us", "eu"],
        },
      ],
      markets: [],
      upcomingMilestones: [
        {
          id: "mile-005",
          title: "Phase III Data Submission",
          date: "2023-07-15",
          type: "development",
          status: "pending",
          market: "global",
          description: "Final clinical study report submission",
        },
        {
          id: "mile-006",
          title: "Pre-NDA Meeting",
          date: "2023-09-30",
          type: "development",
          status: "pending",
          market: "us",
          description: "FDA pre-submission meeting",
        },
      ],
      status: "active",
    },
    {
      id: "prod-005",
      name: "Immunoboost",
      therapeuticArea: "infectious",
      lifecycleStage: "development",
      developmentPhase: "Phase II",
      marketingAuthorizationHolder: "Pharma Global Inc.",
      formulations: [
        {
          id: "form-007",
          name: "Immunoboost Tablets",
          type: "tablet",
          approvalStatus: "pending",
          developmentPhase: "Phase II",
          strengths: ["500mg"],
          markets: ["us"],
        },
      ],
      markets: [],
      upcomingMilestones: [
        {
          id: "mile-007",
          title: "Phase II Interim Analysis",
          date: "2023-08-10",
          type: "development",
          status: "pending",
          market: "global",
          description: "Interim efficacy and safety analysis",
        },
      ],
      status: "active",
    },
    {
      id: "prod-006",
      name: "Gluconorm",
      therapeuticArea: "endocrine",
      lifecycleStage: "discontinued",
      approvalDate: "2015-03-22",
      marketingAuthorizationHolder: "Pharma Global Inc.",
      formulations: [
        {
          id: "form-008",
          name: "Gluconorm Tablets",
          type: "tablet",
          approvalStatus: "approved",
          strengths: ["5mg", "10mg"],
          markets: ["us", "eu", "japan"],
        },
      ],
      markets: ["us", "eu", "japan"],
      upcomingMilestones: [
        {
          id: "mile-008",
          title: "EU Discontinuation Notification",
          date: "2023-07-30",
          type: "variation",
          status: "pending",
          market: "eu",
          description: "Final discontinuation notification to authorities",
        },
      ],
      status: "inactive",
    },
  ]

  // Filter products based on search and filters
  const filteredProducts = productData.filter((product) => {
    // Search query filter
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.formulations.some((form) => form.name.toLowerCase().includes(searchQuery.toLowerCase()))
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

    // Lifecycle stage filter
    if (lifecycleStage !== "all" && product.lifecycleStage !== lifecycleStage) {
      return false
    }

    // Market filter
    if (market !== "all" && !product.markets.includes(market.toLowerCase())) {
      return false
    }

    return true
  })

  const toggleProduct = (productId: string) => {
    setExpandedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleViewProduct = (productId: string) => {
    setSelectedProduct(productId)
  }

  const getLifecycleStageBadge = (stage: string) => {
    switch (stage) {
      case "development":
        return <Badge className="bg-blue-500">Development</Badge>
      case "submission":
        return <Badge className="bg-amber-500">Submission</Badge>
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "marketed":
        return <Badge className="bg-purple-500">Marketed</Badge>
      case "discontinued":
        return <Badge className="bg-red-500">Discontinued</Badge>
      default:
        return <Badge className="bg-gray-500">{stage}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "inactive":
        return <Badge className="bg-red-500">Inactive</Badge>
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "overdue":
        return <Badge className="bg-red-500">Overdue</Badge>
      case "at-risk":
        return <Badge className="bg-amber-500">At Risk</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getMilestoneTypeBadge = (type: string) => {
    switch (type) {
      case "submission":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Submission
          </Badge>
        )
      case "approval":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Approval
          </Badge>
        )
      case "renewal":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Renewal
          </Badge>
        )
      case "variation":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Variation
          </Badge>
        )
      case "development":
        return (
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
            Development
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  const getLifecycleStageIcon = (stage: string) => {
    switch (stage) {
      case "development":
        return <Flask className="h-5 w-5 text-blue-500" />
      case "submission":
        return <FileText className="h-5 w-5 text-amber-500" />
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "marketed":
        return <Globe className="h-5 w-5 text-purple-500" />
      case "discontinued":
        return <Archive className="h-5 w-5 text-red-500" />
      default:
        return <Pill className="h-5 w-5" />
    }
  }

  const getMilestoneStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "overdue":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "at-risk":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  // Get all milestones across products
  const allMilestones = productData.flatMap((product) =>
    product.upcomingMilestones.map((milestone) => ({
      ...milestone,
      productId: product.id,
      productName: product.name,
      lifecycleStage: product.lifecycleStage,
    })),
  )

  // Filter milestones based on view type
  const filteredMilestones = allMilestones.filter((milestone) => {
    if (timelineView === "upcoming") {
      return new Date(milestone.date) > new Date()
    }
    if (timelineView === "critical") {
      return milestone.status === "overdue" || milestone.status === "at-risk"
    }
    return true
  })

  // Sort milestones by date
  const sortedMilestones = filteredMilestones.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const selectedProductData = selectedProduct ? productData.find((p) => p.id === selectedProduct) : null

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

  if (selectedProductData) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{selectedProductData.name} Overview</CardTitle>
            <CardDescription>
              {getLifecycleStageBadge(selectedProductData.lifecycleStage)} {getStatusBadge(selectedProductData.status)}
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
                  <p className="text-sm text-muted-foreground capitalize">{selectedProductData.therapeuticArea}</p>
                </div>
                <div>
                  <span className="text-sm font-medium">Marketing Authorization Holder:</span>
                  <p className="text-sm text-muted-foreground">{selectedProductData.marketingAuthorizationHolder}</p>
                </div>
                {selectedProductData.approvalDate && (
                  <div>
                    <span className="text-sm font-medium">Initial Approval Date:</span>
                    <p className="text-sm text-muted-foreground">{selectedProductData.approvalDate}</p>
                  </div>
                )}
                {selectedProductData.developmentPhase && (
                  <div>
                    <span className="text-sm font-medium">Development Phase:</span>
                    <p className="text-sm text-muted-foreground">{selectedProductData.developmentPhase}</p>
                  </div>
                )}
                <div>
                  <span className="text-sm font-medium">Lifecycle Stage:</span>
                  <div className="mt-1">{getLifecycleStageBadge(selectedProductData.lifecycleStage)}</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Formulations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {selectedProductData.formulations.map((form) => (
                    <div key={form.id} className="border rounded-md p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{form.name}</span>
                        <Badge variant="outline">{form.type}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="mb-1">
                          <span className="font-medium">Strengths:</span> {form.strengths.join(", ")}
                        </div>
                        <div>
                          <span className="font-medium">Markets:</span>{" "}
                          {form.markets.length > 0 ? form.markets.map((m) => m.toUpperCase()).join(", ") : "None"}
                        </div>
                      </div>
                      <div className="mt-2">{getStatusBadge(form.approvalStatus)}</div>
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
                  {selectedProductData.markets.length > 0 ? (
                    selectedProductData.markets.map((market) => (
                      <Badge key={market} variant="outline" className="mr-1 mb-1">
                        {market.toUpperCase()}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No markets approved yet</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Upcoming Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedProductData.upcomingMilestones.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Milestone</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Market</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedProductData.upcomingMilestones.map((milestone) => (
                        <TableRow key={milestone.id}>
                          <TableCell className="font-medium">{milestone.title}</TableCell>
                          <TableCell>{getMilestoneTypeBadge(milestone.type)}</TableCell>
                          <TableCell className="uppercase">{milestone.market}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>{milestone.date}</span>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(milestone.status)}</TableCell>
                          <TableCell>{milestone.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-sm text-muted-foreground">No upcoming milestones</p>
                )}
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{filteredProducts.length} Products</h3>
        <div className="flex items-center space-x-2">
          <Tabs value={viewType} onValueChange={(v) => setViewType(v as "timeline" | "table" | "cards")}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="timeline">Timeline View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="cards">Card View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {viewType === "timeline" ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Product Lifecycle Timeline</CardTitle>
              <CardDescription>Key milestones across product portfolio</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Select value={timelineView} onValueChange={(v) => setTimelineView(v as "all" | "upcoming" | "critical")}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Timeline View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Milestones</SelectItem>
                  <SelectItem value="upcoming">Upcoming Only</SelectItem>
                  <SelectItem value="critical">Critical Only</SelectItem>
                </SelectContent>
              </Select>
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
            <div className="relative">
              <div className="absolute left-9 top-0 bottom-0 w-px bg-muted-foreground/20" />
              <div className="space-y-6">
                {sortedMilestones.map((milestone, index) => {
                  const product = productData.find((p) => p.id === milestone.productId)
                  if (!product) return null

                  return (
                    <div key={milestone.id} className="relative flex items-start">
                      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                        {getMilestoneStatusIcon(milestone.status)}
                      </div>
                      <div className="ml-10 flex-1">
                        <div
                          className={`rounded-md border p-4 ${
                            milestone.status === "overdue"
                              ? "bg-red-50 border-red-200"
                              : milestone.status === "at-risk"
                                ? "bg-amber-50 border-amber-200"
                                : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <span className="font-medium">{milestone.date}</span>
                              <span className="mx-2">•</span>
                              <span className="font-medium">{product.name}</span>
                              <span className="mx-2">•</span>
                              <span className="uppercase">{milestone.market}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getMilestoneTypeBadge(milestone.type)}
                              {getStatusBadge(milestone.status)}
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="font-medium">{milestone.title}</p>
                            <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          </div>
                          <div className="mt-2 flex justify-end">
                            <Button variant="ghost" size="sm" onClick={() => handleViewProduct(milestone.productId)}>
                              <Eye className="h-4 w-4 mr-1" />
                              View Product
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : viewType === "table" ? (
        <Card>
          <CardHeader>
            <CardTitle>Product Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Therapeutic Area</TableHead>
                  <TableHead>Lifecycle Stage</TableHead>
                  <TableHead>Formulations</TableHead>
                  <TableHead>Markets</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Upcoming Milestones</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="capitalize">{product.therapeuticArea}</TableCell>
                    <TableCell>{getLifecycleStageBadge(product.lifecycleStage)}</TableCell>
                    <TableCell>{product.formulations.length}</TableCell>
                    <TableCell>
                      {product.markets.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {product.markets.slice(0, 3).map((m) => (
                            <Badge key={m} variant="outline" className="text-xs">
                              {m.toUpperCase()}
                            </Badge>
                          ))}
                          {product.markets.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{product.markets.length - 3}
                            </Badge>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground">None</span>
                      )}
                    </TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell>{product.upcomingMilestones.length}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewProduct(product.id)}>
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    {getLifecycleStageIcon(product.lifecycleStage)}
                    <CardTitle className="text-base ml-2">{product.name}</CardTitle>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    {getStatusBadge(product.status)}
                    {getLifecycleStageBadge(product.lifecycleStage)}
                  </div>
                </div>
                <CardDescription className="capitalize">{product.therapeuticArea}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium">Formulations:</span>{" "}
                    {product.formulations.map((f) => f.name).join(", ")}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Markets:</span>{" "}
                    {product.markets.length > 0 ? product.markets.map((m) => m.toUpperCase()).join(", ") : "None"}
                  </div>
                  {product.upcomingMilestones.length > 0 && (
                    <div>
                      <span className="text-sm font-medium">Next Milestone:</span>
                      <div className="mt-1 p-2 border rounded-md">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{product.upcomingMilestones[0].title}</span>
                          {getMilestoneTypeBadge(product.upcomingMilestones[0].type)}
                        </div>
                        <div className="flex items-center mt-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{product.upcomingMilestones[0].date}</span>
                        </div>
                      </div>
                    </div>
                  )}
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
      )}
    </div>
  )
}

// Add default export that references the named export
export default PortfolioOverview
