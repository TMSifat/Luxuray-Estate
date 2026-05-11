"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container, Section } from "@/components/layout/Section";
import { propertyService } from "@/lib/propertyService";
import { Property } from "@/data/properties";
import { Bed, Bath, Maximize, MapPin, CheckCircle2, Phone, Mail, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      if (typeof id === "string") {
        const data = await propertyService.getById(id);
        setProperty(data);
      }
      setLoading(false);
    };
    fetchProperty();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-gold">Loading...</div>;
  }

  if (!property) {
    return <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center text-gold">Property Not Found</div>;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Property Header / Gallery */}
      <div className="pt-24 bg-white-soft dark:bg-black">
        <Container>
          <Link href="/properties" className="inline-flex items-center space-x-2 text-gold hover:underline mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to All Properties</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Main Image */}
            <div className="lg:col-span-8 space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={property.images[activeImage] || property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2">
                {property.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-32 aspect-video rounded-xl overflow-hidden flex-shrink-0 transition-all ${
                      activeImage === index ? "ring-2 ring-gold" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${property.title} ${index}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-black-light p-8 rounded-3xl border border-gold/10 shadow-xl sticky top-28 space-y-8">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="bg-gold text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                      For {property.status}
                    </span>
                    <span className="bg-black text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full dark:bg-white dark:text-black">
                      {property.type}
                    </span>
                  </div>
                  <h1 className="text-3xl font-serif font-bold leading-tight">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gold font-medium">
                    <MapPin size={18} className="mr-1" />
                    {property.location}
                  </div>
                </div>

                <div className="text-4xl font-serif font-bold text-gold">
                  ${property.price.toLocaleString()}
                </div>

                <div className="grid grid-cols-3 gap-4 border-y border-gold/10 py-6">
                  <div className="text-center">
                    <Bed className="mx-auto text-gold mb-1" size={20} />
                    <div className="font-bold">{property.beds}</div>
                    <div className="text-[10px] uppercase text-black/40 dark:text-white/40">Beds</div>
                  </div>
                  <div className="text-center">
                    <Bath className="mx-auto text-gold mb-1" size={20} />
                    <div className="font-bold">{property.baths}</div>
                    <div className="text-[10px] uppercase text-black/40 dark:text-white/40">Baths</div>
                  </div>
                  <div className="text-center">
                    <Maximize className="mx-auto text-gold mb-1" size={20} />
                    <div className="font-bold">{property.sqft}</div>
                    <div className="text-[10px] uppercase text-black/40 dark:text-white/40">sqft</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link href="/booking" className="block">
                    <Button variant="gold" className="w-full rounded-full h-14 text-lg">
                      Book a Viewing
                    </Button>
                  </Link>
                  <Link href="/contact" className="block">
                    <Button variant="outline" className="w-full rounded-full h-14 text-lg">
                      Inquire Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Description & Amenities */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold border-b border-gold/10 pb-4">
                  Property Description
                </h2>
                <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-bold border-b border-gold/10 pb-4">
                  Luxury Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white-soft dark:bg-black-light p-4 rounded-xl border border-gold/5">
                      <CheckCircle2 className="text-gold" size={20} />
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GHL Inquiry Form Integration */}
            <div className="lg:col-span-4">
              <div className="bg-black text-white p-8 rounded-3xl space-y-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16" />
                
                <div className="relative z-10 space-y-6">
                  <h3 className="text-2xl font-serif font-bold">Inquire About Property</h3>
                  <p className="text-white/60 text-sm">
                    Fill out the form below to receive a brochure and scheduled a private tour.
                  </p>
                  
                  {/* Placeholder for GoHighLevel Form */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gold">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gold">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gold">Message</label>
                      <textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-gold outline-none h-32" placeholder="I'm interested in this property..." />
                    </div>
                    <Button variant="gold" className="w-full rounded-lg h-12">
                      Send Inquiry
                    </Button>
                  </div>

                  <div className="pt-8 border-t border-white/10 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-white/40 uppercase">Direct Line</div>
                        <div className="font-bold">+1 (234) 567-890</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
