"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock, FileText, FolderArchive, GitCompare, Globe, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function DMFDossierStats() {
  const [dmfProgress, setDmfProgress] = useState(0)
  const [andaProgress, setAndaProgress] = useState(0)
  const [reviewProgress, setReviewProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDmfProgress(78)
      setAndaProgress(65)
      setReviewProgress(42)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total DMFs</CardTitle>
          <FolderArchive className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">142</div>
          <p className="text-xs text-muted-foreground">+12 from last month</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Active</span>
              <span className="text-muted-foreground">78%</span>
            </div>
            <Progress value={dmfProgress} className="h-1" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">ANDA/Dossiers</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">87</div>
          <p className="text-xs text-muted-foreground">+5 from last month</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>In Progress</span>
              <span className="text-muted-foreground">65%</span>
            </div>
            <Progress value={andaProgress} className="h-1" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">-3 from last month</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Completion</span>
              <span className="text-muted-foreground">42%</span>
            </div>
            <Progress value={reviewProgress} className="h-1" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Global Coverage</CardTitle>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">32</div>
          <p className="text-xs text-muted-foreground">Countries with active filings</p>
          <Tabs defaultValue="regions" className="mt-3">
            <TabsList className="grid w-full grid-cols-2 h-7">
              <TabsTrigger value="regions" className="text-xs">
                Regions
              </TabsTrigger>
              <TabsTrigger value="status" className="text-xs">
                Status
              </TabsTrigger>
            </TabsList>
            <TabsContent value="regions" className="mt-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span>North America</span>
                  <span>42%</span>
                </div>
                <Progress value={42} className="h-1" />
                <div className="flex items-center justify-between text-xs">
                  <span>Europe</span>
                  <span>35%</span>
                </div>
                <Progress value={35} className="h-1" />
                <div className="flex items-center justify-between text-xs">
                  <span>Asia Pacific</span>
                  <span>23%</span>
                </div>
                <Progress value={23} className="h-1" />
              </div>
            </TabsContent>
            <TabsContent value="status" className="mt-2">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center">
                  <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                  <span>Approved: 68</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1 text-amber-500" />
                  <span>Pending: 42</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1 text-red-500" />
                  <span>Issues: 12</span>
                </div>
                <div className="flex items-center">
                  <GitCompare className="h-3 w-3 mr-1 text-blue-500" />
                  <span>In Review: 20</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
