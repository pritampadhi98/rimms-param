"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, FileText, History } from "lucide-react"

export function FormulationSpecifications() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Formulation Type</TableHead>
              <TableHead>Active Ingredients</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Version</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>Tablet</TableCell>
              <TableCell>Amlodipine 10mg</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell>v3.0</TableCell>
              <TableCell>2023-12-15</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    History
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Neurobalance 25mg</TableCell>
              <TableCell>Capsule</TableCell>
              <TableCell>Pregabalin 25mg</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell>v2.1</TableCell>
              <TableCell>2023-10-22</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    History
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Oncoshield 50mg</TableCell>
              <TableCell>Injection</TableCell>
              <TableCell>Paclitaxel 50mg</TableCell>
              <TableCell>
                <Badge variant="secondary">In Development</Badge>
              </TableCell>
              <TableCell>v1.3</TableCell>
              <TableCell>2024-02-08</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    History
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ImmunoGuard 100mg</TableCell>
              <TableCell>Tablet</TableCell>
              <TableCell>Adalimumab 100mg</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell>v2.0</TableCell>
              <TableCell>2023-08-17</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    History
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">InfectoClear 250mg</TableCell>
              <TableCell>Capsule</TableCell>
              <TableCell>Azithromycin 250mg</TableCell>
              <TableCell>
                <Badge variant="outline">Discontinued</Badge>
              </TableCell>
              <TableCell>v2.5</TableCell>
              <TableCell>2023-06-30</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <History className="h-4 w-4 mr-1" />
                    History
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
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
