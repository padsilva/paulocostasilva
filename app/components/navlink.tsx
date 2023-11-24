import { Link, type LinkProps } from "@remix-run/react";

export function NavLink({ children, onClick, to }: LinkProps) {
  return (
    <Link
      className={
        "capitalize md:p-0 md:hover:bg-inherit md:relative md:after:bg-black md:dark:after:bg-white md:after:absolute md:after:h-0.5 md:after:bottom-0 md:after:left-0 md:after:w-0 md:hover:after:w-full md:after:transition-all md:after:duration-500 p-6 hover:bg-slate-100 dark:hover:bg-slate-800"
      }
      to={to}
      children={children}
      onClick={onClick}
    />
  );
}
