import ImageComp from "../ImageComp/ImageComp";
import InfoComp from "../InfoComp/InfoComp";
import DescriptionComp from "../DescriptionComp/DescriptionComp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
import members from "../../assets/Data/Members";
import { useState } from "react";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };
const handleNavigateRandom=(num)=>{
setCurrentIndex(num)
}
  return (
    <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-1/2 max-w-[600px] bg-white rounded-md shadow flex-col justify-center items-center p-6 transition-all duration-300 ease-in-out hover:shadow-lg">
      <ImageComp img={members[currentIndex].image} />
      <InfoComp
        nameMember={members[currentIndex].name}
        work={members[currentIndex].profession}
      />
      <DescriptionComp info={members[currentIndex].description} />
      <div className="w-full flex justify-center items-center mt-3">
        <button onClick={handlePrev}>
          <FaChevronLeft className="text-indigo-800 cursor-pointer mr-3 hover:text-indigo-500 text-sm sm:text-lg" />
        </button>
        <button onClick={handleNext}>
          <FaChevronRight className="text-indigo-800 cursor-pointer ml-3 hover:text-indigo-500 text-sm sm:text-lg" />
        </button>
      </div>

      <SurpriseButton index={currentIndex} total={members.length} navigate={handleNavigateRandom} />
    </div>
  );
};

export default Card;
