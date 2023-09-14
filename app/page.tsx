import Image from "next/image"
import Hero from "./components/Hero"
import HeroSection from "./components/HeroSection"
import Features from "./components/Features"
import Pricing from "./components/Pricing"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 container">
      <HeroSection />

      <Features />
      <Pricing />
    </main>
  )
}
