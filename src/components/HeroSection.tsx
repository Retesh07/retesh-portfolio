"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { personalInfo } from "@/data/resume";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const firstX = useTransform(springX, [-1, 1], [-18, 18]);
  const firstY = useTransform(springY, [-1, 1], [-10, 10]);
  const lastX = useTransform(springX, [-1, 1], [18, -18]);
  const lastY = useTransform(springY, [-1, 1], [10, -10]);

  const glowX = useTransform(springX, [-1, 1], [-120, 120]);
  const glowY = useTransform(springY, [-1, 1], [-80, 80]);

  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Blue edge glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          boxShadow:
            "inset 0 0 150px rgba(74, 124, 255, 0.07), inset 0 0 60px rgba(124, 58, 237, 0.04)",
        }}
      />

      {/* Cursor-tracking ambient glow */}
      <motion.div
        className="absolute pointer-events-none z-[1] w-[600px] h-[600px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          left: "calc(50% - 300px)",
          top: "calc(50% - 300px)",
          background:
            "radial-gradient(circle, rgba(74,124,255,0.06) 0%, rgba(124,58,237,0.03) 50%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        {/* Portfolio tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[13px] tracking-[0.3em] text-white/80 font-medium mb-6"
        >
          PORTFOLIO
        </motion.p>

        {/* Name — with mouse parallax */}
        <div className="overflow-visible">
          <motion.h1
            style={{ x: firstX, y: firstY, textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.0,
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.9] tracking-[-0.03em] text-white select-none"
          >
            {personalInfo.firstName}
          </motion.h1>
        </div>
        <div className="overflow-visible">
          <motion.h1
            style={{ x: lastX, y: lastY, textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.0,
              delay: 1.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.9] tracking-[-0.03em] text-white select-none"
          >
            {personalInfo.lastName}
          </motion.h1>
        </div>



        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex items-center gap-4 flex-wrap justify-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full bg-white text-black text-[12px] font-bold tracking-[0.15em] transition-all duration-300 hover:bg-white/90"
          >
            VIEW WORK
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full border border-white/35 text-white/90 text-[12px] font-bold tracking-[0.15em] hover:border-white/60 hover:text-white transition-all duration-300 bg-white/5"
          >
            GET IN TOUCH
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[11px] tracking-[0.3em] text-white/75 font-medium">
          SCROLL
        </span>
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-white/70 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
