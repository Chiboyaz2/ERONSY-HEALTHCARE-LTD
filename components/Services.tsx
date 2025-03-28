"use client";

import { motion } from 'framer-motion';
import { Bath, Activity, Armchair as Wheelchair, Pill, Utensils, MessageCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import ECG from '@/app/images/Medical Device.jpg'

const services = [
  {
    icon: Bath,
    title: "Personal Care",
    description: "Comprehensive assistance with daily hygiene and grooming needs",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
  },
  {
    icon: Activity,
    title: "Vital Signs Monitoring",
    description: "Regular health monitoring and documentation",
    image: ECG,
  },
  {
    icon: Wheelchair,
    title: "Mobility Assistance",
    description: "Support with safe movement and transfer activities",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
  },
  {
    icon: Pill,
    title: "Medication Support",
    description: "Medication management and administration assistance",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80"
  },
  {
    icon: Utensils,
    title: "Daily Activities",
    description: "Assistance with meals and daily living activities",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
  },
  {
    icon: MessageCircle,
    title: "Supportive Care",
    description: "Emotional support and companionship services",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
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
            Tailored support for individuals with special needs, delivered with compassion and expertise
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
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <service.icon className="h-8 w-8 text-secondary mb-4" />
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