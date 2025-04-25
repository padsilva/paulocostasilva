import { Link, type LinkProps } from "react-router";

import { CodeIcon } from "./icons";
import { Typography } from "./typography";

export const Logo = ({ onClick }: Partial<LinkProps>) => (
  <Link to="" onClick={onClick}>
    <div className="flex items-center justify-center gap-2">
      <div className="text-black dark:text-white">
        <CodeIcon />
      </div>
      <div className="flex flex-col items-center select-none">
        <Typography size="h2">Paulo</Typography>
        <div className="flex items-center gap-0.5 self-stretch">
          <hr className="grow border-t-2 border-black dark:border-white" />
          <Typography size="caption" className="shrink">
            Costa Silva
          </Typography>
          <hr className="grow border-t-2 border-black dark:border-white" />
        </div>
      </div>
    </div>
  </Link>
);
