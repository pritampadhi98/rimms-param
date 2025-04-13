"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useIntegration } from "@/contexts/integration-context"
import { Database, RefreshCw, AlertTriangle } from "lucide-react"

export default function ProductDetailsPage() {
  const params = useParams()
  const productId = params.id as string
  const { integrations } = useIntegration()
  const [activeTab, setActiveTab] = useState("details")

  // Mock product data - in a real app, this would be fetched from an API
  const product = {
    id: productId,
    name: "Cardiostat",
    activeIngredient: "Amlodipine",
    dosageForm: "Tablet",
    strength: "10mg",
    markets: 28,
    status: "Active",
    description: "Calcium channel blocker used to treat high blood pressure and coronary artery disease",
    therapeuticArea: "Cardiovascular",
    atcCode: "C08CA01",
    createdAt: "2022-05-15T10:30:00Z",
    updatedAt: "2023-08-22T14:45:00Z",
  }

  // Get document management integrations
  const documentIntegrations = integrations.filter((i) => i.type === "document_management" && i.status === "connected")

  // Get ERP integrations
  const erpIntegrations = integrations.filter((i) => i.type === "erp" && i.status === "connected")

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <Badge variant="success">{product.status}</Badge>
      </div>

      <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>Basic information about the product</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Active Ingredient</h3>
                  <p>{product.activeIngredient}</p>
                </div>
                <div>
                  <h3 className="font-medium">Dosage Form</h3>
                  <p>{product.dosageForm}</p>
                </div>
                <div>
                  <h3 className="font-medium">Strength</h3>
                  <p>{product.strength}</p>
                </div>
                <div>
                  <h3 className="font-medium">Therapeutic Area</h3>
                  <p>{product.therapeuticArea}</p>
                </div>
                <div>
                  <h3 className="font-medium">ATC Code</h3>
                  <p>{product.atcCode}</p>
                </div>
                <div>
                  <h3 className="font-medium">Markets</h3>
                  <p>{product.markets} markets</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium">Description</h3>
                <p>{product.description}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submissions</CardTitle>
              <CardDescription>Regulatory submissions for this product</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No submissions found for this product.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Product documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No documents found for this product.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integration Status</CardTitle>
              <CardDescription>External system integrations for this product</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Document Management
                  </h3>

                  {documentIntegrations.length > 0 ? (
                    <div className="space-y-3">
                      {documentIntegrations.map((integration) => (
                        <div key={integration.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {integration.lastSyncTime
                                ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                                : "Never synced"}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Sync Documents
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      No document management integrations configured
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    ERP Systems
                  </h3>

                  {erpIntegrations.length > 0 ? (
                    <div className="space-y-3">
                      {erpIntegrations.map((integration) => (
                        <div key={integration.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {integration.lastSyncTime
                                ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                                : "Never synced"}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Sync Product Data
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      No ERP system integrations configured
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
