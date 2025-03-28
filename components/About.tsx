"use client";

import { motion } from 'framer-motion';
import { Award, Users, Brain, Heart } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-montserrat mb-6">
              About Eronsy Healthcare
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Founded in 2021 to address evolving healthcare needs, Eronsy Healthcare Ltd brings together over 20 years of combined management experience in specialized care services. Our focus spans learning difficulties, mental health support, and substance abuse recovery.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-semibold mb-1">Excellence</h3>
                  <p className="text-sm text-foreground/70">20+ years experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-semibold mb-1">Expert Team</h3>
                  <p className="text-sm text-foreground/70">Dedicated professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-semibold mb-1">Specialized Care</h3>
                  <p className="text-sm text-foreground/70">Mental health focus</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-secondary" />
                <div>
                  <h3 className="font-semibold mb-1">Compassionate</h3>
                  <p className="text-sm text-foreground/70">Patient-centered care</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80"
              alt="Healthcare Team"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;