import React from 'react'

export default function HomeModal() {
  return (
    <div className='bg-transparent flex w-[90%] m-auto md:w-full'>
        <div className="flex flex-col text-lightGray gap-5 w-full bg-white p-6 text-[17px] md:p-10 md:w-1/2">
            <div className="flex flex-col gap-5">
                <h2 className="text-blackText text-[12px] tracking-widest hero-1">DESIGNER CLOTHES</h2>
                <span className="flex gap-2 items-center hero-2">
                    <span className='text-browny font-normal text-[48px]'>—</span>
                    <span className="text-2xl text-left text-wrap text-headerBlack font-rufina font-light w-10/12 md:text-5xl">Your New Everyday Style.</span>
                </span>
            </div>
            <p className="text-[19px] font-normal text-[#595959] hero-3">Jolly House is your destination for designer and comfortable clothes for any occasion.</p>  
            <div className="flex gap-5 flex-col md:items-center md:flex-row hero-4">
                <a href='#collection'>
                  <button className="hover:bg-[#292929] bg-[#383838] text-white py-3 px-6 font-semibold w-fit text-[16px] md:mt-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                    Shop Now →
                  </button>
                </a>
                <a href='#aboutUs'>
                  <button className="hover:bg-[#383838] hover:text-white text-black border-2 border-[#383838] bg-white py-3 px-6 font-semibold w-fit text-[16px] md:mt-6 transition-all duration-200">
                    About Us →
                  </button>
                </a>
            </div>
        </div>
    </div>
  )
}
