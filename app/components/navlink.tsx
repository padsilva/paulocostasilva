import { Link, type LinkProps } from "@remix-run/react";
import clsx from "clsx";

export function NavLink({ children, className, onClick, to }: LinkProps) {
  return (
    <Link
      className={clsx(
        "capitalize lg:p-0 lg:hover:bg-inherit lg:dark:hover:bg-inherit lg:relative lg:after:bg-black lg:dark:after:bg-white lg:after:absolute lg:after:h-0.5 lg:after:bottom-0 lg:after:left-0 lg:after:w-0 lg:hover:after:w-full lg:after:transition-all lg:after:duration-500 p-6 hover:bg-slate-100 dark:hover:bg-slate-800",
        className
      )}
      to={to}
      onClick={onClick}
      children={children}
    />
  );
}
