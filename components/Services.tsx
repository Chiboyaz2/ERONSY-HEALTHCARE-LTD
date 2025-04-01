"use client";

import { motion } from 'framer-motion';
import { Bath, Activity, Armchair as Wheelchair, Pill, Utensils, MessageCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import ECG from '@/app/images/Medical Device.jpg'
import Infection from '@/app/images/Infection control.jpg'

const services = [
  {
    icon: Bath,
    title: "Personal Care",
    description: "We provide personal hygiene activities such as bathing, dressing, grooming, toileting, and oral care. We ensure the comfort and dignity of patients while promoting independence to the extent possible.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
  },
  {
    icon: Activity,
    title: "Vital Signs Monitoring",
    description: "We measure and record vital signs such as blood pressure, heart rate, temperature, and respiratory rate.",
    image: ECG,
  },
  {
    icon: Wheelchair,
    title: "Mobility Assistance",
    description: "We assist service users with mobility needs, including assisting with walking, transferring from beds to chairs, or using mobility aids. ",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
  },
  {
    icon: Pill,
    title: "Medication Support",
    description: "We assist with medication management, which can involve reminding services users to take medications, and ensuring medication compliance. ",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80"
  },
  {
    icon: Utensils,
    title: "Daily Activities",
    description: "We provide support with daily activities, such as feeding service users’ who need assistance, and providing appropriate nutrition and hydration support.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
  },
  {
    icon: MessageCircle,
    title: "Supportive Care",
    description: "We offer emotional support and companionship to services users, providing a compassionate and reassuring presence. We engage in conversation and offer empathy and encouragement.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  },
  {
    icon: MessageCircle,
    title: "Infection Control and Cleanliness",
    description: "We adhere to proper hand hygiene protocols, assist with environmental cleaning, and follow infection prevention guidelines to minimize the risk of infections.",
    image: Infection,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-montserrat mb-4">
            Our Comprehensive Care Services
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            We provide quality care, promoting service users’ comfort, and supporting the overall healthcare team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 lg:h-[450px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <service.icon className="h-8 w-8 text-[#E53A32] mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-montserrat">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;