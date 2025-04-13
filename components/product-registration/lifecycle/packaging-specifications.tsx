"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export function PackagingSpecifications() {
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
                  <SelectItem value="oncoshield">Oncoshield 50mg/5mL</SelectItem>
                  <SelectItem value="immunoguard">ImmunoGuard 100mg</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Select Presentation</div>
              <Select defaultValue="blister">
                <SelectTrigger>
                  <SelectValue placeholder="Select presentation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blister">Blister pack (30 tablets)</SelectItem>
                  <SelectItem value="bottle">Bottle (90 tablets)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cardiostat 10mg - Blister Pack (30 tablets)</CardTitle>
          <CardDescription>Container closure system specifications</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Specifications</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Primary Packaging</TableCell>
                <TableCell>Aluminum-Aluminum blister</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs">Forming foil: 25μm hard aluminum</div>
                    <div className="text-xs">Lidding foil: 20μm aluminum with heat seal coating</div>
                    <div className="text-xs">Cavity size: 8mm diameter</div>
                  </div>
                </TableCell>
                <TableCell>Amcor Ltd.</TableCell>
                <TableCell>
                  <Badge>Approved</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Secondary Packaging</TableCell>
                <TableCell>Cardboard carton</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs">Material: 300gsm SBS board</div>
                    <div className="text-xs">Dimensions: 85 x 45 x 15mm</div>
                    <div className="text-xs">Print: 4-color offset with varnish</div>
                  </div>
                </TableCell>
                <TableCell>International Paper</TableCell>
                <TableCell>
                  <Badge>Approved</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Package Insert</TableCell>
                <TableCell>Paper leaflet</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs">Material: 50gsm uncoated paper</div>
                    <div className="text-xs">Dimensions: 280 x 160mm (folded to 70 x 40mm)</div>
                    <div className="text-xs">Print: 1-color (black)</div>
                  </div>
                </TableCell>
                <TableCell>Chesapeake Corp.</TableCell>
                <TableCell>
                  <Badge>Approved</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tamper Evidence</TableCell>
                <TableCell>Carton sealing</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs">Type: Glue tab closure</div>
                    <div className="text-xs">Feature: Perforated opening</div>
                  </div>
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Badge>Approved</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Storage and Stability</CardTitle>
          <CardDescription>Storage conditions and shelf-life information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Storage Conditions</h4>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Temperature</TableCell>
                      <TableCell>Store below 30°C</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Light Protection</TableCell>
                      <TableCell>Protect from light</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Humidity</TableCell>
                      <TableCell>Store in a dry place</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Special Precautions</TableCell>
                      <TableCell>Keep out of reach of children</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Shelf-Life Information</h4>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Shelf-Life</TableCell>
                      <TableCell>36 months</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">In-Use Stability</TableCell>
                      <TableCell>Not applicable</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Stability Studies</TableCell>
                      <TableCell>Long-term, accelerated, and stress testing completed</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Retest Period</TableCell>
                      <TableCell>Not applicable</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
