"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, CheckCircle, Target, Zap, Users, TrendingUp } from "lucide-react";

const ProblemSolution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const problems = [
    {
      icon: AlertCircle,
      title: "Fragmented Services",
      description: "Multiple vendors, inconsistent results, and wasted time coordinating between them.",
    },
    {
      icon: Target,
      title: "No Clear Strategy",
      description: "Random marketing efforts without a cohesive plan or measurable goals.",
    },
    {
      icon: TrendingUp,
      title: "Poor ROI",
      description: "Spending money on digital services without seeing real business growth.",
    },
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "One Complete Partner",
      description: "Everything you need from one expert team that understands your business.",
    },
    {
      icon: Zap,
      title: "Integrated Strategy",
      description: "Cohesive digital approach aligned with your business goals.",
    },
    {
      icon: Users,
      title: "Proven Results",
      description: "Data-driven solutions that deliver measurable business growth.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#E8F0FE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          The Challenge. Our Solution.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              The Problem
            </h3>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-blue p-6 rounded-2xl hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-accent-dark mb-8">
              Our Solution
            </h3>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-blue p-6 rounded-2xl hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-accent-dark" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
