import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DMFResubmission } from "@/components/dmf-dossier/dmf-resubmission"

export const metadata: Metadata = {
  title: "DMF Resubmission Planning",
  description: "Plan and manage Drug Master File resubmissions",
}

export default function DMFResubmissionPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">DMF Resubmission Planning</h2>
        <p className="text-muted-foreground">
          Plan and track resubmissions of Drug Master Files in response to deficiencies or updates
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resubmission Planning</CardTitle>
          <CardDescription>
            Manage the planning and scheduling of DMF resubmissions across regulatory agencies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DMFResubmission />
        </CardContent>
      </Card>
    </div>
  )
}
