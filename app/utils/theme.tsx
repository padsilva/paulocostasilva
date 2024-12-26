import { useFetcher } from "react-router";
import { parseWithZod } from "@conform-to/zod";
import { z } from "zod";

import { useRequestInfo } from "./request-info";

export const THEME_FETCHER_KEY = "THEME_FETCHER";

export const ThemeFormSchema = z.object({
  theme: z.enum(["light", "dark"]),
});

/**
 * If the user's changing their theme mode preference, this will return the
 * value it's being changed to.
 */
export function useOptimisticThemeMode() {
  const themeFetcher = useFetcher({ key: THEME_FETCHER_KEY });

  if (themeFetcher.formData) {
    const submission = parseWithZod(themeFetcher.formData, {
      schema: ThemeFormSchema,
    });
    return submission.value?.theme;
  }
}

/**
 * @returns the user's theme preference
 */
export function useTheme() {
  const requestInfo = useRequestInfo();
  const optimisticMode = useOptimisticThemeMode();
  return optimisticMode ?? requestInfo.userPrefs.theme ?? "light";
}
