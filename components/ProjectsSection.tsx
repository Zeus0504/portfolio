'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { Project, projects } from '@/data/projects';

function TiltCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      whileHover={{ rotateX: 5, rotateY: -5, y: -8 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="card cursor-pointer p-6 transition hover:border-accent/60"
      onClick={() => onOpen(project)}
    >
      <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
      <p className="mb-5 text-zinc-300">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <SectionHeading title="Projects" subtitle="Selected Work" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <TiltCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
