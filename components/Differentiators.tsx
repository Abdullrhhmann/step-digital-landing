"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Package, TrendingUp, Headphones } from "lucide-react";

const Differentiators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const differentiators = [
    {
      icon: Users,
      title: "One Partner",
      description:
        "Single point of contact for all your digital needs. No more juggling multiple vendors.",
      bgColor: "bg-primary",
      iconColor: "text-accent",
    },
    {
      icon: Package,
      title: "Complete System",
      description:
        "Fully integrated solutions that work together seamlessly for maximum impact.",
      bgColor: "bg-accent",
      iconColor: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Track record of delivering measurable business growth for our clients.",
      bgColor: "bg-primary",
      iconColor: "text-accent",
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description:
        "24/7 dedicated support team ready to help you succeed every step of the way.",
      bgColor: "bg-accent",
      iconColor: "text-primary",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just another digital agency. We&apos;re your growth partner.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-yellow transition-all duration-300 border border-primary/20"
            >
              <div
                className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4`}
              >
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
