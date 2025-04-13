"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function MarketAvailabilityMap() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Select Product Family</div>
              <Select defaultValue="cardiostat">
                <SelectTrigger>
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiostat">Cardiostat</SelectItem>
                  <SelectItem value="neurobalance">Neurobalance</SelectItem>
                  <SelectItem value="oncoshield">Oncoshield</SelectItem>
                  <SelectItem value="immunoguard">ImmunoGuard</SelectItem>
                  <SelectItem value="infectoclear">InfectoClear</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Region</div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia-pacific">Asia-Pacific</SelectItem>
                  <SelectItem value="latin-america">Latin America</SelectItem>
                  <SelectItem value="middle-east">Middle East & Africa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm font-medium">Status</div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="marketed">Marketed</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending Approval</SelectItem>
                  <SelectItem value="development">In Development</SelectItem>
                  <SelectItem value="not-filed">Not Filed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cardiostat - Global Market Availability</CardTitle>
          <CardDescription>Availability of different strengths across markets</CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span> Marketed
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span> Approved
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span> Pending Approval
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span> In Development
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-gray-300"></span> Not Filed
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="table" className="space-y-4">
            <TabsList>
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
            <TabsContent value="table" className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country/Region</TableHead>
                    <TableHead>5mg</TableHead>
                    <TableHead>10mg</TableHead>
                    <TableHead>20mg</TableHead>
                    <TableHead>40mg</TableHead>
                    <TableHead>80mg</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">United States</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-amber-50">Pending Approval</TableCell>
                    <TableCell className="bg-purple-50">In Development</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">European Union</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-blue-50">Approved</TableCell>
                    <TableCell className="bg-gray-50">Not Filed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Japan</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-gray-50">Not Filed</TableCell>
                    <TableCell className="bg-gray-50">Not Filed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">China</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-amber-50">Pending Approval</TableCell>
                    <TableCell className="bg-gray-50">Not Filed</TableCell>
                    <TableCell className="bg-gray-50">Not Filed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Brazil</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-green-50">Marketed</TableCell>
                    <TableCell className="bg-blue-50">Approved</TableCell>
                    <TableCell className="bg-gray-50">Not Filed</TableCell>
                    <TableCell className="bg-gray-50">Not Filed</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="map" className="space-y-4">
              <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <div className="text-muted-foreground">Interactive map visualization would be displayed here</div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
