import type { LinkProps } from "@remix-run/react";
import { Link, useFetcher, useLocation } from "@remix-run/react";
import clsx from "clsx";

import { useRequestInfo } from "~/utils/request-info";
import { DownloadIcon, MoonIcon, SunIcon } from "./icons";
import { THEME_FETCHER_KEY, useOptimisticThemeMode } from "~/utils/theme";
import { Typography } from "./typography";
import { Button } from "./button";
import { IconButton } from "./icon-button";

const iconTransformOrigin = { transformOrigin: "50% 100px" };

function NavLink({ children, to }: LinkProps) {
  const { hash } = useLocation();
  const isSelected = to === hash;

  console.log("to", to);
  console.log("hash", hash);
  console.log("isSelected", isSelected);

  const animation = isSelected
    ? "after:w-full"
    : "after:w-0 hover:after:w-full after:transition-all after:duration-500";

  return (
    <Link
      className={clsx(
        "relative after:bg-black after:absolute after:h-0.5 after:bottom-0 after:left-0",
        animation
      )}
      to={to}
      children={children}
    />
  );
}

function DarkModeToggle() {
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: THEME_FETCHER_KEY });

  const optimisticMode = useOptimisticThemeMode();
  const mode = optimisticMode ?? requestInfo.userPrefs.theme ?? "light";
  const nextMode = mode === "light" ? "dark" : "light";

  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700";

  return (
    <fetcher.Form method="POST" action="/action/set-theme">
      <input type="hidden" name="theme" value={nextMode} />

      <IconButton title="dark-mode">
        <span
          className={clsx(
            iconSpanClassName,
            mode === "dark" ? "rotate-0" : "rotate-90"
          )}
          style={iconTransformOrigin}
        >
          <MoonIcon />
        </span>
        <span
          className={clsx(
            iconSpanClassName,
            mode === "light" ? "rotate-0" : "-rotate-90"
          )}
          style={iconTransformOrigin}
        >
          <SunIcon />
        </span>
      </IconButton>
    </fetcher.Form>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 px-20 py-4 border-b-[1px] dark:border-b-[#272D2B] bg-slate-50 dark:bg-slate-950">
      <nav className="flex justify-between items-center">
        <NavLink to="">
          <Typography size="h3" className="font-bold">
            Paulo Silva
          </Typography>
        </NavLink>
        <div className="flex items-center gap-6">
          <NavLink to="#education">
            <Typography size="body2">Education</Typography>
          </NavLink>
          <NavLink to="#experience">
            <Typography size="body2">Experience</Typography>
          </NavLink>
          <NavLink to="#skills">
            <Typography size="body2">Skills</Typography>
          </NavLink>
          <NavLink to="#projects">
            <Typography size="body2">Projects</Typography>
          </NavLink>
          <NavLink to="#contact">
            <Typography size="body2">Contact</Typography>
          </NavLink>
          <Button startIcon={<DownloadIcon />} label="CV" />
          <div className="block">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
