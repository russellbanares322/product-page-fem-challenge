import React, { useState, useContext } from "react";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import menu from "../../assets/icon-menu.svg";
import close from "../../assets/icon-close.svg";
import ProductContext from "../../context/ProductContext";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { quantity } = useContext(ProductContext);

  const navListStyle =
    "cursor-pointer hover:text-black relative hover:before:absolute hover:before:bottom-[-33px] hover:before:h-1 hover:before:w-[100%] hover:before:bg-orange hover:before:rounded-xl";

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleToggleCart = (e) => {
    e.stopPropagation();
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="mb-0 md:mb-20 flex justify-between items-center py-6 md:border-b md:border-grayish-blue px-4 md:px-0 md:border-opacity-50">
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
        <div className="relative">
          <img
            onBlur={() => setIsCartOpen(false)}
            tabIndex={0}
            onClick={handleToggleCart}
            className="fill-orange cursor-pointer w-5 h-5"
            src={cart}
          />
          {quantity > 0 && (
            <p
              onClick={handleToggleCart}
              className="cursor-pointer absolute top-[-5px] right-[-8px] text-[0.6rem] bg-orange w-5 rounded-full h-3 text-center text-white"
            >
              {quantity}
            </p>
          )}
          {isCartOpen && (
            <div className="absolute top-10 h-[12rem] w-[18rem] shadow-2xl right-[-5px] md:right-[-100px] bg-white rounded-md">
              <p className="font-bold border-b border-grayish-blue p-3 border-opacity-50">
                Cart
              </p>
              <div>
                <p className="flex justify-center items-center mt-14 font-bold text-dark-grayish-blue text-sm">
                  Your cart is empty.
                </p>
              </div>
            </div>
          )}
        </div>
        <img
          className="ml-4 md:ml-10 w-[1.5rem] h-[1.5rem] md:w-[2.5rem] md:h-[2.5rem] cursor-pointer hover:ring-orange hover:ring-2 rounded-full object-cover"
          src={avatar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
