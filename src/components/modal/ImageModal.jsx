import React from "react";
import iconClose from "../../assets/icon-close.svg";
import iconNext from "../../assets/icon-next.svg";
import iconPrev from "../../assets/icon-previous.svg";
import { imageData } from "../../data/ImageData";

const ImageModal = ({
  selectedImage,
  setIsModalOpen,
  handleSelectImage,
  imageIndex,
  handleNextImage,
  handlePrevImage,
}) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-black bg-opacity-70  fixed inset-0 flex justify-center items-center">
      <div className="translate-y-[-10px]">
        <div className="flex justify-end items-end mb-3">
          <img
            onClick={handleCloseModal}
            src={iconClose}
            className="w-[1.2rem] h-[1.2rem] cursor-pointer"
          />
        </div>
        <div className="relative">
          <img
            className="w-[27rem] h-[26rem] object-cover rounded-xl"
            src={selectedImage}
          />
          <div
            onClick={handlePrevImage}
            className="cursor-pointer bg-white rounded-full w-[45px] h-[45px] absolute left-[-25px] top-[185px] flex items-center justify-center"
          >
            <img className="mr-1" src={iconPrev} />
          </div>
          <div
            onClick={handleNextImage}
            className="cursor-pointer bg-white rounded-full w-[45px] h-[45px] absolute right-[-25px] top-[185px] flex items-center justify-center"
          >
            <img className="ml-1" src={iconNext} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-7">
          {imageData.map((img, index) => (
            <div className="relative" key={index}>
              <img
                onClick={() => handleSelectImage(index)}
                className={`rounded-lg h-[4.4rem] w-[4.3rem] object-cover cursor-pointer hover:opacity-50 ${
                  index === imageIndex && "border-2 border-orange z-50"
                }`}
                src={img.thumbnail}
              />
              {index === imageIndex && (
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 rounded-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
