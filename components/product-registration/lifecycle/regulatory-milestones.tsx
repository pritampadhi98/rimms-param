"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, FileText, Calendar, AlertTriangle } from "lucide-react"
import { RegulatoryTimeline } from "./regulatory-timeline"
import { UpcomingCommitments } from "./upcoming-commitments"
import { RegulatoryRiskDashboard } from "./regulatory-risk-dashboard"

export function RegulatoryMilestones() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Regulatory Milestone Tracking</CardTitle>
              <CardDescription>Submission dates, approval status, and upcoming regulatory commitments</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search milestones..." className="w-full sm:w-[200px] pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="planned">Planned</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Milestone
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="timeline" className="space-y-4">
            <TabsList>
              <TabsTrigger value="timeline" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Regulatory Timeline
              </TabsTrigger>
              <TabsTrigger value="commitments" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Upcoming Commitments
              </TabsTrigger>
              <TabsTrigger value="risk" className="flex items-center gap-1">
                <AlertTriangle className="h-4 w-4" />
                Risk Dashboard
              </TabsTrigger>
            </TabsList>
            <TabsContent value="timeline" className="space-y-4">
              <RegulatoryTimeline />
            </TabsContent>
            <TabsContent value="commitments" className="space-y-4">
              <UpcomingCommitments />
            </TabsContent>
            <TabsContent value="risk" className="space-y-4">
              <RegulatoryRiskDashboard />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
