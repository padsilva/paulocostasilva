import { Link, type LinkProps } from "@remix-run/react";

import { CodeIcon, DownloadIcon, GitHubIcon } from "./icons";
import { Typography } from "./typography";
import { Button } from "./button";
import { DarkModeToggle } from "./dark-mode-toggle";
import { LanguageToggle } from "./language-toggle";

function NavLink({ children, to }: LinkProps) {
  return (
    <Link
      className={
        "relative after:bg-black dark:after:bg-white after:absolute after:h-0.5 after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-500"
      }
      to={to}
      children={children}
    />
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 px-16 py-4 border-b-[1px] dark:border-b-[#272D2B] bg-slate-100 dark:bg-slate-900">
      <nav className="flex justify-between items-center">
        <Link to="">
          <div className="flex items-center justify-center gap-2">
            <div className="text-black dark:text-white">
              <CodeIcon size={48} />
            </div>
            <div className="flex flex-col items-center select-none">
              <Typography size="h2">Paulo</Typography>
              <div className="flex items-center gap-0.5 self-stretch">
                <hr className="flex-grow border-t-2 border-black dark:border-white" />
                <Typography size="caption" className="flex-shrink">
                  Costa Silva
                </Typography>
                <hr className="flex-grow border-t-2 border-black dark:border-white" />
              </div>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <NavLink to="#education">
            <Typography size="body2">Education</Typography>
          </NavLink>
          <NavLink to="#experience">
            <Typography size="body2">Experience</Typography>
          </NavLink>
          <NavLink to="#skills">
            <Typography size="body2">Skills</Typography>
          </NavLink>
          <NavLink to="#projects">
            <Typography size="body2">Projects</Typography>
          </NavLink>
          <NavLink to="#contact">
            <Typography size="body2">Contact</Typography>
          </NavLink>
          <Button
            startIcon={<DownloadIcon />}
            label="CV"
            title="Click to download the CV pdf file"
          />
          <div className="block">
            <DarkModeToggle />
          </div>
          <div className="block">
            <LanguageToggle />
          </div>
          <Link
            title="Click to open GitHub repository link"
            to="https://github.com/padsilva/paulocostasilva"
            target="_blank"
          >
            <div className="text-black dark:text-white active:text-slate-800 dark:active:text-slate-200">
              <GitHubIcon />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
