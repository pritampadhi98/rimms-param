import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GitCompare, GitMerge, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function ComparativeReview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <GitCompare className="mr-2 h-5 w-5" /> Application Comparison Tools
          </CardTitle>
          <CardDescription>Side-by-side comparison of dossiers across markets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>US-EU Comparisons</span>
              <Badge>18</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>US-Canada Comparisons</span>
              <Badge>12</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>EU-Japan Comparisons</span>
              <Badge>9</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Multi-Region Comparisons</span>
              <Badge>7</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/comparative-review/comparison">View Comparison Tools</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <GitMerge className="mr-2 h-5 w-5" /> Global Core Dossier Management
          </CardTitle>
          <CardDescription>Tools for maintaining consistent core documentation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Core CMC Dossiers</span>
              <Badge>14</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Core Clinical Dossiers</span>
              <Badge>9</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Core Nonclinical Dossiers</span>
              <Badge>7</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Core Administrative Dossiers</span>
              <Badge>11</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/comparative-review/core-dossier">View Core Dossiers</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="mr-2 h-5 w-5" /> Gap Analysis Utilities
          </CardTitle>
          <CardDescription>Identification of differences between submitted dossiers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Content Gaps</span>
              <Badge variant="outline">23</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Format Differences</span>
              <Badge variant="outline">17</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Regulatory Requirements</span>
              <Badge variant="outline">31</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Data Presentation</span>
              <Badge variant="outline">14</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dmf-dossier/comparative-review/gap-analysis">View Gap Analysis</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
