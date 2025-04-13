import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DMFUsage } from "@/components/dmf-dossier/dmf-usage"

export const metadata: Metadata = {
  title: "DMF Usage Tracking",
  description: "Track the usage of Drug Master Files across different applications",
}

export default function DMFUsagePage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">DMF Usage Tracking</h2>
        <p className="text-muted-foreground">
          Track how Drug Master Files are referenced and used across different regulatory applications
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>DMF Usage</CardTitle>
          <CardDescription>
            Monitor which applications reference specific DMFs and track authorization letters
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DMFUsage />
        </CardContent>
      </Card>
    </div>
  )
}
