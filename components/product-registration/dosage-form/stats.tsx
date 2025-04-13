"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Pill, FlaskRoundIcon as Flask, Layers, CheckCircle2, Clock } from "lucide-react"
import { useState, useEffect } from "react"

export function DosageFormStats() {
  const [activeProgress, setActiveProgress] = useState(0)
  const [developmentProgress, setDevelopmentProgress] = useState(0)
  const [approvalProgress, setApprovalProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveProgress(85)
      setDevelopmentProgress(62)
      setApprovalProgress(78)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          <Pill className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">128</div>
          <p className="text-xs text-muted-foreground">Across all markets</p>
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Active</span>
              <span className="text-muted-foreground">85%</span>
            </div>
            <Progress value={activeProgress} className="h-1" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Formulations</CardTitle>
          <Flask className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42</div>
          <p className="text-xs text-muted-foreground">Unique formulations</p>
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>In Development</span>
              <span className="text-muted-foreground">62%</span>
            </div>
            <Progress value={developmentProgress} className="h-1" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Strengths</CardTitle>
          <Layers className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">215</div>
          <p className="text-xs text-muted-foreground">Across all formulations</p>
          <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
            <div>Solid: 142</div>
            <div>Liquid: 48</div>
            <div>Semi-solid: 18</div>
            <div>Other: 7</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Presentations</CardTitle>
          <Layers className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">386</div>
          <p className="text-xs text-muted-foreground">Packaging configurations</p>
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Approved</span>
              <span className="text-muted-foreground">78%</span>
            </div>
            <Progress value={approvalProgress} className="h-1" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Approval Status</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center">
              <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
              <span>Approved: 302</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1 text-amber-500" />
              <span>Pending: 48</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 mr-1 rounded-full bg-blue-500" />
              <span>Development: 24</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 mr-1 rounded-full bg-red-500" />
              <span>Discontinued: 12</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">Last updated: Today at 09:42 AM</div>
        </CardContent>
      </Card>
    </div>
  )
}
