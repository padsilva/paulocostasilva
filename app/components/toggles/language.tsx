import { useFetcher } from "react-router";
import { useTranslation } from "react-i18next";

import { useRequestInfo } from "~/utils/request-info";
import { LANG_FETCHER_KEY, useOptimisticLang } from "~/utils/lang";
import { IconButton } from "~/components/icon-button";
import { Button } from "~/components/button";
import { LanguageIcon } from "~/components/icons";
import { Typography } from "~/components/typography";

export function LanguageToggle() {
  const { t } = useTranslation();
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: LANG_FETCHER_KEY });

  const optimisticLang = useOptimisticLang();
  const lang = optimisticLang ?? requestInfo.userPrefs.lang ?? "en";
  const isEnLang = lang === "en";
  const nextLang = isEnLang ? "pt" : "en";
  const tLang = t(`${nextLang}_lang`);

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
          isMobile
        />
      </div>

      <div className="lg:flex hidden w-full">
        <IconButton title={t("switch_lang", { tLang })}>
          <Typography as="span" size="body2">
            {t("lang")}
          </Typography>
        </IconButton>
      </div>
    </fetcher.Form>
  );
}
