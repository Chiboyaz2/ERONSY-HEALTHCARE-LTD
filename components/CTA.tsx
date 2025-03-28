"use client";

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 cta-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
            Ready to Discuss Your Care Needs?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our compassionate team is here to help you find the right care solution
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-accent hover:bg-white/90 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: (020) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-[#333333] hover:bg-white/10 flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;