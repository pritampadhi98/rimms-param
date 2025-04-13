"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Plus, Upload } from "lucide-react"

export function DossierAssembly() {
  const [activeTab, setActiveTab] = useState("modules")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Application Dossier Assembly</CardTitle>
        <CardDescription>
          Assemble and organize regulatory submission dossiers according to eCTD or other regional formats
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="modules" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="modules">eCTD Modules</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="assembly">Assembly</TabsTrigger>
          </TabsList>
          <TabsContent value="modules" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((module) => (
                <Card key={module} className="cursor-pointer hover:bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Module {module}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{getModuleDescription(module)}</p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="templates" className="space-y-4 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Available Templates</h3>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Template
              </Button>
            </div>
            <div className="border rounded-md p-4">
              <p className="text-muted-foreground text-sm">
                Select a template to use as a starting point for your dossier assembly
              </p>
              <ul className="mt-4 space-y-2">
                <li className="p-2 border rounded-md flex justify-between items-center hover:bg-muted/50 cursor-pointer">
                  <span>US NDA Template</span>
                  <Button variant="ghost" size="sm">
                    Use
                  </Button>
                </li>
                <li className="p-2 border rounded-md flex justify-between items-center hover:bg-muted/50 cursor-pointer">
                  <span>EU MAA Template</span>
                  <Button variant="ghost" size="sm">
                    Use
                  </Button>
                </li>
                <li className="p-2 border rounded-md flex justify-between items-center hover:bg-muted/50 cursor-pointer">
                  <span>Japan PMDA Template</span>
                  <Button variant="ghost" size="sm">
                    Use
                  </Button>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="assembly" className="space-y-4 mt-4">
            <div className="border border-dashed rounded-md p-8 text-center">
              <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">Upload Documents</h3>
              <p className="text-sm text-muted-foreground mb-4">Drag and drop files here or click to browse</p>
              <Button>Browse Files</Button>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Assembly Progress</h3>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">45% complete</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Save Draft</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  )
}

function getModuleDescription(module: number): string {
  switch (module) {
    case 1:
      return "Administrative and Prescribing Information"
    case 2:
      return "Common Technical Document Summaries"
    case 3:
      return "Quality (Chemistry, Manufacturing, and Controls)"
    case 4:
      return "Nonclinical Study Reports"
    case 5:
      return "Clinical Study Reports"
    default:
      return ""
  }
}
