"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";

export function DosageFormSpecifications() {
  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Dosage Form</TableHead>
              <TableHead>Critical Quality Attributes</TableHead>
              <TableHead>Release Specifications</TableHead>
              <TableHead>Stability Specifications</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Cardiostat 10mg</TableCell>
              <TableCell>Film-coated tablet</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <Badge variant="outline">Dissolution</Badge>
                  <Badge variant="outline">Content Uniformity</Badge>
                  <Badge variant="outline">Degradation Products</Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="text-xs">Dissolution: Q = 80% in 30 min</div>
                  <div className="text-xs">Assay: 95.0-105.0%</div>
                  <div className="text-xs">Impurities: NMT 0.5% individual</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="text-xs">Dissolution: Q = 75% in 30 min</div>
                  <div className="text-xs">Assay: 90.0-105.0%</div>
                  <div className="text-xs">Impurities: NMT 1.0% individual</div>
                </div>
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
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Neurobalance 25mg</TableCell>
              <TableCell>Hard gelatin capsule</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <Badge variant="outline">Dissolution</Badge>
                  <Badge variant="outline">Content Uniformity</Badge>
                  <Badge variant="outline">Water Content</Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="text-xs">Dissolution: Q = 75% in 45 min</div>
                  <div className="text-xs">Assay: 95.0-105.0%</div>
                  <div className="text-xs">Water: NMT 3.0%</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="text-xs">Dissolution: Q = 70% in 45 min</div>
                  <div className="text-xs">Assay: 90.0-105.0%</div>
                  <div className="text-xs">Water: NMT 5.0%</div>
                </div>
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
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Oncoshield 50mg/5mL</TableCell>
              <TableCell>Solution for injection</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <Badge variant="outline">Particulate Matter</Badge>
                  <Badge variant="outline">Sterility</Badge>
                  <Badge variant="outline">Bacterial Endotoxins</Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="text-xs">
                    Particulates: Meets USP &lt;788&gt;
                  </div>
                  <div className="text-xs">Sterility: No growth</div>
                  <div className="text-xs">Endotoxins: NMT 5.0 EU/mL</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="text-xs">
                    Particulates: Meets USP &lt;788&gt;
                  </div>
                  <div className="text-xs">Sterility: No growth</div>
                  <div className="text-xs">Endotoxins: NMT 5.0 EU/mL</div>
                </div>
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
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
