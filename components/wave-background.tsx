"use client"

import { useEffect, useRef } from "react"

// WaveBackground component creates an animated background with waves and parallax effects
export function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Main background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CROPPEDIMG-20240303-WA0015.jpg-1l20MdX5z8xK6EsY72qISJ2znwYUlz.jpeg")',
        }}
      />

      {/* Animated wave overlays - Three layers with different speeds and opacities */}
      <div className="absolute inset-0 opacity-20">
        <div className="wave wave1" /> {/* Fast wave */}
        <div className="wave wave2" /> {/* Medium wave */}
        <div className="wave wave3" /> {/* Slow wave */}
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

