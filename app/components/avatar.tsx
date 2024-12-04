interface AvatarProps {
  name: string;
  size?: "small" | "medium" | "large";
  priority?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size = "small",
  priority = false,
}) => {
  const sizeToPxs = { large: 480, medium: 240, small: 96 };
  const pxs = sizeToPxs[size];

  return (
    <picture>
      <source
        srcSet={`
          /assets/profile/${name}-${pxs / 2}.avif ${pxs / 2}w,
          /assets/profile/${name}-${pxs}.avif ${pxs}w,
          /assets/profile/${name}-${pxs * 2}.avif ${pxs * 2}w
        `}
        type="image/avif"
      />
      <source
        srcSet={`
          /assets/profile/${name}-${pxs / 2}.webp ${pxs / 2}w,
          /assets/profile/${name}-${pxs}.webp ${pxs}w,
          /assets/profile/${name}-${pxs * 2}.webp ${pxs * 2}w
        `}
        type="image/webp"
      />
      <img
        src={`/assets/profile/${name}.jpg`}
        alt={`${name} avatar`}
        className="rounded-full"
        height={pxs}
        width={pxs}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        srcSet={`
          /assets/profile/${name}-${pxs / 2}.jpg ${pxs / 2}w,
          /assets/profile/${name}-${pxs}.jpg ${pxs}w,
          /assets/profile/${name}-${pxs * 2}.jpg ${pxs * 2}w
        `}
        sizes={`${pxs}px`}
      />
    </picture>
  );
};
