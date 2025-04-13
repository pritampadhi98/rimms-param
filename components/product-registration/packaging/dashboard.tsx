"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PackagingStats } from "./stats"
import { ProductHierarchy } from "./product-hierarchy"
import { PackagingSpecifications } from "./packaging-specifications"
import { RegulatoryCompliance } from "./regulatory-compliance"
import { ArtworkLabeling } from "./artwork-labeling"
import { SupplyChainIntelligence } from "./supply-chain"
import { ChangeManagement } from "./change-management"
import { PackagingAnalytics } from "./packaging-analytics"
import { Search, Filter, Download, Plus, RefreshCw, Settings, Save, Star, Calendar, Bell } from "lucide-react"

export function PackagingDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTherapeuticArea, setSelectedTherapeuticArea] = useState("all")
  const [selectedFormulation, setSelectedFormulation] = useState("all")
  const [selectedMarket, setSelectedMarket] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedSupplier, setSelectedSupplier] = useState("all")
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [savedSearches, setSavedSearches] = useState([
    { id: 1, name: "US Blister Packs", isStarred: true },
    { id: 2, name: "EU Compliance Issues", isStarred: false },
    { id: 3, name: "Japan Artwork Updates", isStarred: true },
  ])
  const [dashboardView, setDashboardView] = useState("standard")
  const [isLoading, setIsLoading] = useState(true)
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Compliance Alert", message: "3 packaging components need regulatory updates", type: "warning" },
    { id: 2, title: "Supply Chain", message: "Low inventory for PVC/Aluminum blister components", type: "alert" },
    { id: 3, title: "Approval", message: "Cardiostat carton artwork approved for EU market", type: "success" },
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
    if (selectedMarket !== "all") count++
    if (selectedStatus !== "all") count++
    if (selectedSupplier !== "all") count++
    return count
  }

  const clearAllFilters = () => {
    setSelectedTherapeuticArea("all")
    setSelectedFormulation("all")
    setSelectedMarket("all")
    setSelectedStatus("all")
    setSelectedSupplier("all")
    setSearchQuery("")
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Packaging Module</h2>
          <p className="text-muted-foreground">
            Manage and monitor packaging specifications across your product portfolio
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={dashboardView} onValueChange={setDashboardView}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Dashboard View" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard View</SelectItem>
              <SelectItem value="regulatory">Regulatory Focus</SelectItem>
              <SelectItem value="supply">Supply Chain Focus</SelectItem>
              <SelectItem value="compact">Compact View</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Packaging
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
                      : "bg-green-50 border-green-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{notification.title}</div>
                  <Badge
                    variant={
                      notification.type === "warning"
                        ? "outline"
                        : notification.type === "alert"
                          ? "destructive"
                          : "default"
                    }
                  >
                    {notification.type}
                  </Badge>
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
                placeholder="Search packaging..."
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
          </div>

          {showAdvancedFilters && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4 pt-4 border-t">
              <div>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Approval Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={selectedSupplier} onValueChange={setSelectedSupplier}>
                  <SelectTrigger>
                    <SelectValue placeholder="Supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Suppliers</SelectItem>
                    <SelectItem value="packagecorp">PackageCorp Inc.</SelectItem>
                    <SelectItem value="containertech">ContainerTech Inc.</SelectItem>
                    <SelectItem value="boxmakers">BoxMakers Ltd.</SelectItem>
                    <SelectItem value="glassmed">GlassMed Inc.</SelectItem>
                    <SelectItem value="inhaletech">InhaleTech Corp.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="lifecycle" />
                  <Label htmlFor="lifecycle">Active Products Only</Label>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="compliance" />
                  <Label htmlFor="compliance">Show Compliance Issues</Label>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="inventory" />
                <Label htmlFor="inventory">Low Inventory Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="changes" />
                <Label htmlFor="changes">Pending Changes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="date-range">Date Range:</Label>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last 30 days</span>
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
              <div className="relative">
                <Button variant="ghost" size="sm">
                  <Star className="mr-2 h-3 w-3 text-amber-500" />
                  Saved Searches
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

      {/* Dashboard Stats */}
      <PackagingStats />

      <Tabs defaultValue="hierarchy" className="mt-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="hierarchy">Product Hierarchy</TabsTrigger>
          <TabsTrigger value="specifications">Packaging Specifications</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory Compliance</TabsTrigger>
          <TabsTrigger value="artwork">Artwork & Labeling</TabsTrigger>
          <TabsTrigger value="supply">Supply Chain</TabsTrigger>
          <TabsTrigger value="changes">Change Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Product Hierarchy Tab */}
        <TabsContent value="hierarchy" className="mt-6">
          <ProductHierarchy
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            market={selectedMarket}
          />
        </TabsContent>

        {/* Packaging Specifications Tab */}
        <TabsContent value="specifications" className="mt-6">
          <PackagingSpecifications
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            market={selectedMarket}
          />
        </TabsContent>

        {/* Regulatory Compliance Tab */}
        <TabsContent value="regulatory" className="mt-6">
          <RegulatoryCompliance
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            market={selectedMarket}
          />
        </TabsContent>

        {/* Artwork & Labeling Tab */}
        <TabsContent value="artwork" className="mt-6">
          <ArtworkLabeling
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            market={selectedMarket}
          />
        </TabsContent>

        {/* Supply Chain Tab */}
        <TabsContent value="supply" className="mt-6">
          <SupplyChainIntelligence
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            market={selectedMarket}
          />
        </TabsContent>

        {/* Change Management Tab */}
        <TabsContent value="changes" className="mt-6">
          <ChangeManagement
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            market={selectedMarket}
          />
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="mt-6">
          <PackagingAnalytics
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            formulation={selectedFormulation}
            market={selectedMarket}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
