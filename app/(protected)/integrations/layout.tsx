import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RIMMS - Integrations",
  description: "Manage enterprise integrations for the Regulatory Information Management System",
}

interface IntegrationsLayoutProps {
  children: React.ReactNode
}

export default function IntegrationsLayout({ children }: IntegrationsLayoutProps) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Integrations</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
