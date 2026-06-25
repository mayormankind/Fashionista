import React from 'react';
import useInView from '../hooks/useInView';

export default function Services() {
  const ref = useInView();

  return (
    <div style={{backgroundImage:'url(assets/Frame1.jpg)'}} className='bg-white w-full h-full py-16 md:py-24 bg-cover bg-no-repeat relative'>
        <div className="flex flex-col gap-16 w-full h-full max-w-6xl mx-auto md:flex-row">
            <div className="hidden gap-4 text-lightGray w-full md:flex md:w-1/2"></div>
            <div ref={ref} className="anim-slide-right flex flex-col text-lightGray gap-5 w-full text-[17px] px-6 md:px-3 md:w-1/2 bg-white/90 backdrop-blur-sm p-8 md:p-10">
                <div>
                    <h2 className="text-blackText text-[12px] tracking-widest">WHY CHOOSE US</h2>
                    <span className="flex gap-2 items-center">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-left text-wrap text-headerBlack font-light w-10/12 font-rufina md:text-5xl">Things You'll Love About Jolly House.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">We create each outfit for you with great love and care.</p>
                <div className="flex flex-col gap-4 text-[17px]">
                    <span className='text-[22px] font-semibold'><span className='text-browny mr-2'>—</span><span className='text-headerBlack'>Jolly brand is:</span></span>
                    <span className='flex items-start gap-3'><img src="assets/mark1.svg" className='w-[17px] mt-1 flex-shrink-0' alt="" /><span>Capsule collections you can wear on any occasion;</span></span>
                    <span className='flex items-start gap-3'><img src="assets/mark1.svg" className='w-[17px] mt-1 flex-shrink-0' alt="" /><span>Only high quality and eco-friendly materials;</span></span>
                    <span className='flex items-start gap-3'><img src="assets/mark1.svg" className='w-[17px] mt-1 flex-shrink-0' alt="" /><span>A great variety of outfits for every taste and size.</span></span>
                    <p className='text-left'>We know the main problem of all women – a lot of clothes in the wardrobe but nothing to wear. Therefore, we develop capsule collections where clothes go well with each other.</p>
                </div>
                <button className="bg-[#383838] hover:bg-browny text-white py-3 px-6 font-bold w-fit text-[16px] md:mt-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md transform">
                  Learn More →
                </button>
            </div>
        </div>
    </div>
  )
}
