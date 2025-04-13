import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductRegistrationOverview } from "@/components/product-registration/overview"
import { ProductRegistrationStats } from "@/components/product-registration/stats"
import { ProductRegistrationIntegrations } from "@/components/product-registration/integrations"

export default function ProductRegistrationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Product Registration</h2>
        <Button>Export Data</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="catalog">Product Catalog</TabsTrigger>
          <TabsTrigger value="dosage">Dosage Forms</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <ProductRegistrationStats />
          <ProductRegistrationOverview />
        </TabsContent>

        <TabsContent value="catalog" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>Master repository of all company products with unique identifiers</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a product from the catalog section to view details.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dosage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dosage Forms</CardTitle>
              <CardDescription>
                Complete specifications for all product formulations, strengths, and presentations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Select a dosage form from the dosage forms section to view details.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ingredients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
              <CardDescription>Active and inactive ingredient tracking with global naming conventions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Select an ingredient from the ingredients section to view details.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <ProductRegistrationIntegrations />
        </TabsContent>
      </Tabs>
    </div>
  )
}
