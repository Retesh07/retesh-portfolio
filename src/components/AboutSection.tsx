"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { aboutBio, skillCategories } from "@/data/resume";

function SkillPill({ skill, delay }: { skill: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
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
    <section id="about" className="relative py-16 md:py-28 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-[12px] tracking-[0.25em] text-blue-400 font-semibold uppercase mb-2"
          >
            BIOGRAPHY
          </motion.p>
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading-massive metallic-text"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* Bio Text — Clean, elegant, readable paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-16 md:mb-24 text-center px-2"
        >
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed tracking-normal">
            {aboutBio}
          </p>
        </motion.div>

        {/* Skills Heading */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-[12px] tracking-[0.25em] text-purple-400 font-semibold uppercase mb-2"
          >
            TECHNICAL EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading-massive metallic-text"
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col md:grid items-start gap-3 md:gap-4"
              style={{ gridTemplateColumns: "200px 1fr" }}
            >
              {/* Label column */}
              <motion.span
                className="text-[11px] tracking-[0.2em] text-white/50 font-semibold md:text-right md:pt-[8px] md:pr-2 leading-tight uppercase"
              >
                {cat.label}
              </motion.span>

              {/* Pills column */}
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
