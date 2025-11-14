"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div className="absolute inset-0">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(255, 55%, 50%)"
        softness={0.8}
        intensity={0.8}
        noise={0.4}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={2.0}
        rotation={0}
        speed={3.5}
        colors={["hsl(0, 0%, 98%)", "hsl(263, 80%, 60%)", "hsl(0, 0%, 95%)", "hsl(260, 85%, 50%)"]}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(240, 53%, 85%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(240, 53%, 85%) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  )
}
