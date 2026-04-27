import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.14),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(255,122,24,0.08),transparent_34%)]" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
