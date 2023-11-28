import type { ReactElement } from "react";
import clsx from "clsx";

import { Typography } from "./typography";
import { Transition } from "./transition";

export function Button({
  children,
  endIcon,
  label,
  startIcon,
  title,
  transition = false,
  variant = "primary",
}: {
  children?: React.ReactNode | React.ReactNode[];
  endIcon?: ReactElement;
  label?: string;
  startIcon?: ReactElement;
  title?: string;
  transition?: boolean;
  variant?: "primary" | "outline";
}) {
  const isOutline = variant === "outline";

  return (
    <button
      title={title || label}
      type="submit"
      className={clsx(
        "flex items-center justify-center gap-2 w-full rounded-xl border-2 py-2 overflow-hidden",
        isOutline
          ? "border-slate-500 text:black hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 dark:text-white"
          : "lg:px-4 lg:py-1.5 lg:border-none border-transparent text-white bg-slate-900 hover:bg-slate-700 active:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-300 dark:active:bg-slate-200 dark:text-black"
      )}
    >
      {startIcon && transition ? (
        <Transition
          icon={startIcon}
          variant={isOutline ? "primary" : "button"}
        />
      ) : (
        startIcon
      )}
      {children ? (
        <div className={`relative h-6 w-6`}>
          {transition ? (
            <Transition
              icon={startIcon}
              variant={isOutline ? "primary" : "button"}
            >
              {children}
            </Transition>
          ) : (
            children
          )}
        </div>
      ) : null}
      {label ? (
        transition ? (
          <Transition
            label={label}
            variant={isOutline ? "primary" : "button"}
            as="span"
            className="first-letter:capitalize"
          />
        ) : (
          <Typography
            size="body2"
            variant={isOutline ? "primary" : "button"}
            as="span"
            className="first-letter:capitalize"
          >
            {label}
          </Typography>
        )
      ) : null}
      {endIcon && transition ? (
        <Transition icon={endIcon} variant={isOutline ? "primary" : "button"} />
      ) : (
        endIcon
      )}
    </button>
  );
}
