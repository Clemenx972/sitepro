import Contact from "@/components/balises/contact";
import Elevator from "@/components/balises/elevator";
import Experiences from "@/components/balises/experiences";
import Footer_Section from "@/components/balises/footer-section";
import Page from "@/components/balises/page_projets";
import ColorToggle from "@/components/colorToggle";
import HeroSection from "@/components/heroSection";
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  return (
    <div>
      <main className='container mx-auto mt-24 px-12 pb-4'>
        <HeroSection />
        <SkillsSection />
        <Page />
        <Experiences />
        <Contact />
        <Elevator />
        <Footer_Section />
        <ColorToggle />
      </main>
    </div>
  );
}
