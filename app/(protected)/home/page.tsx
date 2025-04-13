import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Pharmaceutical Regulatory Information Management System</h1>
          <p className="text-xl text-muted-foreground">
            Streamline and optimize the management of regulatory information across all stages of the product lifecycle
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Icons.submission className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Submission Management</CardTitle>
              <CardDescription>Track regulatory submissions across global markets</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Comprehensive tracking of all submission types with real-time status updates and deadline management.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/submissions" className="w-full">
                <Button className="w-full">View Submissions</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Icons.variation className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Variation Management</CardTitle>
              <CardDescription>Coordinate post-approval changes globally</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Streamlined management of variations with impact assessment and implementation tracking across markets.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/variations" className="w-full">
                <Button className="w-full">View Variations</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Icons.renewal className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Renewal Tracking</CardTitle>
              <CardDescription>Never miss a product renewal deadline</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Proactive management of renewal requirements with automated alerts and comprehensive documentation
                tracking.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/renewals" className="w-full">
                <Button className="w-full">View Renewals</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Icons.alert className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Alerts & Notifications</CardTitle>
              <CardDescription>Stay informed of critical deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configurable alert system with escalation pathways to ensure timely action on regulatory requirements.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/alerts" className="w-full">
                <Button className="w-full">View Alerts</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Icons.integration className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Enterprise Integrations</CardTitle>
              <CardDescription>Connect with your enterprise systems</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Seamless integration with document management, ERP, eCTD, email, and other enterprise systems.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/integrations" className="w-full">
                <Button className="w-full">Manage Integrations</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Icons.security className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Security & Compliance</CardTitle>
              <CardDescription>Ensure regulatory compliance and data security</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Comprehensive security controls with audit trails, encryption, and compliance features.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/security" className="w-full">
                <Button className="w-full">View Security</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/dashboard">
            <Button size="lg">Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
