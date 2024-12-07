import type { ReactNode, MouseEventHandler } from "react";

interface IconButtonProps {
  children: ReactNode | ReactNode[];
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  title,
  onClick,
}) => (
  <button
    title={title}
    type="submit"
    className="flex items-center text-black dark:text-white overflow-hidden border-slate-500 hover:border-slate-900 active:border-slate-800 dark:hover:border-slate-100 dark:active:border-slate-200 rounded-full border-2 p-1 ml-auto transform transition-all duration-300 hover:scale-105 group"
    onClick={onClick}
  >
    <div className="relative h-6 w-6 group-hover:scale-105">{children}</div>
  </button>
);
