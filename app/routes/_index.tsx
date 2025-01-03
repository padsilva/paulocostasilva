import { About } from "~/components/sections/about";
import { Contacts } from "~/components/sections/contacts";
import { Hero } from "~/components/sections/hero";
import { Projects } from "~/components/sections/projects";
import { Skills } from "~/components/sections/skills";

export default function Index() {
  return (
    <main className="flex flex-col items-center 2xl:px-96 xl:px-72 lg:px-36 md:px-24 sm:px-16 px-8 gap-20 pb-4 pt-28">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
