"use client"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (isOpen: boolean) => void
}

export default function Navbar({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Kirti Shrivastava
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["hero", "about", "skills", "experience", "education", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section ? "text-purple-600 font-medium" : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {["hero", "about", "skills", "experience", "education", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              >
                {section === "hero" ? "Home" : section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
