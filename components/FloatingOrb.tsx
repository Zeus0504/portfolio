'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';

export default function FloatingOrb() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { stiffness: 120, damping: 14 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { stiffness: 120, damping: 14 });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className="group relative h-[320px] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-accent/15 via-transparent to-accent/5 md:h-[420px]" onMouseMove={handleMove}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -14, 0], rotateZ: [0, 2, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[34%_66%_63%_37%/40%_43%_57%_60%] bg-gradient-to-br from-accent to-orange-300 shadow-glow"
      />
      <div className="absolute inset-8 rounded-2xl border border-white/10" />
    </div>
  );
}
