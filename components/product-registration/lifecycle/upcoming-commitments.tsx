"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, FileText, Calendar, AlertTriangle } from "lucide-react"

export function UpcomingCommitments() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Market</TableHead>
              <TableHead>Commitment Type</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>Annual Report</TableCell>
              <TableCell>2024-06-15</TableCell>
              <TableCell>
                <Badge variant="outline">Not Started</Badge>
              </TableCell>
              <TableCell>
                <Badge className="bg-amber-500">Medium</Badge>
              </TableCell>
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
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>European Union</TableCell>
              <TableCell>PSUR</TableCell>
              <TableCell>2024-05-10</TableCell>
              <TableCell>
                <Badge className="bg-blue-500">In Progress</Badge>
              </TableCell>
              <TableCell>
                <Badge className="bg-red-500">High</Badge>
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
            <TableRow>
              <TableCell className="font-medium">Neurobalance 25mg</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>Post-Approval Study</TableCell>
              <TableCell>2024-08-30</TableCell>
              <TableCell>
                <Badge className="bg-blue-500">In Progress</Badge>
              </TableCell>
              <TableCell>
                <Badge className="bg-red-500">High</Badge>
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
            <TableRow>
              <TableCell className="font-medium">Oncoshield 50mg/5mL</TableCell>
              <TableCell>Japan</TableCell>
              <TableCell>Response to Information Request</TableCell>
              <TableCell>2024-04-20</TableCell>
              <TableCell>
                <Badge className="bg-blue-500">In Progress</Badge>
              </TableCell>
              <TableCell>
                <Badge className="bg-red-500">High</Badge>
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
            <TableRow>
              <TableCell className="font-medium">ImmunoGuard 100mg</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>CMC Amendment</TableCell>
              <TableCell>2024-07-15</TableCell>
              <TableCell>
                <Badge variant="outline">Not Started</Badge>
              </TableCell>
              <TableCell>
                <Badge className="bg-amber-500">Medium</Badge>
              </TableCell>
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
