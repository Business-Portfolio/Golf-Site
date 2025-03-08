"use client"

import { useState } from 'react'
import Image from "next/image"
import FormInput from "./auth/FormInput"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addToWaitlist } from "@/app/actions";
import toast from "react-hot-toast";
import Link from "next/link";

const waitlistSchema = z.object({
  email: z.string().email("Please enter your email address")
})

type WaitlistFormInputs = z.infer<typeof waitlistSchema>

export default function Hero() {
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WaitlistFormInputs>({
    resolver: zodResolver(waitlistSchema)
  });

  const onSubmit = async (data: WaitlistFormInputs) => {
    setErrorMessage('')
    const response = await addToWaitlist(data.email)

    if (response.error) {
      setErrorMessage(response.error)
      return
    }

    reset()
    toast.success("Added to waitlist!")
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-emerald-600 px-3 py-1 text-sm font-semibold text-white">
              Pro-Level Swing Analysis
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
              Perfect Your <span className="text-emerald-600">Golf Swing</span>
            </h1>
            <p className="max-w-[600px] text-gray-700 md:text-xl">
              Get personalized video analysis from PGA professionals, expert swing tips, and detailed feedback to lower your scores. Transform your game today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#analyzer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Try Swing Analysis
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-emerald-600 bg-transparent px-6 text-base font-medium text-emerald-600 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Explore Features
              </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full md:w-2/3">
              <p className="text-sm font-medium text-gray-700 mb-2">Join our newsletter for weekly swing tips:</p>
              {errorMessage && <p className="text-red-500 text-center">Error joining waitlist</p>}
              <div className="relative">
                <FormInput
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email")}
                  error={errors.email?.message}
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 rounded-md bg-emerald-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
            
          </div>
          <div className="relative mx-auto lg:ml-auto">
            <div className="relative aspect-video w-full max-w-[550px] overflow-hidden rounded-2xl bg-gray-800 shadow-xl border-4 border-white">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Golfer swing analysis"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white">
                        <p className="text-sm font-medium">Watch Pro Analysis</p>
                        <p className="text-xs opacity-75">See how it works</p>
                      </div>
                    </div>
                    <div className="bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-bold">
                      2:45
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Average Improvement</p>
                  <p className="text-xl font-bold text-emerald-600">+25% <span className="text-xs font-normal text-gray-500">in 30 days</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}