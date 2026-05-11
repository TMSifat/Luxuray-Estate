"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Container, Section } from "../layout/Section";

const stats = [
  { label: "Properties Sold", value: 1200, suffix: "+" },
  { label: "Happy Clients", value: 850, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "" },
  { label: "Awards Won", value: 25, suffix: "" },
];

export const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section className="bg-black text-white py-12" ref={ref}>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gold">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-white/50 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
