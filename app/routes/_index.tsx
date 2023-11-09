import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import {
  DownloadIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "~/components/icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Paulo da Costa Silva 💻" },
    { name: "description", content: "Welcome to my personal website!" },
  ];
};

export default function Index() {
  return (
    <>
      <header className="px-20 py-4 border-b-[1px]">
        <nav className="flex justify-between items-center">
          <Link className="font-sans text-3xl" to="/">
            Paulo Silva
          </Link>
          <div className="flex items-center gap-6">
            <Link to="#education">Education</Link>
            <Link to="#experience">Experience</Link>
            <Link to="#skills">Skills</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#contact">Contact</Link>
            <div>DARK MODE TOGGLE</div>
            <button className="flex gap-1 bg-black text-white rounded-xl px-4 py-1.5">
              <span>CV</span>
              <span>
                <DownloadIcon />
              </span>
            </button>
          </div>
        </nav>
      </header>
      <main>MAIN</main>
      <footer>FOOTER</footer>
    </>
  );
}
