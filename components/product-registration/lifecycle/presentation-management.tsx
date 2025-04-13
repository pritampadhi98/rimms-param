"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, FileText, Package, ImageIcon } from "lucide-react"
import { PresentationInventory } from "./presentation-inventory"
import { PackagingSpecifications } from "./packaging-specifications"
import { ArtworkVersions } from "./artwork-versions"

export function PresentationManagement() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Presentation Management</CardTitle>
              <CardDescription>Comprehensive inventory of all product presentations and packaging</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search presentations..." className="w-full sm:w-[200px] pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="blister">Blister Pack</SelectItem>
                  <SelectItem value="bottle">Bottle</SelectItem>
                  <SelectItem value="vial">Vial</SelectItem>
                  <SelectItem value="ampoule">Ampoule</SelectItem>
                  <SelectItem value="prefilled">Pre-filled Syringe</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Presentation
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="inventory" className="space-y-4">
            <TabsList>
              <TabsTrigger value="inventory" className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                Presentation Inventory
              </TabsTrigger>
              <TabsTrigger value="specifications" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Packaging Specifications
              </TabsTrigger>
              <TabsTrigger value="artwork" className="flex items-center gap-1">
                <ImageIcon className="h-4 w-4" />
                Artwork Versions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="inventory" className="space-y-4">
              <PresentationInventory />
            </TabsContent>
            <TabsContent value="specifications" className="space-y-4">
              <PackagingSpecifications />
            </TabsContent>
            <TabsContent value="artwork" className="space-y-4">
              <ArtworkVersions />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
