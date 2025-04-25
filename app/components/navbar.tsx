import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { CloseIcon, DownloadIcon, GitHubIcon, MenuIcon } from "./icons";
import { Button } from "./button";
import { DarkModeToggle } from "./toggles/dark-mode";
import { IconButton } from "./icon-button";
import { LanguageToggle } from "./toggles/language";
import { Logo } from "./logo";
import { NavLink } from "./navlink";
import { Typography } from "./typography";

import { useSidebar } from "~/hooks/use-sidebar";
import useScrollbarSize from "~/utils/scrollbar-size";

export const MENU_LIST = ["about", "skills", "projects", "contacts"];

export function Navbar() {
  const { t } = useTranslation();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { width } = useScrollbarSize();

  const styles = `md:pl-16 pl-8 md:pr-[${64 + width}px] pr-[${32 + width}px]`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={clsx(
        "fixed w-full z-30 2xl:px-48 xl:px-36 py-4 flex justify-between items-center bg-slate-100/80 dark:bg-slate-900/80 border-b border-b-gray-200 dark:border-b-gray-800 backdrop-blur-xs",
        { "md:px-16 px-8": !isSidebarOpen || !width },
        { [styles]: isSidebarOpen && width },
      )}
    >
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Logo onClick={() => toggleSidebar(false)} />
      </motion.div>

      <div className="hidden lg:flex lg:items-center lg:gap-4">
        {MENU_LIST.map((entry, index) => (
          <motion.div
            key={entry}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink to={`#${entry}`}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="relative inline-block"
              >
                <Typography size="body2">{t(entry)}</Typography>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </NavLink>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/CV_PauloCostaSilva_EN.pdf"
            download="CV_PauloCostaSilva_EN.pdf"
          >
            <Button
              startIcon={<DownloadIcon />}
              label="CV"
              title={t("click_download_cv")}
            />
          </a>
        </motion.div>

        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <DarkModeToggle />
          <LanguageToggle />
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              title={t("github_link")}
              to="https://github.com/padsilva/paulocostasilva"
              target="_blank"
            >
              <div className="text-black dark:text-white active:text-slate-800 dark:active:text-slate-200 transform transition-all duration-300 group">
                <GitHubIcon />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.div className="lg:hidden" whileTap={{ scale: 0.9 }}>
        <IconButton
          title={t(isSidebarOpen ? "open_sidebar" : "close_sidebar")}
          onClick={() => toggleSidebar()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isSidebarOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </motion.div>
          </AnimatePresence>
        </IconButton>
      </motion.div>
    </motion.nav>
  );
}
