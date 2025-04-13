"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, BarChart } from "lucide-react"

export function StrengthMatrix() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Family</TableHead>
              <TableHead>Dosage Form</TableHead>
              <TableHead>Strengths</TableHead>
              <TableHead>Markets</TableHead>
              <TableHead>Development Pipeline</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Cardiostat</TableCell>
              <TableCell>Tablet</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="bg-green-50">
                    5mg
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    10mg
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    20mg
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    40mg
                  </Badge>
                </div>
              </TableCell>
              <TableCell>32 markets</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">80mg (Phase III)</Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Analytics
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Neurobalance</TableCell>
              <TableCell>Capsule</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="bg-green-50">
                    25mg
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    50mg
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    75mg
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    100mg
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    150mg
                  </Badge>
                </div>
              </TableCell>
              <TableCell>28 markets</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">200mg (Phase II)</Badge>
                  <Badge variant="secondary">300mg (Phase I)</Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Analytics
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Oncoshield</TableCell>
              <TableCell>Injection</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="bg-green-50">
                    50mg/5mL
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    100mg/10mL
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50">
                    150mg/15mL
                  </Badge>
                </div>
              </TableCell>
              <TableCell>18 markets</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">200mg/20mL (Phase III)</Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Analytics
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ImmunoGuard</TableCell>
              <TableCell>Tablet</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="bg-green-50">
                    50mg
                  </Badge>
                  <Badge variant="outline" className="bg-green-50">
                    100mg
                  </Badge>
                </div>
              </TableCell>
              <TableCell>22 markets</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">25mg (Phase III)</Badge>
                  <Badge variant="secondary">200mg (Phase II)</Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Analytics
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">InfectoClear</TableCell>
              <TableCell>Capsule</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="bg-gray-50">
                    250mg
                  </Badge>
                  <Badge variant="outline" className="bg-gray-50">
                    500mg
                  </Badge>
                </div>
              </TableCell>
              <TableCell>0 markets (discontinued)</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">None</Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <BarChart className="h-4 w-4 mr-1" />
                    Analytics
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
