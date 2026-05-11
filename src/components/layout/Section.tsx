import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </div>
  );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-32 overflow-hidden", className)} {...props}>
      {children}
    </section>
  );
};
