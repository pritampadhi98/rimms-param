import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { LifecycleOverview } from "@/components/product-registration/lifecycle/overview"
import { LifecycleStats } from "@/components/product-registration/lifecycle/stats"
import { FormulationManagement } from "@/components/product-registration/lifecycle/formulation-management"
import { StrengthDosageTracking } from "@/components/product-registration/lifecycle/strength-dosage-tracking"
import { PresentationManagement } from "@/components/product-registration/lifecycle/presentation-management"
import { RegulatoryMilestones } from "@/components/product-registration/lifecycle/regulatory-milestones"
import { ChangeControlManagement } from "@/components/product-registration/lifecycle/change-control"
import { MarketAuthorization } from "@/components/product-registration/lifecycle/market-authorization"
import { DiscontinuationPlanning } from "@/components/product-registration/lifecycle/discontinuation-planning"
import { LifecycleAnalytics } from "@/components/product-registration/lifecycle/analytics"
import { Download, Plus, Filter, RefreshCw } from "lucide-react"

export default function LifecycleManagementPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Lifecycle Management</h2>
          <p className="text-muted-foreground">
            Comprehensive management of product formulations, strengths, and presentations throughout their lifecycle
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Product
          </Button>
        </div>
      </div>

      <LifecycleStats />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-5 md:grid-cols-10">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="formulation">Formulation</TabsTrigger>
          <TabsTrigger value="strength">Strength & Dosage</TabsTrigger>
          <TabsTrigger value="presentation">Presentation</TabsTrigger>
          <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
          <TabsTrigger value="change">Change Control</TabsTrigger>
          <TabsTrigger value="market">Market Auth</TabsTrigger>
          <TabsTrigger value="discontinuation">Discontinuation</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <LifecycleOverview />
        </TabsContent>

        <TabsContent value="formulation" className="space-y-4">
          <FormulationManagement />
        </TabsContent>

        <TabsContent value="strength" className="space-y-4">
          <StrengthDosageTracking />
        </TabsContent>

        <TabsContent value="presentation" className="space-y-4">
          <PresentationManagement />
        </TabsContent>

        <TabsContent value="regulatory" className="space-y-4">
          <RegulatoryMilestones />
        </TabsContent>

        <TabsContent value="change" className="space-y-4">
          <ChangeControlManagement />
        </TabsContent>

        <TabsContent value="market" className="space-y-4">
          <MarketAuthorization />
        </TabsContent>

        <TabsContent value="discontinuation" className="space-y-4">
          <DiscontinuationPlanning />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <LifecycleAnalytics />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full">
              <h3 className="text-lg font-medium">Integration Status</h3>
              <p className="text-sm text-muted-foreground">
                Current status of integrations with external systems for lifecycle management
              </p>
            </div>
            {/* Integration cards would go here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
