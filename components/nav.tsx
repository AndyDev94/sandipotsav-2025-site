"use client"

import Link from "next/link"

const navItems = [
  { name: "EVENTS", href: "/sandipotsav/events" },
  { name: "COMPETITIONS", href: "/sandipotsav/competitions" },
]

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-2 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#FDB61A]/20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1 flex justify-start space-x-8">
          {navItems.slice(0, 1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-200 hover:text-[#FDB61A] transition-colors drop-shadow-[0_0_8px_rgba(253,182,26,0.5)]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/sandipotsav"
            className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          >
            SANDIPOTSAV
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center space-x-8">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-200 hover:text-[#FDB61A] transition-colors drop-shadow-[0_0_8px_rgba(253,182,26,0.5)]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

