"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO at TechStart Inc.",
      quote:
        "STEP Digital transformed our online presence completely. Our sales increased by 250% in just 6 months.",
      initial: "SJ",
      bgColor: "bg-blue-500",
    },
    {
      name: "Michael Chen",
      position: "Marketing Director at HealthPlus",
      quote:
        "Finally, a digital partner that delivers on promises. Professional, responsive, and results-driven.",
      initial: "MC",
      bgColor: "bg-purple-500",
    },
    {
      name: "Emma Williams",
      position: "Owner of Bella Restaurants",
      quote:
        "The best investment we made for our business. Their integrated approach saved us time and money.",
      initial: "EW",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
                  </p>
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
