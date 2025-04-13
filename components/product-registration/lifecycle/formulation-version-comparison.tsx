"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { GitCompare } from "lucide-react"

export function FormulationVersionComparison() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Select Product</div>
              <Select defaultValue="cardiostat">
                <SelectTrigger>
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiostat">Cardiostat 10mg</SelectItem>
                  <SelectItem value="neurobalance">Neurobalance 25mg</SelectItem>
                  <SelectItem value="oncoshield">Oncoshield 50mg</SelectItem>
                  <SelectItem value="immunoguard">ImmunoGuard 100mg</SelectItem>
                  <SelectItem value="infectoclear">InfectoClear 250mg</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Version 1</div>
              <Select defaultValue="v3.0">
                <SelectTrigger>
                  <SelectValue placeholder="Select version" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="v3.0">v3.0 (Current)</SelectItem>
                  <SelectItem value="v2.5">v2.5</SelectItem>
                  <SelectItem value="v2.0">v2.0</SelectItem>
                  <SelectItem value="v1.0">v1.0</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Version 2</div>
              <Select defaultValue="v2.5">
                <SelectTrigger>
                  <SelectValue placeholder="Select version" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="v3.0">v3.0 (Current)</SelectItem>
                  <SelectItem value="v2.5">v2.5</SelectItem>
                  <SelectItem value="v2.0">v2.0</SelectItem>
                  <SelectItem value="v1.0">v1.0</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-end">
          <Button>
            <GitCompare className="mr-2 h-4 w-4" />
            Compare
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>v3.0 (Current)</TableHead>
                <TableHead>v2.5</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Amlodipine</TableCell>
                <TableCell>10.0 mg</TableCell>
                <TableCell>10.0 mg</TableCell>
                <TableCell>
                  <Badge variant="outline">No Change</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Microcrystalline Cellulose</TableCell>
                <TableCell className="bg-green-50">85.0 mg</TableCell>
                <TableCell className="bg-red-50">80.0 mg</TableCell>
                <TableCell>
                  <Badge variant="secondary">Changed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Magnesium Stearate</TableCell>
                <TableCell className="bg-green-50">2.5 mg</TableCell>
                <TableCell className="bg-red-50">3.0 mg</TableCell>
                <TableCell>
                  <Badge variant="secondary">Changed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sodium Starch Glycolate</TableCell>
                <TableCell>5.0 mg</TableCell>
                <TableCell>5.0 mg</TableCell>
                <TableCell>
                  <Badge variant="outline">No Change</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Colloidal Silicon Dioxide</TableCell>
                <TableCell className="bg-green-50">1.0 mg</TableCell>
                <TableCell className="bg-red-50">0.5 mg</TableCell>
                <TableCell>
                  <Badge variant="secondary">Changed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Manufacturing Process</TableCell>
                <TableCell>Direct compression</TableCell>
                <TableCell>Direct compression</TableCell>
                <TableCell>
                  <Badge variant="outline">No Change</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dissolution Profile</TableCell>
                <TableCell className="bg-green-50">Q = 80% in 30 min</TableCell>
                <TableCell className="bg-red-50">Q = 75% in 30 min</TableCell>
                <TableCell>
                  <Badge variant="secondary">Changed</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
