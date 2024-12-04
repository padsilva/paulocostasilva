import { useTranslation } from "react-i18next";

import { Transition } from "~/components/transition";

const skillCategories = [
  {
    title: "languages_frameworks",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "NestJS",
      "Next.js",
      "Cypress",
      "Jest",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "development_tools",
    skills: ["Git", "JIRA", "Confluence"],
  },
  {
    title: "methodologies_competencies",
    skills: [
      "agile_methodologies",
      "linux_environments",
      "problem_solving",
      "leadership_mentoring",
    ],
  },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full" id="skills">
      <Transition className="capitalize mb-12" label={t("skills")} size="h2" />

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="border-b border-gray-200 pb-8 last:border-0"
          >
            <Transition
              className="mb-6 font-semibold"
              label={category.title}
              size="body1"
            />
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <Transition
                  className="px-4 py-2 rounded-xl border-2 border-slate-500 text:black hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 dark:text-white"
                  key={skill}
                  label={skill}
                  size="body3"
                  variant="secondary"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
