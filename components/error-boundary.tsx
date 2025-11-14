"use client"

import type React from "react"

import { useEffect } from "react"

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Suppress ResizeObserver errors
    const errorHandler = (event: ErrorEvent) => {
      if (event.message && event.message.includes("ResizeObserver loop")) {
        event.stopImmediatePropagation()
        event.preventDefault()
        return true
      }
    }

    window.addEventListener("error", errorHandler, true)

    return () => {
      window.removeEventListener("error", errorHandler, true)
    }
  }, [])

  return <>{children}</>
}
