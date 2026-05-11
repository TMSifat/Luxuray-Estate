import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container, Section } from "@/components/layout/Section";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <div className="bg-black pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Office" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
              Crafting Exceptional <br />
              <span className="text-gold italic">Lifestyles</span> Since 2010
            </h1>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold">Our Mission & Vision</h2>
              <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed">
                At Luxury Estate, we believe that a home is more than just a property; 
                it's an expression of your identity and a sanctuary for your legacy. 
                Our mission is to bridge the gap between extraordinary architecture and 
                discerning individuals who demand nothing but the best.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-white-soft dark:bg-black-light rounded-2xl border-l-4 border-gold shadow-sm">
                  <h4 className="font-bold text-xl mb-2">Excellence</h4>
                  <p className="text-black/60 dark:text-white/60">We strive for perfection in every transaction and interaction.</p>
                </div>
                <div className="p-6 bg-white-soft dark:bg-black-light rounded-2xl border-l-4 border-gold shadow-sm">
                  <h4 className="font-bold text-xl mb-2">Integrity</h4>
                  <p className="text-black/60 dark:text-white/60">Transparency and trust are the foundations of our long-term relationships.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Stats />

      <Section className="bg-white-soft dark:bg-black">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-serif font-bold">Meet the Partners</h2>
            <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
              Our leadership team consists of industry veterans with over 50 years 
              of combined experience in luxury real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Robert Sterling", role: "Founder & CEO", img: "https://i.pravatar.cc/300?u=rob" },
              { name: "Eleanor Vance", role: "Head of Residential", img: "https://i.pravatar.cc/300?u=eleanor" },
              { name: "Marcus Thorne", role: "Principal Architect", img: "https://i.pravatar.cc/300?u=marcus" },
            ].map((member, i) => (
              <div key={i} className="group space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-gold font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
