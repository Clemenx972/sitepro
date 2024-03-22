import "@/app/globals.css";

import bons_plans from "@/components/balises/bons_plans-section";
import Navbar_Section from "@/components/balises/navbar-section";
import Footer_Section from "@/components/balises/footer-section";
import Presentation from "@/components/balises/presentation";
import Competences from "@/components/balises/competences";
import Projets from "@/components/balises/projets";
import Experiences from "@/components/balises/experiences";
import Contact from "@/components/balises/contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon site</title>
        <link rel='icon' type='image/jpg' href='/logo_cyber_2.jpg' />
      </Head>

      <Navbar_Section />
      <Presentation />
      <Competences />
      <Projets />
      <Experiences />
      <Contact />
      <div></div>
      <Footer_Section />
    </>
  );
}
