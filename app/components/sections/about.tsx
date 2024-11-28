import { type TimelineEvent, Timeline } from "../timeline";

const EXPERIENCE: TimelineEvent[] = [
  {
    name: "sr_eng",
    link: "https://www.criticalsoftware.com/",
    startDate: new Date("2022-04-01"),
  },
  {
    name: "sfw_eng",
    link: "https://www.chinasystems.com/",
    startDate: new Date("2016-01-01"),
    endDate: new Date("2022-04-01"),
  },
  {
    name: "intern",
    link: "https://www.ipn.pt/incubadora/empresa/140",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2015-01-01"),
  },
];

const EDUCATION: TimelineEvent[] = [
  {
    name: "master",
    link: "https://dei.uc.pt/mei/",
    startDate: new Date("2013-09-01"),
    endDate: new Date("2015-09-01"),
    isEducation: true,
  },
  {
    name: "bachelor",
    link: "https://dei.uc.pt/lei/",
    startDate: new Date("2008-09-01"),
    endDate: new Date("2013-07-01"),
    isEducation: true,
  },
];

export function About() {
  return (
    <section className="flex flex-col gap-10" id="about">
      <Timeline events={EXPERIENCE} section="experience" />
      <Timeline events={EDUCATION} section="education" />
    </section>
  );
}
