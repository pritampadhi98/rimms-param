"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AlertCircle,
  BarChart3,
  Calendar,
  Clock,
  FileText,
  Filter,
  FlaskRoundIcon as Flask,
  Globe,
  Grid3X3,
  LifeBuoy,
  Package,
  PieChart,
  RefreshCw,
  Search,
  Settings,
  Tablet,
  Users,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import PortfolioOverview from "@/components/lifecycle-management/portfolio-overview"
import FormulationManagement from "@/components/lifecycle-management/formulation-management"
import StrengthDosageTracking from "@/components/lifecycle-management/strength-dosage-tracking"
import PresentationManagement from "@/components/lifecycle-management/presentation-management"
import RegulatoryMilestoneTracking from "@/components/lifecycle-management/regulatory-milestone-tracking"
import ChangeControlManagement from "@/components/lifecycle-management/change-control-management"
import MarketAuthorizationIntelligence from "@/components/lifecycle-management/market-authorization-intelligence"
import ProductDiscontinuationPlanning from "@/components/lifecycle-management/product-discontinuation-planning"
import AnalyticsReporting from "@/components/lifecycle-management/analytics-reporting"
import IntegrationPanel from "@/components/lifecycle-management/integration-panel"

export default function LifecycleManagementPage() {
  const [activeView, setActiveView] = useState("portfolio")
  const [userRole, setUserRole] = useState("regulatory")

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lifecycle Management Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive visibility into product formulations, strengths, and presentations throughout their lifecycle
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
            <Select value={userRole} onValueChange={setUserRole}>
              <SelectTrigger className="w-[180px] border-none bg-transparent">
                <SelectValue placeholder="Select role view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regulatory">Regulatory Affairs</SelectItem>
                <SelectItem value="rd">R&D</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="quality">Quality</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
              5
            </span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="col-span-1 md:col-span-3">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Quick Metrics</CardTitle>
              <Button variant="ghost" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard title="Total Products" value="248" change="+12" icon={<Package className="h-4 w-4" />} />
              <MetricCard title="Pending Approvals" value="37" change="-3" icon={<Clock className="h-4 w-4" />} />
              <MetricCard title="Upcoming Renewals" value="19" change="+5" icon={<Calendar className="h-4 w-4" />} />
              <MetricCard title="Active Changes" value="42" change="+8" icon={<RefreshCw className="h-4 w-4" />} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert title="Renewal Deadline" description="Product XYZ-123 renewal due in 15 days" type="warning" />
              <Alert title="Formulation Change" description="Impact assessment required for ABC-456" type="info" />
              <Alert title="Approval Received" description="MNO-789 approved in EU region" type="success" />
              <Button variant="outline" size="sm" className="w-full">
                View All Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products, formulations, or markets..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            <SelectItem value="development">Development</SelectItem>
            <SelectItem value="submission">Submission</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="marketed">Marketed</SelectItem>
            <SelectItem value="discontinued">Discontinued</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="na">North America</SelectItem>
            <SelectItem value="eu">Europe</SelectItem>
            <SelectItem value="apac">Asia Pacific</SelectItem>
            <SelectItem value="latam">Latin America</SelectItem>
            <SelectItem value="mea">Middle East & Africa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="portfolio" className="space-y-4" onValueChange={setActiveView}>
        <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 h-auto">
          <TabsTrigger value="portfolio" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span className="hidden md:inline">Portfolio</span>
          </TabsTrigger>
          <TabsTrigger value="formulation" className="flex items-center gap-2">
            <Flask className="h-4 w-4" />
            <span className="hidden md:inline">Formulation</span>
          </TabsTrigger>
          <TabsTrigger value="strength" className="flex items-center gap-2">
            <Tablet className="h-4 w-4" />
            <span className="hidden md:inline">Strength/Dosage</span>
          </TabsTrigger>
          <TabsTrigger value="presentation" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span className="hidden md:inline">Presentation</span>
          </TabsTrigger>
          <TabsTrigger value="regulatory" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Regulatory</span>
          </TabsTrigger>
          <TabsTrigger value="change" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            <span className="hidden md:inline">Change Control</span>
          </TabsTrigger>
          <TabsTrigger value="market" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden md:inline">Market Auth</span>
          </TabsTrigger>
          <TabsTrigger value="discontinuation" className="flex items-center gap-2">
            <LifeBuoy className="h-4 w-4" />
            <span className="hidden md:inline">Discontinuation</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden md:inline">Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="integration" className="flex items-center gap-2">
            <Grid3X3 className="h-4 w-4" />
            <span className="hidden md:inline">Integration</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-4">
          <PortfolioOverview userRole={userRole} />
        </TabsContent>

        <TabsContent value="formulation" className="space-y-4">
          <FormulationManagement userRole={userRole} />
        </TabsContent>

        <TabsContent value="strength" className="space-y-4">
          <StrengthDosageTracking userRole={userRole} />
        </TabsContent>

        <TabsContent value="presentation" className="space-y-4">
          <PresentationManagement userRole={userRole} />
        </TabsContent>

        <TabsContent value="regulatory" className="space-y-4">
          <RegulatoryMilestoneTracking userRole={userRole} />
        </TabsContent>

        <TabsContent value="change" className="space-y-4">
          <ChangeControlManagement userRole={userRole} />
        </TabsContent>

        <TabsContent value="market" className="space-y-4">
          <MarketAuthorizationIntelligence userRole={userRole} />
        </TabsContent>

        <TabsContent value="discontinuation" className="space-y-4">
          <ProductDiscontinuationPlanning userRole={userRole} />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <AnalyticsReporting userRole={userRole} />
        </TabsContent>

        <TabsContent value="integration" className="space-y-4">
          <IntegrationPanel userRole={userRole} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface MetricCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}

function MetricCard({ title, value, change, icon }: MetricCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <div className="bg-muted/50 p-4 rounded-lg">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
      </div>
      <div className={`text-xs mt-2 ${isPositive ? "text-green-500" : "text-red-500"}`}>{change} from last month</div>
    </div>
  )
}

interface AlertProps {
  title: string
  description: string
  type: "warning" | "info" | "success" | "error"
}

function Alert({ title, description, type }: AlertProps) {
  const colors = {
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800",
  }

  const icons = {
    warning: <AlertCircle className="h-4 w-4 text-yellow-500" />,
    info: <AlertCircle className="h-4 w-4 text-blue-500" />,
    success: <AlertCircle className="h-4 w-4 text-green-500" />,
    error: <AlertCircle className="h-4 w-4 text-red-500" />,
  }

  return (
    <div className={`p-3 rounded-md border ${colors[type]} flex gap-3 items-start`}>
      <div className="mt-0.5">{icons[type]}</div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  )
}

import { Bell } from "lucide-react"
