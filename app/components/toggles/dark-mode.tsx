import { useFetcher } from "@remix-run/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import { useRequestInfo } from "~/utils/request-info";
import { MoonIcon, SunIcon } from "~/components/icons";
import { THEME_FETCHER_KEY, useOptimisticThemeMode } from "~/utils/theme";
import { IconButton } from "~/components/icon-button";
import { Button } from "~/components/button";
import type { Theme } from "~/utils/theme.server";

interface IconsProps {
  mode: Theme;
}

const iconTransformOrigin = { transformOrigin: "50% 100px" };

const Icons: React.FC<IconsProps> = ({ mode }) => {
  const iconSpanClassName =
    "absolute inset-0 transform transition-transform duration-700";

  return (
    <>
      <span
        className={clsx(
          iconSpanClassName,
          mode === "dark" ? "rotate-0" : "rotate-90",
        )}
        style={iconTransformOrigin}
      >
        <MoonIcon />
      </span>
      <span
        className={clsx(
          iconSpanClassName,
          mode === "light" ? "rotate-0" : "-rotate-90",
        )}
        style={iconTransformOrigin}
      >
        <SunIcon />
      </span>
    </>
  );
};

export function DarkModeToggle() {
  const { t } = useTranslation();
  const requestInfo = useRequestInfo();
  const fetcher = useFetcher({ key: THEME_FETCHER_KEY });
  const optimisticMode = useOptimisticThemeMode();

  const mode = optimisticMode ?? requestInfo.userPrefs.theme ?? "light";
  const nextMode = mode === "light" ? "dark" : "light";
  const tMode = t(`${nextMode}_mode`);
  const title = t("switch_theme", { tMode });

  return (
    <fetcher.Form method="POST" action="/action/set-theme">
      <input type="hidden" name="theme" value={nextMode} />

      <div className="lg:hidden flex w-full">
        <Button label={tMode} title={title} variant="outline" isMobile>
          <Icons mode={mode} />
        </Button>
      </div>

      <div className="lg:flex hidden w-full">
        <IconButton title={title}>
          <Icons mode={mode} />
        </IconButton>
      </div>
    </fetcher.Form>
  );
}
