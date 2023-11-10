import { Contact } from "~/components/sections/contact";
import { Education } from "~/components/sections/education";
import { Experience } from "~/components/sections/experience";
import { Hero } from "~/components/sections/hero";
import { Projects } from "~/components/sections/projects";
import { Skills } from "~/components/sections/skills";

export default function Index() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
