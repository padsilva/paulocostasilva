export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "medium" | "large";
}) {
  const pxs = size === "large" ? 120 : size === "medium" ? 60 : 24;
  return (
    <div className={`h-${pxs} w-${pxs}`}>
      <img
        src={`/assets/${name}.jpg`}
        alt={`${name} avatar`}
        className={`rounded-full object-cover`}
      />
    </div>
  );
}
