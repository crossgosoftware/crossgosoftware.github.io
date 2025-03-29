import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location === '/') {
      e.preventDefault();
      scrollToSection(id);
      closeMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                CG
              </div>
              <span className="text-xl font-bold font-inter text-primary">CrossGo</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" 
              className={`relative nav-link font-medium text-neutral-800 hover:text-primary transition-colors ${location === '/' ? 'after:w-full' : ''}`}
              onClick={(e) => handleNavLinkClick(e, 'home')}
            >
              Home
            </Link>
            <Link href={location === '/' ? '#services' : '/services'} 
              className="relative nav-link font-medium text-neutral-800 hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, 'services')}
            >
              Services
            </Link>
            <Link href={location === '/' ? '#portfolio' : '/portfolio'} 
              className="relative nav-link font-medium text-neutral-800 hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, 'portfolio')}
            >
              Portfolio
            </Link>
            <Link href={location === '/' ? '#about' : '/about'} 
              className="relative nav-link font-medium text-neutral-800 hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, 'about')}
            >
              About Us
            </Link>
            <Link href={location === '/' ? '#contact' : '/contact'} 
              className="relative nav-link font-medium text-neutral-800 hover:text-primary transition-colors"
              onClick={(e) => handleNavLinkClick(e, 'contact')}
            >
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <Link href="/contact">
              <Button 
                className="bg-accent hover:bg-accent-dark text-white"
                onClick={closeMobileMenu}
              >
                Get a Quote
              </Button>
            </Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="text-neutral-500 hover:text-neutral-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden pb-3 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3 px-2 pt-2 pb-3">
            <Link href="/"
              className={`font-medium ${location === '/' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link href="/services"
              className={`font-medium ${location === '/services' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link href="/portfolio"
              className={`font-medium ${location === '/portfolio' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link href="/about"
              className={`font-medium ${location === '/about' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link href="/contact"
              className={`font-medium ${location === '/contact' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link href="/contact"
              className="bg-accent hover:bg-accent-dark text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-2"
              onClick={closeMobileMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
