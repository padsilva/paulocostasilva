import { useEffect } from "react";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { Button } from "./button";
import { DarkModeToggle } from "./toggles/dark-mode";
import { DownloadIcon, GitHubIcon } from "./icons";
import { LanguageToggle } from "./toggles/language";
import { MENU_LIST } from "./navbar";
import { NavLink } from "./navlink";
import { Transition } from "./transition";
import useScrollbarSize from "~/utils/scrollbar-size";
import { useSidebar } from "./hooks/use-sidebar";

export function Sidebar() {
  const { t } = useTranslation();
  const { width } = useScrollbarSize();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const styles = `pr-[${width}px]`;

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add(styles);
      document.body.classList.remove("overflow-y-scroll");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove(styles);
      document.body.classList.add("overflow-y-scroll");
    }
  }, [isSidebarOpen, styles]);

  return (
    <div
      className={clsx(
        "lg:hidden fixed pt-[89px] h-full w-full flex flex-col bg-white dark:bg-black transition-transform transform overflow-y-auto",
        {
          "translate-x-0": isSidebarOpen,
          "translate-x-full": !isSidebarOpen,
        }
      )}
    >
      <div className="divide-y divide-gray-200 dark:divide-gray-800 border-b border-b-gray-200 dark:border-b-gray-800">
        {MENU_LIST.map((entry) => (
          <NavLink
            className="md:px-16 px-8 flex flex-col gap-4"
            key={entry}
            to={`#${entry}`}
            onClick={() => toggleSidebar()}
          >
            <Transition label={entry} />
          </NavLink>
        ))}
      </div>

      <div className="container mx-auto py-6 md:px-48 sm:px-24 px-12 flex flex-col gap-4">
        <Button
          label={t("download_cv")}
          startIcon={<DownloadIcon />}
          title={t("click_download_cv")}
          transition
        />
        <DarkModeToggle />
        <LanguageToggle />
        <Link
          title={t("github_link")}
          to="https://github.com/padsilva/paulocostasilva"
          target="_blank"
        >
          <Button
            label={t("repository")}
            startIcon={<GitHubIcon size={24} />}
            title={t("github_link")}
            transition
            variant="outline"
          />
        </Link>
      </div>
    </div>
  );
}
