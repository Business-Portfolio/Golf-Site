"use client"

import { useState } from "react"
import Link from "next/link"
import { FaGolfBall } from "react-icons/fa"
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWaitlistClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.scrollTo({ top: 0, behavior: "smooth" })

    setTimeout(() => {
      const emailInput = document.getElementById("email")
      if (emailInput) {
        emailInput.focus()
      }
    }, 500)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <FaGolfBall className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-semibold tracking-tight text-black">Next Level Golf</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
            Features
          </Link>
          <Link href="#learn" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
            Learn
          </Link>
          <Link href="#analyzer" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
            Swing Analyzer
          </Link>
          <Link href="#blog" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#email" onClick={handleWaitlistClick} className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
            Join Waitlist
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white p-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#learn"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="#analyzer"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Swing Analyzer
            </Link>
            <Link
              href="#blog"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}