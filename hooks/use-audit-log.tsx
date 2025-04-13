"use client"

import { useAuth } from "@/contexts/auth-context"
import { auditService, type AuditAction, type AuditResource } from "@/lib/audit-service"

export function useAuditLog() {
  const { user } = useAuth()

  const logActivity = async (action: AuditAction, resource: AuditResource, resourceId: string, details: string) => {
    if (!user) {
      console.error("Cannot log activity: No authenticated user")
      return
    }

    await auditService.logActivity(user.id, user.name, user.email, action, resource, resourceId, details)
  }

  return { logActivity }
}
