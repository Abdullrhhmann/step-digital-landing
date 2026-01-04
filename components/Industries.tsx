"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils, Heart, Rocket, ArrowRight } from "lucide-react";

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const industries = [
    {
      icon: Utensils,
      title: "Restaurants",
      description:
        "Digital solutions that increase orders, streamline operations, and build customer loyalty for restaurants and food businesses.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Heart,
      title: "Clinics & Healthcare",
      description:
        "Patient-focused digital platforms, booking systems, and marketing solutions for healthcare providers and clinics.",
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Complete digital infrastructure from MVP to scale. We help startups launch fast and grow faster.",
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industry <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized expertise for your industry&apos;s unique challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 group"
            >
              <div
                className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {industry.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
