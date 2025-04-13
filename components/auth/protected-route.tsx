"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredPermissions?: string[]
  requiredRegions?: string[]
  requiredDepartments?: string[]
}

export function ProtectedRoute({
  children,
  requiredPermissions = [],
  requiredRegions = [],
  requiredDepartments = [],
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user, hasPermission, hasRegionAccess, hasDepartmentAccess } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathname !== "/login") {
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router, pathname])

  // Check permissions
  const hasRequiredPermissions =
    requiredPermissions.length === 0 || requiredPermissions.every((permission) => hasPermission(permission))

  // Check region access
  const hasRequiredRegionAccess =
    requiredRegions.length === 0 || requiredRegions.some((region) => hasRegionAccess(region as any))

  // Check department access
  const hasRequiredDepartmentAccess =
    requiredDepartments.length === 0 || requiredDepartments.some((department) => hasDepartmentAccess(department as any))

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Icons.spinner className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  if (!hasRequiredPermissions || !hasRequiredRegionAccess || !hasRequiredDepartmentAccess) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Icons.alert className="h-16 w-16 text-destructive mb-4" />
        <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
        <p className="text-muted-foreground text-center mb-4">
          You don't have the necessary permissions to access this resource.
        </p>
        <Button onClick={() => router.push("/dashboard")}>Return to Dashboard</Button>
      </div>
    )
  }

  return <>{children}</>
}
