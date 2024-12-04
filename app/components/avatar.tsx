interface AvatarProps {
  name: string;
  size?: "small" | "medium" | "large";
}

export const Avatar: React.FC<AvatarProps> = ({ name, size = "small" }) => {
  const sizeToPxs = { large: 480, medium: 240, small: 96 };
  const pxs = sizeToPxs[size];

  return (
    <img
      src={`/assets/${name}.jpg`}
      alt={`${name} avatar`}
      className={`rounded-full`}
      height={pxs}
      width={pxs}
    />
  );
};
