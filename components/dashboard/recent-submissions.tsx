import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface RecentSubmissionsProps {
  detailed?: boolean
}

export function RecentSubmissions({ detailed = false }: RecentSubmissionsProps) {
  const submissions = [
    {
      id: "SUB-2023-001",
      product: "Cardiostat 10mg",
      type: "New Application",
      market: "United States",
      authority: "FDA",
      date: "2023-07-15",
      status: "Under Review",
    },
    {
      id: "SUB-2023-002",
      product: "Neurobalance 25mg",
      type: "Variation",
      market: "European Union",
      authority: "EMA",
      date: "2023-07-22",
      status: "Approved",
    },
    {
      id: "SUB-2023-003",
      product: "Respiroclear Inhaler",
      type: "Line Extension",
      market: "Japan",
      authority: "PMDA",
      date: "2023-08-05",
      status: "Under Review",
    },
    {
      id: "SUB-2023-004",
      product: "Gastroease 50mg",
      type: "Renewal",
      market: "Canada",
      authority: "Health Canada",
      date: "2023-08-12",
      status: "Approved",
    },
    {
      id: "SUB-2023-005",
      product: "Dermacalm Cream",
      type: "New Application",
      market: "Australia",
      authority: "TGA",
      date: "2023-08-18",
      status: "Query Received",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Product</TableHead>
          {detailed && <TableHead>Type</TableHead>}
          <TableHead>Market</TableHead>
          {detailed && <TableHead>Authority</TableHead>}
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          {detailed && <TableHead className="text-right">Actions</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.map((submission) => (
          <TableRow key={submission.id}>
            <TableCell className="font-medium">{submission.id}</TableCell>
            <TableCell>{submission.product}</TableCell>
            {detailed && <TableCell>{submission.type}</TableCell>}
            <TableCell>{submission.market}</TableCell>
            {detailed && <TableCell>{submission.authority}</TableCell>}
            <TableCell>{submission.date}</TableCell>
            <TableCell>
              <Badge
                variant={
                  submission.status === "Approved"
                    ? "success"
                    : submission.status === "Query Received"
                      ? "destructive"
                      : "default"
                }
              >
                {submission.status}
              </Badge>
            </TableCell>
            {detailed && (
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
