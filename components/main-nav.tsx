"use client"
import Link from "next/link"
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { usePathname } from "next/navigation"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Shield, Database, Globe, FolderArchive, ChevronDown, FileArchive, GitCompare, FileText } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="mr-4 flex">
      <Link href="/home" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">RIMMS</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Dashboard
        </Link>
        <Link
          href="/products"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/products") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Products
        </Link>
        <Link
          href="/submissions"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/submissions") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Submissions
        </Link>
        <Link
          href="/variations"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/variations") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Variations
        </Link>
        <Link
          href="/renewals"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/renewals") ? "text-foreground" : "text-foreground/60",
          )}
        >
          Renewals
        </Link>

        {/* Market Authorization Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "flex items-center transition-colors hover:text-foreground/80",
                pathname?.startsWith("/market-authorization") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Market Authorization <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/market-authorization">Overview</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/countries">Country Requirements</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/submission-types">Submission Types</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/application-forms">Application Forms</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/timelines">Registration Timelines</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/certificates">Approval Certificates</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/conditions">Approval Conditions</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/label-claims">Label Claims</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/patents">Patents & Exclusivity</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/market-authorization/fees">Registration Fees</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Regulatory Intelligence Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "flex items-center transition-colors hover:text-foreground/80",
                pathname?.startsWith("/regulatory-intelligence") ? "text-foreground" : "text-foreground/60",
              )}
            >
              <Globe className="h-4 w-4 mr-1 inline-block" />
              Regulatory Intelligence <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence">Overview</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/authorities">Authority Database</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/updates">Requirement Updates</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/timelines">Review Timelines</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/documents">Document Matrix</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/formats">Dossier Formats</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/fees">Fees Structure</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/contacts">Contact Directory</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/holidays">Holidays Calendar</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/regulatory-intelligence/languages">Language Requirements</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* DMF & Dossier Tracker Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "flex items-center transition-colors hover:text-foreground/80",
                pathname?.startsWith("/dmf-dossier") ? "text-foreground" : "text-foreground/60",
              )}
            >
              <FolderArchive className="h-4 w-4 mr-1 inline-block" />
              DMF & Dossier Tracker <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/dmf-dossier">Overview</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            {/* DMF Management Submenu */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <FileArchive className="h-4 w-4 mr-2" />
                <span>DMF Management</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/classification">DMF Type Classification</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/registry">Global DMF Registry</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/lifecycle">DMF Lifecycle Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/authorization">Letter of Authorization</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/review">DMF Review Status</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/holder">DMF Holder Information</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/resubmission">DMF Resubmission Planning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/inventory">DMF Content Inventory</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/dmf-management/usage">DMF Usage Tracking</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            {/* ANDA/Dossier Management Submenu */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <FileText className="h-4 w-4 mr-2" />
                <span>ANDA/Dossier Management</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/assembly">Application Dossier Assembly</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/metadata">Submission Metadata Tracking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/versioning">Dossier Versioning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/repository">Document Reuse Repository</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/status">ANDA/Dossier Status Tracking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/gateway">Electronic Submission Gateway</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/requirements">Module-Specific Requirements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/reference">Reference Listed Drug Information</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/bioequivalence">Bioequivalence Study Tracking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/quality">Quality Information Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/anda-management/clinical">Clinical Data Management</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            {/* Comparative Review Management Submenu */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <GitCompare className="h-4 w-4 mr-2" />
                <span>Comparative Review</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review">Overview</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/comparison">Application Comparison Tools</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/cross-reference">Cross-Reference Functionality</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/core-dossier">Global Core Dossier Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/gap-analysis">Gap Analysis Utilities</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/harmonization">Content Harmonization Tools</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/history">Submission History Comparison</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/differences">Document Difference Highlighting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/approval">Approval Condition Comparison</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dmf-dossier/comparative-review/commitments">Commitment Tracking Matrix</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/integrations"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/integrations") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Database className="h-4 w-4 mr-1 inline-block" />
          Integrations
        </Link>
        <Link
          href="/security"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/security") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <Shield className="h-4 w-4 mr-1 inline-block" />
          Security
        </Link>
      </nav>
    </div>
  )
}
