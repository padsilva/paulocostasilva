import { Typography } from "./typography";

export function Footer() {
  return (
    <footer className="flex items-center justify-center px-20 py-6 border-t-[1px] dark:border-t-[#272D2B] bg-slate-50 dark:bg-slate-950">
      <Typography size="body3">{`Copyright © Paulo Silva ${new Date().getFullYear()}.`}</Typography>
    </footer>
  );
}