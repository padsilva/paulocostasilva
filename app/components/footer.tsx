import { Typography } from "./typography";

export function Footer() {
  return (
    <footer className="flex items-center justify-center px-20 py-6 bg-slate-100 dark:bg-slate-900 border-t border-t-gray-200 dark:border-t-gray-800">
      <Typography size="body3">{`Copyright © Paulo Silva ${new Date().getFullYear()}.`}</Typography>
    </footer>
  );
}
