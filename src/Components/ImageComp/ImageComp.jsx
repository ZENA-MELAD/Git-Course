import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
const ImageComp = ({ img }) => {
  return (
    <div className="flex justify-center items-center relative">
      <div className=" w-32 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36  rounded-full bg-indigo-500"></div>
      <div className=" absolute top-0.5 mr-5">
        <img
          src={img}
          alt="image"
          className="w-32 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36  rounded-full object-cover"
        />
      </div>
      <div className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10   absolute top-2 mr-24 sm:mr-28 md:mr-32  rounded-full bg-indigo-500 flex justify-center items-center">
        <FaQuoteRight
          className=" text-sm sm:text-sm md:text-xl"
          color="white"
        />
      </div>
    </div>
  );
};

export default ImageComp;
