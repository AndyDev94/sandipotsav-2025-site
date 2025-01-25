import { Suspense } from "react"
import { CircularLoader } from "@/components/circular-loader"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import { ParallaxBackground } from "@/components/parallax-background"
import { AnimatedTitle } from "@/components/animated-title"
import { EventsSection } from "@/components/sections/events-section"
import { AboutSection } from "@/components/sections/about-section"
import { SponsorsSection } from "@/components/sections/sponsors-section"
import { Countdown } from "@/components/countdown"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParallaxBackground />

      {/* Content */}
      <div className="relative z-10">
        <Nav />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="text-center space-y-0">
            <Suspense fallback={<div className="w-[400px] h-[400px] animate-pulse bg-[#1E293B]/50 rounded-full" />}>
              <div className="relative">
                <CircularLoader />
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatedTitle />
                </div>
              </div>
            </Suspense>
            <div className="space-y-4">
              <p className="text-sm mt-4 text-[#E2E8F0] font-medium tracking-wider">TBD-TBD 2025</p>
              <Countdown />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-[#1E293B]/50" />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-[#1E293B]/50" />}>
          <EventsSection />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen animate-pulse bg-[#1E293B]/50" />}>
          <SponsorsSection />
        </Suspense>

        <Footer />
      </div>
    </main>
  )
}

