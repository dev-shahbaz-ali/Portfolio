"use client";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Material Design",
    "JavaScript",
    "jQuery",
    "Angular",
    "React",
    "Vue.js",
    "ASP.NET",
    "ASP.NET Core",
    "Web API",
  ];

  const skills2 = [
    "Node.js",
    "SQL Server",
    "MySQL",
    "MongoDB",
    "Office 365 Add‑ins",
    "VSTO Add‑ins",
    "ChatGPT",
    "Integration",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#0F1A2F] to-[#1A1F35] shadow-2xl p-8 lg:p-16">
      {/* Top Glow Effect */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-400/30 via-purple-400/20 to-transparent blur-3xl -z-10" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] -z-10" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left mb-12"
      >
        <motion.h2 className="text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills &
          </span>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {" "}
            Expertise
          </span>
        </motion.h2>
      </motion.div>

      {/* Skills Tags - Exactly 2 Lines aligned left */}
      <div className="flex flex-col gap-3">
        {/* Line 1 */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                         border border-cyan-400/30 rounded-full text-white text-sm font-medium
                         hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 
                         transition-all duration-300 cursor-default whitespace-nowrap"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap gap-3">
          {skills2.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                         border border-cyan-400/30 rounded-full text-white text-sm font-medium
                         hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 
                         transition-all duration-300 cursor-default whitespace-nowrap"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
