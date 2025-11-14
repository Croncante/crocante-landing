import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Space_Grotesk } from 'next/font/google'
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "The DATCOs Access Layer",
  description: "Powering the On-Chain Shift Across Latin America",
  openGraph: {
    title: "The DATCOs Access Layer",
    description: "Powering the On-Chain Shift Across Latin America",
    type: "website",
    siteName: "Crocante",
  },
  twitter: {
    card: "summary_large_image",
    title: "The DATCOs Access Layer",
    description: "Powering the On-Chain Shift Across Latin America",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans overflow-x-hidden">
        <ErrorBoundary>
          {children}
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  )
}
