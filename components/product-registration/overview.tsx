"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PackageCheck, Clock, AlertTriangle } from "lucide-react"

export function ProductRegistrationOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Registration Status</CardTitle>
          <CardDescription>Global product registration status by region</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <div className="space-y-4">
                {[
                  { region: "North America", count: 42, percentage: 85 },
                  { region: "Europe", count: 38, percentage: 78 },
                  { region: "Asia Pacific", count: 35, percentage: 72 },
                  { region: "Latin America", count: 28, percentage: 58 },
                  { region: "Middle East & Africa", count: 22, percentage: 45 },
                ].map((item) => (
                  <div key={item.region} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <PackageCheck className="h-4 w-4 mr-2 text-green-500" />
                        <span className="font-medium">{item.region}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">{item.count} products</span>
                        <Badge variant="outline">{item.percentage}%</Badge>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pending">
              <div className="space-y-4">
                {[
                  { region: "North America", count: 8, percentage: 15 },
                  { region: "Europe", count: 12, percentage: 22 },
                  { region: "Asia Pacific", count: 15, percentage: 28 },
                  { region: "Latin America", count: 18, percentage: 42 },
                  { region: "Middle East & Africa", count: 24, percentage: 55 },
                ].map((item) => (
                  <div key={item.region} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-amber-500" />
                        <span className="font-medium">{item.region}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">{item.count} products</span>
                        <Badge variant="outline">{item.percentage}%</Badge>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="expired">
              <div className="space-y-4">
                {[
                  { region: "North America", count: 2, percentage: 5 },
                  { region: "Europe", count: 3, percentage: 8 },
                  { region: "Asia Pacific", count: 4, percentage: 10 },
                  { region: "Latin America", count: 6, percentage: 15 },
                  { region: "Middle East & Africa", count: 8, percentage: 20 },
                ].map((item) => (
                  <div key={item.region} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-destructive" />
                        <span className="font-medium">{item.region}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">{item.count} products</span>
                        <Badge variant="outline">{item.percentage}%</Badge>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest product registration activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                product: "Cardiostat 10mg",
                action: "Registration Approved",
                market: "Canada",
                date: "2023-09-15",
              },
              {
                product: "Neurobalance 25mg",
                action: "Dossier Submitted",
                market: "European Union",
                date: "2023-09-12",
              },
              {
                product: "Respiroclear Inhaler",
                action: "Registration Renewal",
                market: "Japan",
                date: "2023-09-08",
              },
              {
                product: "Gastroease 50mg",
                action: "Formulation Update",
                market: "United States",
                date: "2023-09-05",
              },
              {
                product: "Dermacalm Cream",
                action: "Manufacturing Site Added",
                market: "Australia",
                date: "2023-09-01",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 border-b pb-3 last:border-0 last:pb-0">
                <div className="flex-1">
                  <p className="font-medium">{item.product}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.action} - {item.market}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">{item.date}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
