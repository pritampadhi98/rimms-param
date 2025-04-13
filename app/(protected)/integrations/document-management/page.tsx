import { IntegrationList } from "@/components/integrations/integration-list"

export default function DocumentManagementPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Document Management Integrations</h1>
      <IntegrationList type="document_management" />
    </div>
  )
}
