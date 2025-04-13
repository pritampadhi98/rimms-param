"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, FileText, ImageIcon } from "lucide-react"

export function PresentationInventory() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Presentation</TableHead>
              <TableHead>Package Type</TableHead>
              <TableHead>Pack Size</TableHead>
              <TableHead>Markets</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>Blister pack</TableCell>
              <TableCell>Alu-Alu blister</TableCell>
              <TableCell>30 tablets</TableCell>
              <TableCell>32 markets</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Artwork
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>Bottle</TableCell>
              <TableCell>HDPE bottle with CRC</TableCell>
              <TableCell>90 tablets</TableCell>
              <TableCell>12 markets</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Artwork
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Neurobalance 25mg</TableCell>
              <TableCell>Blister pack</TableCell>
              <TableCell>PVC/PVDC-Alu blister</TableCell>
              <TableCell>28 capsules</TableCell>
              <TableCell>28 markets</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Artwork
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Oncoshield 50mg/5mL</TableCell>
              <TableCell>Vial</TableCell>
              <TableCell>Type I glass vial</TableCell>
              <TableCell>1 vial</TableCell>
              <TableCell>18 markets</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                  <Button variant="outline" size="sm">
                    <Image className="h-4 w-4 mr-1" />
                    Artwork
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ImmunoGuard 100mg</TableCell>
              <TableCell>Blister pack</TableCell>
              <TableCell>Alu-Alu blister</TableCell>
              <TableCell>14 tablets</TableCell>
              <TableCell>22 markets</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Specs
                  </Button>
                  <Button variant="outline" size="sm">
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Artwork
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
