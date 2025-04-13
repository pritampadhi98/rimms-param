"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Eye,
  FileText,
  Edit,
  MoreHorizontal,
  Pill,
  FlaskRoundIcon as Flask,
  Beaker,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FormulationCard {
  id: string
  name: string
  type: string
  status: "active" | "development" | "discontinued" | "pending"
  strengths: number
  markets: number
  approvalRate: number
  therapeuticArea: string
  image: string
  description: string
  lastUpdated: string
}

const formulationData: FormulationCard[] = [
  {
    id: "form-001",
    name: "Cardiostat",
    type: "Tablet",
    status: "active",
    strengths: 4,
    markets: 28,
    approvalRate: 92,
    therapeuticArea: "cardiovascular",
    image: "/placeholder.svg?height=100&width=100",
    description: "Oral solid dosage form with extended release properties for once-daily administration",
    lastUpdated: "2 days ago",
  },
  {
    id: "form-002",
    name: "Neurobalance",
    type: "Capsule",
    status: "active",
    strengths: 3,
    markets: 22,
    approvalRate: 85,
    therapeuticArea: "cns",
    image: "/placeholder.svg?height=100&width=100",
    description: "Hard gelatin capsule containing powder blend with taste-masking coating",
    lastUpdated: "5 days ago",
  },
  {
    id: "form-003",
    name: "Respiraclear",
    type: "Inhalation Solution",
    status: "active",
    strengths: 2,
    markets: 18,
    approvalRate: 78,
    therapeuticArea: "respiratory",
    image: "/placeholder.svg?height=100&width=100",
    description: "Sterile aqueous solution for nebulization with preservative system",
    lastUpdated: "1 week ago",
  },
  {
    id: "form-004",
    name: "Dermashield",
    type: "Topical Cream",
    status: "active",
    strengths: 3,
    markets: 15,
    approvalRate: 72,
    therapeuticArea: "dermatology",
    image: "/placeholder.svg?height=100&width=100",
    description: "Oil-in-water emulsion with penetration enhancers for dermal delivery",
    lastUpdated: "2 weeks ago",
  },
  {
    id: "form-005",
    name: "Immunoboost",
    type: "Injectable",
    status: "development",
    strengths: 2,
    markets: 5,
    approvalRate: 25,
    therapeuticArea: "immunology",
    image: "/placeholder.svg?height=100&width=100",
    description: "Lyophilized powder for reconstitution in single-use vials",
    lastUpdated: "3 days ago",
  },
  {
    id: "form-006",
    name: "Gastroease",
    type: "Tablet",
    status: "active",
    strengths: 2,
    markets: 20,
    approvalRate: 82,
    therapeuticArea: "gastroenterology",
    image: "/placeholder.svg?height=100&width=100",
    description: "Enteric-coated tablet with acid-resistant properties",
    lastUpdated: "1 month ago",
  },
  {
    id: "form-007",
    name: "Oncoshield",
    type: "Injectable",
    status: "pending",
    strengths: 3,
    markets: 8,
    approvalRate: 45,
    therapeuticArea: "oncology",
    image: "/placeholder.svg?height=100&width=100",
    description: "Sterile solution in ready-to-use infusion bags",
    lastUpdated: "2 weeks ago",
  },
  {
    id: "form-008",
    name: "Antibioguard",
    type: "Oral Suspension",
    status: "active",
    strengths: 2,
    markets: 24,
    approvalRate: 88,
    therapeuticArea: "infectious",
    image: "/placeholder.svg?height=100&width=100",
    description: "Powder for oral suspension with taste-masking system",
    lastUpdated: "3 weeks ago",
  },
  {
    id: "form-009",
    name: "Painrelief",
    type: "Tablet",
    status: "discontinued",
    strengths: 3,
    markets: 12,
    approvalRate: 60,
    therapeuticArea: "analgesics",
    image: "/placeholder.svg?height=100&width=100",
    description: "Film-coated immediate release tablet with disintegration enhancers",
    lastUpdated: "2 months ago",
  },
]

