import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";

import { Transition } from "~/components/transition";
import { GitHubIcon, LinkedIn, Mail } from "~/components/icons";
import { Button } from "~/components/button";

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

export function Contacts() {
  const { t } = useTranslation();

  return (
    <section className="w-full" id="contact">
      <div className="flex flex-col">
        <div className="mb-12">
          <Transition
            className="capitalize mb-4"
            label={t("contacts")}
            size="h2"
          />
          <Transition label={t("contacts_description")} variant="secondary" />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 justify-items-center mb-12">
          {contactMethods.map((method) => (
            <Link key={method.title} to={method.value} target="_blank">
              <Button startIcon={method.icon()} label={method.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
