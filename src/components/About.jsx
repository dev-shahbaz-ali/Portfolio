"use client";
import Image from "next/image";
import Zia from "../assets/ZiaulQamar-min2.png";
import { BackgroundGradient } from "./ui/background-gradient";

const About = () => {
  return (
    <div className="relative w-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#0B1120] via-[#0F1A2F] to-[#1A1F35]">
      {/* Luxury gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-pink-500/10" />

      <div className="relative z-20 p-8 md:p-12 lg:p-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Premium Developer
              </span>
            </div>

            {/* Title with luxury gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex">
              <span className="bg-gradient-to-r from-slate-100 via-white to-slate-300 bg-clip-text text-transparent">
                About
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                &nbsp;Me
              </span>
            </h1>

            {/* Description with premium text colors */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p className="border-l-4 border-pink-500/50 pl-4 text-slate-300 font-light">
                I am a{" "}
                <span className="text-pink-400 font-normal">
                  {" "}
                  full stack web developer{" "}
                </span>{" "}
                specializing in{" "}
                <span className="text-pink-400 font-normal">
                  {" "}
                  Office 365 Add-ins Development, VSTO Add-ins,
                </span>{" "}
                and{" "}
                <span className="text-pink-400 font-normal">
                  ChatGPT integrations.
                </span>{" "}
                My expertise spans modern frameworks like React Angularand
                Node.js as well as databases like SQL Server MySQL and MongoDB I
                have a proven track record of building scalable web applications
                and custom add-ins for Microsoft Office.
              </p>
              <p className="text-slate-400 font-light italic border-l-2 border-pink-500/30 pl-4">
                "My hourly rate is{" "}
                <span className="text-pink-400 font-normal">
                  {" "}
                  PKR 25.00/hr.{" "}
                </span>{" "}
                Passionate about staying updated with the latest trends in web
                development, I enjoy exploring new programming languages and
                building innovative solutions in my free time.""
              </p>
            </div>

            {/* Premium stats */}
          </div>

          {/* Right Column - Image with ultra premium gradient */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <BackgroundGradient
              className="rounded-[30px] max-w-sm bg-gradient-to-br from-amber-900/20 via-purple-900/20 to-pink-900/20 p-1"
              containerClassName="shadow-[0_20px_50px_-15px_rgba(245,158,11,0.3)]"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[28px] overflow-hidden ring-2 ring-amber-500/20">
                <Image
                  src={Zia}
                  alt="Zia ul Qamar"
                  fill
                  className="object-cover overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent" />
              </div>
            </BackgroundGradient>
          </div>
        </div>

        {/* Ultra premium decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />

        {/* Gold sparkles */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-pink-400 rounded-full shadow-[0_0_10px_#F59E0B] animate-ping" />
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-pink-400 rounded-full shadow-[0_0_10px_#F59E0B] animate-ping delay-300" />
        <div className="absolute top-60 right-60 w-1 h-1 bg-pink-400 rounded-full shadow-[0_0_10px_#F59E0B] animate-ping delay-700" />
      </div>
    </div>
  );
};

export default About;
