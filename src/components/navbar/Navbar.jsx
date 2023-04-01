import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import menu from "../../assets/icon-menu.svg";
import close from "../../assets/icon-close.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navListStyle =
    "cursor-pointer hover:text-black relative hover:before:absolute hover:before:bottom-[-33px] hover:before:h-1 hover:before:w-[100%] hover:before:bg-orange hover:before:rounded-xl";

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="mb-0 md:mb-20 flex justify-between items-center py-6 md:border-b md:border-grayish-blue px-4 md:px-0">
      <div className="flex justify-center items-center">
        <div className="cursor-pointer mr-3">
          {!isNavOpen && (
            <img
              onClick={handleToggleNav}
              className="visible md:hidden w-4"
              src={menu}
            />
          )}
          {!!isNavOpen && (
            <img
              onClick={handleToggleNav}
              className="visible md:hidden w-4"
              src={close}
            />
          )}
        </div>
        <img className="mr-14" src={logo} />
      </div>
      <ul className="hidden md:text-base md:visible md:flex md:justify-center md:items-center mr-auto md:gap-5 text-base text-dark-grayish-blue">
        <li className={navListStyle}>Collections</li>
        <li className={navListStyle}>Men</li>
        <li className={navListStyle}>Women</li>
        <li className={navListStyle}>About</li>
        <li className={navListStyle}>Contact</li>
      </ul>
      <div className="flex justify-center items-center">
        <img className="fill-orange cursor-pointer" src={cart} />
        <img
          className="ml-4 md:ml-10 w-[1.5rem] h-[1.5rem] md:w-[2.5rem] md:h-[2.5rem] cursor-pointer hover:ring-orange hover:ring-2 rounded-full object-cover"
          src={avatar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
