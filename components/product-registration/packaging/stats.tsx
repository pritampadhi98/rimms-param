"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Package,
  Box,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Factory,
  Truck,
  ShieldAlert,
  FileText,
  Calendar,
} from "lucide-react"
import { useState, useEffect } from "react"

export function PackagingStats() {
  const [approvedProgress, setApprovedProgress] = useState(0)
  const [pendingProgress, setPendingProgress] = useState(0)
  const [complianceProgress, setComplianceProgress] = useState(0)
  const [marketCoverageProgress, setMarketCoverageProgress] = useState(0)
  const [supplyChainProgress, setSupplyChainProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setApprovedProgress(82)
      setPendingProgress(14)
      setComplianceProgress(95)
      setMarketCoverageProgress(78)
      setSupplyChainProgress(92)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Packaging Configurations</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">428</div>
            <p className="text-xs text-muted-foreground">Across all products</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span>Approved</span>
                <span className="text-muted-foreground">82%</span>
              </div>
              <Progress value={approvedProgress} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Container Closure Systems</CardTitle>
            <Box className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
            <p className="text-xs text-muted-foreground">Unique systems</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Primary: 42</div>
              <div>Secondary: 26</div>
              <div>Blister: 18</div>
              <div>Bottle: 24</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Packaging Components</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Individual components</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Primary: 52</div>
              <div>Secondary: 64</div>
              <div>Tertiary: 28</div>
              <div>Ancillary: 12</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Regulatory Status</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">352</div>
            <p className="text-xs text-muted-foreground">Approved configurations</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span>Pending</span>
                <span className="text-muted-foreground">14%</span>
              </div>
              <Progress value={pendingProgress} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">Overall compliance</p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span>Compliance</span>
                <span className="text-muted-foreground">95%</span>
              </div>
              <Progress value={complianceProgress} className="h-1" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Coverage</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Global market coverage</p>
            <div className="mt-3">
              <Progress value={marketCoverageProgress} className="h-1" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>North America: 95%</div>
              <div>Europe: 92%</div>
              <div>Asia Pacific: 68%</div>
              <div>Rest of World: 58%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Manufacturing Sites</CardTitle>
            <Factory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Packaging facilities</p>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Primary: 8 sites</div>
              <div>Secondary: 10 sites</div>
              <div>Utilization: 76%</div>
              <div>Capacity: 1.2M units/day</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Supply Chain Health</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Overall supply chain health</p>
            <div className="mt-3">
              <Progress value={supplyChainProgress} className="h-1" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1 text-xs">
              <div>Component Availability: 94%</div>
              <div>Supplier Performance: 89%</div>
              <div>Low Stock Items: 8</div>
              <div>Critical Shortages: 2</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Activities</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Pending actions</p>
            <div className="mt-3 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span>Regulatory Submissions</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Artwork Updates</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Change Requests</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Compliance Deadlines</span>
                <span className="font-medium">4</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Alerts</CardTitle>
            <ShieldAlert className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-red-50 rounded-md">
                <div className="text-xs">
                  <p className="font-medium">Japan Packaging Update Required</p>
                  <p className="text-muted-foreground">Respiraclear Solution - Due in 20 days</p>
                </div>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </div>
              <div className="flex items-center justify-between p-2 bg-amber-50 rounded-md">
                <div className="text-xs">
                  <p className="font-medium">EU Serialization Compliance</p>
                  <p className="text-muted-foreground">Multiple Products - Due in 45 days</p>
                </div>
                <AlertTriangle className="h-4 w-4 text-amber-500" />
              </div>
              <div className="flex items-center justify-between p-2 bg-amber-50 rounded-md">
                <div className="text-xs">
                  <p className="font-medium">US Labeling Update</p>
                  <p className="text-muted-foreground">Cardiostat Tablets - Due in 60 days</p>
                </div>
                <AlertTriangle className="h-4 w-4 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Approvals</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                <div className="text-xs">
                  <p className="font-medium">Neurobalance Capsules 50mg</p>
                  <p className="text-muted-foreground">EU Market - Approved 3 days ago</p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                <div className="text-xs">
                  <p className="font-medium">Cardiostat XR 50mg</p>
                  <p className="text-muted-foreground">US Market - Approved 7 days ago</p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-2 bg-green-50 rounded-md">
                <div className="text-xs">
                  <p className="font-medium">Respiraclear Inhaler</p>
                  <p className="text-muted-foreground">Japan Market - Approved 12 days ago</p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documentation Status</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Packaging Specifications</span>
                  <span className="text-muted-foreground">98%</span>
                </div>
                <Progress value={98} className="h-1" />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Artwork Files</span>
                  <span className="text-muted-foreground">92%</span>
                </div>
                <Progress value={92} className="h-1" />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Regulatory Submissions</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-1" />
              </div>
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Technical Files</span>
                  <span className="text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
