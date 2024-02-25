import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
}
