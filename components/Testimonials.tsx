"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The care and attention provided by Eronsy Healthcare has made a significant difference in my father's quality of life.",
    author: "Sarah D.",
    role: "Daughter of Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "Professional, compassionate, and always going above and beyond. We couldn't be happier with the service.",
    author: "Michael R.",
    role: "Client",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    quote: "Their specialized approach to mental health care has helped our family navigate challenging times.",
    author: "Emma T.",
    role: "Family Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 testimonial-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-montserrat mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Real experiences from families we&apos;ve had the privilege to serve
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg h-fit  lg:h-[250px] flex flex-col items-start justify-between"
            >
              <div>
                <Quote className="h-8 w-8 text-[#026FBF] mb-4" />
                <p className="text-foreground/80 mb-6">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div>
                  <h4 className="font-semibold font-montserrat">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;