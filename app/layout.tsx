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
  metadataBase: new URL("https://www.crocante.lat"),
  title: {
    default: "The DATCOs Access Layer",
    template: "%s | Crocante",
  },
  description: "Powering the On-Chain Shift Across Latin America",
  keywords: ["DATCOs", "Crocante", "DeFi", "Latin America", "Blockchain"],
  authors: [{ name: "Crocante" }],
  creator: "Crocante",
  publisher: "Crocante",
  applicationName: "Crocante",
  openGraph: {
    title: "The DATCOs Access Layer",
    description: "Powering the On-Chain Shift Across Latin America",
    url: "https://www.crocante.lat",
    siteName: "Crocante",
    locale: "en_US",
    type: "website",
    alternateLocale: ["es_ES", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The DATCOs Access Layer",
    description: "Powering the On-Chain Shift Across Latin America",
    creator: "@crocante",
    site: "@crocante",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.crocante.lat",
  },
  other: {
    "og:title": "The DATCOs Access Layer",
    "og:description": "Powering the On-Chain Shift Across Latin America",
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
