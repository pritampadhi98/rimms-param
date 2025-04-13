"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, FileText, Search, Tag } from "lucide-react"

export function SubmissionMetadata() {
  const [activeTab, setActiveTab] = useState("metadata")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Submission Metadata Tracking</CardTitle>
        <CardDescription>Track and manage metadata for regulatory submissions across different regions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metadata" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="metadata">Metadata</TabsTrigger>
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="metadata" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="submission-id">Submission ID</Label>
                  <Input id="submission-id" placeholder="Enter submission ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="submission-type">Submission Type</Label>
                  <Select>
                    <SelectTrigger id="submission-type">
                      <SelectValue placeholder="Select submission type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nda">New Drug Application (NDA)</SelectItem>
                      <SelectItem value="anda">Abbreviated New Drug Application (ANDA)</SelectItem>
                      <SelectItem value="bla">Biologics License Application (BLA)</SelectItem>
                      <SelectItem value="ind">Investigational New Drug (IND)</SelectItem>
                      <SelectItem value="maa">Marketing Authorization Application (MAA)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input id="product-name" placeholder="Enter product name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="submission-region">Submission Region</Label>
                  <Select>
                    <SelectTrigger id="submission-region">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States (FDA)</SelectItem>
                      <SelectItem value="eu">European Union (EMA)</SelectItem>
                      <SelectItem value="jp">Japan (PMDA)</SelectItem>
                      <SelectItem value="ca">Canada (Health Canada)</SelectItem>
                      <SelectItem value="uk">United Kingdom (MHRA)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="submission-date">Submission Date</Label>
                  <div className="flex">
                    <Input id="submission-date" type="date" />
                    <Button variant="outline" size="icon" className="ml-2">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="in-review">In Review</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sequence-number">Sequence Number</Label>
                  <Input id="sequence-number" placeholder="Enter sequence number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex">
                    <Input id="tags" placeholder="Add tags" />
                    <Button variant="outline" size="icon" className="ml-2">
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="search" className="space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <Input placeholder="Search submissions by ID, product, or region" />
              </div>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            <div className="border rounded-md p-4 mt-4">
              <p className="text-muted-foreground text-sm">Enter search criteria to find submissions</p>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Submission Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Overview of all submissions by status and region</p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </CardFooter>
              </Card>
              <Card className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Timeline Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Submission timelines and key milestones</p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Clock className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </CardFooter>
              </Card>
              <Card className="cursor-pointer hover:bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Metadata Audit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Audit trail of metadata changes</p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save Metadata</Button>
      </CardFooter>
    </Card>
  )
}
