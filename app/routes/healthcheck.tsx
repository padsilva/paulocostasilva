import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async () => {
  return new Response("OK", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
