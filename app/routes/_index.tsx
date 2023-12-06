import { About } from "~/components/sections/about";
import { Contact } from "~/components/sections/contact";
import { Hero } from "~/components/sections/hero";
import { Projects } from "~/components/sections/projects";
import { Skills } from "~/components/sections/skills";

export default function Index() {
  return (
    <main className="flex flex-col items-center 2xl:px-96 xl:px-72 lg:px-36 md:px-16 px-8 pb-4 pt-28">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
