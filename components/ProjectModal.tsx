'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Project } from '@/data/projects';

export default function ProjectModal({
  project,
  onClose
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="card max-w-2xl p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <button
                type="button"
                className="rounded-lg border border-white/20 px-3 py-1 text-sm transition hover:border-accent"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            <p className="mb-4 text-zinc-300">{project.details}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-accent/30 px-3 py-1 text-xs text-accentSoft">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
