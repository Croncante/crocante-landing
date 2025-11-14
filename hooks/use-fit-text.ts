import { useEffect, useRef } from 'react'

/**
 * A hook that dynamically shrinks font-size to fit text on a single line
 * within its parent container, recalculating on window resize and text changes.
 * 
 * IMPORTANT: This hook only mutates DOM styles directly—it does NOT use React state.
 * This prevents unnecessary re-renders that would restart child animations like typewriter effects.
 */
export function useFitText(maxFontSize: number = 64) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const fitText = () => {
      element.style.fontSize = `${maxFontSize}px`
      element.style.whiteSpace = 'nowrap'

      const parentElement = element.parentElement
      if (!parentElement) return
      
      const availableWidth = Math.min(
        parentElement.clientWidth,
        document.documentElement.clientWidth - 32 // Account for padding
      )

      // Binary search for the largest font size that fits
      let low = 4
      let high = maxFontSize
      let bestSize = low

      while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        element.style.fontSize = `${mid}px`

        if (element.scrollWidth <= availableWidth) {
          bestSize = mid
          low = mid + 1
        } else {
          high = mid - 1
        }
      }

      // Set final font size
      element.style.fontSize = `${bestSize}px`
      
      while (element.scrollWidth > availableWidth && bestSize > 4) {
        bestSize -= 1
        element.style.fontSize = `${bestSize}px`
      }
    }

    // Fit text on mount
    fitText()

    // Create ResizeObserver to recalculate on container resize
    const resizeObserver = new ResizeObserver(() => {
      fitText()
    })

    const parentElement = element.parentElement
    if (parentElement) {
      resizeObserver.observe(parentElement)
    }

    // Also listen to window resize
    window.addEventListener('resize', fitText)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', fitText)
    }
  }, [maxFontSize])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new MutationObserver(() => {
      // Recalculate font size when children change (e.g., typewriter typing updates)
      element.style.fontSize = `${maxFontSize}px`
      element.style.whiteSpace = 'nowrap'

      const parentElement = element.parentElement
      if (!parentElement) return
      
      const availableWidth = Math.min(
        parentElement.clientWidth,
        document.documentElement.clientWidth - 32
      )

      let low = 4
      let high = maxFontSize
      let bestSize = low

      while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        element.style.fontSize = `${mid}px`

        if (element.scrollWidth <= availableWidth) {
          bestSize = mid
          low = mid + 1
        } else {
          high = mid - 1
        }
      }

      element.style.fontSize = `${bestSize}px`
      
      while (element.scrollWidth > availableWidth && bestSize > 4) {
        bestSize -= 1
        element.style.fontSize = `${bestSize}px`
      }
    })

    observer.observe(element, {
      childList: true,
      characterData: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [maxFontSize])

  return { elementRef }
}