export function FormulationCards({
  searchQuery,
  therapeuticArea,
  status,
  market,
}: {
  searchQuery: string
  therapeuticArea: string
  status: string
  market: string
}) {
  const [viewType, setViewType] = useState<"grid" | "list">("grid")

  // Filter formulations based on search and filters
  const filteredFormulations = formulationData.filter((formulation) => {
    // Search query filter
    if (
      searchQuery &&
      !formulation.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !formulation.type.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !formulation.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Therapeutic area filter
    if (therapeuticArea !== "all" && formulation.therapeuticArea !== therapeuticArea) {
      return false
    }

    // Status filter
    if (status !== "all" && formulation.status !== status) {
      return false
    }

    // Market filter (simplified for demo)
    if (market !== "all") {
      // This is a simplified check - in a real app, you'd check if the formulation
      // is approved in the specific market
      if (market === "us" && formulation.markets < 10) return false
      if (market === "eu" && formulation.markets < 15) return false
      if (market === "japan" && formulation.markets < 12) return false
    }

    return true
  })

  const getStatusBadge = (status: FormulationCard["status"]) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "development":
        return <Badge className="bg-blue-500">Development</Badge>
      case "discontinued":
        return <Badge className="bg-red-500">Discontinued</Badge>
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>
    }
  }

  const getFormulationIcon = (type: string) => {
    if (type.includes("Tablet")) return <Pill className="h-5 w-5" />
    if (type.includes("Capsule")) return <Pill className="h-5 w-5" />
    if (type.includes("Injectable")) return <Beaker className="h-5 w-5" />
    if (type.includes("Solution") || type.includes("Suspension")) return <Flask className="h-5 w-5" />
    return <Beaker className="h-5 w-5" />
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{filteredFormulations.length} Formulations</h3>
        <div className="flex items-center space-x-2">
          <Tabs value={viewType} onValueChange={(v) => setViewType(v as "grid" | "list")} className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {viewType === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFormulations.map((formulation) => (
            <Card
              key={formulation.id}
              className={`overflow-hidden border-l-4 ${
                formulation.status === "active"
                  ? "border-l-green-500"
                  : formulation.status === "development"
                    ? "border-l-blue-500"
                    : formulation.status === "pending"
                      ? "border-l-amber-500"
                      : "border-l-red-500"
              }`}
            >
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 bg-muted rounded-md">{getFormulationIcon(formulation.type)}</div>
                    <div>
                      <CardTitle className="text-base">{formulation.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{formulation.type}</p>
                    </div>
                  </div>
                  {getStatusBadge(formulation.status)}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4">{formulation.description}</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="font-medium">{formulation.strengths}</p>
                    <p className="text-xs text-muted-foreground">Strengths</p>
                  </div>
                  <div>
                    <p className="font-medium">{formulation.markets}</p>
                    <p className="text-xs text-muted-foreground">Markets</p>
                  </div>
                  <div>
                    <p className="font-medium">{formulation.approvalRate}%</p>
                    <p className="text-xs text-muted-foreground">Approval</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Market Coverage</span>
                    <span>{formulation.approvalRate}%</span>
                  </div>
                  <Progress value={formulation.approvalRate} className="h-1" />
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Formulation
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      View Approvals
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Report Issue
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredFormulations.map((formulation) => (
            <Card
              key={formulation.id}
              className={`border-l-4 ${
                formulation.status === "active"
                  ? "border-l-green-500"
                  : formulation.status === "development"
                    ? "border-l-blue-500"
                    : formulation.status === "pending"
                      ? "border-l-amber-500"
                      : "border-l-red-500"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-3 p-2 bg-muted rounded-md">{getFormulationIcon(formulation.type)}</div>
                    <div>
                      <h3 className="font-medium">{formulation.name}</h3>
                      <p className="text-sm text-muted-foreground">{formulation.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-right">
                      <div className="flex items-center">
                        <span className="mr-2">{formulation.strengths} Strengths</span>
                        <span className="mr-2">•</span>
                        <span>{formulation.markets} Markets</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Updated {formulation.lastUpdated}</p>
                    </div>
                    {getStatusBadge(formulation.status)}
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Formulation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Report
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          View Approvals
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <AlertCircle className="h-4 w-4 mr-2" />
                          Report Issue
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
