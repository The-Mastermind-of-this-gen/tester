import AmbientBackground from "@/components/ambient-background";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import Vision from "@/components/sections/vision";
import HowWeWork from "@/components/sections/how-we-work";
import Projects from "@/components/sections/projects";
import Competitions from "@/components/sections/competitions";
import Support from "@/components/sections/support";
import Join from "@/components/sections/join";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="relative z-10 pt-28 sm:pt-36 flex flex-col gap-32 sm:gap-40 overflow-x-clip">
        <Hero />
        <Vision />
        <HowWeWork />
        <Projects />
        <Competitions />
        <Support />
        <Join />
      </main>
      <Footer />
    </>
  );
}
