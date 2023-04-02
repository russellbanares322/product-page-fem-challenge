import React, { useState, useContext } from "react";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.png";
import ProductContext from "../../context/ProductContext";
import productImg from "../../assets/image-product-1-thumbnail.jpg";
import {
  NavCloseIcon,
  MenuIcon,
  NavCartIcon,
  DeleteIcon,
} from "../../assets/icons/Icons";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {
    quantity,
    isAddedToCart,
    setIsAddedToCart,
    setQuantity,
    isCartOpen,
    setIsCartOpen,
  } = useContext(ProductContext);
  const productPrice = 125;
  const multipliedProductPrice = 125 * quantity;

  const navListStyle =
    "cursor-pointer text-dark-grayish-blue hover:text-black relative hover:before:absolute hover:before:bottom-[-33px] hover:before:h-1 hover:before:w-[100%] hover:before:bg-orange hover:before:rounded-xl";

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleToggleCart = (e) => {
    e.stopPropagation();
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveToCart = () => {
    setIsAddedToCart(false);
    setQuantity(0);
  };

  return (
    <nav className="mb-0 md:mb-20 flex justify-between items-center py-6 md:border-b md:border-grayish-blue px-4 md:px-0 md:border-opacity-50">
      <div className="flex justify-center items-center">
        <div className="cursor-pointer mr-3">
          {!isNavOpen && (
            <MenuIcon
              handleToggleNav={handleToggleNav}
              menuStyle="visible md:hidden w-4 h-5 fill-current text-dark-grayish-blue cursor-pointer"
            />
          )}
          {!!isNavOpen && (
            <NavCloseIcon
              handleToggleNav={handleToggleNav}
              navCloseStyle="visible md:hidden w-4 h-5 fill-current text-dark-grayish-blue cursor-pointer"
            />
          )}
        </div>
        <img className="mr-14" src={logo} />
      </div>
      <ul className="hidden md:text-base md:visible md:flex md:justify-center md:items-center mr-auto md:gap-5 text-base">
        <li className={navListStyle}>Collections</li>
        <li className={navListStyle}>Men</li>
        <li className={navListStyle}>Women</li>
        <li className={navListStyle}>About</li>
        <li className={navListStyle}>Contact</li>
      </ul>
      <div className="flex justify-center items-center">
        <div
          tabIndex={0}
          onBlur={() => setIsCartOpen(false)}
          className="relative"
        >
          <NavCartIcon
            handleToggleCart={handleToggleCart}
            navCartStyle="fill-current text-dark-grayish-blue hover:text-black cursor-pointer"
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
            <div
              className={`absolute top-10 ${
                !isAddedToCart && quantity === 0 ? "h-[11rem]" : "h-auto"
              }  w-[18rem] shadow-2xl right-[-5px] md:right-[-100px] bg-white rounded-md`}
            >
              <p className="font-bold border-b border-grayish-blue p-3 border-opacity-50">
                Cart
              </p>
              <div
                className={`${
                  !isAddedToCart && quantity === 0 ? "h-[11rem]" : "h-auto"
                }`}
              >
                {!isAddedToCart && quantity === 0 && (
                  <p className="flex justify-center items-center mt-14 font-bold text-dark-grayish-blue text-sm">
                    Your cart is empty.
                  </p>
                )}
                {!!isAddedToCart && quantity >= 1 && (
                  <div className="py-4 px-3">
                    <div className="flex justify-evenly items-center">
                      <img
                        className=" rounded-md  object-cover h-12 w-12"
                        src={productImg}
                      />
                      <div>
                        <p className="text-sm text-dark-grayish-blue">
                          Fall Limited Edition Sneakers
                        </p>
                        <div className="flex justify-start items-center gap-2">
                          <p>${productPrice.toFixed(2)}</p>
                          <p>x {quantity}</p>
                          <p className="font-bold">
                            ${multipliedProductPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <DeleteIcon
                        handleRemoveToCart={handleRemoveToCart}
                        iconStyle="w-3 h-4 cursor-pointer"
                      />
                    </div>
                    <button className="w-full bg-orange text-white my-4 h-11 rounded-md">
                      Checkout
                    </button>
                  </div>
                )}
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
