import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

import { Typography } from "./typography";
import { ExternalLink } from "./icons";

import { useLang } from "~/utils/lang";
import { type Lang } from "~/utils/lang.server";

export type TimelineEvent = {
  link: string;
  name: string;
  startDate: Date;
  endDate?: Date;
  isEducation?: boolean;
};

type TimelineProps = {
  events: TimelineEvent[];
  section: string;
};

const formatDate = (date: Date, lang: Lang) => {
  const month = new Intl.DateTimeFormat(lang, { month: "short" }).format(date);
  const year = new Intl.DateTimeFormat(lang, { year: "2-digit" }).format(date);
  return `${month} '${year}`;
};

export const Timeline = ({ events, section }: TimelineProps) => {
  const { t } = useTranslation();
  const lang = useLang();
  const [expandedTile, setExpandedTile] = useState<number | null>(null);

  const toggleTile = (index: number) => {
    setExpandedTile(expandedTile === index ? null : index);
  };

  return (
    <div className="w-full">
      <Typography className="capitalize mb-12" size="h2">
        {t(section)}
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(
          ({ name, link, startDate, endDate, isEducation }, index) => (
            <motion.div
              key={name}
              className={`${
                expandedTile === index
                  ? "md:col-span-2 lg:col-span-2 md:row-span-2"
                  : ""
              }`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => toggleTile(index)}
                className={`
                w-full h-full text-left bg-white dark:bg-slate-900 
                border border-slate-200 dark:border-slate-700
                rounded-xl overflow-hidden
                transition-all duration-300
                ${
                  expandedTile === index
                    ? "shadow-xl"
                    : "shadow hover:shadow-md"
                }
                focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500
              `}
                aria-expanded={expandedTile === index}
                aria-label={t(`${name}_title`)}
              >
                <div className="relative h-full">
                  <div className="p-6">
                    <div className="inline-flex px-3 py-1 mb-4 rounded-full bg-slate-200 dark:bg-slate-700">
                      <Typography
                        size="body3"
                        className="text-slate-700 dark:text-slate-200"
                      >
                        {`${formatDate(startDate, lang)} - ${
                          endDate ? formatDate(endDate, lang) : t("actual_date")
                        }`}
                      </Typography>
                    </div>

                    <Typography size="subtitle" className="mb-2 font-semibold">
                      {t(`${name}_title`)}
                    </Typography>

                    <Link
                      className="group inline-flex items-center gap-1 hover:text-slate-600 dark:hover:text-slate-300 transition-colors relative"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t("event_link", {
                        institute: t(`${name}_institute`),
                      })}
                      to={link}
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) =>
                        e.key === "Enter" && e.stopPropagation()
                      }
                    >
                      <Typography size="body2">
                        {t(`${name}_institute`)}
                      </Typography>
                      <motion.span
                        initial={{ opacity: 0.5, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                      >
                        <ExternalLink />
                      </motion.span>
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                    </Link>

                    <div
                      className={`mt-4 ${
                        expandedTile === index ? "" : "line-clamp-3"
                      }`}
                    >
                      <Typography
                        variant="secondary"
                        className="text-justify"
                        size="body2"
                      >
                        {t(`${name}_description`)}
                      </Typography>
                    </div>
                  </div>

                  {expandedTile === index && !isEducation && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="p-6 border-t border-slate-200 dark:border-slate-700"
                    >
                      <div className="mb-6">
                        <Typography className="font-semibold mb-2" size="body2">
                          {t("key_achievements")}
                        </Typography>
                        <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-slate-400">
                          {Array.from(
                            t(`${name}_achievements`, {
                              returnObjects: true,
                            }) as string[],
                          ).map((achievement, i) => (
                            <motion.li
                              key={`${name}_achievement_${i}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <Typography className="font-semibold mb-2" size="body2">
                          {t("technologies")}
                        </Typography>
                        <div className="flex flex-wrap gap-2">
                          {Array.from(
                            t(`${name}_technologies`, {
                              returnObjects: true,
                            }) as string[],
                          ).map((tech, i) => (
                            <motion.span
                              key={`${name}_tech_${i}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </button>
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
};
