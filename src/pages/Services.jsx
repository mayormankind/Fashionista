import React from 'react';

export default function Services() {
  return (
    <div style={{backgroundImage:'url(assets/Frame1.jpg)'}} className='bg-white w-full h-full py-8 bg-cover bg-no-repeat relative'>
        <div className="flex flex-col gap-16 w-full h-full max-w-6xl mx-auto md:flex-row ">
            <div className="hidden gap-4 text-lightGray w-full md:flex md:w-1/2">
            </div>
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] px-6 md:px-3 md:w-1/2">
                <div className="">
                    <h2 className="text-blackText text-[12px]">WHY CHOOSE US</h2>
                    <span className="flex gap-2 items-center">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-left text-wrap text-headerBlack font-light w-10/12 font-rufina md:text-5xl">Things You'll Love About Jolly House..</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">We create each outfit for you with great love and care.</p>
                <div className="flex flex-col gap-4 text-[17px]">
                    <span className='text-[24px] font-semibold'><span className='text-browny mr-2'>—</span><span className='text-headerBlack'>Jolly brand is:</span></span>
                    <span className='flex items-center gap-2'><img src="assets/mark1.svg" className='text-browny w-[17px]' alt="" /><span>Capsule collections you can wear on any occasion;</span></span>
                    <span className='flex items-center gap-2'><img src="assets/mark1.svg" className='text-browny w-[17px]' alt="" /><span>Only high quality and eco-friendly materials;</span></span>
                    <span className='flex items-center gap-2'><img src="assets/mark1.svg" className='text-browny w-[17px]' alt="" /><span>A great variety of outfits for every taste and size.</span></span>
                    <p className='text-left'>We know the main problem of all women – a lot of clothes in the wardrobe but nothing to wear. Therefore, we develop capsule collections where clothes go well with each other. You can mix them as well to create stunning new looks! </p>
                </div>
                <button className="bg-[#383838] text-white p-3 font-bold w-2/5 text-[17px] md:mt-6 md:w-2/6 ">Learn More +</button>
            </div>
        </div>
      
    </div>
  )
}
