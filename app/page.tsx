import { GradientBackground } from "@/components/gradient-background"
import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function Page() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/50">
      <GradientBackground />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-emerald-950/10 to-transparent" />

      <section className="px-6 max-w-5xl mx-auto">
        <h1
          className={`${instrumentSerif.className} text-foreground text-center text-balance tracking-tight text-6xl md:text-7xl lg:text-8xl font-normal mb-6`}
        >
          The DATCOs Access in LatAm
        </h1>
        <h3
          className={`${instrumentSerif.className} text-muted-foreground text-center text-balance font-normal tracking-tight italic text-xl md:text-2xl lg:text-3xl mb-12`}
        >
          You are not buying crypto, you are selling fiat.
        </h3>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <p className="text-sm text-muted-foreground tracking-wider uppercase">Secure • Transparent • Innovative</p>
        </div>
      </section>
    </main>
  )
}
