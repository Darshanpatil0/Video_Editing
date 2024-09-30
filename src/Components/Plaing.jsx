import React from 'react';
import { Link } from 'react-scroll';  
const Plaing = () => {
  const planingdata = [
    { name1: "Basic transitions", playn: "BASIC PLAN" ,name2: "Basic cut and trim editing", name3: "Sync audio and video", price: "25", img: "./img/heartHealth.svg" },
    { name1: "Advanced editing (cut, transitions, audio sync)", playn: "PREMIUM PLAN", name2: "Color grading and visual enhancements", name3: "Up to 2 rounds of revisions", price: "30", img: "./img/plan1.png" },
    { name1: "Full professional video editing (includes motion graphics, transitions, and effects)", playn: "PRO PLAN" ,name2: "Sound design and audio mastering", name3: "Unlimited revisions and priority delivery", price: "45", img: "./img/money1.png" },
  ];

  return (
    <div className=' plan-main max-w-full bg-zinc-700  -mt-[180px] ' id='plan'>
      <div className="plans-container z-20">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
      </div>
      <div className="h1 play-text flex items-center justify-center z-30 mt-12 left-16 top-[290%] gap-10 font-bold text-5xl">
        <h3 className='heding'><i>READY TO START</i></h3>
        <h3><i>YOUR JOURNEY</i></h3>
        <h3 className='heding'><i>NOW WITH US</i></h3>
      </div>
      <div className="plan1212 px-28 p-4 align flex mb-12 gap-10 pt-12 relative z-30 items-center justify-center">
        {planingdata.map((plan, index) => (
          <div key={index} className="box h-auto w-[28%] py-12 p-5 bg-[#656565]">
            <img className='h-[50px]' src={plan.img} alt="" />
            <h4 className='font-bold py-6'>{plan.playn}</h4>
            <h3 className='text-5xl font-bold'>${plan.price}</h3>
            <div className="texttick mt-7">
              <div className="textcontener mt-5 gap-4 flex">
                <img className='h-[15px] mt-1' src="./img/whiteTick.png" alt="" />
                <span>{plan.name1}</span>
              </div>
              <div className="textcontener mt-5 gap-4 flex">
                <img className='h-[15px] mt-1' src="./img/whiteTick.png" alt="" />
                <span>{plan.name2}</span>
              </div>
              <div className="textcontener mt-5 gap-4 flex">
                <img className='h-[15px] mt-1' src="./img/whiteTick.png" alt="" />
                <span>{plan.name3}</span>
              </div>
            </div>
            <Link
            to='Email'
            smooth={true}
            className="pimg flex mt-12 ml-4 gap-4 cursor-pointer">
              <p>See more benefits</p>
              <img className='h-[22px] mt-[1px]' src="./img/rightArrow.png" alt="" />
            </Link>
            <div className='h-full w-full pt-12'>

            <Link to='Email' smooth={true} className=' px-8 ml-16 font-semibold py-[16px] bg-white text-black  mt-8   '>Join Now</Link>
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
  );
}

export default Plaing;
