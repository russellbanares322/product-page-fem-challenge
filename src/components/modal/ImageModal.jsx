import React, { useState } from "react";
import { imageData } from "../../data/ImageData";
import {
  ModalCloseIcon,
  PreviousIcon,
  NextIcon,
} from "../../assets/icons/Icons";

const ImageModal = ({
  selectedImage,
  setIsModalOpen,
  handleSelectImage,
  imageIndex,
  handleNextImage,
  handlePrevImage,
}) => {
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);
  const orange = "hsl(26, 100%, 55%)";

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black bg-opacity-70  fixed inset-0 flex justify-center items-center">
      <div className="translate-y-[-10px]">
        <div className="flex justify-end items-end mb-3">
          <ModalCloseIcon
            handleCloseModal={handleCloseModal}
            closeIconStyle="fill-current text-white w-[1.1rem] h-[1.2rem] hover:text-orange cursor-pointer"
          />
        </div>
        <div className="relative">
          <img
            className="w-[27rem] h-[26rem] object-cover rounded-xl"
            src={selectedImage}
          />
          <div
            onMouseEnter={() => setIsPrevHovered(true)}
            onMouseLeave={() => setIsPrevHovered(false)}
            onClick={handlePrevImage}
            className="cursor-pointer bg-white rounded-full w-[45px] h-[45px] absolute left-[-25px] top-[185px] flex items-center justify-center"
          >
            <PreviousIcon
              strokeColor={isPrevHovered ? orange : "black"}
              prevStyle="mr-1"
              height="18"
              width="13"
            />
          </div>
          <div
            onMouseEnter={() => setIsNextHovered(true)}
            onMouseLeave={() => setIsNextHovered(false)}
            onClick={handleNextImage}
            className="cursor-pointer bg-white rounded-full w-[45px] h-[45px] absolute right-[-25px] top-[185px] flex items-center justify-center"
          >
            <NextIcon
              strokeColor={isNextHovered ? orange : "black"}
              nextStyle="ml-1"
              height="18"
              width="13"
            />
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
