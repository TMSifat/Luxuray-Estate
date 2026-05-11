"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "../layout/Section";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes your agency different from others?",
    answer: "We specialize exclusively in high-end luxury properties and offer a bespoke, concierge-level service that covers everything from market analysis to legal assistance.",
  },
  {
    question: "Do you handle international buyers?",
    answer: "Yes, a significant portion of our clientele is international. We provide remote viewings, legal support for residency, and full transaction management for non-residents.",
  },
  {
    question: "How do I list my luxury property with you?",
    answer: "You can reach out via our contact form or call us directly. One of our senior agents will visit your property for a private valuation and presentation strategy.",
  },
  {
    question: "What areas do you specialize in?",
    answer: "We focus on premium locations such as Palm Jumeirah, Emirates Hills, Downtown Dubai, and exclusive waterfront communities.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-white-soft dark:bg-black">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-sm">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Frequently Asked <span className="text-gold italic">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-black-light border border-gold/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gold/5 transition-colors"
                >
                  <span className="text-lg font-bold text-black dark:text-white">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus size={20} className="text-gold" />
                  ) : (
                    <Plus size={20} className="text-gold" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-black/60 dark:text-white/60 leading-relaxed border-t border-gold/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
