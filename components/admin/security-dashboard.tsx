"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertTriangle, CheckCircle, Clock, Download, Users } from "lucide-react"

export function SecurityDashboard() {
  const securityScore = 85

  const securityEvents = [
    {
      id: "event-1",
      type: "Failed Login",
      user: "john.smith@example.com",
      timestamp: "2023-09-10T14:32:15Z",
      details: "Multiple failed login attempts",
      severity: "high",
    },
    {
      id: "event-2",
      type: "Permission Change",
      user: "admin@example.com",
      timestamp: "2023-09-09T11:15:42Z",
      details: "Modified role permissions for Regulatory Specialist",
      severity: "medium",
    },
    {
      id: "event-3",
      type: "Data Export",
      user: "jane.doe@example.com",
      timestamp: "2023-09-08T16:45:22Z",
      details: "Exported submission data for EU region",
      severity: "low",
    },
    {
      id: "event-4",
      type: "Account Locked",
      user: "robert.johnson@example.com",
      timestamp: "2023-09-07T09:12:33Z",
      details: "Account locked after 5 failed login attempts",
      severity: "medium",
    },
    {
      id: "event-5",
      type: "Unusual Access",
      user: "sarah.williams@example.com",
      timestamp: "2023-09-06T22:05:17Z",
      details: "Access from unrecognized location",
      severity: "high",
    },
  ]

  const complianceChecks = [
    {
      id: "check-1",
      name: "21 CFR Part 11 Compliance",
      status: "passed",
      lastCheck: "2023-09-05T10:30:00Z",
      details: "All electronic records and signatures compliant",
    },
    {
      id: "check-2",
      name: "GDPR Data Protection",
      status: "passed",
      lastCheck: "2023-09-05T10:30:00Z",
      details: "Personal data handling procedures compliant",
    },
    {
      id: "check-3",
      name: "Audit Trail Completeness",
      status: "warning",
      lastCheck: "2023-09-05T10:30:00Z",
      details: "Minor gaps detected in audit trail records",
    },
    {
      id: "check-4",
      name: "Data Encryption",
      status: "passed",
      lastCheck: "2023-09-05T10:30:00Z",
      details: "All sensitive data properly encrypted",
    },
    {
      id: "check-5",
      name: "Access Control Review",
      status: "failed",
      lastCheck: "2023-09-05T10:30:00Z",
      details: "3 user accounts with excessive permissions",
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">{securityScore}%</div>
              <Progress value={securityScore} className="w-full" />
              <p className="text-sm text-muted-foreground mt-2">
                {securityScore >= 80 ? "Good" : securityScore >= 60 ? "Fair" : "Poor"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-8 w-8 mr-4 text-primary" />
              <div>
                <div className="text-3xl font-bold">86</div>
                <p className="text-sm text-muted-foreground">12 new this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Security Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 mr-4 text-destructive" />
              <div>
                <div className="text-3xl font-bold">3</div>
                <p className="text-sm text-muted-foreground">High severity this week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="events" className="space-y-4">
        <TabsList>
          <TabsTrigger value="events">Security Events</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Status</TabsTrigger>
          <TabsTrigger value="penetration">Penetration Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
              <CardDescription>Security incidents and events requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Severity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {securityEvents.map((event) => (
                    <TableRow key={event.id}>
                      <TableCell>{event.type}</TableCell>
                      <TableCell>{event.user}</TableCell>
                      <TableCell>{formatDate(event.timestamp)}</TableCell>
                      <TableCell>{event.details}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            event.severity === "high"
                              ? "destructive"
                              : event.severity === "medium"
                                ? "default"
                                : "outline"
                          }
                        >
                          {event.severity}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Status of regulatory compliance checks</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Check</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Check</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {complianceChecks.map((check) => (
                    <TableRow key={check.id}>
                      <TableCell>{check.name}</TableCell>
                      <TableCell>
                        {check.status === "passed" ? (
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span>Passed</span>
                          </div>
                        ) : check.status === "warning" ? (
                          <div className="flex items-center">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                            <span>Warning</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <AlertTriangle className="h-4 w-4 text-destructive mr-2" />
                            <span>Failed</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{formatDate(check.lastCheck)}</TableCell>
                      <TableCell>{check.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="penetration">
          <Card>
            <CardHeader>
              <CardTitle>Penetration Testing Results</CardTitle>
              <CardDescription>Results from the latest security assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Last Assessment</h3>
                  <p className="text-sm text-muted-foreground">August 15, 2023</p>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Critical Vulnerabilities</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">High Vulnerabilities</span>
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Medium Vulnerabilities</span>
                    <span className="text-sm font-medium">5</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Low Vulnerabilities</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Remediation Status</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-2">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">8 Fixed</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-2">
                      <Clock className="h-6 w-6 text-amber-500" />
                    </div>
                    <span className="text-sm font-medium">7 In Progress</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mb-2">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="text-sm font-medium">4 Pending</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
