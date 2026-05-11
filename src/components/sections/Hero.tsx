"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../layout/Section";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-110 animate-pulse-slow"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <Container className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 border border-gold/30 rounded-full text-gold text-sm font-medium tracking-widest uppercase mb-4"
          >
            Exclusive Collection 2026
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight">
            Find Your <span className="text-gold-gradient">Dream Property</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Discover the world's most prestigious estates and luxury residences 
            tailored for your extraordinary lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/properties" className="w-full sm:w-auto">
              <Button variant="gold" size="lg" className="rounded-full group w-full">
                Explore Properties
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/booking" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="rounded-full group border-gold/50 text-gold hover:bg-gold/10 w-full">
                Book Consultation
                <div className="ml-2 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={14} fill="currentColor" />
                </div>
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </div>
  );
};
