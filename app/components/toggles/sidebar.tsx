import { Link, type LinkProps, useFetcher } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import { useRequestInfo } from "~/utils/request-info";
import { IconButton } from "../icon-button";
import { DownloadIcon, GitHubIcon, MenuIcon } from "../icons";
import { Typography } from "../typography";
import { SIDEBAR_FETCHER_KEY, useOptimisticSidebarMode } from "~/utils/sidebar";
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
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: SIDEBAR_FETCHER_KEY });
  const optimisticMode = useOptimisticSidebarMode();

  const mode = optimisticMode ?? requestInfo.userPrefs.sidebar ?? "false";
  const isOpen = mode === "true";
  const nextMode = isOpen ? "false" : "true";

  const sidebarStyles = isOpen
    ? "fixed shadow-2xl bg-white dark:bg-black ring-1 ring-black/10 dark:ring-white/10 transition-all ease-in-out duration-100 inset-y-0 right-0 h-full max-w-xs w-full flex flex-col divide-y"
    : "hidden";

  const overlayStyles = isOpen
    ? "fixed inset-0 bg-gray-900/10 opacity-100 backdrop-blur-sm"
    : "hidden";

  return (
    <>
      <fetcher.Form method="POST" action="/action/set-sidebar">
        <input type="hidden" name="sidebar" value={nextMode} />

        <button id="overlay" className={overlayStyles} type="submit" />

        <IconButton title={t("menu")}>
          <MenuIcon />
        </IconButton>
      </fetcher.Form>

      <aside className={sidebarStyles}>
        <NavLink
          to="#about"
          className="p-6 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Typography size="body2">{t("about")}</Typography>
        </NavLink>
        <NavLink
          to="#skills"
          className="p-6 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Typography size="body2">{t("skills")}</Typography>
        </NavLink>
        <NavLink
          to="#projects"
          className="p-6 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Typography size="body2">{t("projects")}</Typography>
        </NavLink>
        <NavLink
          to="#contact"
          className="p-6 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
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
