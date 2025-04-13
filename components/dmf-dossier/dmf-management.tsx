"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileArchive,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Users,
  Calendar,
  Database,
  Link2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export function DMFManagement() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recent">Recent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <FileArchive className="mr-2 h-5 w-5 text-primary" /> DMF Type Classification
                </CardTitle>
                <CardDescription>Support for all DMF types (I-V) with appropriate attributes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Type II (Drug Substance)</span>
                    <Badge>68</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Type III (Packaging)</span>
                    <Badge>42</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Type IV (Excipient)</span>
                    <Badge>23</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Type V (FDA Accepted Reference)</span>
                    <Badge>9</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/classification">View All Types</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <FileText className="mr-2 h-5 w-5 text-primary" /> Global DMF Registry
                </CardTitle>
                <CardDescription>
                  Tracking of DMFs filed in multiple markets with cross-reference capability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>US FDA</span>
                    <Badge>56</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>EU EMA</span>
                    <Badge>38</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Health Canada</span>
                    <Badge>27</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Japan PMDA</span>
                    <Badge>21</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/registry">View Registry</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-2 h-5 w-5 text-primary" /> DMF Review Status
                </CardTitle>
                <CardDescription>Monitoring of review progress and deficiency notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" /> Approved
                    </span>
                    <Badge variant="outline">78</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-amber-500" /> Under Review
                    </span>
                    <Badge variant="outline">24</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <AlertCircle className="mr-2 h-4 w-4 text-red-500" /> Deficiency Notice
                    </span>
                    <Badge variant="outline">3</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Plus className="mr-2 h-4 w-4 text-blue-500" /> Planned Submission
                    </span>
                    <Badge variant="outline">12</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/review">View Status Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Users className="mr-2 h-5 w-5 text-primary" /> DMF Holder Information
                </CardTitle>
                <CardDescription>
                  Comprehensive contact information for DMF holders and authorized parties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Active Holders</span>
                    <Badge variant="outline">24</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Authorized Representatives</span>
                    <Badge variant="outline">36</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Contact Updates (30 days)</span>
                    <Badge variant="outline">8</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/holder">View Holder Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="mr-2 h-5 w-5 text-primary" /> DMF Lifecycle Management
                </CardTitle>
                <CardDescription>Version control and amendment tracking for DMFs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Active Versions</span>
                    <Badge variant="outline">142</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pending Amendments</span>
                    <Badge variant="outline">18</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Annual Reports Due</span>
                    <Badge variant="outline">12</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/lifecycle">View Lifecycle Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <FileText className="mr-2 h-5 w-5 text-primary" /> Letter of Authorization
                </CardTitle>
                <CardDescription>Management of issued and received authorization letters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Active LOAs</span>
                    <Badge variant="outline">86</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pending Requests</span>
                    <Badge variant="outline">14</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Expiring (90 days)</span>
                    <Badge variant="outline">8</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/authorization">View Authorization Details</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="mr-2 h-5 w-5 text-primary" /> DMF Resubmission Planning
                </CardTitle>
                <CardDescription>Timeline management for DMF updates and renewals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Planned Resubmissions</span>
                    <Badge variant="outline">12</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>In Progress</span>
                    <Badge variant="outline">8</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Due in 30 Days</span>
                    <Badge variant="outline">5</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/resubmission">View Resubmission Plans</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Database className="mr-2 h-5 w-5 text-primary" /> DMF Content Inventory
                </CardTitle>
                <CardDescription>Cataloging of documents included in each DMF version</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Total Documents</span>
                    <Badge variant="outline">1,245</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Complete DMFs</span>
                    <Badge variant="outline">118</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Incomplete DMFs</span>
                    <Badge variant="outline">24</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/inventory">View Content Inventory</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Link2 className="mr-2 h-5 w-5 text-primary" /> DMF Usage Tracking
                </CardTitle>
                <CardDescription>Cross-referencing DMFs to related product applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Referenced DMFs</span>
                    <Badge variant="outline">132</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Referencing Applications</span>
                    <Badge variant="outline">87</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Companies</span>
                    <Badge variant="outline">42</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dmf-dossier/dmf-management/usage">View Usage Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent DMF Activity</CardTitle>
              <CardDescription>Latest updates and changes to DMFs in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 pb-4 border-b last:border-0">
                    <div className={`rounded-full p-2 ${getActivityIconBackground(activity.type)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{activity.user}</span>
                        <span className="mx-2">•</span>
                        <span>{activity.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const recentActivity = [
  {
    type: "new",
    title: "New DMF Added",
    description: "DMF-2023-045 for Metformin HCl has been added to the registry",
    user: "John Smith",
    date: "Today at 10:23 AM",
  },
  {
    type: "update",
    title: "DMF Updated",
    description: "DMF-2022-112 for Acetaminophen has been updated with new stability data",
    user: "Sarah Johnson",
    date: "Yesterday at 3:45 PM",
  },
  {
    type: "review",
    title: "Review Status Changed",
    description: "DMF-2023-018 review status changed from 'Under Review' to 'Approved'",
    user: "Michael Chen",
    date: "Yesterday at 11:30 AM",
  },
  {
    type: "loa",
    title: "New LOA Issued",
    description: "Letter of Authorization issued for DMF-2022-089 to Generic Pharma Inc.",
    user: "Emily Rodriguez",
    date: "May 2, 2023",
  },
  {
    type: "deficiency",
    title: "Deficiency Notification",
    description: "Deficiency notification received for DMF-2023-027 from FDA",
    user: "Robert Wilson",
    date: "May 1, 2023",
  },
]

function getActivityIcon(type: string) {
  switch (type) {
    case "new":
      return <Plus className="h-4 w-4 text-white" />
    case "update":
      return <FileText className="h-4 w-4 text-white" />
    case "review":
      return <CheckCircle2 className="h-4 w-4 text-white" />
    case "loa":
      return <Link2 className="h-4 w-4 text-white" />
    case "deficiency":
      return <AlertCircle className="h-4 w-4 text-white" />
    default:
      return <FileText className="h-4 w-4 text-white" />
  }
}

function getActivityIconBackground(type: string) {
  switch (type) {
    case "new":
      return "bg-blue-500"
    case "update":
      return "bg-green-500"
    case "review":
      return "bg-purple-500"
    case "loa":
      return "bg-amber-500"
    case "deficiency":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}
