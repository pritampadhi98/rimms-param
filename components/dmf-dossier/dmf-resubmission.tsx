"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, FileText, Filter, Plus, Search } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function DMFResubmission() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search resubmissions by DMF ID or title"
            className="w-full p-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          New Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-amber-500" />
            Upcoming Resubmissions
          </h3>
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm text-muted-foreground">Due in the next 30 days</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
            In Progress
          </h3>
          <p className="text-3xl font-bold">8</p>
          <p className="text-sm text-muted-foreground">Currently being prepared</p>
        </div>
        <div className="border rounded-md p-4">
          <h3 className="text-lg font-medium mb-2 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-green-500" />
            Completed
          </h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">In the last 90 days</p>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">DMF ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resubmissionData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.dmfId}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.reason}</TableCell>
              <TableCell>
                <span className={item.daysLeft < 7 ? "text-red-500 font-medium" : ""}>{item.dueDate}</span>
                <div className="text-xs text-muted-foreground">{item.daysLeft} days left</div>
              </TableCell>
              <TableCell>{item.assignedTo}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(item.status)}>{item.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Progress value={item.progress} className="h-2 w-[60px]" />
                  <span className="text-xs">{item.progress}%</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const resubmissionData = [
  {
    id: 1,
    dmfId: "DMF12345",
    title: "Acetaminophen",
    reason: "Deficiency Response",
    dueDate: "2023-05-15",
    daysLeft: 5,
    assignedTo: "John Smith",
    status: "In Progress",
    progress: 75,
  },
  {
    id: 2,
    dmfId: "DMF23456",
    title: "Microcrystalline Cellulose",
    reason: "Annual Update",
    dueDate: "2023-05-22",
    daysLeft: 12,
    assignedTo: "Jane Doe",
    status: "In Progress",
    progress: 40,
  },
  {
    id: 3,
    dmfId: "ASMF-789",
    title: "Ibuprofen",
    reason: "Manufacturing Change",
    dueDate: "2023-06-10",
    daysLeft: 31,
    assignedTo: "Robert Johnson",
    status: "Planning",
    progress: 15,
  },
  {
    id: 4,
    dmfId: "DMF34567",
    title: "Magnesium Stearate",
    reason: "Deficiency Response",
    dueDate: "2023-05-08",
    daysLeft: 2,
    assignedTo: "Sarah Williams",
    status: "Review",
    progress: 90,
  },
  {
    id: 5,
    dmfId: "DMF45678",
    title: "Manufacturing Facility",
    reason: "Annual Update",
    dueDate: "2023-05-30",
    daysLeft: 20,
    assignedTo: "Michael Brown",
    status: "Planning",
    progress: 25,
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "In Progress":
      return "default"
    case "Planning":
      return "secondary"
    case "Review":
      return "outline"
    case "Submitted":
      return "success"
    case "Overdue":
      return "destructive"
    default:
      return "outline"
  }
}
