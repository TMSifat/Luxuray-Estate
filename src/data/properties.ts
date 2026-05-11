export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
  status: "sale" | "rent";
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Minimalist Villa",
    price: 2500000,
    location: "Palm Jumeirah, Dubai",
    beds: 5,
    baths: 6,
    sqft: 7500,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1613972855073-a28a24a570f0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Experience luxury living in this stunning modern minimalist villa located in the heart of Palm Jumeirah. Featuring floor-to-ceiling windows, private pool, and breathtaking sea views.",
    amenities: ["Private Pool", "Gym", "Smart Home", "Beach Access", "24/7 Security"],
    featured: true,
    status: "sale",
  },
  {
    id: "2",
    title: "Luxury Penthouse",
    price: 4800000,
    location: "Downtown Dubai",
    beds: 4,
    baths: 5,
    sqft: 5200,
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687940-c52af0369996?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A masterpiece of design and engineering, this penthouse offers the ultimate in luxury living with panoramic views of the Burj Khalifa and the Dubai Fountain.",
    amenities: ["Private Elevator", "Home Theater", "Wine Cellar", "Infinity Pool", "Valet Parking"],
    featured: true,
    status: "sale",
  },
  {
    id: "3",
    title: "Contemporary Mansion",
    price: 12000000,
    location: "Emirates Hills, Dubai",
    beds: 7,
    baths: 9,
    sqft: 15000,
    type: "Mansion",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Set on a sprawling estate, this contemporary mansion features exquisite craftsmanship, a grand entrance, and lush landscaped gardens.",
    amenities: ["Tennis Court", "Indoor Pool", "Sauna", "Library", "Chef's Kitchen"],
    featured: true,
    status: "sale",
  },
];
