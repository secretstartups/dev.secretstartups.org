
import React, { useState } from 'react';
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
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Associates', href: '/associates' },
    { name: 'Teams', href: '/teams' },
    { name: 'Handbook', href: '/handbook' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
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
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
