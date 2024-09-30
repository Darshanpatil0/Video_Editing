import React, { useState } from "react";
import { testimonialsData } from "../Data/TesttiminilasDada";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const TLength = testimonialsData.length;

  return (
    <div className="bg-zinc-700 why2 text-white -mt-12 pt-24 flex flex-col md:flex-row p-8 h-[80%]" id="why">
      <div className="max-w-6xl gap testimonilas ml-6">
        <div className="flex flex-col md:flex-row items-center align gap-4 md:gap-[50vh] justify-between">
          {/* Left side: Testimonial Text */}
          <div className="right-tm text-center md:text-left">
            <div className="text-orange-500 text-tes text-md font-semibold mb-8 uppercase">
            reviews
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-tes mt-4 leading-tight md:leading-[90px] mb-5 uppercase">
              <span className="heading">What They</span>
              <br />
              Say About Us
            </h2>
            <motion.p 
              key={selected}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", duration: 2 }} 
              className="text-base meater-text md:text-lg leading-relaxed pararafe"
            >
              {testimonialsData[selected].review}
            </motion.p>
            <div className="text-[#f48915] text-tes font-bold m-4">
              <span>{testimonialsData[selected].name}</span>
              <span className="text-white "> - {testimonialsData[selected].status}</span>
            </div>
          </div>

          {/* Right side: Testimonial Image */}
          <div className="relative right-side left-16 mt-8 md:mt-0">
            <div className="w-[13rem] divside  h-[15rem] md:w-[17rem] md:h-[20rem] z-10 border-2 border-orange-500"></div>
            <motion.img
              key={selected}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", duration: 3 }}
              className="absolute p-2 md:p-4 z-20 top-2 left-2   w-[13rem] h-[15rem] md:w-[17rem] md:h-[20rem] object-cover"
              src={testimonialsData[selected].image}
              alt="Testimonial"
            />
            <div className="arrows  flex justify-center md:justify-start -ml-0 md:-ml-44 gap-4 text-xl font-semibold w-[40%] h-[10%] mt-4">
              <img
                onClick={() => {
                  selected === 0
                    ? setSelected(TLength - 1)
                    : setSelected((prev) => prev - 1);
                }}
                className="font-semibold arrowside text-[1px]"
                src="./img/leftArrow.png"
                alt="Left Arrow"
              />
              <img
                onClick={() => {
                  selected === TLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                className="text-sm arrowside w-14"
                src="./img/rightArrow.png"
                alt="Right Arrow"
              />
            </div>
            <div className="absolute divside bgkt -bottom-2 -right-0 top-6 w-[16rem] h-[18rem] transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
