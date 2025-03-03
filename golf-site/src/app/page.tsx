import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SwingAnalyzer from "@/components/SwingAnalyzer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SwingAnalyzer />
      <Blog />
      <CallToAction />
    </main>
  )
}
