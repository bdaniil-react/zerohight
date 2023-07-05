// types
import type { LinkGroup } from "../types/link.types";

export const LINK_GROUPS: LinkGroup[] = [
  {
    title: "Resources",
    links: [
      { id: "blog", name: "Blog", path: "/" },
      { id: "webinar", name: "Webinar", path: "/" },
      { id: "podcast", name: "Podcast", path: "/" },
      { id: "case", name: "Case Studies", path: "/" },
      { id: "showcase", name: "Showcase", path: "/" },
    ],
  },
  {
    title: "Company",
    links: [{ id: "careers", name: "Careers", path: "/" }],
  },
  {
    title: "Community",
    links: [
      { id: "slack", name: "Slack Community", path: "/" },
      { id: "help", name: "Help", path: "/" },
    ],
  },
  {
    title: "Contact",
    links: [
      { id: "request", name: "Request a demo", path: "/" },
      { id: "contact", name: "Contact us", path: "/" },
    ],
  },
];
