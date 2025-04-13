"use client";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { useIntegration } from "@/contexts/integration-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

// Mock data for user engagement with integrations
const integrationEngagementData = [
  { name: "Document Management", value: 35 },
  { name: "ERP Systems", value: 25 },
  { name: "eCTD Publishing", value: 15 },
  { name: "Email Systems", value: 10 },
  { name: "Electronic Signature", value: 8 },
  { name: "Identity Providers", value: 7 },
];

// Mock data for integration usage by user role
const roleIntegrationData = [
  {
    role: "Regulatory Manager",
    documentManagement: 85,
    erp: 60,
    ectd: 90,
    email: 75,
    esignature: 70,
  },
  {
    role: "Regulatory Specialist",
    documentManagement: 70,
    erp: 40,
    ectd: 80,
    email: 85,
    esignature: 50,
  },
  {
    role: "Quality Manager",
    documentManagement: 60,
    erp: 75,
    ectd: 30,
    email: 70,
    esignature: 40,
  },
  {
    role: "Viewer",
    documentManagement: 40,
    erp: 20,
    ectd: 10,
    email: 50,
    esignature: 10,
  },
];

// Colors for the charts
const COLORS = [
  "#adfa1d",
  "#0ea5e9",
  "#f43f5e",
  "#8b5cf6",
  "#f97316",
  "#10b981",
];

export function UserIntegrationEngagement() {
  const { integrations } = useIntegration();
  const [activeTab, setActiveTab] = useState("usage");

  // Calculate integration metrics for the chart
  const activeIntegrations = integrations.filter(
    (i) => i.status === "connected" && i.enabled
  ).length;
  const totalIntegrations = integrations.length;

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Integration Engagement</CardTitle>
        <CardDescription>
          How users interact with system integrations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="usage">Integration Usage</TabsTrigger>
            <TabsTrigger value="roles">Role-Based Usage</TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="mt-4">
            <div className="flex flex-col items-center">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground">
                  {activeIntegrations} of {totalIntegrations} integrations
                  active
                </p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={integrationEngagementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {integrationEngagementData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="roles" className="mt-4">
            <div className="space-y-4">
              {roleIntegrationData.map((roleData, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">{roleData.role}</h3>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">
                        Document
                      </div>
                      <div className="text-sm font-medium">
                        {roleData.documentManagement}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">ERP</div>
                      <div className="text-sm font-medium">{roleData.erp}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">eCTD</div>
                      <div className="text-sm font-medium">
                        {roleData.ectd}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Email</div>
                      <div className="text-sm font-medium">
                        {roleData.email}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">
                        eSignature
                      </div>
                      <div className="text-sm font-medium">
                        {roleData.esignature}%
                      </div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{
                        width: `${
                          (roleData.documentManagement +
                            roleData.erp +
                            roleData.ectd +
                            roleData.email +
                            roleData.esignature) /
                          5
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
