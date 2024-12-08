import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Avatar } from "~/components/avatar";
import { Typography } from "~/components/typography";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-wrap" id="#">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 flex justify-center"
          >
            <Avatar size="medium" name="profile" priority />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-2/3 flex flex-col gap-6"
          >
            <div className="space-y-2">
              <Typography size="h1">{t("greetings")}</Typography>
              <Typography
                size="body1"
                variant="secondary"
                className="text-justify whitespace-pre-line"
              >
                {t("abstract")}
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
