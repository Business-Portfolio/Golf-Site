import Image from "next/image"
import Link from "next/link"
import { FaGolfBall, FaVideo, FaChartLine, FaCalendarAlt, FaUsers, FaMobileAlt, FaCloudUploadAlt, FaAward, FaBookOpen, FaTools } from "react-icons/fa";

export default function Features() {
  const featureGroups = [
    {
      title: "Swing Analysis",
      description: "Our powerful analysis tools help you understand and improve your golf swing with expert detail",
      features: [
        {
          icon: <FaVideo className="h-6 w-6 text-emerald-600" />,
          title: "AI-Powered Video Analysis",
          description: "Upload your swing videos for instant AI analysis that identifies flaws and provides actionable feedback.",
        },
        {
          icon: <FaChartLine className="h-6 w-6 text-emerald-600" />,
          title: "Detailed Metrics",
          description: "Get comprehensive metrics on club path, face angle, attack angle, and body positioning throughout your swing.",
        },
        {
          icon: <FaGolfBall className="h-6 w-6 text-emerald-600" />,
          title: "Ball Flight Prediction",
          description: "Our simulator predicts your ball flight and shot shape based on your swing parameters.",
        },
      ],
    },
    {
      title: "Coaching & Instruction",
      description: "Learn from the best with personalized coaching and professional instruction",
      features: [
        {
          icon: <FaUsers className="h-6 w-6 text-emerald-600" />,
          title: "Pro Coach Network",
          description: "Connect with PGA-certified coaches for personalized virtual lessons and swing reviews.",
        },
        {
          icon: <FaCalendarAlt className="h-6 w-6 text-emerald-600" />,
          title: "Scheduled Sessions",
          description: "Book one-on-one virtual coaching sessions with easy scheduling and calendar integration.",
        },
        {
          icon: <FaBookOpen className="h-6 w-6 text-emerald-600" />,
          title: "Video Library",
          description: "Access over 500 instructional videos covering every aspect of the golf swing and game improvement.",
        },
      ],
    },
    {
      title: "Performance Tracking",
      description: "Monitor your progress and track your improvement over time",
      features: [
        {
          icon: <FaMobileAlt className="h-6 w-6 text-emerald-600" />,
          title: "Mobile App Integration",
          description: "Track your stats, watch lessons, and review your swings on the go with our mobile app.",
        },
        {
          icon: <FaChartLine className="h-6 w-6 text-emerald-600" />,
          title: "Progress Dashboard",
          description: "Visualize your improvement with detailed charts and progress indicators for key swing metrics.",
        },
        {
          icon: <FaCloudUploadAlt className="h-6 w-6 text-emerald-600" />,
          title: "Cloud Storage",
          description: "Store all your swing videos and analysis in the cloud for easy access and comparison.",
        },
      ],
    },
    {
      title: "Additional Tools",
      description: "Extra resources to elevate your game and training",
      features: [
        {
          icon: <FaAward className="h-6 w-6 text-emerald-600" />,
          title: "Skill Challenges",
          description: "Test your improvement with skill challenges and drills that measure your progress.",
        },
        {
          icon: <FaTools className="h-6 w-6 text-emerald-600" />,
          title: "Equipment Optimizer",
          description: "Get personalized equipment recommendations based on your swing characteristics and playing style.",
        },
        {
          icon: <FaUsers className="h-6 w-6 text-emerald-600" />,
          title: "Community Forums",
          description: "Connect with other golfers, share tips, and discuss swing techniques in our active community.",
        },
      ],
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features to Transform Your Golf Game
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover all the innovative tools and resources designed to analyze your swing, track your progress, and elevate your performance on the course.
            </p>
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Feature groups */}
      {featureGroups.map((group, groupIndex) => (
        <section 
          key={groupIndex} 
          className={`py-16 md:py-24 ${groupIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                {group.title}
              </h2>
              <p className="text-lg text-gray-700">
                {group.description}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {group.features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA section */}
      <section className="bg-emerald-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of golfers who have improved their game with SwingPerfect's comprehensive suite of tools and expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-base font-medium text-emerald-600 shadow-md transition-colors hover:bg-gray-100"
            >
              Sign Up Free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white px-6 text-base font-medium text-white transition-colors hover:bg-emerald-700"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}