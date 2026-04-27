'use client';

import { motion } from 'framer-motion';
import FloatingOrb from './FloatingOrb';

export default function HeroSection() {
  return (
    <section className="section min-h-screen pt-16">
      <div className="grid items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-accentSoft">Portfolio 2026</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Hello World, I am Ziyan Sheikh</h1>
            <p className="text-xl text-zinc-300 md:text-2xl">Full Stack Developer</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-black transition hover:bg-accentSoft hover:shadow-glow"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/25 px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="orange-gradient rounded-3xl p-3"
        >
          <FloatingOrb />
        </motion.div>
      </div>
    </section>
  );
}
