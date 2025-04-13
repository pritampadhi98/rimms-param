"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Settings,
  Database,
  FileText,
  Mail,
  FileSignature,
  BarChart,
  FlaskRoundIcon as Flask,
  ArrowUpRight,
  Eye,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface IntegrationPanelProps {
  system?: string
}

export default function IntegrationPanel({ system = "all" }: IntegrationPanelProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Sample integration data
  const integrationData = [
    {
      id: "int-001",
      name: "Documentum",
      type: "document",
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      status: "connected",
      lastSync: "2023-07-10 09:15:22",
      syncFrequency: "Every 30 minutes",
      healthStatus: "healthy",
      connectionDetails: {
        url: "https://documentum.example.com/api",
        username: "rims_service",
        authenticationType: "OAuth 2.0",
      },
      syncStats: {
        totalDocuments: 12458,
        lastSyncCount: 42,
        errorRate: "0.05%",
      },
      mappedEntities: [
        { source: "Document", target: "Regulatory Document", count: 8750 },
        { source: "Folder", target: "Dossier", count: 325 },
        { source: "Properties", target: "Metadata", count: 12458 },
      ],
      recentActivity: [
        {
          timestamp: "2023-07-10 09:15:22",
          action: "Sync completed",
          status: "success",
          details: "42 documents synced",
        },
        {
          timestamp: "2023-07-10 08:45:18",
          action: "Sync completed",
          status: "success",
          details: "15 documents synced",
        },
        {
          timestamp: "2023-07-10 08:15:12",
          action: "Sync completed",
          status: "success",
          details: "8 documents synced",
        },
        {
          timestamp: "2023-07-10 07:45:09",
          action: "Sync completed",
          status: "warning",
          details: "3 documents with warnings",
        },
      ],
    },
    {
      id: "int-002",
      name: "SAP ERP",
      type: "erp",
      icon: <Database className="h-6 w-6 text-green-500" />,
      status: "connected",
      lastSync: "2023-07-10 08:30:15",
      syncFrequency: "Every hour",
      healthStatus: "healthy",
      connectionDetails: {
        url: "https://sap-erp.example.com/api",
        username: "rims_integration",
        authenticationType: "Basic Auth",
      },
      syncStats: {
        totalProducts: 1250,
        totalBatches: 5840,
        lastSyncCount: 28,
        errorRate: "0.02%",
      },
      mappedEntities: [
        { source: "Material", target: "Product", count: 1250 },
        { source: "Batch", target: "Batch", count: 5840 },
        { source: "Plant", target: "Manufacturing Site", count: 15 },
      ],
      recentActivity: [
        {
          timestamp: "2023-07-10 08:30:15",
          action: "Sync completed",
          status: "success",
          details: "28 products synced",
        },
        {
          timestamp: "2023-07-10 07:30:12",
          action: "Sync completed",
          status: "success",
          details: "12 products synced",
        },
        { timestamp: "2023-07-10 06:30:08", action: "Sync completed", status: "success", details: "5 products synced" },
        { timestamp: "2023-07-09 23:30:05", action: "Sync completed", status: "error", details: "Connection timeout" },
      ],
    },
    {
      id: "int-003",
      name: "Veeva Vault",
      type: "document",
      icon: <FileText className="h-6 w-6 text-purple-500" />,
      status: "connected",
      lastSync: "2023-07-10 09:00:05",
      syncFrequency: "Every 15 minutes",
      healthStatus: "warning",
      connectionDetails: {
        url: "https://veeva.example.com/api",
        username: "rims_vault",
        authenticationType: "OAuth 2.0",
      },
      syncStats: {
        totalDocuments: 8750,
        lastSyncCount: 15,
        errorRate: "1.2%",
      },
      mappedEntities: [
        { source: "Document", target: "Regulatory Document", count: 6250 },
        { source: "Binder", target: "Dossier", count: 180 },
        { source: "Properties", target: "Metadata", count: 8750 },
      ],
      recentActivity: [
        {
          timestamp: "2023-07-10 09:00:05",
          action: "Sync completed",
          status: "warning",
          details: "15 documents synced, 2 warnings",
        },
        {
          timestamp: "2023-07-10 08:45:02",
          action: "Sync completed",
          status: "success",
          details: "8 documents synced",
        },
        {
          timestamp: "2023-07-10 08:30:00",
          action: "Sync completed",
          status: "success",
          details: "12 documents synced",
        },
        {
          timestamp: "2023-07-10 08:15:55",
          action: "Sync completed",
          status: "warning",
          details: "5 documents with warnings",
        },
      ],
    },
    {
      id: "int-004",
      name: "Microsoft Exchange",
      type: "email",
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      status: "connected",
      lastSync: "2023-07-10 09:10:33",
      syncFrequency: "Real-time",
      healthStatus: "healthy",
      connectionDetails: {
        url: "https://exchange.example.com/api",
        username: "rims_notifications",
        authenticationType: "OAuth 2.0",
      },
      syncStats: {
        totalEmails: 25840,
        lastSyncCount: 18,
        errorRate: "0.01%",
      },
      mappedEntities: [
        { source: "Email", target: "Notification", count: 25840 },
        { source: "Calendar", target: "Deadline", count: 450 },
        { source: "Contact", target: "User", count: 125 },
      ],
      recentActivity: [
        { timestamp: "2023-07-10 09:10:33", action: "Sync completed", status: "success", details: "18 emails synced" },
        { timestamp: "2023-07-10 09:00:30", action: "Sync completed", status: "success", details: "5 emails synced" },
        { timestamp: "2023-07-10 08:50:28", action: "Sync completed", status: "success", details: "12 emails synced" },
        { timestamp: "2023-07-10 08:40:25", action: "Sync completed", status: "success", details: "8 emails synced" },
      ],
    },
    {
      id: "int-005",
      name: "DocuSign",
      type: "esignature",
      icon: <FileSignature className="h-6 w-6 text-blue-500" />,
      status: "connected",
      lastSync: "2023-07-10 08:45:18",
      syncFrequency: "Every 5 minutes",
      healthStatus: "healthy",
      connectionDetails: {
        url: "https://docusign.example.com/api",
        username: "rims_signature",
        authenticationType: "OAuth 2.0",
      },
      syncStats: {
        totalEnvelopes: 3250,
        lastSyncCount: 5,
        errorRate: "0.03%",
      },
      mappedEntities: [
        { source: "Envelope", target: "Approval Workflow", count: 3250 },
        { source: "Signer", target: "Approver", count: 450 },
        { source: "Document", target: "Regulatory Document", count: 3250 },
      ],
      recentActivity: [
        {
          timestamp: "2023-07-10 08:45:18",
          action: "Sync completed",
          status: "success",
          details: "5 envelopes synced",
        },
        {
          timestamp: "2023-07-10 08:40:15",
          action: "Sync completed",
          status: "success",
          details: "2 envelopes synced",
        },
        {
          timestamp: "2023-07-10 08:35:12",
          action: "Sync completed",
          status: "success",
          details: "0 envelopes synced",
        },
        {
          timestamp: "2023-07-10 08:30:10",
          action: "Sync completed",
          status: "success",
          details: "3 envelopes synced",
        },
      ],
    },
    {
      id: "int-006",
      name: "Power BI",
      type: "bi",
      icon: <BarChart className="h-6 w-6 text-amber-500" />,
      status: "connected",
      lastSync: "2023-07-10 07:30:22",
      syncFrequency: "Every hour",
      healthStatus: "healthy",
      connectionDetails: {
        url: "https://powerbi.example.com/api",
        username: "rims_analytics",
        authenticationType: "OAuth 2.0",
      },
      syncStats: {
        totalDatasets: 45,
        totalReports: 78,
        lastSyncCount: 12,
        errorRate: "0.00%",
      },
      mappedEntities: [
        { source: "Dataset", target: "Regulatory Data", count: 45 },
        { source: "Report", target: "Dashboard", count: 78 },
        { source: "Measure", target: "Metric", count: 350 },
      ],
      recentActivity: [
        {
          timestamp: "2023-07-10 07:30:22",
          action: "Sync completed",
          status: "success",
          details: "12 datasets synced",
        },
        {
          timestamp: "2023-07-10 06:30:18",
          action: "Sync completed",
          status: "success",
          details: "12 datasets synced",
        },
        {
          timestamp: "2023-07-10 05:30:15",
          action: "Sync completed",
          status: "success",
          details: "12 datasets synced",
        },
        {
          timestamp: "2023-07-10 04:30:12",
          action: "Sync completed",
          status: "success",
          details: "12 datasets synced",
        },
      ],
    },
    {
      id: "int-007",
      name: "LIMS System",
      type: "lims",
      icon: <Flask className="h-6 w-6 text-green-500" />,
      status: "error",
      lastSync: "2023-07-09 15:45:33",
      syncFrequency: "Every 2 hours",
      healthStatus: "error",
      connectionDetails: {
        url: "https://lims.example.com/api",
        username: "rims_lims",
        authenticationType: "Basic Auth",
      },
      syncStats: {
        totalSamples: 12580,
        totalTests: 45920,
        lastSyncCount: 0,
        errorRate: "100%",
      },
      mappedEntities: [
        { source: "Sample", target: "Stability Sample", count: 12580 },
        { source: "Test", target: "Analytical Test", count: 45920 },
        { source: "Result", target: "Test Result", count: 45920 },
      ],
      recentActivity: [
        { timestamp: "2023-07-10 09:45:33", action: "Sync attempted", status: "error", details: "Connection refused" },
        { timestamp: "2023-07-10 07:45:30", action: "Sync attempted", status: "error", details: "Connection refused" },
        { timestamp: "2023-07-10 05:45:28", action: "Sync attempted", status: "error", details: "Connection refused" },
        { timestamp: "2023-07-09 15:45:33", action: "Sync completed", status: "success", details: "85 samples synced" },
      ],
    },
  ]

  // Filter integrations based on system type
  const filteredIntegrations = system === "all" ? integrationData : integrationData.filter((int) => int.type === system)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return <Badge className="bg-green-500">Connected</Badge>
      case "disconnected":
        return <Badge className="bg-gray-500">Disconnected</Badge>
      case "error":
        return <Badge className="bg-red-500">Error</Badge>
      case "configuring":
        return <Badge className="bg-blue-500">Configuring</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getHealthStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-500">Healthy</Badge>
      case "warning":
        return <Badge className="bg-amber-500">Warning</Badge>
      case "error":
        return <Badge className="bg-red-500">Error</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getActivityStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      case "error":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const handleViewSystem = (systemId: string) => {
    setSelectedSystem(systemId)
  }

  const selectedSystemData = selectedSystem ? integrationData.find((s) => s.id === selectedSystem) : null

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-40">
            <div className="space-y-2 w-full max-w-md">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
              <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (selectedSystemData) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {selectedSystemData.icon}
            <div>
              <h2 className="text-2xl font-bold">{selectedSystemData.name}</h2>
              <div className="flex items-center space-x-2 mt-1">
                {getStatusBadge(selectedSystemData.status)}
                {getHealthStatusBadge(selectedSystemData.healthStatus)}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-1" />
              Sync Now
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-1" />
              Configure
            </Button>
            <Button variant="outline" size="sm" onClick={() => setSelectedSystem(null)}>
              Back to List
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mapping">Data Mapping</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Integration Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Integration Type</h4>
                      <p className="text-sm capitalize">{selectedSystemData.type}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Sync Frequency</h4>
                      <p className="text-sm">{selectedSystemData.syncFrequency}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Last Sync</h4>
                      <p className="text-sm">{selectedSystemData.lastSync}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Health Status</h4>
                      <div>{getHealthStatusBadge(selectedSystemData.healthStatus)}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Connection Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 border rounded-md">
                        <span className="text-sm">API Endpoint</span>
                        <span className="text-sm font-mono text-xs">{selectedSystemData.connectionDetails.url}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 border rounded-md">
                        <span className="text-sm">Service Account</span>
                        <span className="text-sm font-mono text-xs">
                          {selectedSystemData.connectionDetails.username}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-2 border rounded-md">
                        <span className="text-sm">Authentication Type</span>
                        <span className="text-sm">{selectedSystemData.connectionDetails.authenticationType}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sync Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {"totalDocuments" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Documents</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalDocuments.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalProducts" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Products</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalProducts.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalBatches" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Batches</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalBatches.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalEmails" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Emails</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalEmails.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalEnvelopes" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Envelopes</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalEnvelopes.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalDatasets" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Datasets</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalDatasets.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalReports" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Reports</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalReports.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalSamples" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Samples</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalSamples.toLocaleString()}
                      </span>
                    </div>
                  )}
                  {"totalTests" in selectedSystemData.syncStats && (
                    <div className="flex justify-between items-center p-2 border rounded-md">
                      <span className="text-sm">Total Tests</span>
                      <span className="text-sm font-medium">
                        {selectedSystemData.syncStats.totalTests.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center p-2 border rounded-md">
                    <span className="text-sm">Last Sync Count</span>
                    <span className="text-sm font-medium">{selectedSystemData.syncStats.lastSyncCount}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded-md">
                    <span className="text-sm">Error Rate</span>
                    <span className="text-sm font-medium">{selectedSystemData.syncStats.errorRate}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mapping" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Mapping</CardTitle>
                <CardDescription>Mapping between external system and RIMS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {selectedSystemData.mappedEntities.map((entity, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{entity.source}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="font-medium">{entity.target}</span>
                        </div>
                        <Badge variant="outline">{entity.count.toLocaleString()} records</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-muted-foreground">Last synced: {selectedSystemData.lastSync}</div>
                        <Button variant="ghost" size="sm">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Log</CardTitle>
                <CardDescription>Recent integration activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedSystemData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border rounded-md">
                      <div className="mt-0.5">{getActivityStatusIcon(activity.status)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <span className="font-medium">{activity.action}</span>
                          <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Integration Settings</CardTitle>
                <CardDescription>Configure integration parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Connection URL</h4>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={selectedSystemData.connectionDetails.url}
                        />
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Service Account</h4>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={selectedSystemData.connectionDetails.username}
                        />
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Sync Frequency</h4>
                    <div className="flex items-center space-x-2">
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="5">Every 5 minutes</option>
                        <option value="15">Every 15 minutes</option>
                        <option value="30">Every 30 minutes</option>
                        <option value="60">Every hour</option>
                        <option value="120">Every 2 hours</option>
                        <option value="240">Every 4 hours</option>
                        <option value="720">Every 12 hours</option>
                        <option value="1440">Every day</option>
                      </select>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-1">Authentication Type</h4>
                    <div className="flex items-center space-x-2">
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="oauth2">OAuth 2.0</option>
                        <option value="basic">Basic Auth</option>
                        <option value="apikey">API Key</option>
                        <option value="jwt">JWT</option>
                      </select>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium">Integration Status</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="status"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            checked={selectedSystemData.status === "connected"}
                          />
                          <label htmlFor="status" className="ml-2 text-sm">
                            Enabled
                          </label>
                        </div>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t flex justify-between">
                    <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                      Reset Connection
                    </Button>
                    <Button>Save All Changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Integration Panel</h2>
        <Button>
          <Settings className="h-4 w-4 mr-1" />
          Configure New Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredIntegrations.map((integration) => (
          <Card key={integration.id} className="overflow-hidden">
            <CardHeader className="p-4 pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  {integration.icon}
                  <CardTitle className="text-base ml-2">{integration.name}</CardTitle>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  {getStatusBadge(integration.status)}
                  {getHealthStatusBadge(integration.healthStatus)}
                </div>
              </div>
              <CardDescription className="capitalize">{integration.type} Integration</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="font-medium">Last Sync:</span> {integration.lastSync}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Frequency:</span> {integration.syncFrequency}
                </div>
                {"totalDocuments" in integration.syncStats && (
                  <div className="text-sm">
                    <span className="font-medium">Documents:</span>{" "}
                    {integration.syncStats.totalDocuments.toLocaleString()}
                  </div>
                )}
                {"totalProducts" in integration.syncStats && (
                  <div className="text-sm">
                    <span className="font-medium">Products:</span>{" "}
                    {integration.syncStats.totalProducts.toLocaleString()}
                  </div>
                )}
                {"totalEmails" in integration.syncStats && (
                  <div className="text-sm">
                    <span className="font-medium">Emails:</span> {integration.syncStats.totalEmails.toLocaleString()}
                  </div>
                )}
                {"totalEnvelopes" in integration.syncStats && (
                  <div className="text-sm">
                    <span className="font-medium">Envelopes:</span>{" "}
                    {integration.syncStats.totalEnvelopes.toLocaleString()}
                  </div>
                )}
                {"totalDatasets" in integration.syncStats && (
                  <div className="text-sm">
                    <span className="font-medium">Datasets:</span>{" "}
                    {integration.syncStats.totalDatasets.toLocaleString()}
                  </div>
                )}
                {"totalSamples" in integration.syncStats && (
                  <div className="text-sm">
                    <span className="font-medium">Samples:</span> {integration.syncStats.totalSamples.toLocaleString()}
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-end">
                <Button size="sm" onClick={() => handleViewSystem(integration.id)}>
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Integration Health</CardTitle>
          <CardDescription>Overall system integration status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Overall Integration Health</span>
                <span className="text-sm font-medium">
                  {Math.round(
                    (integrationData.filter((i) => i.healthStatus === "healthy").length / integrationData.length) * 100,
                  )}
                  %
                </span>
              </div>
              <Progress
                value={
                  (integrationData.filter((i) => i.healthStatus === "healthy").length / integrationData.length) * 100
                }
                className="h-2"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">
                    {integrationData.filter((i) => i.status === "connected").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Connected Systems</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">
                    {integrationData.filter((i) => i.healthStatus === "healthy").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Healthy Systems</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">
                    {integrationData.filter((i) => i.healthStatus === "warning").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Warning Systems</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">
                    {integrationData.filter((i) => i.healthStatus === "error").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Error Systems</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
