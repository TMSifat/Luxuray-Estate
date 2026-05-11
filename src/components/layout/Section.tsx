import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, id, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-20 md:py-32 overflow-hidden", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
