"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "integrations", name: "Integrations" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  /* ---------------- Scroll Shadow ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- ScrollSpy (IntersectionObserver) ---------------- */
  useEffect(() => {
    const observers = [];

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { threshold: 0.6 },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  /* ---------------- Smooth Scroll ---------------- */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  /* ---------------- Lock Body Scroll (Mobile) ---------------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar>
          <NavBody className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Zia ul Qamar
            </Link>

            {/* Desktop Nav - FIXED: Added proper cursor-pointer */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-all duration-300 cursor-pointer px-2 py-1 ${
                    activeSection === item.id
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA - FIXED: Added cursor-pointer */}
            <NavbarButton
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Hire Me
            </NavbarButton>

            {/* Mobile Menu Button - FIXED: Added cursor-pointer */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-6 flex flex-col justify-between cursor-pointer z-[110]"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-7 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-7 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
              />
              <motion.span
                animate={
                  menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                className="block w-7 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded"
              />
            </button>
          </NavBody>

          {/* Mobile Nav - FIXED: Better positioning */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-200"
              >
                <div className="flex flex-col items-center gap-4 py-6 px-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full py-3 text-center transition-all duration-300 cursor-pointer rounded-lg ${
                        activeSection === item.id
                          ? "text-purple-600 font-semibold bg-purple-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    Hire Me
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Navbar>
      </div>
    </motion.nav>
  );
}
