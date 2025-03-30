import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { scrollToSection, useHashLocation } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/ui/language-switcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, navigate] = useHashLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

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
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">CrossGo</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" 
              className={`relative nav-link text-neutral-800 hover:text-primary ${location === '/' ? 'text-primary' : ''}`}
              onClick={(e) => handleNavLinkClick(e, 'home')}
            >
              {t('common.menu.home')}
            </Link>
            <Link href={location === '/' ? '#services' : '/services'} 
              className={`relative nav-link text-neutral-800 hover:text-primary ${location.includes('service') ? 'text-primary' : ''}`}
              onClick={(e) => handleNavLinkClick(e, 'services')}
            >
              {t('common.menu.services')}
            </Link>
            <Link href={location === '/' ? '#portfolio' : '/portfolio'} 
              className={`relative nav-link text-neutral-800 hover:text-primary ${location.includes('portfolio') ? 'text-primary' : ''}`}
              onClick={(e) => handleNavLinkClick(e, 'portfolio')}
            >
              {t('common.menu.portfolio')}
            </Link>
            <Link href={location === '/' ? '#about' : '/about'} 
              className={`relative nav-link text-neutral-800 hover:text-primary ${location.includes('about') ? 'text-primary' : ''}`}
              onClick={(e) => handleNavLinkClick(e, 'about')}
            >
              {t('common.menu.about')}
            </Link>
            <Link href={location === '/' ? '#contact' : '/contact'} 
              className={`relative nav-link text-neutral-800 hover:text-primary ${location.includes('contact') ? 'text-primary' : ''}`}
              onClick={(e) => handleNavLinkClick(e, 'contact')}
            >
              {t('common.menu.contact')}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact" onClick={closeMobileMenu}>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md">
                {t('contact.form.submit')}
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
              {t('common.menu.home')}
            </Link>
            <Link href="/services"
              className={`font-medium ${location === '/services' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              {t('common.menu.services')}
            </Link>
            <Link href="/portfolio"
              className={`font-medium ${location === '/portfolio' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              {t('common.menu.portfolio')}
            </Link>
            <Link href="/about"
              className={`font-medium ${location === '/about' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              {t('common.menu.about')}
            </Link>
            <Link href="/contact"
              className={`font-medium ${location === '/contact' ? 'text-primary bg-neutral-100' : 'text-neutral-800 hover:text-primary hover:bg-neutral-100'} px-3 py-2 rounded-md`}
              onClick={closeMobileMenu}
            >
              {t('common.menu.contact')}
            </Link>
            <LanguageSwitcher />
            <Link href="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors text-center mt-2"
              onClick={closeMobileMenu}
            >
              {t('contact.form.submit')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
