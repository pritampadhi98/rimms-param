import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Globe, FileText, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function MarketAuthorization() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Market Authorization Intelligence</CardTitle>
          <CardDescription>Track market authorizations across regions and countries</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Authorizations</TabsTrigger>
              <TabsTrigger value="pending">Pending Submissions</TabsTrigger>
              <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
              <TabsTrigger value="variations">Variations</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>Authorization Number</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Rimadol 50mg</TableCell>
                    <TableCell>United States</TableCell>
                    <TableCell>NDA-123456</TableCell>
                    <TableCell>Jan 15, 2022</TableCell>
                    <TableCell>Jan 15, 2027</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rimadol 100mg</TableCell>
                    <TableCell>European Union</TableCell>
                    <TableCell>EU/1/22/1234</TableCell>
                    <TableCell>Mar 10, 2022</TableCell>
                    <TableCell>Mar 10, 2027</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 25mg</TableCell>
                    <TableCell>Japan</TableCell>
                    <TableCell>JP-22345-A</TableCell>
                    <TableCell>Sep 5, 2021</TableCell>
                    <TableCell>Sep 5, 2026</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="pending">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>Submission Type</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>Expected Approval</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Rimadol XR 75mg</TableCell>
                    <TableCell>Canada</TableCell>
                    <TableCell>NDS</TableCell>
                    <TableCell>Nov 12, 2023</TableCell>
                    <TableCell>May 12, 2024</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 50mg</TableCell>
                    <TableCell>Brazil</TableCell>
                    <TableCell>New Registration</TableCell>
                    <TableCell>Oct 3, 2023</TableCell>
                    <TableCell>Jul 3, 2024</TableCell>
                    <TableCell>
                      <Badge className="bg-blue-100 text-blue-800">Information Request</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="expiring">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <span className="text-sm font-medium">5 authorizations expiring in the next 6 months</span>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Country/Region</TableHead>
                      <TableHead>Authorization Number</TableHead>
                      <TableHead>Expiry Date</TableHead>
                      <TableHead>Days Remaining</TableHead>
                      <TableHead>Renewal Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Neurofen 20mg</TableCell>
                      <TableCell>Australia</TableCell>
                      <TableCell>AUST-R-12345</TableCell>
                      <TableCell>Jun 30, 2024</TableCell>
                      <TableCell>120</TableCell>
                      <TableCell>
                        <Badge className="bg-orange-100 text-orange-800">Renewal Needed</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Initiate Renewal
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Rimadol 25mg</TableCell>
                      <TableCell>United Kingdom</TableCell>
                      <TableCell>PL 12345/0001</TableCell>
                      <TableCell>Jul 15, 2024</TableCell>
                      <TableCell>135</TableCell>
                      <TableCell>
                        <Badge className="bg-purple-100 text-purple-800">Renewal In Progress</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View Status
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="variations">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>Variation Type</TableHead>
                    <TableHead>Submission Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat 25mg</TableCell>
                    <TableCell>European Union</TableCell>
                    <TableCell>Type II - Manufacturing Change</TableCell>
                    <TableCell>Feb 10, 2024</TableCell>
                    <TableCell>
                      <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rimadol 50mg</TableCell>
                    <TableCell>United States</TableCell>
                    <TableCell>CBE-30 - Labeling Change</TableCell>
                    <TableCell>Jan 5, 2024</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">Approved</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Global Market Coverage</CardTitle>
            <CardDescription>Current authorization status across regions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
              <Globe className="h-16 w-16 text-muted-foreground/50" />
              <span className="ml-2 text-muted-foreground">Interactive map visualization</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Authorized (42)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <span className="text-sm">Pending (15)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <span className="text-sm">Not Authorized (28)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-sm">Planned (10)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regulatory Requirements</CardTitle>
            <CardDescription>Upcoming regulatory commitments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-medium">PSUR Submission</p>
                    <p className="text-sm text-muted-foreground">Rimadol - European Union</p>
                  </div>
                </div>
                <Badge>Due in 30 days</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Annual Report</p>
                    <p className="text-sm text-muted-foreground">Cardiostat - United States</p>
                  </div>
                </div>
                <Badge>Due in 45 days</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">Post-Approval Commitment</p>
                    <p className="text-sm text-muted-foreground">Neurofen - Japan</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Completed</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">Safety Update</p>
                    <p className="text-sm text-muted-foreground">Multiple Products - Global</p>
                  </div>
                </div>
                <Badge variant="destructive">Overdue</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
