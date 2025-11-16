"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'

interface LoginPanelProps {
  isOpen: boolean
  onClose: () => void
  buttonRef: React.RefObject<HTMLButtonElement>
}

export function LoginPanel({ isOpen, onClose, buttonRef }: LoginPanelProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [failedAttempts, setFailedAttempts] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose, buttonRef])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()

    if (!trimmedUsername || !trimmedPassword) {
      setError("Please fill in all fields.")
      return
    }

    if (trimmedUsername === "crocante" && trimmedPassword === "crocante") {
      localStorage.setItem("crocante_auth", "ok")
      window.location.href = "https://crocantelat.vercel.app"
    } else {
      const newFailedAttempts = failedAttempts + 1
      setFailedAttempts(newFailedAttempts)
      setError("Invalid credentials.")
    }
  }

  const isFormValid = username.trim() !== "" && password.trim() !== ""

  if (!isOpen) return null

  return (
    <div
      ref={panelRef}
      className="absolute top-full right-0 mt-2 w-80 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl p-4 shadow-xl z-50"
      role="dialog"
      aria-labelledby="login-panel-title"
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        <h2 id="login-panel-title" className="text-lg font-semibold text-[#A383D6]">
          Investor login
        </h2>

        <div className="space-y-1.5">
          <Label htmlFor="username" className="text-sm text-[#A383D6] font-medium">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white border-white/20 text-black placeholder:text-gray-400"
            autoComplete="username"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-sm text-[#A383D6] font-medium">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white border-white/20 text-black placeholder:text-gray-400"
            autoComplete="current-password"
          />
        </div>

        {error && (
          <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded px-2 py-1.5">
            {error}
          </div>
        )}

        {failedAttempts >= 5 && (
          <div className="text-xs text-white/60 italic">
            Need access? Request it.
          </div>
        )}

        <Button
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-white text-[#7C62CC] hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enter
        </Button>
      </form>
    </div>
  )
}
