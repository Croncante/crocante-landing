"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface TerminalModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [lines, setLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)

  const terminalLines = [
    "> Initializing DATCOs access Protocol...",
    "> Authenticating LATAM node...",
    "> Access denied. Public launch: coming soon.",
  ]

  useEffect(() => {
    if (!isOpen) {
      setLines([])
      setCurrentLine(0)
      return
    }

    if (currentLine >= terminalLines.length) return

    const timer = setTimeout(
      () => {
        setLines((prev) => [...prev, ""])
        let charIndex = 0
        const line = terminalLines[currentLine]

        const typeInterval = setInterval(() => {
          if (charIndex <= line.length) {
            setLines((prev) => {
              const newLines = [...prev]
              newLines[newLines.length - 1] = line.slice(0, charIndex)
              return newLines
            })
            charIndex++
          } else {
            clearInterval(typeInterval)
            setCurrentLine((prev) => prev + 1)
          }
        }, 30)

        return () => clearInterval(typeInterval)
      },
      currentLine === 0 ? 0 : 800,
    )

    return () => clearTimeout(timer)
  }, [isOpen, currentLine])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-black border border-primary/30 rounded-lg shadow-2xl shadow-primary/20 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-primary/30 bg-black/50">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm text-muted-foreground font-mono">terminal</span>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6 font-mono text-sm min-h-[200px]">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`mb-2 ${
                index === lines.length - 1 && line.includes("Access denied") ? "text-red-400" : "text-primary"
              }`}
            >
              {line}
              {index === lines.length - 1 && line.length < terminalLines[index].length && (
                <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
