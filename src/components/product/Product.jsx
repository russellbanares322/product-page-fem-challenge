import React, { useState, useContext } from "react";
import { imageData } from "../../data/ImageData";
import ProductContext from "../../context/ProductContext";
import ImageModal from "../modal/ImageModal";
import {
  MinusIcon,
  PlusIcon,
  ButtonCartIcon,
  NextIcon,
  PreviousIcon,
} from "../../assets/icons/Icons";

const Product = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedImage = imageData[imageIndex].image;
  const { quantity, setQuantity, setIsAddedToCart, setIsCartOpen } =
    useContext(ProductContext);

  const handleSelectImage = (selectedImageIndex) => {
    setImageIndex(selectedImageIndex);
  };

  const handleNextImage = () => {
    const isLastSlide = imageIndex === imageData.length - 1;
    const newIndex = isLastSlide ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
  };

  const handlePrevImage = () => {
    const isFirstSlide = imageIndex === 0;
    const newIndex = isFirstSlide ? imageData.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setQuantity((prev) => prev + 1);
    setIsCartOpen(true);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    setIsAddedToCart(true);
    setIsCartOpen(true);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
    if (quantity <= 1) {
      setIsAddedToCart(false);
      setIsCartOpen(true);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center h-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="relative">
            <img
              onClick={handleOpenModal}
              className="hidden md:block md:rounded-md md:w-[23rem] md:h-[22rem] md:object-center md:object-cover cursor-pointer"
              src={selectedImage}
            />
            <img
              className="block md:hidden w-full h-[20rem] object-center object-cover"
              src={selectedImage}
            />
            <div
              onClick={handlePrevImage}
              className="visible md:hidden cursor-pointer bg-white rounded-full w-[38px] h-[38px] absolute left-[7px] top-[150px] flex items-center justify-center"
            >
              <PreviousIcon
                width="13"
                height="18"
                strokeColor="black"
                prevStyle="mr-1"
              />
            </div>
            <div
              onClick={handleNextImage}
              className="visible md:hidden cursor-pointer bg-white rounded-full w-[38px] h-[38px] absolute right-[7px] top-[150px] flex items-center justify-center"
            >
              <NextIcon
                width="13"
                height="18"
                strokeColor="black"
                nextStyle="ml-1"
              />
            </div>
          </div>
          <div className="hidden md:visible md:flex justify-center items-center gap-4">
            {imageData.map((img, index) => (
              <div className="relative" key={index}>
                <img
                  onClick={() => handleSelectImage(index)}
                  className={`rounded-md w-20 h-20 object-cover cursor-pointer hover:opacity-50 ${
                    index === imageIndex && "border-2 border-orange z-50"
                  }`}
                  src={img.thumbnail}
                />
                {index === imageIndex && (
                  <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 rounded-md"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="h-full w-full px-5 py-6 md:py-0 md:w-[23rem] md:px-0">
          <p className="text-orange font-bold mb-3 tracking-wider text-sm">
            SNEAKER COMPANY
          </p>
          <p className="text-black font-bold text-[2rem] md:text-[2.5rem] leading-[2.5rem] mb-6">
            Fall Limited Edition Sneakers
          </p>
          <p className="text-dark-grayish-blue mb-5 text-sm">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-black text-2xl font-bold mb-2">$125.00</p>
            <p className="bg-pale-orange text-orange font-bold px-2 rounded-md mr-auto text-sm">
              50%
            </p>
            <p className="visible md:hidden text-dark-grayish-blue text-sm">
              <strike>$250.00</strike>
            </p>
          </div>
          <p className="hidden md:visible text-dark-grayish-blue text-sm">
            <strike>$250.00</strike>
          </p>
          <div className="flex md:flex-nowrap flex-wrap  w-full justify-start items-center gap-3 h-[6rem] text-[0.9rem] font-bold">
            <div className="flex justify-between md:justify-between items-center md:w-60 w-full bg-light-grayish-blue mt-3 md:mt-0 rounded-lg">
              <button
                disabled={quantity === 0 ? true : false}
                onClick={handleDecreaseQuantity}
                className="w-12 h-12 flex justify-center items-center hover:opacity-75 pt-3 cursor-pointer "
              >
                <MinusIcon minusStyle="fill-current text-orange w-5 h-5" />
              </button>
              <p>{quantity}</p>
              <button
                onClick={handleIncreaseQuantity}
                className="w-12 h-12 flex justify-center items-center hover:opacity-75 pt-2 cursor-pointer "
              >
                <PlusIcon plusStyle="fill-current text-orange w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="hover:opacity-50 text-white text-center bg-orange w-full h-11 rounded-lg flex items-center justify-center gap-3"
            >
              <ButtonCartIcon buttonStyle="fill-current text-white" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
          selectedImage={selectedImage}
          setIsModalOpen={setIsModalOpen}
          handleSelectImage={handleSelectImage}
          imageIndex={imageIndex}
        />
      )}
    </>
  );
};

export default Product;
