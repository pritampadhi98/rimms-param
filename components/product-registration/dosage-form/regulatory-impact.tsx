"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const impactData = [
  {
    change: "Excipient Change",
    highImpact: 28,
    mediumImpact: 42,
    lowImpact: 30,
    markets: ["United States", "European Union", "Japan", "China", "Brazil"],
  },
  {
    change: "Manufacturing Site",
    highImpact: 35,
    mediumImpact: 45,
    lowImpact: 20,
    markets: ["United States", "European Union", "Japan", "Canada", "Australia"],
  },
  {
    change: "Specification Update",
    highImpact: 15,
    mediumImpact: 35,
    lowImpact: 50,
    markets: ["United States", "European Union", "United Kingdom", "Switzerland", "Canada"],
  },
  {
    change: "Process Parameter",
    highImpact: 20,
    mediumImpact: 40,
    lowImpact: 40,
    markets: ["United States", "European Union", "Japan", "South Korea", "Australia"],
  },
  {
    change: "Analytical Method",
    highImpact: 10,
    mediumImpact: 30,
    lowImpact: 60,
    markets: ["United States", "European Union", "Canada", "Brazil", "Mexico"],
  },
]

const predictiveData = [
  {
    change: "Excipient Change",
    approvalRate: 75,
    avgTime: 6,
    riskLevel: "Medium",
  },
  {
    change: "Manufacturing Site",
    approvalRate: 82,
    avgTime: 8,
    riskLevel: "High",
  },
  {
    change: "Specification Update",
    approvalRate: 92,
    avgTime: 4,
    riskLevel: "Low",
  },
  {
    change: "Process Parameter",
    approvalRate: 88,
    avgTime: 5,
    riskLevel: "Medium",
  },
  {
    change: "Analytical Method",
    approvalRate: 95,
    avgTime: 3,
    riskLevel: "Low",
  },
]

const resourceData = [
  { name: "Documentation", value: 35, color: "#0ea5e9" },
  { name: "Testing", value: 25, color: "#22c55e" },
  { name: "Regulatory Affairs", value: 20, color: "#f59e0b" },
  { name: "Quality Assurance", value: 15, color: "#8b5cf6" },
  { name: "Manufacturing", value: 5, color: "#ec4899" },
]

export function RegulatoryImpactAssessment() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="impact">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="impact">Impact Assessment</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Analytics</TabsTrigger>
          <TabsTrigger value="resource">Resource Requirements</TabsTrigger>
        </TabsList>

        <TabsContent value="impact" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Impact Assessment</CardTitle>
              <CardDescription>Impact visualization when formulation changes occur</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="change" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="highImpact" name="High Impact" fill="#ef4444" />
                    <Bar dataKey="mediumImpact" name="Medium Impact" fill="#f59e0b" />
                    <Bar dataKey="lowImpact" name="Low Impact" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Key Markets Affected</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Change Type</TableHead>
                      <TableHead>Top Affected Markets</TableHead>
                      <TableHead>Impact Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {impactData.map((item) => (
                      <TableRow key={item.change}>
                        <TableCell className="font-medium">{item.change}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {item.markets.map((market) => (
                              <Badge key={market} variant="outline" className="text-xs">
                                {market}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              item.highImpact > 30
                                ? "bg-red-500"
                                : item.mediumImpact > 40
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }
                          >
                            {item.highImpact > 30 ? "High" : item.mediumImpact > 40 ? "Medium" : "Low"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictive" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Predictive Analytics for Variations</CardTitle>
              <CardDescription>Approval predictions based on historical data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={predictiveData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="change" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 12]} />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="approvalRate" name="Approval Rate (%)" fill="#0ea5e9" />
                    <Bar yAxisId="right" dataKey="avgTime" name="Avg. Approval Time (months)" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Predictive Analysis Details</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Change Type</TableHead>
                      <TableHead>Approval Rate</TableHead>
                      <TableHead>Avg. Time (months)</TableHead>
                      <TableHead>Risk Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {predictiveData.map((item) => (
                      <TableRow key={item.change}>
                        <TableCell className="font-medium">{item.change}</TableCell>
                        <TableCell>{item.approvalRate}%</TableCell>
                        <TableCell>{item.avgTime}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              item.riskLevel === "High"
                                ? "bg-red-500"
                                : item.riskLevel === "Medium"
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }
                          >
                            {item.riskLevel}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resource" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Requirement Projections</CardTitle>
              <CardDescription>Estimated resource needs for formulation changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={resourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {resourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Resource Allocation"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Resource Allocation by Change Type</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Change Type</TableHead>
                        <TableHead>Est. Person-Days</TableHead>
                        <TableHead>Lead Time (weeks)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Excipient Change</TableCell>
                        <TableCell>45-60</TableCell>
                        <TableCell>12-16</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Manufacturing Site</TableCell>
                        <TableCell>60-90</TableCell>
                        <TableCell>16-24</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Specification Update</TableCell>
                        <TableCell>20-30</TableCell>
                        <TableCell>8-12</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Process Parameter</TableCell>
                        <TableCell>30-45</TableCell>
                        <TableCell>10-14</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Analytical Method</TableCell>
                        <TableCell>15-25</TableCell>
                        <TableCell>6-10</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
