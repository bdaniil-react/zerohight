import { memo, useState, useCallback, type FC } from "react";
// components
import Nav from "../nav";
import Button from "../button";
import BurgerMenu from "../burger-menu";
import LogoIcon from "../../assets/logo-icon";
// constants
import { LINKS } from "../../constants/links.constants";

const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = useCallback(
    () => setIsOpenMenu(!isOpenMenu),
    [isOpenMenu]
  );

  return (
    <header className="py-7">
      <div className="container box-border flex flex-row justify-between items-center xl:gap-28 gap-3 mx-auto px-4">
        <div className="z-20 lg:h-6 h-8">
          <LogoIcon />
        </div>
        <div className="hidden lg:block flex-1">
          <Nav links={LINKS} />
        </div>
        <div className="hidden flex-row justify-between lg:flex">
          <Button title="Sign In" />
          <Button title="Sign Up For Free" variant="filled" />
        </div>
        <BurgerMenu isOpen={isOpenMenu} onToggle={handleToggleMenu} />
      </div>
    </header>
  );
};

export default memo(Header);
