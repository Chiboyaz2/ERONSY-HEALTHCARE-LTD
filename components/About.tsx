"use client";

import { motion } from 'framer-motion';
import { Award, Users, Brain, Heart, Target, Eye } from 'lucide-react';
import Image from 'next/image';
import Nurse from '@/app/images/Nurse.jpg'

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
              About Eronsy Healthcare Ltd 
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
            Eronsy Healthcare Ltd is a group of passion driven professionals that provides quality health care service delivery to persons with learning difficulties, mental health challenges, and history of substance abuse. Our services are tailored to meet the needs of service users. 
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-[#E53A32]" />
                <div>
                  <h3 className="font-semibold mb-1">Excellence</h3>
                  <p className="text-sm text-foreground/70">20+ years experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-[#E53A32]" />
                <div>
                  <h3 className="font-semibold mb-1">Expert Team</h3>
                  <p className="text-sm text-foreground/70">Dedicated professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-[#E53A32]" />
                <div>
                  <h3 className="font-semibold mb-1">Specialized Care</h3>
                  <p className="text-sm text-foreground/70">Mental health focus</p>
                </div>
              </div> 
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-[#E53A32]" />
                <div>
                  <h3 className="font-semibold mb-1">Compassionate</h3>
                  <p className="text-sm text-foreground/70">Patient-centered care</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="hidden lg:block h-20 w-20 text-[#E53A32]" />
                <div>
                  <h3 className="font-semibold mb-1">MISSION STATEMENT:</h3>
                  <p className="text-sm text-foreground/70">To contribute to the overall healthcare team by promoting highest standards of professionalism that will exceed the expectation of service users. </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="h-20 w-20 hidden lg:block text-[#E53A32]" />
                <div>
                  <h3 className="font-semibold mb-1">VISION STATEMENT:</h3>
                  <p className="text-sm text-foreground/70">To be recognized as integral members of the healthcare team through our exceptional support and dedication to improving the wellbeing of services users.</p>
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
              src={Nurse}
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