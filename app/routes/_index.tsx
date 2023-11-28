import { Contact } from "~/components/sections/contact";
import { About } from "~/components/sections/about";
import { Hero } from "~/components/sections/hero";
import { Projects } from "~/components/sections/projects";
import { Skills } from "~/components/sections/skills";

export default function Index() {
  return (
    <main className="flex flex-col items-center 2xl:px-64 xl:px-32 md:px-16 px-8 py-4">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
