"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skillCategories, personalInfo } from "@/data/resume";

function SkillPill({ skill, delay }: { skill: string; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="skill-pill cursor-default relative overflow-hidden text-xs sm:text-sm"
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
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const springCfg = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springCfg);
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

  const keyHighlights = [
    {
      title: "Agentic AI & RAG Architectures",
      desc: "Stateful LangGraph workflows, ChromaDB vector retrieval, and Groq LLM tool-calling engines.",
    },
    {
      title: "Backend & Distributed Infrastructure",
      desc: "Real-time Socket.io WebSockets, BullMQ + Redis async queues, and multi-threaded Python storage simulations.",
    },
    {
      title: "Full-Stack Development & APIs",
      desc: "Next.js, React, Express.js, MongoDB, FastAPI, and RESTful web applications.",
    },
  ];

  return (
    <section id="about" className="relative py-12 md:py-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.25em] text-blue-400 font-semibold uppercase mb-1.5"
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

        {/* Passionate Bio Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ perspective: 1000 }}
          className="max-w-4xl mx-auto mb-16 md:mb-24"
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
                background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(74,124,255,0.14) 0%, transparent 60%)`,
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />

            {/* Top shimmer on hover */}
            <motion.div
              className="absolute top-0 left-[5%] right-[5%] h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(74,124,255,0.6), rgba(124,58,237,0.6), transparent)",
              }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.35 }}
            />

            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 relative z-10">
              <div>
                <motion.h3
                  animate={hovered ? { x: 3 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2"
                >
                  Passionate CS Student & Engineer
                </motion.h3>
                <p className="text-blue-400 text-sm sm:text-base font-semibold tracking-wide">
                  Building Agentic AI · Scalable Systems · Full-Stack Applications
                </p>
              </div>
              <div className="text-left md:text-right">
                <motion.p
                  animate={hovered ? { color: "rgba(255,255,255,1)" } : { color: "rgba(255,255,255,0.85)" }}
                  transition={{ duration: 0.3 }}
                  className="text-sm sm:text-base tracking-[0.15em] font-semibold"
                >
                  PES University
                </motion.p>
                <p className="text-xs sm:text-sm tracking-[0.15em] text-white/70 mt-1">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Bio Paragraph (No repetition of CNR Rao / Ideathon) */}
            <div className="mb-8 relative z-10">
              <p className="text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed tracking-normal">
                I am a Computer Science student at PES University passionate about building agentic AI systems, machine learning solutions, and scalable full-stack applications. My work focuses on intelligent RAG platforms, LLM tool-calling agents, distributed storage systems, and production-grade backend software. I enjoy solving complex engineering challenges where clean system design, performance optimization, and intuitive user experiences come together.
              </p>
            </div>

            {/* Bullet Highlights (Pure Engineering Focus) */}
            <div className="space-y-3.5 pt-6 border-t border-white/15 relative z-10">
              {keyHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    animate={hovered ? { scale: 1.3, color: "#4a7cff" } : { scale: 1, color: "rgba(74,124,255,0.9)" }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 text-sm sm:text-base shrink-0"
                  >
                    ✦
                  </motion.span>
                  <div>
                    <span className="text-white font-bold text-base sm:text-[16.5px] mr-2">
                      {item.title}:
                    </span>
                    <span className="text-slate-200 text-base sm:text-[16px] leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Separate Skills Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.25em] text-purple-400 font-semibold uppercase mb-1.5"
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

        {/* Skill categories — separate aligned grid */}
        <div className="space-y-5 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col md:grid items-start gap-3 md:gap-4"
              style={{ gridTemplateColumns: "220px 1fr" }}
            >
              {/* Label column */}
              <motion.span
                className="text-xs md:text-[13px] tracking-[0.2em] text-white/70 font-semibold md:text-right md:pt-[10px] md:pr-3 leading-tight uppercase"
              >
                {cat.label}
              </motion.span>

              {/* Pills column */}
              <div className="flex flex-wrap gap-2.5">
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
