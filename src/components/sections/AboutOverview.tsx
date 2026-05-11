"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Exclusive listings not found elsewhere",
  "Dedicated personal agent for every client",
  "Expert market analysis and valuation",
  "Secure and transparent transaction process",
];

export const AboutOverview = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Real Estate Agent"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-serif font-bold text-white mb-1">15+</div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
                Years of Excellence
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm">
                About Our Agency
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Redefining the <span className="text-gold italic">Luxury</span> Real Estate Experience
              </h2>
              <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed">
                We are more than just a real estate agency. We are your partners in finding 
                the lifestyle you deserve. Our team of experts brings decades of experience 
                in the luxury market, ensuring every client receives bespoke service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold shrink-0" size={20} />
                  <span className="font-medium text-black/80 dark:text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="gold" size="lg" className="rounded-full shadow-lg">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
