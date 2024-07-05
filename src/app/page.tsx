import HeroSection from "@/components/heroSection";
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto mt-24 px-12 pb-4">
        <HeroSection />
        <SkillsSection />
      </main>
    </div>
  );
}
