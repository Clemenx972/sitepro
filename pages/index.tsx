import bons_plans from '@/components/balises/bons_plans-section';
import Navbar_Section from '@/components/balises/navbar-section';

import '@/app/globals.css';
import Footer_Section from '@/components/balises/footer-section';
import Presentation from '@/components/balises/presentation';
import Competences from '@/components/balises/competences';
import Projets from '@/components/balises/projets';

export default function Home() {
  return (
    <>
      <header>
        <title>Mon site</title>
      </header>

       <Navbar_Section />
      <Presentation />
      <Competences />
      <Projets />
      <div></div>
    <Footer_Section />
    </>
  );
}