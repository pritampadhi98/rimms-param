"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useIntegration } from "@/contexts/integration-context"
import { RefreshCw, AlertTriangle, FileText, PenTool } from "lucide-react"

export default function SubmissionDetailsPage() {
  const params = useParams()
  const submissionId = params.id as string
  const { integrations } = useIntegration()
  const [activeTab, setActiveTab] = useState("details")

  // Mock submission data - in a real app, this would be fetched from an API
  const submission = {
    id: submissionId,
    product: "Cardiostat 10mg",
    type: "New Application",
    market: "United States",
    authority: "FDA",
    submissionDate: "2023-07-15",
    status: "Under Review",
    dueDate: "2023-10-15",
    description: "Initial marketing authorization application for Cardiostat 10mg tablets",
    submissionFormat: "eCTD",
    sequence: "0000",
    createdAt: "2023-06-01T10:30:00Z",
    updatedAt: "2023-07-15T14:45:00Z",
  }

  // Get document management integrations
  const documentIntegrations = integrations.filter((i) => i.type === "document_management" && i.status === "connected")

  // Get eCTD integrations
  const ectdIntegrations = integrations.filter((i) => i.type === "ectd" && i.status === "connected")

  // Get eSignature integrations
  const esignatureIntegrations = integrations.filter((i) => i.type === "esignature" && i.status === "connected")

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Submission: {submissionId}</h1>
        <Badge
          variant={
            submission.status === "Approved"
              ? "success"
              : submission.status === "Query Received"
                ? "destructive"
                : "default"
          }
        >
          {submission.status}
        </Badge>
      </div>

      <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submission Information</CardTitle>
              <CardDescription>Basic information about the submission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Product</h3>
                  <p>{submission.product}</p>
                </div>
                <div>
                  <h3 className="font-medium">Type</h3>
                  <p>{submission.type}</p>
                </div>
                <div>
                  <h3 className="font-medium">Market</h3>
                  <p>{submission.market}</p>
                </div>
                <div>
                  <h3 className="font-medium">Authority</h3>
                  <p>{submission.authority}</p>
                </div>
                <div>
                  <h3 className="font-medium">Submission Date</h3>
                  <p>{submission.submissionDate}</p>
                </div>
                <div>
                  <h3 className="font-medium">Due Date</h3>
                  <p>{submission.dueDate}</p>
                </div>
                <div>
                  <h3 className="font-medium">Format</h3>
                  <p>{submission.submissionFormat}</p>
                </div>
                <div>
                  <h3 className="font-medium">Sequence</h3>
                  <p>{submission.sequence}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium">Description</h3>
                <p>{submission.description}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Submission documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No documents found for this submission.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
              <CardDescription>Submission timeline and history</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No timeline events found for this submission.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integration Status</CardTitle>
              <CardDescription>External system integrations for this submission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Document Management
                  </h3>

                  {documentIntegrations.length > 0 ? (
                    <div className="space-y-3">
                      {documentIntegrations.map((integration) => (
                        <div key={integration.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {integration.lastSyncTime
                                ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                                : "Never synced"}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Sync Documents
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      No document management integrations configured
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    eCTD Publishing
                  </h3>

                  {ectdIntegrations.length > 0 ? (
                    <div className="space-y-3">
                      {ectdIntegrations.map((integration) => (
                        <div key={integration.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {integration.lastSyncTime
                                ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                                : "Never synced"}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Publish eCTD
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      No eCTD publishing integrations configured
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <PenTool className="h-5 w-5 mr-2" />
                    Electronic Signatures
                  </h3>

                  {esignatureIntegrations.length > 0 ? (
                    <div className="space-y-3">
                      {esignatureIntegrations.map((integration) => (
                        <div key={integration.id} className="flex items-center justify-between border-b pb-2">
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {integration.lastSyncTime
                                ? `Last synced ${new Date(integration.lastSyncTime).toLocaleString()}`
                                : "Never synced"}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            <PenTool className="h-4 w-4 mr-2" />
                            Request Signatures
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center text-muted-foreground">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      No electronic signature integrations configured
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
