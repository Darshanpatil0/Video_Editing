import React from 'react'

const Fotter = () => {
  return (
    <>
      <div className='h-[20rem] w-full border-t-2 bg-zinc-700 flex items-center  justify-between relative'>
        <div className="contener h-full w-full flex flex-col items-center  pb-6 justify-center absolute inset-0 z-10">
          <div className="img flex gap-16 py-12 pb-16">
            <img className='h-[30px]' src="./img/github.png" alt="" />
            <img className='h-[30px]' src="./img/instagram.png" alt="" />
            <img className='h-[30px]' src="./img/linkedin.png" alt="" />
          </div>
          <div>
            <span className=' text-4xl'>

          DARSHANPATIL
            </span>
            <img className='h-[40px]' src="./img/logo.png" alt="" />
          </div>
        </div>

       <div className=" blur-2 blur h-[12rem] w-[26rem] rounded-full  bg-[#f48915]"></div>
       
       <div className=" blur-1 blur h-[12rem] w-[26rem] rounded-full  "></div>

      </div>
    </>
  )
}

export default Fotter