"use client";

import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining the highest standards of professional ethics and transparency in all our interactions."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to making a positive difference in the lives of those we serve with genuine care."
  },
  {
    icon: Lightbulb,
    title: "Innovativeness",
    description: "Continuously improving our services through creative solutions and modern healthcare practices."
  },
  {
    icon: Target,
    title: "Determination",
    description: "Committed to achieving the best possible outcomes for our clients through persistent effort."
  },
  {
    icon: Users,
    title: "Patient-Centeredness",
    description: "Focusing on individual needs and preferences to deliver personalized care solutions."
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
            Our Foundation of Care
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
              <value.icon className="h-12 w-12 text-secondary mb-4" />
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