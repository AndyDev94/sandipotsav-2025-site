"use client"

import { useEffect, useState } from "react"

export function AnimatedTitle() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-[300px]">
      <h1
        className={`text-3xl md:text-5xl font-bold text-center transition-all duration-1000 
        ${isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"}`}
      >
        <span className="inline-block animate-glitch-1 text-white mix-blend-difference drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
          SANDIPOTSAV
        </span>
        <span className="block animate-glitch-2 bg-gradient-to-r from-[#D8B4FE] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(216,180,254,0.7)]">
          2025
        </span>
      </h1>
      <div className="glitch-lines"></div>
    </div>
  )
}

