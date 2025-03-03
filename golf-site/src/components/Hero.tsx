import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              Elevate Your Golf Game
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
              Master Your Swing, <span className="text-emerald-600">Perfect Your Game</span>
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Get personalized swing analysis, expert tips, and stay updated with the latest golf news. Your journey to
              becoming a better golfer starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex h-12 items-center justify-center rounded-full font-bold bg-emerald-600 px-8 text-sm text-white shadow transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Start Free Trial
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center text-black rounded-full border border-gray-200 bg-white px-8 text-sm font-semibold shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full bg-gray-100 ring-2 ring-white overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=32&width=32`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <span className="font-medium">4.9/5</span> from over 2,000 reviews
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto">
            <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Golfer using the app"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-emerald-600 p-2 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">30%</div>
                  <div className="text-xs font-medium">Improve</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}