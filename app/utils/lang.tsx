import { useFetcher } from "@remix-run/react";
import { parse } from "@conform-to/zod";
import { z } from "zod";

import { useRequestInfo } from "./request-info";

export const LANG_FETCHER_KEY = "LANG_FETCHER";

export const LangFormSchema = z.object({
  lang: z.enum(["en", "pt"]),
});

/**
 * If the user's changing their language preference, this will return the
 * value it's being changed to.
 */
export function useOptimisticLangMode() {
  const langFetcher = useFetcher({ key: LANG_FETCHER_KEY });

  if (langFetcher.formData) {
    const submission = parse(langFetcher.formData, {
      schema: LangFormSchema,
    });
    return submission.value?.lang;
  }
}

/**
 * @returns the user's language preference
 */
export function useLang() {
  const requestInfo = useRequestInfo();
  const optimisticMode = useOptimisticLangMode();
  return optimisticMode || requestInfo.userPrefs.lang || "en";
}
