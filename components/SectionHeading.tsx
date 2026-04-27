import { motion } from 'framer-motion';

export default function SectionHeading({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-accentSoft">{subtitle}</p>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
    </motion.div>
  );
}
