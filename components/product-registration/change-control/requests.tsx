import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ChangeControlRequests() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Change Requests</CardTitle>
            <CardDescription>
              Manage and track all change requests
            </CardDescription>
          </div>
          <Button>New Request</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Request ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Requested By</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>CR-001</TableCell>
              <TableCell>Update Product Labeling</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>Documentation</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>2024-04-13</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CR-002</TableCell>
              <TableCell>Modify Manufacturing Process</TableCell>
              <TableCell>
                <Badge variant="secondary">In Review</Badge>
              </TableCell>
              <TableCell>Process</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>2024-04-12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CR-003</TableCell>
              <TableCell>Update Quality Control Procedures</TableCell>
              <TableCell>
                <Badge variant="default">Approved</Badge>
              </TableCell>
              <TableCell>Quality</TableCell>
              <TableCell>Mike Johnson</TableCell>
              <TableCell>2024-04-11</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
