import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function UpcomingDeadlines() {
  const deadlines = [
    {
      id: "DL-2023-001",
      description: "FDA Response to Information Request",
      product: "Cardiostat 10mg",
      dueDate: "2023-09-15",
      daysRemaining: 5,
      priority: "High",
    },
    {
      id: "DL-2023-002",
      description: "Annual Report Submission",
      product: "Neurobalance 25mg",
      dueDate: "2023-09-22",
      daysRemaining: 12,
      priority: "Medium",
    },
    {
      id: "DL-2023-003",
      description: "PMDA Stability Data Update",
      product: "Respiroclear Inhaler",
      dueDate: "2023-09-30",
      daysRemaining: 20,
      priority: "Medium",
    },
    {
      id: "DL-2023-004",
      description: "Market Authorization Renewal",
      product: "Gastroease 50mg",
      dueDate: "2023-10-05",
      daysRemaining: 25,
      priority: "High",
    },
    {
      id: "DL-2023-005",
      description: "Post-Approval Commitment Report",
      product: "Dermacalm Cream",
      dueDate: "2023-10-15",
      daysRemaining: 35,
      priority: "Low",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Days Remaining</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deadlines.map((deadline) => (
          <TableRow key={deadline.id}>
            <TableCell className="font-medium">{deadline.id}</TableCell>
            <TableCell>{deadline.description}</TableCell>
            <TableCell>{deadline.product}</TableCell>
            <TableCell>{deadline.dueDate}</TableCell>
            <TableCell>{deadline.daysRemaining}</TableCell>
            <TableCell>
              <Badge
                variant={
                  deadline.priority === "High" ? "destructive" : deadline.priority === "Medium" ? "default" : "outline"
                }
              >
                {deadline.priority}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
