"use client"

import { useIntegration } from "@/contexts/integration-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, AlertTriangle, Database, FileText } from "lucide-react"

export function ProductRegistrationIntegrations() {
  const { integrations } = useIntegration()

  // Get document management integrations
  const documentIntegrations = integrations.filter((i) => i.type === "document_management" && i.status === "connected")

  // Get ERP integrations
  const erpIntegrations = integrations.filter((i) => i.type === "erp" && i.status === "connected")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Document Management Integrations</CardTitle>
          <CardDescription>Connected document management systems for product registration</CardDescription>
        </CardHeader>
        <CardContent>
          {documentIntegrations.length > 0 ? (
            <div className="space-y-4">
              {documentIntegrations.map((integration) => (
                <div key={integration.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">{integration.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {integration.lastSyncTime
                          ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                          : "Never synced"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="success">Connected</Badge>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Sync Documents
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center text-muted-foreground">
              <AlertTriangle className="h-4 w-4 mr-2" />
              No document management integrations configured
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ERP System Integrations</CardTitle>
          <CardDescription>Connected ERP systems for product data</CardDescription>
        </CardHeader>
        <CardContent>
          {erpIntegrations.length > 0 ? (
            <div className="space-y-4">
              {erpIntegrations.map((integration) => (
                <div key={integration.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="flex items-center">
                    <Database className="h-5 w-5 mr-3 text-primary" />
                    <div>
                      <p className="font-medium">{integration.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {integration.lastSyncTime
                          ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                          : "Never synced"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="success">Connected</Badge>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Sync Product Data
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center text-muted-foreground">
              <AlertTriangle className="h-4 w-4 mr-2" />
              No ERP system integrations configured
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
