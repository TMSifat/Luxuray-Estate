"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      propertyType: formData.get("propertyType"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white dark:bg-black-light p-10 rounded-3xl border border-gold/10 shadow-2xl text-center space-y-6">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-serif font-bold">Thank You!</h2>
        <p className="text-black/60 dark:text-white/60">
          Your inquiry has been received. Our team will contact you shortly.
        </p>
        <Button variant="outline" onClick={() => setSuccess(false)} className="rounded-full">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black-light p-10 rounded-3xl border border-gold/10 shadow-2xl space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-serif font-bold">Send a Message</h2>
        <p className="text-black/60 dark:text-white/60">
          Your inquiry will be directly routed to our senior consultants. 
          Expect a response within 2 business hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest text-gold/80">First Name</label>
          <input name="firstName" required type="text" placeholder="John" className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Last Name</label>
          <input name="lastName" required type="text" placeholder="Doe" className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Email Address</label>
          <input name="email" required type="email" placeholder="john@example.com" className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Property Type Interested In</label>
          <select name="propertyType" className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors">
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Mansion</option>
            <option>Investment Property</option>
          </select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-bold uppercase tracking-widest text-gold/80">Message</label>
          <textarea name="message" required placeholder="Tell us about your requirements..." className="w-full bg-white-soft dark:bg-black border border-gold/10 rounded-xl px-5 py-4 focus:border-gold outline-none transition-colors h-40 resize-none" />
        </div>
        <div className="md:col-span-2 pt-4">
          <Button variant="gold" type="submit" disabled={loading} className="w-full h-16 rounded-xl text-xl shadow-xl">
            {loading ? "Submitting..." : "Submit Inquiry"}
          </Button>
          <p className="mt-4 text-xs text-center text-black/40 dark:text-white/40">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </form>
    </div>
  );
};
