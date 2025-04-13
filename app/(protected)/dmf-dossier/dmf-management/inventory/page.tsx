import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DMFInventory } from "@/components/dmf-dossier/dmf-inventory"

export const metadata: Metadata = {
  title: "DMF Content Inventory",
  description: "Manage and track the content inventory of Drug Master Files",
}

export default function DMFInventoryPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">DMF Content Inventory</h2>
        <p className="text-muted-foreground">
          Manage and track the content inventory of Drug Master Files to ensure completeness and compliance
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Content Inventory</CardTitle>
          <CardDescription>Track and manage the documents and content included in Drug Master Files</CardDescription>
        </CardHeader>
        <CardContent>
          <DMFInventory />
        </CardContent>
      </Card>
    </div>
  )
}
