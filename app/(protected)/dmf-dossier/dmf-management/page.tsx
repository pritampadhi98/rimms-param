import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DMFClassification } from "@/components/dmf-dossier/dmf-classification"
import { DMFRegistry } from "@/components/dmf-dossier/dmf-registry"
import { DMFLifecycle } from "@/components/dmf-dossier/dmf-lifecycle"
import { DMFAuthorization } from "@/components/dmf-dossier/dmf-authorization"
import { DMFReview } from "@/components/dmf-dossier/dmf-review"

export const metadata: Metadata = {
  title: "DMF Management",
  description: "Comprehensive management of Drug Master Files",
}

export default function DMFManagementPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Drug Master File (DMF) Management</h2>
        <p className="text-muted-foreground">
          Comprehensive tools for managing Drug Master Files across global markets
        </p>
      </div>

      <Tabs defaultValue="classification" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="classification">Classification</TabsTrigger>
          <TabsTrigger value="registry">Registry</TabsTrigger>
          <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
          <TabsTrigger value="authorization">Authorization</TabsTrigger>
          <TabsTrigger value="review">Review Status</TabsTrigger>
        </TabsList>
        <TabsContent value="classification">
          <Card>
            <CardHeader>
              <CardTitle>DMF Type Classification</CardTitle>
              <CardDescription>Support for all DMF types (I-V) with appropriate attributes</CardDescription>
            </CardHeader>
            <CardContent>
              <DMFClassification />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="registry">
          <Card>
            <CardHeader>
              <CardTitle>Global DMF Registry</CardTitle>
              <CardDescription>
                Tracking of DMFs filed in multiple markets with cross-reference capability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DMFRegistry />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="lifecycle">
          <Card>
            <CardHeader>
              <CardTitle>DMF Lifecycle Management</CardTitle>
              <CardDescription>Version control and amendment tracking for DMFs</CardDescription>
            </CardHeader>
            <CardContent>
              <DMFLifecycle />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="authorization">
          <Card>
            <CardHeader>
              <CardTitle>Letter of Authorization Tracking</CardTitle>
              <CardDescription>Management of issued and received authorization letters</CardDescription>
            </CardHeader>
            <CardContent>
              <DMFAuthorization />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>DMF Review Status</CardTitle>
              <CardDescription>Monitoring of review progress and deficiency notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <DMFReview />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
