"use client"

import type React from "react"

import { useState } from "react"
import {
  useIntegration,
  type IntegrationType,
  type IntegrationProvider,
  type IntegrationConfig,
} from "@/contexts/integration-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuditLog } from "@/hooks/use-audit-log"

interface IntegrationFormProps {
  onCancel: () => void
  onSuccess: () => void
  defaultType?: IntegrationType
  existingIntegration?: IntegrationConfig | null
}

export function IntegrationForm({ onCancel, onSuccess, defaultType, existingIntegration }: IntegrationFormProps) {
  const { addIntegration, updateIntegration, testConnection } = useIntegration()
  const { logActivity } = useAuditLog()
  const [isLoading, setIsLoading] = useState(false)
  const [isTesting, setIsTesting] = useState(false)

  const [formData, setFormData] = useState<{
    name: string
    type: IntegrationType | ""
    provider: IntegrationProvider | ""
    apiUrl: string
    apiKey: string
    username: string
    password: string
    clientId: string
    clientSecret: string
    syncFrequency: "hourly" | "daily" | "weekly" | "manual" | ""
    syncDirection: "import" | "export" | "bidirectional" | ""
    enabled: boolean
  }>({
    name: existingIntegration?.name || "",
    type: existingIntegration?.type || defaultType || "",
    provider: existingIntegration?.provider || "",
    apiUrl: existingIntegration?.apiUrl || "",
    apiKey: existingIntegration?.apiKey || "",
    username: existingIntegration?.username || "",
    password: existingIntegration?.password || "",
    clientId: existingIntegration?.clientId || "",
    clientSecret: existingIntegration?.clientSecret || "",
    syncFrequency: existingIntegration?.syncFrequency || "",
    syncDirection: existingIntegration?.syncDirection || "",
    enabled: existingIntegration?.enabled ?? true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (existingIntegration) {
        await updateIntegration(existingIntegration.id, {
          name: formData.name,
          type: formData.type as IntegrationType,
          provider: formData.provider as IntegrationProvider,
          apiUrl: formData.apiUrl,
          apiKey: formData.apiKey,
          username: formData.username,
          password: formData.password,
          clientId: formData.clientId,
          clientSecret: formData.clientSecret,
          syncFrequency: formData.syncFrequency as any,
          syncDirection: formData.syncDirection as any,
          enabled: formData.enabled,
          status: "configuring",
        })
        logActivity("update", "setting", existingIntegration.id, "Updated integration configuration")
      } else {
        await addIntegration({
          name: formData.name,
          type: formData.type as IntegrationType,
          provider: formData.provider as IntegrationProvider,
          apiUrl: formData.apiUrl,
          apiKey: formData.apiKey,
          username: formData.username,
          password: formData.password,
          clientId: formData.clientId,
          clientSecret: formData.clientSecret,
          syncFrequency: formData.syncFrequency as any,
          syncDirection: formData.syncDirection as any,
          enabled: formData.enabled,
          status: "configuring",
        })
        logActivity("create", "setting", "new-integration", "Created new integration")
      }
      onSuccess()
    } catch (error) {
      console.error("Error saving integration:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleTestConnection = async () => {
    if (existingIntegration) {
      setIsTesting(true)
      try {
        const success = await testConnection(existingIntegration.id)
        if (success) {
          logActivity("update", "setting", existingIntegration.id, "Successfully tested integration connection")
        } else {
          logActivity("update", "setting", existingIntegration.id, "Failed to test integration connection")
        }
      } finally {
        setIsTesting(false)
      }
    }
  }

  const getProviderOptions = (type: IntegrationType | "") => {
    switch (type) {
      case "document_management":
        return [
          { value: "documentum", label: "Documentum" },
          { value: "sharepoint", label: "SharePoint" },
          { value: "opentext", label: "OpenText" },
          { value: "veeva_vault", label: "Veeva Vault" },
        ]
      case "erp":
        return [
          { value: "sap", label: "SAP" },
          { value: "oracle", label: "Oracle" },
          { value: "microsoft_dynamics", label: "Microsoft Dynamics" },
        ]
      case "ectd":
        return [
          { value: "lorenz", label: "Lorenz" },
          { value: "extedo", label: "Extedo" },
          { value: "custom_ectd", label: "Custom eCTD" },
        ]
      case "email":
        return [
          { value: "microsoft_exchange", label: "Microsoft Exchange" },
          { value: "gmail", label: "Gmail" },
        ]
      case "esignature":
        return [
          { value: "docusign", label: "DocuSign" },
          { value: "adobe_sign", label: "Adobe Sign" },
        ]
      case "identity":
        return [
          { value: "azure_ad", label: "Azure AD" },
          { value: "okta", label: "Okta" },
          { value: "ping_identity", label: "Ping Identity" },
        ]
      case "bi":
        return [
          { value: "power_bi", label: "Power BI" },
          { value: "tableau", label: "Tableau" },
          { value: "qlikview", label: "QlikView" },
        ]
      case "lims":
        return [
          { value: "labware", label: "LabWare" },
          { value: "labvantage", label: "LabVantage" },
          { value: "starlims", label: "StarLIMS" },
          { value: "custom_lims", label: "Custom LIMS" },
        ]
      default:
        return []
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{existingIntegration ? "Edit Integration" : "Add New Integration"}</CardTitle>
        <CardDescription>
          {existingIntegration
            ? "Update the configuration for this integration"
            : "Configure a new integration with an external system"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Integration Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter a descriptive name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Integration Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => {
                    handleSelectChange("type", value)
                    // Reset provider when type changes
                    handleSelectChange("provider", "")
                  }}
                  disabled={!!existingIntegration}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select integration type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="document_management">Document Management System</SelectItem>
                    <SelectItem value="erp">ERP System</SelectItem>
                    <SelectItem value="ectd">eCTD Publishing Tool</SelectItem>
                    <SelectItem value="email">Email System</SelectItem>
                    <SelectItem value="esignature">Electronic Signature</SelectItem>
                    <SelectItem value="identity">Identity Provider</SelectItem>
                    <SelectItem value="bi">Business Intelligence Tool</SelectItem>
                    <SelectItem value="lims">Laboratory Information Management System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="provider">Provider</Label>
                <Select
                  value={formData.provider}
                  onValueChange={(value) => handleSelectChange("provider", value)}
                  disabled={!formData.type || !!existingIntegration}
                >
                  <SelectTrigger id="provider">
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    {getProviderOptions(formData.type as IntegrationType).map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apiUrl">API URL</Label>
                <Input
                  id="apiUrl"
                  name="apiUrl"
                  value={formData.apiUrl}
                  onChange={handleInputChange}
                  placeholder="https://api.example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  name="apiKey"
                  value={formData.apiKey}
                  onChange={handleInputChange}
                  placeholder="Enter API key"
                  type="password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  type="password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientId">Client ID</Label>
                <Input
                  id="clientId"
                  name="clientId"
                  value={formData.clientId}
                  onChange={handleInputChange}
                  placeholder="Enter client ID"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientSecret">Client Secret</Label>
                <Input
                  id="clientSecret"
                  name="clientSecret"
                  value={formData.clientSecret}
                  onChange={handleInputChange}
                  placeholder="Enter client secret"
                  type="password"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="syncFrequency">Sync Frequency</Label>
                <Select
                  value={formData.syncFrequency}
                  onValueChange={(value) => handleSelectChange("syncFrequency", value)}
                >
                  <SelectTrigger id="syncFrequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="syncDirection">Sync Direction</Label>
                <Select
                  value={formData.syncDirection}
                  onValueChange={(value) => handleSelectChange("syncDirection", value)}
                >
                  <SelectTrigger id="syncDirection">
                    <SelectValue placeholder="Select direction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="import">Import Only</SelectItem>
                    <SelectItem value="export">Export Only</SelectItem>
                    <SelectItem value="bidirectional">Bidirectional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="enabled"
                checked={formData.enabled}
                onCheckedChange={(checked) => handleSwitchChange("enabled", checked)}
              />
              <Label htmlFor="enabled">Enable Integration</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <div className="flex space-x-2">
            {existingIntegration && (
              <Button type="button" variant="outline" onClick={handleTestConnection} disabled={isTesting}>
                {isTesting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Testing...
                  </>
                ) : (
                  "Test Connection"
                )}
              </Button>
            )}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Integration"
              )}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
