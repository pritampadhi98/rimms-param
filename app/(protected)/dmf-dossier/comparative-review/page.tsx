import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplicationComparison } from "@/components/dmf-dossier/application-comparison"
import { CrossReference } from "@/components/dmf-dossier/cross-reference"
import { CoreDossier } from "@/components/dmf-dossier/core-dossier"
import { GapAnalysis } from "@/components/dmf-dossier/gap-analysis"
import { ContentHarmonization } from "@/components/dmf-dossier/content-harmonization"

export const metadata: Metadata = {
  title: "Comparative Review Management",
  description: "Tools for comparing and analyzing submissions across different markets",
}

export default function ComparativeReviewPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Comparative Review Management</h2>
        <p className="text-muted-foreground">
          Compare and analyze submissions across different markets and identify gaps
        </p>
      </div>

      <Tabs defaultValue="comparison" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="comparison">Comparison</TabsTrigger>
          <TabsTrigger value="cross-reference">Cross-Reference</TabsTrigger>
          <TabsTrigger value="core-dossier">Core Dossier</TabsTrigger>
          <TabsTrigger value="gap-analysis">Gap Analysis</TabsTrigger>
          <TabsTrigger value="harmonization">Harmonization</TabsTrigger>
        </TabsList>
        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Application Comparison Tools</CardTitle>
              <CardDescription>Side-by-side comparison of dossiers across markets</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationComparison />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cross-reference">
          <Card>
            <CardHeader>
              <CardTitle>Cross-Reference Functionality</CardTitle>
              <CardDescription>Ability to link related submissions and applications</CardDescription>
            </CardHeader>
            <CardContent>
              <CrossReference />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="core-dossier">
          <Card>
            <CardHeader>
              <CardTitle>Global Core Dossier Management</CardTitle>
              <CardDescription>Tools for maintaining consistent core documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <CoreDossier />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="gap-analysis">
          <Card>
            <CardHeader>
              <CardTitle>Gap Analysis Utilities</CardTitle>
              <CardDescription>Identification of differences between submitted dossiers</CardDescription>
            </CardHeader>
            <CardContent>
              <GapAnalysis />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="harmonization">
          <Card>
            <CardHeader>
              <CardTitle>Content Harmonization Tools</CardTitle>
              <CardDescription>Features to facilitate global content standardization</CardDescription>
            </CardHeader>
            <CardContent>
              <ContentHarmonization />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
