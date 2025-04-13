"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useAuditLog } from "@/hooks/use-audit-log"
import { Plus, Edit, Trash } from "lucide-react"

export default function RolesPage() {
  const { toast } = useToast()
  const { logActivity } = useAuditLog()

  const [roles, setRoles] = useState([
    {
      id: "role-1",
      name: "Administrator",
      description: "Full system access with all permissions",
      users: 3,
    },
    {
      id: "role-2",
      name: "Regulatory Manager",
      description: "Manage regulatory submissions and approvals",
      users: 12,
    },
    {
      id: "role-3",
      name: "Regulatory Specialist",
      description: "Prepare and review regulatory documents",
      users: 28,
    },
    {
      id: "role-4",
      name: "Quality Manager",
      description: "Oversee quality control and compliance",
      users: 8,
    },
    {
      id: "role-5",
      name: "Viewer",
      description: "Read-only access to system data",
      users: 45,
    },
  ])

  const permissionCategories = [
    {
      name: "Products",
      permissions: [
        { id: "products:read", label: "View Products" },
        { id: "products:write", label: "Create/Edit Products" },
        { id: "products:delete", label: "Delete Products" },
        { id: "products:approve", label: "Approve Product Changes" },
      ],
    },
    {
      name: "Submissions",
      permissions: [
        { id: "submissions:read", label: "View Submissions" },
        { id: "submissions:write", label: "Create/Edit Submissions" },
        { id: "submissions:delete", label: "Delete Submissions" },
        { id: "submissions:approve", label: "Approve Submissions" },
        { id: "submissions:submit", label: "Submit to Authorities" },
      ],
    },
    {
      name: "Variations",
      permissions: [
        { id: "variations:read", label: "View Variations" },
        { id: "variations:write", label: "Create/Edit Variations" },
        { id: "variations:delete", label: "Delete Variations" },
        { id: "variations:approve", label: "Approve Variations" },
      ],
    },
    {
      name: "Users & Roles",
      permissions: [
        { id: "users:read", label: "View Users" },
        { id: "users:write", label: "Create/Edit Users" },
        { id: "users:delete", label: "Delete Users" },
        { id: "roles:read", label: "View Roles" },
        { id: "roles:write", label: "Create/Edit Roles" },
        { id: "roles:delete", label: "Delete Roles" },
      ],
    },
    {
      name: "System Settings",
      permissions: [
        { id: "settings:read", label: "View Settings" },
        { id: "settings:write", label: "Modify Settings" },
        { id: "audit:read", label: "View Audit Logs" },
        { id: "audit:export", label: "Export Audit Logs" },
      ],
    },
  ]

  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([
    "products:read",
    "submissions:read",
    "variations:read",
    "users:read",
    "roles:read",
    "settings:read",
  ])

  const handlePermissionChange = (permissionId: string) => {
    setSelectedPermissions((current) =>
      current.includes(permissionId) ? current.filter((id) => id !== permissionId) : [...current, permissionId],
    )
  }

  const handleSavePermissions = () => {
    toast({
      title: "Permissions Saved",
      description: "Role permissions have been updated successfully.",
    })

    logActivity("update", "setting", "role-permissions", "Updated role permissions")
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Role Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Role
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Roles</CardTitle>
              <CardDescription>Manage user roles and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="flex items-center justify-between p-3 rounded-md hover:bg-muted cursor-pointer"
                  >
                    <div>
                      <h3 className="font-medium">{role.name}</h3>
                      <p className="text-sm text-muted-foreground">{role.users} users</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Role Permissions</CardTitle>
              <CardDescription>Configure permissions for the selected role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {permissionCategories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <h3 className="font-medium">{category.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.permissions.map((permission) => (
                        <div key={permission.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={permission.id}
                            checked={selectedPermissions.includes(permission.id)}
                            onCheckedChange={() => handlePermissionChange(permission.id)}
                          />
                          <Label htmlFor={permission.id}>{permission.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSavePermissions}>Save Permissions</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
