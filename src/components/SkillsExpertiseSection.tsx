"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { expertiseItems } from "@/data/resume";

export default function SkillsExpertiseSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="relative">
      <div className="light-section py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="overflow-hidden mb-20">
            <motion.h2
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="section-heading-massive text-center text-white"
            >
              EXPERTISE
            </motion.h2>
          </div>

          {/* Numbered items — accordion + hover highlight */}
          <div>
            {expertiseItems.map((item, i) => {
              const isOpen = openIndex === i;
              const isHovered = hoveredIndex === i;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="numbered-item cursor-pointer group relative overflow-hidden select-none"
                >
                  {/* Hover fill background */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered || isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Left accent bar */}
                  <motion.div
                    className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#4a7cff] to-[#7c3aed]"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ transformOrigin: "top" }}
                  />

                  <div className="relative z-10 flex items-start gap-6 w-full">
                    {/* Number */}
                    <motion.span
                      animate={{
                        color: isOpen
                          ? "rgba(255,255,255,1)"
                          : isHovered
                          ? "rgba(255,255,255,0.95)"
                          : "rgba(255,255,255,0.8)",
                        scale: isHovered || isOpen ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-[-0.02em] shrink-0"
                    >
                      {item.number}
                    </motion.span>

                    {/* Content */}
                    <div className="pt-2 flex-1">
                      <div className="flex items-center justify-between">
                        <motion.h3
                          animate={{ x: isHovered || isOpen ? 4 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-lg md:text-xl font-bold text-white tracking-[0.02em] mb-3"
                        >
                          {item.title}
                        </motion.h3>
                        {/* Expand chevron */}
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.35 }}
                          className="w-5 h-5 text-white/40 shrink-0 ml-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>

                      {/* Always visible short description */}
                      <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                        {item.description.split(".")[0] + "."}
                      </p>

                      {/* Expandable full description */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-white/50 text-sm leading-relaxed max-w-2xl mt-2 overflow-hidden"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
