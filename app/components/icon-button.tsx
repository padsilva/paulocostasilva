import { type MouseEventHandler } from "react";
import clsx from "clsx";

export function IconButton({
  children,
  title,
  border = true,
  onClick,
  size = 6,
}: {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  border?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: number;
}) {
  return (
    <button
      title={title}
      type="submit"
      className={clsx(
        "flex items-center text-black dark:text-white",
        border
          ? "overflow-hidden border-slate-500 hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 rounded-full border-2 p-1"
          : ""
      )}
      onClick={onClick}
    >
      <div className={`relative h-${size} w-${size}`}>{children}</div>
    </button>
  );
}
