"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, LineChart, PieChart, FileText, Clock } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import {
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart as RechartsBarChart,
} from "recharts";

// Sample data for charts
const lifecycleData = [
  { month: "Jan", active: 42, development: 15, discontinued: 5 },
  { month: "Feb", active: 45, development: 13, discontinued: 6 },
  { month: "Mar", active: 47, development: 14, discontinued: 7 },
  { month: "Apr", active: 48, development: 16, discontinued: 7 },
  { month: "May", active: 50, development: 18, discontinued: 8 },
  { month: "Jun", active: 52, development: 17, discontinued: 9 },
  { month: "Jul", active: 54, development: 15, discontinued: 10 },
  { month: "Aug", active: 55, development: 14, discontinued: 11 },
  { month: "Sep", active: 57, development: 13, discontinued: 12 },
  { month: "Oct", active: 58, development: 15, discontinued: 12 },
  { month: "Nov", active: 60, development: 16, discontinued: 13 },
  { month: "Dec", active: 62, development: 14, discontinued: 14 },
];

const marketData = [
  { region: "North America", products: 45, markets: 3, registrations: 120 },
  { region: "Europe", products: 42, markets: 27, registrations: 210 },
  { region: "Asia Pacific", products: 38, markets: 15, registrations: 180 },
  { region: "Latin America", products: 30, markets: 20, registrations: 150 },
  {
    region: "Middle East & Africa",
    products: 25,
    markets: 25,
    registrations: 130,
  },
];

