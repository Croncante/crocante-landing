"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(220, 13%, 9%)"
        softness={0.9}
        intensity={0.25}
        noise={0.08}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1.5}
        rotation={0}
        speed={0.5}
        colors={["hsl(158, 64%, 35%)", "hsl(210, 50%, 25%)", "hsl(166, 76%, 28%)", "hsl(220, 40%, 20%)"]}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(158, 64%, 52%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(158, 64%, 52%) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  )
}
