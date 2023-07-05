import { memo, type FC } from "react";
// types
import type { NavProps } from "./nav.interface";

const Nav: FC<NavProps> = ({ links }) => (
  <nav className="flex-1">
    <ul className="flex lg:flex-row flex-col justify-center xl:gap-10 gap-6">
      {links.map(({ id, path, name }) => (
        <li key={id}>
          <a
            href={path}
            className="lg:text-sm text-md hover:text-rose-500 duration-300"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default memo(Nav);
