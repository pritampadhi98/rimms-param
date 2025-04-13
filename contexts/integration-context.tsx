"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type IntegrationType =
  | "document_management"
  | "erp"
  | "ectd"
  | "email"
  | "esignature"
  | "identity"
  | "bi"
  | "lims"

export type IntegrationStatus = "connected" | "disconnected" | "error" | "configuring"

export type IntegrationProvider =
  // Document Management Systems
  | "documentum"
  | "sharepoint"
  | "opentext"
  | "veeva_vault"
  // ERP Systems
  | "sap"
  | "oracle"
  | "microsoft_dynamics"
  // eCTD Publishing Tools
  | "lorenz"
  | "extedo"
  | "custom_ectd"
  // Email Systems
  | "microsoft_exchange"
  | "gmail"
  // Electronic Signature
  | "docusign"
  | "adobe_sign"
  // Identity Providers
  | "azure_ad"
  | "okta"
  | "ping_identity"
  // Business Intelligence
  | "power_bi"
  | "tableau"
  | "qlikview"
  // LIMS
  | "labware"
  | "labvantage"
  | "starlims"
  | "custom_lims"

export interface IntegrationConfig {
  id: string
  name: string
  type: IntegrationType
  provider: IntegrationProvider
  status: IntegrationStatus
  lastSyncTime?: string
  apiUrl?: string
  apiKey?: string
  username?: string
  password?: string
  clientId?: string
  clientSecret?: string
  tenantId?: string
  domain?: string
  syncFrequency?: "hourly" | "daily" | "weekly" | "manual"
  syncDirection?: "import" | "export" | "bidirectional"
  enabled: boolean
  createdAt: string
  updatedAt: string
}

interface IntegrationContextType {
  integrations: IntegrationConfig[]
  addIntegration: (integration: Omit<IntegrationConfig, "id" | "createdAt" | "updatedAt">) => Promise<void>
  updateIntegration: (id: string, updates: Partial<IntegrationConfig>) => Promise<void>
  deleteIntegration: (id: string) => Promise<void>
  getIntegrationsByType: (type: IntegrationType) => IntegrationConfig[]
  getIntegrationById: (id: string) => IntegrationConfig | undefined
  testConnection: (id: string) => Promise<boolean>
  syncIntegration: (id: string) => Promise<void>
  isLoading: boolean
}

const IntegrationContext = createContext<IntegrationContextType | undefined>(undefined)

