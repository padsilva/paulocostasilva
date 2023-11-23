import { type MouseEventHandler } from "react";

export function IconButton({
  children,
  title,
  onClick,
}: {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      title={title}
      type="submit"
      className="flex items-center text-black dark:text-white overflow-hidden border-slate-500 hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 rounded-full border-2 p-1 ml-auto"
      onClick={onClick}
    >
      <div className={`relative h-6 w-6`}>{children}</div>
    </button>
  );
}
