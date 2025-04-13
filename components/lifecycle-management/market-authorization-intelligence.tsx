"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Calendar, Download, Filter, Search, Plus, ArrowUpRight } from "lucide-react"
import { Input } from "@/components/ui/input"

interface MarketAuthorizationIntelligenceProps {
  searchQuery?: string
  regionFilter?: string
  countryFilter?: string
  productFilter?: string
  statusFilter?: string
}

function MarketAuthorizationIntelligence({
  searchQuery = "",
  regionFilter = "all",
  countryFilter = "all",
  productFilter = "all",
  statusFilter = "all",
}: MarketAuthorizationIntelligenceProps) {
  const [activeTab, setActiveTab] = useState("authorizations")
  const [isLoading, setIsLoading] = useState(true)
  const [searchQueryLocal, setSearchQueryLocal] = useState(searchQuery)
  const [selectedAuthorization, setSelectedAuthorization] = useState<string | null>(null)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Sample market authorization data
  const authorizationData = [
    {
      id: "auth-001",
      product: "Cardiostat",
      formulation: "Tablets",
      strengths: ["5mg", "10mg", "25mg"],
      country: "United States",
      region: "North America",
      authorizationNumber: "NDA-123456",
      authorizationType: "New Drug Application",
      approvalDate: "2020-05-15",
      expiryDate: "2025-05-14",
      status: "approved",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "N/A",
      renewalDeadline: "2024-11-15",
      variations: [
        {
          id: "var-001",
          type: "Type II",
          description: "Manufacturing site change",
          submissionDate: "2022-03-10",
          approvalDate: "2022-06-15",
          status: "approved",
        },
        {
          id: "var-002",
          type: "Type IB",
          description: "Minor change to manufacturing process",
          submissionDate: "2023-01-20",
          approvalDate: "2023-03-05",
          status: "approved",
        },
      ],
      commitments: [
        {
          id: "com-001",
          description: "Pediatric study completion",
          dueDate: "2023-12-31",
          status: "pending",
        },
      ],
      documents: [
        { id: "doc-001", name: "Approval Letter", date: "2020-05-15", type: "regulatory" },
        { id: "doc-002", name: "Product Labeling", date: "2020-05-15", type: "labeling" },
        { id: "doc-003", name: "Annual Report (2022)", date: "2022-05-10", type: "report" },
      ],
    },
    {
      id: "auth-002",
      product: "Cardiostat",
      formulation: "Tablets",
      strengths: ["5mg", "10mg", "25mg"],
      country: "European Union",
      region: "Europe",
      authorizationNumber: "EU/1/20/1456",
      authorizationType: "Centralized Procedure",
      approvalDate: "2020-07-22",
      expiryDate: "2025-07-21",
      status: "approved",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "Pharma EU Ltd.",
      renewalDeadline: "2024-01-22",
      variations: [
        {
          id: "var-003",
          type: "Type II",
          description: "Manufacturing site change",
          submissionDate: "2022-04-15",
          approvalDate: "2022-08-10",
          status: "approved",
        },
      ],
      commitments: [],
      documents: [
        { id: "doc-004", name: "CHMP Opinion", date: "2020-06-25", type: "regulatory" },
        { id: "doc-005", name: "Commission Decision", date: "2020-07-22", type: "regulatory" },
        { id: "doc-006", name: "SmPC", date: "2020-07-22", type: "labeling" },
        { id: "doc-007", name: "PSUR (2022)", date: "2022-07-15", type: "report" },
      ],
    },
    {
      id: "auth-003",
      product: "Cardiostat",
      formulation: "Tablets",
      strengths: ["5mg", "10mg", "25mg"],
      country: "Japan",
      region: "Asia Pacific",
      authorizationNumber: "JP-30200",
      authorizationType: "New Drug Application",
      approvalDate: "2020-09-10",
      expiryDate: "2025-09-09",
      status: "approved",
      marketingCompany: "Pharma Japan KK",
      localAgent: "Pharma Japan KK",
      renewalDeadline: "2025-03-10",
      variations: [],
      commitments: [
        {
          id: "com-002",
          description: "Post-approval safety study",
          dueDate: "2023-09-10",
          status: "pending",
        },
      ],
      documents: [
        { id: "doc-008", name: "Approval Certificate", date: "2020-09-10", type: "regulatory" },
        { id: "doc-009", name: "Package Insert", date: "2020-09-10", type: "labeling" },
      ],
    },
    {
      id: "auth-004",
      product: "Neurobalance",
      formulation: "Capsules",
      strengths: ["25mg", "50mg"],
      country: "European Union",
      region: "Europe",
      authorizationNumber: "EU/1/21/1234",
      authorizationType: "Centralized Procedure",
      approvalDate: "2021-03-15",
      expiryDate: "2026-03-14",
      status: "approved",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "Pharma EU Ltd.",
      renewalDeadline: "2025-09-15",
      variations: [],
      commitments: [],
      documents: [
        { id: "doc-010", name: "CHMP Opinion", date: "2021-02-18", type: "regulatory" },
        { id: "doc-011", name: "Commission Decision", date: "2021-03-15", type: "regulatory" },
        { id: "doc-012", name: "SmPC", date: "2021-03-15", type: "labeling" },
      ],
    },
    {
      id: "auth-005",
      product: "Neurobalance",
      formulation: "Capsules",
      strengths: ["25mg", "50mg"],
      country: "United Kingdom",
      region: "Europe",
      authorizationNumber: "PL 12345/0001",
      authorizationType: "National Procedure",
      approvalDate: "2021-04-10",
      expiryDate: "2026-04-09",
      status: "approved",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "Pharma UK Ltd.",
      renewalDeadline: "2025-10-10",
      variations: [],
      commitments: [],
      documents: [
        { id: "doc-013", name: "Approval Letter", date: "2021-04-10", type: "regulatory" },
        { id: "doc-014", name: "SmPC", date: "2021-04-10", type: "labeling" },
      ],
    },
    {
      id: "auth-006",
      product: "Neurobalance",
      formulation: "Capsules",
      strengths: ["25mg", "50mg"],
      country: "Canada",
      region: "North America",
      authorizationNumber: "DIN 12345678",
      authorizationType: "New Drug Submission",
      approvalDate: "2021-05-20",
      expiryDate: "2026-05-19",
      status: "approved",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "Pharma Canada Inc.",
      renewalDeadline: "2025-11-20",
      variations: [],
      commitments: [],
      documents: [
        { id: "doc-015", name: "Notice of Compliance", date: "2021-05-20", type: "regulatory" },
        { id: "doc-016", name: "Product Monograph", date: "2021-05-20", type: "labeling" },
      ],
    },
    {
      id: "auth-007",
      product: "Respiraclear",
      formulation: "Solution",
      strengths: ["2mg/ml"],
      country: "United States",
      region: "North America",
      authorizationNumber: "NDA-654321",
      authorizationType: "New Drug Application",
      approvalDate: "2019-12-05",
      expiryDate: "2024-12-04",
      status: "approved",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "N/A",
      renewalDeadline: "2024-06-05",
      variations: [
        {
          id: "var-004",
          type: "Prior Approval Supplement",
          description: "New indication",
          submissionDate: "2022-01-15",
          approvalDate: "2022-07-20",
          status: "approved",
        },
      ],
      commitments: [],
      documents: [
        { id: "doc-017", name: "Approval Letter", date: "2019-12-05", type: "regulatory" },
        { id: "doc-018", name: "Product Labeling", date: "2019-12-05", type: "labeling" },
        { id: "doc-019", name: "Annual Report (2022)", date: "2022-12-01", type: "report" },
      ],
    },
    {
      id: "auth-008",
      product: "Neurobalance",
      formulation: "Capsules",
      strengths: ["25mg", "50mg"],
      country: "United States",
      region: "North America",
      authorizationNumber: "N/A",
      authorizationType: "New Drug Application",
      approvalDate: "",
      expiryDate: "",
      status: "pending",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "N/A",
      renewalDeadline: "",
      variations: [],
      commitments: [],
      documents: [{ id: "doc-020", name: "NDA Submission", date: "2023-06-15", type: "submission" }],
    },
    {
      id: "auth-009",
      product: "Oncotarget",
      formulation: "Injection",
      strengths: ["50mg/ml"],
      country: "United States",
      region: "North America",
      authorizationNumber: "N/A",
      authorizationType: "New Drug Application",
      approvalDate: "",
      expiryDate: "",
      status: "in-review",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "N/A",
      renewalDeadline: "",
      variations: [],
      commitments: [],
      documents: [
        { id: "doc-021", name: "NDA Submission", date: "2023-02-10", type: "submission" },
        { id: "doc-022", name: "FDA Information Request", date: "2023-05-15", type: "correspondence" },
      ],
    },
    {
      id: "auth-010",
      product: "Oncotarget",
      formulation: "Injection",
      strengths: ["50mg/ml"],
      country: "European Union",
      region: "Europe",
      authorizationNumber: "N/A",
      authorizationType: "Centralized Procedure",
      approvalDate: "",
      expiryDate: "",
      status: "in-review",
      marketingCompany: "Pharma Global Inc.",
      localAgent: "Pharma EU Ltd.",
      renewalDeadline: "",
      variations: [],
      commitments: [],
      documents: [
        { id: "doc-023", name: "MAA Submission", date: "2023-03-20", type: "submission" },
        { id: "doc-024", name: "EMA List of Questions", date: "2023-06-25", type: "correspondence" },
      ],
    },
  ]

  // Sample regulatory intelligence data
  const regulatoryIntelligenceData = [
    {
      id: "reg-001",
      title: "FDA Draft Guidance on Quality Considerations for Continuous Manufacturing",
      region: "North America",
      country: "United States",
      authority: "FDA",
      publicationDate: "2023-02-15",
      effectiveDate: "TBD",
      category: "guidance",
      impactLevel: "medium",
      summary:
        "Draft guidance outlining FDA's current thinking on quality considerations for continuous manufacturing of small molecule solid oral drug products.",
      products: ["All"],
      status: "draft",
      documents: [{ id: "doc-025", name: "Draft Guidance Document", date: "2023-02-15", type: "guidance" }],
    },
    {
      id: "reg-002",
      title: "EMA Revision of Annex 1 - Manufacture of Sterile Medicinal Products",
      region: "Europe",
      country: "European Union",
      authority: "EMA",
      publicationDate: "2022-08-25",
      effectiveDate: "2023-08-25",
      category: "regulation",
      impactLevel: "high",
      summary:
        "Major revision to Annex 1 of the EU GMP Guide concerning the manufacture of sterile medicinal products.",
      products: ["All sterile products"],
      status: "final",
      documents: [
        { id: "doc-026", name: "Revised Annex 1", date: "2022-08-25", type: "regulation" },
        { id: "doc-027", name: "Implementation Plan", date: "2022-09-10", type: "guidance" },
      ],
    },
    {
      id: "reg-003",
      title: "PMDA Guidance on Electronic Submissions",
      region: "Asia Pacific",
      country: "Japan",
      authority: "PMDA",
      publicationDate: "2023-01-10",
      effectiveDate: "2023-07-01",
      category: "guidance",
      impactLevel: "medium",
      summary: "Updated requirements for electronic submissions of regulatory documents in Japan.",
      products: ["All"],
      status: "final",
      documents: [{ id: "doc-028", name: "Guidance Document", date: "2023-01-10", type: "guidance" }],
    },
    {
      id: "reg-004",
      title: "Health Canada Notice: Implementation of ICH Q12",
      region: "North America",
      country: "Canada",
      authority: "Health Canada",
      publicationDate: "2023-03-05",
      effectiveDate: "2023-09-01",
      category: "guidance",
      impactLevel: "medium",
      summary:
        "Notice regarding the implementation of ICH Q12 (Technical and Regulatory Considerations for Pharmaceutical Product Lifecycle Management) in Canada.",
      products: ["All"],
      status: "final",
      documents: [{ id: "doc-029", name: "Implementation Notice", date: "2023-03-05", type: "guidance" }],
    },
    {
      id: "reg-005",
      title: "FDA Guidance on Real-World Evidence",
      region: "North America",
      country: "United States",
      authority: "FDA",
      publicationDate: "2023-04-20",
      effectiveDate: "2023-04-20",
      category: "guidance",
      impactLevel: "medium",
      summary:
        "Final guidance on the use of real-world evidence to support regulatory decision-making for medical devices.",
      products: ["All"],
      status: "final",
      documents: [{ id: "doc-030", name: "Guidance Document", date: "2023-04-20", type: "guidance" }],
    },
    {
      id: "reg-006",
      title: "EMA Guideline on the Quality Requirements for Drug-Device Combinations",
      region: "Europe",
      country: "European Union",
      authority: "EMA",
      publicationDate: "2023-05-15",
      effectiveDate: "2023-11-15",
      category: "guidance",
      impactLevel: "high",
      summary: "New guideline specifying quality requirements for drug-device combination products.",
      products: ["Drug-device combinations"],
      status: "final",
      documents: [{ id: "doc-031", name: "Guideline Document", date: "2023-05-15", type: "guidance" }],
    },
    {
      id: "reg-007",
      title: "NMPA Regulation on Drug Registration",
      region: "Asia Pacific",
      country: "China",
      authority: "NMPA",
      publicationDate: "2023-01-30",
      effectiveDate: "2023-07-01",
      category: "regulation",
      impactLevel: "high",
      summary: "Revised regulation on drug registration procedures in China.",
      products: ["All"],
      status: "final",
      documents: [
        { id: "doc-032", name: "Regulation Document", date: "2023-01-30", type: "regulation" },
        { id: "doc-033", name: "English Translation", date: "2023-02-15", type: "translation" },
      ],
    },
  ]

  // Filter authorizations based on search and filters
  const filteredAuthorizations = authorizationData.filter((auth) => {
    // Search query filter
    if (
      searchQueryLocal &&
      !auth.product.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !auth.country.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !auth.authorizationNumber.toLowerCase().includes(searchQueryLocal.toLowerCase())
    ) {
      return false
    }

    // Region filter
    if (regionFilter !== "all" && auth.region !== regionFilter) {
      return false
    }

    // Country filter
    if (countryFilter !== "all" && auth.country !== countryFilter) {
      return false
    }

    // Product filter
    if (productFilter !== "all" && auth.product !== productFilter) {
      return false
    }

    // Status filter
    if (statusFilter !== "all" && auth.status !== statusFilter) {
      return false
    }

    return true
  })

  // Filter regulatory intelligence based on search and filters
  const filteredIntelligence = regulatoryIntelligenceData.filter((intel) => {
    // Search query filter
    if (
      searchQueryLocal &&
      !intel.title.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !intel.country.toLowerCase().includes(searchQueryLocal.toLowerCase()) &&
      !intel.authority.toLowerCase().includes(searchQueryLocal.toLowerCase())
    ) {
      return false
    }

    // Region filter
    if (regionFilter !== "all" && intel.region !== regionFilter) {
      return false
    }

    // Country filter
    if (countryFilter !== "all" && intel.country !== countryFilter) {
      return false
    }

    return true
  })

  // Sort authorizations by approval date (most recent first)
  const sortedAuthorizations = [...filteredAuthorizations].sort((a, b) => {
    if (a.approvalDate && b.approvalDate) {
      return new Date(b.approvalDate).getTime() - new Date(a.approvalDate).getTime()
    }
    if (a.approvalDate) return -1
    if (b.approvalDate) return 1
    return 0
  })

  // Sort intelligence by publication date (most recent first)
  const sortedIntelligence = [...filteredIntelligence].sort(
    (a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime(),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "pending":
        return <Badge className="bg-blue-500">Pending</Badge>
      case "in-review":
        return <Badge className="bg-amber-500">In Review</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "withdrawn":
        return <Badge className="bg-gray-500">Withdrawn</Badge>
      case "draft":
        return <Badge className="bg-blue-500">Draft</Badge>
      case "final":
        return <Badge className="bg-green-500">Final</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "high":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            High Impact
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Medium Impact
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Low Impact
          </Badge>
        )
      default:
        return <Badge variant="outline">{impact}</Badge>
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "guidance":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Guidance
          </Badge>
        )
      case "regulation":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Regulation
          </Badge>
        )
      default:
        return <Badge variant="outline">{category}</Badge>
    }
  }

  const getDocumentTypeBadge = (type: string) => {
    switch (type) {
      case "regulatory":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Regulatory
          </Badge>
        )
      case "labeling":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Labeling
          </Badge>
        )
      case "report":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Report
          </Badge>
        )
      case "submission":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Submission
          </Badge>
        )
      case "correspondence":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            Correspondence
          </Badge>
        )
      case "guidance":
        return (
          <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">
            Guidance
          </Badge>
        )
      case "regulation":
        return (
          <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
            Regulation
          </Badge>
        )
      case "translation":
        return (
          <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
            Translation
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  const handleViewAuthorization = (authId: string) => {
    setSelectedAuthorization(authId)
    setActiveTab("details")
  }

  const selectedAuthorizationData = selectedAuthorization
    ? authorizationData.find((a) => a.id === selectedAuthorization)
    : null

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
          <TabsTrigger value="authorizations">Market Authorizations</TabsTrigger>
          <TabsTrigger value="intelligence">Regulatory Intelligence</TabsTrigger>
          <TabsTrigger value="details">Authorization Details</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="authorizations" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Market Authorizations</CardTitle>
                <CardDescription>Product marketing authorizations across global markets</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search authorizations..."
                    className="w-[200px]"
                    value={searchQueryLocal}
                    onChange={(e) => setSearchQueryLocal(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Authorization
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Product</TableHead>
                    <TableHead>Formulation</TableHead>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>Authorization Number</TableHead>
                    <TableHead>Approval Date</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedAuthorizations.map((auth) => (
                    <TableRow key={auth.id}>
                      <TableCell className="font-medium">{auth.product}</TableCell>
                      <TableCell>
                        <div>
                          <span>{auth.formulation}</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {auth.strengths.map((strength, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{auth.country}</TableCell>
                      <TableCell>{auth.authorizationNumber !== "N/A" ? auth.authorizationNumber : "-"}</TableCell>
                      <TableCell>
                        {auth.approvalDate ? (
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{auth.approvalDate}</span>
                          </div>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                      <TableCell>{auth.expiryDate || "-"}</TableCell>
                      <TableCell>{getStatusBadge(auth.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => handleViewAuthorization(auth.id)}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Renewals</CardTitle>
                <CardDescription>Marketing authorizations requiring renewal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedAuthorizations
                    .filter((auth) => auth.renewalDeadline)
                    .sort((a, b) => new Date(a.renewalDeadline).getTime() - new Date(b.renewalDeadline).getTime())
                    .slice(0, 5)
                    .map((auth) => (
                      <div key={auth.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{auth.product}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{auth.formulation}</span>
                            <span className="mx-1">•</span>
                            <span>{auth.country}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{auth.renewalDeadline}</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-1"
                            onClick={() => handleViewAuthorization(auth.id)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pending Submissions</CardTitle>
                <CardDescription>Authorizations under review or pending submission</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sortedAuthorizations
                    .filter((auth) => auth.status === "in-review" || auth.status === "pending")
                    .map((auth) => (
                      <div key={auth.id} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <p className="font-medium">{auth.product}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{auth.formulation}</span>
                            <span className="mx-1">•</span>
                            <span>{auth.country}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div>{getStatusBadge(auth.status)}</div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-1"
                            onClick={() => handleViewAuthorization(auth.id)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="intelligence" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Regulatory Intelligence</CardTitle>
                <CardDescription>Latest regulatory updates and guidance</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search intelligence..."
                    className="w-[200px]"
                    value={searchQueryLocal}
                    onChange={(e) => setSearchQueryLocal(e.target.value)}
                  />
                </div>
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Title</TableHead>
                    <TableHead>Authority</TableHead>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Publication Date</TableHead>
                    <TableHead>Effective Date</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedIntelligence.map((intel) => (
                    <TableRow key={intel.id}>
                      <TableCell className="font-medium">{intel.title}</TableCell>
                      <TableCell>{intel.authority}</TableCell>
                      <TableCell>{intel.country}</TableCell>
                      <TableCell>{getCategoryBadge(intel.category)}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{intel.publicationDate}</span>
                        </div>
                      </TableCell>
                      <TableCell>{intel.effectiveDate}</TableCell>
                      <TableCell>{getImpactBadge(intel.impactLevel)}</TableCell>
                      <TableCell>{getStatusBadge(intel.status)}</TableCell>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {sortedIntelligence.slice(0, 3).map((intel) => (
              <Card key={intel.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{intel.title}</CardTitle>
                    {getStatusBadge(intel.status)}
                  </div>
                  <CardDescription>
                    {intel.authority} • {intel.country}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">Published: {intel.publicationDate}</span>
                      </div>
                      {getCategoryBadge(intel.category)}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{intel.summary}</p>
                    <div className="flex items-center justify-between">
                      {getImpactBadge(intel.impactLevel)}
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details" className="mt-4">
          {selectedAuthorizationData ? (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{selectedAuthorizationData.product} Details</CardTitle>
                  <CardDescription>
                    {selectedAuthorizationData.country} • {selectedAuthorizationData.authorizationNumber}
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={() => setActiveTab("authorizations")}>
                  Back to List
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Authorization Information</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-medium">Product:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.product}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Formulation:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.formulation}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Strengths:</span>
                        <div className="flex flex-wrap gap-1">
                          {selectedAuthorizationData.strengths.map((strength, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {strength}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Country:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.country}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Region:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.region}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Authorization Number:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.authorizationNumber}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Authorization Type:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.authorizationType}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Approval Date:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.approvalDate}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Expiry Date:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.expiryDate}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Status:</span>
                        <p className="text-sm text-muted-foreground">
                          {getStatusBadge(selectedAuthorizationData.status)}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Marketing Company:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.marketingCompany}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Local Agent:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.localAgent}</p>
                      </div>
                      <div>
                        <span className="text-xs font-medium">Renewal Deadline:</span>
                        <p className="text-sm text-muted-foreground">{selectedAuthorizationData.renewalDeadline}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Variations</h4>
                    {selectedAuthorizationData.variations.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Submission Date</TableHead>
                            <TableHead>Approval Date</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedAuthorizationData.variations.map((variation) => (
                            <TableRow key={variation.id}>
                              <TableCell>{variation.type}</TableCell>
                              <TableCell>{variation.description}</TableCell>
                              <TableCell>{variation.submissionDate}</TableCell>
                              <TableCell>{variation.approvalDate}</TableCell>
                              <TableCell>{getStatusBadge(variation.status)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-sm text-muted-foreground">No variations recorded</p>
                    )}

                    <h4 className="text-sm font-medium mt-4 mb-2">Commitments</h4>
                    {selectedAuthorizationData.commitments.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Description</TableHead>
                            <TableHead>Due Date</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedAuthorizationData.commitments.map((commitment) => (
                            <TableRow key={commitment.id}>
                              <TableCell>{commitment.description}</TableCell>
                              <TableCell>{commitment.dueDate}</TableCell>
                              <TableCell>{getStatusBadge(commitment.status)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-sm text-muted-foreground">No commitments recorded</p>
                    )}

                    <h4 className="text-sm font-medium mt-4 mb-2">Documents</h4>
                    {selectedAuthorizationData.documents.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Type</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedAuthorizationData.documents.map((document) => (
                            <TableRow key={document.id}>
                              <TableCell>{document.name}</TableCell>
                              <TableCell>{document.date}</TableCell>
                              <TableCell>{getDocumentTypeBadge(document.type)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-sm text-muted-foreground">No documents recorded</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-40">
                  <p className="text-sm text-muted-foreground">Select an authorization to view details</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Market authorization intelligence analytics and reporting</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics content here...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default MarketAuthorizationIntelligence
