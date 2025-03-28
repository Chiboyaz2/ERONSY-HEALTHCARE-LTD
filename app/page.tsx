"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreValues from '@/components/CoreValues';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen"
    >
      <Header />
      <Hero />
      <About />
      <CoreValues />
      <Services />
      <Testimonials />
      <Subscribe />
      <CTA />
      <Footer />
    </motion.main>
  );
}