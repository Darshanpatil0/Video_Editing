import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight } from "react-icons/fa";

const PROGRAMS = () => {
  const data = [
    {
      img: './img/colorwhell.png',
      Headers: 'Color Grading',
      paragrafe:
        'Enhance your videos visual quality with cinematic, professional color correction techniques.',
    },
    {
      img: './img/cut.png',
      Headers: 'Smooth Transitions',
      paragrafe:
        'Add seamless, visually appealing transitions that keep your video flowing effortlessly.',
    },
    {
      img: './img/motion.png',
      Headers: 'Motion Graphics',
      paragrafe:
        'Incorporate engaging animations to give your videos a dynamic, modern edge.',
    },
    {
      img: './img/sonud.png',
      Headers: 'Audio Enhancement',
      paragrafe:
        'Boost the clarity and quality of sound, ensuring a rich auditory experience for your audience.',
    },
  ];

  return (
    <div className="min-h-[70vh] programs w-full text-white bg-zinc-700" id="programs">
      {/* Section Title */}
      <div className="text48 text4 h-[10%] text-4xl md:text-5xl font-semibold gap-6 md:gap-20 pt-8 w-full flex items-center justify-center">
        <i>
          <p>EXPLORE OUR</p>
        </i>
        <i>
          <span>SERVICE</span>
        </i>
        <i>
          <p>TO SHAPE YOU</p>
        </i>
      </div>

      {/* Program Cards */}
      <div className="card p-4 max-w-full  flex mt-12  flex-wrap justify-center gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="cards2020 p-6 w-[240px] h-[280px] md:w-[300px] bg-[#808080] rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              className=" h-11  object-cover"
              src={item.img}
              alt={item.Headers}
            />
            <p className="text-xl mt-3 font-bold">{item.Headers}</p>
            <p className=" text-[18px]   mt-4 ">{item.paragrafe}</p>
            <div className="join mt-3 flex items-center gap-2">
              <Link to="Email" smooth={true} className="flex items-center gap-2 cursor-pointer">
                <p className="text-xl">Join Now</p>
                {/* <img
                  className="h-[20px] w-[20px] object-contain"
                  src="./img/rightArrow.png"
                  alt="Right Arrow"
                /> */}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PROGRAMS;
