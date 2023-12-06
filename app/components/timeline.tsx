import { useTranslation } from "react-i18next";

import { Transition } from "./transition";

export function Timeline({
  events,
  section,
}: {
  events: string[];
  section: string;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      <Transition className="capitalize" label={t(section)} size="h2" />

      <div className="flex flex-col">
        {events.map((event) => (
          <div key={event}>
            <div className="flex items-center gap-3">
              <div className="flex justify-end w-[120px]">
                <Transition
                  label={`${t(`${event}_start_date`)} - ${t(
                    `${event}_end_date`
                  )}`}
                  size="body3"
                  variant="secondary"
                />
              </div>
              <div className="h-[9px] w-[9px] rounded-full bg-gray-500 dark:bg-slate-400" />
              <Transition label={t(`${event}_title`)} size="subtitle" />
            </div>
            <div className="border-l border-gray-500 dark:border-slate-400 relative inset-x-[136px]">
              <div className="ml-[17px] pb-5 flex flex-col gap-2">
                <Transition label={t(`${event}_institute`)} size="body3" />
                <Transition
                  label={t(`${event}_description`)}
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
