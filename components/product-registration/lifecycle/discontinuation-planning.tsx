import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Calendar, CheckCircle, Clock, FileText } from "lucide-react"

export function DiscontinuationPlanning() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Product Discontinuation Planning</CardTitle>
          <CardDescription>Manage and track product discontinuations across markets</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="planned">
            <TabsList className="mb-4">
              <TabsTrigger value="planned">Planned Discontinuations</TabsTrigger>
              <TabsTrigger value="inProgress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="planned">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Markets</TableHead>
                    <TableHead>Planned Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Rimadol 25mg Tablets</TableCell>
                    <TableCell>US, Canada, EU</TableCell>
                    <TableCell>Dec 31, 2024</TableCell>
                    <TableCell>Portfolio optimization</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">Planning</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Plan
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 10mg Capsules</TableCell>
                    <TableCell>Japan, Australia</TableCell>
                    <TableCell>Mar 15, 2025</TableCell>
                    <TableCell>Low market demand</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">Planning</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Plan
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="inProgress">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Markets</TableHead>
                    <TableHead>Notification Date</TableHead>
                    <TableHead>Last Supply Date</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Neurofen 5mg Tablets</TableCell>
                    <TableCell>EU, UK, Switzerland</TableCell>
                    <TableCell>Jan 15, 2024</TableCell>
                    <TableCell>Jul 15, 2024</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={65} className="w-[60px]" />
                        <span className="text-xs">65%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rimadol Oral Solution</TableCell>
                    <TableCell>US, Canada</TableCell>
                    <TableCell>Nov 10, 2023</TableCell>
                    <TableCell>May 10, 2024</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={85} className="w-[60px]" />
                        <span className="text-xs">85%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="completed">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Markets</TableHead>
                    <TableHead>Discontinuation Date</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Archive Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 5mg Tablets</TableCell>
                    <TableCell>Global</TableCell>
                    <TableCell>Oct 31, 2023</TableCell>
                    <TableCell>Manufacturing issues</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Archived</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View History
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rimadol Injection</TableCell>
                    <TableCell>US, EU, Japan</TableCell>
                    <TableCell>Jun 15, 2023</TableCell>
                    <TableCell>Portfolio rationalization</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Archived</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View History
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="impact">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Market Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Revenue Impact</span>
                          <span className="text-sm font-medium">$2.4M</span>
                        </div>
                        <Progress value={15} className="h-2" />
                        <span className="text-xs text-muted-foreground">15% of portfolio revenue</span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Patient Impact</span>
                          <span className="text-sm font-medium">12,500</span>
                        </div>
                        <Progress value={8} className="h-2" />
                        <span className="text-xs text-muted-foreground">8% of patient base</span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Market Share Loss</span>
                          <span className="text-sm font-medium">3.2%</span>
                        </div>
                        <Progress value={20} className="h-2" />
                        <span className="text-xs text-muted-foreground">20% of therapeutic area</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Regulatory Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">5 markets require 6+ months notice</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">3 markets require alternative treatment plans</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">2 markets have specific timing restrictions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">4 markets have simplified procedures</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Alternative Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Discontinued Product</TableHead>
                        <TableHead>Alternative Product</TableHead>
                        <TableHead>Therapeutic Equivalence</TableHead>
                        <TableHead>Market Availability</TableHead>
                        <TableHead>Supply Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Rimadol 25mg Tablets</TableCell>
                        <TableCell>Rimadol 50mg Tablets (half dose)</TableCell>
                        <TableCell>Full</TableCell>
                        <TableCell>All markets</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">Sufficient</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Neurofen 5mg Tablets</TableCell>
                        <TableCell>Neurofen XR 10mg (adjusted dosing)</TableCell>
                        <TableCell>Partial</TableCell>
                        <TableCell>EU, US only</TableCell>
                        <TableCell>
                          <Badge className="bg-amber-100 text-amber-800">Limited</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Discontinuation Timeline</CardTitle>
            <CardDescription>Key milestones for product discontinuations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                    1
                  </div>
                  <div className="h-12 w-0.5 bg-blue-200 my-1"></div>
                </div>
                <div>
                  <h4 className="font-medium">Decision & Planning</h4>
                  <p className="text-sm text-muted-foreground">Internal decision, impact assessment, and planning</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">2-3 months</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                    2
                  </div>
                  <div className="h-12 w-0.5 bg-amber-200 my-1"></div>
                </div>
                <div>
                  <h4 className="font-medium">Regulatory Notification</h4>
                  <p className="text-sm text-muted-foreground">Notify health authorities of discontinuation plans</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Varies by market (1-12 months)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                    3
                  </div>
                  <div className="h-12 w-0.5 bg-purple-200 my-1"></div>
                </div>
                <div>
                  <h4 className="font-medium">Stakeholder Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Inform healthcare providers, patients, and distributors
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">3-6 months before last supply</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Final Distribution & Archiving</h4>
                  <p className="text-sm text-muted-foreground">Last product distribution and regulatory archiving</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Final phase</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Discontinuation Checklist</CardTitle>
            <CardDescription>Key tasks for successful product discontinuation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border flex items-center justify-center bg-green-50 border-green-200">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
                <span className="text-sm">Internal decision documentation</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border flex items-center justify-center bg-green-50 border-green-200">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                </div>
                <span className="text-sm">Financial impact assessment</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border flex items-center justify-center bg-amber-50 border-amber-200">
                  <Clock className="h-3 w-3 text-amber-500" />
                </div>
                <span className="text-sm">Regulatory notification planning</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border flex items-center justify-center bg-amber-50 border-amber-200">
                  <Clock className="h-3 w-3 text-amber-500" />
                </div>
                <span className="text-sm">Healthcare provider communication</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border border-gray-200"></div>
                <span className="text-sm">Patient support program transition</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border border-gray-200"></div>
                <span className="text-sm">Supply chain notification</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border border-gray-200"></div>
                <span className="text-sm">Inventory management plan</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded border border-gray-200"></div>
                <span className="text-sm">Regulatory documentation archiving</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
