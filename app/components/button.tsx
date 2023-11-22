import type { ReactElement } from "react";
import clsx from "clsx";

import { Typography } from "./typography";

export function Button({
  label,
  endIcon,
  startIcon,
  title,
  variant = "primary",
}: {
  label: string;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  title?: string;
  variant?: "primary" | "outline";
}) {
  const isOutline = variant === "outline";

  return (
    <button
      title={title || label}
      type="submit"
      className={clsx(
        "flex items-center justify-center gap-2 w-full rounded-xl border-2 py-2",
        isOutline
          ? "border-slate-500 text:black hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 dark:text-white"
          : "lg:px-4 lg:py-1.5 lg:border-none border-transparent text-white bg-slate-900 hover:bg-slate-700 active:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-300 dark:active:bg-slate-200 dark:text-black"
      )}
    >
      {startIcon && <>{startIcon}</>}
      <Typography
        size="body2"
        variant={isOutline ? "primary" : "button"}
        as="span"
      >
        {label}
      </Typography>
      {endIcon && <>{endIcon}</>}
    </button>
  );
}
