import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { GHLChatWidget } from "@/components/utils/GHLChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxury Real Estate | Find Your Dream Property",
  description: "Premium real estate platform for luxury property sales, listings, and expert consultation. Find your dream home today.",
  keywords: ["luxury real estate", "property sales", "real estate listings", "dream home", "luxury apartments"],
  openGraph: {
    title: "Luxury Real Estate | Find Your Dream Property",
    description: "Premium real estate platform for luxury property sales, listings, and expert consultation.",
    type: "website",
    locale: "en_US",
    siteName: "LuxuryRealEstate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white`}>
        {children}
        <WhatsAppCTA />
        <GHLChatWidget />
      </body>
    </html>
  );
}
