"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: "word-vsto",
    title: "Word VSTO Add-in",
    description:
      "Custom Word Add-in with automated ribbon controls and API integration.",
    tech: ["C#", ".NET", "VSTO", "Office 365", "REST API"],
    github: "https://github.com/devziaulqamar",
  },
  {
    id: "excel-js",
    title: "Excel JavaScript Add-in",
    description:
      "Excel Add-in that listens to worksheet events and provides real‑time updates.",
    tech: ["JavaScript", "Office.js", "Excel API", "Event Handling"],
    github: "https://github.com/devziaulqamar",
  },
  {
    id: "nextjs-firebase",
    title: "Next.js Firebase Auth App",
    description: "Authentication system built with Next.js and Firebase.",
    tech: ["Next.js", "Firebase", "Tailwind", "Authentication"],
    github: "https://github.com/devziaulqamar",
  },
];

const ProjectPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#0F1A2F] to-[#1A1F35]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="h-full relative group"
            >
              <WobbleCard
                containerClassName="h-full bg-[#1A1F35]/80 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50  transition-all duration-300 rounded-2xl shadow-xl"
                className="p-8 flex flex-col justify-between h-full relative overflow-hidden"
              >
                <div className="relative z-10">
                  <motion.h2 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                    {project.title}
                  </motion.h2>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-pink-500/10 text-pink-300 px-3 py-1.5 rounded-full font-medium border border-pink-500/20 group-hover:bg-pink-500/20 group-hover:border-pink-500/30 group-hover:text-pink-200 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-pink-500/20 relative z-10 group-hover:border-pink-500/30 transition-colors duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>GitHub</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </WobbleCard>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://github.com/devziaulqamar"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-10 py-4 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My GitHub Projects</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;
