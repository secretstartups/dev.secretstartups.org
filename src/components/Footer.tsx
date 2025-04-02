
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="block mb-4">
              <span className="text-2xl font-heading font-bold gradient-text">SecretStartups.org</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering African tech talent through connections to employment, apprenticeship, education, and workspace opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-neon-cyan">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-neon-cyan">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-neon-cyan">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-foreground/60 hover:text-neon-cyan">Home</Link></li>
              <li><Link to="/associates" className="text-foreground/60 hover:text-neon-cyan">Associates</Link></li>
              <li><Link to="/teams" className="text-foreground/60 hover:text-neon-cyan">Teams</Link></li>
              <li><Link to="/handbook" className="text-foreground/60 hover:text-neon-cyan">Handbook</Link></li>
              <li><Link to="/contact" className="text-foreground/60 hover:text-neon-cyan">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/60 hover:text-neon-cyan">About Us</Link></li>
              <li><Link to="/legals" className="text-foreground/60 hover:text-neon-cyan">Legals</Link></li>
              <li><Link to="/privacy-policy" className="text-foreground/60 hover:text-neon-cyan">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-foreground/60 hover:text-neon-cyan">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} SecretStartups.org. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
