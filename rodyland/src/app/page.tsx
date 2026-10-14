'use client'
//sections of landing
import Hero from "@/src/components/pages/landing/Hero";
import Topbar from "@/src/components/layout/navigation/Topbar";
import History from "@/src/components/pages/landing/History";
import About from "@/src/components/pages/landing/About";
import Projects from "@/src/components/pages/landing/Projects";
import Footer from "@/src/components/layout/navigation/footer";


export default function Home() {
  return (
    <>
      <Topbar/>
      <main className="flex h-fit flex-col">
        <Hero />
        <History/>
        <About/>
        <Projects/>
      </main>
      <Footer/>
    </>
  );
}
