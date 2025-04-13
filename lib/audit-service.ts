export type AuditAction =
  | "login"
  | "logout"
  | "create"
  | "read"
  | "update"
  | "delete"
  | "export"
  | "import"
  | "approve"
  | "reject"

export type AuditResource =
  | "user"
  | "product"
  | "submission"
  | "variation"
  | "renewal"
  | "document"
  | "report"
  | "setting"

export interface AuditLogEntry {
  id: string
  timestamp: string
  userId: string
  userName: string
  userEmail: string
  action: AuditAction
  resource: AuditResource
  resourceId: string
  details: string
  ipAddress: string
  userAgent: string
}

class AuditService {
  async logActivity(
    userId: string,
    userName: string,
    userEmail: string,
    action: AuditAction,
    resource: AuditResource,
    resourceId: string,
    details: string,
  ): Promise<void> {
    // In a real application, this would send the audit log to a secure server
    // For this demo, we'll just log to console
    const auditEntry: AuditLogEntry = {
      id: `audit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      userId,
      userName,
      userEmail,
      action,
      resource,
      resourceId,
      details,
      ipAddress: "127.0.0.1", // In a real app, this would be the actual IP
      userAgent: navigator.userAgent,
    }

    console.log("Audit Log Entry:", auditEntry)

    // In a real app, you would send this to your secure audit log server
    // await fetch('/api/audit-log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(auditEntry),
    // })

    // Optionally store in local storage for demo purposes
    const auditLogs = JSON.parse(localStorage.getItem("auditLogs") || "[]")
    auditLogs.push(auditEntry)
    localStorage.setItem("auditLogs", JSON.stringify(auditLogs))
  }

  async getAuditLogs(
    filters?: {
      userId?: string
      action?: AuditAction
      resource?: AuditResource
      startDate?: string
      endDate?: string
    },
    page = 1,
    pageSize = 20,
  ): Promise<{ logs: AuditLogEntry[]; total: number }> {
    // In a real app, this would fetch from your secure audit log server
    // For demo purposes, we'll use local storage
    let auditLogs = JSON.parse(localStorage.getItem("auditLogs") || "[]") as AuditLogEntry[]

    // Apply filters
    if (filters) {
      if (filters.userId) {
        auditLogs = auditLogs.filter((log) => log.userId === filters.userId)
      }
      if (filters.action) {
        auditLogs = auditLogs.filter((log) => log.action === filters.action)
      }
      if (filters.resource) {
        auditLogs = auditLogs.filter((log) => log.resource === filters.resource)
      }
      if (filters.startDate) {
        auditLogs = auditLogs.filter((log) => log.timestamp >= filters.startDate)
      }
      if (filters.endDate) {
        auditLogs = auditLogs.filter((log) => log.timestamp <= filters.endDate)
      }
    }

    // Sort by timestamp (newest first)
    auditLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    // Paginate
    const start = (page - 1) * pageSize
    const paginatedLogs = auditLogs.slice(start, start + pageSize)

    return {
      logs: paginatedLogs,
      total: auditLogs.length,
    }
  }
}

export const auditService = new AuditService()
