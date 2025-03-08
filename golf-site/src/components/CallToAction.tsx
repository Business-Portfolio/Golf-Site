"use client"

import Link from "next/link"
import { FaPlayCircle, FaVideo } from "react-icons/fa"

export default function CallToAction() {
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
    <section className="bg-gradient-to-br from-green-800 to-emerald-700 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white mb-6">
            <FaVideo className="h-4 w-4" />
            <span>Start Your Swing Transformation Today</span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Perfect Your Golf Swing With Professional Analysis
          </h2>
          <p className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto">
            Join thousands of golfers who have improved their technique, reduced their scores, and gained confidence with our 
            video analysis and expert swing tips. Your better game starts here.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#email"
              className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-6 text-base font-medium text-emerald-700 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={handleWaitlistClick}
            >
              Get Started Free
            </Link>
            
            <Link
              href="/demo"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white bg-transparent px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FaPlayCircle className="h-5 w-5" />
              Watch Demo
            </Link>
          </div>
          
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">35k+</p>
              <p className="text-sm text-emerald-100">Swings Analyzed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-sm text-emerald-100">Pro Tips Videos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">4.8</p>
              <p className="text-sm text-emerald-100">Customer Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">89%</p>
              <p className="text-sm text-emerald-100">Improve in 30 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}