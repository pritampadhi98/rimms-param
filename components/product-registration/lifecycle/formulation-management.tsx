"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, FileText, History, GitCompare } from "lucide-react"
import { FormulationVersionComparison } from "./formulation-version-comparison"
import { FormulationSpecifications } from "./formulation-specifications"
import { BioequivalenceData } from "./bioequivalence-data"

export function FormulationManagement() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Formulation Management</CardTitle>
              <CardDescription>
                Detailed specifications for each product formulation with version control
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search formulations..." className="w-full sm:w-[200px] pl-8" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending Approval</SelectItem>
                  <SelectItem value="superseded">Superseded</SelectItem>
                  <SelectItem value="obsolete">Obsolete</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Formulation
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="formulations" className="space-y-4">
            <TabsList>
              <TabsTrigger value="formulations" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Formulations
              </TabsTrigger>
              <TabsTrigger value="versions" className="flex items-center gap-1">
                <History className="h-4 w-4" />
                Version History
              </TabsTrigger>
              <TabsTrigger value="comparison" className="flex items-center gap-1">
                <GitCompare className="h-4 w-4" />
                Comparison
              </TabsTrigger>
              <TabsTrigger value="bioequivalence" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Bioequivalence
              </TabsTrigger>
            </TabsList>
            <TabsContent value="formulations" className="space-y-4">
              <FormulationSpecifications />
            </TabsContent>
            <TabsContent value="versions" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Version</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Effective Date</TableHead>
                        <TableHead>Changed By</TableHead>
                        <TableHead>Change Reason</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Cardiostat 10mg</TableCell>
                        <TableCell>v3.0</TableCell>
                        <TableCell>
                          <Badge>Active</Badge>
                        </TableCell>
                        <TableCell>2023-12-15</TableCell>
                        <TableCell>John Smith</TableCell>
                        <TableCell>Excipient optimization</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cardiostat 10mg</TableCell>
                        <TableCell>v2.5</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Superseded</Badge>
                        </TableCell>
                        <TableCell>2023-06-10</TableCell>
                        <TableCell>Sarah Johnson</TableCell>
                        <TableCell>Stability improvement</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cardiostat 10mg</TableCell>
                        <TableCell>v2.0</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Superseded</Badge>
                        </TableCell>
                        <TableCell>2022-11-20</TableCell>
                        <TableCell>Michael Brown</TableCell>
                        <TableCell>Manufacturing process change</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cardiostat 10mg</TableCell>
                        <TableCell>v1.0</TableCell>
                        <TableCell>
                          <Badge variant="outline">Obsolete</Badge>
                        </TableCell>
                        <TableCell>2022-03-05</TableCell>
                        <TableCell>Emily Davis</TableCell>
                        <TableCell>Initial formulation</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="comparison" className="space-y-4">
              <FormulationVersionComparison />
            </TabsContent>
            <TabsContent value="bioequivalence" className="space-y-4">
              <BioequivalenceData />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
