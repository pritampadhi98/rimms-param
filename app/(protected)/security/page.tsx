import { SecurityDashboard } from "@/components/admin/security-dashboard"

export default function SecurityPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Security Dashboard</h1>
      <SecurityDashboard />
    </div>
  )
}
