import { memo, type FC } from "react";
// constants
import { LINK_GROUPS } from "../../constants/link-groups.constants";
const Footer: FC = () => (
  <footer className="container flex flex-row xl:gap-40 lg:gap-20 gap-10 flex-wrap mx-auto px-10 py-20">
    {LINK_GROUPS.map(({ title, links }) => (
      <div key={title} className="flex flex-col gap-6">
        <span className="text-lg font-bold">{title}</span>
        <ul className="flex flex-col gap-2">
          {links.map(({ id, name, path }) => (
            <li key={id}>
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </footer>
);

export default memo(Footer);
