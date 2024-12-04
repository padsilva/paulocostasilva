import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { Transition } from "./transition";

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

  return (
    <div className="flex flex-col">
      <Transition className="capitalize mb-12" label={t(section)} size="h2" />

      {events.map(({ name, link, startDate, endDate, isEducation }) => (
        <div className="flex flex-col" key={name}>
          <div className="flex items-center gap-3">
            <div className="lg:flex lg:justify-end lg:w-[120px] hidden">
              <Transition
                label={`${formatDate(startDate, lang)} - ${
                  endDate ? formatDate(endDate, lang) : t("actual_date")
                }`}
                size="body3"
                variant="secondary"
              />
            </div>
            <div className="h-[9px] w-[9px] rounded-full bg-gray-500 dark:bg-slate-400" />
            <div className="lg:flex hidden">
              <Transition label={t(`${name}_title`)} size="subtitle" />
            </div>
            <div className="lg:hidden flex justify-end">
              <Transition
                label={t(`${name}_title`)}
                size="subtitle"
                className="font-semibold"
              />
            </div>
          </div>
          <div className="border-l border-gray-500 dark:border-slate-400 lg:ml-[136px] ml-[4px]">
            <div className="ml-[17px] pb-12 flex flex-col gap-2">
              <div className="lg:hidden flex">
                <Transition
                  label={`${formatDate(startDate, lang)} - ${
                    endDate ? formatDate(endDate, lang) : t("actual_date")
                  }`}
                  size="body3"
                  variant="secondary"
                />
              </div>
              <Link
                className="underline"
                target="_blank"
                title={t("event_link", {
                  institute: t(`${name}_institute`),
                })}
                to={link}
              >
                <Transition label={t(`${name}_institute`)} size="body3" />
              </Link>
              <Transition
                className="text-justify whitespace-pre-line mt-4"
                label={t(`${name}_description`)}
                variant="secondary"
              />
              {!isEducation && (
                <div className="space-y-4 mt-4">
                  <div>
                    <Transition
                      className="mb-1"
                      label={t("key_achievements")}
                    />
                    <Transition>
                      <ul className="list-disc pl-5 space-y-1">
                        {Array.from(
                          t(`${name}_achievements`, {
                            returnObjects: true,
                          }) as string[],
                        ).map((achievement, index) => (
                          <li
                            key={`${name}_achievement_${index}`}
                            className="text-gray-500 dark:text-slate-400"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  </div>

                  <div>
                    <Transition className="mb-1" label={t("technologies")} />
                    <div className="flex flex-wrap gap-2">
                      {Array.from(
                        t(`${name}_technologies`, {
                          returnObjects: true,
                        }) as string[],
                      ).map((tech, index) => (
                        <span
                          key={`${name}_tech_${index}`}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
