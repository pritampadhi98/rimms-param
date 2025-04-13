"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, Clock, FileText, Filter, Search } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function DossierStatus() {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ANDA/Dossier Status Tracking</CardTitle>
        <CardDescription>
          Track the status of regulatory submissions across different regions and agencies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4 mt-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-1">
                <input type="text" placeholder="Search submissions" className="w-full p-2 border rounded-md" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Submission ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-medium">{submission.id}</TableCell>
                    <TableCell>{submission.product}</TableCell>
                    <TableCell>{submission.type}</TableCell>
                    <TableCell>{submission.region}</TableCell>
                    <TableCell>{submission.submitted}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(submission.status)}>{submission.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={submission.progress} className="h-2 w-[60px]" />
                        <span className="text-xs">{submission.progress}%</span>
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
          </TabsContent>
          <TabsContent value="approved" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Approved Submissions</h3>
              <Button variant="outline" size="sm">
                Export List
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Submission ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Approval Date</TableHead>
                  <TableHead>Expiration</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">ANDA-2023-0012</TableCell>
                  <TableCell>Product X</TableCell>
                  <TableCell>ANDA</TableCell>
                  <TableCell>US FDA</TableCell>
                  <TableCell>2023-01-15</TableCell>
                  <TableCell>2028-01-15</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">MAA-2022-0045</TableCell>
                  <TableCell>Product Y</TableCell>
                  <TableCell>MAA</TableCell>
                  <TableCell>EU EMA</TableCell>
                  <TableCell>2022-11-30</TableCell>
                  <TableCell>2027-11-30</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="rejected" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Rejected Submissions</h3>
              <Button variant="outline" size="sm">
                Export List
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Submission ID</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Region</TableHead>
                  <TableHead>Rejection Date</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">ANDA-2022-0089</TableCell>
                  <TableCell>Product Z</TableCell>
                  <TableCell>ANDA</TableCell>
                  <TableCell>US FDA</TableCell>
                  <TableCell>2022-09-20</TableCell>
                  <TableCell>Incomplete Data</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="dashboard" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-amber-500" />
                    Pending Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">Submissions awaiting agency review</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                    Approved
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">28</div>
                  <p className="text-sm text-muted-foreground">Successfully approved submissions</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                    Rejected
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-sm text-muted-foreground">Submissions requiring resubmission</p>
                </CardContent>
              </Card>
            </div>
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium mb-4">Submission Status by Region</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">US FDA</span>
                    <span className="text-sm text-muted-foreground">15 submissions</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Approved: 10</span>
                    <span>Pending: 4</span>
                    <span>Rejected: 1</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">EU EMA</span>
                    <span className="text-sm text-muted-foreground">12 submissions</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Approved: 9</span>
                    <span>Pending: 2</span>
                    <span>Rejected: 1</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Japan PMDA</span>
                    <span className="text-sm text-muted-foreground">8 submissions</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5 mb-1">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Approved: 4</span>
                    <span>Pending: 3</span>
                    <span>Rejected: 1</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>Generate Report</Button>
      </CardFooter>
    </Card>
  )
}

const activeSubmissions = [
  {
    id: "ANDA-2023-0045",
    product: "Product A",
    type: "ANDA",
    region: "US FDA",
    submitted: "2023-05-15",
    status: "Under Review",
    progress: 60,
  },
  {
    id: "MAA-2023-0032",
    product: "Product B",
    type: "MAA",
    region: "EU EMA",
    submitted: "2023-04-22",
    status: "Information Request",
    progress: 40,
  },
  {
    id: "NDA-2023-0018",
    product: "Product C",
    type: "NDA",
    region: "US FDA",
    submitted: "2023-03-10",
    status: "Under Review",
    progress: 75,
  },
  {
    id: "JNDA-2023-0007",
    product: "Product D",
    type: "JNDA",
    region: "Japan PMDA",
    submitted: "2023-02-28",
    status: "Pending Validation",
    progress: 25,
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Under Review":
      return "default"
    case "Information Request":
      return "secondary"
    case "Pending Validation":
      return "outline"
    default:
      return "outline"
  }
}
