import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleApplyClick = () => {
    window.location.href = 'https://associates.secretstartups.org/auth/register';
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Associates', href: '/associates' },
    { name: 'Teams', href: '/teams' },
    { name: 'Handbook', href: '/handbook' },
    { name: 'Legals', href: '/legals' },
  ];

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-foreground hover:text-neon-cyan" aria-label="Toggle menu">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-card border-border">
        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href} 
              className="text-lg font-medium text-foreground hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  const DesktopNav = () => (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <Link 
              to={link.href} 
              className="text-foreground/80 hover:text-neon-cyan transition-colors block px-4 py-2"
            >
              {link.name}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <header 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } ${scrolled ? "backdrop-blur-lg bg-background/80 border-b border-border" : ""}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-heading font-bold gradient-text">SecretStartups.org</span>
            </Link>
          </div>
          
          {/* Navigation: Desktop or Mobile based on screen size */}
          <div className="flex items-center">
            {isMobile ? <MobileNav /> : <DesktopNav />}
          </div>
          {/* Right Side: Signup Button*/}
          <div className="hidden md:block">
            <button 
              onClick={handleApplyClick}
              className="btn-neon min-w-0"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;