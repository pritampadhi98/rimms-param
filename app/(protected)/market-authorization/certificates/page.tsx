import { ApprovalCertificates } from "@/components/market-authorization/approval-certificates"

export default function ApprovalCertificatesPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Approval Certificate Management</h1>
      <ApprovalCertificates />
    </div>
  )
}
