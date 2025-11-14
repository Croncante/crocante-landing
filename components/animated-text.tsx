"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  texts: string[]
  className?: string
  interval?: number
  showPulse?: boolean
  syncKey?: string
}

const syncState: Record<
  string,
  {
    index: number
    timestamp: number
    longestTextLength: number
  }
> = {}

export function AnimatedText({
  texts,
  className = "",
  interval = 6000,
  showPulse = false,
  syncKey,
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (syncKey) {
      if (!syncState[syncKey]) {
        syncState[syncKey] = {
          index: 0,
          timestamp: Date.now(),
          longestTextLength: 0,
        }
      }

      // Update longest text length for current index
      const currentTextLength = texts[currentIndex]?.length || 0
      if (currentTextLength > syncState[syncKey].longestTextLength) {
        syncState[syncKey].longestTextLength = currentTextLength
      }
    }
  }, [syncKey, texts, currentIndex])

  useEffect(() => {
    if (syncKey) {
      const checkSync = setInterval(() => {
        const state = syncState[syncKey]
        if (state.index !== currentIndex) {
          setCurrentIndex(state.index)
          setDisplayedText("")
          setIsComplete(false)
          console.log("[v0] Syncing to index:", state.index)
        }
      }, 10)

      return () => clearInterval(checkSync)
    }
  }, [syncKey, currentIndex])

  useEffect(() => {
    const currentText = texts[currentIndex]
    let charIndex = 0

    console.log("[v0] Starting typing:", currentText)

    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setIsComplete(true)
        console.log("[v0] Finished typing:", currentText)

        const longestTextLength = syncKey ? syncState[syncKey].longestTextLength : currentText.length
        const typingDuration = longestTextLength * 50 // 50ms per character
        const currentTypingDuration = currentText.length * 50
        const waitTime = typingDuration - currentTypingDuration + 2000 // Wait for longest + 2s display

        console.log("[v0] Wait time:", waitTime, "Longest:", longestTextLength, "Current:", currentText.length)

        setTimeout(() => {
          const nextIndex = (currentIndex + 1) % texts.length

          if (syncKey) {
            // Only update if we're the first to reach this point
            if (syncState[syncKey].index === currentIndex) {
              syncState[syncKey].index = nextIndex
              syncState[syncKey].timestamp = Date.now()
              syncState[syncKey].longestTextLength = 0 // Reset for next cycle
              console.log("[v0] Transitioning to index:", nextIndex)
            }
          } else {
            setCurrentIndex(nextIndex)
            setDisplayedText("")
            setIsComplete(false)
          }
        }, waitTime)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [currentIndex, texts, syncKey])

  return (
    <div className="relative flex items-center justify-center gap-2 min-h-[1.2em]">
      {showPulse && <div className="h-2 w-2 rounded-full bg-white animate-pulse" />}
      <span className={className}>
        {displayedText}
        {!isComplete && <span className="inline-block w-[2px] h-[0.9em] bg-white ml-1 animate-pulse" />}
      </span>
    </div>
  )
}
