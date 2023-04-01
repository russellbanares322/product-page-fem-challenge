import React, { useState } from "react";
import { imageData } from "../../data/ImageData";
import iconMinus from "../../assets/icon-minus.svg";
import iconPlus from "../../assets/icon-plus.svg";
import iconCart from "../../assets/icon-cart.svg";

const Product = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const selectedImage = imageData[imageIndex].image;

  const handleSelectImage = (selectedImageIndex) => {
    setImageIndex(selectedImageIndex);
  };

  return (
    <div className="flex flex-wrap justify-evenly items-center h-full gap-16">
      <div className="flex flex-col justify-center items-center gap-5">
        <div>
          <img
            className="rounded-md w-[25rem] h-[24rem] object-cover"
            src={selectedImage}
          />
        </div>
        <div className="flex justify-center items-center gap-7">
          {imageData.map((img, index) => (
            <div key={index}>
              <img
                onClick={() => handleSelectImage(index)}
                className={`rounded-md w-20 h-20 object-cover cursor-pointer ${
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
            <button className="bg-light-grayish-blue w-12 h-12 flex justify-center items-center">
              <img src={iconMinus} />
            </button>
            <button className="bg-light-grayish-blue w-12 h-12">0</button>
            <button className="bg-light-grayish-blue w-12 h-12 flex justify-center items-center text-orange">
              <img src={iconPlus} />
            </button>
          </div>
          <button className="text-white bg-orange w-full h-12 rounded-md flex justify-center items-center gap-3">
            <img className="h-4 w-4 stroke-white" src={iconCart} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
