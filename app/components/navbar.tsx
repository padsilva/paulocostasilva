import { Link, type LinkProps } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { CodeIcon, DownloadIcon, GitHubIcon } from "./icons";
import { Typography } from "./typography";
import { Button } from "./button";
import { DarkModeToggle } from "./toggles/dark-mode";
import { LanguageToggle } from "./toggles/language";
import { SidebarToggle } from "./toggles/sidebar";

function NavLink({ children, to }: LinkProps) {
  return (
    <Link
      className={
        "relative after:bg-black dark:after:bg-white after:absolute after:h-0.5 after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-500 capitalize"
      }
      to={to}
      children={children}
    />
  );
}

export function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 2xl:px-64 xl:px-32 lg:px-16 px-8 py-4 border-b-[1px] dark:border-b-[#272D2B] bg-slate-100 dark:bg-slate-900">
      <nav className="flex justify-between items-center">
        <Link to="">
          <div className="flex items-center justify-center gap-2">
            <div className="text-black dark:text-white">
              <CodeIcon />
            </div>
            <div className="flex flex-col items-center select-none">
              <Typography size="h2">Paulo</Typography>
              <div className="flex items-center gap-0.5 self-stretch">
                <hr className="flex-grow border-t-2 border-black dark:border-white" />
                <Typography size="caption" className="flex-shrink">
                  Costa Silva
                </Typography>
                <hr className="flex-grow border-t-2 border-black dark:border-white" />
              </div>
            </div>
          </div>
        </Link>
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
