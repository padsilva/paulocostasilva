import { useRouteLoaderData } from "react-router";
import invariant from "tiny-invariant";

import type { loader } from "~/root";

/**
 * @returns the request info from the root loader
 */
export function useRequestInfo() {
  const data = useRouteLoaderData<typeof loader>("root");

  invariant(data?.requestInfo, "No requestInfo found in root loader");

  return data.requestInfo;
}
