import { memo, type FC } from "react";
// types
import type { MainProps } from "./main.interface";

const Main: FC<MainProps> = ({ children }) => (
  <main className="z-0 relative flex-1">{children}</main>
);

export default memo(Main);
