"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Eye,
  Calendar,
  Download,
  Filter,
  Search,
  Plus,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  searchQuery?: string;
  therapeuticArea?: string;
  formulation?: string;
  lifecycleStage?: string;
  market?: string;
}

export const StrengthDosageTracking = ({
  searchQuery = "",
  therapeuticArea = "all",
  formulation = "all",
  lifecycleStage = "all",
  market = "all",
}: FilterProps) => {
  const [activeTab, setActiveTab] = useState("matrix");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-40">
            <div className="space-y-2 w-full max-w-md">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
              <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
              <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="matrix">Strength Matrix</TabsTrigger>
          <TabsTrigger value="dosage">Dosage Forms</TabsTrigger>
          <TabsTrigger value="markets">Market Availability</TabsTrigger>
          <TabsTrigger value="pipeline">Development Pipeline</TabsTrigger>
        </TabsList>

        <TabsContent value="matrix" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Product Strength Matrix</CardTitle>
                <CardDescription>
                  Complete matrix of all strength variations by product
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search strengths..."
                    className="w-[200px]"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Strength
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Product</TableHead>
                    <TableHead>Formulation</TableHead>
                    <TableHead>Strengths</TableHead>
                    <TableHead>Markets</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat</TableCell>
                    <TableCell>Tablets</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">5 mg</Badge>
                        <Badge variant="outline">10 mg</Badge>
                        <Badge variant="outline">25 mg</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          JP
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Marketed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cardiostat</TableCell>
                    <TableCell>XR Tablets</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">50 mg</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Marketed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Neurobalance</TableCell>
                    <TableCell>Capsules</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">25 mg</Badge>
                        <Badge variant="outline">50 mg</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          UK
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          CA
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Marketed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Respiraclear</TableCell>
                    <TableCell>Solution</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">2 mg/ml</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          JP
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          CN
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Marketed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Respiraclear</TableCell>
                    <TableCell>Inhaler</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">100 mcg/dose</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          JP
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Marketed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Oncotarget</TableCell>
                    <TableCell>Injection</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">50 mg/ml</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US*
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          EU*
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-blue-500">Development</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Immunoboost</TableCell>
                    <TableCell>Tablets</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline">500 mg</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          US*
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-blue-500">Development</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-2 text-xs text-muted-foreground">
                * Planned markets (development stage)
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dosage" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Dosage Form Specifications</CardTitle>
                <CardDescription>
                  Detailed specifications for all dosage forms
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tablet">
                <TabsList className="w-full">
                  <TabsTrigger value="tablet">Tablets</TabsTrigger>
                  <TabsTrigger value="capsule">Capsules</TabsTrigger>
                  <TabsTrigger value="solution">Solutions</TabsTrigger>
                  <TabsTrigger value="injectable">Injectables</TabsTrigger>
                  <TabsTrigger value="inhalation">Inhalation</TabsTrigger>
                </TabsList>
                <TabsContent value="tablet" className="mt-4">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            Immediate Release Tablets
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Critical Quality Attributes
                              </h4>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Attribute</TableHead>
                                    <TableHead>Specification</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>Appearance</TableCell>
                                    <TableCell>
                                      Round, biconvex, white to off-white
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Assay</TableCell>
                                    <TableCell>
                                      95.0-105.0% of label claim
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Dissolution</TableCell>
                                    <TableCell>Q ≥ 80% in 30 minutes</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Content Uniformity</TableCell>
                                    <TableCell>AV ≤ 15.0</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Products Using This Form
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                  <span>Cardiostat Tablets</span>
                                  <div className="flex flex-wrap gap-1">
                                    <Badge variant="outline">5 mg</Badge>
                                    <Badge variant="outline">10 mg</Badge>
                                    <Badge variant="outline">25 mg</Badge>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                  <span>Immunoboost Tablets</span>
                                  <div className="flex flex-wrap gap-1">
                                    <Badge variant="outline">500 mg</Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            Extended Release Tablets
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Critical Quality Attributes
                              </h4>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Attribute</TableHead>
                                    <TableHead>Specification</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>Appearance</TableCell>
                                    <TableCell>
                                      Oval, biconvex, white to off-white
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Assay</TableCell>
                                    <TableCell>
                                      95.0-105.0% of label claim
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Dissolution</TableCell>
                                    <TableCell>
                                      1h: 20-40%
                                      <br />
                                      4h: 40-60%
                                      <br />
                                      8h: NLT 70%
                                      <br />
                                      12h: NLT 80%
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Content Uniformity</TableCell>
                                    <TableCell>AV ≤ 15.0</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Products Using This Form
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 border rounded-md">
                                  <span>Cardiostat XR Tablets</span>
                                  <div className="flex flex-wrap gap-1">
                                    <Badge variant="outline">50 mg</Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          Manufacturing Process Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="p-3 border rounded-md">
                            <h4 className="font-medium mb-1">
                              Immediate Release Tablets
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Direct compression or wet granulation process,
                              followed by compression and film coating (if
                              applicable). Critical process parameters include
                              blending time, compression force, and tablet
                              hardness.
                            </p>
                          </div>
                          <div className="p-3 border rounded-md">
                            <h4 className="font-medium mb-1">
                              Extended Release Tablets
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Wet granulation with hydrophilic polymer matrix,
                              followed by compression and film coating. Critical
                              process parameters include granulation end point,
                              polymer hydration, compression force, and coating
                              weight gain.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="capsule" className="mt-4">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          Hard Gelatin Capsules
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">
                              Critical Quality Attributes
                            </h4>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Attribute</TableHead>
                                  <TableHead>Specification</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Appearance</TableCell>
                                  <TableCell>
                                    Size 1 hard gelatin capsules, opaque
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Assay</TableCell>
                                  <TableCell>
                                    95.0-105.0% of label claim
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Dissolution</TableCell>
                                  <TableCell>Q ≥ 75% in 45 minutes</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Content Uniformity</TableCell>
                                  <TableCell>AV ≤ 15.0</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Water Content</TableCell>
                                  <TableCell>NMT 5.0%</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-2">
                              Products Using This Form
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between p-2 border rounded-md">
                                <span>Neurobalance Capsules</span>
                                <div className="flex flex-wrap gap-1">
                                  <Badge variant="outline">25 mg</Badge>
                                  <Badge variant="outline">50 mg</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="solution" className="mt-4">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          Aqueous Solutions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">
                              Critical Quality Attributes
                            </h4>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead>Attribute</TableHead>
                                  <TableHead>Specification</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                <TableRow>
                                  <TableCell>Appearance</TableCell>
                                  <TableCell>
                                    Clear, colorless solution
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Assay</TableCell>
                                  <TableCell>
                                    95.0-105.0% of label claim
                                  </TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>pH</TableCell>
                                  <TableCell>6.0-7.0</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Osmolality</TableCell>
                                  <TableCell>270-330 mOsm/kg</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>Particulate Matter</TableCell>
                                  <TableCell>Meets USP requirements</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-2">
                              Products Using This Form
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between p-2 border rounded-md">
                                <span>Respiraclear Solution</span>
                                <div className="flex flex-wrap gap-1">
                                  <Badge variant="outline">2 mg/ml</Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="markets" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Market Availability Map</CardTitle>
                <CardDescription>
                  Global availability of product strengths by market
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="apac">Asia Pacific</SelectItem>
                    <SelectItem value="latam">Latin America</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">
                        Product/Strength
                      </TableHead>
                      <TableHead>US</TableHead>
                      <TableHead>EU</TableHead>
                      <TableHead>UK</TableHead>
                      <TableHead>Canada</TableHead>
                      <TableHead>Japan</TableHead>
                      <TableHead>China</TableHead>
                      <TableHead>Brazil</TableHead>
                      <TableHead>Australia</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Cardiostat 5 mg
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Cardiostat 10 mg
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Cardiostat 25 mg
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Cardiostat XR 50 mg
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Neurobalance 25 mg
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Neurobalance 50 mg
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Respiraclear 2 mg/ml
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Respiraclear 100 mcg/dose
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pipeline" className="mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Development Pipeline</CardTitle>
                <CardDescription>
                  New strengths and dosage forms in development
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button>
                  <Plus className="h-4 w-4 mr-1" />
                  New Development
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">
                          Cardiostat XR 75 mg
                        </CardTitle>
                        <Badge className="bg-blue-500">Phase III</Badge>
                      </div>
                      <CardDescription>Extended Release Tablet</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Target Markets:</span>{" "}
                          US, EU, Japan
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Development Status:
                          </span>{" "}
                          Bioequivalence studies completed
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Expected Submission:
                          </span>{" "}
                          Q1 2024
                        </div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">
                          Neurobalance 75 mg
                        </CardTitle>
                        <Badge className="bg-blue-500">Phase III</Badge>
                      </div>
                      <CardDescription>Hard Gelatin Capsule</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Target Markets:</span>{" "}
                          US, EU, UK, Canada
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Development Status:
                          </span>{" "}
                          Pivotal clinical trial ongoing
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Expected Submission:
                          </span>{" "}
                          Q3 2024
                        </div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">
                          Oncotarget 75 mg/ml
                        </CardTitle>
                        <Badge className="bg-blue-500">Phase II</Badge>
                      </div>
                      <CardDescription>Injectable Solution</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Target Markets:</span>{" "}
                          US, EU, Japan
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Development Status:
                          </span>{" "}
                          Dose-finding studies
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Expected Submission:
                          </span>{" "}
                          Q4 2025
                        </div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">
                          Respiraclear 200 mcg/dose
                        </CardTitle>
                        <Badge className="bg-blue-500">Phase III</Badge>
                      </div>
                      <CardDescription>Metered Dose Inhaler</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Target Markets:</span>{" "}
                          Global
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Development Status:
                          </span>{" "}
                          Pivotal studies completed
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Expected Submission:
                          </span>{" "}
                          Q2 2024
                        </div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">
                          Immunoboost 250 mg
                        </CardTitle>
                        <Badge className="bg-blue-500">Phase II</Badge>
                      </div>
                      <CardDescription>Film-Coated Tablet</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <span className="font-medium">Target Markets:</span>{" "}
                          US, EU
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Development Status:
                          </span>{" "}
                          Dose-finding studies
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">
                            Expected Submission:
                          </span>{" "}
                          Q1 2026
                        </div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Development Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute left-9 top-0 bottom-0 w-px bg-muted-foreground/20" />
                      <div className="space-y-6">
                        <div className="relative flex items-start">
                          <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                            <Calendar className="h-4 w-4 text-blue-500" />
                          </div>
                          <div className="ml-10 flex-1">
                            <div className="rounded-md border p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="font-medium">Q1 2024</span>
                                </div>
                                <Badge className="bg-blue-500">
                                  Submission
                                </Badge>
                              </div>
                              <div className="mt-2">
                                <p className="font-medium">
                                  Cardiostat XR 75 mg
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  NDA/MAA submission for US and EU markets
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative flex items-start">
                          <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                            <Calendar className="h-4 w-4 text-blue-500" />
                          </div>
                          <div className="ml-10 flex-1">
                            <div className="rounded-md border p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="font-medium">Q2 2024</span>
                                </div>
                                <Badge className="bg-blue-500">
                                  Submission
                                </Badge>
                              </div>
                              <div className="mt-2">
                                <p className="font-medium">
                                  Respiraclear 200 mcg/dose
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Global regulatory submissions
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative flex items-start">
                          <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                            <Calendar className="h-4 w-4 text-blue-500" />
                          </div>
                          <div className="ml-10 flex-1">
                            <div className="rounded-md border p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <span className="font-medium">Q3 2024</span>
                                </div>
                                <Badge className="bg-blue-500">
                                  Submission
                                </Badge>
                              </div>
                              <div className="mt-2">
                                <p className="font-medium">
                                  Neurobalance 75 mg
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  NDA/MAA submission for US, EU, UK, and Canada
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Add default export that references the named export
export default StrengthDosageTracking;
