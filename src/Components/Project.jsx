import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

// import required modules
import { EffectCards, Navigation } from 'swiper/modules';

export default function App() {

  const ProjectDara = [
    { src: "./Video/sample1.mp4" },
    { src: "./Video/video2.mp4" },
    { src: "./Video/video3.mp4" },
    // Add more videos as needed
  ];

  return (
    <>
      <div className="mane h-screen w-full bg-zinc-700 relative" id='Project'>
        
        {/* Blur effect only for desktop */}
        <div className="blur-overlay absolute top-[10%] left-[16%] w-[400px] h-[400px] bg-gradient-to-r from-orange-500 to-yellow-500 opacity-40 rounded-full filter blur-3xl hidden md:block"></div>
        <div className="blur-overlay absolute top-[40%] left-[56%] w-[400px] h-[400px] bg-gradient-to-r from-orange-500 to-yellow-500 opacity-40 rounded-full filter blur-3xl hidden md:block"></div>
        
        <div className="text4 video-text h-[10%] text-3xl md:text-5xl font-semibold gap-5 md:gap-20 pt-10 md:pt-14 w-full flex items-center justify-center flex-col md:flex-row">
          <i>
            <p className="animate-fade-in">EXPLORE OUR</p>
          </i>
          <i>
            <span className="animate-fade-in animation-delay-1">Project</span>
          </i>
          <i>
            <p className="animate-fade-in animation-delay-2">TO SHAPE YOU</p>
          </i>
        </div>

        <div className="contener h-full w-full flex items-center justify-center">
          <div className="div h-[80vh]  w-full md:w-[87%] rounded-2xl bg-[#27272a6e] flex items-center justify-center mb-11 ">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Navigation]} // Include the Navigation module
              className="mySwiper projectvideo2 w-full h-[220px] md:w-[700px] md:h-[420px]"
              navigation={true} // Enable navigation buttons
              allowTouchMove={false} // Disable swiping/dragging
              loop={true}
            >
              {ProjectDara.map((project, index) => (
                <SwiperSlide key={index} className='flex projectvideo items-center justify-center rounded-xl bg-zinc-900 p-6'>
                  <video className='rounded-xl w-full h-full' controls unmuted src={project.src}></video>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .text4 {
            font-size: 2.5rem;
            flex-direction: column;
            text-align: center;
          }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .animation-delay-1 {
          animation-delay: 0.5s;
        }
        .animation-delay-2 {
          animation-delay: 1s;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
