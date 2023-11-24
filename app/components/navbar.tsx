import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { DownloadIcon, GitHubIcon } from "./icons";
import { Typography } from "./typography";
import { Button } from "./button";
import { DarkModeToggle } from "./toggles/dark-mode";
import { LanguageToggle } from "./toggles/language";
import { SidebarToggle } from "./toggles/sidebar";
import { Logo } from "./logo";
import { NavLink } from "./navlink";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 2xl:px-64 xl:px-32 lg:px-16 px-8 py-4 bg-slate-100 dark:bg-slate-900">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex md:items-center md:gap-4">
          <NavLink to="#about">
            <Typography size="body2">{t("about")}</Typography>
          </NavLink>
          <NavLink to="#skills">
            <Typography size="body2">{t("skills")}</Typography>
          </NavLink>
          <NavLink to="#projects">
            <Typography size="body2">{t("projects")}</Typography>
          </NavLink>
          <NavLink to="#contact">
            <Typography size="body2">{t("contact")}</Typography>
          </NavLink>
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
        <div className="md:hidden">
          <SidebarToggle />
        </div>
      </nav>
    </header>
  );
}
