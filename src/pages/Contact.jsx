import React from 'react';

export default function Contact() {
  return (
    <div className='w-full p-8 flex text-nunito min-h-screen md:py-28' id="contactUs">
        <div className="flex items-center gap-5 flex-col m-auto p-6 w-full max-w-6xl bg-lightBrown md:p-20">
            <img src="assets/envelope.svg" alt="" className='text-lightBrown w-10 h-10'/>
            <div className="flex flex-col text-center gap-4 items-center">
                <h2 className="text-xl md:text-4xl font-light text-rufina text-[#212121]">Want to Collaborate With Us?</h2>
                <span className='w-[100px] bg-browny h-[2px]'></span>
                <p className='text-[19px] text-[#595959]'>Please contact us to discuss the details with our manager.</p>
            </div>
            <button className="hover:bg-[#292929] bg-[#383838] text-white py-3 px-8 font-semibold w-fit text-[17px] md:mt-6">Contact Us +</button>
        </div>
      
    </div>
  )
}
