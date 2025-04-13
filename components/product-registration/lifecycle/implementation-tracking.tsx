import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, FileText } from "lucide-react"

export function ImplementationTracking() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Change Implementation Tracking</CardTitle>
          <CardDescription>Monitor the progress of change implementation across markets and functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Overall Implementation Progress</h3>
                <span className="text-sm font-medium">68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Implementation Phase</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Planning & Documentation</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={100} className="w-[60px]" />
                      <span className="text-xs">100%</span>
                    </div>
                  </TableCell>
                  <TableCell>Mar 15, 2024</TableCell>
                  <TableCell>J. Smith</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Regulatory Submissions</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={75} className="w-[60px]" />
                      <span className="text-xs">75%</span>
                    </div>
                  </TableCell>
                  <TableCell>May 30, 2024</TableCell>
                  <TableCell>A. Johnson</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Manufacturing Implementation</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={60} className="w-[60px]" />
                      <span className="text-xs">60%</span>
                    </div>
                  </TableCell>
                  <TableCell>Jun 15, 2024</TableCell>
                  <TableCell>R. Williams</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Quality Validation</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800">Not Started</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={0} className="w-[60px]" />
                      <span className="text-xs">0%</span>
                    </div>
                  </TableCell>
                  <TableCell>Jul 30, 2024</TableCell>
                  <TableCell>M. Brown</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Market Release</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800">Not Started</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={0} className="w-[60px]" />
                      <span className="text-xs">0%</span>
                    </div>
                  </TableCell>
                  <TableCell>Sep 15, 2024</TableCell>
                  <TableCell>L. Davis</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Market Implementation Status</CardTitle>
            <CardDescription>Implementation progress by market</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Market</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Target Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>United States</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={80} className="w-[60px]" />
                      <span className="text-xs">80%</span>
                    </div>
                  </TableCell>
                  <TableCell>Jun 30, 2024</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>European Union</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={65} className="w-[60px]" />
                      <span className="text-xs">65%</span>
                    </div>
                  </TableCell>
                  <TableCell>Jul 15, 2024</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Japan</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={40} className="w-[60px]" />
                      <span className="text-xs">40%</span>
                    </div>
                  </TableCell>
                  <TableCell>Aug 30, 2024</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Canada</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={70} className="w-[60px]" />
                      <span className="text-xs">70%</span>
                    </div>
                  </TableCell>
                  <TableCell>Jun 15, 2024</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Australia</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={100} className="w-[60px]" />
                      <span className="text-xs">100%</span>
                    </div>
                  </TableCell>
                  <TableCell>Apr 30, 2024</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementation Issues</CardTitle>
            <CardDescription>Active issues affecting implementation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-md">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">EU Regulatory Delay</h4>
                    <p className="text-sm text-muted-foreground">Additional information requested by EMA</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">High Priority</Badge>
                      <span className="text-xs text-muted-foreground">Opened 5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 border rounded-md">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Manufacturing Equipment Calibration</h4>
                    <p className="text-sm text-muted-foreground">Calibration taking longer than expected</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">Medium Priority</Badge>
                      <span className="text-xs text-muted-foreground">Opened 3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 border rounded-md">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Documentation Translation</h4>
                    <p className="text-sm text-muted-foreground">Translation for Asian markets delayed</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">Low Priority</Badge>
                      <span className="text-xs text-muted-foreground">Opened 7 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Documentation</CardTitle>
          <CardDescription>Key documents related to change implementation</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Change Control Plan</span>
                  </div>
                </TableCell>
                <TableCell>v2.3</TableCell>
                <TableCell>Apr 10, 2024</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Approved</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Regulatory Submission Package</span>
                  </div>
                </TableCell>
                <TableCell>v1.5</TableCell>
                <TableCell>Apr 15, 2024</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Approved</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Manufacturing Change Protocol</span>
                  </div>
                </TableCell>
                <TableCell>v2.0</TableCell>
                <TableCell>Apr 20, 2024</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Approved</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Validation Protocol</span>
                  </div>
                </TableCell>
                <TableCell>v1.2</TableCell>
                <TableCell>Apr 25, 2024</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">In Review</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Market Release Plan</span>
                  </div>
                </TableCell>
                <TableCell>v1.0</TableCell>
                <TableCell>Apr 28, 2024</TableCell>
                <TableCell>
                  <Badge className="bg-purple-100 text-purple-800">Draft</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
