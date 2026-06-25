import React from 'react';
import useInView from '../hooks/useInView';

export default function Contact() {
  const ref = useInView();

  return (
    <div className='w-full p-8 flex font-nunito min-h-screen md:py-28' id="contactUs">
      <div ref={ref} className="anim-zoom-in flex items-center gap-6 flex-col m-auto p-8 w-full max-w-3xl bg-lightBrown md:p-20">
        <img src="assets/envelope.svg" alt="Envelope icon" className='w-12 h-12' />
        <div className="flex flex-col text-center gap-4 items-center">
          <h2 className="text-xl md:text-4xl font-light font-rufina text-[#212121]">Want to Collaborate With Us?</h2>
          <span className='w-[80px] bg-browny h-[2px]'></span>
          <p className='text-[18px] text-[#595959] max-w-md'>Please contact us to discuss the details with our manager. We'd love to hear from you!</p>
        </div>
        <div className="flex flex-col gap-3 items-center md:flex-row">
          <a href="mailto:hello@jollyhouse.com">
            <button className="bg-[#383838] hover:bg-browny text-white py-3 px-8 font-semibold w-fit text-[16px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg transform">
              Contact Us →
            </button>
          </a>
          <a
            href="mailto:hello@jollyhouse.com"
            className="text-[#595959] text-[15px] hover:text-browny transition-colors duration-200 underline"
          >
            hello@jollyhouse.com
          </a>
        </div>
      </div>
    </div>
  )
}
