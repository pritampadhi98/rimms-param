"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, Download } from "lucide-react"

export default function ProductCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock product data
  const products = [
    {
      id: "PROD-001",
      name: "Cardiostat",
      activeIngredient: "Amlodipine",
      dosageForm: "Tablet",
      strength: "10mg",
      status: "Active",
      markets: 28,
    },
    {
      id: "PROD-002",
      name: "Neurobalance",
      activeIngredient: "Escitalopram",
      dosageForm: "Tablet",
      strength: "25mg",
      status: "Active",
      markets: 35,
    },
    {
      id: "PROD-003",
      name: "Respiroclear",
      activeIngredient: "Fluticasone",
      dosageForm: "Inhaler",
      strength: "250mcg",
      status: "Active",
      markets: 22,
    },
    {
      id: "PROD-004",
      name: "Gastroease",
      activeIngredient: "Omeprazole",
      dosageForm: "Capsule",
      strength: "50mg",
      status: "Active",
      markets: 42,
    },
    {
      id: "PROD-005",
      name: "Dermacalm",
      activeIngredient: "Hydrocortisone",
      dosageForm: "Cream",
      strength: "1%",
      status: "Discontinued",
      markets: 15,
    },
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.activeIngredient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product Catalog</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Product Search</CardTitle>
          <CardDescription>Search for products by name, ID, or active ingredient</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>Master repository of all company products with unique identifiers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Active Ingredient</TableHead>
                <TableHead>Dosage Form</TableHead>
                <TableHead>Strength</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Markets</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.activeIngredient}</TableCell>
                    <TableCell>{product.dosageForm}</TableCell>
                    <TableCell>{product.strength}</TableCell>
                    <TableCell>
                      <Badge variant={product.status === "Active" ? "success" : "destructive"}>{product.status}</Badge>
                    </TableCell>
                    <TableCell>{product.markets}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
