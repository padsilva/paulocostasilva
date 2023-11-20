import { Contact } from "~/components/sections/contact";
import { About } from "~/components/sections/about";
import { Hero } from "~/components/sections/hero";
import { Projects } from "~/components/sections/projects";
import { Skills } from "~/components/sections/skills";

export default function Index() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
