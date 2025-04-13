"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type UserRole = "admin" | "regulatory_manager" | "regulatory_specialist" | "quality_manager" | "viewer"

export type UserRegion = "global" | "north_america" | "europe" | "asia_pacific" | "latin_america" | "africa_middle_east"

export type UserDepartment =
  | "regulatory_affairs"
  | "quality_assurance"
  | "clinical"
  | "manufacturing"
  | "r_and_d"
  | "legal"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  regions: UserRegion[]
  departments: UserDepartment[]
  mfaEnabled: boolean
  lastLogin: string
  permissions: string[]
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  verifyMfaCode: (code: string) => Promise<boolean>
  hasPermission: (permission: string) => boolean
  hasRegionAccess: (region: UserRegion) => boolean
  hasDepartmentAccess: (department: UserDepartment) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      try {
        // In a real app, this would be an API call to validate the session
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Session validation error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkSession()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call to authenticate
      // Simulating API call with mock data
      const mockUser: User = {
        id: "user-123",
        name: "John Doe",
        email: email,
        role: "regulatory_manager",
        regions: ["north_america", "europe"],
        departments: ["regulatory_affairs"],
        mfaEnabled: true,
        lastLogin: new Date().toISOString(),
        permissions: [
          "submissions:read",
          "submissions:write",
          "products:read",
          "products:write",
          "variations:read",
          "renewals:read",
        ],
      }

      // Store user in local storage (in a real app, you'd use secure cookies or tokens)
      localStorage.setItem("user", JSON.stringify(mockUser))

      setUser(mockUser)
      setIsAuthenticated(true)
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setIsAuthenticated(false)
  }

  const verifyMfaCode = async (code: string) => {
    // In a real app, this would verify the MFA code with an API
    // For demo purposes, we'll accept any 6-digit code
    return code.length === 6 && /^\d+$/.test(code)
  }

  const hasPermission = (permission: string) => {
    if (!user) return false
    return user.permissions.includes(permission)
  }

  const hasRegionAccess = (region: UserRegion) => {
    if (!user) return false
    return user.regions.includes(region) || user.regions.includes("global")
  }

  const hasDepartmentAccess = (department: UserDepartment) => {
    if (!user) return false
    return user.departments.includes(department)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        logout,
        verifyMfaCode,
        hasPermission,
        hasRegionAccess,
        hasDepartmentAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
