import Link from "next/link"

const footerLinks = [
  { name: "CONTACT US", href: "/sandipotsav/contact" },
  { name: "SPONSORS", href: "/sandipotsav/sponsors" },
  { name: "ABOUT US", href: "/sandipotsav/about" },
]

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/sandipuniversity" },
  { name: "Facebook", href: "https://facebook.com/sandipuniversity" },
  { name: "Instagram", href: "https://instagram.com/sandipuniversity" },
  { name: "YouTube", href: "https://youtube.com/sandipuniversity" },
  { name: "LinkedIn", href: "https://linkedin.com/school/sandipuniversity" },
]

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-2 px-4 bg-[#0F172A]/95 backdrop-blur-sm border-t border-[#FDB61A]/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs text-gray-200 hover:text-[#FDB61A] transition-colors drop-shadow-[0_0_8px_rgba(253,182,26,0.5)]"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <div className="text-center mx-4">
            <p className="text-sm font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              SANDIPOTSAV 2025 IS COMING FOR YOU!
            </p>
          </div>
          <div className="flex space-x-2">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-1.5 h-1.5 rounded-full bg-white hover:bg-[#FDB61A] transition-colors shadow-[0_0_8px_rgba(253,182,26,0.5)]"
              >
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

