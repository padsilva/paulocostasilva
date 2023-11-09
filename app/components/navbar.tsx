import { Link, useFetcher } from "@remix-run/react";
import clsx from "clsx";

import { useRequestInfo } from "~/utils/request-info";
import { DownloadIcon, MoonIcon, SunIcon } from "./icons";
import { THEME_FETCHER_KEY, useOptimisticThemeMode } from "~/utils/theme";
import { Typography } from "./typography";

const iconTransformOrigin = { transformOrigin: "50% 100px" };

function DarkModeToggle() {
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: THEME_FETCHER_KEY });

  const optimisticMode = useOptimisticThemeMode();
  const mode = optimisticMode ?? requestInfo.userPrefs.theme ?? "light";
  const nextMode = mode === "light" ? "dark" : "light";

  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700 text-black dark:text-white";

  return (
    <fetcher.Form method="POST" action="/action/set-theme">
      <input type="hidden" name="theme" value={nextMode} />

      <button
        type="submit"
        className={"flex items-start h-6 w-6 overflow-hidden"}
      >
        <div className="relative">
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
        </div>
      </button>
    </fetcher.Form>
  );
}

export function Navbar() {
  return (
    <header className="px-20 py-4 border-b-[1px] dark:border-b-[#272D2B]">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <Typography size="h3" className="font-bold">
            Paulo Silva
          </Typography>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="#education">
            <Typography size="body2">Education</Typography>
          </Link>
          <Link to="#experience">
            <Typography size="body2">Experience</Typography>
          </Link>
          <Link to="#skills">
            <Typography size="body2">Skills</Typography>
          </Link>
          <Link to="#projects">
            <Typography size="body2">Projects</Typography>
          </Link>
          <Link to="#contact">
            <Typography size="body2">Contact</Typography>
          </Link>
          <button className="flex gap-1 bg-black dark:bg-white text-white dark:text-black rounded-xl px-4 py-1.5">
            <span>CV</span>
            <span>
              <DownloadIcon />
            </span>
          </button>
          <div className="block">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
