"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Section";
import { Button } from "../ui/Button";
import { menuItems } from "@/data/menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold tracking-tighter">
            LUXURY<span className="text-gold">ESTATE</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                pathname === item.href
                  ? "text-gold"
                  : "text-black/70 dark:text-white/70"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/booking">
            <Button variant="gold" size="sm" className="rounded-full">
              Book Viewing
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t border-gold/10 overflow-hidden"
          >
            <Container className="py-8 flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-serif font-medium",
                    pathname === item.href ? "text-gold" : "text-black dark:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gold/10 flex flex-col space-y-4">
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  <Button variant="gold" className="w-full">
                    Book Viewing
                  </Button>
                </Link>
                <div className="flex items-center justify-center space-x-2 text-gold">
                  <Phone size={18} />
                  <span className="font-medium">+1 (234) 567-890</span>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