export function IntegrationProvider({ children }: { children: ReactNode }) {
  const [integrations, setIntegrations] = useState<IntegrationConfig[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    const loadIntegrations = async () => {
      try {
        // Mock data for demonstration
        const mockIntegrations: IntegrationConfig[] = [
          {
            id: "int-1",
            name: "Veeva Vault Integration",
            type: "document_management",
            provider: "veeva_vault",
            status: "connected",
            lastSyncTime: "2023-09-15T10:30:00Z",
            apiUrl: "https://company.veevavault.com/api/v1",
            syncFrequency: "daily",
            syncDirection: "bidirectional",
            enabled: true,
            createdAt: "2023-08-01T00:00:00Z",
            updatedAt: "2023-09-15T10:30:00Z",
          },
          {
            id: "int-2",
            name: "SAP ERP Connection",
            type: "erp",
            provider: "sap",
            status: "connected",
            lastSyncTime: "2023-09-14T08:15:00Z",
            apiUrl: "https://sap-api.company.com",
            syncFrequency: "hourly",
            syncDirection: "import",
            enabled: true,
            createdAt: "2023-07-15T00:00:00Z",
            updatedAt: "2023-09-14T08:15:00Z",
          },
          {
            id: "int-3",
            name: "DocuSign Integration",
            type: "esignature",
            provider: "docusign",
            status: "connected",
            lastSyncTime: "2023-09-10T14:45:00Z",
            apiUrl: "https://api.docusign.com",
            syncFrequency: "manual",
            syncDirection: "bidirectional",
            enabled: true,
            createdAt: "2023-06-20T00:00:00Z",
            updatedAt: "2023-09-10T14:45:00Z",
          },
          {
            id: "int-4",
            name: "Power BI Analytics",
            type: "bi",
            provider: "power_bi",
            status: "error",
            lastSyncTime: "2023-09-05T09:30:00Z",
            apiUrl: "https://api.powerbi.com",
            syncFrequency: "daily",
            syncDirection: "export",
            enabled: true,
            createdAt: "2023-05-10T00:00:00Z",
            updatedAt: "2023-09-05T09:30:00Z",
          },
          {
            id: "int-5",
            name: "Microsoft Exchange Email",
            type: "email",
            provider: "microsoft_exchange",
            status: "connected",
            lastSyncTime: "2023-09-15T11:00:00Z",
            apiUrl: "https://outlook.office365.com/api",
            syncFrequency: "hourly",
            syncDirection: "bidirectional",
            enabled: true,
            createdAt: "2023-04-15T00:00:00Z",
            updatedAt: "2023-09-15T11:00:00Z",
          },
        ]

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Store in state
        setIntegrations(mockIntegrations)

        // Also store in localStorage for persistence in this demo
        localStorage.setItem("integrations", JSON.stringify(mockIntegrations))
      } catch (error) {
        console.error("Error loading integrations:", error)
      } finally {
        setIsLoading(false)
      }
    }

    // Try to load from localStorage first (for persistence in this demo)
    const storedIntegrations = localStorage.getItem("integrations")
    if (storedIntegrations) {
      setIntegrations(JSON.parse(storedIntegrations))
      setIsLoading(false)
    } else {
      loadIntegrations()
    }
  }, [])

  const addIntegration = async (integration: Omit<IntegrationConfig, "id" | "createdAt" | "updatedAt">) => {
    const now = new Date().toISOString()
    const newIntegration: IntegrationConfig = {
      ...integration,
      id: `int-${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    }

    setIntegrations((prev) => {
      const updated = [...prev, newIntegration]
      localStorage.setItem("integrations", JSON.stringify(updated))
      return updated
    })
  }

  const updateIntegration = async (id: string, updates: Partial<IntegrationConfig>) => {
    setIntegrations((prev) => {
      const updated = prev.map((integration) =>
        integration.id === id ? { ...integration, ...updates, updatedAt: new Date().toISOString() } : integration,
      )
      localStorage.setItem("integrations", JSON.stringify(updated))
      return updated
    })
  }

  const deleteIntegration = async (id: string) => {
    setIntegrations((prev) => {
      const updated = prev.filter((integration) => integration.id !== id)
      localStorage.setItem("integrations", JSON.stringify(updated))
      return updated
    })
  }

  const getIntegrationsByType = (type: IntegrationType) => {
    return integrations.filter((integration) => integration.type === type)
  }

  const getIntegrationById = (id: string) => {
    return integrations.find((integration) => integration.id === id)
  }

  const testConnection = async (id: string) => {
    // In a real app, this would make an API call to test the connection
    // For demo purposes, we'll simulate a successful connection most of the time
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const success = Math.random() > 0.2 // 80% success rate

    if (success) {
      updateIntegration(id, { status: "connected" })
    } else {
      updateIntegration(id, { status: "error" })
    }

    return success
  }

  const syncIntegration = async (id: string) => {
    // In a real app, this would trigger a sync with the external system
    // For demo purposes, we'll just update the lastSyncTime
    await new Promise((resolve) => setTimeout(resolve, 2000))
    updateIntegration(id, { lastSyncTime: new Date().toISOString() })
  }

  return (
    <IntegrationContext.Provider
      value={{
        integrations,
        addIntegration,
        updateIntegration,
        deleteIntegration,
        getIntegrationsByType,
        getIntegrationById,
        testConnection,
        syncIntegration,
        isLoading,
      }}
    >
      {children}
    </IntegrationContext.Provider>
  )
}

export function useIntegration() {
  const context = useContext(IntegrationContext)
  if (context === undefined) {
    throw new Error("useIntegration must be used within an IntegrationProvider")
  }
  return context
}
