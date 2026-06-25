import React from 'react';
import useInView from '../hooks/useInView';

export default function Customization() {
  const leftRef  = useInView();
  const rightRef = useInView();

  return (
    <div className='flex w-full h-full bg-lightBrown relative font-nunito'>
      <div className="flex flex-col gap-0 w-full h-full min-h-screen mx-auto md:flex-row">
        <div ref={leftRef} className="anim-slide-left w-full h-full md:w-1/2 overflow-hidden">
          <img src="assets/998.png" alt="Custom tailoring" className='w-full h-full object-cover transition-transform duration-700 hover:scale-105' />
        </div>
        <div ref={rightRef} className="anim-slide-right flex flex-col text-lightGray gap-5 w-full text-[17px] my-auto px-6 py-16 md:px-10 md:py-0 md:w-1/2">
          <div>
            <h2 className="text-blackText text-[12px] tracking-widest">CUSTOMIZATION</h2>
            <span className="flex gap-2 items-center">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-left text-wrap text-headerBlack font-rufina font-light w-10/12 md:text-5xl">Want to Order a Very Special Outfit?</span>
            </span>
          </div>
          <p className="text-[19px] font-normal">We offer bespoke tailoring according to your sketches, as well as working together with our designers.</p>
          <p className="text-[16px] font-normal text-[#747474]">Are your needs beyond our range? We also offer bespoke tailoring and can create an exclusive outfit for you! If you have an idea, we will gladly implement it or work on it together with you.</p>
          <button className="hover:bg-[#383838] hover:text-white text-[#383838] border-2 border-[#383838] bg-white py-3 px-6 font-semibold w-fit text-[16px] md:mt-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md transform">
            Request a Quote →
          </button>
        </div>
      </div>
    </div>
  )
}
