import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ImageComp from "../ImageComp/ImageComp";
import InfoComp from "../InfoComp/InfoComp";
import DescriptionComp from "../DescriptionComp/DescriptionComp";


const Card = () => {
  let a = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  return (
    <div className=" w-10/12 sm:w-4/5 md:w-3/4 lg:w-5/12 bg-white rounded-md shadow-md flex-col justify-center items-center  p-6">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        {a.map((item) => (
          <SwiperSlide key={item}>
           <ImageComp/>
           <InfoComp/>
           <DescriptionComp/>
           </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
