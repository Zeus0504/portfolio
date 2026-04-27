'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skills = [
  { name: 'Frontend Engineering', detail: 'Next.js, React, TypeScript, Tailwind CSS' },
  { name: 'Backend Architecture', detail: 'Node.js, APIs, authentication, microservices' },
  { name: 'Data & Infrastructure', detail: 'PostgreSQL, Prisma, Redis, Docker, CI/CD' },
  { name: 'Product Delivery', detail: 'Testing, performance, observability, UX collaboration' }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <SectionHeading title="Skills" subtitle="Core Capabilities" />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="card group p-6 transition hover:border-accent/60 hover:shadow-glow"
          >
            <h3 className="mb-2 text-xl font-semibold transition group-hover:text-accent">{skill.name}</h3>
            <p className="text-zinc-300">{skill.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
