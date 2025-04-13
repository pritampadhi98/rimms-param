"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Eye,
  Calendar,
  Download,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Plus,
  History,
  Beaker,
  Microscope,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

interface FormulationManagementProps {
  searchQuery?: string
  therapeuticArea?: string
  formulation?: string
  lifecycleStage?: string
  market?: string
}

export const FormulationManagement = ({
  searchQuery = "",
  therapeuticArea = "all",
  formulation = "all",
  lifecycleStage = "all",
  market = "all",
}: FormulationManagementProps) => {
  const [activeTab, setActiveTab] = useState("formulations")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFormulation, setSelectedFormulation] = useState<string | null>(null)
  const [comparisonFormulations, setComparisonFormulations] = useState<string[]>([])
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [searchQueryLocal, setSearchQueryLocal] = useState(searchQuery)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Sample data
  const formulationData = [
    {
      id: "form-001",
      productId: "prod-001",
      productName: "Cardiostat",
      name: "Cardiostat Tablets",
      type: "tablet",
      version: "3.2",
      status: "approved",
      activeIngredients: [
        {
          id: "ing-001",
          name: "Amlodipine Besylate",
          grade: "USP",
          function: "Active",
          concentration: "10",
          unit: "mg",
          standard: "USP",
        },
      ],
      excipients: [
        {
          id: "exc-001",
          name: "Microcrystalline Cellulose",
          grade: "PH102",
          function: "Diluent",
          concentration: "120",
          unit: "mg",
          standard: "USP",
        },
        {
          id: "exc-002",
          name: "Magnesium Stearate",
          grade: "Vegetable",
          function: "Lubricant",
          concentration: "2",
          unit: "mg",
          standard: "USP",
        },
        {
          id: "exc-003",
          name: "Croscarmellose Sodium",
          grade: "Type A",
          function: "Disintegrant",
          concentration: "8",
          unit: "mg",
          standard: "USP",
        },
      ],
      bioequivalenceData: {
        referenceProduct: "Norvasc 10mg Tablets",
        studyId: "BE-2019-045",
        studyDate: "2019-08-15",
        parameters: [
          {
            parameter: "Cmax",
            value: "95.2",
            unit: "%",
            acceptanceRange: "80-125%",
            status: "pass",
          },
          {
            parameter: "AUC0-t",
            value: "98.7",
            unit: "%",
            acceptanceRange: "80-125%",
            status: "pass",
          },
          {
            parameter: "AUC0-inf",
            value: "99.1",
            unit: "%",
            acceptanceRange: "80-125%",
            status: "pass",
          },
        ],
        conclusion: "Bioequivalent to reference product",
      },
      stabilityData: {
        batchNumber: "CT-2020-001",
        manufacturingDate: "2020-01-15",
        storageConditions: ["25°C/60% RH", "30°C/65% RH", "40°C/75% RH"],
        timePoints: [
          {
            timePoint: "Initial",
            results: [
              {
                parameter: "Assay",
                specification: "95.0-105.0%",
                result: "99.8%",
                status: "pass",
              },
              {
                parameter: "Dissolution",
                specification: "Q ≥ 80% in 30 min",
                result: "92%",
                status: "pass",
              },
              {
                parameter: "Related Substances",
                specification: "NMT 0.5%",
                result: "0.1%",
                status: "pass",
              },
            ],
          },
          {
            timePoint: "6 Months",
            results: [
              {
                parameter: "Assay",
                specification: "95.0-105.0%",
                result: "99.2%",
                status: "pass",
              },
              {
                parameter: "Dissolution",
                specification: "Q ≥ 80% in 30 min",
                result: "91%",
                status: "pass",
              },
              {
                parameter: "Related Substances",
                specification: "NMT 0.5%",
                result: "0.15%",
                status: "pass",
              },
            ],
          },
        ],
        shelfLife: "36 months",
        conclusion: "Stable under all tested conditions",
      },
      markets: ["us", "eu", "japan"],
      lastUpdated: "2022-05-10",
      createdDate: "2019-03-22",
      createdBy: "John Smith",
      approvalHistory: [
        {
          id: "app-001",
          version: "1.0",
          date: "2019-05-15",
          status: "approved",
          comments: "Initial formulation approval",
          approvedBy: "Jane Doe",
        },
        {
          id: "app-002",
          version: "2.0",
          date: "2020-08-22",
          status: "approved",
          comments: "Updated excipient composition",
          approvedBy: "Jane Doe",
        },
        {
          id: "app-003",
          version: "3.0",
          date: "2021-11-05",
          status: "approved",
          comments: "Manufacturing process optimization",
          approvedBy: "Michael Johnson",
        },
        {
          id: "app-004",
          version: "3.2",
          date: "2022-05-10",
          status: "approved",
          comments: "Minor update to disintegrant concentration",
          approvedBy: "Michael Johnson",
        },
      ],
    },
    {
      id: "form-002",
      productId: "prod-001",
      productName: "Cardiostat",
      name: "Cardiostat XR",
      type: "tablet",
      version: "2.1",
      status: "approved",
      activeIngredients: [
        {
          id: "ing-002",
          name: "Amlodipine Besylate",
          grade: "USP",
          function: "Active",
          concentration: "50",
          unit: "mg",
          standard: "USP",
        },
      ],
      excipients: [
        {
          id: "exc-004",
          name: "Hypromellose",
          grade: "K100M",
          function: "Matrix Former",
          concentration: "150",
          unit: "mg",
          standard: "USP",
        },
        {
          id: "exc-005",
          name: "Microcrystalline Cellulose",
          grade: "PH102",
          function: "Diluent",
          concentration: "100",
          unit: "mg",
          standard: "USP",
        },
        {
          id: "exc-006",
          name: "Magnesium Stearate",
          grade: "Vegetable",
          function: "Lubricant",
          concentration: "3",
          unit: "mg",
          standard: "USP",
        },
      ],
      bioequivalenceData: {
        referenceProduct: "Norvasc XR 50mg Tablets",
        studyId: "BE-2020-032",
        studyDate: "2020-09-10",
        parameters: [
          {
            parameter: "Cmax",
            value: "92.8",
            unit: "%",
            acceptanceRange: "80-125%",
            status: "pass",
          },
          {
            parameter: "AUC0-t",
            value: "97.5",
            unit: "%",
            acceptanceRange: "80-125%",
            status: "pass",
          },
          {
            parameter: "AUC0-inf",
            value: "98.2",
            unit: "%",
            acceptanceRange: "80-125%",
            status: "pass",
          },
        ],
        conclusion: "Bioequivalent to reference product",
      },
      stabilityData: {
        batchNumber: "CXR-2020-002",
        manufacturingDate: "2020-06-20",
        storageConditions: ["25°C/60% RH", "30°C/65% RH", "40°C/75% RH"],
        timePoints: [
          {
            timePoint: "Initial",
            results: [
              {
                parameter: "Assay",
                specification: "95.0-105.0%",
                result: "100.2%",
                status: "pass",
              },
              {
                parameter: "Dissolution",
                specification: "Q ≥ 80% in 12 hours",
                result: "85%",
                status: "pass",
              },
              {
                parameter: "Related Substances",
                specification: "NMT 0.5%",
                result: "0.08%",
                status: "pass",
              },
            ],
          },
        ],
        shelfLife: "36 months",
        conclusion: "Stable under all tested conditions",
      },
      markets: ["us", "eu"],
      lastUpdated: "2021-08-15",
      createdDate: "2020-02-10",
      createdBy: "Sarah Johnson",
      approvalHistory: [
        {
          id: "app-005",
          version: "1.0",
          date: "2020-04-18",
          status: "approved",
          comments: "Initial formulation approval",
          approvedBy: "Jane Doe",
        },
        {
          id: "app-006",
          version: "2.0",
          date: "2021-03-22",
          status: "approved",
          comments: "Updated matrix former composition",
          approvedBy: "Michael Johnson",
        },
        {
          id: "app-007",
          version: "2.1",
          date: "2021-08-15",
          status: "approved",
          comments: "Minor update to lubricant concentration",
          approvedBy: "Michael Johnson",
        },
      ],
    },
    {
      id: "form-003",
      productId: "prod-002",
      productName: "Neurobalance",
      name: "Neurobalance Capsules",
      type: "capsule",
      version: "1.5",
      status: "approved",
      activeIngredients: [
        {
          id: "ing-003",
          name: "Escitalopram Oxalate",
          grade: "USP",
          function: "Active",
          concentration: "25",
          unit: "mg",
          standard: "USP",
        },
      ],
      excipients: [
        {
          id: "exc-007",
          name: "Lactose Monohydrate",
          grade: "Pharma",
          function: "Diluent",
          concentration: "150",
          unit: "mg",
          standard: "USP",
        },
        {
          id: "exc-008",
          name: "Talc",
          grade: "Pharma",
          function: "Glidant",
          concentration: "5",
          unit: "mg",
          standard: "USP",
        },
        {
          id: "exc-009",
          name: "Magnesium Stearate",
          grade: "Vegetable",
          function: "Lubricant",
          concentration: "2",
          unit: "mg",
          standard: "USP",
        },
      ],
      markets: ["eu", "uk", "canada"],
      lastUpdated: "2022-01-20",
      createdDate: "2020-08-15",
      createdBy: "Emily Rodriguez",
      approvalHistory: [
        {
          id: "app-008",
          version: "1.0",
          date: "2020-11-10",
          status: "approved",
          comments: "Initial formulation approval",
          approvedBy: "Jane Doe",
        },
        {
          id: "app-009",
          version: "1.5",
          date: "2022-01-20",
          status: "approved",
          comments: "Updated excipient composition",
          approvedBy: "Michael Johnson",
        },
      ],
    },
    {
      id: "form-004",
      productId: "prod-003",
      productName: "Respiraclear",
      name: "Respiraclear Solution",
      type: "solution",
      version: "2.0",
      status: "approved",
      activeIngredients: [
        {
          id: "ing-004",
          name: "Salbutamol Sulfate",
          grade: "USP",
          function: "Active",
          concentration: "2",
          unit: "mg/ml",
          standard: "USP",
        },
      ],
      excipients: [
        {
          id: "exc-010",
          name: "Sodium Chloride",
          grade: "Pharma",
          function: "Tonicity Agent",
          concentration: "9",
          unit: "mg/ml",
          standard: "USP",
        },
        {
          id: "exc-011",
          name: "Benzalkonium Chloride",
          grade: "Pharma",
          function: "Preservative",
          concentration: "0.1",
          unit: "mg/ml",
          standard: "USP",
        },
        {
          id: "exc-012",
          name: "Water for Injection",
          function: "Vehicle",
          concentration: "q.s.",
          unit: "ml",
          standard: "USP",
        },
      ],
      markets: ["us", "eu", "japan", "china"],
      lastUpdated: "2021-10-05",
      createdDate: "2019-06-18",
      createdBy: "Robert Chen",
      approvalHistory: [
        {
          id: "app-010",
          version: "1.0",
          date: "2019-09-22",
          status: "approved",
          comments: "Initial formulation approval",
          approvedBy: "Jane Doe",
        },
        {
          id: "app-011",
          version: "2.0",
          date: "2021-10-05",
          status: "approved",
          comments: "Updated preservative system",
          approvedBy: "Michael Johnson",
        },
      ],
    },
  ]

  // Filter formulations based on search and filters
  const filteredFormulations = formulationData.filter((form) => {
    // Search query filter
    if (
      searchQueryLocal &&
      !form.name.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !form.productName.toLowerCase().includes(searchQueryLocal.toLowerCase())
    ) {
      return false
    }

    // Formulation type filter
    if (formulation !== "all" && form.type.toLowerCase() !== formulation.toLowerCase()) {
      return false
    }

    // Market filter
    if (market !== "all" && !form.markets.includes(market.toLowerCase())) {
      return false
    }

    return true
  })

  // Sort formulations
  const sortedFormulations = [...filteredFormulations].sort((a, b) => {
    if (!sortColumn) return 0

    switch (sortColumn) {
      case "name":
        return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      case "product":
        return sortDirection === "asc"
          ? a.productName.localeCompare(b.productName)
          : b.productName.localeCompare(a.productName)
      case "type":
        return sortDirection === "asc" ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type)
      case "version":
        return sortDirection === "asc" ? a.version.localeCompare(b.version) : b.version.localeCompare(a.version)
      case "updated":
        return sortDirection === "asc"
          ? new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
          : new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      default:
        return 0
    }
  })

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const handleViewFormulation = (formulationId: string) => {
    setSelectedFormulation(formulationId)
    setActiveTab("details")
  }

  const handleCompareToggle = (formulationId: string) => {
    setComparisonFormulations((prev) =>
      prev.includes(formulationId) ? prev.filter((id) => id !== formulationId) : [...prev, formulationId],
    )
  }

  const selectedFormulationData = selectedFormulation ? formulationData.find((f) => f.id === selectedFormulation) : null

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "draft":
        return <Badge className="bg-gray-500">Draft</Badge>
      case "pass":
        return <Badge className="bg-green-500">Pass</Badge>
      case "fail":
        return <Badge className="bg-red-500">Fail</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

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

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="formulations">Formulations</TabsTrigger>
          <TabsTrigger value="details">Formulation Details</TabsTrigger>
          <TabsTrigger value="compare">Compare Formulations</TabsTrigger>
          <TabsTrigger value="history">Version History</TabsTrigger>
        </TabsList>

        <TabsContent value="formulations" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Formulation Management</CardTitle>
                <CardDescription>Manage product formulations and compositions</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search formulations..."
                    className="w-[200px]"
                    value={searchQueryLocal}
                    onChange={(e) => setSearchQueryLocal(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Formulation
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30px]"></TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                      <div className="flex items-center">
                        Formulation
                        {sortColumn === "name" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("product")}>
                      <div className="flex items-center">
                        Product
                        {sortColumn === "product" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("type")}>
                      <div className="flex items-center">
                        Type
                        {sortColumn === "type" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("version")}>
                      <div className="flex items-center">
                        Version
                        {sortColumn === "version" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Markets</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("updated")}>
                      <div className="flex items-center">
                        Last Updated
                        {sortColumn === "updated" && (
                          <span className="ml-1">
                            {sortDirection === "asc" ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </span>
                        )}
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedFormulations.map((form) => (
                    <TableRow key={form.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={comparisonFormulations.includes(form.id)}
                          onChange={() => handleCompareToggle(form.id)}
                          className="rounded border-gray-300"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{form.name}</TableCell>
                      <TableCell>{form.productName}</TableCell>
                      <TableCell className="capitalize">{form.type}</TableCell>
                      <TableCell>{form.version}</TableCell>
                      <TableCell>{getStatusBadge(form.status)}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {form.markets.map((m) => (
                            <Badge key={m} variant="outline" className="text-xs">
                              {m.toUpperCase()}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{form.lastUpdated}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleViewFormulation(form.id)}>
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

        <TabsContent value="details" className="mt-4">
          {selectedFormulationData ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{selectedFormulationData.name}</h2>
                  <p className="text-muted-foreground">
                    {selectedFormulationData.productName} • Version {selectedFormulationData.version} •{" "}
                    {getStatusBadge(selectedFormulationData.status)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("formulations")}>
                    Back to List
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    Version History
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-1" />
                    New Version
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Ingredients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Grade</TableHead>
                          <TableHead>Concentration</TableHead>
                          <TableHead>Standard</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedFormulationData.activeIngredients.map((ingredient) => (
                          <TableRow key={ingredient.id}>
                            <TableCell className="font-medium">{ingredient.name}</TableCell>
                            <TableCell>{ingredient.grade || "-"}</TableCell>
                            <TableCell>
                              {ingredient.concentration} {ingredient.unit}
                            </TableCell>
                            <TableCell>{ingredient.standard}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Excipients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Function</TableHead>
                          <TableHead>Concentration</TableHead>
                          <TableHead>Standard</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedFormulationData.excipients.map((excipient) => (
                          <TableRow key={excipient.id}>
                            <TableCell className="font-medium">{excipient.name}</TableCell>
                            <TableCell>{excipient.function || "-"}</TableCell>
                            <TableCell>
                              {excipient.concentration} {excipient.unit}
                            </TableCell>
                            <TableCell>{excipient.standard}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {selectedFormulationData.bioequivalenceData && (
                <Card>
                  <CardHeader>
                    <CardTitle>Bioequivalence Data</CardTitle>
                    <CardDescription>
                      Reference Product: {selectedFormulationData.bioequivalenceData.referenceProduct}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Study ID: {selectedFormulationData.bioequivalenceData.studyId}</span>
                        <span>Study Date: {selectedFormulationData.bioequivalenceData.studyDate}</span>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Parameter</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Acceptance Range</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedFormulationData.bioequivalenceData.parameters.map((param, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{param.parameter}</TableCell>
                              <TableCell>
                                {param.value} {param.unit}
                              </TableCell>
                              <TableCell>{param.acceptanceRange}</TableCell>
                              <TableCell>{getStatusBadge(param.status)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <div className="p-3 bg-muted rounded-md">
                        <p className="font-medium">Conclusion:</p>
                        <p>{selectedFormulationData.bioequivalenceData.conclusion}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {selectedFormulationData.stabilityData && (
                <Card>
                  <CardHeader>
                    <CardTitle>Stability Data</CardTitle>
                    <CardDescription>
                      Batch: {selectedFormulationData.stabilityData.batchNumber} • Manufacturing Date:{" "}
                      {selectedFormulationData.stabilityData.manufacturingDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-2">Storage Conditions:</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedFormulationData.stabilityData.storageConditions.map((condition, index) => (
                            <Badge key={index} variant="outline">
                              {condition}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Tabs defaultValue={selectedFormulationData.stabilityData.timePoints[0].timePoint}>
                        <TabsList className="w-full">
                          {selectedFormulationData.stabilityData.timePoints.map((timePoint, index) => (
                            <TabsTrigger key={index} value={timePoint.timePoint}>
                              {timePoint.timePoint}
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        {selectedFormulationData.stabilityData.timePoints.map((timePoint, index) => (
                          <TabsContent key={index} value={timePoint.timePoint}>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Parameter</TableHead>
                                  <TableHead>Specification</TableHead>
                                  <TableHead>Result</TableHead>
                                  <TableHead>Status</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {timePoint.results.map((result, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell className="font-medium">{result.parameter}</TableCell>
                                    <TableCell>{result.specification}</TableCell>
                                    <TableCell>{result.result}</TableCell>
                                    <TableCell>{getStatusBadge(result.status)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TabsContent>
                        ))}
                      </Tabs>
                      <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                        <div>
                          <p className="font-medium">Conclusion:</p>
                          <p>{selectedFormulationData.stabilityData.conclusion}</p>
                        </div>
                        <div>
                          <p className="font-medium">Shelf Life:</p>
                          <p>{selectedFormulationData.stabilityData.shelfLife}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Approval History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-9 top-0 bottom-0 w-px bg-muted-foreground/20" />
                    <div className="space-y-6">
                      {selectedFormulationData.approvalHistory
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((approval, index) => (
                          <div key={approval.id} className="relative flex items-start">
                            <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                              {approval.status === "approved" ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : approval.status === "rejected" ? (
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                              ) : (
                                <Clock className="h-4 w-4 text-amber-500" />
                              )}
                            </div>
                            <div className="ml-10 flex-1">
                              <div className="rounded-md border p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <span className="font-medium">{approval.date}</span>
                                    <span className="mx-2">•</span>
                                    <span className="font-medium">Version {approval.version}</span>
                                  </div>
                                  <div>{getStatusBadge(approval.status)}</div>
                                </div>
                                <div className="mt-2">
                                  <p className="text-sm text-muted-foreground">{approval.comments}</p>
                                </div>
                                {approval.approvedBy && (
                                  <div className="mt-2 flex items-center text-xs text-muted-foreground">
                                    <span>Approved by: {approval.approvedBy}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center h-60">
                <Beaker className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Formulation Selected</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Select a formulation from the list to view its details
                </p>
                <Button onClick={() => setActiveTab("formulations")}>View Formulations</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="compare" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Compare Formulations</CardTitle>
              <CardDescription>Select formulations to compare their compositions and properties</CardDescription>
            </CardHeader>
            <CardContent>
              {comparisonFormulations.length < 2 ? (
                <div className="flex flex-col items-center justify-center h-60">
                  <Microscope className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Select Formulations to Compare</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Select at least two formulations from the list to compare them
                  </p>
                  <Button onClick={() => setActiveTab("formulations")}>Select Formulations</Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export Comparison
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Property</TableHead>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? (
                              <TableHead key={id}>
                                <div>
                                  <p className="font-medium">{form.name}</p>
                                  <p className="text-xs text-muted-foreground">Version {form.version}</p>
                                </div>
                              </TableHead>
                            ) : null
                          })}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Product</TableCell>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? <TableCell key={id}>{form.productName}</TableCell> : null
                          })}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Type</TableCell>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? (
                              <TableCell key={id} className="capitalize">
                                {form.type}
                              </TableCell>
                            ) : null
                          })}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Status</TableCell>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? <TableCell key={id}>{getStatusBadge(form.status)}</TableCell> : null
                          })}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Last Updated</TableCell>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? <TableCell key={id}>{form.lastUpdated}</TableCell> : null
                          })}
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Markets</TableCell>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? (
                              <TableCell key={id}>
                                <div className="flex flex-wrap gap-1">
                                  {form.markets.map((m) => (
                                    <Badge key={m} variant="outline" className="text-xs">
                                      {m.toUpperCase()}
                                    </Badge>
                                  ))}
                                </div>
                              </TableCell>
                            ) : null
                          })}
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <Separator />

                  <h3 className="text-lg font-medium">Active Ingredients</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Ingredient</TableHead>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? <TableHead key={id}>{form.name}</TableHead> : null
                          })}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* Get all unique active ingredients across selected formulations */}
                        {Array.from(
                          new Set(
                            comparisonFormulations.flatMap((id) => {
                              const form = formulationData.find((f) => f.id === id)
                              return form ? form.activeIngredients.map((ing) => ing.name) : []
                            }),
                          ),
                        ).map((ingredientName) => (
                          <TableRow key={ingredientName}>
                            <TableCell className="font-medium">{ingredientName}</TableCell>
                            {comparisonFormulations.map((id) => {
                              const form = formulationData.find((f) => f.id === id)
                              const ingredient = form?.activeIngredients.find((ing) => ing.name === ingredientName)
                              return (
                                <TableCell key={id}>
                                  {ingredient ? `${ingredient.concentration} ${ingredient.unit}` : "-"}
                                </TableCell>
                              )
                            })}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <Separator />

                  <h3 className="text-lg font-medium">Excipients</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px]">Excipient</TableHead>
                          {comparisonFormulations.map((id) => {
                            const form = formulationData.find((f) => f.id === id)
                            return form ? <TableHead key={id}>{form.name}</TableHead> : null
                          })}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* Get all unique excipients across selected formulations */}
                        {Array.from(
                          new Set(
                            comparisonFormulations.flatMap((id) => {
                              const form = formulationData.find((f) => f.id === id)
                              return form ? form.excipients.map((exc) => exc.name) : []
                            }),
                          ),
                        ).map((excipientName) => (
                          <TableRow key={excipientName}>
                            <TableCell className="font-medium">{excipientName}</TableCell>
                            {comparisonFormulations.map((id) => {
                              const form = formulationData.find((f) => f.id === id)
                              const excipient = form?.excipients.find((exc) => exc.name === excipientName)
                              return (
                                <TableCell key={id}>
                                  {excipient ? `${excipient.concentration} ${excipient.unit}` : "-"}
                                </TableCell>
                              )
                            })}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Formulation Version History</CardTitle>
              <CardDescription>Track changes across formulation versions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-6">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="prod-001">Cardiostat</SelectItem>
                    <SelectItem value="prod-002">Neurobalance</SelectItem>
                    <SelectItem value="prod-003">Respiraclear</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export History
                </Button>
              </div>

              <div className="space-y-6">
                {formulationData.map((form) => (
                  <Card key={form.id} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-base">{form.name}</CardTitle>
                          <CardDescription>
                            {form.productName} • Current Version: {form.version}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => handleViewFormulation(form.id)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View Current
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <div className="absolute left-9 top-0 bottom-0 w-px bg-muted-foreground/20" />
                        <div className="space-y-4">
                          {form.approvalHistory
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((approval, index) => (
                              <div key={approval.id} className="relative flex items-start">
                                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                                  {approval.status === "approved" ? (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  ) : approval.status === "rejected" ? (
                                    <AlertTriangle className="h-4 w-4 text-red-500" />
                                  ) : (
                                    <Clock className="h-4 w-4 text-amber-500" />
                                  )}
                                </div>
                                <div className="ml-10 flex-1">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <span className="font-medium">Version {approval.version}</span>
                                      <span className="mx-2">•</span>
                                      <span>{approval.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      {getStatusBadge(approval.status)}
                                      <Button variant="ghost" size="sm">
                                        <Eye className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">{approval.comments}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default FormulationManagement
