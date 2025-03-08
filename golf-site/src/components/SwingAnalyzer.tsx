import Image from "next/image"
import Link from "next/link"
import { FaCheck, FaVideo, FaChartLine, FaAngleRight } from "react-icons/fa";

export default function SwingAnalyzer() {
  const benefits = [
    "AI-powered swing analysis in under 5 minutes",
    "Side-by-side comparison with pro golfer swings",
    "Frame-by-frame breakdown with detailed metrics",
    "Personalized drills to fix swing flaws",
    "Track your progress with our mobile app",
  ]

  return (
    <section id="analyzer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border-2 border-emerald-600 bg-white shadow-xl">
                <div className="relative h-full w-full">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Swing analyzer interface"
                    width={600}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col">
                    {/* Top toolbar */}
                    <div className="bg-gray-900/90 text-white p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaVideo className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-medium">Swing Analysis</span>
                      </div>
                      <div className="text-xs bg-emerald-600 rounded-full px-2 py-0.5">
                        Frame 12/45
                      </div>
                    </div>
                    
                    {/* Highlighted swing path */}
                    <div className="flex-grow relative">
                      {/* Club path visual indicator - arc showing swing path */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path 
                          d="M30,80 Q45,30 70,50" 
                          stroke="#10b981" 
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="5,3"
                          className="animate-pulse"
                        />
                        <circle cx="30" cy="80" r="2" fill="#10b981" />
                        <circle cx="70" cy="50" r="2" fill="#10b981" />
                      </svg>
                    </div>
                    
                    {/* Bottom metrics panel */}
                    <div className="bg-gray-900/90 text-white p-3 space-y-2">
                      <div className="grid grid-cols-3 gap-3 text-center mb-2">
                        <div className="bg-gray-800 rounded p-2">
                          <div className="text-xs text-gray-400">Club Speed</div>
                          <div className="text-sm font-bold text-emerald-400">92 mph</div>
                        </div>
                        <div className="bg-gray-800 rounded p-2">
                          <div className="text-xs text-gray-400">Hip Rotation</div>
                          <div className="text-sm font-bold text-emerald-400">43°</div>
                        </div>
                        <div className="bg-gray-800 rounded p-2">
                          <div className="text-xs text-gray-400">Face Angle</div>
                          <div className="text-sm font-bold text-emerald-400">1.2°</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-emerald-400 flex items-center">
                          <FaChartLine className="mr-1 h-3 w-3" />
                          <span>Analysis complete</span>
                        </div>
                        <button className="bg-emerald-600 text-white text-xs px-3 py-1 rounded flex items-center">
                          View Report <FaAngleRight className="ml-1 h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Phone mockup overlay */}
              <div className="absolute -top-4 -right-4 -bottom-4 -left-4 border-[12px] border-gray-900 rounded-[40px] pointer-events-none z-10">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-xl"></div>
                <div className="absolute bottom-0 inset-x-0 h-6 bg-gray-900 rounded-t-xl flex items-center justify-center">
                  <div className="h-3 w-28 bg-gray-800 rounded-full"></div>
                </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full"></div>
              </div>
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-12 -right-8 rounded-2xl bg-white p-4 shadow-lg border border-gray-200 max-w-[180px]">
              <div>
                <p className="text-xs text-gray-500 mb-1">Weekly Swing Analytics</p>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <FaChartLine className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-900">27 <span className="text-xs font-normal text-emerald-600">swings</span></p>
                    <p className="text-xs text-emerald-600">↑ 15% improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
              Professional Video Analysis
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-4">Get Expert Feedback on Your Golf Swing</h2>
            <p className="text-gray-700 mb-6">
              Upload your swing videos and receive detailed professional analysis within 24 hours. Our AI-powered system identifies key improvement areas, while our PGA pros provide personalized feedback and drills to fix your specific swing issues.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <FaCheck className="h-3 w-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href="/upload-swing"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              Upload Your Swing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}