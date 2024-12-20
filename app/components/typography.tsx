import { forwardRef, type ElementType, type ReactNode } from "react";
import { clsx } from "clsx";

export type TitleProps = {
  variant?: "primary" | "secondary" | "button";
  as?: ElementType;
  className?: string;
  id?: string;
  children: ReactNode;
};

const fontSize = {
  h1: "lg:text-6xl lg:leading-tight md:text-5xl md:font-bold md:tracking-tight text-4xl font-semibold tracking-normal",
  h2: "text-4xl font-semibold tracking-wider",
  h3: "lg:text-3xl text-2xl font-semibold tracking-tight",
  subtitle: "md:text-xl text-lg",
  body1: "md:text-lg",
  body2: "text-base",
  body3: "text-sm",
  caption: "text-xs font-semibold uppercase",
};

const titleColors = {
  primary: "text-black dark:text-white",
  secondary: "text-gray-500 dark:text-slate-400",
  button: "text-white dark:text-black",
};

export type TypographyProps = TitleProps & { size: keyof typeof fontSize };

export const Typography = forwardRef(function Typography(
  { variant = "primary", size, as, className, ...rest }: TypographyProps,
  ref,
) {
  const isParagraph =
    size === "body1" ||
    size === "body2" ||
    size === "body3" ||
    size === "caption" ||
    size === "subtitle";
  const Tag = as ?? (isParagraph ? "p" : size);
  return (
    <Tag
      ref={ref}
      className={clsx(fontSize[size], titleColors[variant], className)}
      {...rest}
    />
  );
});
