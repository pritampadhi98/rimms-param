"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download, History } from "lucide-react"

export function ArtworkVersions() {
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
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Select Market</div>
              <Select defaultValue="us">
                <SelectTrigger>
                  <SelectValue placeholder="Select market" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="eu">European Union</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="cn">China</SelectItem>
                  <SelectItem value="br">Brazil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
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
                <TableCell className="font-medium">Carton</TableCell>
                <TableCell>v3.2</TableCell>
                <TableCell>
                  <Badge>Current</Badge>
                </TableCell>
                <TableCell>2023-10-15</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Updated safety information</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <History className="h-4 w-4 mr-1" />
                      History
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Blister Foil</TableCell>
                <TableCell>v2.0</TableCell>
                <TableCell>
                  <Badge>Current</Badge>
                </TableCell>
                <TableCell>2023-10-15</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Updated product code</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <History className="h-4 w-4 mr-1" />
                      History
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Package Insert</TableCell>
                <TableCell>v4.1</TableCell>
                <TableCell>
                  <Badge>Current</Badge>
                </TableCell>
                <TableCell>2023-10-15</TableCell>
                <TableCell>Sarah Johnson</TableCell>
                <TableCell>Updated adverse reactions section</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <History className="h-4 w-4 mr-1" />
                      History
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Carton</TableCell>
                <TableCell>v3.1</TableCell>
                <TableCell>
                  <Badge variant="secondary">Superseded</Badge>
                </TableCell>
                <TableCell>2023-05-20</TableCell>
                <TableCell>Michael Brown</TableCell>
                <TableCell>Updated manufacturer address</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <History className="h-4 w-4 mr-1" />
                      History
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Package Insert</TableCell>
                <TableCell>v4.0</TableCell>
                <TableCell>
                  <Badge variant="secondary">Superseded</Badge>
                </TableCell>
                <TableCell>2023-05-20</TableCell>
                <TableCell>Emily Davis</TableCell>
                <TableCell>Updated dosage information</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <History className="h-4 w-4 mr-1" />
                      History
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
        <div className="text-muted-foreground">Artwork preview would be displayed here</div>
      </div>
    </div>
  )
}
