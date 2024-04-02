import "@/app/globals.css";

import bons_plans from "@/components/balises/bons_plans-section";
import Navbar_Section from "@/components/balises/navbar-section";
import Footer_Section from "@/components/balises/footer-section";
import Presentation from "@/components/balises/presentation";
import Competences from "@/components/balises/competences";
import Projets from "@/components/balises/projets";
import Experiences from "@/components/balises/experiences";
import Contact from "@/components/balises/contact";
import Elevator from "@/components/balises/elevator";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel='icon' type='image/jpg' href='/logo_cyber_2.jpg' />
      </Head>
      <main className='flex min-h-screen flex-col'>
        <Navbar_Section />
        <div className='container mx-auto mt-24 px-12 py-4 '>
          <Presentation />
          <Competences />
          <Projets />
          <Experiences />
          <Contact />
        </div>
        <Elevator />
        <Footer_Section />
      </main>
    </div>
  );
}
