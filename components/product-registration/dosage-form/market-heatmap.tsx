"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GlobalMarketHeatmap() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="regions">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="regions">Regions</TabsTrigger>
          <TabsTrigger value="countries">Top Countries</TabsTrigger>
        </TabsList>
        <TabsContent value="regions" className="space-y-4 pt-4">
          {[
            { region: "North America", count: 112, percentage: 92, color: "bg-green-500" },
            { region: "European Union", count: 98, percentage: 85, color: "bg-green-500" },
            { region: "Asia Pacific", count: 76, percentage: 68, color: "bg-yellow-500" },
            { region: "Latin America", count: 54, percentage: 48, color: "bg-yellow-500" },
            { region: "Middle East & Africa", count: 42, percentage: 38, color: "bg-orange-500" },
          ].map((item) => (
            <div key={item.region} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{item.region}</span>
                <div className="flex items-center">
                  <span className="text-sm mr-2">{item.count} presentations</span>
                  <Badge variant="outline" className={item.color}>
                    {item.percentage}%
                  </Badge>
                </div>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          ))}
        </TabsContent>
        <TabsContent value="countries" className="pt-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              { country: "United States", count: 86, status: "Complete" },
              { country: "Germany", count: 72, status: "Complete" },
              { country: "Japan", count: 68, status: "Partial" },
              { country: "United Kingdom", count: 65, status: "Complete" },
              { country: "France", count: 62, status: "Complete" },
              { country: "China", count: 58, status: "Partial" },
              { country: "Canada", count: 56, status: "Complete" },
              { country: "Brazil", count: 48, status: "Partial" },
              { country: "Australia", count: 45, status: "Complete" },
              { country: "India", count: 42, status: "Partial" },
            ].map((item) => (
              <Card key={item.country} className="overflow-hidden">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{item.country}</span>
                    <Badge variant={item.status === "Complete" ? "default" : "outline"} className="text-xs">
                      {item.status}
                    </Badge>
                  </div>
                  <div className="text-sm mt-1">{item.count} presentations</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
