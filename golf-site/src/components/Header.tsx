"use client"

import { useState } from "react"
import Link from "next/link"
import { FaGolfBall, FaVideo, FaUserPlus } from "react-icons/fa"
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

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
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <FaGolfBall className="h-7 w-7 text-emerald-600" />
          <span className="text-xl font-bold tracking-tight text-gray-900">SwingPerfect</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Features
          </Link>
          <Link href="#analyzer" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Swing Analysis
          </Link>
          <Link href="/learn" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Learn
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Blog
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
            Pricing
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/login" 
            className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup"
            className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            <FaUserPlus className="h-3.5 w-3.5" />
            <span>Sign up free</span>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <AiOutlineClose className="h-6 w-6 text-gray-700" /> : <HiOutlineMenu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-50 bg-white p-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/features"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#analyzer"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Swing Analysis
            </Link>
            <Link
              href="/learn"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <div className="border-t border-gray-100 my-2 pt-4 flex flex-col gap-3">
              <Link
                href="/login"
                className="w-full rounded-lg border border-emerald-600 px-4 py-3 text-center font-medium text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-center font-medium text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUserPlus className="h-4 w-4" />
                Sign up free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}