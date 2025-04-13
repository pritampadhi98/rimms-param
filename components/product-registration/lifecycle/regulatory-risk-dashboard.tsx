"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Eye, FileText } from "lucide-react"

export function RegulatoryRiskDashboard() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-red-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">High Risk Actions</CardTitle>
            <CardDescription>Critical actions requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 approaching deadlines</p>
          </CardContent>
        </Card>
        <Card className="bg-amber-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Medium Risk Actions</CardTitle>
            <CardDescription>Important actions requiring planning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">5 in progress</p>
          </CardContent>
        </Card>
        <Card className="bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Low Risk Actions</CardTitle>
            <CardDescription>Routine actions with standard timelines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">15 not started</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Critical Regulatory Actions</CardTitle>
          <CardDescription>High-priority actions requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Market</TableHead>
                <TableHead>Action Required</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-red-50">
                <TableCell className="font-medium">Oncoshield 50mg/5mL</TableCell>
                <TableCell>Japan</TableCell>
                <TableCell>Response to Information Request</TableCell>
                <TableCell>2024-04-20</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">High</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">In Progress</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Escalate
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="bg-red-50">
                <TableCell className="font-medium">Cardiostat 10mg</TableCell>
                <TableCell>European Union</TableCell>
                <TableCell>PSUR</TableCell>
                <TableCell>2024-05-10</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">High</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">In Progress</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Documents
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="bg-red-50">
                <TableCell className="font-medium">Neurobalance 25mg</TableCell>
                <TableCell>United States</TableCell>
                <TableCell>Post-Approval Study</TableCell>
                <TableCell>2024-08-30</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">High</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">In Progress</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Documents
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="bg-red-50">
                <TableCell className="font-medium">ImmunoGuard 100mg</TableCell>
                <TableCell>Brazil</TableCell>
                <TableCell>Resubmission Preparation</TableCell>
                <TableCell>2024-05-15</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">High</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Not Started</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Escalate
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="bg-red-50">
                <TableCell className="font-medium">Cardiostat 40mg</TableCell>
                <TableCell>United States</TableCell>
                <TableCell>Response to Complete Response Letter</TableCell>
                <TableCell>2024-06-30</TableCell>
                <TableCell>
                  <Badge className="bg-red-500">High</Badge>
                </TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">In Progress</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-1" />
                      Documents
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
