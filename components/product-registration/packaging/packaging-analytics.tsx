"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

interface FilterProps {
  searchQuery: string
  therapeuticArea: string
  formulation: string
  market: string
}

const packagingDistributionData = [
  { name: "Blister Packs", value: 42, color: "#0ea5e9" },
  { name: "Bottles", value: 28, color: "#22c55e" },
  { name: "Vials", value: 18, color: "#f59e0b" },
  { name: "Inhalers", value: 12, color: "#8b5cf6" },
  { name: "Tubes", value: 8, color: "#ec4899" },
  { name: "Sachets", value: 5, color: "#06b6d4" },
  { name: "Other", value: 3, color: "#94a3b8" },
]

const marketApprovalData = [
  { region: "North America", approved: 92, pending: 8, rejected: 0 },
  { region: "European Union", approved: 85, pending: 12, rejected: 3 },
  { region: "Asia Pacific", approved: 78, pending: 15, rejected: 7 },
  { region: "Latin America", approved: 65, pending: 25, rejected: 10 },
  { region: "Middle East & Africa", approved: 58, pending: 30, rejected: 12 },
]

const complianceTrendData = [
  { month: "Jan", compliance: 88 },
  { month: "Feb", compliance: 90 },
  { month: "Mar", compliance: 89 },
  { month: "Apr", compliance: 92 },
  { month: "May", compliance: 94 },
  { month: "Jun", compliance: 95 },
]

const supplierPerformanceData = [
  { name: "PackageCorp Inc.", performance: 92, onTime: 95, quality: 90, cost: 88 },
  { name: "ContainerTech Inc.", performance: 88, onTime: 85, quality: 92, cost: 90 },
  { name: "BoxMakers Ltd.", performance: 95, onTime: 98, quality: 94, cost: 92 },
  { name: "GlassMed Inc.", performance: 78, onTime: 75, quality: 85, cost: 80 },
  { name: "InhaleTech Corp.", performance: 90, onTime: 92, quality: 88, cost: 85 },
]

export function PackagingAnalytics({ searchQuery, therapeuticArea, formulation, market }: FilterProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="distribution">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="distribution">Packaging Distribution</TabsTrigger>
          <TabsTrigger value="approvals">Market Approvals</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Trends</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="distribution" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Packaging Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={packagingDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {packagingDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} configurations`, "Count"]} />
                    <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approvals" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Approval Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketApprovalData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="approved" name="Approved" stackId="a" fill="#22c55e" />
                    <Bar dataKey="pending" name="Pending" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="rejected" name="Rejected" stackId="a" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Rate Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={complianceTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[80, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, "Compliance Rate"]} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="compliance"
                      name="Compliance Rate"
                      stroke="#0ea5e9"
                      strokeWidth={2}
                      dot={{ r: 5 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={supplierPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, ""]} />
                    <Legend />
                    <Bar dataKey="performance" name="Overall Performance" fill="#0ea5e9" />
                    <Bar dataKey="onTime" name="On-Time Delivery" fill="#22c55e" />
                    <Bar dataKey="quality" name="Quality Rating" fill="#f59e0b" />
                    <Bar dataKey="cost" name="Cost Efficiency" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
