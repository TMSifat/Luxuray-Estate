"use client";

import React from "react";
import Link from "next/link";
import { Container } from "./Section";
import { menuItems } from "@/data/menu";
import { Facebook, Instagram, Linkedin, X as XIcon, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-gold/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-serif font-bold tracking-tighter">
                LUXURY<span className="text-gold">ESTATE</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Elevating the real estate experience with premium properties and bespoke services for the discerning client.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <XIcon size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold">Quick Links</h4>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin className="text-gold shrink-0" size={20} />
                <span>123 Luxury Lane, Palm Jumeirah, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Phone className="text-gold shrink-0" size={20} />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail className="text-gold shrink-0" size={20} />
                <span>info@luxuryestate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold">Newsletter</h4>
            <p className="text-white/60">
              Subscribe to receive updates on new luxury listings and market insights.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
              <button className="gold-gradient text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Luxury Estate. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
