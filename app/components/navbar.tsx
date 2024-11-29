import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { CloseIcon, DownloadIcon, GitHubIcon, MenuIcon } from "./icons";
import { Button } from "./button";
import { DarkModeToggle } from "./toggles/dark-mode";
import { IconButton } from "./icon-button";
import { LanguageToggle } from "./toggles/language";
import { Logo } from "./logo";
import { NavLink } from "./navlink";
import { Transition } from "./transition";
import { useSidebar } from "./hooks/use-sidebar";
import useScrollbarSize from "~/utils/scrollbar-size";

export const MENU_LIST = ["about", "skills", "projects", "contacts"];

export function Navbar() {
  const { t } = useTranslation();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { width } = useScrollbarSize();

  const styles = `md:pl-16 pl-8 md:pr-[${64 + width}px] pr-[${32 + width}px]`;

  return (
    <nav
      className={clsx(
        "fixed w-full z-30 2xl:px-48 xl:px-36 py-4 flex justify-between items-center bg-slate-100 dark:bg-slate-900 border-b border-b-gray-200 dark:border-b-gray-800",
        { "md:px-16 px-8": !isSidebarOpen || !width },
        { [styles]: isSidebarOpen && width },
      )}
    >
      <Logo onClick={() => toggleSidebar(false)} />
      <div className="hidden lg:flex lg:items-center lg:gap-4">
        {MENU_LIST.map((entry) => (
          <NavLink key={entry} to={`#${entry}`}>
            <Transition label={entry} transitionMobile />
          </NavLink>
        ))}
        <a
          href={`/CV_PauloCostaSilva_EN.pdf`}
          download={`CV_PauloCostaSilva_EN.pdf`}
        >
          <Button
            startIcon={<DownloadIcon />}
            label="CV"
            title={t("click_download_cv")}
          />
        </a>
        <div className="flex gap-2">
          <DarkModeToggle />
          <LanguageToggle />
          <Link
            title={t("github_link")}
            to="https://github.com/padsilva/paulocostasilva"
            target="_blank"
          >
            <div className="text-black dark:text-white active:text-slate-800 dark:active:text-slate-200">
              <GitHubIcon />
            </div>
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <IconButton
          title={t(isSidebarOpen ? "open_sidebar" : "close_sidebar")}
          onClick={() => toggleSidebar()}
        >
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </nav>
  );
}
