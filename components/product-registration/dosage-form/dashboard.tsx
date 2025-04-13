"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { DosageFormStats } from "./stats"
import { DosageFormDistribution } from "./distribution-chart"
import { GlobalMarketHeatmap } from "./market-heatmap"
import { RecentActivityTimeline } from "./activity-timeline"
import { FormulationCards } from "./formulation-cards"
import { FormulationAnalytics } from "./formulation-analytics"
import { MarketCoverageAnalysis } from "./market-coverage"
import { RegulatoryImpactAssessment } from "./regulatory-impact"
import { Search, Filter, Download, Plus, RefreshCw } from "lucide-react"

export function DosageFormDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTherapeuticArea, setSelectedTherapeuticArea] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedMarket, setSelectedMarket] = useState("all")

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dosage Form Tracking</h2>
          <p className="text-muted-foreground">Manage and monitor product formulations, strengths, and presentations</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Formulation
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search and Filter Panel */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search formulations..."
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
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Product Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="development">In Development</SelectItem>
                  <SelectItem value="discontinued">Discontinued</SelectItem>
                  <SelectItem value="pending">Pending Approval</SelectItem>
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
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-3 w-3" />
                Advanced Filters
              </Button>
              <Button variant="ghost" size="sm">
                Save Search
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-xs">
                Active Filters: {selectedTherapeuticArea !== "all" ? 1 : 0}
                {selectedStatus !== "all" ? 1 : 0}
                {selectedMarket !== "all" ? 1 : 0}
              </Badge>
              {(selectedTherapeuticArea !== "all" || selectedStatus !== "all" || selectedMarket !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedTherapeuticArea("all")
                    setSelectedStatus("all")
                    setSelectedMarket("all")
                  }}
                >
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Stats */}
      <DosageFormStats />

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="formulations">Formulations</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="markets">Market Coverage</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory Impact</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dosage Form Distribution</CardTitle>
                <CardDescription>Distribution of products by dosage form type</CardDescription>
              </CardHeader>
              <CardContent>
                <DosageFormDistribution />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Global Market Heatmap</CardTitle>
                <CardDescription>Approval coverage by country/region</CardDescription>
              </CardHeader>
              <CardContent>
                <GlobalMarketHeatmap />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity Timeline</CardTitle>
              <CardDescription>Recent formulation-related activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivityTimeline />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Formulations Tab */}
        <TabsContent value="formulations" className="mt-6">
          <FormulationCards
            searchQuery={searchQuery}
            therapeuticArea={selectedTherapeuticArea}
            status={selectedStatus}
            market={selectedMarket}
          />
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6 mt-6">
          <FormulationAnalytics />
        </TabsContent>

        {/* Market Coverage Tab */}
        <TabsContent value="markets" className="space-y-6 mt-6">
          <MarketCoverageAnalysis />
        </TabsContent>

        {/* Regulatory Impact Tab */}
        <TabsContent value="regulatory" className="space-y-6 mt-6">
          <RegulatoryImpactAssessment />
        </TabsContent>

        {/* Recent Activity Tab */}
        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Activity Log</CardTitle>
              <CardDescription>Detailed history of all formulation-related activities</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivityTimeline detailed />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
