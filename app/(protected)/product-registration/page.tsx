import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductRegistrationOverview } from "@/components/product-registration/overview";
import { ProductRegistrationStats } from "@/components/product-registration/stats";
import { ProductRegistrationIntegrations } from "@/components/product-registration/integrations";
import ProductCatalogPage from "./catalog/page";
import { DosageFormDashboard } from "@/components/product-registration/dosage-form/dashboard";
import IngredientsPage from "./ingredients/page";
import ChangeControlPage from "./change-control/page";

export default function ProductRegistrationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Product Registration
        </h2>
        <Button>Export Data</Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="catalog">Product Catalog</TabsTrigger>
          <TabsTrigger value="dosage">Dosage Forms</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="change-control">Change Control</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <ProductRegistrationStats />
          <ProductRegistrationOverview />
        </TabsContent>

        <TabsContent value="catalog" className="space-y-4">
          <ProductCatalogPage />
        </TabsContent>

        <TabsContent value="dosage" className="space-y-4">
          <DosageFormDashboard />
        </TabsContent>

        <TabsContent value="ingredients" className="space-y-4">
          <IngredientsPage />
        </TabsContent>

        <TabsContent value="change-control" className="space-y-4">
          <ChangeControlPage />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <ProductRegistrationIntegrations />
        </TabsContent>
      </Tabs>
    </div>
  );
}
