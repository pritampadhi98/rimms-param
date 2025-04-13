import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SubmissionsTable } from "@/components/submissions/submissions-table"
import { Plus } from "lucide-react"

export default function SubmissionsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Submissions</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Submission
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Input placeholder="Search submissions..." className="max-w-sm" />
        <Button variant="outline">Search</Button>
      </div>
      <SubmissionsTable />
    </div>
  )
}
