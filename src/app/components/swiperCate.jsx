import React from 'react'
import { HiOutlineArrowCircleRight ,HiOutlineArrowCircleLeft} from "react-icons/hi";
const SwiperCate = () => {
  return (
    <>
      <div className="relative flex items-center group px-3 ">
         <div className='absolute  left-3 w-10 border border-gray-800 aspect-square flex group-hover:opacity-100 justify-center cursor-pointer align-middle text-center opacity-50 hover:opacity-100  rounded-full p-3  bg-gray-300 text-black z-50'><HiOutlineArrowCircleLeft className="text-lg"/></div>
        <div className='m-2 w-full h-full flex flex-row  overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide' id={"slider"}>
       <div className='m-2  relative min-w-[150px] md:min-w-[200px] aspect-square  bg-transparent rounded-md'>
        <img className=' bottom-0 absolute  w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2754/automotive.png" alt="" />
       </div>
       <div className='m-2  relative min-w-[150px] md:min-w-[200px] aspect-square  bg-transparent rounded-md'>
        <img className=' bottom-0 absolute  w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2754/for-winter.png" alt="" />
       </div>
       <div className='m-2  relative min-w-[150px] md:min-w-[200px] aspect-square  bg-transparent rounded-md'>
        <img className=' bottom-0 absolute  w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2754/home-kitchen.png" alt="" />
       </div>
       <div className='m-2  relative min-w-[150px] md:min-w-[200px] aspect-square  bg-transparent rounded-md'>
        <img className=' bottom-0 absolute  w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2754/electgronic.png" alt="" />
       </div>
       <div className='m-2  relative min-w-[150px] md:min-w-[200px] aspect-square  bg-transparent rounded-md'>
        <img className=' bottom-0 absolute  w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2754/beauty.png" alt="" />
       </div>
       <div className='m-2  relative min-w-[150px] md:min-w-[200px] aspect-square  bg-transparent rounded-md'>
        <img className=' bottom-0 absolute  w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2754/baby.png" alt="" />
       </div>
       <div className='m-2  relative min-w-[150px] md:min-w-[200px] aspect-square  bg-transparent rounded-md'>
        <img className=' bottom-0 absolute  w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2754/automotive.png" alt="" />
       </div>
  </div>
        <div className='absolute  right-0 w-10 border border-gray-800 aspect-square flex group-hover:opacity-100 justify-center cursor-pointer align-middle text-center opacity-50 hover:opacity-100  rounded-full p-3  bg-gray-300 text-black z-50'><HiOutlineArrowCircleRight className="text-lg"/></div>
      </div>
    </>
  )
}

export default SwiperCate
