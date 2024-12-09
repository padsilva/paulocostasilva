import clsx from "clsx";
import { useEffect, useState } from "react";

import { MoveUp } from "./icons";

import { useSidebar } from "~/hooks/use-sidebar";

export const ScrollTop = () => {
  const { isSidebarOpen } = useSidebar();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    !isSidebarOpen && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={clsx(
          "fixed bottom-8 right-8 p-3 rounded-full text-white bg-slate-900 hover:bg-slate-700 active:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-300 dark:active:bg-slate-200 dark:text-black shadow-lg transition-all duration-300 transform hover:scale-110 z-50",
          {
            "translate-y-0 opacity-100": isScrolled,
            "translate-y-20 opacity-0": !isScrolled,
          },
        )}
        aria-label="Back to top"
      >
        <MoveUp />
      </button>
    )
  );
};
