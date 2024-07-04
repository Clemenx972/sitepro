import Competences from "@/components/balises/competences";
import Contact from "@/components/balises/contact";
import Elevator from "@/components/balises/elevator";
import Experiences from "@/components/balises/experiences";
import Footer_Section from "@/components/balises/footer-section";
import Presentation from "@/components/balises/presentation";
import Page from "@/components/balises/page_projets";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/jpg" href="/logo_cyber_2.jpg" />
      </Head>

      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto mt-24 px-12 py-4 ">
          <Presentation />
          <Competences />
          <Page />
          <Experiences />
          <Contact />
        </div>
        <Elevator />
        <Footer_Section />
      </main>
    </div>
  );
}
