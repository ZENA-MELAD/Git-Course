import React from "react";

const SurpriseButton = ({ index, total, navigate }) => {
  const handleNavigate = () => {
    let randomNum = index;
    if (total <= 1) return;
    while (randomNum === index) {
      randomNum = Math.floor(Math.random() * total);
    }
    navigate(randomNum);
  };
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <button
        className=" capitalize px-3 py-1 rounded-sm bg-indigo-200 text-indigo-500  text-sm shadow tracking-wider cursor-pointer duration-300 ease-in-out transition-all hover:bg-indigo-700 hover:text-indigo-200"
        onClick={handleNavigate}
      >
        surprise me
      </button>
    </div>
  );
};

export default SurpriseButton;
