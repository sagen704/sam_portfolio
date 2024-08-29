import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Proj from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Copyright from "@/components/Copyright";

export default function Home() {
  return (
    <div>
      <Hero />
      <Grid />
      <Proj />
      <Education />
      <Contact />
      <Copyright />
    </div>
  );
}
