import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#03000a]">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <ScrollProgress />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
