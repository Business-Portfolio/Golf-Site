"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CiTrophy } from "react-icons/ci"
import { GoZap, GoClock } from "react-icons/go"

interface TierProps {
  threshold: number
  icon: React.ReactNode
  title: string
  description: string
}

interface WaitlistTiersProps {
  currentCount: number
  tiers?: TierProps[]
  className?: string
}

export default function WaitlistTiers({
    currentCount = 67, // Example default value
    className = "",
    tiers = [
      {
        threshold: 25,
        icon: <CiTrophy className="h-5 w-5 text-yellow-500" />,
        title: "First 25",
        description: "Get a free lifetime membership",
      },
      {
        threshold: 50,
        icon: <GoZap className="h-5 w-5 text-emerald-500" />,
        title: "First 50",
        description: "Get 3 free swing submissions",
      },
      {
        threshold: 100,
        icon: <GoClock className="h-5 w-5 text-blue-500" />,
        title: "First 100",
        description: "Get early access to the platform",
      },
    ],
  }: WaitlistTiersProps) {
    const [animatedCount, setAnimatedCount] = useState(0)
    const maxThreshold = Math.max(...tiers.map((tier) => tier.threshold))
  
    // Animate count up effect
    useEffect(() => {
      const duration = 1500
      const frameRate = 1000 / 60
      const totalFrames = Math.round(duration / frameRate)
      const countIncrement = currentCount / totalFrames
  
      let currentFrame = 0
  
      const counter = setInterval(() => {
        currentFrame++
        setAnimatedCount(Math.min(Math.floor(countIncrement * currentFrame), currentCount))
  
        if (currentFrame >= totalFrames) {
          clearInterval(counter)
          setAnimatedCount(currentCount)
        }
      }, frameRate)
  
      return () => clearInterval(counter)
    }, [currentCount])
  
    // Calculate progress percentage
    const progressPercentage = Math.min((currentCount / maxThreshold) * 100, 100)
  
    return (
      <div className={`bg-white rounded-2xl border border-gray-200 shadow-md p-6 ${className}`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Waitlist Perks</h3>
            <p className="text-sm text-gray-600">Join our waitlist and get exclusive benefits</p>
          </div>
          <div className="bg-emerald-50 px-4 py-2 rounded-full">
            <span className="text-lg font-bold text-emerald-700">{animatedCount}</span>
            <span className="text-sm text-emerald-600"> golfers on waitlist</span>
          </div>
        </div>
  
        {/* Progress bar container */}
        <div className="relative h-8 w-full bg-gray-100 rounded-full mb-6 overflow-hidden">
          {/* Progress bar fill */}
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
  
          {/* Tier markers */}
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`absolute top-0 h-full transition-opacity duration-300 ${
                currentCount >= tier.threshold ? "opacity-25" : "opacity-100"
              }`}
              style={{ left: `${(tier.threshold / maxThreshold) * 100}%` }}
            >
              {/* Only show the marker line if it's not at the very end */}
              {tier.threshold < maxThreshold && (
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-1 bg-gray-400 rounded-full" />
              )}
              {/* Label */}
              <div
                className="absolute top-8 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-500"
                style={{ left: 0 }}
              >
                {tier.threshold}
              </div>
            </div>
          ))}
  
          {/* Current count marker */}
          <div
            className="absolute top-0 h-full"
            style={{
              left: `${Math.min((currentCount / maxThreshold) * 100, 100)}%`,
              transition: "left 1.5s ease-out",
            }}
          >
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-2 bg-white rounded-full shadow-md border border-emerald-500" />
          </div>
        </div>
  
        {/* Tiers cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 border transition-all ${
                currentCount >= tier.threshold
                  ? "bg-gray-50 border-gray-200 opacity-60"
                  : "bg-white border-emerald-100 shadow-sm"
              }`}
            >
              <div className="flex items-center mb-2">
                <div className="mr-2 rounded-full bg-white p-1.5 shadow-sm">{tier.icon}</div>
                <h4 className="font-semibold text-gray-600 text-sm">{tier.title}</h4>
                {currentCount >= tier.threshold && (
                  <span className="ml-auto inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    Filled
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{tier.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
}