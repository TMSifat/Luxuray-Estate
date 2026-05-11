"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";
import { Property } from "@/data/properties";
import { Button } from "../ui/Button";

interface PropertyCardProps {
  property: Property;
  index: number;
}

export const PropertyCard = ({ property, index }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-black-light rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          // Placeholder image if the real one isn't available
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-gold text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            Featured
          </span>
          <span className="bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
            For {property.status}
          </span>
        </div>
        
        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold transition-colors">
          <Heart size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center text-gold text-xs font-medium uppercase tracking-wider">
            <MapPin size={14} className="mr-1" />
            {property.location}
          </div>
          <h3 className="text-xl font-serif font-bold group-hover:text-gold transition-colors">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center justify-between text-sm text-black/60 dark:text-white/60 border-y border-gold/5 py-3">
          <div className="flex items-center gap-1.5">
            <Bed size={18} className="text-gold" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={18} className="text-gold" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize size={18} className="text-gold" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-2xl font-serif font-bold text-gold">
            ${property.price.toLocaleString()}
          </div>
          <Link href={`/properties/${property.id}`}>
            <Button variant="outline" size="sm" className="rounded-full px-5">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
