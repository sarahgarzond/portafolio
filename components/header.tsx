"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <header className="w-full bg-stone-50">
        <nav className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-sm text-black">Sarah Garzon Diaz</h1>
            </div>

            <div className="hidden md:flex items-center space-x-6 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-black hover:underline transition-all">
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4">
              <div className="w-full border-t border-black mb-4"></div>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-black hover:underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        <div className="w-full border-t border-black"></div>
      </header>
    </>
  )
}
