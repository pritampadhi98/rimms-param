"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, FileText, Calendar } from "lucide-react"

export function RegulatoryTimeline() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Market</TableHead>
              <TableHead>Submission Type</TableHead>
              <TableHead>Submission Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Approval Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>NDA</TableCell>
              <TableCell>2023-06-20</TableCell>
              <TableCell>
                <Badge className="bg-green-500">Approved</Badge>
              </TableCell>
              <TableCell>2023-12-10</TableCell>
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
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>European Union</TableCell>
              <TableCell>MAA</TableCell>
              <TableCell>2023-07-15</TableCell>
              <TableCell>
                <Badge className="bg-green-500">Approved</Badge>
              </TableCell>
              <TableCell>2024-01-22</TableCell>
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
            <TableRow>
              <TableCell className="font-medium">Neurobalance 25mg</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>NDA</TableCell>
              <TableCell>2023-11-05</TableCell>
              <TableCell>
                <Badge className="bg-amber-500">Pending</Badge>
              </TableCell>
              <TableCell>Expected: 2024-05-20</TableCell>
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
            <TableRow>
              <TableCell className="font-medium">Oncoshield 50mg/5mL</TableCell>
              <TableCell>Japan</TableCell>
              <TableCell>NDA</TableCell>
              <TableCell>2024-01-10</TableCell>
              <TableCell>
                <Badge className="bg-amber-500">Pending</Badge>
              </TableCell>
              <TableCell>Expected: 2024-07-15</TableCell>
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
            <TableRow>
              <TableCell className="font-medium">ImmunoGuard 100mg</TableCell>
              <TableCell>Brazil</TableCell>
              <TableCell>NDA</TableCell>
              <TableCell>2023-09-18</TableCell>
              <TableCell>
                <Badge className="bg-red-500">Rejected</Badge>
              </TableCell>
              <TableCell>2024-02-05</TableCell>
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
            <TableRow>
              <TableCell className="font-medium">ImmunoGuard 100mg</TableCell>
              <TableCell>Brazil</TableCell>
              <TableCell>NDA (Resubmission)</TableCell>
              <TableCell>Planned: 2024-05-15</TableCell>
              <TableCell>
                <Badge variant="outline">Planned</Badge>
              </TableCell>
              <TableCell>Expected: 2024-11-20</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    Schedule
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
