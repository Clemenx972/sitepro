"use client";
import Contact from "@/components/balises/contact";
import Elevator from "@/components/balises/elevator";
import Experiences from "@/components/balises/experiences";
import Footer_Section from "@/components/balises/footer-section";
import Page from "@/components/balises/page_projets";
import colorToggle from "@/components/colorTogle";
import HeroSection from "@/components/heroSection";
import SkillsSection from "@/components/skillsSection";
import ToggleButton from "@/components/toggleButton";
import { useEffect, useState } from "react";
export default function Site() {
  const [colorState, setColorState] = useState(colorToggle.state);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {colorState ? (
        <div className='bg-purple'>
          <main className='container mx-auto px-12 pb-4'>
            <ToggleButton />
            <HeroSection />
            <SkillsSection />
            <Page />
            <Experiences />
            <Contact />
            <Elevator />
            <Footer_Section />
            {/* <App />
            <ColorToggle />
            <ColorText /> */}
          </main>
        </div>
      ) : (
        <main className='container mx-auto px-12 pb-4'>
          <ToggleButton />
          <HeroSection />
          <SkillsSection />
          <Page />
          <Experiences />
          <Contact />
          <Elevator />
          <Footer_Section />
          {/* <App />
          <ColorToggle />
          <ColorText /> */}
        </main>
      )}
    </div>
  );
}
