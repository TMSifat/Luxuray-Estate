"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container, Section } from "../layout/Section";
import { PropertyCard } from "../property/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const FeaturedProperties = () => {
  const featured = properties.filter((p) => p.featured);

  return (
    <Section className="bg-white-soft dark:bg-black">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-bold uppercase tracking-[0.2em] text-sm"
            >
              Curated Estates
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Featured <span className="text-gold italic">Luxury</span> Properties
            </h2>
            <p className="text-black/60 dark:text-white/60 text-lg">
              Explore our exclusive collection of hand-picked luxury properties 
              that redefine the standard of modern living.
            </p>
          </div>
          <Link href="/properties">
            <Button variant="outline" className="rounded-full group">
              View All Properties
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
