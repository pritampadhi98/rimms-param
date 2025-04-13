"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Badge } from "@/components/ui/badge"

const penetrationData = [
  { region: "North America", tablets: 92, capsules: 88, injectables: 75, solutions: 82, topical: 78 },
  { region: "European Union", tablets: 88, capsules: 85, injectables: 72, solutions: 78, topical: 75 },
  { region: "Asia Pacific", tablets: 75, capsules: 70, injectables: 65, solutions: 68, topical: 62 },
  { region: "Latin America", tablets: 65, capsules: 60, injectables: 52, solutions: 58, topical: 55 },
  { region: "Middle East & Africa", tablets: 55, capsules: 50, injectables: 45, solutions: 48, topical: 42 },
]

const gapAnalysisData = [
  { market: "United States", coverage: 92, gap: 8 },
  { market: "European Union", coverage: 85, gap: 15 },
  { market: "Japan", coverage: 78, gap: 22 },
  { market: "China", coverage: 65, gap: 35 },
  { market: "Brazil", coverage: 58, gap: 42 },
  { market: "Russia", coverage: 52, gap: 48 },
  { market: "India", coverage: 48, gap: 52 },
  { market: "Australia", coverage: 72, gap: 28 },
]

const approvalTimelineData = [
  { year: 2018, na: 12, eu: 18, apac: 24, latam: 30, mea: 36 },
  { year: 2019, na: 11, eu: 17, apac: 22, latam: 28, mea: 34 },
  { year: 2020, na: 12, eu: 18, apac: 23, latam: 29, mea: 35 },
  { year: 2021, na: 10, eu: 16, apac: 21, latam: 26, mea: 32 },
  { year: 2022, na: 9, eu: 15, apac: 20, latam: 25, mea: 30 },
  { year: 2023, na: 8, eu: 14, apac: 19, latam: 24, mea: 28 },
]

export function MarketCoverageAnalysis() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="penetration">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="penetration">Market Penetration</TabsTrigger>
          <TabsTrigger value="gap">Gap Analysis</TabsTrigger>
          <TabsTrigger value="timeline">Approval Timelines</TabsTrigger>
        </TabsList>

        <TabsContent value="penetration" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Penetration by Formulation Type</CardTitle>
              <CardDescription>Percentage of markets where each formulation type is approved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={penetrationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="tablets" name="Tablets" fill="#0ea5e9" />
                    <Bar dataKey="capsules" name="Capsules" fill="#22c55e" />
                    <Bar dataKey="injectables" name="Injectables" fill="#f59e0b" />
                    <Bar dataKey="solutions" name="Solutions" fill="#8b5cf6" />
                    <Bar dataKey="topical" name="Topical" fill="#ec4899" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gap" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Coverage Gap Analysis</CardTitle>
              <CardDescription>Highlighting markets without certain presentations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={gapAnalysisData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      stackOffset="expand"
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="market" type="category" />
                      <Tooltip formatter={(value) => [`${value}%`, ""]} />
                      <Legend />
                      <Bar dataKey="coverage" name="Coverage" stackId="a" fill="#22c55e" />
                      <Bar dataKey="gap" name="Gap" stackId="a" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Key Market Gaps</h3>
                  <div className="space-y-2">
                    {gapAnalysisData.map((item) => (
                      <div key={item.market} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{item.market}</span>
                          <div className="flex items-center">
                            <Badge variant={item.gap > 30 ? "destructive" : "outline"} className="text-xs">
                              {item.gap}% Gap
                            </Badge>
                          </div>
                        </div>
                        <div className="flex w-full h-2 bg-red-200 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-2" style={{ width: `${100 - item.gap}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Approval Timeline Trends</CardTitle>
              <CardDescription>Average approval timeline in months by region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={approvalTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} months`, "Approval Time"]} />
                    <Legend />
                    <Line type="monotone" dataKey="na" name="North America" stroke="#0ea5e9" />
                    <Line type="monotone" dataKey="eu" name="European Union" stroke="#22c55e" />
                    <Line type="monotone" dataKey="apac" name="Asia Pacific" stroke="#f59e0b" />
                    <Line type="monotone" dataKey="latam" name="Latin America" stroke="#8b5cf6" />
                    <Line type="monotone" dataKey="mea" name="Middle East & Africa" stroke="#ec4899" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
