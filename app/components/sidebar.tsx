import { useEffect } from "react";
import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "./button";
import { DarkModeToggle } from "./toggles/dark-mode";
import { DownloadIcon, GitHubIcon } from "./icons";
import { LanguageToggle } from "./toggles/language";
import { MENU_LIST } from "./navbar";
import { NavLink } from "./navlink";
import { Typography } from "./typography";
import { useSidebar } from "~/hooks/use-sidebar";
import useScrollbarSize from "~/utils/scrollbar-size";

const menuItemVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const actionButtonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export function Sidebar() {
  const { t } = useTranslation();
  const { width } = useScrollbarSize();
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  useEffect(() => {
    if (isSidebarOpen && width) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add(`pr-[${width}px]`);
      document.body.classList.remove("overflow-y-scroll");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove(`pr-[${width}px]`);
      document.body.classList.add("overflow-y-scroll");
    }
  }, [isSidebarOpen, width]);

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="lg:hidden fixed z-20 pt-[89px] h-full w-full flex flex-col bg-white dark:bg-black"
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-800 border-b border-b-gray-200 dark:border-b-gray-800">
            {MENU_LIST.map((entry, index) => (
              <motion.div
                key={entry}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <NavLink
                  className="md:px-16 px-8 flex flex-col gap-4 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  to={`#${entry}`}
                  onClick={() => toggleSidebar(false)}
                >
                  <Typography size="body2">{t(entry)}</Typography>
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="container mx-auto py-6 md:px-48 sm:px-24 px-12 flex flex-col gap-4">
            {[
              {
                component: (
                  <a
                    href="/CV_PauloCostaSilva_EN.pdf"
                    download="CV_PauloCostaSilva_EN.pdf"
                  >
                    <Button
                      isMobile
                      label={t("download_cv")}
                      startIcon={<DownloadIcon />}
                      title={t("click_download_cv")}
                    />
                  </a>
                ),
                name: "cv",
              },
              { component: <DarkModeToggle />, name: "dark-mode" },
              { component: <LanguageToggle />, name: "lang" },
              {
                component: (
                  <Link
                    title={t("github_link")}
                    to="https://github.com/padsilva/paulocostasilva"
                    target="_blank"
                  >
                    <Button
                      isMobile
                      label={t("repository")}
                      startIcon={<GitHubIcon size={24} />}
                      title={t("github_link")}
                      variant="outline"
                    />
                  </Link>
                ),
                name: "github",
              },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                variants={actionButtonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {item.component}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
