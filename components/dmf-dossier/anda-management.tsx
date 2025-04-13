import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Layers,
  GitBranch,
  Clock,
  Upload,
  CheckSquare,
  Database,
  FlaskRoundIcon as Flask,
  FileText,
  BarChart,
  Server,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ANDAManagement() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Layers className="mr-2 h-5 w-5" /> Application Dossier Assembly
          </CardTitle>
          <CardDescription>Structure management for CTD/eCTD and other formats</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>eCTD Format</span>
              <Badge>42</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>CTD Format</span>
              <Badge>28</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>ACTD Format</span>
              <Badge>15</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Country-Specific</span>
              <Badge>9</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/assembly">View Dossier Assembly</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="mr-2 h-5 w-5" /> Submission Metadata Tracking
          </CardTitle>
          <CardDescription>Comprehensive tracking of submission parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Active Submissions</span>
              <Badge>38</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Completed Submissions</span>
              <Badge>64</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Regions Covered</span>
              <Badge>12</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Submission Types</span>
              <Badge>8</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/metadata">View Metadata</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <GitBranch className="mr-2 h-5 w-5" /> Dossier Versioning
          </CardTitle>
          <CardDescription>Complete version control of all dossier elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Initial Submissions</span>
              <Badge>34</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Responses to Queries</span>
              <Badge>27</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Amendments</span>
              <Badge>19</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Supplements</span>
              <Badge>12</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/versioning">View Version Control</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-5 w-5" /> Document Reuse Repository
          </CardTitle>
          <CardDescription>Library of standardized documents for multiple submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Reusable Templates</span>
              <Badge>56</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Standard Documents</span>
              <Badge>124</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Reuse Frequency</span>
              <Badge variant="outline">High</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Document Categories</span>
              <Badge>18</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/repository">View Repository</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5" /> ANDA/Dossier Status Tracking
          </CardTitle>
          <CardDescription>Real-time status monitoring throughout review process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Submitted</span>
              <Badge variant="outline">23</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Under Review</span>
              <Badge variant="outline">18</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Information Request</span>
              <Badge variant="outline">7</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Approved</span>
              <Badge variant="outline">39</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/status">View Status Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="mr-2 h-5 w-5" /> Electronic Submission Gateway
          </CardTitle>
          <CardDescription>Direct submission capability to regulatory portals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>FDA ESG</span>
              <Badge variant="outline">Connected</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>EMA CESP</span>
              <Badge variant="outline">Connected</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>PMDA Gateway</span>
              <Badge variant="outline">Pending</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Health Canada</span>
              <Badge variant="outline">Connected</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/gateway">View Gateway</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckSquare className="mr-2 h-5 w-5" /> Module-Specific Requirements
          </CardTitle>
          <CardDescription>Validation against module-specific requirements by market</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Module 1</span>
              <Badge>Regional</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Module 2</span>
              <Badge>Common</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Module 3</span>
              <Badge>Common</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Modules 4-5</span>
              <Badge>Common</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/requirements">View Requirements</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="mr-2 h-5 w-5" /> Reference Listed Drug Information
          </CardTitle>
          <CardDescription>Database of reference products by market</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>US Orange Book</span>
              <Badge>1,245</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>EU Reference Products</span>
              <Badge>876</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Canada Reference Products</span>
              <Badge>412</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Last Updated</span>
              <Badge variant="outline">2 days ago</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/reference-drugs">View RLD Database</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Flask className="mr-2 h-5 w-5" /> Bioequivalence Study Tracking
          </CardTitle>
          <CardDescription>Management of bioequivalence studies linked to submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Active Studies</span>
              <Badge>14</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Completed Studies</span>
              <Badge>47</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Planned Studies</span>
              <Badge>8</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Study Sites</span>
              <Badge>12</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/bioequivalence">View BE Studies</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Server className="mr-2 h-5 w-5" /> Quality Information Management
          </CardTitle>
          <CardDescription>Organization of CMC data for submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Drug Substance</span>
              <Badge>28</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Drug Product</span>
              <Badge>34</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Analytical Methods</span>
              <Badge>56</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Stability Studies</span>
              <Badge>42</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/quality">View Quality Data</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart className="mr-2 h-5 w-5" /> Clinical Data Management
          </CardTitle>
          <CardDescription>Storage and organization of clinical study data for submissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Clinical Studies</span>
              <Badge>23</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Study Reports</span>
              <Badge>19</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Patient Data</span>
              <Badge variant="outline">Secured</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Data Standards</span>
              <Badge>CDISC</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/anda-management/clinical">View Clinical Data</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
