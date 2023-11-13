import { type LinkProps, useLocation, Link } from "@remix-run/react";
import clsx from "clsx";
import { ClientOnly } from "remix-utils/client-only";

export function NavLink({ children, to }: LinkProps) {
  const { hash } = useLocation();

  const animation =
    to === hash
      ? "after:w-full"
      : "after:w-0 hover:after:w-full after:transition-all after:duration-500";

  const common =
    "relative after:bg-black dark:after:bg-white after:absolute after:h-0.5 after:bottom-0 after:left-0";

  // This can only be rendered on the client-side, because we dont have access to location hash in the server-side
  return (
    <ClientOnly
      fallback={
        <Link
          className={clsx(
            common,
            "after:w-0 hover:after:w-full after:transition-all after:duration-500"
          )}
          to={to}
          children={children}
        />
      }
    >
      {() => (
        <Link className={clsx(common, animation)} to={to} children={children} />
      )}
    </ClientOnly>
  );
}
