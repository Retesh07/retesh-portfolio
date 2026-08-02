"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data/resume";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
  const glowX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      key={project.number}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-card rounded-[24px] p-8 md:p-10 group cursor-pointer relative overflow-hidden"
      >
        {/* Dynamic spotlight on card */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(74,124,255,0.08) 0%, transparent 60%)`,
          }}
        />

        {/* Top shimmer line on hover */}
        <motion.div
          className="absolute top-0 left-[10%] right-[10%] h-[1px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(74,124,255,0.5), transparent)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 relative z-10">
          <div className="flex items-start gap-6">
            {/* Number with scale effect */}
            <motion.span
              animate={isHovered ? { scale: 1.05, color: "rgba(255,255,255,0.2)" } : { scale: 1, color: "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.3 }}
              className="text-[clamp(2.5rem,6vw,4rem)] font-black leading-none tracking-[-0.02em] shrink-0"
            >
              {project.number}
            </motion.span>

            <div>
              {/* Category tag */}
              <p className="text-[13px] tracking-[0.22em] text-blue-400 font-semibold mb-2">
                {project.category}
              </p>
              {/* Title */}
              <motion.h3
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white"
              >
                {project.title}
              </motion.h3>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="shrink-0 flex items-center gap-3 flex-wrap">
            {project.githubUrl && project.githubUrl !== "#" && project.githubUrl !== project.liveUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-[11px] tracking-[0.15em] font-medium text-white/90 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GITHUB
              </motion.a>
            )}

            {project.liveUrl && project.liveUrl !== "#" && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/25 text-[11px] tracking-[0.15em] font-semibold text-white bg-white/10 hover:bg-white hover:text-black transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                {project.liveUrl.includes("github.com") ? "VIEW REPO" : "LIVE DEMO"}
                <motion.svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  animate={isHovered ? { rotate: 0, x: 2, y: -2 } : { rotate: -45, x: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </motion.svg>
              </motion.a>
            )}
          </div>
        </div>

        {/* Tech badge */}
        <motion.div
          className="mb-5 relative z-10"
          animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-md bg-white/[0.08] border border-white/20 text-xs sm:text-[13.5px] tracking-wide text-white/90 font-mono">
            {project.tech}
          </span>
        </motion.div>

        {/* Description bullets — staggered on hover */}
        <div className="space-y-3.5 pl-0 md:pl-[calc(clamp(2.5rem,6vw,4rem)+1.5rem)] relative z-10">
          {project.description.map((desc, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + j * 0.06 }}
              className="flex items-start gap-3"
            >
              <motion.span
                animate={isHovered ? { backgroundColor: "#4a7cff", scale: 1.25 } : { backgroundColor: "rgba(255,255,255,0.6)", scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0"
              />
              <p className="text-slate-100 text-base sm:text-[16px] leading-relaxed tracking-[0.01em] group-hover:text-white transition-colors duration-300">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-12 md:py-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.25em] text-blue-400 font-semibold uppercase mb-2"
          >
            FEATURED WORK
          </motion.p>
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading-massive metallic-text"
          >
            PROJECTS
          </motion.h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
