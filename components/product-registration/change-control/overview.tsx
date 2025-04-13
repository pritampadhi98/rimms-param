"use client";
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

export function ChangeControlOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Recent Changes</CardTitle>
          <CardDescription>
            Latest changes made to product registrations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Change Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Product A</TableCell>
                <TableCell>Formulation</TableCell>
                <TableCell>Pending Review</TableCell>
                <TableCell>2024-04-13</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product B</TableCell>
                <TableCell>Packaging</TableCell>
                <TableCell>Approved</TableCell>
                <TableCell>2024-04-12</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
          <CardDescription>Changes waiting for your review</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Requester</TableHead>
                <TableHead>Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>CR-001</TableCell>
                <TableCell>Product C</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>High</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>CR-002</TableCell>
                <TableCell>Product D</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Medium</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change Impact</CardTitle>
          <CardDescription>
            Overview of change impact across products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Impact Area</TableHead>
                <TableHead>Active Changes</TableHead>
                <TableHead>Risk Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Formulation</TableCell>
                <TableCell>3</TableCell>
                <TableCell>High</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Packaging</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Medium</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Labeling</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Low</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
