import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import {
  Blocks,
  Check,
  CodeXml,
  RefreshCcw,
  Users,
  Workflow,
} from "~/components/icons";
import { Typography } from "~/components/typography";
import { useTheme } from "~/utils/theme";

type Skill = {
  name: string;
  category: string;
  logo: any;
};

const SKILL_CATEGORIES = [
  {
    id: "languages_frameworks",
    icon: CodeXml,
  },
  {
    id: "development_tools",
    icon: Blocks,
  },
  {
    id: "methodologies_competencies",
    icon: Workflow,
  },
];

const skills: Skill[] = [
  // Languages & Frameworks
  {
    name: "React",
    category: "languages_frameworks",
    logo: "/assets/logos/react.svg",
  },
  {
    name: "TypeScript",
    category: "languages_frameworks",
    logo: "/assets/logos/typescript.svg",
  },
  {
    name: "JavaScript",
    category: "languages_frameworks",
    logo: "/assets/logos/javascript.svg",
  },
  {
    name: "Next.js",
    category: "languages_frameworks",
    logo: "/assets/logos/nextjs.svg",
  },
  {
    name: "NestJS",
    category: "languages_frameworks",
    logo: "/assets/logos/nestjs.svg",
  },
  {
    name: "HTML",
    category: "languages_frameworks",
    logo: "/assets/logos/html5.svg",
  },
  {
    name: "CSS",
    category: "languages_frameworks",
    logo: "/assets/logos/css3.svg",
  },
  {
    name: "Jest",
    category: "languages_frameworks",
    logo: "/assets/logos/jest.svg",
  },
  {
    name: "Cypress",
    category: "languages_frameworks",
    logo: "/assets/logos/cypress.svg",
  },

  // Development Tools
  {
    name: "Git",
    category: "development_tools",
    logo: "/assets/logos/git.svg",
  },
  {
    name: "JIRA",
    category: "development_tools",
    logo: "/assets/logos/jira.svg",
  },
  {
    name: "Confluence",
    category: "development_tools",
    logo: "/assets/logos/confluence.svg",
  },

  // Methodologies & Competencies
  {
    name: "agile_methodologies",
    category: "methodologies_competencies",
    logo: RefreshCcw,
  },
  {
    name: "problem_solving",
    category: "methodologies_competencies",
    logo: Check,
  },
  {
    name: "leadership",
    category: "methodologies_competencies",
    logo: Users,
  },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMethodologiesCompetencies =
    skill.category === "methodologies_competencies";
  const isCypress = skill.name === "Cypress";
  const Logo = skill.logo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg p-2">
          {isMethodologiesCompetencies ? (
            <div className="text-black dark:text-white">
              <Logo size={24} />
            </div>
          ) : (
            <img
              src={
                isCypress ? Logo.replace("cypress", `cypress_${theme}`) : Logo
              }
              alt={`${skill.name} logo`}
              className="w-full h-full object-contain"
            />
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {isMethodologiesCompetencies ? t(skill.name) : skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

const CategoryFilter = ({
  categories,
  activeCategory,
  onSelect,
}: {
  categories: typeof SKILL_CATEGORIES;
  activeCategory: string;
  onSelect: (category: string) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-stretch sm:flex-row sm:justify-center gap-4 mb-8">
      <button
        onClick={() => onSelect("all")}
        className={`flex items-center px-4 py-2 border-b-2 transition-colors duration-300 ${
          activeCategory === "all" ? "border-blue-500" : "border-transparent"
        }`}
      >
        <Typography
          className={
            activeCategory === "all"
              ? "text-dark dark:text-white"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          }
          size="body2"
        >
          {t("all")}
        </Typography>
      </button>
      {categories.map(({ id, icon }) => {
        const Icon = icon;
        return (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors duration-300 ${
              activeCategory === id
                ? "border-blue-500 text-dark dark:text-white"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 group"
            }`}
          >
            <Icon size={24} />
            <Typography
              className={
                activeCategory === id
                  ? "text-dark dark:text-white"
                  : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
              }
              size="body2"
            >
              {t(id)}
            </Typography>
          </button>
        );
      })}
    </div>
  );
};

export function Skills() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="w-full" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Typography className="capitalize mb-12" size="h2">
              {t("skills")}
            </Typography>
          </motion.div>

          {/* Category Filter */}
          <CategoryFilter
            categories={SKILL_CATEGORIES}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
