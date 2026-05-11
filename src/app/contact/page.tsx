import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container, Section } from "@/components/layout/Section";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <div className="bg-black pt-40 pb-24">
        <Container>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
              Connect With <br />
              <span className="text-gold italic">Excellence</span>
            </h1>
            <p className="text-white/60 text-lg">
              Whether you're looking to buy, sell, or invest, our experts are here 
              to provide you with the most professional real estate advice.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-serif font-bold">Office Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Our Location</h4>
                      <p className="text-black/60 dark:text-white/60 leading-relaxed">
                        123 Luxury Lane, Palm Jumeirah,<br />
                        Dubai, UAE - 00000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Direct Contact</h4>
                      <p className="text-black/60 dark:text-white/60">
                        Main: +1 (234) 567-890<br />
                        Whatsapp: +1 (234) 567-891
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Email Inquiry</h4>
                      <p className="text-black/60 dark:text-white/60">
                        General: info@luxuryestate.com<br />
                        Sales: sales@luxuryestate.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Office Hours</h4>
                      <p className="text-black/60 dark:text-white/60">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-white-soft dark:bg-black-light rounded-2xl border border-gold/10 overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-gold/30 flex-col space-y-2">
                  <MapPin size={48} />
                  <span className="font-serif italic">Interactive Map Coming Soon</span>
                </div>
              </div>
            </div>

            {/* GHL Form Side */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-black-light p-10 rounded-3xl border border-gold/10 shadow-2xl space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-serif font-bold">Send a Message</h2>
                  <p className="text-black/60 dark:text-white/60">
                    Your inquiry will be directly routed to our senior consultants. 
                    Expect a response within 2 business hours.
                  </p>
                </div>

                {/* GHL Lead Form Placeholder */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gold/80">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Property Type Interested In</label>
                    <select className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors">
                      <option>Villa</option>
                      <option>Penthouse</option>
                      <option>Mansion</option>
                      <option>Investment Property</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Message</label>
                    <textarea placeholder="Tell us about your requirements..." className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors h-40 resize-none" />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button variant="gold" className="w-full h-16 rounded-xl text-xl shadow-xl">
                      Submit Inquiry
                    </Button>
                    <p className="mt-4 text-xs text-center text-black/40 dark:text-white/40">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
