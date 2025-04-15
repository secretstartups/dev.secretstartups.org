import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-background before:to-background/60 before:z-10",
        className
      )}
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')",
          filter: "brightness(0.4) saturate(1.2)",
        }}
      ></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-primary animate-gradient-x"></div>

      {/* Full screen headline section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-20 px-4">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-pulse-slow">
          {/* <span className="block">Code Boldly.</span> */}
          <span className="block">Collaborate Globally.</span>
          <span className="block text-primary">Get Paid Fairly.</span>
        </h1>
      </div>

      {/* Secondary content below hero */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            SecretStartups connects African tech talent with opportunities, resources, and a vibrant developer community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/associates" className="btn-primary">
              Join as a Developer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/teams" className="btn-outline">
              Find a Team
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
