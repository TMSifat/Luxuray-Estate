"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section } from "../layout/Section";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Alexander Wright",
    role: "Tech Entrepreneur",
    content: "The level of professionalism and attention to detail was beyond my expectations. They found the perfect penthouse in Downtown Dubai within a week.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sophia Martinez",
    role: "Interior Designer",
    content: "As someone who appreciates aesthetics, I was impressed by their curated collection of properties. Every viewing felt like a VIP experience.",
    avatar: "https://i.pravatar.cc/150?u=sophia",
  },
  {
    name: "James Anderson",
    role: "Private Investor",
    content: "Their market insights and negotiation skills saved me millions on my last acquisition in Emirates Hills. Truly the best in the luxury segment.",
    avatar: "https://i.pravatar.cc/150?u=james",
  },
];

export const Testimonials = () => {
  return (
    <Section className="bg-white dark:bg-black-light">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm">
            Client Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            What Our <span className="text-gold italic">Distinguished</span> Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white-soft dark:bg-black p-10 rounded-2xl relative border border-gold/10 hover:border-gold/30 transition-all group"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors" size={48} />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="text-black/70 dark:text-white/70 text-lg italic leading-relaxed mb-8 relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/20">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gold font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
