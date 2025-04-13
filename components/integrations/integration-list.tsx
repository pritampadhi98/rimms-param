"use client"

import { useState } from "react"
import { useIntegration, type IntegrationType, type IntegrationConfig } from "@/contexts/integration-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2, RefreshCw, Plus } from "lucide-react"
import { IntegrationForm } from "@/components/integrations/integration-form"
import { IntegrationDetail } from "@/components/integrations/integration-detail"
import { useToast } from "@/hooks/use-toast"
import { useAuditLog } from "@/hooks/use-audit-log"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface IntegrationListProps {
  type: IntegrationType
}

export function IntegrationList({ type }: IntegrationListProps) {
  const { getIntegrationsByType, deleteIntegration, syncIntegration } = useIntegration()
  const { toast } = useToast()
  const { logActivity } = useAuditLog()
  const [showAddForm, setShowAddForm] = useState(false)
  const [editingIntegration, setEditingIntegration] = useState<IntegrationConfig | null>(null)
  const [viewingIntegration, setViewingIntegration] = useState<IntegrationConfig | null>(null)
  const [integrationToDelete, setIntegrationToDelete] = useState<string | null>(null)
  const [isSyncing, setIsSyncing] = useState<string | null>(null)

  const integrations = getIntegrationsByType(type)

  const getIntegrationTypeLabel = (type: IntegrationType) => {
    switch (type) {
      case "document_management":
        return "Document Management Systems"
      case "erp":
        return "ERP Systems"
      case "ectd":
        return "eCTD Publishing Tools"
      case "email":
        return "Email Systems"
      case "esignature":
        return "Electronic Signature"
      case "identity":
        return "Identity Providers"
      case "bi":
        return "Business Intelligence Tools"
      case "lims":
        return "Laboratory Information Management Systems"
      default:
        return type
    }
  }

  const getProviderLabel = (provider: string) => {
    return provider
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const handleAddIntegration = () => {
    setShowAddForm(true)
    setEditingIntegration(null)
    setViewingIntegration(null)
  }

  const handleEditIntegration = (integration: IntegrationConfig) => {
    setEditingIntegration(integration)
    setShowAddForm(true)
    setViewingIntegration(null)
  }

  const handleViewIntegration = (integration: IntegrationConfig) => {
    setViewingIntegration(integration)
    setShowAddForm(false)
    setEditingIntegration(null)
  }

  const handleDeleteIntegration = (id: string) => {
    setIntegrationToDelete(id)
  }

  const confirmDelete = async () => {
    if (integrationToDelete) {
      await deleteIntegration(integrationToDelete)
      toast({
        title: "Integration Deleted",
        description: "The integration has been successfully removed.",
      })
      logActivity("delete", "setting", integrationToDelete, "Deleted integration")
      setIntegrationToDelete(null)
    }
  }

  const handleSyncIntegration = async (id: string) => {
    setIsSyncing(id)
    try {
      await syncIntegration(id)
      toast({
        title: "Synchronization Complete",
        description: "The integration has been successfully synchronized.",
      })
      logActivity("update", "setting", id, "Synchronized integration")
    } catch (error) {
      console.error("Error syncing integration:", error)
      toast({
        variant: "destructive",
        title: "Synchronization Failed",
        description: "There was an error synchronizing the integration.",
      })
    } finally {
      setIsSyncing(null)
    }
  }

  const handleFormCancel = () => {
    setShowAddForm(false)
    setEditingIntegration(null)
  }

  const handleFormSuccess = () => {
    setShowAddForm(false)
    setEditingIntegration(null)
    toast({
      title: "Integration Saved",
      description: "The integration has been successfully saved.",
    })
  }

  const handleDetailClose = () => {
    setViewingIntegration(null)
  }

  if (showAddForm) {
    return (
      <IntegrationForm
        onCancel={handleFormCancel}
        onSuccess={handleFormSuccess}
        defaultType={type}
        existingIntegration={editingIntegration}
      />
    )
  }

  if (viewingIntegration) {
    return <IntegrationDetail integration={viewingIntegration} onClose={handleDetailClose} />
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>{getIntegrationTypeLabel(type)}</CardTitle>
            <CardDescription>
              Configure and manage integrations with {getIntegrationTypeLabel(type).toLowerCase()}
            </CardDescription>
          </div>
          <Button onClick={handleAddIntegration}>
            <Plus className="mr-2 h-4 w-4" />
            Add Integration
          </Button>
        </CardHeader>
        <CardContent>
          {integrations.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <p className="text-muted-foreground mb-4">No integrations configured for this category</p>
              <Button variant="outline" onClick={handleAddIntegration}>
                <Plus className="mr-2 h-4 w-4" />
                Configure Integration
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {integrations.map((integration) => (
                <div
                  key={integration.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <h3
                        className="font-medium cursor-pointer hover:underline"
                        onClick={() => handleViewIntegration(integration)}
                      >
                        {integration.name}
                      </h3>
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
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Provider: {getProviderLabel(integration.provider)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {integration.lastSyncTime
                        ? `Last synced: ${new Date(integration.lastSyncTime).toLocaleString()}`
                        : "Never synced"}
                    </p>
                  </div>
                  <div className="flex space-x-2 w-full md:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSyncIntegration(integration.id)}
                      disabled={isSyncing === integration.id}
                    >
                      <RefreshCw className={`h-4 w-4 mr-2 ${isSyncing === integration.id ? "animate-spin" : ""}`} />
                      Sync
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleEditIntegration(integration)}>
                      <Pencil className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteIntegration(integration.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!integrationToDelete} onOpenChange={(open) => !open && setIntegrationToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this integration and remove all associated configuration. This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
