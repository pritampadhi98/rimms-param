"use client"

import { useIntegration } from "@/contexts/integration-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  CheckCircle,
  Database,
  FileText,
  Mail,
  PenTool,
  AlertTriangle,
  UserCheck,
  BarChart3,
  FlaskRoundIcon as Flask,
} from "lucide-react"

export function IntegrationOverview() {
  const { integrations } = useIntegration()

  // Calculate statistics
  const totalIntegrations = integrations.length
  const activeIntegrations = integrations.filter((i) => i.status === "connected" && i.enabled).length
  const errorIntegrations = integrations.filter((i) => i.status === "error").length
  const inactiveIntegrations = integrations.filter((i) => i.status === "disconnected" || !i.enabled).length

  const integrationHealth = totalIntegrations > 0 ? Math.round((activeIntegrations / totalIntegrations) * 100) : 0

  // Count by type
  const countByType = {
    document_management: integrations.filter((i) => i.type === "document_management").length,
    erp: integrations.filter((i) => i.type === "erp").length,
    ectd: integrations.filter((i) => i.type === "ectd").length,
    email: integrations.filter((i) => i.type === "email").length,
    esignature: integrations.filter((i) => i.type === "esignature").length,
    identity: integrations.filter((i) => i.type === "identity").length,
    bi: integrations.filter((i) => i.type === "bi").length,
    lims: integrations.filter((i) => i.type === "lims").length,
  }

  // Get the icon for each integration type
  const getIconForType = (type: string) => {
    switch (type) {
      case "document_management":
        return <FileText className="h-5 w-5" />
      case "erp":
        return <Database className="h-5 w-5" />
      case "ectd":
        return <FileText className="h-5 w-5" />
      case "email":
        return <Mail className="h-5 w-5" />
      case "esignature":
        return <PenTool className="h-5 w-5" />
      case "identity":
        return <UserCheck className="h-5 w-5" />
      case "bi":
        return <BarChart3 className="h-5 w-5" />
      case "lims":
        return <Flask className="h-5 w-5" />
      default:
        return <Database className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Integrations</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalIntegrations}</div>
            <p className="text-xs text-muted-foreground">Connected enterprise systems</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Integrations</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeIntegrations}</div>
            <p className="text-xs text-muted-foreground">Successfully connected</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Integration Errors</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{errorIntegrations}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Integration Health</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{integrationHealth}%</div>
            <Progress value={integrationHealth} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Integration Types</CardTitle>
          <CardDescription>Overview of connected enterprise systems by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(countByType).map(([type, count]) => (
              <div key={type} className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  {getIconForType(type)}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {type
                      .split("_")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {count} {count === 1 ? "integration" : "integrations"}
                  </p>
                </div>
                {count > 0 ? (
                  <Badge variant="outline" className="ml-auto">
                    Active
                  </Badge>
                ) : (
                  <Badge variant="outline" className="ml-auto bg-muted">
                    Not Configured
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Integration Activity</CardTitle>
          <CardDescription>Latest synchronization events and status changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {integrations
              .sort((a, b) => {
                const dateA = a.lastSyncTime ? new Date(a.lastSyncTime).getTime() : 0
                const dateB = b.lastSyncTime ? new Date(b.lastSyncTime).getTime() : 0
                return dateB - dateA
              })
              .slice(0, 5)
              .map((integration) => (
                <div key={integration.id} className="flex items-center space-x-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      integration.status === "connected"
                        ? "bg-green-100"
                        : integration.status === "error"
                          ? "bg-red-100"
                          : "bg-gray-100"
                    }`}
                  >
                    {getIconForType(integration.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{integration.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {integration.lastSyncTime
                        ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                        : "Never synced"}
                    </p>
                  </div>
                  <Badge
                    variant={
                      integration.status === "connected"
                        ? "success"
                        : integration.status === "error"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
                  </Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
