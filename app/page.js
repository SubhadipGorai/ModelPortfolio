import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import PageTransition from "@/components/shared/PageTransition";
import Collaborators from "@/components/collaborators/Collaborators";

export default function HomePage() {
  return (
    <PageTransition>
    <main className="bg-black text-white overflow-hidden">
      <Navbar />

      <Hero />

      <About />

      <Portfolio/>

      <Collaborators/>

      <Contact/>
      
      <Footer/>
    </main>
    </PageTransition>
  );
}