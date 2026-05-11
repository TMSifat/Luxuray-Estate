import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { AboutOverview } from "@/components/sections/AboutOverview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedProperties />
      <AboutOverview />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
