import { useTranslation } from "react-i18next";

import { Transition } from "../transition";
import { GitHubIcon, LinkedIn, Mail } from "../icons";
import { Link } from "@remix-run/react";

const contactMethods = [
  {
    title: "Email",
    value: "mailto:pauloalexandreduartesilva@gmail.com",
    icon: () => <Mail />,
    bgColor: "bg-blue-50",
  },
  {
    title: "GitHub",
    value: "https://github.com/padsilva",
    icon: () => <GitHubIcon size={24} />,
    bgColor: "bg-gray-50",
  },
  {
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/paulocostasilva/",
    icon: () => <LinkedIn />,
    bgColor: "bg-blue-50",
  },
];

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className="w-full" id="contact">
      <div className="flex flex-col">
        <div className="mb-12">
          <Transition
            className="capitalize mb-4"
            label={t("contact")}
            size="h2"
          />
          <Transition label={t("contact_description")} variant="secondary" />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 justify-items-center mb-12">
          {contactMethods.map((method, index) => (
            <Link
              key={index}
              to={method.value}
              target="_blank"
              className="bg-slate-900 hover:bg-slate-700 active:bg-slate-800 dark:bg-slate-100 text-white dark:hover:bg-slate-300 dark:active:bg-slate-200 dark:text-black w-40 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="bg-inherit text-white dark:text-black group-hover:scale-110 transition-transform duration-300">
                  {method.icon()}
                </div>
                <Transition className="font-semibold" size="body2">
                  {method.title}
                </Transition>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
