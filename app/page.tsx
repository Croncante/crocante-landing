"use client"

import { GradientBackground } from "@/components/gradient-background"
import { AnimatedText } from "@/components/animated-text"
import { useFitText } from "@/hooks/use-fit-text"
import { LoginPanel } from "@/components/login-panel"
import Image from "next/image"
import { useState, useRef } from "react"

export default function Page() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const loginButtonRef = useRef<HTMLButtonElement>(null)

  const h1Texts = ["The DATCOs Access Layer", "La Capa de Acceso DATCOs", "A Camada de Acesso DATCOs"]

  const h3Texts = [
    "Powering the On-Chain Shift Across Latin America",
    "Impulsando el Cambio On-Chain en América Latina",
    "Impulsionando a Mudança On-Chain na América Latina",
  ]

  const pTexts = [
    "Secure • Transparent • Capital Efficient",
    "Seguro • Transparente • Eficiente",
    "Seguro • Transparente • Eficiente",
  ]

  const { elementRef: h1Ref } = useFitText(80)
  const { elementRef: h3Ref } = useFitText(32)
  const { elementRef: pRef } = useFitText(16)

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#7C62CC]">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20">
        <button
          ref={loginButtonRef}
          onClick={() => setIsLoginOpen(!isLoginOpen)}
          className="text-xs sm:text-sm text-white/90 hover:text-white underline underline-offset-4 transition-colors"
          aria-controls="investor-login-panel"
          aria-expanded={isLoginOpen}
        >
          Login
        </button>
        <LoginPanel isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} buttonRef={loginButtonRef} />
      </div>

      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20">
        <Image
          src="/logotype.svg"
          alt="Acro Create"
          width={120}
          height={22}
          className="h-auto w-24 sm:w-32 md:w-36 lg:w-48"
        />
      </div>

      <div className="absolute inset-0 z-[2]">
        <GradientBackground />
      </div>
      <div className="absolute inset-0 z-[3] bg-gradient-to-br from-[#A383D6]/10 via-transparent to-[#C4C4ED]/12" />
      <div className="absolute inset-0 z-[3] bg-gradient-to-tr from-[#C4C4ED]/10 via-transparent to-[#A383D6]/8" />

      <section className="relative z-20 w-full max-w-full mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-full overflow-visible text-center mb-6">
          <h1 ref={h1Ref} className="font-sans text-white tracking-tight font-normal leading-[1.1]">
            <AnimatedText texts={h1Texts} syncKey="main" />
          </h1>
        </div>

        <div className="w-full max-w-full overflow-visible text-center mb-12">
          <h3 ref={h3Ref} className="font-sans font-normal tracking-tight italic text-secondary">
            <AnimatedText texts={h3Texts} syncKey="main" />
          </h3>
        </div>

        <div className="w-full max-w-full overflow-visible text-center mb-8">
          <p ref={pRef} className="text-white/80 tracking-wider uppercase">
            <AnimatedText texts={pTexts} showPulse syncKey="main" />
          </p>
        </div>
      </section>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 lg:bottom-8 z-20">
        <a
          href="mailto:contacto@crocante.lat"
          className="text-xs sm:text-sm text-white/90 hover:text-white underline underline-offset-4 transition-colors"
        >
          Contact us
        </a>
      </div>
    </main>
  )
}
