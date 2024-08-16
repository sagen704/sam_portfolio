import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Proj from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Grid />
      <Proj />
      <Education />
      <Contact />
    </main>
  );
}
