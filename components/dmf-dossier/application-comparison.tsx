"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftRight, Check, Download, FileText, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ApplicationComparison() {
  const [activeTab, setActiveTab] = useState("content")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Application Comparison Tools</CardTitle>
        <CardDescription>
          Compare different versions of regulatory applications to identify changes and ensure consistency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">Content Comparison</TabsTrigger>
            <TabsTrigger value="structure">Structure Comparison</TabsTrigger>
            <TabsTrigger value="metadata">Metadata Comparison</TabsTrigger>
          </TabsList>
          <TabsContent value="content" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Application 1</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select application</option>
                  <option value="anda-2023-0045">ANDA-2023-0045 (Product A)</option>
                  <option value="nda-2023-0018">NDA-2023-0018 (Product C)</option>
                  <option value="maa-2023-0032">MAA-2023-0032 (Product B)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Application 2</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Select application</option>
                  <option value="anda-2023-0045">ANDA-2023-0045 (Product A)</option>
                  <option value="nda-2023-0018">NDA-2023-0018 (Product C)</option>
                  <option value="maa-2023-0032">MAA-2023-0032 (Product B)</option>
                </select>
              </div>
            </div>
            <Button className="mb-4">
              <ArrowLeftRight className="h-4 w-4 mr-2" />
              Compare Applications
            </Button>
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium mb-4">Comparison Results</h3>
              <p className="text-muted-foreground text-sm mb-4">Select two applications to compare their content</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-2">Module 3.2.P.3</h4>
                  <p className="text-sm text-muted-foreground mb-2">Manufacturing Process</p>
                  <Badge variant="outline" className="bg-red-50">
                    <X className="h-3 w-3 mr-1 text-red-500" />
                    Differences Found
                  </Badge>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-2">Module 3.2.P.5</h4>
                  <p className="text-sm text-muted-foreground mb-2">Control of Drug Product</p>
                  <Badge variant="outline" className="bg-green-50">
                    <Check className="h-3 w-3 mr-1 text-green-500" />
                    Identical
                  </Badge>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="font-medium mb-2">Module 3.2.P.8</h4>
                  <p className="text-sm text-muted-foreground mb-2">Stability</p>
                  <Badge variant="outline" className="bg-amber-50">
                    <ArrowLeftRight className="h-3 w-3 mr-1 text-amber-500" />
                    Minor Differences
                  </Badge>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="structure" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Structure Comparison</h3>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
            <div className="border rounded-md p-4">
              <p className="text-muted-foreground text-sm mb-4">
                Compare the structure and organization of two applications
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-2">Application 1 Structure</h4>
                  <div className="border rounded-md p-3">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        Module 1
                      </li>
                      <li className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        Module 2
                        <ul className="ml-6 mt-1 space-y-1">
                          <li className="flex items-center">
                            <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                            2.3 Quality Overall Summary
                          </li>
                          <li className="flex items-center">
                            <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                            2.4 Nonclinical Overview
                          </li>
                        </ul>
                      </li>
                      <li className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        Module 3
                        <ul className="ml-6 mt-1 space-y-1">
                          <li className="flex items-center">
                            <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                            3.2.P Drug Product
                          </li>
                          <li className="flex items-center text-red-500 font-medium">
                            <FileText className="h-3 w-3 mr-1" />
                            3.2.S Drug Substance (Missing)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Application 2 Structure</h4>
                  <div className="border rounded-md p-3">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        Module 1
                      </li>
                      <li className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        Module 2
                        <ul className="ml-6 mt-1 space-y-1">
                          <li className="flex items-center">
                            <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                            2.3 Quality Overall Summary
                          </li>
                          <li className="flex items-center">
                            <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                            2.4 Nonclinical Overview
                          </li>
                        </ul>
                      </li>
                      <li className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        Module 3
                        <ul className="ml-6 mt-1 space-y-1">
                          <li className="flex items-center">
                            <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                            3.2.P Drug Product
                          </li>
                          <li className="flex items-center">
                            <FileText className="h-3 w-3 mr-1 text-muted-foreground" />
                            3.2.S Drug Substance
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="metadata" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Metadata Comparison</h3>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
            <div className="border rounded-md p-4">
              <p className="text-muted-foreground text-sm mb-4">Compare metadata between two applications</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Metadata Field</th>
                    <th className="text-left p-2">Application 1</th>
                    <th className="text-left p-2">Application 2</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Submission Type</td>
                    <td className="p-2">ANDA</td>
                    <td className="p-2">ANDA</td>
                    <td className="p-2">
                      <Badge variant="outline" className="bg-green-50">
                        <Check className="h-3 w-3 mr-1 text-green-500" />
                        Match
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Product Strength</td>
                    <td className="p-2">10mg</td>
                    <td className="p-2">20mg</td>
                    <td className="p-2">
                      <Badge variant="outline" className="bg-red-50">
                        <X className="h-3 w-3 mr-1 text-red-500" />
                        Mismatch
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Dosage Form</td>
                    <td className="p-2">Tablet</td>
                    <td className="p-2">Tablet</td>
                    <td className="p-2">
                      <Badge variant="outline" className="bg-green-50">
                        <Check className="h-3 w-3 mr-1 text-green-500" />
                        Match
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Manufacturing Site</td>
                    <td className="p-2">Site A</td>
                    <td className="p-2">Site B</td>
                    <td className="p-2">
                      <Badge variant="outline" className="bg-red-50">
                        <X className="h-3 w-3 mr-1 text-red-500" />
                        Mismatch
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Reference Listed Drug</td>
                    <td className="p-2">Drug X</td>
                    <td className="p-2">Drug X</td>
                    <td className="p-2">
                      <Badge variant="outline" className="bg-green-50">
                        <Check className="h-3 w-3 mr-1 text-green-500" />
                        Match
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>Generate Comprehensive Report</Button>
      </CardFooter>
    </Card>
  )
}
