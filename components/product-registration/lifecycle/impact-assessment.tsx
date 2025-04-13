import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, HelpCircle } from "lucide-react"

export function ImpactAssessment() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Change Impact Assessment</CardTitle>
          <CardDescription>
            Evaluate the impact of proposed changes across markets and regulatory requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Market</TableHead>
                <TableHead>Regulatory Classification</TableHead>
                <TableHead>Submission Type</TableHead>
                <TableHead>Timeline</TableHead>
                <TableHead>Impact Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>United States</TableCell>
                <TableCell>CBE-30</TableCell>
                <TableCell>Changes Being Effected (30 days)</TableCell>
                <TableCell>30 days</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>European Union</TableCell>
                <TableCell>Type IB</TableCell>
                <TableCell>Variation</TableCell>
                <TableCell>60 days</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Japan</TableCell>
                <TableCell>Partial Change</TableCell>
                <TableCell>Partial Change Application</TableCell>
                <TableCell>6-12 months</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800">High</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Canada</TableCell>
                <TableCell>Level II</TableCell>
                <TableCell>Notifiable Change</TableCell>
                <TableCell>60 days</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Australia</TableCell>
                <TableCell>C1</TableCell>
                <TableCell>Self-Assessable Request</TableCell>
                <TableCell>Immediate</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">Low</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
            <CardDescription>Potential risks associated with the proposed change</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Supply Chain Disruption</h4>
                  <p className="text-sm text-muted-foreground">Potential for 2-3 week supply gap in EU markets</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Regulatory Approval Delays</h4>
                  <p className="text-sm text-muted-foreground">Japan approval may take longer than anticipated</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Documentation Updates</h4>
                  <p className="text-sm text-muted-foreground">Multiple documents will require revision</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Quality Impact</h4>
                  <p className="text-sm text-muted-foreground">No anticipated impact on product quality</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Requirements</CardTitle>
            <CardDescription>Estimated resources needed to implement the change</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Resource Type</TableHead>
                  <TableHead>Estimated Effort</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Regulatory Affairs</TableCell>
                  <TableCell>120 person-hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quality Assurance</TableCell>
                  <TableCell>80 person-hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Manufacturing</TableCell>
                  <TableCell>160 person-hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Documentation</TableCell>
                  <TableCell>40 person-hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Testing/Validation</TableCell>
                  <TableCell>100 person-hours</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cost-Benefit Analysis</CardTitle>
          <CardDescription>Financial assessment of the proposed change</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Implementation Costs</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cost Category</TableHead>
                    <TableHead>Estimated Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Regulatory Submissions</TableCell>
                    <TableCell>$85,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Manufacturing Changes</TableCell>
                    <TableCell>$120,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Documentation Updates</TableCell>
                    <TableCell>$30,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Testing & Validation</TableCell>
                    <TableCell>$65,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Costs</TableCell>
                    <TableCell className="font-medium">$300,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h4 className="font-medium mb-2">Expected Benefits</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Benefit Category</TableHead>
                    <TableHead>Estimated Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Manufacturing Efficiency</TableCell>
                    <TableCell>$180,000/year</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Reduced Quality Issues</TableCell>
                    <TableCell>$95,000/year</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Supply Chain Improvements</TableCell>
                    <TableCell>$120,000/year</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Extended Product Lifecycle</TableCell>
                    <TableCell>$250,000/year</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Total Annual Benefits</TableCell>
                    <TableCell className="font-medium">$645,000/year</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="font-medium">Positive ROI Expected</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Estimated payback period: 5.6 months</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
