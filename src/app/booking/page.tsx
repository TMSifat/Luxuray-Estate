import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container, Section } from "@/components/layout/Section";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <div className="bg-black pt-40 pb-24 text-center">
        <Container>
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
              Private <span className="text-gold italic">Consultation</span>
            </h1>
            <p className="text-white/60 text-lg">
              Schedule a personalized session with one of our luxury property 
              experts to discuss your real estate goals.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Info */}
            <div className="lg:col-span-4 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold">What to Expect</h3>
                <div className="space-y-6">
                  {[
                    "One-on-one session with a senior agent",
                    "Exclusive preview of off-market listings",
                    "Personalized market analysis & strategy",
                    "Expert advice on financing & legalities",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                        <CheckCircle2 size={18} />
                      </div>
                      <p className="text-black/70 dark:text-white/70 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gold rounded-3xl text-white space-y-4">
                <Calendar size={32} />
                <h4 className="text-xl font-serif font-bold">Instant Confirmation</h4>
                <p className="text-white/80 text-sm">
                  Our system is directly synced with our agents' schedules. 
                  You will receive an instant confirmation via email and SMS.
                </p>
              </div>
            </div>

            {/* GHL Calendar Embed */}
            <div className="lg:col-span-8">
              <div className="bg-white dark:bg-black-light rounded-3xl border border-gold/10 shadow-2xl overflow-hidden">
                <div className="p-8 border-b border-gold/10 bg-white-soft dark:bg-black flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-gold" size={24} />
                    <span className="font-bold text-lg">Select Date & Time</span>
                  </div>
                  <div className="text-sm text-gold font-medium uppercase tracking-widest">
                    30 Minute Session
                  </div>
                </div>
                
                {/* 
                  GoHighLevel Calendar Iframe Embed Placeholder 
                  In a real scenario, you would replace the src with the GHL calendar link
                */}
                <div className="aspect-[4/5] md:aspect-video w-full bg-white dark:bg-black-light relative">
                  <div className="absolute inset-0 flex items-center justify-center p-12 text-center flex-col space-y-6">
                    <div className="w-20 h-20 border-4 border-gold border-t-transparent rounded-full animate-spin" />
                    <div className="space-y-2">
                      <h4 className="text-2xl font-serif font-bold text-gold">GoHighLevel Calendar Loading...</h4>
                      <p className="text-black/40 dark:text-white/40 max-w-sm">
                        Integrating your GHL location calendar here using the provided embed code.
                      </p>
                    </div>
                    
                    {/* Real Iframe would look like this: */}
                    {/* 
                    <iframe 
                      src="https://msgsndr.com/widget/booking/YOUR_CALENDAR_ID" 
                      style="width: 100%; border:none; overflow: hidden;" 
                      id="ghl-calendar-embed"
                    ></iframe> 
                    */}
                  </div>
                </div>
              </div>
              
              <p className="mt-6 text-center text-sm text-black/40 dark:text-white/40">
                Facing issues? Contact us directly at <span className="text-gold font-bold">+1 (234) 567-890</span>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
