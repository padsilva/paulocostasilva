import type { Config } from "tailwindcss";

const BODY_PAD_VALUES = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const NAVBAR_PAD_VALUES_MD = [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85];
const NAVBAR_PAD_VALUES = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  safelist: [
    ...BODY_PAD_VALUES,
    ...NAVBAR_PAD_VALUES_MD,
    ...NAVBAR_PAD_VALUES,
  ].flatMap((i) => [`md:pr-[${i}px]`, `pr-[${i}px]`]),
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      padding: Object.fromEntries(
        [...BODY_PAD_VALUES, ...NAVBAR_PAD_VALUES_MD, ...NAVBAR_PAD_VALUES].map(
          (i) => [`[${i}px]`, `${i}px`]
        )
      ),
    },
  },
  plugins: [],
} satisfies Config;
