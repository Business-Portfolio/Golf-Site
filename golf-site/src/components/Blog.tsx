import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function Blog() {
  const articles = [
    {
      title: "Fix Your Slice: 3 Pro Drills That Actually Work",
      excerpt:
        "Eliminate that frustrating slice with these proven practice drills from PGA teaching pro Mike Johnson.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Swing Tips",
      date: "Mar 15, 2025",
      videoLength: "12:37",
      featured: true
    },
    {
      title: "The Perfect Backswing: Keys to More Power",
      excerpt:
        "Learn the essential positions in your backswing that create maximum power while maintaining control and accuracy.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technique",
      date: "Mar 08, 2025",
      videoLength: "9:45"
    },
    {
      title: "Fixing Your Early Extension: Step-by-Step Guide",
      excerpt:
        "Early extension is one of the most common swing flaws. Follow this simple protocol to maintain your posture through impact.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Swing Analysis",
      date: "Feb 28, 2025",
      videoLength: "15:20"
    },
    {
      title: "Tour Pro Swing Secrets: What You're Missing",
      excerpt:
        "Analysis of the top 10 PGA Tour players reveals these common swing traits that amateurs should implement immediately.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Pro Analysis",
      date: "Feb 21, 2025",
      videoLength: "18:33"
    },
  ]

  return (
    <section id="blog" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
              Golf Swing Tips
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Improve Your Game with Pro Advice</h2>
            <p className="mt-4 max-w-[600px] text-gray-600">
              Watch detailed instructional videos and read expert analysis to fix common swing flaws and develop a consistent, reliable golf swing.
            </p>
          </div>
          <Link
            href="/tips"
            className="mt-6 md:mt-0 inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
          >
            View all swing tips
            <FaArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        {/* Featured Article */}
        <div className="mb-12">
          {articles.filter(a => a.featured).map((article, index) => (
            <Link
              key={index}
              href={`/tip/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group grid md:grid-cols-2 gap-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all text-gray-900"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-auto md:h-full">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="h-16 w-16 rounded-full bg-emerald-600/90 flex items-center justify-center">
                    <FaPlay className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-medium bg-black/70 text-white px-2 py-1 rounded-md">
                  {article.videoLength}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-3">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold group-hover:text-emerald-600">{article.title}</h3>
                <p className="text-gray-600 mb-5">{article.excerpt}</p>
                <span className="text-emerald-600 font-medium inline-flex items-center">
                  Watch Lesson <FaArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Other Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.filter(a => !a.featured).map((article, index) => (
            <Link
              key={index}
              href={`/tip/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md text-gray-900"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={340}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-12 w-12 rounded-full bg-emerald-600/90 flex items-center justify-center">
                    <FaPlay className="h-4 w-4 text-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 text-xs font-medium bg-black/70 text-white px-2 py-1 rounded-md">
                  {article.videoLength}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold group-hover:text-emerald-600">{article.title}</h3>
                <p className="text-gray-600 mb-3">{article.excerpt}</p>
                <span className="text-emerald-600 text-sm font-medium inline-flex items-center">
                  Watch Lesson <FaArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}