import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegulatoryIntelligenceStats } from "@/components/regulatory-intelligence/regulatory-intelligence-stats"
import { AuthorityDatabase } from "@/components/regulatory-intelligence/authority-database"
import { RequirementUpdates } from "@/components/regulatory-intelligence/requirement-updates"
import { ReviewTimelines } from "@/components/regulatory-intelligence/review-timelines"
import { Download, Bell } from "lucide-react"

export default function RegulatoryIntelligencePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Global Regulatory Intelligence</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Subscribe to Updates
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authorities">Authority Database</TabsTrigger>
          <TabsTrigger value="updates">Requirement Updates</TabsTrigger>
          <TabsTrigger value="timelines">Review Timelines</TabsTrigger>
          <TabsTrigger value="documents">Document Matrix</TabsTrigger>
          <TabsTrigger value="formats">Dossier Formats</TabsTrigger>
          <TabsTrigger value="fees">Fees Structure</TabsTrigger>
          <TabsTrigger value="contacts">Contact Directory</TabsTrigger>
          <TabsTrigger value="holidays">Holidays Calendar</TabsTrigger>
          <TabsTrigger value="languages">Language Requirements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <RegulatoryIntelligenceStats />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Authority Database</CardTitle>
                <CardDescription>Comprehensive information on 200+ global regulatory authorities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access detailed profiles of regulatory authorities including contact information, submission
                  requirements, and review processes.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Authority Database
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Requirement Updates</CardTitle>
                <CardDescription>Automated monitoring of regulatory changes by market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Stay informed about regulatory changes with automated alerts and summaries of recent updates.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Requirement Updates
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Review Timeline Database</CardTitle>
                <CardDescription>Expected review cycles by submission type and country</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access historical and expected review timelines for different submission types across markets.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Review Timelines
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Required Document Matrix</CardTitle>
                <CardDescription>Market-specific documentation requirements by submission type</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access comprehensive matrix of required documents for different submission types by market.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Document Matrix
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dossier Format Requirements</CardTitle>
                <CardDescription>CTD, eCTD, ACTD, and country-specific format guidelines</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access detailed format requirements for regulatory submissions across different markets.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Dossier Formats
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fees Structure Database</CardTitle>
                <CardDescription>Up-to-date fee schedules for all submission types by country</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access comprehensive database of regulatory fees for different submission types by market.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Fees Structure
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Contact Directory</CardTitle>
                <CardDescription>Maintained database of authority contacts by department</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access up-to-date contact information for regulatory authorities by department and function.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Contact Directory
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Holidays Calendar</CardTitle>
                <CardDescription>Official holidays and non-working days by regulatory agency</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access calendar of official holidays and non-working days for regulatory agencies worldwide.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Holidays Calendar
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Language Requirements</CardTitle>
                <CardDescription>Documentation language specifications by market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access detailed language requirements for regulatory submissions across different markets.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Language Requirements
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="authorities" className="space-y-4">
          <AuthorityDatabase />
        </TabsContent>

        <TabsContent value="updates" className="space-y-4">
          <RequirementUpdates />
        </TabsContent>

        <TabsContent value="timelines" className="space-y-4">
          <ReviewTimelines />
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Required Document Matrix</CardTitle>
              <CardDescription>Market-specific documentation requirements by submission type</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a country and submission type to view required documents.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="formats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dossier Format Requirements</CardTitle>
              <CardDescription>CTD, eCTD, ACTD, and country-specific format guidelines</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a country to view dossier format requirements.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fees Structure Database</CardTitle>
              <CardDescription>Up-to-date fee schedules for all submission types by country</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a country and submission type to view fee information.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Contact Directory</CardTitle>
              <CardDescription>Maintained database of authority contacts by department</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select an authority to view contact information.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="holidays" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Holidays Calendar</CardTitle>
              <CardDescription>Official holidays and non-working days by regulatory agency</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a country to view regulatory holidays.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="languages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Language Requirements</CardTitle>
              <CardDescription>Documentation language specifications by market</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a country to view language requirements.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
