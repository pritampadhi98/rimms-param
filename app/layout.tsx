import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"
import { IntegrationProvider } from "@/contexts/integration-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RIMMS - Pharmaceutical Regulatory Information Management",
  description: "Comprehensive regulatory information management system for pharmaceutical companies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <IntegrationProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </IntegrationProvider>
        </AuthProvider>
      </body>
    </html>
  )
}


import './globals.css'