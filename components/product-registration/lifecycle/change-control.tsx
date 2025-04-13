"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, FileText, Globe, BarChart } from "lucide-react"
import { ActiveChanges } from "./active-changes"
import { ImpactAssessment } from "./impact-assessment"
import { ImplementationTracking } from "./implementation-tracking"

export function ChangeControlManagement() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Change Control Management</CardTitle>
              <CardDescription>
                Active change requests affecting formulations, strengths, or presentations
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search changes..." className="w-full sm:w-[200px] pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="implementation">Implementation</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Change
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Active Changes
              </TabsTrigger>
              <TabsTrigger value="impact" className="flex items-center gap-1">
                <BarChart className="h-4 w-4" />
                Impact Assessment
              </TabsTrigger>
              <TabsTrigger value="implementation" className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                Implementation Tracking
              </TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <ActiveChanges />
            </TabsContent>
            <TabsContent value="impact" className="space-y-4">
              <ImpactAssessment />
            </TabsContent>
            <TabsContent value="implementation" className="space-y-4">
              <ImplementationTracking />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
