import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DMFHolderInfo } from "@/components/dmf-dossier/dmf-holder-info"

export const metadata: Metadata = {
  title: "DMF Holder Information",
  description: "Manage information about Drug Master File holders",
}

export default function DMFHolderPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">DMF Holder Information</h2>
        <p className="text-muted-foreground">
          Manage and track information about Drug Master File holders and their contact details
        </p>
      </div>

      <Tabs defaultValue="holders" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="holders">Holder Directory</TabsTrigger>
          <TabsTrigger value="contacts">Contact Management</TabsTrigger>
          <TabsTrigger value="agreements">Agreements</TabsTrigger>
        </TabsList>
        <TabsContent value="holders">
          <Card>
            <CardHeader>
              <CardTitle>DMF Holder Directory</CardTitle>
              <CardDescription>Comprehensive directory of all DMF holders and their associated DMFs</CardDescription>
            </CardHeader>
            <CardContent>
              <DMFHolderInfo />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Contact Management</CardTitle>
              <CardDescription>
                Manage contact information for DMF holders and authorized representatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Contact management functionality will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="agreements">
          <Card>
            <CardHeader>
              <CardTitle>Agreements</CardTitle>
              <CardDescription>Track and manage agreements with DMF holders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Agreement tracking functionality will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
