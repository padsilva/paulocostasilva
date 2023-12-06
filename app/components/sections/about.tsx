import { Timeline } from "../timeline";

const EXPERIENCE = ["sr_eng", "sr_sfw_eng", "sfw_eng", "junior", "intern"];

const EDUCATION = ["master", "bachelor"];

export function About() {
  return (
    <section className="py-24 px-20 flex flex-col gap-10" id="about">
      <Timeline events={EXPERIENCE} section="experience" />
      <Timeline events={EDUCATION} section="education" />
    </section>
  );
}
