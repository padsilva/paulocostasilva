import { useFetcher } from "@remix-run/react";
import clsx from "clsx";

import { useRequestInfo } from "~/utils/request-info";
import { MoonIcon, SunIcon } from "../icons";
import { THEME_FETCHER_KEY, useOptimisticThemeMode } from "~/utils/theme";
import { IconButton } from "../icon-button";

const iconTransformOrigin = { transformOrigin: "50% 100px" };

export function DarkModeToggle() {
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

      <IconButton title="Click to toggle between light and dark mode">
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
