"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { FileText, BarChart, FileCheck } from "lucide-react"

const dissolutionData = [
  { time: 0, reference: 0, test: 0 },
  { time: 5, reference: 15, test: 12 },
  { time: 10, reference: 35, test: 32 },
  { time: 15, reference: 55, test: 51 },
  { time: 20, reference: 70, test: 68 },
  { time: 30, reference: 85, test: 82 },
  { time: 45, reference: 95, test: 93 },
  { time: 60, reference: 98, test: 97 },
]

export function BioequivalenceData() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Select Product</div>
              <Select defaultValue="cardiostat">
                <SelectTrigger>
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiostat">Cardiostat 10mg</SelectItem>
                  <SelectItem value="neurobalance">Neurobalance 25mg</SelectItem>
                  <SelectItem value="oncoshield">Oncoshield 50mg</SelectItem>
                  <SelectItem value="immunoguard">ImmunoGuard 100mg</SelectItem>
                  <SelectItem value="infectoclear">InfectoClear 250mg</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Reference Product</div>
              <Select defaultValue="reference">
                <SelectTrigger>
                  <SelectValue placeholder="Select reference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reference">Norvasc® 10mg (Pfizer)</SelectItem>
                  <SelectItem value="other">Other Reference</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Study Type</div>
              <Select defaultValue="invivo">
                <SelectTrigger>
                  <SelectValue placeholder="Select study type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="invivo">In Vivo Bioequivalence</SelectItem>
                  <SelectItem value="invitro">In Vitro Dissolution</SelectItem>
                  <SelectItem value="biowaver">BCS-Based Biowaiver</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            Study Summary
          </TabsTrigger>
          <TabsTrigger value="dissolution" className="flex items-center gap-1">
            <BarChart className="h-4 w-4" />
            Dissolution Profiles
          </TabsTrigger>
          <TabsTrigger value="parameters" className="flex items-center gap-1">
            <FileCheck className="h-4 w-4" />
            PK Parameters
          </TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bioequivalence Study Summary</CardTitle>
              <CardDescription>Study ID: BE-CARD-2023-001</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Study Details</h4>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Study Type</TableCell>
                          <TableCell>In Vivo Bioequivalence</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Design</TableCell>
                          <TableCell>Single-dose, 2-way crossover</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Subjects</TableCell>
                          <TableCell>36 healthy adults</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Fasting/Fed</TableCell>
                          <TableCell>Fasting</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Study Date</TableCell>
                          <TableCell>Jan 2023 - Mar 2023</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Status</TableCell>
                          <TableCell>
                            <Badge>Completed</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Results Summary</h4>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">AUC Ratio (90% CI)</TableCell>
                          <TableCell>98.2% (92.4% - 104.1%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Cmax Ratio (90% CI)</TableCell>
                          <TableCell>96.8% (90.5% - 103.2%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Tmax Difference</TableCell>
                          <TableCell>0.25 hr</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">BE Conclusion</TableCell>
                          <TableCell>
                            <Badge className="bg-green-500">Bioequivalent</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Regulatory Acceptance</TableCell>
                          <TableCell>
                            <Badge>FDA, EMA, PMDA</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    View Full Report
                  </Button>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dissolution" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dissolution Profile Comparison</CardTitle>
              <CardDescription>Comparative dissolution profiles in pH 6.8 phosphate buffer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dissolutionData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="time"
                      label={{ value: "Time (minutes)", position: "insideBottomRight", offset: -10 }}
                    />
                    <YAxis label={{ value: "Dissolution (%)", angle: -90, position: "insideLeft" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "0.5rem",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="reference"
                      name="Reference Product"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="test" name="Test Product" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Similarity Factor (f2)</h4>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold">82.5</div>
                  <Badge className="bg-green-500">Profiles Similar (f2 &gt; 50)</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="parameters" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Test Product (Mean ± SD)</TableHead>
                    <TableHead>Reference Product (Mean ± SD)</TableHead>
                    <TableHead>Ratio (90% CI)</TableHead>
                    <TableHead>Conclusion</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">AUC0-t (ng·h/mL)</TableCell>
                    <TableCell>152.4 ± 18.6</TableCell>
                    <TableCell>155.2 ± 19.2</TableCell>
                    <TableCell>98.2% (92.4% - 104.1%)</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Pass</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AUC0-∞ (ng·h/mL)</TableCell>
                    <TableCell>168.7 ± 20.3</TableCell>
                    <TableCell>172.1 ± 21.5</TableCell>
                    <TableCell>98.0% (91.8% - 104.5%)</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Pass</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cmax (ng/mL)</TableCell>
                    <TableCell>18.2 ± 3.1</TableCell>
                    <TableCell>18.8 ± 3.3</TableCell>
                    <TableCell>96.8% (90.5% - 103.2%)</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Pass</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tmax (h)</TableCell>
                    <TableCell>6.25 ± 1.2</TableCell>
                    <TableCell>6.0 ± 1.1</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>
                      <Badge variant="outline">Comparable</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">T1/2 (h)</TableCell>
                    <TableCell>35.2 ± 4.8</TableCell>
                    <TableCell>36.1 ± 5.2</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>
                      <Badge variant="outline">Comparable</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
