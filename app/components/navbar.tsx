import { Link, useFetcher } from "@remix-run/react";
import clsx from "clsx";

import { useRequestInfo } from "~/utils/request-info";
import { DownloadIcon, MoonIcon, SunIcon } from "./icons";
import { THEME_FETCHER_KEY, useOptimisticThemeMode } from "~/utils/theme";

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
    <header className="px-20 py-4 border-b-[1px]">
      <nav className="flex justify-between items-center">
        <Link className="font-sans text-3xl" to="/">
          Paulo Silva
        </Link>
        <div className="flex items-center gap-6">
          <Link to="#education">Education</Link>
          <Link to="#experience">Experience</Link>
          <Link to="#skills">Skills</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#contact">Contact</Link>
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
