import Image from "next/image"
import Link from "next/link"
import { FaCheck } from "react-icons/fa";

export default function SwingAnalyzer() {
  const benefits = [
    "Specific swing analysis returned swiftly",
    "Side-by-side comparison with pro swings",
    "Detailed metrics and improvement suggestions",
    "Track your progress over time",
    "Share with coaches for additional feedback",
  ]

  return (
    <section id="analyzer" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Swing analyzer interface"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-lg border border-gray-200 max-w-[200px]">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5"></div>
                <div>
                  <p className="text-xs text-gray-500">Hip rotation improved by</p>
                  <p className="text-lg font-bold text-emerald-600">+15%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
              Advanced Strategy
            </div>
            <h2 className="text-3xl font-bold text-black tracking-tight sm:text-4xl">Tailored Swing Analysis</h2>
            <p className="mt-4 text-gray-600">
              Upload your swing videos and get instant analysis. Our system takes a strategic approach to improvement, analyzing every aspect of your swing and delivering precise, actionable feedback to help you play your best.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheck className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <span className="text-black">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/analyzer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Try Swing Analyzer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}