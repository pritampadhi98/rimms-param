import { AuthorityDatabase } from "@/components/regulatory-intelligence/authority-database"

export default function AuthorityDatabasePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Authority Database</h1>
      <AuthorityDatabase />
    </div>
  )
}
