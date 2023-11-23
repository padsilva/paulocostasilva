export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "medium" | "large";
}) {
  const pxs = size === "large" ? 480 : size === "medium" ? 240 : 96;
  return (
    <img
      src={`/assets/${name}.jpg`}
      alt={`${name} avatar`}
      className={`rounded-full`}
      height={pxs}
      width={pxs}
    />
  );
}
