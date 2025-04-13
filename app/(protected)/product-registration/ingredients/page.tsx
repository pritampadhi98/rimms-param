"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, Download } from "lucide-react"

export default function IngredientsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock ingredient data
  const ingredients = [
    {
      id: "ING-001",
      name: "Amlodipine",
      type: "Active",
      category: "Calcium channel blocker",
      cas: "88150-42-9",
      status: "Approved",
      products: 5,
    },
    {
      id: "ING-002",
      name: "Escitalopram",
      type: "Active",
      category: "SSRI",
      cas: "128196-01-0",
      status: "Approved",
      products: 3,
    },
    {
      id: "ING-003",
      name: "Fluticasone",
      type: "Active",
      category: "Corticosteroid",
      cas: "90566-53-3",
      status: "Approved",
      products: 4,
    },
    {
      id: "ING-004",
      name: "Microcrystalline Cellulose",
      type: "Inactive",
      category: "Filler",
      cas: "9004-34-6",
      status: "Approved",
      products: 28,
    },
    {
      id: "ING-005",
      name: "Magnesium Stearate",
      type: "Inactive",
      category: "Lubricant",
      cas: "557-04-0",
      status: "Approved",
      products: 32,
    },
  ]

  const filteredIngredients = ingredients.filter(
    (ingredient) =>
      ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ingredient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ingredient.cas.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Ingredients</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Ingredient
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ingredient Search</CardTitle>
          <CardDescription>Search for ingredients by name, ID, or CAS number</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search ingredients..."
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
          <CardTitle>Ingredient List</CardTitle>
          <CardDescription>Active and inactive ingredient tracking with global naming conventions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ingredient ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>CAS Number</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Products</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredIngredients.length > 0 ? (
                filteredIngredients.map((ingredient) => (
                  <TableRow key={ingredient.id}>
                    <TableCell className="font-medium">{ingredient.id}</TableCell>
                    <TableCell>{ingredient.name}</TableCell>
                    <TableCell>
                      <Badge variant={ingredient.type === "Active" ? "default" : "outline"}>{ingredient.type}</Badge>
                    </TableCell>
                    <TableCell>{ingredient.category}</TableCell>
                    <TableCell>{ingredient.cas}</TableCell>
                    <TableCell>
                      <Badge variant="success">{ingredient.status}</Badge>
                    </TableCell>
                    <TableCell>{ingredient.products}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No ingredients found
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
