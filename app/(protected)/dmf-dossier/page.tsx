import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DMFManagement } from "@/components/dmf-dossier/dmf-management"
import { ANDAManagement } from "@/components/dmf-dossier/anda-management"
import { ComparativeReview } from "@/components/dmf-dossier/comparative-review"
import { DMFDossierStats } from "@/components/dmf-dossier/dmf-dossier-stats"
import { Button } from "@/components/ui/button"
import { FileText, FolderArchive, GitCompare, Plus } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "DMF & ANDA/Dossier Tracker",
  description: "Comprehensive management of Drug Master Files and ANDA/Dossier submissions",
}

export default function DMFDossierPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">DMF & ANDA/Dossier Tracker</h2>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Entry
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">
          Manage Drug Master Files, ANDA/Dossier submissions, and perform comparative reviews across markets
        </p>
      </div>

      <DMFDossierStats />

      <Tabs defaultValue="dmf" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dmf" className="flex items-center">
            <FolderArchive className="mr-2 h-4 w-4" />
            DMF Management
          </TabsTrigger>
          <TabsTrigger value="anda" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            ANDA/Dossier Management
          </TabsTrigger>
          <TabsTrigger value="comparative" className="flex items-center">
            <GitCompare className="mr-2 h-4 w-4" />
            Comparative Review
          </TabsTrigger>
        </TabsList>
        <TabsContent value="dmf">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Drug Master File (DMF) Management</CardTitle>
                  <CardDescription>Comprehensive management of Drug Master Files across global markets</CardDescription>
                </div>
                <Button asChild>
                  <Link href="/dmf-dossier/dmf-management">View All DMF Management</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <DMFManagement />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="anda">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>ANDA/Dossier Management</CardTitle>
                  <CardDescription>
                    Tools for managing ANDA and other dossier submissions across regulatory agencies
                  </CardDescription>
                </div>
                <Button asChild>
                  <Link href="/dmf-dossier/anda-management">View All ANDA Management</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ANDAManagement />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="comparative">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Comparative Review Management</CardTitle>
                  <CardDescription>
                    Compare and analyze submissions across different markets and identify gaps
                  </CardDescription>
                </div>
                <Button asChild>
                  <Link href="/dmf-dossier/comparative-review">View All Comparative Reviews</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ComparativeReview />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
