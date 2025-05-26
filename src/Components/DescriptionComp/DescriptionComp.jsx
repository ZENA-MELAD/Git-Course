import React from "react";

const DescriptionComp = ({info}) => {
  return (
    <div className="mt-3 flex justify-center items-center">
      <p className=" text-center  text-gray-600 text-sm  md:text-base">
    {info}
      </p>
    </div>
  );
};

export default DescriptionComp;
