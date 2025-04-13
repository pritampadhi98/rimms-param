"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductLifecycleTimeline } from "./product-lifecycle-timeline"
import { ProductPortfolioDistribution } from "./portfolio-distribution"
import { TherapeuticAreaDistribution } from "./therapeutic-area-distribution"
import { Search, Filter, Calendar } from "lucide-react"
import { useState } from "react"

export function LifecycleOverview() {
  const [view, setView] = useState("timeline")

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Product Portfolio Overview</CardTitle>
              <CardDescription>Master view of all products with lifecycle stage indicators</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="w-full sm:w-[200px] pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by stage" />
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
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Therapeutic area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Areas</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="immunology">Immunology</SelectItem>
                  <SelectItem value="infectious">Infectious Disease</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span> Development
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span> Submission
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span> Approved
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span> Marketed
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-gray-500"></span> Discontinued
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={view} onValueChange={setView} className="space-y-4">
            <TabsList>
              <TabsTrigger value="timeline" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Timeline View
              </TabsTrigger>
              <TabsTrigger value="distribution" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Distribution View
              </TabsTrigger>
              <TabsTrigger value="therapeutic" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Therapeutic Areas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="timeline" className="space-y-4">
              <ProductLifecycleTimeline />
            </TabsContent>
            <TabsContent value="distribution" className="space-y-4">
              <ProductPortfolioDistribution />
            </TabsContent>
            <TabsContent value="therapeutic" className="space-y-4">
              <TherapeuticAreaDistribution />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
