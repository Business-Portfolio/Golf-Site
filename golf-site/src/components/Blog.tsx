import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const articles = [
    {
      title: "10 Tips to Add 20 Yards to Your Drive",
      excerpt:
        "Learn the secrets to increasing your driving distance with these data-driven techniques.",
      image: "/wade_clubhouse.png",
      category: "Technique",
      date: "Feb 27, 2025",
    },
    {
      title: "Masters Tournament 2024: Complete Recap",
      excerpt:
        "A comprehensive look at all the action, highlights, and surprising moments from this year's Masters Tournament.",
      image: "/wade_17.png",
      category: "Tournaments",
      date: "April 16, 2024",
    },
    {
      title: "Best Golf Equipment for Beginners in 2025",
      excerpt:
        "Our team reviews the top golf clubs, balls, and accessories that are perfect for those just starting their golf journey.",
      image: "/wade.png",
      category: "Equipment",
      date: "Feb 9, 2025",
    },
  ]

  return (
    <section id="blog" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 mb-4">
              Stay Informed
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Latest from Our Golf Blog</h2>
            <p className="mt-4 max-w-[600px] text-gray-600">
              Expert insights, tournament coverage, and tips to improve your game. Stay up-to-date with everything
              happening in the world of golf.
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-6 md:mt-0 inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
          >
            View all articles
            <FaArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md text-black"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold group-hover:text-emerald-600">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}