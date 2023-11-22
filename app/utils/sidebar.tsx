import { useFetcher } from "@remix-run/react";
import { parse } from "@conform-to/zod";
import { z } from "zod";

import { useRequestInfo } from "./request-info";

export const SIDEBAR_FETCHER_KEY = "SIDEBAR_FETCHER";

export const SidebarFormSchema = z.object({
  sidebar: z.enum(["true", "false"]),
});

/**
 * If the user's open/close the sidebar, this will return the
 * value it's being changed to.
 */
export function useOptimisticSidebarMode() {
  const sidebarFetcher = useFetcher({ key: SIDEBAR_FETCHER_KEY });

  if (sidebarFetcher.formData) {
    const submission = parse(sidebarFetcher.formData, {
      schema: SidebarFormSchema,
    });
    return submission.value?.sidebar;
  }
}

/**
 * @returns the sidebar open state
 */
export function useSidebar() {
  const requestInfo = useRequestInfo();
  const optimisticMode = useOptimisticSidebarMode();
  return optimisticMode || requestInfo.userPrefs.sidebar || "false";
}
