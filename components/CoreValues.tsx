"use client";

import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Speaking with our candidates is not enough; acting morally is crucial when working with individuals whose responsibility it is to look after the health and wellness of others. Consequently, we always do our business with honesty, respect for our service users, and one another."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our staff are intense emotional commitment and dedication to the work they do and the purpose it serves. This means a deep interest, enjoyment, and personal fulfilment derived from the wellbeing of service users. "
  },
  {
    icon: Lightbulb,
    title: "Innovativeness",
    description: "We believe the only thing that constant in life is changes hence we always introduce new ideas and continuous improvement to challenge the conventional wisdom in meeting the needs of our service users.  "
  },
  {
    icon: Target,
    title: "Determination",
    description: "We are resilience to pursue business objectives, even in the face of difficulties and uncertainties. The team maintain a positive mindset which enables us to understand the needs of service users and develop personalize solutions. "
  },
  {
    icon: Users,
    title: "Patient-Centeredness",
    description: "Servicer users are the heart of our activities. We prioritize their needs in seamless transitions, effective communication, and collaboration with other professionals in rendering our service."
  }
];

const CoreValues = () => {
  return (
    <section id="values" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-montserrat mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Built on principles that ensure exceptional care and support for every individual
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <value.icon className="h-12 w-12 text-[#E53A32] mb-4" />
              <h3 className="text-xl font-semibold mb-3 font-montserrat">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;