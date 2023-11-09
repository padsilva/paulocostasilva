import { clsx } from "clsx";
import * as React from "react";

type TitleProps = {
  variant?: "primary" | "secondary";
  as?: React.ElementType;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

const fontSize = {
  h1: "lg:text-6xl lg:leading-tight md:text-5xl md:font-bold md:tracking-tight text-4xl font-semibold tracking-normal",
  h2: "lg:text-4xl text-lg font-semibold tracking-tight",
  h3: "lg:text-3xl text-2xl font-semibold tracking-tight",
  subtitle: "md:text-xl text-lg",
  body1: "md:text-lg",
  body2: "text-base",
  body3: "text-sm",
};

const titleColors = {
  primary: "text-black dark:text-white",
  secondary: "text-gray-400 dark:text-slate-500",
};

export function Typography({
  variant = "primary",
  size,
  as,
  className,
  ...rest
}: TitleProps & { size: keyof typeof fontSize }) {
  const isParagraph =
    size === "body1" ||
    size === "body2" ||
    size === "body3" ||
    size === "subtitle";
  const Tag = as ?? (isParagraph ? "p" : size);
  return (
    <Tag
      className={clsx(fontSize[size], titleColors[variant], className)}
      {...rest}
    />
  );
}
