import { FaBookOpen, FaVideo, FaChartBar } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBookOpen className="h-10 w-10 text-emerald-600" />,
      title: "Learning Center",
      description:
        "Access countless lessons from thousands of hours of fine tuning. From the basics to advanced techniques, improve every aspect of your game.",
    },
    {
      icon: <FaChartBar className="h-10 w-10 text-emerald-600" />,
      title: "Swing Analyzer",
      description:
        "Elevate your golf game by uploading your swing videos to receive in-depth analysis and personalized tips, empowering you to refine your technique and achieve lower scores.",
    },
    {
      icon: <FaVideo className="h-10 w-10 text-emerald-600" />,
      title: "Golf Blog",
      description:
        "Stay ahead of the game with real-time golf news, comprehensive tournament coverage, in-depth equipment reviews, and access to premium training aids.",
    },
  ]

  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-black font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to Improve Your Game
          </h2>
          <p className="mt-4 max-w-[700px] mx-auto text-gray-600">
            Our comprehensive platform provides all the tools and resources you need to take your golf game to the next
            level
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}