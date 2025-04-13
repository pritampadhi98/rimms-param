import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarketAuthStats } from "@/components/market-authorization/market-auth-stats"
import { CountryRequirements } from "@/components/market-authorization/country-requirements"
import { SubmissionTypes } from "@/components/market-authorization/submission-types"
import { ApplicationForms } from "@/components/market-authorization/application-forms"
import { ApprovalCertificates } from "@/components/market-authorization/approval-certificates"
import { Plus, Download } from "lucide-react"

export default function MarketAuthorizationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Market Authorization Management</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Authorization
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="countries">Country Requirements</TabsTrigger>
          <TabsTrigger value="submission-types">Submission Types</TabsTrigger>
          <TabsTrigger value="application-forms">Application Forms</TabsTrigger>
          <TabsTrigger value="certificates">Approval Certificates</TabsTrigger>
          <TabsTrigger value="conditions">Approval Conditions</TabsTrigger>
          <TabsTrigger value="label-claims">Label Claims</TabsTrigger>
          <TabsTrigger value="patents">Patents & Exclusivity</TabsTrigger>
          <TabsTrigger value="fees">Registration Fees</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <MarketAuthStats />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Country Requirements</CardTitle>
                <CardDescription>Pre-configured regulatory requirements for 150+ countries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access country-specific regulatory requirements, submission guidelines, and local regulations.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Country Requirements
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Submission Types</CardTitle>
                <CardDescription>Categorization of submission types by regulatory region</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Browse comprehensive classification of submission types across different regulatory regions.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Submission Types
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Application Forms</CardTitle>
                <CardDescription>Market-specific application templates with validation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access pre-configured application form templates with built-in validation rules.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Application Forms
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Registration Timelines</CardTitle>
                <CardDescription>End-to-end monitoring of submission and approval processes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track submission timelines, review cycles, and approval processes across markets.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Registration Timelines
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Approval Certificates</CardTitle>
                <CardDescription>Digital storage of all market authorization certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage and store digital copies of approval certificates with metadata.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Approval Certificates
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Approval Conditions</CardTitle>
                <CardDescription>Management of post-approval commitments and conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track and manage post-approval commitments, conditions, and follow-up requirements.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Approval Conditions
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Label Claims</CardTitle>
                <CardDescription>Database of approved indications, contra-indications, and warnings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage approved label claims, indications, and warnings by market.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Label Claims
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Patents & Exclusivity</CardTitle>
                <CardDescription>Management of patent expiration and market exclusivity periods</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track patent expiration dates, market exclusivity periods, and related data.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Patents & Exclusivity
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Registration Fees</CardTitle>
                <CardDescription>Tracking of all submission and maintenance fee payments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage submission fees, annual maintenance fees, and other regulatory payments.
                </p>
                <Button variant="link" className="px-0 mt-2">
                  View Registration Fees
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="countries" className="space-y-4">
          <CountryRequirements />
        </TabsContent>

        <TabsContent value="submission-types" className="space-y-4">
          <SubmissionTypes />
        </TabsContent>

        <TabsContent value="application-forms" className="space-y-4">
          <ApplicationForms />
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <ApprovalCertificates />
        </TabsContent>

        <TabsContent value="conditions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approval Conditions</CardTitle>
              <CardDescription>Management of post-approval commitments and conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a product to view its approval conditions.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="label-claims" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Label Claims Registry</CardTitle>
              <CardDescription>
                Database of all approved indications, contra-indications, and warnings by market
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a product to view its label claims.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Patent and Exclusivity Tracking</CardTitle>
              <CardDescription>Management of patent expiration and market exclusivity periods</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a product to view its patent and exclusivity information.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Registration Fees Management</CardTitle>
              <CardDescription>Tracking of all submission and maintenance fee payments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Select a product to view its registration fees.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
