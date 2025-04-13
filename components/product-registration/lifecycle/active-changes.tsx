"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, BarChart } from "lucide-react"

export function ActiveChanges() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Change ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Product(s)</TableHead>
              <TableHead>Change Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Initiated By</TableHead>
              <TableHead>Initiated Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">CHG-2024-0042</TableCell>
              <TableCell>Excipient Supplier Change</TableCell>
              <TableCell>Cardiostat 10mg, 20mg</TableCell>
              <TableCell>Formulation</TableCell>
              <TableCell>
                <Badge className="bg-blue-500">Under Review</Badge>
              </TableCell>
              <TableCell>John Smith</TableCell>
              <TableCell>2024-02-15</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Impact
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CHG-2024-0038</TableCell>
              <TableCell>Manufacturing Site Transfer</TableCell>
              <TableCell>Neurobalance (All Strengths)</TableCell>
              <TableCell>Manufacturing</TableCell>
              <TableCell>
                <Badge className="bg-green-500">Approved</Badge>
              </TableCell>
              <TableCell>Sarah Johnson</TableCell>
              <TableCell>2024-01-30</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Impact
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CHG-2024-0035</TableCell>
              <TableCell>Shelf-Life Extension</TableCell>
              <TableCell>Product A, Product B</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
