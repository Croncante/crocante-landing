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
  title: "The DATCOs Access Layer",
  description: "Powering the On-Chain Shift Across Latin America",
  keywords: ["DATCOs", "Crocante", "DeFi", "Latin America", "Blockchain"],
  authors: [{ name: "Crocante" }],
  creator: "Crocante",
  publisher: "Crocante",
  openGraph: {
    title: "The DATCOs Access Layer",
    description: "Powering the On-Chain Shift Across Latin America",
    url: "https://www.crocante.lat",
    siteName: "Crocante",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The DATCOs Access Layer",
    description: "Powering the On-Chain Shift Across Latin America",
    creator: "@crocante",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.crocante.lat",
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
