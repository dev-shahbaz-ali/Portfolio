"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Spotlight } from "@/components/ui/spotlight";
import { Boxes } from "@/components/ui/background-boxes";
import { ShootingStars } from "@/components/ui/shooting-stars"; // ✅ ADD THIS
import { useEffect, useState } from "react";
import { Integrations } from "@/components/Integrations";
import Zia from "../assets/ZiaulQamar-min.png";

const roles = [
  "Full-Stack Web Developer",
  "Office 365 Add-ins Specialist",
  "AI Integrations Expert",
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    const current = roles[textIndex];

    if (displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setTextIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, textIndex]);

  return (
    <>
      {/* Hero Section with ALL Effects */}
      <div className="relative min-h-screen w-full overflow-hidden bg-slate-900">
        {/* Layer 2: Boxes Effect */}
        <div className="absolute inset-0 w-full h-full z-10">
          <Boxes />
          <div className="absolute inset-0 w-full h-full bg-slate-900/60 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        </div>

        {/* Layer 3: Shooting Stars */}
        <ShootingStars
          className="absolute inset-0 z-20"
          starColor="#9b87f5"
          trailColor="#2eb9ff"
          minSpeed={15}
          maxSpeed={35}
          minDelay={800}
          maxDelay={3000}
        />
        <ShootingStars
          className="absolute inset-0 z-20"
          starColor="#ff719a"
          trailColor="#ffb86b"
          minSpeed={10}
          maxSpeed={30}
          minDelay={1000}
          maxDelay={4000}
        />

        {/* Layer 4: Spotlight Effect */}
        <div className="absolute inset-0 z-30">
          <Spotlight
            className="top-0 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        </div>

        {/* Layer 5: Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-40" />

        {/* Content - Top Layer */}
        <div className="relative z-50 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* PROFILE IMAGE - TOP CENTER */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="mb-8 mt-16 md:mt-0"
          >
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30"
              />

              {/* Main image container */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white/20 ring-offset-4 ring-offset-slate-900">
                <Image
                  src={Zia}
                  alt="Zia ul Qamar - Full Stack Developer"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Glow effects */}
              <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
              <div className="absolute -inset-2 bg-purple-500/20 blur-2xl rounded-full -z-10" />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 hover:border-cyan-400/50 transition-colors"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                ✦ Office 365 Add-ins Development • Full Stack Web Development
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zia ul Qamar
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  .
                </span>
              </span>
            </h1>

            {/* Dynamic Role with Typewriter */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 h-16">
              <span className="text-gray-300">I'm a </span>
              <span className="text-cyan-400 font-bold">{displayText}</span>
              <span className="ml-1 text-cyan-400 animate-pulse">|</span>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:border-cyan-400 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sections with Box Backgrounds - NO CHANGES HERE */}
      <section id="about" className="bg-gray-50">
        <About />
      </section>

      <section id="skills" className="bg-gray-50">
        <Skills />
      </section>

      <section id="integrations" className="bg-gray-50">
        <Integrations />
      </section>

      <section id="projects" className="bg-white">
        <Projects />
      </section>

      <section id="contact" className="bg-white">
        <Contact />
      </section>
    </>
  );
};

export default Home;
