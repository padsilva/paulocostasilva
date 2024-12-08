import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Construction } from "~/components/icons";
import { Typography } from "~/components/typography";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section className="w-full" id="projects">
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography className="capitalize" size="h2">
              {t("projects")}
            </Typography>
          </motion.div>
        </div>

        <div className="text-center">
          <div className="max-w-md mx-auto flex flex-col items-center">
            <motion.div
              className="mb-6 text-black dark:text-white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            >
              <motion.div
                animate={{
                  rotateZ: [0, 10, -10, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Construction size={64} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
            >
              <Typography className="mb-4" size="h3">
                {t("coming_soon")}
              </Typography>
              <Typography className="mb-12" size="body2" variant="secondary">
                {t("projects_under_construction")}
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
