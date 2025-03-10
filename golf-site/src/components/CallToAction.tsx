"use client"

import Link from "next/link"

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
    <section className="bg-emerald-600 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Golf Game?
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Join thousands of golfers who have improved their skills with our comprehensive platform. Start your free
            trial today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#email"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-emerald-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={handleWaitlistClick}
            >
              Join Waitlist
            </Link>
            <Link
              href="/demo"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}