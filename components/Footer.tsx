"use client";
import Logo from '@/app/images/Eronsy-removebg-preview.png'
import Image from 'next/image';

import { Heart, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact"  className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src={Logo} alt='ERONSY LOGO' className='w-[200px] h-20'/>
            </div>
            <p className="text-white/80 mb-4">
              Caring with passion, serving with compassion
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#E53A32] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#E53A32] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#E53A32] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#E53A32] transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#E53A32] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#E53A32] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#E53A32] transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-[#E53A32] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#E53A32] transition-colors">Personal Care</a></li>
              <li><a href="#" className="hover:text-[#E53A32] transition-colors">Mental Health Support</a></li>
              <li><a href="#" className="hover:text-[#E53A32] transition-colors">Learning Disability Care</a></li>
              <li><a href="#"  className="hover:text-[#E53A32] transition-colors">Substance Abuse Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-white/80">
              <p>10 Hampton Close</p>
              <p>Coalville, LE67 4DH</p>
              <p>Leicestershire, UK</p>
              <p>Phone: +447448319130</p>
              <p>Email:  admin@eronsyhealthcare.co.uk </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Eronsy Healthcare Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;