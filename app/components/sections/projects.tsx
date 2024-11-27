import { useTranslation } from "react-i18next";

import { Transition } from "../transition";
import { Construction } from "../icons";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section className="w-full" id="projects">
      <div className="flex flex-col">
        <Transition
          className="capitalize mb-12"
          label={t("projects")}
          size="h2"
        />

        <div className="text-center">
          <div className="max-w-md mx-auto flex flex-col items-center">
            <div className="mb-6 text-black dark:text-white">
              <Construction size={64} />
            </div>

            <Transition className="mb-4" label={t("coming_soon")} size="h3" />
            <Transition
              className="mb-12"
              label={t("projects_under_construction")}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
