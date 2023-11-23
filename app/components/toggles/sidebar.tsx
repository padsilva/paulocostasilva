import { useEffect, useState } from "react";
import { Link, type LinkProps } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { IconButton } from "../icon-button";
import { CloseIcon, DownloadIcon, GitHubIcon, MenuIcon } from "../icons";
import { Typography } from "../typography";
import { Button } from "../button";
import { DarkModeToggle } from "./dark-mode";
import { LanguageToggle } from "./language";

function NavLink({ children, to }: LinkProps) {
  return (
    <Link
      className={"p-6 hover:bg-slate-100 dark:hover:bg-slate-800 capitalize"}
      to={to}
      children={children}
    />
  );
}

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
        className={`fixed shadow-2xl bg-white dark:bg-black ring-1 ring-black/10 dark:ring-white/10 ease-in-out duration-300 inset-y-0 right-0 h-full sm:max-w-xs w-full flex flex-col divide-y overflow-auto ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <IconButton
            title={t("close_sidebar")}
            onClick={() => setShowSidebar(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>
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
        <div className="p-6 flex flex-col gap-4">
          <Button
            label={t("download_cv")}
            startIcon={<DownloadIcon />}
            title={t("click_download_cv")}
          />
          <DarkModeToggle />
          <LanguageToggle />
          <Link
            title={t("github_link")}
            to="https://github.com/padsilva/paulocostasilva"
            target="_blank"
          >
            <Button
              label="GitHub"
              startIcon={<GitHubIcon size={24} />}
              title={t("github_link")}
              variant="outline"
            />
          </Link>
        </div>
      </aside>
    </>
  );
}
