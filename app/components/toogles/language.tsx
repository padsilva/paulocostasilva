import { useFetcher } from "@remix-run/react";
import clsx from "clsx";

import { useRequestInfo } from "~/utils/request-info";
import { LANG_FETCHER_KEY, useOptimisticLangMode } from "~/utils/lang";
import { IconButton } from "../icon-button";

export function LanguageToggle() {
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: LANG_FETCHER_KEY });

  const optimisticMode = useOptimisticLangMode();
  const mode = optimisticMode ?? requestInfo.userPrefs.lang ?? "en";
  const isEnLang = mode === "en";
  const nextMode = isEnLang ? "pt" : "en";

  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700";
  return (
    <fetcher.Form
      method="POST"
      action="/action/set-lang"
      className="flex gap-2"
    >
      <input type="hidden" name="lang" value={nextMode} />

      <IconButton title="Click to toggle between English and Portuguese language">
        <span
          className={clsx(
            iconSpanClassName,
            mode === "en" ? "translate-y-[100px]" : ""
          )}
        >
          PT
        </span>
        <span
          className={clsx(
            iconSpanClassName,
            mode === "pt" ? "-translate-y-[100px]" : ""
          )}
        >
          EN
        </span>
      </IconButton>
    </fetcher.Form>
  );
}
