import {
  type LoaderFunctionArgs,
  type LinksFunction,
  type MetaFunction,
} from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useChangeLanguage } from "remix-i18next/react";
import { useTranslation } from "react-i18next";

import stylesheet from "~/tailwind.css?url";

import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { ScrollTop } from "./components/scroll-top";
import { SidebarProvider } from "./hooks/use-sidebar";
import { getLang } from "./utils/lang.server";
import { getTheme } from "./utils/theme.server";
import { useLang } from "./utils/lang";
import { useTheme } from "./utils/theme";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const data = {
    requestInfo: {
      userPrefs: {
        lang: getLang(request),
        theme: getTheme(request),
      },
    },
  };

  return data;
}

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common",
};

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
  const { i18n } = useTranslation();
  const lang = useLang();
  const theme = useTheme();

  useChangeLanguage(lang);

  return (
    <html lang={lang} dir={i18n.dir()} className={`${theme} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-black transition duration-500 min-h-screen">
        <SidebarProvider>
          <Navbar />

          <Sidebar />

          <Outlet />

          <Footer />

          <ScrollTop />

          <ScrollRestoration />

          <Scripts />
        </SidebarProvider>
      </body>
    </html>
  );
}
