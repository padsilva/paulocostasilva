import type { ReactElement, ReactNode } from "react";
import { clsx } from "clsx";

import { TitleProps, Typography } from "./typography";

interface ButtonProps {
  children?: ReactNode | ReactNode[];
  endIcon?: ReactElement;
  isMobile?: boolean;
  label?: string;
  startIcon?: ReactElement;
  title?: string;
  variant?: "primary" | "outline";
}

const StartIcon: React.FC<
  Pick<ButtonProps, "startIcon" | "isMobile"> & Pick<TitleProps, "variant">
> = ({ startIcon, isMobile }) => (
  <div className={clsx(!isMobile ? "group-hover:scale-105" : "")}>
    {startIcon}
  </div>
);

const Label: React.FC<
  Pick<ButtonProps, "label"> & Pick<TitleProps, "variant">
> = ({ label, variant }) => {
  if (!label) {
    return null;
  }

  return (
    <Typography
      size="body2"
      variant={variant}
      as="span"
      className="first-letter:capitalize group-hover:scale-105"
    >
      {label}
    </Typography>
  );
};

const EndIcon: React.FC<
  Pick<ButtonProps, "endIcon" | "isMobile"> & Pick<TitleProps, "variant">
> = ({ endIcon, isMobile }) => (
  <div className={clsx(!isMobile ? "group-hover:scale-105" : "")}>
    {endIcon}
  </div>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  endIcon,
  isMobile = false,
  label,
  startIcon,
  title,
  variant = "primary",
}) => {
  const isOutline = variant === "outline";

  return (
    <button
      title={title ?? label}
      type="submit"
      className={clsx(
        "flex items-center justify-center gap-2 w-full rounded-xl border-2 py-2 overflow-hidden",
        !isMobile
          ? "transform transition-all duration-300 hover:scale-105 group"
          : "",
        isOutline
          ? "border-slate-500 text:black hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 dark:text-white"
          : "lg:px-4 lg:py-1.5 lg:border-none border-transparent text-white bg-slate-900 hover:bg-slate-700 active:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-300 dark:active:bg-slate-200 dark:text-black",
      )}
    >
      <StartIcon
        isMobile={isMobile}
        startIcon={startIcon}
        variant={isOutline ? "primary" : "button"}
      />

      {children ? <div className="relative h-6 w-6">{children}</div> : null}

      <Label label={label} variant={isOutline ? "primary" : "button"} />

      <EndIcon
        endIcon={endIcon}
        isMobile={isMobile}
        variant={isOutline ? "primary" : "button"}
      />
    </button>
  );
};
