"use client"

import { useState } from "react"
import { useIntegration, type IntegrationType } from "@/contexts/integration-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IntegrationOverview } from "@/components/integrations/integration-overview"
import { IntegrationList } from "@/components/integrations/integration-list"
import { IntegrationForm } from "@/components/integrations/integration-form"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useAuditLog } from "@/hooks/use-audit-log"

export function IntegrationDashboard() {
  const { integrations, isLoading } = useIntegration()
  const { logActivity } = useAuditLog()
  const [activeTab, setActiveTab] = useState<IntegrationType | "overview">("overview")
  const [showAddForm, setShowAddForm] = useState(false)

  const handleTabChange = (value: string) => {
    setActiveTab(value as IntegrationType | "overview")
    setShowAddForm(false)
  }

  const handleAddIntegration = () => {
    setShowAddForm(true)
    logActivity("create", "setting", "integration", "Started creating a new integration")
  }

  const handleCancelAdd = () => {
    setShowAddForm(false)
  }

  const handleIntegrationAdded = () => {
    setShowAddForm(false)
    logActivity("create", "setting", "integration", "Created a new integration")
  }

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading integrations...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Enterprise Integrations</h2>
          <p className="text-muted-foreground">Connect RIMMS with your enterprise systems for seamless data exchange</p>
        </div>
        {!showAddForm && (
          <Button onClick={handleAddIntegration}>
            <Plus className="mr-2 h-4 w-4" />
            Add Integration
          </Button>
        )}
      </div>

      {showAddForm ? (
        <IntegrationForm onCancel={handleCancelAdd} onSuccess={handleIntegrationAdded} />
      ) : (
        <Tabs defaultValue="overview" value={activeTab} onValueChange={handleTabChange} className="space-y-4">
          <TabsList className="grid grid-cols-3 md:grid-cols-9 h-auto">
            <TabsTrigger value="overview" className="text-xs md:text-sm">
              Overview
            </TabsTrigger>
            <TabsTrigger value="document_management" className="text-xs md:text-sm">
              Document Mgmt
            </TabsTrigger>
            <TabsTrigger value="erp" className="text-xs md:text-sm">
              ERP
            </TabsTrigger>
            <TabsTrigger value="ectd" className="text-xs md:text-sm">
              eCTD
            </TabsTrigger>
            <TabsTrigger value="email" className="text-xs md:text-sm">
              Email
            </TabsTrigger>
            <TabsTrigger value="esignature" className="text-xs md:text-sm">
              eSignature
            </TabsTrigger>
            <TabsTrigger value="identity" className="text-xs md:text-sm">
              Identity
            </TabsTrigger>
            <TabsTrigger value="bi" className="text-xs md:text-sm">
              BI Tools
            </TabsTrigger>
            <TabsTrigger value="lims" className="text-xs md:text-sm">
              LIMS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <IntegrationOverview />
          </TabsContent>

          <TabsContent value="document_management" className="space-y-4">
            <IntegrationList type="document_management" />
          </TabsContent>

          <TabsContent value="erp" className="space-y-4">
            <IntegrationList type="erp" />
          </TabsContent>

          <TabsContent value="ectd" className="space-y-4">
            <IntegrationList type="ectd" />
          </TabsContent>

          <TabsContent value="email" className="space-y-4">
            <IntegrationList type="email" />
          </TabsContent>

          <TabsContent value="esignature" className="space-y-4">
            <IntegrationList type="esignature" />
          </TabsContent>

          <TabsContent value="identity" className="space-y-4">
            <IntegrationList type="identity" />
          </TabsContent>

          <TabsContent value="bi" className="space-y-4">
            <IntegrationList type="bi" />
          </TabsContent>

          <TabsContent value="lims" className="space-y-4">
            <IntegrationList type="lims" />
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
