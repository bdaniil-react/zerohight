export type Link = {
  id: string;
  path: string;
  name: string;
};

export type LinkGroup = {
  title: string;
  links: Link[];
};
