import React from 'react';
import useInView from '../hooks/useInView';

export default function Trendy() {
  const ref = useInView();

  return (
    <div style={{backgroundImage:'url(assets/trendy.png)'}} className='flex py-8 w-full h-full min-h-screen bg-cover bg-right md:bg-center bg-no-repeat relative font-nunito'>
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative flex flex-col gap-16 w-full h-full max-w-6xl m-auto md:flex-row">
        <div ref={ref} className="anim-fade-up flex flex-col text-lightGray gap-7 w-full text-[17px] px-6 py-16 md:py-24 md:w-1/2">
          <div>
            <h2 className="text-blackText text-[12px] tracking-widest bg-white/80 w-fit px-2 py-0.5">TRENDY</h2>
            <span className="flex gap-2 items-center mt-2">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-2xl text-left text-wrap text-headerBlack font-rufina font-bold w-10/12 md:text-7xl leading-tight">SPRING COLLECTION</span>
            </span>
          </div>
          <p className="text-[17px] text-[#595959] bg-white/80 px-3 py-2 w-fit">New arrivals — fresh, bold, and ready to wear.</p>
          <div className="flex gap-4 flex-col md:flex-row">
            <button className="bg-[#383838] hover:bg-browny text-white py-3 px-6 font-semibold text-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg transform w-fit">
              Learn More →
            </button>
            <button className="hover:bg-[#383838] hover:text-white text-[#383838] border-2 border-[#383838] bg-white py-3 px-6 font-semibold text-[16px] transition-all duration-300 w-fit">
              Shop Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
