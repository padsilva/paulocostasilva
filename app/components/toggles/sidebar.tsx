/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { IconButton } from "../icon-button";
import { CloseIcon, DownloadIcon, GitHubIcon, MenuIcon } from "../icons";
import { Button } from "../button";
import { DarkModeToggle } from "./dark-mode";
import { LanguageToggle } from "./language";
import { Logo } from "../logo";
import { NavLink } from "../navlink";
import { MENU_LIST } from "../navbar";
import { Transition } from "../transition";

export function SidebarToggle() {
  const { t } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add("pr-[15px]");
      document.body.classList.remove("overflow-y-scroll");
    } else {
      document.body.classList.add("overflow-y-scroll");
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("pr-[15px]");
    }
  }, [showSidebar]);

  return (
    <>
      {!showSidebar ? (
        <IconButton
          title={t("open_sidebar")}
          onClick={() => setShowSidebar(true)}
        >
          <MenuIcon />
        </IconButton>
      ) : null}

      {showSidebar ? (
        <div
          id="overlay"
          className="fixed inset-0 bg-gray-900/10 opacity-100 backdrop-blur-sm cursor-default"
          onClick={() => setShowSidebar(false)}
        />
      ) : null}

      <aside
        className={`fixed shadow-2xl bg-white dark:bg-black ring-1 ring-black/10 dark:ring-white/10 ease-in-out duration-300 inset-y-0 right-0 h-full sm:max-w-xs w-full flex flex-col divide-y divide-gray-200 dark:divide-gray-800 overflow-auto ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 bg-slate-100 dark:bg-slate-900">
          <Logo onClick={() => setShowSidebar(false)} />
          <IconButton
            title={t("close_sidebar")}
            onClick={() => setShowSidebar(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>

        {MENU_LIST.map((entry) => (
          <NavLink
            key={entry}
            to={`#${entry}`}
            onClick={() => setShowSidebar(false)}
          >
            <Transition label={entry} />
          </NavLink>
        ))}

        <div className="py-6 sm:px-10 px-20 flex flex-col gap-4">
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
      </aside>
    </>
  );
}
