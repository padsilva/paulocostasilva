import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";

import { TitleProps, Typography } from "./typography";
import { Transition } from "./transition";

interface ButtonProps {
  children?: ReactNode | ReactNode[];
  endIcon?: ReactElement;
  label?: string;
  startIcon?: ReactElement;
  title?: string;
  transition?: boolean;
  variant?: "primary" | "outline";
}

const StartIcon: React.FC<
  Pick<ButtonProps, "startIcon" | "transition"> & Pick<TitleProps, "variant">
> = ({ startIcon, transition, variant }) => (
  <div className="group-hover:scale-105">
    {startIcon && transition ? (
      <Transition icon={startIcon} transitionMobile variant={variant} />
    ) : (
      startIcon
    )}
  </div>
);

const Label: React.FC<
  Pick<ButtonProps, "label" | "transition"> & Pick<TitleProps, "variant">
> = ({ label, transition, variant }) => {
  if (!label) {
    return null;
  }

  return transition ? (
    <Transition
      as="span"
      className="first-letter:capitalize group-hover:scale-105"
      label={label}
      transitionMobile
      variant={variant}
    />
  ) : (
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
  Pick<ButtonProps, "endIcon" | "transition"> & Pick<TitleProps, "variant">
> = ({ endIcon, transition, variant }) => (
  <div className="group-hover:scale-105">
    {endIcon && transition ? (
      <Transition icon={endIcon} transitionMobile variant={variant} />
    ) : (
      endIcon
    )}
  </div>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  endIcon,
  label,
  startIcon,
  title,
  transition = false,
  variant = "primary",
}) => {
  const isOutline = variant === "outline";

  return (
    <button
      title={title ?? label}
      type="submit"
      className={clsx(
        "flex items-center justify-center gap-2 w-full rounded-xl border-2 py-2 overflow-hidden transform transition-all duration-300 hover:scale-105 group",
        isOutline
          ? "border-slate-500 text:black hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 dark:text-white"
          : "lg:px-4 lg:py-1.5 lg:border-none border-transparent text-white bg-slate-900 hover:bg-slate-700 active:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-300 dark:active:bg-slate-200 dark:text-black",
      )}
    >
      <StartIcon
        startIcon={startIcon}
        transition={transition}
        variant={isOutline ? "primary" : "button"}
      />

      {children ? (
        <div className="relative h-6 w-6">
          {transition ? (
            <Transition
              icon={startIcon}
              transitionMobile
              variant={isOutline ? "primary" : "button"}
            >
              {children}
            </Transition>
          ) : (
            children
          )}
        </div>
      ) : null}

      <Label
        label={label}
        transition={transition}
        variant={isOutline ? "primary" : "button"}
      />

      <EndIcon
        endIcon={endIcon}
        transition={transition}
        variant={isOutline ? "primary" : "button"}
      />
    </button>
  );
};
