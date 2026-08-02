"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative bg-transparent pb-8">
      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[1px] bg-white/10 mb-8 origin-left"
        />

        {/* Footer content — matching reference */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] tracking-[0.2em] text-white/30 font-medium">
            © {personalInfo.portfolioYear} {personalInfo.name}
          </p>
          <p className="text-[12px] tracking-[0.2em] text-white/30 font-medium">
            DESIGNED & BUILT IN BENGALURU
          </p>
        </div>
      </div>
    </footer>
  );
}
