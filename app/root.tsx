import { cssBundleHref } from "@remix-run/css-bundle";
import {
  json,
  type DataFunctionArgs,
  type LinksFunction,
  type MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";
import { getTheme } from "./utils/theme.server";
import { Navbar } from "./components/navbar";
import { useTheme } from "./utils/theme";
import { Footer } from "./components/footer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export async function loader({ request }: DataFunctionArgs) {
  const data = {
    requestInfo: {
      userPrefs: {
        theme: getTheme(request),
      },
    },
  };

  return json(data);
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const requestInfo = data?.requestInfo;
  return [
    { viewport: "width=device-width,initial-scale=1,viewport-fit=cover" },
    {
      "theme-color": requestInfo?.userPrefs.theme === "dark" ? "#000" : "#FFF",
    },
    { title: "Paulo da Costa Silva" },
    { name: "description", content: "Welcome to my personal website!" },
  ];
};

export default function App() {
  const theme = useTheme();

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-black transition duration-500">
        <Navbar />

        <Outlet />

        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
