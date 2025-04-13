"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useAuditLog } from "@/hooks/use-audit-log"
import { AuditLogViewer } from "@/components/admin/audit-log-viewer"

export default function SecuritySettingsPage() {
  const { toast } = useToast()
  const { logActivity } = useAuditLog()
  const [mfaEnabled, setMfaEnabled] = useState(true)
  const [dataRegion, setDataRegion] = useState("us-east")
  const [encryptionKey, setEncryptionKey] = useState("••••••••••••••••••••••••••••••••")

  const handleSaveGeneral = () => {
    toast({
      title: "Settings Saved",
      description: "Your security settings have been updated successfully.",
    })

    logActivity("update", "setting", "security-general", "Updated general security settings")
  }

  const handleSaveCompliance = () => {
    toast({
      title: "Compliance Settings Saved",
      description: "Your compliance settings have been updated successfully.",
    })

    logActivity("update", "setting", "security-compliance", "Updated compliance settings")
  }

  const handleSaveEncryption = () => {
    toast({
      title: "Encryption Settings Saved",
      description: "Your encryption settings have been updated successfully.",
    })

    logActivity("update", "setting", "security-encryption", "Updated encryption settings")
  }

  const handleRegenerateKey = () => {
    setEncryptionKey("••••••••••••••••••••••••••••••••")
    toast({
      title: "Encryption Key Regenerated",
      description: "Your encryption key has been regenerated successfully.",
    })

    logActivity("update", "setting", "security-encryption-key", "Regenerated encryption key")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Security & Compliance Settings</h1>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="encryption">Encryption</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Settings</CardTitle>
              <CardDescription>Configure authentication methods and security policies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="mfa">Multi-Factor Authentication (MFA)</Label>
                  <p className="text-sm text-muted-foreground">Require MFA for all user accounts</p>
                </div>
                <Switch id="mfa" checked={mfaEnabled} onCheckedChange={setMfaEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Password Policy</Label>
                  <p className="text-sm text-muted-foreground">Enforce strong password requirements</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
                </div>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select timeout" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>IP Restrictions</Label>
                  <p className="text-sm text-muted-foreground">Limit access to specific IP addresses</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Single Sign-On (SSO)</Label>
                  <p className="text-sm text-muted-foreground">Enable enterprise SSO integration</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveGeneral}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Settings</CardTitle>
              <CardDescription>Configure settings to meet regulatory requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>21 CFR Part 11 Compliance</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable features required for FDA 21 CFR Part 11 compliance
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>GDPR Compliance</Label>
                  <p className="text-sm text-muted-foreground">Enable features required for GDPR compliance</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Electronic Signatures</Label>
                  <p className="text-sm text-muted-foreground">Enable compliant electronic signatures</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Retention Policy</Label>
                  <p className="text-sm text-muted-foreground">Configure automated data retention periods</p>
                </div>
                <Select defaultValue="7">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 year</SelectItem>
                    <SelectItem value="3">3 years</SelectItem>
                    <SelectItem value="5">5 years</SelectItem>
                    <SelectItem value="7">7 years</SelectItem>
                    <SelectItem value="10">10 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Residency</Label>
                  <p className="text-sm text-muted-foreground">Select primary data storage region</p>
                </div>
                <Select value={dataRegion} onValueChange={setDataRegion}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us-east">US East</SelectItem>
                    <SelectItem value="us-west">US West</SelectItem>
                    <SelectItem value="eu-central">EU Central</SelectItem>
                    <SelectItem value="eu-west">EU West</SelectItem>
                    <SelectItem value="ap-east">Asia Pacific</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveCompliance}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="encryption" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Encryption Settings</CardTitle>
              <CardDescription>Configure data encryption for sensitive information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data at Rest Encryption</Label>
                  <p className="text-sm text-muted-foreground">Enable AES-256 encryption for stored data</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data in Transit Encryption</Label>
                  <p className="text-sm text-muted-foreground">Enable TLS 1.3 for all data transmissions</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Field-Level Encryption</Label>
                  <p className="text-sm text-muted-foreground">Enable encryption for specific sensitive fields</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Encryption Key</Label>
                <div className="flex gap-2">
                  <Input value={encryptionKey} readOnly className="font-mono" />
                  <Button variant="outline" onClick={handleRegenerateKey}>
                    Regenerate
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Warning: Regenerating the encryption key will require re-encryption of all data
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveEncryption}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <AuditLogViewer />
        </TabsContent>
      </Tabs>
    </div>
  )
}
