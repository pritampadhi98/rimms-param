"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
} from "recharts"

const trendData = [
  { year: 2018, tablets: 28, capsules: 18, injectables: 12, solutions: 8, other: 4 },
  { year: 2019, tablets: 32, capsules: 20, injectables: 14, solutions: 10, other: 5 },
  { year: 2020, tablets: 35, capsules: 22, injectables: 15, solutions: 12, other: 6 },
  { year: 2021, tablets: 38, capsules: 24, injectables: 16, solutions: 14, other: 7 },
  { year: 2022, tablets: 40, capsules: 26, injectables: 17, solutions: 15, other: 8 },
  { year: 2023, tablets: 42, capsules: 28, injectables: 18, solutions: 15, other: 8 },
]

const successRateData = [
  { name: "Tablets", rate: 92, color: "#0ea5e9" },
  { name: "Capsules", rate: 88, color: "#22c55e" },
  { name: "Injectables", rate: 75, color: "#f59e0b" },
  { name: "Oral Solutions", rate: 82, color: "#8b5cf6" },
  { name: "Topical", rate: 78, color: "#ec4899" },
  { name: "Inhalation", rate: 70, color: "#06b6d4" },
]

const developmentTimelineData = [
  { name: "Tablets", timeline: 18, color: "#0ea5e9" },
  { name: "Capsules", timeline: 20, color: "#22c55e" },
  { name: "Injectables", timeline: 28, color: "#f59e0b" },
  { name: "Oral Solutions", timeline: 22, color: "#8b5cf6" },
  { name: "Topical", timeline: 24, color: "#ec4899" },
  { name: "Inhalation", timeline: 30, color: "#06b6d4" },
]

const complexityData = [
  { name: "Low", value: 35, color: "#22c55e" },
  { name: "Medium", value: 45, color: "#f59e0b" },
  { name: "High", value: 20, color: "#ef4444" },
]

export function FormulationAnalytics() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="trends">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trends">Portfolio Trends</TabsTrigger>
          <TabsTrigger value="success">Success Rates</TabsTrigger>
          <TabsTrigger value="timeline">Development Timeline</TabsTrigger>
          <TabsTrigger value="complexity">Complexity Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Dosage Form Distribution Trends</CardTitle>
              <CardDescription>Historical trends in dosage form distribution over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="tablets" name="Tablets" fill="#0ea5e9" />
                    <Bar dataKey="capsules" name="Capsules" fill="#22c55e" />
                    <Bar dataKey="injectables" name="Injectables" fill="#f59e0b" />
                    <Bar dataKey="solutions" name="Solutions" fill="#8b5cf6" />
                    <Bar dataKey="other" name="Other" fill="#94a3b8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="success" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Success Rate Analysis</CardTitle>
              <CardDescription>Approval success rates by formulation type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={successRateData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip formatter={(value) => [`${value}%`, "Success Rate"]} />
                    <Legend />
                    <Bar dataKey="rate" name="Success Rate (%)">
                      {successRateData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Development Timeline Analytics</CardTitle>
              <CardDescription>Average development time in months by formulation type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={developmentTimelineData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip formatter={(value) => [`${value} months`, "Development Time"]} />
                    <Legend />
                    <Bar dataKey="timeline" name="Development Time (months)">
                      {developmentTimelineData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complexity" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Formulation Complexity Analysis</CardTitle>
              <CardDescription>Distribution of formulations by complexity level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={complexityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {complexityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} formulations`, "Count"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
