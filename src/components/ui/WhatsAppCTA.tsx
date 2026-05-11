"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const WhatsAppCTA = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white dark:bg-black-light text-black dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold/10">
        Chat with an Expert
      </span>
    </motion.a>
  );
};
