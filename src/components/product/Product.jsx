import React, { useState, useContext } from "react";
import { imageData } from "../../data/ImageData";
import iconMinus from "../../assets/icon-minus.svg";
import iconPlus from "../../assets/icon-plus.svg";
import iconCart from "../../assets/icon-cart.svg";
import ProductContext from "../../context/ProductContext";

const Product = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const selectedImage = imageData[imageIndex].image;
  const { quantity, setQuantity, setIsAddedToCart } =
    useContext(ProductContext);

  const handleSelectImage = (selectedImageIndex) => {
    setImageIndex(selectedImageIndex);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setQuantity((prev) => prev + 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    if (quantity >= 1) {
      setIsAddedToCart(true);
    }
  };
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
    if (quantity <= 1) {
      setIsAddedToCart(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-evenly items-center h-full gap-16">
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <img
            className="rounded-md w-[23rem] h-[22rem] object-cover"
            src={selectedImage}
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          {imageData.map((img, index) => (
            <div className="relative" key={index}>
              <img
                onClick={() => handleSelectImage(index)}
                className={`rounded-md w-20 h-20 object-cover cursor-pointer hover:opacity-50 ${
                  index === imageIndex && "border-2 border-orange"
                }`}
                src={img.thumbnail}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-[27rem]">
        <p className="text-orange font-bold mb-3">SNEAKER COMPANY</p>
        <p className="text-black font-bold text-[2.5rem] leading-10 mb-5">
          Fall Limited Edition Sneakers
        </p>
        <p className="text-dark-grayish-blue mb-5">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-start items-center gap-4">
          <p className="text-black text-2xl font-bold mb-2">$125.00</p>
          <p className="bg-pale-orange text-orange font-bold px-2 rounded-md">
            50%
          </p>
        </div>
        <p className="text-dark-grayish-blue text-sm">
          <strike>$250.00</strike>
        </p>
        <div className="flex justify-start items-center gap-3 h-[6rem] text-[0.9rem] font-bold">
          <div className="flex justify-center items-center gap-2">
            <button
              disabled={quantity === 0 ? true : false}
              onClick={handleDecreaseQuantity}
              className="bg-light-grayish-blue w-12 h-12 flex justify-center items-center"
            >
              <img src={iconMinus} />
            </button>
            <button className="bg-light-grayish-blue w-12 h-12">
              {quantity}
            </button>
            <button
              onClick={handleIncreaseQuantity}
              className="bg-light-grayish-blue w-12 h-12 flex justify-center items-center text-orange"
            >
              <img src={iconPlus} />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="hover:opacity-50 text-white bg-orange w-full h-11 rounded-md flex justify-center items-center gap-3"
          >
            <img className="h-4 w-4 stroke-current text-white" src={iconCart} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
