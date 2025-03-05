"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialAuth from "@/components/auth/SocialAuth"
import FormInput from "@/components/auth/FormInput"

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard") // Redirect to dashboard after successful signup
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <SocialAuth isSignUp />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="First name"
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
          />

          <FormInput label="Last name" id="lastName" name="lastName" type="text" autoComplete="family-name" required />
        </div>

        <FormInput label="Email address" id="email" name="email" type="email" autoComplete="email" required />

        <div className="relative">
          <FormInput
            label="Password"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-5/9 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaRegEye className="h-5 w-5" /> : <FaRegEyeSlash className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-emerald-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </button>
      </form>
    </div>
  )
}