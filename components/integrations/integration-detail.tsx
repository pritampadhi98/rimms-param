"use client"

import { useState } from "react"
import { useIntegration, type IntegrationConfig } from "@/contexts/integration-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, RefreshCw, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuditLog } from "@/hooks/use-audit-log"

interface IntegrationDetailProps {
  integration: IntegrationConfig
  onClose: () => void
}

export function IntegrationDetail({ integration, onClose }: IntegrationDetailProps) {
  const { testConnection, syncIntegration } = useIntegration()
  const { toast } = useToast()
  const { logActivity } = useAuditLog()
  const [isTesting, setIsTesting] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)

  const handleTestConnection = async () => {
    setIsTesting(true)
    try {
      const success = await testConnection(integration.id)
      if (success) {
        toast({
          title: "Connection Successful",
          description: "The integration connection test was successful.",
        })
        logActivity("update", "setting", integration.id, "Successfully tested integration connection")
      } else {
        toast({
          variant: "destructive",
          title: "Connection Failed",
          description: "The integration connection test failed. Please check your configuration.",
        })
        logActivity("update", "setting", integration.id, "Failed to test integration connection")
      }
    } finally {
      setIsTesting(false)
    }
  }

  const handleSyncIntegration = async () => {
    setIsSyncing(true)
    try {
      await syncIntegration(integration.id)
      toast({
        title: "Synchronization Complete",
        description: "The integration has been successfully synchronized.",
      })
      logActivity("update", "setting", integration.id, "Synchronized integration")
    } catch (error) {
      console.error("Error syncing integration:", error)
      toast({
        variant: "destructive",
        title: "Synchronization Failed",
        description: "There was an error synchronizing the integration.",
      })
    } finally {
      setIsSyncing(false)
    }
  }

  const getProviderLabel = (provider: string) => {
    return provider
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const getIntegrationTypeLabel = (type: string) => {
    switch (type) {
      case "document_management":
        return "Document Management System"
      case "erp":
        return "ERP System"
      case "ectd":
        return "eCTD Publishing Tool"
      case "email":
        return "Email System"
      case "esignature":
        return "Electronic Signature"
      case "identity":
        return "Identity Provider"
      case "bi":
        return "Business Intelligence Tool"
      case "lims":
        return "Laboratory Information Management System"
      default:
        return type
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2" onClick={onClose}>
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
            <div>
              <CardTitle className="flex items-center">
                {integration.name}
                <Badge
                  variant={
                    integration.status === "connected"
                      ? "success"
                      : integration.status === "error"
                        ? "destructive"
                        : "outline"
                  }
                  className="ml-2"
                >
                  {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
                </Badge>
                {!integration.enabled && (
                  <Badge variant="outline" className="ml-2">
                    Disabled
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>
                {getIntegrationTypeLabel(integration.type)} - {getProviderLabel(integration.provider)}
              </CardDescription>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleTestConnection} disabled={isTesting}>
              {isTesting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Testing...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Test Connection
                </>
              )}
            </Button>
            <Button variant="outline" onClick={handleSyncIntegration} disabled={isSyncing}>
              {isSyncing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Syncing...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Sync Now
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="details" className="space-y-4">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="history">Sync History</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Integration Type</h3>
                <p className="text-sm">{getIntegrationTypeLabel(integration.type)}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Provider</h3>
                <p className="text-sm">{getProviderLabel(integration.provider)}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">API URL</h3>
                <p className="text-sm">{integration.apiUrl || "Not configured"}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Sync Frequency</h3>
                <p className="text-sm">
                  {integration.syncFrequency
                    ? integration.syncFrequency.charAt(0).toUpperCase() + integration.syncFrequency.slice(1)
                    : "Not configured"}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Sync Direction</h3>
                <p className="text-sm">
                  {integration.syncDirection
                    ? integration.syncDirection.charAt(0).toUpperCase() + integration.syncDirection.slice(1)
                    : "Not configured"}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Last Sync</h3>
                <p className="text-sm">
                  {integration.lastSyncTime ? new Date(integration.lastSyncTime).toLocaleString() : "Never synced"}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Created</h3>
                <p className="text-sm">{new Date(integration.createdAt).toLocaleString()}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Last Updated</h3>
                <p className="text-sm">{new Date(integration.updatedAt).toLocaleString()}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="rounded-md border">
              <div className="p-4 text-center text-muted-foreground">
                <AlertTriangle className="mx-auto h-8 w-8 mb-2" />
                <p>Sync history will be available after the first successful synchronization.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="logs">
            <div className="rounded-md border">
              <div className="p-4 text-center text-muted-foreground">
                <AlertTriangle className="mx-auto h-8 w-8 mb-2" />
                <p>Integration logs will be available after the first successful connection.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </CardFooter>
    </Card>
  )
}
