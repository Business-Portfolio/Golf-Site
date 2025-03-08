import Link from "next/link"
import { FaGolfBall } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FaGolfBall className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold text-white">SwingPerfect</span>
            </Link>
            <p className="mb-4">
              Transform your golf swing with professional video analysis, expert tips, and personalized feedback from PGA teaching pros.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaXTwitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <FaYoutube className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="TikTok">
                <FaTiktok className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Swing Analysis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Upload Your Swing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  AI Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pro Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sample Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Swing Tips</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Driving Distance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Fix Your Slice
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Iron Play
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Short Game
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pro Swing Secrets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Pros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; {currentYear} SwingPerfect. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}