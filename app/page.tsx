import About from "@/components/portfolioComponents/About";
import Contact from "@/components/portfolioComponents/Contact";
import Education from "@/components/portfolioComponents/Education";
import Footer from "@/components/portfolioComponents/Footer"; 
import Header from "@/components/portfolioComponents/Header";
import Hero from "@/components/portfolioComponents/Hero";
import Projects from "@/components/portfolioComponents/Projects";
import Skills from "@/components/portfolioComponents/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer /> 
    </main>
  );
}