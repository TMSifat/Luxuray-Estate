"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { MessageSquare, Phone, Calendar } from "lucide-react";

export const ContactCTA = () => {
  return (
    <Section className="relative overflow-hidden bg-black py-32">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#D4AF37,transparent_50%)]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Ready to Find Your <br />
              <span className="text-gold italic">Next Masterpiece?</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light">
              Schedule a private consultation with our luxury property experts 
              and take the first step towards your dream home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <Button variant="gold" size="lg" className="rounded-full flex items-center justify-center space-x-3 h-20 text-xl shadow-2xl">
              <Calendar size={24} />
              <span>Book Now</span>
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10 flex items-center justify-center space-x-3 h-20 text-xl backdrop-blur-md">
              <Phone size={24} />
              <span>Call Us</span>
            </Button>

            <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10 flex items-center justify-center space-x-3 h-20 text-xl backdrop-blur-md">
              <MessageSquare size={24} />
              <span>Chat Live</span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
