import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}
const words = ['Build', 'Collaborate', 'Earn', 'Learn'];

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentWord = words[currentWordIndex];
  
    let timeout;
  
    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex(Math.floor(Math.random() * words.length));
      }, 500);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, isDeleting ? 100 : 180);
    }
  
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);
  
  const customColors = ['#f20eff', '#00FFFF', '#F9F9F9', '#0080ff'];

  const colorfulLetters = 'SecretStartups'.split('').map((char, i) => {
    const color = customColors[i % customColors.length];
    return (
      <span key={i} style={{ color }}>
        {char}
      </span>
    );
  });
  // const colorfulLetters = 'SecretStartups'.split('').map((char, i) => {
  //   const colors = [
  //     'text-red-500',
  //     'text-green-500',
  //     'text-blue-500',
  //     'text-yellow-400',
  //     'text-pink-500',
  //     'text-purple-500',
  //     'text-indigo-500',
  //     'text-orange-500',
  //     'text-teal-500',
  //   ];
  //   const colorClass = colors[i % colors.length];
  //   return (
  //     <span key={i} className={colorClass}>
  //       {char}
  //     </span>
  //   );
  // });



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
            "",
          filter: "brightness(0.4) saturate(1.2)",
        }}
      ></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-primary animate-gradient-x"></div>

      {/* Full screen headline section */}
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-20 px-4">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-pulse-slow">
          {/* <span className="block">Code Boldly.</span> */}
          <span className="block">{colorfulLetters}</span>
          <span className="block text-3xl">
            {displayedText}
            <span className="border-r-2 border-white animate-pulse ml-1" />
            </span>
        </h1>
      </div>

      {/* Secondary content below hero */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 pb-24">
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            We provide developers with everything needed to generate income sooner, 
            from paid apprenticeships, and developer acceleration and collaboration 
            tools, to a growing ecosystem of trusted <span className="font-semibold text-primary">building blocks</span> to rapidly go-to-market.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/associates" className="btn-primary">
              Join as a Developer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            {/* <Link to="/teams" className="btn-outline">
              Find a Team
            </Link> */}
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
