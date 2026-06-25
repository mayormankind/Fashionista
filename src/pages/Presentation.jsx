import React from 'react';
import useInView from '../hooks/useInView';

export default function Presentation() {
  const leftRef  = useInView();
  const rightRef = useInView();

  return (
    <div className='flex w-full h-full bg-lightBrown relative font-nunito'>
      <div className="flex flex-col w-full my-auto min-h-screen md:flex-row">
        <div ref={leftRef} className="anim-slide-left flex flex-col text-lightGray gap-5 w-full text-[17px] my-auto py-20 px-5 md:px-14 md:py-0 md:w-1/2">
          <div>
            <h2 className="text-blackText text-[12px] tracking-widest">PRESENTATION</h2>
            <span className="flex gap-2 items-center">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-left text-wrap text-headerBlack font-rufina font-light w-10/12 md:text-5xl">New Lookbook.</span>
            </span>
          </div>
          <p className="text-[19px] font-normal">Our new Street Chic collection is all about the street and preppy styles perfectly combined in our clothes.</p>
          <p className="text-[16px] font-normal mt-2 text-[#747474]">As we always say, fashion should be ready-to-wear, comfortable, and affordable. We have created this new collection for those who like mixing quite basic clothing with bright accents.</p>
          <button className="bg-[#383838] hover:bg-browny text-white py-3 px-6 font-semibold w-fit text-[16px] md:mt-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md transform">
            Shop Now →
          </button>
        </div>
        <div ref={rightRef} className="anim-slide-right w-full h-full md:w-1/2 overflow-hidden">
          <img src="assets/998.png" alt="New lookbook" className='w-full h-full object-cover transition-transform duration-700 hover:scale-105' />
        </div>
      </div>
    </div>
  )
}
