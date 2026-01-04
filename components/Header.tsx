"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle backdrop blur
      setIsScrolled(currentScrollY > 10);
      
      // Handle show/hide on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center space-x-2" aria-label="STEP Digital home">
              {/* Mobile: Icon only */}
              <img 
                src="/logo-icon.svg" 
                alt="STEP Digital Logo" 
                className="h-10 w-10 sm:hidden"
              />
              {/* Desktop: Wordmark */}
              <img 
                src="/logo-wordmark.svg" 
                alt="STEP Digital Logo" 
                className="h-10 hidden sm:block"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation - iOS Style Glass Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-white/40"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="px-4 py-2 text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300 font-semibold rounded-full"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <button className="px-4 py-2 text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300 font-semibold rounded-full">
              Login
            </button>
            <button className="px-6 py-2 bg-accent text-primary text-sm font-bold rounded-full hover:bg-accent-dark hover:shadow-glow transform hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all duration-300"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-accent" />
              ) : (
                <Menu className="h-6 w-6 text-accent" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Overlay */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#001a4d] z-50 lg:hidden overflow-y-auto"
              >
                <div className="container mx-auto px-6 py-8 h-full flex flex-col">
                  {/* Close Button */}
                  <div className="flex justify-end mb-12">
                    <motion.button
                      onClick={() => setIsOpen(false)}
                      className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-xl flex items-center justify-center hover:bg-accent/30 transition-all"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X className="w-6 h-6 text-accent" />
                    </motion.button>
                  </div>

                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 text-center"
                  >
                    <img 
                      src="/logo-wordmark.svg" 
                      alt="STEP Digital Logo" 
                      className="h-12 mx-auto"
                    />
                  </motion.div>

                  {/* Navigation Links */}
                  <nav className="flex-1 flex flex-col space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative glass-blue backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                            {link.name}
                          </span>
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            className="text-accent"
                          >
                            →
                          </motion.div>
                        </div>
                      </motion.a>
                    ))}
                  </nav>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4 mt-8"
                  >
                    <button className="w-full px-6 py-4 bg-accent text-primary-dark text-lg font-bold rounded-full hover:bg-accent-dark hover:shadow-glow-lg transform hover:scale-105 transition-all duration-300">
                      Get Started
                    </button>
                    <button className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl text-white text-lg font-bold rounded-full border-2 border-white/20 hover:border-accent hover:bg-white/20 transition-all duration-300">
                      Login
                    </button>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center space-x-6 mt-8 pt-8 border-t border-white/10"
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-accent hover:bg-accent/20 transition-all"
                    >
                      <span className="text-xl">f</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-accent hover:bg-accent/20 transition-all"
                    >
                      <span className="text-xl">t</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-accent hover:bg-accent/20 transition-all"
                    >
                      <span className="text-xl">in</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
