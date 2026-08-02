"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { education } from "@/data/resume";

export default function EducationSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const springCfg = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springCfg);
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
    <section id="education" className="relative py-12 md:py-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.25em] text-purple-400 font-semibold uppercase mb-2"
          >
            ACADEMIC BACKGROUND
          </motion.p>
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading-massive metallic-text"
          >
            EDUCATION
          </motion.h2>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ perspective: 1000 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="glass-card rounded-[24px] p-8 md:p-12 relative overflow-hidden"
          >
            {/* Mouse-tracking glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-[24px]"
              style={{
                background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(74,124,255,0.1) 0%, transparent 60%)`,
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />

            {/* Top shimmer on hover */}
            <motion.div
              className="absolute top-0 left-[5%] right-[5%] h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(74,124,255,0.5), rgba(124,58,237,0.5), transparent)",
              }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.35 }}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 relative z-10">
              <div>
                <motion.h3
                  animate={hovered ? { x: 3 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2"
                >
                  {education.institution}
                </motion.h3>
                <p className="text-white/90 text-base sm:text-lg font-medium">
                  {education.degree}
                </p>
              </div>
              <div className="text-left md:text-right">
                <motion.p
                  animate={hovered ? { color: "rgba(255,255,255,1)" } : { color: "rgba(255,255,255,0.85)" }}
                  transition={{ duration: 0.3 }}
                  className="text-sm sm:text-base tracking-[0.15em] font-semibold"
                >
                  {education.duration}
                </motion.p>
                <p className="text-xs sm:text-sm tracking-[0.15em] text-white/70 mt-1">
                  {education.location}
                </p>
              </div>
            </div>

            {/* Highlights */}
            {education.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 mb-4 relative z-10"
              >
                <motion.span
                  animate={hovered ? { scale: 1.3, color: "#4a7cff" } : { scale: 1, color: "rgba(74,124,255,0.9)" }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 text-sm sm:text-base"
                >
                  ✦
                </motion.span>
                <p className="text-slate-100 text-base sm:text-[16.5px] leading-relaxed group-hover:text-white">
                  {h}
                </p>
              </motion.div>
            ))}

            {/* Coursework */}
            <div className="mt-6 pt-6 border-t border-white/15 relative z-10">
              <p className="text-xs tracking-[0.2em] text-white/70 font-semibold mb-3 uppercase">
                RELEVANT COURSEWORK
              </p>
              <div className="flex flex-wrap gap-2.5">
                {education.coursework.map((course, i) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="skill-pill text-xs sm:text-sm cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
