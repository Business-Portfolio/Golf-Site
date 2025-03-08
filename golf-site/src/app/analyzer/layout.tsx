import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Swing Analyzer - GolfPro",
  description: "Upload your golf swing and get personalized feedback and analysis",
}

export default function AnalyzerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}