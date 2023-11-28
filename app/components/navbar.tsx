import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { DownloadIcon, GitHubIcon } from "./icons";
import { Button } from "./button";
import { DarkModeToggle } from "./toggles/dark-mode";
import { LanguageToggle } from "./toggles/language";
import { SidebarToggle } from "./toggles/sidebar";
import { Logo } from "./logo";
import { NavLink } from "./navlink";
import { Transition } from "./transition";

export const MENU_LIST = ["about", "skills", "projects", "contact"];

export function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 2xl:px-64 xl:px-32 md:px-16 px-8 py-4 bg-slate-100 dark:bg-slate-900">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {MENU_LIST.map((entry) => (
            <NavLink key={entry} to={`#${entry}`}>
              <Transition label={entry} />
            </NavLink>
          ))}
          <Button
            startIcon={<DownloadIcon />}
            label="CV"
            title={t("click_download_cv")}
          />
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
          <SidebarToggle />
        </div>
      </nav>
    </header>
  );
}
