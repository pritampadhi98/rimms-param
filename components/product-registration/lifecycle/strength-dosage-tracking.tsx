"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, FileText, Globe, BarChart } from "lucide-react"
import { StrengthMatrix } from "./strength-matrix"
import { MarketAvailabilityMap } from "./market-availability-map"
import { DosageFormSpecifications } from "./dosage-form-specifications"

export function StrengthDosageTracking() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Strength & Dosage Form Tracking</CardTitle>
              <CardDescription>Complete matrix of all strength variations and dosage forms</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search strengths..." className="w-full sm:w-[200px] pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="marketed">Marketed</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="development">In Development</SelectItem>
                  <SelectItem value="discontinued">Discontinued</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Strength
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="matrix" className="space-y-4">
            <TabsList>
              <TabsTrigger value="matrix" className="flex items-center gap-1">
                <BarChart className="h-4 w-4" />
                Strength Matrix
              </TabsTrigger>
              <TabsTrigger value="specifications" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Dosage Specifications
              </TabsTrigger>
              <TabsTrigger value="availability" className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                Market Availability
              </TabsTrigger>
            </TabsList>
            <TabsContent value="matrix" className="space-y-4">
              <StrengthMatrix />
            </TabsContent>
            <TabsContent value="specifications" className="space-y-4">
              <DosageFormSpecifications />
            </TabsContent>
            <TabsContent value="availability" className="space-y-4">
              <MarketAvailabilityMap />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
