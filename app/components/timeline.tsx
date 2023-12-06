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

export function Timeline({ events, section }: TimelineProps) {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <div className="flex flex-col gap-3">
      <Transition className="capitalize" label={t(section)} size="h2" />

      <div className="flex flex-col">
        {events.map(({ name, link, startDate, endDate }) => (
          <div key={name}>
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
              <div className="ml-[17px] pb-5 flex flex-col gap-2">
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
                  label={t(`${name}_description`)}
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
