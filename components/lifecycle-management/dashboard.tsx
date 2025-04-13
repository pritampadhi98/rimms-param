"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PortfolioOverview } from "./portfolio-overview"
import { FormulationManagement } from "./formulation-management"
import { StrengthDosageTracking } from "./strength-dosage-tracking"
import { PresentationManagement } from "./presentation-management"
import { RegulatoryMilestones } from "./regulatory-milestones"
import { ChangeControlManagement } from "./change-control"
import { MarketAuthorization } from "./market-authorization"
import { DiscontinuationPlanning } from "./discontinuation-planning"
import { LifecycleAnalytics } from "./lifecycle-analytics"
import {
  Search,
  Filter,
  Download,
  Plus,
  RefreshCw,
  Settings,
  Bell,
  Calendar,
  CheckCircle,
  Pill,
  FlaskRoundIcon as Flask,
  FileText,
  Globe,
  Archive,
  ChevronDown,
  Save,
  Star,
} from "lucide-react"

export function LifecycleDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTherapeuticArea, setSelectedTherapeuticArea] = useState("all")
  const [selectedFormulation, setSelectedFormulation] = useState("all")
  const [selectedLifecycleStage, setSelectedLifecycleStage] = useState("all")
  const [selectedMarket, setSelectedMarket] = useState("all")
  const [selectedView, setSelectedView] = useState("regulatory")
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [savedSearches, setSavedSearches] = useState([
    { id: 1, name: "Development Products", isStarred: true },
    { id: 2, name: "EU Submissions", isStarred: false },
    { id: 3, name: "Upcoming Renewals", isStarred: true },
  ])
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Renewal Alert",
      message: "Cardiostat EU renewal due in 45 days",
      type: "warning",
      date: "2023-07-15",
    },
    {
      id: 2,
      title: "Approval Received",
      message: "Neurobalance 50mg approved in Japan",
      type: "success",
      date: "2023-07-10",
    },
    {
      id: 3,
      title: "Formulation Change",
      message: "Respiraclear formulation change approved",
      type: "info",
      date: "2023-07-08",
    },
    {
      id: 4,
      title: "Critical Deadline",
      message: "Oncotarget Phase III data submission due in 7 days",
      type: "alert",
      date: "2023-07-05",
    },
  ])

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters)
  }

  const saveCurrentSearch = () => {
    const newSearch = {
      id: savedSearches.length + 1,
      name: `Search ${savedSearches.length + 1}`,
      isStarred: false,
    }
    setSavedSearches([...savedSearches, newSearch])
  }

  const toggleStarredSearch = (id: number) => {
    setSavedSearches(
      savedSearches.map((search) => (search.id === id ? { ...search, isStarred: !search.isStarred } : search)),
    )
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (selectedTherapeuticArea !== "all") count++
    if (selectedFormulation !== "all") count++
    if (selectedLifecycleStage !== "all") count++
    if (selectedMarket !== "all") count++
    return count
  }

  const clearAllFilters = () => {
    setSelectedTherapeuticArea("all")
    setSelectedFormulation("all")
    setSelectedLifecycleStage("all")
    setSelectedMarket("all")
    setSearchQuery("")
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Lifecycle Management</h2>
          <p className="text-muted-foreground">
            Track and manage products from development through post-market activities
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedView} onValueChange={setSelectedView}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="regulatory">Regulatory View</SelectItem>
              <SelectItem value="rd">R&D View</SelectItem>
              <SelectItem value="quality">Quality View</SelectItem>
              <SelectItem value="commercial">Commercial View</SelectItem>
              <SelectItem value="executive">Executive View</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Product
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Across all lifecycle stages</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Active: 36</div>
              <div>Discontinued: 6</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Development Pipeline</CardTitle>
            <Flask className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">Products in development</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Early Phase: 8</div>
              <div>Late Phase: 6</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marketed Products</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22</div>
            <p className="text-xs text-muted-foreground">Commercially available</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Global: 8</div>
              <div>Regional: 14</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Regulatory Activity</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">Active submissions</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Initial: 5</div>
              <div>Variations: 13</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Deadlines</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Next 90 days</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Renewals: 9</div>
              <div>Submissions: 15</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications Panel */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium flex items-center">
              <Bell className="h-5 w-5 mr-2 text-amber-500" />
              Notifications & Alerts
            </h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-md border ${
                  notification.type === "warning"
                    ? "bg-amber-50 border-amber-200"
                    : notification.type === "alert"
                      ? "bg-red-50 border-red-200"
                      : notification.type === "success"
                        ? "bg-green-50 border-green-200"
                        : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{notification.title}</div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        notification.type === "warning"
                          ? "outline"
                          : notification.type === "alert"
                            ? "destructive"
                            : notification.type === "success"
                              ? "default"
                              : "secondary"
                      }
                    >
                      {notification.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{notification.date}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter Panel */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
            </div>
            <div>
              <Select value={selectedTherapeuticArea} onValueChange={setSelectedTherapeuticArea}>
                <SelectTrigger>
                  <SelectValue placeholder="Therapeutic Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Therapeutic Areas</SelectItem>
                  <SelectItem value="cardiovascular">Cardiovascular</SelectItem>
                  <SelectItem value="cns">Central Nervous System</SelectItem>
                  <SelectItem value="respiratory">Respiratory</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="infectious">Infectious Diseases</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedFormulation} onValueChange={setSelectedFormulation}>
                <SelectTrigger>
                  <SelectValue placeholder="Formulation Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formulations</SelectItem>
                  <SelectItem value="tablet">Tablets</SelectItem>
                  <SelectItem value="capsule">Capsules</SelectItem>
                  <SelectItem value="injectable">Injectables</SelectItem>
                  <SelectItem value="solution">Solutions</SelectItem>
                  <SelectItem value="topical">Topical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedLifecycleStage} onValueChange={setSelectedLifecycleStage}>
                <SelectTrigger>
                  <SelectValue placeholder="Lifecycle Stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="submission">Submission</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="marketed">Marketed</SelectItem>
                  <SelectItem value="discontinued">Discontinued</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {showAdvancedFilters && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4 pt-4 border-t">
              <div>
                <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                  <SelectTrigger>
                    <SelectValue placeholder="Market" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Markets</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="row">Rest of World</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Approval Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="critical" />
                <Label htmlFor="critical">Critical Milestones Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="changes" />
                <Label htmlFor="changes">Active Changes Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="renewals" />
                <Label htmlFor="renewals">Upcoming Renewals</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="variations" />
                <Label htmlFor="variations">Pending Variations</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="date-range">Date Range:</Label>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Next 90 days</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={toggleAdvancedFilters}>
                <Filter className="mr-2 h-3 w-3" />
                {showAdvancedFilters ? "Hide Advanced Filters" : "Advanced Filters"}
              </Button>
              <Button variant="ghost" size="sm" onClick={saveCurrentSearch}>
                <Save className="mr-2 h-3 w-3" />
                Save Search
              </Button>
              <div className="relative group">
                <Button variant="ghost" size="sm">
                  <Star className="mr-2 h-3 w-3 text-amber-500" />
                  Saved Searches
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                  <div className="py-1">
                    {savedSearches
                      .filter((s) => s.isStarred)
                      .map((search) => (
                        <div
                          key={search.id}
                          className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <span>{search.name}</span>
                          <Button variant="ghost" size="sm" onClick={() => toggleStarredSearch(search.id)}>
                            <Star className="h-3 w-3 text-amber-500" />
                          </Button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                Active Filters: {getActiveFilterCount()}
              </Badge>
              {getActiveFilterCount() > 0 && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lifecycle Stage Distribution */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Portfolio Distribution by Lifecycle Stage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <Flask className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="text-sm font-medium">Development</span>
                </div>
                <span className="text-sm font-medium">33% (14)</span>
              </div>
              <Progress value={33} className="h-2 bg-muted" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-amber-500" />
                  <span className="text-sm font-medium">Submission</span>
                </div>
                <span className="text-sm font-medium">12% (5)</span>
              </div>
              <Progress value={12} className="h-2 bg-muted" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm font-medium">Approved</span>
                </div>
                <span className="text-sm font-medium">7% (3)</span>
              </div>
              <Progress value={7} className="h-2 bg-muted" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-purple-500" />
                  <span className="text-sm font-medium">Marketed</span>
                </div>
                <span className="text-sm font-medium">36% (15)</span>
              </div>
              <Progress value={36} className="h-2 bg-muted" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <Archive className="h-4 w-4 mr-2 text-red-500" />
                  <span className="text-sm font-medium">Discontinued</span>
                </div>
                <span className="text-sm font-medium">12% (5)</span>
              </div>
              <Progress value={12} className="h-2 bg-muted" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="portfolio" className="mt-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="portfolio">Portfolio Overview</TabsTrigger>
          <TabsTrigger value="formulation">Formulation Management</TabsTrigger>
          <TabsTrigger value="strength">Strength & Dosage</TabsTrigger>
          <TabsTrigger value="presentation">Presentation Management</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory Milestones</TabsTrigger>
          <TabsTrigger value="change">Change Control</TabsTrigger>
          <TabsTrigger value="market">Market Authorization</TabsTrigger>
          <TabsTrigger value="discontinuation">Discontinuation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="mt-6">
          <PortfolioOverview
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="formulation" className="mt-6">
          <FormulationManagement
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="strength" className="mt-6">
          <StrengthDosageTracking
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="presentation" className="mt-6">
          <PresentationManagement
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="regulatory" className="mt-6">
          <RegulatoryMilestones
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="change" className="mt-6">
          <ChangeControlManagement
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="market" className="mt-6">
          <MarketAuthorization
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="discontinuation" className="mt-6">
          <DiscontinuationPlanning
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <LifecycleAnalytics
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            lifecycleStage={selectedLifecycleStage}
            market={selectedMarket}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
