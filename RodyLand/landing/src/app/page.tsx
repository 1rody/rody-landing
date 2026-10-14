'use client'
//sections of landing
import Hero from "@/src/components/landing/Hero";
import Topbar from "@/src/components/layout/navigation/Topbar";
import History from "@/src/components/landing/History";
import About from "@/src/components/landing/About";
import Projects from "@/src/components/landing/Projects";
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
