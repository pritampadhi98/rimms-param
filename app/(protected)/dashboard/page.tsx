import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/dashboard/overview";
import { RecentSubmissions } from "@/components/dashboard/recent-submissions";
import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines";
import { RegulatorySummary } from "@/components/dashboard/regulatory-summary";
import { IntegrationStatus } from "@/components/dashboard/integration-status";
import {
  Database,
  Pill,
  LayoutDashboard,
  FileText,
  Calendar,
  ClipboardCheck,
  Link,
  Package,
} from "lucide-react";
import { IntegrationDashboardSummary } from "@/components/dashboard/integration-dashboard-summary";
import { ProductRegistrationStats } from "@/components/product-registration/stats";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { UserActivity } from "@/components/dashboard/user-activity";
import { UserIntegrationEngagement } from "@/components/dashboard/user-integration-engagement";
import { DosageFormStats } from "@/components/product-registration/dosage-form/stats";
import { LifecycleAnalytics } from "@/components/product-registration/lifecycle/analytics";
import { LifecycleStats } from "@/components/product-registration/lifecycle/stats";
import { ChangeControlStats } from "@/components/product-registration/change-control/stats";

import { MarketAuthStats } from "@/components/market-authorization/market-auth-stats";
export default function DashboardPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-muted/50 p-1 rounded-lg">
          <TabsTrigger
            value="overview"
            className="flex items-center gap-2 transition-all hover:bg-background/80"
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger
            value="submissions"
            className="flex items-center gap-2 transition-all hover:bg-background/80"
          >
            <FileText className="h-4 w-4" />
            <span>Submissions</span>
          </TabsTrigger>
          <TabsTrigger
            value="deadlines"
            className="flex items-center gap-2 transition-all hover:bg-background/80"
          >
            <Calendar className="h-4 w-4" />
            <span>Deadlines</span>
          </TabsTrigger>
          <TabsTrigger
            value="regulatory"
            className="flex items-center gap-2 transition-all hover:bg-background/80"
          >
            <ClipboardCheck className="h-4 w-4" />
            <span>Regulatory</span>
          </TabsTrigger>
          <TabsTrigger
            value="integrations"
            className="flex items-center gap-2 transition-all hover:bg-background/80"
          >
            <Link className="h-4 w-4" />
            <span>Integrations</span>
          </TabsTrigger>
          <TabsTrigger
            value="registration"
            className="flex items-center gap-2 transition-all hover:bg-background/80"
          >
            <Package className="h-4 w-4" />
            <span>Product Registration</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Submissions
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-green-500 font-medium">
                    +2.5%
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    from last month
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">In Review</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Under Assessment
                    </span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Pending Response
                    </span>
                    <span className="font-medium">22</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Approvals
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-red-500 font-medium">-4%</span>
                  <span className="text-xs text-muted-foreground ml-1">
                    from last month
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Expiring in 30 days
                    </span>
                    <Badge variant="destructive" className="text-xs">
                      5
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Expiring in 90 days
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      12
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Expiring in 180 days
                    </span>
                    <Badge variant="default" className="text-xs">
                      11
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Registered Products
                </CardTitle>
                <Pill className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-green-500 font-medium">+3</span>
                  <span className="text-xs text-muted-foreground ml-1">
                    added this month
                  </span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between text-xs mt-2">
                    <span className="text-muted-foreground">
                      Active Markets
                    </span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Pending Updates
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      3
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Compliance Rate
                    </span>
                    <span className="font-medium">98%</span>
                  </div>
                  <Progress value={98} className="h-1" />
                </div>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Integration Health
                </CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Overall Status
                    </span>
                    <Badge variant="success" className="text-xs">
                      Healthy
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      Connected Systems
                    </span>
                    <span className="font-medium">8/8</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Last Sync</span>
                    <span className="font-medium">2 mins ago</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Data Quality</span>
                    <span className="font-medium">99.9%</span>
                  </div>
                  <div className="mt-2 pt-2 border-t">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">
                        System Uptime
                      </span>
                      <span className="font-medium">99.9%</span>
                    </div>
                    <Progress value={99.9} className="h-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
            <Card className="lg:col-span-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription className="mt-1">
                      Key metrics and trends for your regulatory activities
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Last updated: Today
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <div className="lg:col-span-3 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Submissions</CardTitle>
                      <CardDescription className="mt-1">
                        Latest regulatory submissions
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                        View All
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <RecentSubmissions />
                </CardContent>
              </Card>
              {/* <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Integration Status</CardTitle>
                      <CardDescription className="mt-1">
                        System integration health
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <IntegrationStatus />
                </CardContent>
              </Card> */}
            </div>
          </div>

          <div className="w-full lg:col-span-4 ">
            <div className="flex items-center justify-between space-y-2">
              <div className="w-full">
                <h2 className="text-3xl font-bold tracking-tight">
                  Dosage Form Tracking
                </h2>
                <p className="text-muted-foreground mb-4">
                  Manage and monitor product formulations, strengths, and
                  presentations
                </p>
              </div>
            </div>
            <DosageFormStats />
          </div>

          <div className="w-full lg:col-span-4">
            <div className="flex items-center justify-between space-y-2">
              <div className="w-full">
                <h2 className="text-3xl font-bold tracking-tight">
                  Lifecycle Management
                </h2>
                <p className="text-muted-foreground mb-4">
                  Comprehensive management of product formulations, strengths,
                  and presentations throughout their lifecycle
                </p>
              </div>
            </div>

            <LifecycleStats />
          </div>

          <div className="flex items-center justify-between space-y-2">
            <div className="w-full">
              <h2 className="text-3xl font-bold tracking-tight">
                Change Management
              </h2>
              <p className="text-muted-foreground mb-4">
                Comprehensive management of product formulations, strengths, and
                presentations throughout their lifecycle
              </p>
              <MarketAuthStats />
            </div>
          </div>

          <div className="flex items-center justify-between space-y-2">
            <div className="w-full">
              <h2 className="text-3xl font-bold tracking-tight">
                Regulatory Compliance
              </h2>
              <p className="text-muted-foreground mb-4">
                Comprehensive management of product formulations, strengths, and
                presentations throughout their lifecycle
              </p>
              <ChangeControlStats />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <UserActivity />
            <UserIntegrationEngagement />
          </div>
        </TabsContent>
        <TabsContent value="submissions" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Submissions</CardTitle>
                  <CardDescription className="mt-1">
                    Detailed view of recent regulatory submissions
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                    Filter
                  </button>
                  <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                    Export
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <RecentSubmissions detailed />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="deadlines" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription className="mt-1">
                    Critical regulatory deadlines requiring attention
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                    Add Deadline
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <UpcomingDeadlines />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="regulatory" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Regulatory Summary</CardTitle>
                  <CardDescription className="mt-1">
                    Global regulatory status overview
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                    Refresh
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <RegulatorySummary />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Integration Status</CardTitle>
                  <CardDescription className="mt-1">
                    Status of enterprise system integrations
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                    Configure
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <IntegrationDashboardSummary />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="registration" className="space-y-6">
          <ProductRegistrationStats />
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Product Registration Status</CardTitle>
                  <CardDescription className="mt-1">
                    Global product registration status by region
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
                    Add Product
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { region: "North America", count: 42, percentage: 85 },
                  { region: "Europe", count: 38, percentage: 78 },
                  { region: "Asia Pacific", count: 35, percentage: 72 },
                  { region: "Latin America", count: 28, percentage: 58 },
                  { region: "Middle East & Africa", count: 22, percentage: 45 },
                ].map((item) => (
                  <div key={item.region} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.region}</span>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">
                          {item.count} products
                        </span>
                        <Badge
                          variant="outline"
                          className={
                            item.percentage >= 70
                              ? "bg-green-50 text-green-700 border-green-200"
                              : item.percentage >= 50
                              ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }
                        >
                          {item.percentage}%
                        </Badge>
                      </div>
                    </div>
                    <Progress
                      value={item.percentage}
                      className={`h-2 ${
                        item.percentage >= 70
                          ? "bg-green-100"
                          : item.percentage >= 50
                          ? "bg-yellow-100"
                          : "bg-red-100"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
