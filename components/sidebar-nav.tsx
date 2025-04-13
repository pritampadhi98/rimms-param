"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Package,
  FileText,
  RefreshCw,
  FileCheck,
  Database,
  Shield,
  Settings,
  Home,
  Pill,
  Globe,
  FolderArchive,
} from "lucide-react";
import { UserNav } from "@/components/user-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b py-3 px-5">
          <div className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold">RIMMS</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                  <Link href="/dashboard">
                    <Home className="h-5 w-5 mr-3" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Product Management</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/products"}
                  >
                    <Link href="/products">
                      <Package className="h-5 w-5 mr-3" />
                      <span>Products</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/product-registration")}
                  >
                    <Link href="/product-registration">
                      <Pill className="h-5 w-5 mr-3" />
                      <span>Product Registration</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {/* <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/product-registration/catalog"}
                      >
                        <Link href="/product-registration/catalog">
                          Product C
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem> */}
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/product-registration/dosage-forms"
                        }
                      >
                        <Link href="/product-registration/dosage-forms">
                          Dosage Management
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    {/* <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/product-registration/ingredients"
                        }
                      >
                        <Link href="/product-registration/ingredients">
                          Ingredients
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem> */}
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/product-registration/packaging"
                        }
                      >
                        <Link href="/product-registration/packaging">
                          Packaging Management
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname ===
                          "/product-registration/manufacturing-sites"
                        }
                      >
                        <Link href="/product-registration/manufacturing-sites">
                          Manufacturing Sites
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/product-registration/lifecycle"
                        }
                      >
                        <Link href="/product-registration/lifecycle">
                          Lifecycle Management
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/product-registration/change-control"
                        }
                      >
                        <Link href="/product-registration/change-control">
                          Change Management
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Regulatory Activities</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/submissions")}
                  >
                    <Link href="/submissions">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>Submissions</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {/* <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname?.startsWith("/variations")}>
                    <Link href="/variations">
                      <RefreshCw className="h-5 w-5 mr-3" />
                      <span>Variations</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem> */}
                {/* <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname?.startsWith("/renewals")}>
                    <Link href="/renewals">
                      <FileCheck className="h-5 w-5 mr-3" />
                      <span>Renewals</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem> */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/market-authorization")}
                  >
                    <Link href="/market-authorization">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>Market Authorization</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/countries"
                        }
                      >
                        <Link href="/market-authorization/countries">
                          Country Requirements
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/submission-types"
                        }
                      >
                        <Link href="/market-authorization/submission-types">
                          Submission Types
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/application-forms"
                        }
                      >
                        <Link href="/market-authorization/application-forms">
                          Application Forms
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/timelines"
                        }
                      >
                        <Link href="/market-authorization/timelines">
                          Registration Timelines
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/certificates"
                        }
                      >
                        <Link href="/market-authorization/certificates">
                          Approval Certificates
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/conditions"
                        }
                      >
                        <Link href="/market-authorization/conditions">
                          Approval Conditions
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/label-claims"
                        }
                      >
                        <Link href="/market-authorization/label-claims">
                          Label Claims
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/market-authorization/patents"}
                      >
                        <Link href="/market-authorization/patents">
                          Patents & Exclusivity
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/market-authorization/fees"}
                      >
                        <Link href="/market-authorization/fees">
                          Registration Fees
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/regulatory-intelligence")}
                  >
                    <Link href="/regulatory-intelligence">
                      <Globe className="h-5 w-5 mr-3" />
                      <span>Regulatory Intelligence</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/authorities"
                        }
                      >
                        <Link href="/regulatory-intelligence/authorities">
                          Authority Database
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/updates"
                        }
                      >
                        <Link href="/regulatory-intelligence/updates">
                          Requirement Updates
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/timelines"
                        }
                      >
                        <Link href="/regulatory-intelligence/timelines">
                          Review Timelines
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/documents"
                        }
                      >
                        <Link href="/regulatory-intelligence/documents">
                          Document Matrix
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/formats"
                        }
                      >
                        <Link href="/regulatory-intelligence/formats">
                          Dossier Formats
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/regulatory-intelligence/fees"}
                      >
                        <Link href="/regulatory-intelligence/fees">
                          Fees Structure
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/contacts"
                        }
                      >
                        <Link href="/regulatory-intelligence/contacts">
                          Contact Directory
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/holidays"
                        }
                      >
                        <Link href="/regulatory-intelligence/holidays">
                          Holidays Calendar
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/languages"
                        }
                      >
                        <Link href="/regulatory-intelligence/languages">
                          Language Requirements
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/dmf-dossier")}
                  >
                    <Link href="/dmf-dossier">
                      <FolderArchive className="h-5 w-5 mr-3" />
                      <span>DMF & Dossier Tracker</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/dmf-dossier/dmf-management"}
                      >
                        <Link href="/dmf-dossier/dmf-management">
                          DMF Management
                        </Link>
                      </SidebarMenuSubButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/classification"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/classification">
                              DMF Type Classification
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/registry"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/registry">
                              Global DMF Registry
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/lifecycle"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/lifecycle">
                              DMF Lifecycle Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/authorization"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/authorization">
                              Letter of Authorization
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/dmf-management/review"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/review">
                              DMF Review Status
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/dmf-management/holder"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/holder">
                              DMF Holder Information
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/resubmission"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/resubmission">
                              DMF Resubmission Planning
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/inventory"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/inventory">
                              DMF Content Inventory
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/dmf-management/usage"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/usage">
                              DMF Usage Tracking
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/dmf-dossier/anda-management"}
                      >
                        <Link href="/dmf-dossier/anda-management">
                          ANDA/Dossier Management
                        </Link>
                      </SidebarMenuSubButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/assembly"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/assembly">
                              Dossier Assembly
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/metadata"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/metadata">
                              Submission Metadata
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/versioning"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/versioning">
                              Dossier Versioning
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/repository"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/repository">
                              Document Repository
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/anda-management/status"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/status">
                              Status Tracking
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/gateway"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/gateway">
                              Electronic Submission Gateway
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/requirements"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/requirements">
                              Module-Specific Requirements
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/reference"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/reference">
                              Reference Listed Drug Information
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/bioequivalence"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/bioequivalence">
                              Bioequivalence Study Tracking
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/quality"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/quality">
                              Quality Information Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/clinical"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/clinical">
                              Clinical Data Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/dmf-dossier/comparative-review"
                        }
                      >
                        <Link href="/dmf-dossier/comparative-review">
                          Comparative Review
                        </Link>
                      </SidebarMenuSubButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/comparison"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/comparison">
                              Application Comparison
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/cross-reference"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/cross-reference">
                              Cross-Reference
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/core-dossier"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/core-dossier">
                              Core Dossier Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/gap-analysis"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/gap-analysis">
                              Gap Analysis
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/harmonization"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/harmonization">
                              Content Harmonization
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/history"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/history">
                              Submission History Comparison
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/differences"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/differences">
                              Document Difference Highlighting
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/approval"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/approval">
                              Approval Condition Comparison
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/commitments"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/commitments">
                              Commitment Tracking Matrix
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Regulatory Activities</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/submissions")}
                  >
                    <Link href="/submissions">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>Submissions</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {/* <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname?.startsWith("/variations")}>
                    <Link href="/variations">
                      <RefreshCw className="h-5 w-5 mr-3" />
                      <span>Variations</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem> */}
                {/* <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname?.startsWith("/renewals")}>
                    <Link href="/renewals">
                      <FileCheck className="h-5 w-5 mr-3" />
                      <span>Renewals</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem> */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/market-authorization")}
                  >
                    <Link href="/market-authorization">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>Market Authorization</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/countries"
                        }
                      >
                        <Link href="/market-authorization/countries">
                          Country Requirements
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/submission-types"
                        }
                      >
                        <Link href="/market-authorization/submission-types">
                          Submission Types
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/application-forms"
                        }
                      >
                        <Link href="/market-authorization/application-forms">
                          Application Forms
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/timelines"
                        }
                      >
                        <Link href="/market-authorization/timelines">
                          Registration Timelines
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/certificates"
                        }
                      >
                        <Link href="/market-authorization/certificates">
                          Approval Certificates
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/conditions"
                        }
                      >
                        <Link href="/market-authorization/conditions">
                          Approval Conditions
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/market-authorization/label-claims"
                        }
                      >
                        <Link href="/market-authorization/label-claims">
                          Label Claims
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/market-authorization/patents"}
                      >
                        <Link href="/market-authorization/patents">
                          Patents & Exclusivity
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/market-authorization/fees"}
                      >
                        <Link href="/market-authorization/fees">
                          Registration Fees
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/regulatory-intelligence")}
                  >
                    <Link href="/regulatory-intelligence">
                      <Globe className="h-5 w-5 mr-3" />
                      <span>Regulatory Intelligence</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/authorities"
                        }
                      >
                        <Link href="/regulatory-intelligence/authorities">
                          Authority Database
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/updates"
                        }
                      >
                        <Link href="/regulatory-intelligence/updates">
                          Requirement Updates
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/timelines"
                        }
                      >
                        <Link href="/regulatory-intelligence/timelines">
                          Review Timelines
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/documents"
                        }
                      >
                        <Link href="/regulatory-intelligence/documents">
                          Document Matrix
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/formats"
                        }
                      >
                        <Link href="/regulatory-intelligence/formats">
                          Dossier Formats
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/regulatory-intelligence/fees"}
                      >
                        <Link href="/regulatory-intelligence/fees">
                          Fees Structure
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/contacts"
                        }
                      >
                        <Link href="/regulatory-intelligence/contacts">
                          Contact Directory
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/holidays"
                        }
                      >
                        <Link href="/regulatory-intelligence/holidays">
                          Holidays Calendar
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/regulatory-intelligence/languages"
                        }
                      >
                        <Link href="/regulatory-intelligence/languages">
                          Language Requirements
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/dmf-dossier")}
                  >
                    <Link href="/dmf-dossier">
                      <FolderArchive className="h-5 w-5 mr-3" />
                      <span>DMF & Dossier Tracker</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/dmf-dossier/dmf-management"}
                      >
                        <Link href="/dmf-dossier/dmf-management">
                          DMF Management
                        </Link>
                      </SidebarMenuSubButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/classification"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/classification">
                              DMF Type Classification
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/registry"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/registry">
                              Global DMF Registry
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/lifecycle"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/lifecycle">
                              DMF Lifecycle Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/authorization"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/authorization">
                              Letter of Authorization
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/dmf-management/review"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/review">
                              DMF Review Status
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/dmf-management/holder"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/holder">
                              DMF Holder Information
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/resubmission"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/resubmission">
                              DMF Resubmission Planning
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/dmf-management/inventory"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/inventory">
                              DMF Content Inventory
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/dmf-management/usage"
                            }
                          >
                            <Link href="/dmf-dossier/dmf-management/usage">
                              DMF Usage Tracking
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === "/dmf-dossier/anda-management"}
                      >
                        <Link href="/dmf-dossier/anda-management">
                          ANDA/Dossier Management
                        </Link>
                      </SidebarMenuSubButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/assembly"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/assembly">
                              Dossier Assembly
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/metadata"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/metadata">
                              Submission Metadata
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/versioning"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/versioning">
                              Dossier Versioning
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/repository"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/repository">
                              Document Repository
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname === "/dmf-dossier/anda-management/status"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/status">
                              Status Tracking
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/gateway"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/gateway">
                              Electronic Submission Gateway
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/requirements"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/requirements">
                              Module-Specific Requirements
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/reference"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/reference">
                              Reference Listed Drug Information
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/bioequivalence"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/bioequivalence">
                              Bioequivalence Study Tracking
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/quality"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/quality">
                              Quality Information Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/anda-management/clinical"
                            }
                          >
                            <Link href="/dmf-dossier/anda-management/clinical">
                              Clinical Data Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton
                        asChild
                        isActive={
                          pathname === "/dmf-dossier/comparative-review"
                        }
                      >
                        <Link href="/dmf-dossier/comparative-review">
                          Comparative Review
                        </Link>
                      </SidebarMenuSubButton>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/comparison"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/comparison">
                              Application Comparison
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/cross-reference"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/cross-reference">
                              Cross-Reference
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/core-dossier"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/core-dossier">
                              Core Dossier Management
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/gap-analysis"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/gap-analysis">
                              Gap Analysis
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/harmonization"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/harmonization">
                              Content Harmonization
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/history"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/history">
                              Submission History Comparison
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/differences"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/differences">
                              Document Difference Highlighting
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/approval"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/approval">
                              Approval Condition Comparison
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton
                            asChild
                            isActive={
                              pathname ===
                              "/dmf-dossier/comparative-review/commitments"
                            }
                          >
                            <Link href="/dmf-dossier/comparative-review/commitments">
                              Commitment Tracking Matrix
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Regulatory Activities</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/renewal-management")}
                  >
                    <Link href="/renewal-management">
                      <Globe className="h-5 w-5 mr-3" />
                      <span>Renewal Management</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Integrations</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/integrations"}
                  >
                    <Link href="/integrations">
                      <Database className="h-5 w-5 mr-3" />
                      <span>Integration Hub</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/integrations/document-management"}
                  >
                    <Link href="/integrations/document-management">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>Document Management</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/integrations/erp"}
                  >
                    <Link href="/integrations/erp">
                      <Database className="h-5 w-5 mr-3" />
                      <span>ERP Systems</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === "/integrations/ectd"}
                  >
                    <Link href="/integrations/ectd">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>eCTD Publishing</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Administration</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/security")}
                  >
                    <Link href="/security">
                      <Shield className="h-5 w-5 mr-3" />
                      <span>Security</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith("/settings")}
                  >
                    <Link href="/settings/security">
                      <Settings className="h-5 w-5 mr-3" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t p-4">
          <div className="flex items-center justify-between">
            <UserNav />
            <ThemeToggle />
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
