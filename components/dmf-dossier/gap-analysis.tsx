"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, Download, FileText, Search } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function GapAnalysis() {
  const [activeTab, setActiveTab] = useState("analysis")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Gap Analysis Utilities</CardTitle>
        <CardDescription>
          Identify and analyze gaps between different regulatory submissions and requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="analysis" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analysis">Gap Analysis</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="analysis" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Source Submission</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select source submission</option>
                  <option value="anda-2023-0045">ANDA-2023-0045 (Product A)</option>
                  <option value="nda-2023-0018">NDA-2023-0018 (Product C)</option>
                  <option value="maa-2023-0032">MAA-2023-0032 (Product B)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Region/Requirements</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select target region</option>
                  <option value="us-fda">US FDA</option>
                  <option value="eu-ema">EU EMA</option>
                  <option value="japan-pmda">Japan PMDA</option>
                  <option value="canada-health">Health Canada</option>
                  <option value="uk-mhra">UK MHRA</option>
                </select>
              </div>
            </div>
            <Button className="mb-4">
              <Search className="h-4 w-4 mr-2" />
              Run Gap Analysis
            </Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Requirement</TableHead>
                  <TableHead>Module</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Gap Severity</TableHead>
                  <TableHead>Recommendation</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gapData.map((gap) => (
                  <TableRow key={gap.id}>
                    <TableCell className="font-medium">{gap.requirement}</TableCell>
                    <TableCell>{gap.module}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(gap.status)}>{gap.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getSeverityVariant(gap.severity)}>{gap.severity}</Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate" title={gap.recommendation}>
                      {gap.recommendation}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="requirements" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Regional Requirements</h3>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">US FDA Requirements</h4>
                <p className="text-sm text-muted-foreground mb-4">Requirements specific to US FDA submissions</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Module 3.2.P.3 - Manufacturing Process</span>
                    <Badge variant="outline">Critical</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Module 3.2.P.5 - Control of Drug Product</span>
                    <Badge variant="outline">Critical</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Module 3.2.P.8 - Stability</span>
                    <Badge variant="outline">Important</Badge>
                  </div>
                </div>
              </div>
              <div className="border rounded-md p-4">
                <h4 className="font-medium mb-2">EU EMA Requirements</h4>
                <p className="text-sm text-muted-foreground mb-4">Requirements specific to EU EMA submissions</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Module 3.2.P.3 - Manufacturing Process</span>
                    <Badge variant="outline">Critical</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Module 3.2.P.5 - Control of Drug Product</span>
                    <Badge variant="outline">Critical</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Module 3.2.P.8 - Stability</span>
                    <Badge variant="outline">Critical</Badge>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                    Complete
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">65%</div>
                  <p className="text-sm text-muted-foreground">Requirements met</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-amber-500" />
                    Partial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">25%</div>
                  <p className="text-sm text-muted-foreground">Requirements partially met</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                    Missing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">10%</div>
                  <p className="text-sm text-muted-foreground">Requirements missing</p>
                </CardContent>
              </Card>
            </div>
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium mb-4">Gap Analysis Summary</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Module 3 - Quality</span>
                    <span className="text-sm text-muted-foreground">75% complete</span>
                  </div>
                  <Progress value={75} className="h-2 mb-1" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>15 requirements met</span>
                    <span>5 requirements missing</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Module 4 - Nonclinical</span>
                    <span className="text-sm text-muted-foreground">90% complete</span>
                  </div>
                  <Progress value={90} className="h-2 mb-1" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>9 requirements met</span>
                    <span>1 requirement missing</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Module 5 - Clinical</span>
                    <span className="text-sm text-muted-foreground">60% complete</span>
                  </div>
                  <Progress value={60} className="h-2 mb-1" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>12 requirements met</span>
                    <span>8 requirements missing</span>
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

const gapData = [
  {
    id: 1,
    requirement: "Manufacturing Process Validation",
    module: "Module 3.2.P.3",
    status: "Missing",
    severity: "Critical",
    recommendation: "Add process validation data according to ICH Q8 guidelines",
  },
  {
    id: 2,
    requirement: "Stability Data",
    module: "Module 3.2.P.8",
    status: "Partial",
    severity: "Major",
    recommendation: "Include additional long-term stability data for 36 months",
  },
  {
    id: 3,
    requirement: "Control Strategy",
    module: "Module 3.2.P.5",
    status: "Complete",
    severity: "None",
    recommendation: "No action required",
  },
  {
    id: 4,
    requirement: "Container Closure System",
    module: "Module 3.2.P.7",
    status: "Partial",
    severity: "Minor",
    recommendation: "Add extractables and leachables data",
  },
]

function getStatusVariant(status: string): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "Complete":
      return "default"
    case "Partial":
      return "secondary"
    case "Missing":
      return "destructive"
    default:
      return "outline"
  }
}

function getSeverityVariant(severity: string): "default" | "secondary" | "destructive" | "outline" {
  switch (severity) {
    case "Critical":
      return "destructive"
    case "Major":
      return "secondary"
    case "Minor":
      return "outline"
    case "None":
      return "default"
    default:
      return "outline"
  }
}
