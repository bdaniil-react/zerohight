import { memo, type FC } from "react";
// components
import Nav from "../nav";
import Button from "../button";
import MenuIcon from "../../assets/menu-icon";
import CloseIcon from "../../assets/close-icon";
// constants
import { LINKS } from "../../constants/links.constants";
// types
import type { BurgerMenuProps } from "./burger-menu.interface";

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, onToggle }) => {
  const baseClass =
    "block lg:hidden z-10 inset-0 fixed py-24 w-full h-full bg-white duration-500";
  const closeClass = "translate-x-full opacity-0";

  return (
    <>
      <div
        className={
          "z-20 relative block lg:hidden fill-rose-500 h-8 w-8 cursor-pointer"
        }
        onClick={onToggle}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={`${baseClass} ${isOpen ? "" : closeClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-3">
            <Button title="Sign In" variant="outlined" isFullWidth />
            <Button title="Sign Up" variant="filled" isFullWidth />
          </div>
          <div className="my-10">
            <Nav links={LINKS} />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(BurgerMenu);
