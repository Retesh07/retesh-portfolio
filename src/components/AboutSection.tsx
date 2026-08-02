"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { aboutBio, skillCategories } from "@/data/resume";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.3"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-center max-w-4xl mx-auto">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#555a63", "#ffffff"]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}

function SkillPill({ skill, delay }: { skill: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="skill-pill cursor-default relative overflow-hidden"
    >
      <motion.span
        className="absolute inset-0 bg-white/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
      <span className="relative z-10">{skill}</span>
    </motion.span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-40 bg-transparent">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/0 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section heading — same as PROJECTS */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="section-heading-massive text-center metallic-text"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Scroll-reveal bio text */}
        <ScrollRevealText text={aboutBio} />


        {/* Skills heading — same as PROJECTS */}
        <div className="overflow-hidden mt-24 mb-16">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="section-heading-massive text-center metallic-text"
          >
            SKILLS
          </motion.h2>
        </div>

        {/* Skill categories — grid layout for perfect alignment */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col md:grid items-start gap-3 md:gap-4"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              {/* Label column — fixed width, right-aligned on desktop */}
              <motion.span
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 + 0.15 }}
                className="text-[10px] tracking-[0.22em] text-white/35 font-semibold md:text-right md:pt-[6px] md:pr-2 leading-tight"
              >
                {cat.label}
              </motion.span>

              {/* Pills column — left-aligned, wraps naturally */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <SkillPill key={skill} skill={skill} delay={i * 0.05 + j * 0.03} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
