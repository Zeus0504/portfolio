'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="section pb-28">
      <SectionHeading title="Contact" subtitle="Let&apos;s Connect" />
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="card grid gap-4 p-6 md:p-8"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
        />
        <textarea
          placeholder="Tell me about your project"
          rows={5}
          className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 outline-none transition focus:border-accent"
        />
        <button
          type="submit"
          className="mt-2 rounded-xl bg-accent px-6 py-3 font-semibold text-black transition hover:bg-accentSoft"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
