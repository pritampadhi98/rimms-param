import { IntegrationList } from "@/components/integrations/integration-list"

export default function ErpIntegrationsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">ERP System Integrations</h1>
      <IntegrationList type="erp" />
    </div>
  )
}
