"use client"

import { useState, useEffect } from "react"
import { auditService, type AuditLogEntry, type AuditAction, type AuditResource } from "@/lib/audit-service"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Search } from "lucide-react"

export function AuditLogViewer() {
  const [logs, setLogs] = useState<AuditLogEntry[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    userId: "",
    action: "" as AuditAction | "",
    resource: "" as AuditResource | "",
    startDate: "",
    endDate: "",
  })

  const fetchLogs = async () => {
    setLoading(true)
    try {
      const filterParams = Object.fromEntries(Object.entries(filters).filter(([_, v]) => v !== ""))

      const { logs, total } = await auditService.getAuditLogs(filterParams as any, page, pageSize)

      setLogs(logs)
      setTotal(total)
    } catch (error) {
      console.error("Error fetching audit logs:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLogs()
  }, [page, pageSize])

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleSearch = () => {
    setPage(1)
    fetchLogs()
  }

  const handleExport = () => {
    // In a real app, this would generate a CSV or PDF export
    alert("In a production environment, this would export the audit logs in a compliant format.")
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  const totalPages = Math.ceil(total / pageSize)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Audit Log</CardTitle>
        <CardDescription>
          Comprehensive log of all system activities in compliance with 21 CFR Part 11 and GDPR requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <Select value={filters.action} onValueChange={(value) => handleFilterChange("action", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="login">Login</SelectItem>
                  <SelectItem value="logout">Logout</SelectItem>
                  <SelectItem value="create">Create</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="update">Update</SelectItem>
                  <SelectItem value="delete">Delete</SelectItem>
                  <SelectItem value="export">Export</SelectItem>
                  <SelectItem value="import">Import</SelectItem>
                  <SelectItem value="approve">Approve</SelectItem>
                  <SelectItem value="reject">Reject</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <Select
                value={filters.resource || "all"}
                onValueChange={(value) => handleFilterChange("resource", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Resource" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Resources</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="submission">Submission</SelectItem>
                  <SelectItem value="variation">Variation</SelectItem>
                  <SelectItem value="renewal">Renewal</SelectItem>
                  <SelectItem value="document">Document</SelectItem>
                  <SelectItem value="report">Report</SelectItem>
                  <SelectItem value="setting">Setting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <Input
                type="date"
                placeholder="Start Date"
                value={filters.startDate}
                onChange={(e) => handleFilterChange("startDate", e.target.value)}
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <Input
                type="date"
                placeholder="End Date"
                value={filters.endDate}
                onChange={(e) => handleFilterChange("endDate", e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSearch} variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button onClick={handleExport} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>Resource ID</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.length > 0 ? (
                  logs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>{formatDate(log.timestamp)}</TableCell>
                      <TableCell>{log.userName}</TableCell>
                      <TableCell className="capitalize">{log.action}</TableCell>
                      <TableCell className="capitalize">{log.resource}</TableCell>
                      <TableCell>{log.resourceId}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{log.details}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      {loading ? "Loading..." : "No audit logs found"}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} />
              </PaginationItem>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNumber = page <= 3 ? i + 1 : page >= totalPages - 2 ? totalPages - 4 + i : page - 2 + i

                if (pageNumber <= 0 || pageNumber > totalPages) return null

                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink isActive={page === pageNumber} onClick={() => setPage(pageNumber)}>
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              })}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}
