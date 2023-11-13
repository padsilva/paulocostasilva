import { DownloadIcon } from "./icons";
import { Typography } from "./typography";
import { Button } from "./button";
import { NavLink } from "./navlink";
import { DarkModeToggle } from "./dark-mode-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 px-20 py-4 border-b-[1px] dark:border-b-[#272D2B] bg-slate-50 dark:bg-slate-950">
      <nav className="flex justify-between items-center">
        <NavLink to="">
          <Typography size="h3" className="font-bold">
            Paulo Silva
          </Typography>
        </NavLink>
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
          <Button startIcon={<DownloadIcon />} label="CV" />
          <div className="block">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