export function LifecycleAnalytics() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Lifecycle Analytics & Reporting</CardTitle>
          <CardDescription>
            Comprehensive analytics on product lifecycle metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="portfolio">
            <TabsList className="mb-4">
              <TabsTrigger value="portfolio">Portfolio Trends</TabsTrigger>
              <TabsTrigger value="market">Market Coverage</TabsTrigger>
              <TabsTrigger value="regulatory">
                Regulatory Performance
              </TabsTrigger>
              <TabsTrigger value="custom">Custom Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Product Lifecycle Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          active: {
                            label: "Active Products",
                            color: "hsl(var(--chart-1))",
                          },
                          development: {
                            label: "In Development",
                            color: "hsl(var(--chart-2))",
                          },
                          discontinued: {
                            label: "Discontinued",
                            color: "hsl(var(--chart-3))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsLineChart data={lifecycleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="active"
                              stroke="var(--color-active)"
                              strokeWidth={2}
                            />
                            <Line
                              type="monotone"
                              dataKey="development"
                              stroke="var(--color-development)"
                              strokeWidth={2}
                            />
                            <Line
                              type="monotone"
                              dataKey="discontinued"
                              stroke="var(--color-discontinued)"
                              strokeWidth={2}
                            />
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Active Products
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">62</div>
                        <Badge className="bg-green-100 text-green-800">
                          +5% YTD
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Across all markets and formulations
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        In Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">14</div>
                        <Badge className="bg-blue-100 text-blue-800">
                          -6% YTD
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Products in various development stages
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Discontinued</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">14</div>
                        <Badge className="bg-amber-100 text-amber-800">
                          +40% YTD
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Products discontinued in past 12 months
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Portfolio Trend (12 Months)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          active: {
                            label: "Active Products",
                            color: "hsl(var(--chart-1))",
                          },
                          development: {
                            label: "In Development",
                            color: "hsl(var(--chart-2))",
                          },
                          discontinued: {
                            label: "Discontinued",
                            color: "hsl(var(--chart-3))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsLineChart data={lifecycleData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="active"
                              stroke="var(--color-active)"
                              strokeWidth={2}
                            />
                            <Line
                              type="monotone"
                              dataKey="development"
                              stroke="var(--color-development)"
                              strokeWidth={2}
                            />
                            <Line
                              type="monotone"
                              dataKey="discontinued"
                              stroke="var(--color-discontinued)"
                              strokeWidth={2}
                            />
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Product Age Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="h-[200px] w-full flex items-center justify-center">
                        <PieChart className="h-16 w-16 text-muted-foreground/50" />
                        <span className="ml-2 text-muted-foreground">
                          Pie chart visualization
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Lifecycle Stage Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="h-[200px] w-full flex items-center justify-center">
                        <PieChart className="h-16 w-16 text-muted-foreground/50" />
                        <span className="ml-2 text-muted-foreground">
                          Pie chart visualization
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="market">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Total Markets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">90</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Countries with at least one registration
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Total Registrations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">790</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Active product registrations worldwide
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Market Penetration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">68%</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Of target markets covered
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Regional Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          products: {
                            label: "Products",
                            color: "hsl(var(--chart-1))",
                          },
                          markets: {
                            label: "Markets",
                            color: "hsl(var(--chart-2))",
                          },
                          registrations: {
                            label: "Registrations",
                            color: "hsl(var(--chart-3))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart data={marketData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="region" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar
                              dataKey="products"
                              fill="var(--color-products)"
                            />
                            <Bar
                              dataKey="markets"
                              fill="var(--color-markets)"
                            />
                            <Bar
                              dataKey="registrations"
                              fill="var(--color-registrations)"
                            />
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Top 10 Markets by Product Count
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Country</TableHead>
                          <TableHead>Products</TableHead>
                          <TableHead>Registrations</TableHead>
                          <TableHead>Market Share</TableHead>
                          <TableHead>Trend</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>United States</TableCell>
                          <TableCell>42</TableCell>
                          <TableCell>65</TableCell>
                          <TableCell>18.5%</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">
                              ↑ 2.1%
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Germany</TableCell>
                          <TableCell>38</TableCell>
                          <TableCell>42</TableCell>
                          <TableCell>15.2%</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">
                              ↑ 1.5%
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Japan</TableCell>
                          <TableCell>35</TableCell>
                          <TableCell>40</TableCell>
                          <TableCell>14.1%</TableCell>
                          <TableCell>
                            <Badge className="bg-amber-100 text-amber-800">
                              ↓ 0.8%
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="regulatory">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Approval Success Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">92%</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        First-time approval rate
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Avg. Approval Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">14.2</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Months from submission to approval
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Compliance Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">98.5%</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Regulatory compliance across portfolio
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Approval Timelines by Region
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="h-[200px] w-full flex items-center justify-center">
                        <BarChart className="h-16 w-16 text-muted-foreground/50" />
                        <span className="ml-2 text-muted-foreground">
                          Bar chart visualization
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">
                        Regulatory Deficiencies
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="h-[200px] w-full flex items-center justify-center">
                        <PieChart className="h-16 w-16 text-muted-foreground/50" />
                        <span className="ml-2 text-muted-foreground">
                          Pie chart visualization
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Regulatory Milestone Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Milestone Type</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead>On Time</TableHead>
                          <TableHead>Delayed</TableHead>
                          <TableHead>Performance</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Initial Submissions</TableCell>
                          <TableCell>45</TableCell>
                          <TableCell>42</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">
                              93.3%
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Variations/Changes</TableCell>
                          <TableCell>128</TableCell>
                          <TableCell>115</TableCell>
                          <TableCell>13</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">
                              89.8%
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Renewals</TableCell>
                          <TableCell>72</TableCell>
                          <TableCell>70</TableCell>
                          <TableCell>2</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">
                              97.2%
                            </Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Post-Approval Commitments</TableCell>
                          <TableCell>35</TableCell>
                          <TableCell>32</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">
                              91.4%
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="custom">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Custom Report Builder
                    </CardTitle>
                    <CardDescription>
                      Create customized reports based on your specific needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Saved Reports
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 border rounded-md">
                            <div>
                              <p className="font-medium">
                                Quarterly Portfolio Review
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Last run: 2 weeks ago
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Run
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-2 border rounded-md">
                            <div>
                              <p className="font-medium">
                                Regulatory Performance
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Last run: 1 month ago
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Run
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-2 border rounded-md">
                            <div>
                              <p className="font-medium">
                                Market Expansion Analysis
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Last run: 3 months ago
                              </p>
                            </div>
                            <Button variant="outline" size="sm">
                              Run
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Create New Report
                        </h4>
                        <div className="p-4 border rounded-md flex flex-col items-center justify-center h-[150px]">
                          <Button>Create Custom Report</Button>
                          <p className="text-xs text-muted-foreground mt-2">
                            Select metrics, filters, and visualization options
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Export & Integration Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-4 border rounded-md flex flex-col items-center justify-center text-center">
                        <LineChart className="h-8 w-8 mb-2 text-blue-500" />
                        <h4 className="font-medium">Export to BI Tools</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Power BI, Tableau, QlikView
                        </p>
                      </div>

                      <div className="p-4 border rounded-md flex flex-col items-center justify-center text-center">
                        <FileText className="h-8 w-8 mb-2 text-green-500" />
                        <h4 className="font-medium">Export to Excel/CSV</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Spreadsheet formats
                        </p>
                      </div>

                      <div className="p-4 border rounded-md flex flex-col items-center justify-center text-center">
                        <Clock className="h-8 w-8 mb-2 text-purple-500" />
                        <h4 className="font-medium">Scheduled Reports</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Automated delivery
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
