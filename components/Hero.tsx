"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
          alt="Medical Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-montserrat mb-6 mt-4 lg:mt-0">
              Compassionate Care for Mental Health & Learning Challenges
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Patient-centered support services tailored to individual needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services">
                <Button size="lg" className="bg-[#E53A32] hover:bg-[#E53A32]/90">
                  Our Services
                </Button>
              </Link>
              <a href="tel:+447448319130">
                <Button size="lg" variant="outline" className="text-[#333333] border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
              alt="Healthcare Professional with Patient"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;