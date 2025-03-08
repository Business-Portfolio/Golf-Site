import { FaGraduationCap, FaVideo, FaTrophy, FaMobileAlt, FaUserFriends } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaVideo className="h-10 w-10 text-emerald-600" />,
      title: "Video Swing Analysis",
      description:
        "Upload your swing videos to receive frame-by-frame analysis with detailed metrics on club path, face angle, and body positioning. Identify and correct swing flaws with expert guidance.",
    },
    {
      icon: <FaGraduationCap className="h-10 w-10 text-emerald-600" />,
      title: "Premium Swing Tips",
      description:
        "Access over 200+ exclusive video lessons from PGA teaching professionals. From fundamentals to advanced techniques, learn proven methods to improve every aspect of your golf swing.",
    },
    {
      icon: <FaUserFriends className="h-10 w-10 text-emerald-600" />,
      title: "Expert Coaching",
      description:
        "Connect with certified golf instructors for personalized virtual lessons. Get real-time feedback on your swing mechanics and customized drills to develop a consistent, powerful golf swing.",
    },
    {
      icon: <FaMobileAlt className="h-10 w-10 text-emerald-600" />,
      title: "Progress Tracking",
      description:
        "Monitor your improvement with our intuitive mobile app. Track key metrics over time, set goals, and visualize your progress as you implement swing changes and develop better technique.",
    },
    {
      icon: <FaTrophy className="h-10 w-10 text-emerald-600" />,
      title: "Performance Drills",
      description:
        "Follow our structured practice routines designed by tour professionals. Each drill targets specific aspects of your swing to build muscle memory and transfer improvements to the course.",
    },
  ]

  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
            Comprehensive Golf Improvement
          </div>
          <h2 className="text-3xl text-gray-900 font-bold tracking-tight sm:text-4xl md:text-5xl">
            Transform Your Swing with Professional Tools
          </h2>
          <p className="mt-4 max-w-[800px] mx-auto text-gray-600 text-lg">
            Our platform combines cutting-edge technology with expert instruction to help you 
            develop a consistent, powerful, and accurate golf swing
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={index + 3}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-emerald-600 bg-transparent px-6 text-base font-medium text-emerald-600 transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            View All Features
          </Link>
        </div>
      </div>
    </section>
  )
}

// Add Link import at the top
import Link from "next/link";