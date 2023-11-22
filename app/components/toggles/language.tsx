import { useFetcher } from "@remix-run/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { useRequestInfo } from "~/utils/request-info";
import { LANG_FETCHER_KEY, useOptimisticLang } from "~/utils/lang";
import { IconButton } from "../icon-button";
import { Button } from "../button";
import { LanguageIcon } from "../icons";

export function LanguageToggle() {
  const { t } = useTranslation();
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: LANG_FETCHER_KEY });

  const optimisticLang = useOptimisticLang();
  const lang = optimisticLang ?? requestInfo.userPrefs.lang ?? "en";
  const isEnLang = lang === "en";
  const nextLang = isEnLang ? "pt" : "en";
  const tLang = t(`${nextLang}_lang`);

  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700";

  return (
    <fetcher.Form
      method="POST"
      action="/action/set-lang"
      className="flex gap-2"
    >
      <input type="hidden" name="lang" value={nextLang} />

      <div className="lg:hidden flex w-full">
        <Button
          label={tLang}
          startIcon={<LanguageIcon />}
          title={t("switch_lang", { tLang })}
          variant="outline"
        />
      </div>

      <div className="lg:flex hidden w-full">
        <IconButton title={t("switch_lang", { tLang })}>
          <span
            className={clsx(
              iconSpanClassName,
              isEnLang ? "translate-y-[100px]" : ""
            )}
          >
            PT
          </span>
          <span
            className={clsx(
              iconSpanClassName,
              !isEnLang ? "-translate-y-[100px]" : ""
            )}
          >
            EN
          </span>
        </IconButton>
      </div>
    </fetcher.Form>
  );
}
