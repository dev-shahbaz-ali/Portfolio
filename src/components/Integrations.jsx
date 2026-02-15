"use client";

import { motion } from "framer-motion";
import { BsMicrosoftTeams, BsMicrosoft, BsTrello } from "react-icons/bs";
import {
  SiGoogleanalytics,
  SiQuickbooks,
  SiGoogledrive,
  SiSlack,
  SiJira,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaSalesforce } from "react-icons/fa6";

const integrations = [
  {
    name: "Microsoft Teams",
    icon: <BsMicrosoftTeams className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Power BI",
    icon: <span className="text-2xl">📊</span>,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Google Analytics",
    icon: <SiGoogleanalytics className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "QuickBooks",
    icon: <SiQuickbooks className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "OpenAI",
    icon: <RiOpenaiFill className="w-6 h-6" />,
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Google Drive",
    icon: <SiGoogledrive className="w-6 h-6" />,
    color: "from-green-400 to-blue-500",
  },
  {
    name: "Microsoft Office",
    icon: <BsMicrosoft className="w-6 h-6" />,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Salesforce",
    icon: <FaSalesforce className="w-6 h-6" />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Slack",
    icon: <SiSlack className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Jira",
    icon: <SiJira className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
  },
  {
    name: "Trello",
    icon: <BsTrello className="w-6 h-6" />,
    color: "from-sky-400 to-blue-500",
  },
];

// Duplicate array for infinite effect
const firstRow = integrations.slice(0, 8);
const secondRow = integrations.slice(8);

export const Integrations = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden p-8 lg:p-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Platform Integrations
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Seamlessly connect and integrate with the tools your business
            already uses. From AI-powered solutions to enterprise platforms.
          </p>
        </div>

        {/* Infinite Moving Cards - Row 1 (Right to Left) */}
        <div className="relative flex overflow-hidden group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0 gap-4 pr-4"
          >
            {[...firstRow, ...firstRow].map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[180px] h-[100px] rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-cyan-400/50 transition-all duration-300 group/card cursor-default"
              >
                <div className="flex items-center gap-3 h-full">
                  <div
                    className={`text-2xl bg-gradient-to-br ${item.color} p-2 rounded-lg text-white`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover/card:text-white font-medium">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Duplicate for seamless loop */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0 gap-4 pr-4"
          >
            {[...firstRow, ...firstRow].map((item, idx) => (
              <div
                key={`row1-duplicate-${idx}`}
                className="w-[180px] h-[100px] rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-cyan-400/50 transition-all duration-300 group/card cursor-default"
              >
                <div className="flex items-center gap-3 h-full">
                  <div
                    className={`text-2xl bg-gradient-to-br ${item.color} p-2 rounded-lg text-white`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover/card:text-white font-medium">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Infinite Moving Cards - Row 2 (Left to Right) */}
        <div className="relative flex overflow-hidden mt-4 group">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0 gap-4 pr-4"
          >
            {[...secondRow, ...secondRow].map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[180px] h-[100px] rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-purple-400/50 transition-all duration-300 group/card cursor-default"
              >
                <div className="flex items-center gap-3 h-full">
                  <div
                    className={`text-2xl bg-gradient-to-br ${item.color} p-2 rounded-lg text-white`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover/card:text-white font-medium">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Duplicate for seamless loop */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0 gap-4 pr-4"
          >
            {[...secondRow, ...secondRow].map((item, idx) => (
              <div
                key={`row2-duplicate-${idx}`}
                className="w-[180px] h-[100px] rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-purple-400/50 transition-all duration-300 group/card cursor-default"
              >
                <div className="flex items-center gap-3 h-full">
                  <div
                    className={`text-2xl bg-gradient-to-br ${item.color} p-2 rounded-lg text-white`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-300 group-hover/card:text-white font-medium">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
      </div>
    </section>
  );
};
