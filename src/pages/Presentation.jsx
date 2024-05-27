import React from 'react';

export default function Presentation() {

  return (
    <div className='flex w-full h-screen relative font-nunito'>
        <div className="flex flex-col w-full bg-lightBrown h-full mx-auto md:flex-row" >
            <div className="flex flex-col text-lightGray gap-5 w-full text-[17px] my-auto py-20 px-5 md:px-10 md:py-0 md:w-1/2">
                <div className="">
                    <h2 className="text-blackText text-[12px]">PRESENTATION</h2>
                    <span className="flex gap-2 items-center">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-left text-wrap text-headerBlack font-rufina font-light w-10/12 md:text-5xl">New Lookbook.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">Our new Street Chic collection is all about the street and preppy styles perfectly combined in our clothes.</p>
                <p className="text-[17px] font-normal mt-4">As we always say, fashion should be ready-to-wear, comfortable, and affordable. We have created this new collection for those who like mixing quite basic clothing with bright accents. </p> 
                <button className="bg-[#383838] text-white p-4 font-semibold w-2/5 text-[17px] md:mt-6 md:w-2/6 ">Shop +</button>              
            </div>
            <div className="w-full h-full md:w-1/2">
                <img src="assets/998.png" alt="" className='w-full'/>
            </div>
        </div>      
    </div>
  )
}
