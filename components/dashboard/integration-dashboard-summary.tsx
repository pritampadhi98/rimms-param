"use client"
import { useIntegration } from "@/contexts/integration-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Database, FileText, Mail, PenTool, BarChart3, FlaskRoundIcon as Flask } from "lucide-react"

export function IntegrationDashboardSummary() {
  const { integrations } = useIntegration()
  const router = useRouter()

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
        return <Database className="h-5 w-5" />
      case "bi":
        return <BarChart3 className="h-5 w-5" />
      case "lims":
        return <Flask className="h-5 w-5" />
      default:
        return <Database className="h-5 w-5" />
    }
  }

  // Get recent integrations
  const recentIntegrations = [...integrations]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(countByType)
          .filter(([_, count]) => count > 0)
          .slice(0, 4)
          .map(([type, count]) => (
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
            </div>
          ))}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Recent Integration Activity</h3>
        <div className="space-y-4">
          {recentIntegrations.map((integration) => (
            <div key={integration.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full mr-3 ${
                    integration.status === "connected"
                      ? "bg-green-100"
                      : integration.status === "error"
                        ? "bg-red-100"
                        : "bg-gray-100"
                  }`}
                >
                  {getIconForType(integration.type)}
                </div>
                <div>
                  <p className="font-medium">{integration.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {integration.lastSyncTime
                      ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                      : "Never synced"}
                  </p>
                </div>
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
      </div>

      <div className="flex justify-center">
        <Button onClick={() => router.push("/integrations")}>View All Integrations</Button>
      </div>
    </div>
  )
}
