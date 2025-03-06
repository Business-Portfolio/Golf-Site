"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialAuth from "@/components/auth/SocialAuth"
import FormInput from "@/components/auth/FormInput"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/lib/supabase/client"
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true)
    setErrorMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    })

    if (error) {
      setErrorMessage(error.message)
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    router.push('/')
    toast.success("Signed in!")
  }

  return (
    <div className="space-y-6">
      <SocialAuth />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput 
          label="Email address" 
          id="email" 
          type="email"  
          {...register("email")}
          error={errors.email?.message}
        />

        <div className="relative">
          <FormInput
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={errors.password?.message}
          />
          <button
            type="button"
            className="absolute right-3 top-5/9 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaRegEyeSlash className="h-5 w-5" /> : <FaRegEye className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/forgot-password" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
            Forgot your password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-emerald-600 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  )
}