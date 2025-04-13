import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DossierAssembly } from "@/components/dmf-dossier/dossier-assembly"
import { SubmissionMetadata } from "@/components/dmf-dossier/submission-metadata"
import { DossierVersioning } from "@/components/dmf-dossier/dossier-versioning"
import { DocumentRepository } from "@/components/dmf-dossier/document-repository"
import { DossierStatus } from "@/components/dmf-dossier/dossier-status"

export const metadata: Metadata = {
  title: "ANDA/Dossier Management",
  description: "Tools for managing ANDA and other dossier submissions",
}

export default function ANDAManagementPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">ANDA/Dossier Management</h2>
        <p className="text-muted-foreground">
          Tools for managing ANDA and other dossier submissions across regulatory agencies
        </p>
      </div>

      <Tabs defaultValue="assembly" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="assembly">Assembly</TabsTrigger>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
          <TabsTrigger value="versioning">Versioning</TabsTrigger>
          <TabsTrigger value="repository">Repository</TabsTrigger>
          <TabsTrigger value="status">Status</TabsTrigger>
        </TabsList>
        <TabsContent value="assembly">
          <Card>
            <CardHeader>
              <CardTitle>Application Dossier Assembly</CardTitle>
              <CardDescription>Structure management for CTD/eCTD and other formats</CardDescription>
            </CardHeader>
            <CardContent>
              <DossierAssembly />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="metadata">
          <Card>
            <CardHeader>
              <CardTitle>Submission Metadata Tracking</CardTitle>
              <CardDescription>Comprehensive tracking of submission parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <SubmissionMetadata />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="versioning">
          <Card>
            <CardHeader>
              <CardTitle>Dossier Versioning</CardTitle>
              <CardDescription>Complete version control of all dossier elements</CardDescription>
            </CardHeader>
            <CardContent>
              <DossierVersioning />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="repository">
          <Card>
            <CardHeader>
              <CardTitle>Document Reuse Repository</CardTitle>
              <CardDescription>Library of standardized documents for multiple submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <DocumentRepository />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="status">
          <Card>
            <CardHeader>
              <CardTitle>ANDA/Dossier Status Tracking</CardTitle>
              <CardDescription>Real-time status monitoring throughout review process</CardDescription>
            </CardHeader>
            <CardContent>
              <DossierStatus />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
