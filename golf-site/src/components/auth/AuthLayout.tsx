import type React from "react"
import Link from "next/link"
import { FaGolfBall } from "react-icons/fa"
import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  linkText: string
  linkHref: string
  linkLabel: string
}

export default function AuthLayout({ children, title, subtitle, linkText, linkHref, linkLabel }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="mb-10">
            <Link href="/" className="flex items-center gap-2">
              <FaGolfBall className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold">GolfPro</span>
            </Link>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
          </div>
          {children}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {linkText}{" "}
              <Link href={linkHref} className="font-medium text-emerald-600 hover:text-emerald-500">
                {linkLabel}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-90"></div>
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Golf course" fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12">
          <div className="max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6">Elevate Your Golf Game</h2>
            <p className="text-lg mb-8">
              Join thousands of golfers who have improved their skills with personalized swing analysis and expert tips.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-white">AI-powered swing analysis</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-white">Expert tips and tutorials</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-white">Track your progress over time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}