"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/app/images/Eronsy-removebg-preview.png'
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Core Values', href: '#values' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 shadow-md backdrop-blur-sm ${
        isScrolled ? '' : ''
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Image src={Logo} alt='ERONSY LOGO' className='w-[120px] h-12 md:w-[200px] md:h-20'/>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`hover:text-primary transition-colors text-foreground ${
                  isScrolled ? '' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex space-x-4">
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors text-foreground ${
              isScrolled || isMobileMenuOpen ? '' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
             <div className="flex space-x-4">
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E53A32] hover:text-[#E53A32]/80 transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;