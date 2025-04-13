import { IntegrationDashboard } from "@/components/integrations/integration-dashboard"

export default function IntegrationsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Integration Hub</h1>
      <IntegrationDashboard />
    </div>
  )
}
