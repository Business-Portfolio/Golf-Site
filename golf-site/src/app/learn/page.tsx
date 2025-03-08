"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaChevronDown, FaGraduationCap, FaUserGraduate, FaTrophy, FaCrown } from "react-icons/fa";

export default function Learn() {
  const [activeTab, setActiveTab] = useState('beginner');

  const tabContent = {
    beginner: {
      icon: <FaGraduationCap className="h-8 w-8 text-emerald-600" />,
      title: "Beginner Lessons",
      description: "Start your golf journey with the fundamentals. Learn proper grip, stance, and basic swing mechanics to build a solid foundation.",
      topics: [
        "Proper grip and stance fundamentals",
        "Basic swing mechanics and body rotation",
        "Understanding golf clubs and when to use them",
        "Etiquette and rules for beginners",
        "Simple drills to practice at home",
        "First steps to developing consistency",
      ],
      image: "/placeholder.svg?height=500&width=800",
    },
    intermediate: {
      icon: <FaUserGraduate className="h-8 w-8 text-emerald-600" />,
      title: "Intermediate Training",
      description: "Take your skills to the next level with focused training on shot shaping, course management, and fixing common swing flaws.",
      topics: [
        "Fine-tuning your swing mechanics",
        "Shot shaping: draws, fades, and trajectory control",
        "Effective practice routines and drills",
        "Course management strategies",
        "Handling different lies and situations",
        "Mental game development and focus",
      ],
      image: "/placeholder.svg?height=500&width=800",
    },
    advanced: {
      icon: <FaTrophy className="h-8 w-8 text-emerald-600" />,
      title: "Advanced Techniques",
      description: "Master advanced skills with detailed instruction on swing optimization, specialized shots, and performance under pressure.",
      topics: [
        "Advanced ball striking and compression",
        "Specialized shots for difficult situations",
        "Power generation and distance enhancement",
        "Precise wedge play and distance control",
        "Advanced swing analysis and optimization",
        "Performance psychology and pressure handling",
      ],
      image: "/placeholder.svg?height=500&width=800",
    },
    competition: {
      icon: <FaCrown className="h-8 w-8 text-emerald-600" />,
      title: "Competition Preparation",
      description: "Prepare for tournament play with elite coaching on competitive strategies, pressure management, and professional routines.",
      topics: [
        "Tournament preparation and routines",
        "Competitive course management strategies",
        "Pressure performance and mental toughness",
        "Game planning and scoring strategies",
        "Practice schedules for peak performance",
        "Recovery and stress management techniques",
      ],
      image: "/placeholder.svg?height=500&width=800",
    },
  };

  return (
    <main className="bg-white">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learn and Improve Your Golf Game
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive golf instruction for every skill level - from beginners to competitive players.
            </p>
            
            {/* Skill level dropdown */}
            <div className="relative inline-block text-left mb-8">
              <div className="group">
                <button 
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-6 py-4 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="skill-level-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Select Your Skill Level
                  <FaChevronDown className="h-5 w-5 text-gray-400 mt-1" />
                </button>
                <div 
                  className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block"
                  role="menu" 
                  aria-orientation="vertical" 
                  aria-labelledby="skill-level-button" 
                  tabIndex={-1}
                >
                  <div className="py-1">
                    <a 
                      href="#beginner" 
                      className="block px-4 py-3 hover:bg-gray-50" 
                      role="menuitem" 
                      tabIndex={-1}
                      onClick={() => setActiveTab('beginner')}
                    >
                      <div className="flex items-center gap-3">
                        <FaGraduationCap className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Beginner Lessons</span>
                      </div>
                    </a>
                    <a 
                      href="#intermediate" 
                      className="block px-4 py-3 hover:bg-gray-50" 
                      role="menuitem" 
                      tabIndex={-1}
                      onClick={() => setActiveTab('intermediate')}
                    >
                      <div className="flex items-center gap-3">
                        <FaUserGraduate className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Intermediate Training</span>
                      </div>
                    </a>
                    <a 
                      href="#advanced" 
                      className="block px-4 py-3 hover:bg-gray-50" 
                      role="menuitem" 
                      tabIndex={-1}
                      onClick={() => setActiveTab('advanced')}
                    >
                      <div className="flex items-center gap-3">
                        <FaTrophy className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Advanced Techniques</span>
                      </div>
                    </a>
                    <a 
                      href="#competition" 
                      className="block px-4 py-3 hover:bg-gray-50" 
                      role="menuitem" 
                      tabIndex={-1}
                      onClick={() => setActiveTab('competition')}
                    >
                      <div className="flex items-center gap-3">
                        <FaCrown className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Competition Preparation</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              Start Learning Now
            </Link>
          </div>
        </div>
      </section>

      {/* Tab content section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Skill level tabs */}
          <div className="border-b border-gray-200 mb-12">
            <div className="flex flex-wrap -mb-px justify-center">
              {Object.entries(tabContent).map(([key, content]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`inline-flex items-center gap-2 py-4 px-6 border-b-2 text-sm font-medium ${
                    activeTab === key
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {content.icon}
                  <span>{content.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active tab content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-6">
                Structured Learning Path for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Golfers
              </h2>
              <p className="text-gray-700 mb-8">
                {tabContent[activeTab as keyof typeof tabContent].description}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3 mb-8">
                {tabContent[activeTab as keyof typeof tabContent].topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/learn/${activeTab}`}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Explore {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Lessons
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={tabContent[activeTab as keyof typeof tabContent].image}
                  alt={`${activeTab} golf lessons`}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white text-sm font-medium bg-emerald-600/90 rounded-full px-3 py-1 inline-flex items-center justify-center w-auto mb-2 self-start">
                    {activeTab === 'beginner' ? 'New to Golf' : 
                     activeTab === 'intermediate' ? 'Handicap 15-25' : 
                     activeTab === 'advanced' ? 'Handicap 5-15' : 
                     'Handicap 0-5'}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1">{tabContent[activeTab as keyof typeof tabContent].title}</h3>
                  <p className="text-white/80 text-sm">12 video lessons • 5 practice drills • 3 on-course exercises</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="hidden lg:block absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-emerald-100 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-emerald-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Golf Learning Journey Today
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of golfers who have improved their game with our structured learning paths, expert instruction, and personalized feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-medium text-emerald-600 shadow-md transition-colors hover:bg-gray-100"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white px-6 text-base font-medium text-white transition-colors hover:bg-emerald-700"
            >
              View Learning Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}