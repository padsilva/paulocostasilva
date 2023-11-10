export function IconButton({
  children,
  title,
}: {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}) {
  return (
    <button
      title={title}
      type="submit"
      className={
        "flex items-center h-9 w-9 overflow-hidden border-slate-500 hover:border-slate-900 active:border-slate-800 text-black dark:hover:border-slate-100 dark:active:border-slate-200 dark:text-white rounded-full border-2 p-1"
      }
    >
      <div className="relative h-6 w-6">{children}</div>
    </button>
  );
}
