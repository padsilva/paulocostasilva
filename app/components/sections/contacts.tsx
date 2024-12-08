import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { GitHubIcon, LinkedIn, Mail } from "~/components/icons";
import { Typography } from "~/components/typography";

const contactMethods = [
  {
    title: "Email",
    value: "mailto:pauloalexandreduartesilva@gmail.com",
    icon: Mail,
    description: "email_description",
  },
  {
    title: "GitHub",
    value: "https://github.com/padsilva",
    icon: GitHubIcon,
    description: "github_description",
  },
  {
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/paulocostasilva/",
    icon: LinkedIn,
    description: "linkedin_description",
  },
];

const ContactCard = ({
  method,
  index,
}: {
  method: (typeof contactMethods)[0];
  index: number;
}) => {
  const { t } = useTranslation();
  const Icon = method.icon;

  return (
    <motion.a
      href={method.value}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 text-black dark:text-white">
          <Icon size={24} />
        </div>
        <div>
          <Typography className="font-semibold" size="body1">
            {method.title}
          </Typography>
          <Typography className="text-gray-600 dark:text-gray-300" size="body3">
            {t(method.description)}
          </Typography>
        </div>
      </div>
    </motion.a>
  );
};

export function Contacts() {
  const { t } = useTranslation();

  return (
    <section className="w-full" id="contacts">
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Typography className="capitalize mb-4" size="h2">
            {t("contacts")}
          </Typography>
          <Typography size="body2" variant="secondary">
            {t("contacts_description")}
          </Typography>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          {contactMethods.map((method, index) => (
            <ContactCard key={method.title} method={method} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
