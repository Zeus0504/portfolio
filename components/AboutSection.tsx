'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionHeading title="About" subtitle="Professional Intro" />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="card p-8 leading-relaxed text-zinc-300 md:p-10 md:text-lg"
      >
        I&apos;m a full stack developer focused on designing scalable products with polished user experiences.
        I enjoy turning complex workflows into simple interfaces and building reliable backend systems that
        power high-performance applications. My approach combines strong engineering fundamentals, product
        thinking, and a commitment to clean, maintainable code.
      </motion.div>
    </section>
  );
}
