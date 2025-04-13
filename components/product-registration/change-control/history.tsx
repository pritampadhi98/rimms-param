"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Search,
  Filter,
  Download,
  Calendar,
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";

export function ChangeHistoryDashboard() {
  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <Card>
        <CardHeader>
          <CardTitle>Change History Search</CardTitle>
          <CardDescription>
            Search and filter the complete change history across all patents and
            products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search changes..."
                  className="pl-8"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-range">Date Range</Label>
              <DateRangePicker />
            </div>
            <div className="space-y-2">
              <Label htmlFor="change-type">Change Type</Label>
              <Select>
                <SelectTrigger id="change-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="administrative">Administrative</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="formulation">Formulation</SelectItem>
                  <SelectItem value="packaging">Packaging</SelectItem>
                  <SelectItem value="labeling">Labeling</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="responsible-party">Responsible Party</Label>
              <Select>
                <SelectTrigger id="responsible-party">
                  <SelectValue placeholder="Select party" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Parties</SelectItem>
                  <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
                  <SelectItem value="quality">Quality Assurance</SelectItem>
                  <SelectItem value="legal">Legal Department</SelectItem>
                  <SelectItem value="rnd">R&D</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" className="mr-2">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filters
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Results
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Changes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              +12% from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Critical Changes
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">
              +5% from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Approvals
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              -8% from previous period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Compliance Score
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">
              +0.5% from previous period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="timeline" className="space-y-4">
        <TabsList>
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="patent-log">Patent Change Log</TabsTrigger>
          <TabsTrigger value="tickets">Ticketing System</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="approvals">Approval Workflow</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory Submissions</TabsTrigger>
        </TabsList>

        {/* Timeline View */}
        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Change Timeline</CardTitle>
              <CardDescription>
                Chronological view of all changes across the patent portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">
                    Timeline Visualization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive timeline showing changes over time with visual
                    indicators for critical changes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Patent Change Log */}
        <TabsContent value="patent-log" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Patent Change Log</CardTitle>
              <CardDescription>
                Detailed log entries for each change made to patent documents or
                status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Patent ID</TableHead>
                    <TableHead>Change Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Before</TableHead>
                    <TableHead>After</TableHead>
                    <TableHead>Responsible Party</TableHead>
                    <TableHead>Documents</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-04-13</TableCell>
                    <TableCell>PAT-2023-001</TableCell>
                    <TableCell>Formulation</TableCell>
                    <TableCell>Updated excipient composition</TableCell>
                    <TableCell>MCC 50%, Lactose 30%</TableCell>
                    <TableCell>MCC 45%, Lactose 35%</TableCell>
                    <TableCell>R&D Department</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-04-10</TableCell>
                    <TableCell>PAT-2022-045</TableCell>
                    <TableCell>Legal</TableCell>
                    <TableCell>Updated patent claims</TableCell>
                    <TableCell>Claim 1-5</TableCell>
                    <TableCell>Claim 1-7</TableCell>
                    <TableCell>Legal Department</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-04-05</TableCell>
                    <TableCell>PAT-2023-078</TableCell>
                    <TableCell>Administrative</TableCell>
                    <TableCell>Updated inventor information</TableCell>
                    <TableCell>3 inventors</TableCell>
                    <TableCell>4 inventors</TableCell>
                    <TableCell>Patent Office</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">
                Showing 3 of 1,248 changes
              </p>
              <div className="space-x-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Ticketing System */}
        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Ticketing System Integration</CardTitle>
                  <CardDescription>
                    Direct connection to enterprise ticketing/service management
                    system
                  </CardDescription>
                </div>
                <Button>Create New Ticket</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Assigned To</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>TKT-2024-042</TableCell>
                    <TableCell>Update formulation for Product X</TableCell>
                    <TableCell>
                      <Badge variant="secondary">In Progress</Badge>
                    </TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>2024-04-10</TableCell>
                    <TableCell>2024-04-13</TableCell>
                    <TableCell>John Smith</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>TKT-2024-041</TableCell>
                    <TableCell>Patent filing for new composition</TableCell>
                    <TableCell>
                      <Badge variant="success">Completed</Badge>
                    </TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>2024-04-05</TableCell>
                    <TableCell>2024-04-12</TableCell>
                    <TableCell>Jane Doe</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>TKT-2024-040</TableCell>
                    <TableCell>Update packaging for Product Y</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Blocked</Badge>
                    </TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>2024-04-01</TableCell>
                    <TableCell>2024-04-08</TableCell>
                    <TableCell>Mike Johnson</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Trail */}
        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Audit Trail</CardTitle>
              <CardDescription>
                Immutable record of all user actions related to changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Reason Code</TableHead>
                    <TableHead>Justification</TableHead>
                    <TableHead>Electronic Signature</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-04-13 14:32:45</TableCell>
                    <TableCell>jsmith</TableCell>
                    <TableCell>Modified Formulation</TableCell>
                    <TableCell>192.168.1.45</TableCell>
                    <TableCell>REG-001</TableCell>
                    <TableCell>
                      Updated excipient composition based on stability data
                    </TableCell>
                    <TableCell>Verified</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-04-13 14:30:12</TableCell>
                    <TableCell>jsmith</TableCell>
                    <TableCell>Viewed Document</TableCell>
                    <TableCell>192.168.1.45</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-04-13 14:28:30</TableCell>
                    <TableCell>jdoe</TableCell>
                    <TableCell>Approved Change</TableCell>
                    <TableCell>192.168.1.67</TableCell>
                    <TableCell>REG-002</TableCell>
                    <TableCell>Change meets regulatory requirements</TableCell>
                    <TableCell>Verified</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Approval Workflow */}
        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Change Approval Workflow History</CardTitle>
              <CardDescription>
                Complete record of the approval chain for each change
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 mx-auto text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">
                    Approval Workflow Visualization
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Interactive diagram showing the approval chain with
                    timestamps for each step
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Regulatory Submissions */}
        <TabsContent value="regulatory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Submission Tracking</CardTitle>
              <CardDescription>
                History of regulatory submissions related to patent changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Submission ID</TableHead>
                    <TableHead>Market</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Outcome</TableHead>
                    <TableHead>Documents</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>SUB-2024-015</TableCell>
                    <TableCell>USA</TableCell>
                    <TableCell>2024-03-15</TableCell>
                    <TableCell>Formulation Change</TableCell>
                    <TableCell>
                      <Badge variant="success">Approved</Badge>
                    </TableCell>
                    <TableCell>No further action required</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SUB-2024-014</TableCell>
                    <TableCell>EU</TableCell>
                    <TableCell>2024-03-10</TableCell>
                    <TableCell>Packaging Update</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Under Review</Badge>
                    </TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SUB-2024-013</TableCell>
                    <TableCell>Japan</TableCell>
                    <TableCell>2024-03-05</TableCell>
                    <TableCell>Labeling Change</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Rejected</Badge>
                    </TableCell>
                    <TableCell>Additional data required</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
