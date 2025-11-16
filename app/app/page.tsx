"use client"

import { AuthGuard } from "@/components/auth-guard"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function AppPage() {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("crocante_auth")
    router.push("/")
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#7C62CC] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A383D6]/10 via-transparent to-[#C4C4ED]/12" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C4C4ED]/10 via-transparent to-[#A383D6]/8" />
        
        <header className="relative z-10 flex items-center justify-between p-6 lg:p-8">
          <Image
            src="/logotype.svg"
            alt="Acro Create"
            width={120}
            height={22}
            className="h-auto w-32 md:w-40"
          />
          
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-xs sm:text-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Logout
          </Button>
        </header>

        <main className="relative z-10 px-6 py-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Investor Dashboard
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Welcome to the DATCOs Access Layer investor portal. Access exclusive insights, performance metrics, and portfolio management tools.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">Portfolio Overview</h3>
                <p className="text-white/60 text-sm">
                  View your current holdings and performance metrics
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">Transaction History</h3>
                <p className="text-white/60 text-sm">
                  Review all past transactions and movements
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">Analytics</h3>
                <p className="text-white/60 text-sm">
                  Deep dive into performance analytics and trends
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">Documents</h3>
                <p className="text-white/60 text-sm">
                  Access reports, statements, and legal documents
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">Settings</h3>
                <p className="text-white/60 text-sm">
                  Manage your account preferences and notifications
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-2">
                <h3 className="text-xl font-semibold text-white">Support</h3>
                <p className="text-white/60 text-sm">
                  Get help from our dedicated investor relations team
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  )
}
