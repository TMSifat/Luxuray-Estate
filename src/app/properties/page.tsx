"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container, Section } from "@/components/layout/Section";
import { PropertyCard } from "@/components/property/PropertyCard";
import { propertyService } from "@/lib/propertyService";
import { Property } from "@/data/properties";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await propertyService.getAll();
      setProperties(data);
      setLoading(false);
    };
    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                         p.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || p.type.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-black pt-32 pb-20">
        <Container>
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Our <span className="text-gold italic">Exclusive</span> Properties
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Browse through our hand-picked selection of luxury estates, 
              penthouses, and waterfront mansions.
            </p>
          </div>
        </Container>
      </div>

      <Section className="bg-white-soft dark:bg-black">
        <Container>
          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 bg-white dark:bg-black-light p-6 rounded-2xl border border-gold/10 shadow-xl shadow-gold/5">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={20} />
              <input
                type="text"
                placeholder="Search by location, title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-full pl-12 pr-6 py-3 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
              {["all", "Villa", "Penthouse", "Mansion"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    filter === t
                      ? "bg-gold text-white shadow-lg"
                      : "bg-white-soft dark:bg-black text-black/60 dark:text-white/60 hover:bg-gold/10"
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
              <Button variant="outline" size="sm" className="rounded-full flex items-center space-x-2 shrink-0">
                <SlidersHorizontal size={16} />
                <span>Filters</span>
              </Button>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-[4/5] bg-white-soft dark:bg-black-light animate-pulse rounded-3xl" />
              ))
            ) : filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center space-y-4">
                <div className="text-6xl text-gold/20 font-serif">Empty</div>
                <p className="text-black/60 dark:text-white/60 text-xl">
                  No properties found matching your criteria.
                </p>
                <Button variant="gold" onClick={() => {setSearch(""); setFilter("all");}} className="rounded-full">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
