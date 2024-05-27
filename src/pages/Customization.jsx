import React from 'react';

export default function Customization() {

  return (
    <div className='flex py-8 w-full h-full min-h-screen bg-cover bg-center bg-no-repeat relative font-nunito' >
        <div className="flex flex-col gap-16 w-full h-full mx-auto md:flex-row" >
            <div className="w-full h-full md:w-1/2" style={{backgroundImage:'url(assets/998.png)'}}></div>
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] m-auto px-4 md:w-1/2">
                <div className="">
                    <h2 className="text-blackText text-[12px]">CUSTOMIZATION</h2>
                    <span className="flex gap-2 items-center">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-left text-wrap text-headerBlack font-rufina font-light w-10/12 md:text-5xl">Want to Order a Very Special Outfit?</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">We offer bespoke tailoring according to your sketches, as well as working together with our designers.</p>
                <p className="text-[17px] font-normal">Are your needs beyond our range? We also offer bespoke tailoring and can create an exclusive outfit for you! If you have an idea, we will gladly implement it or work on it together with you.</p> 
                <button className="hover:bg-[#747373] hover:text-white box-border text-black border-4 border-[#383838] bg-white p-4 font-semibold w-2/5 text-[17px] md:mt-6 md:w-2/6 ">Request a quote +</button>              
            </div>
        </div>      
    </div>
  )
}
