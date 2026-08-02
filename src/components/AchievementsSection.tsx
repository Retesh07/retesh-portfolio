"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { achievements } from "@/data/resume";

function AchievementCard({ ach, index }: { ach: typeof achievements[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const springCfg = { stiffness: 200, damping: 22 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springCfg);
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative p-8 rounded-[24px] bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-colors duration-400 backdrop-blur-md overflow-hidden group cursor-pointer flex flex-col justify-between h-full"
        onClick={() => {
          if (ach.link) window.open(ach.link, "_blank", "noopener,noreferrer");
        }}
      >
        {/* Mouse-tracking glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[24px]"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(74,124,255,0.15) 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* Top shimmer */}
        <motion.div
          className="absolute top-0 left-[8%] right-[8%] h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(74,124,255,0.6), rgba(124,58,237,0.6), transparent)",
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div>
          {/* Icon with bounce & link icon */}
          <div className="flex items-center justify-between mb-5">
            <motion.div
              className="text-4xl"
              animate={hovered ? { y: -4, scale: 1.15 } : { y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {ach.icon}
            </motion.div>
            {ach.link && (
              <motion.span
                animate={hovered ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.85 }}
                className="text-xs tracking-wider text-white/90 font-semibold flex items-center gap-1 bg-white/15 px-3 py-1 rounded-full border border-white/25"
              >
                PROFILE
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.span>
            )}
          </div>

          {/* Title */}
          <motion.h3
            animate={hovered ? { x: 3 } : { x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg md:text-xl font-bold text-white mb-3 tracking-[0.01em] relative z-10"
          >
            {ach.title}
          </motion.h3>

          {/* Description */}
          <p className="text-white/85 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
            {ach.description}
          </p>
        </div>

        {/* Bottom bar accent */}
        <motion.div
          className="absolute bottom-0 left-[15%] right-[15%] h-[2px] rounded-full mt-4"
          style={{ background: "linear-gradient(90deg, #4a7cff, #7c3aed)" }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative">
      <div className="light-section light-section-bottom py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] md:text-[12px] tracking-[0.25em] text-blue-400 font-semibold uppercase mb-2"
            >
              RECOGNITION & AWARDS
            </motion.p>
            <motion.h2
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-heading-massive metallic-text"
            >
              ACHIEVEMENTS
            </motion.h2>
          </div>

          {/* Achievement cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((ach, i) => (
              <AchievementCard key={i} ach={ach} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
