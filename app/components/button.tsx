import type { ReactElement } from "react";
import { Typography } from "./typography";

export function Button({
  label,
  endIcon,
  startIcon,
}: {
  label: string;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
}) {
  return (
    <button className="flex justify-center gap-2 rounded-xl px-4 py-1.5 text-white bg-slate-900 hover:bg-slate-700 active:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-300 dark:active:bg-slate-200 dark:text-black">
      {startIcon && <>{startIcon}</>}
      <Typography size="body2" variant="button" as="span">
        {label}
      </Typography>
      {endIcon && <>{endIcon}</>}
    </button>
  );
}
