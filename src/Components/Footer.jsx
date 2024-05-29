import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex bg-[#212121] pt-20 pb-10 text-center text-[#969696]'>
      <div className="flex w-full flex-col max-w-6xl px-5 gap-10 mx-auto md:px-0 md:gap-6">
        <div className="flex flex-col w-full gap-10 md:gap-12 justify-between md:flex-row">
          <div className="flex flex-col gap-4 w-full md:w-1/3 px-5">
            <h2 className="text-white font-bold text-lg">Navigation</h2>
            <ul className="flex flex-col mx-auto w-fit gap-5 md:justify-between md:flex-row">
              <a href="#aboutUs" className='text-center hover:text-white hover:border-b hover:border-b-white w-fit'>About Us</a>
              <a href="#catalog" className='text-center hover:text-white hover:border-b hover:border-b-white w-fit'>Catalog</a>
              <a href="#collection" className='text-center hover:text-white hover:border-b hover:border-b-white w-fit'>Collection</a>
            </ul>
          </div>
          <div className="flex gap-5 flex-col w-full md:w-1/3 px-5">
            <div className="flex mx-auto">
              <img src="assets/logo.svg" alt="" />
            </div>
            <p className="text-[15px]">Jolly House is your destination for designer and comfortable clothes for any occasion. We use only natural fabrics and pay great attention to details.</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/3 px-5">
            <h2 className="text-white font-bold text-lg">Social</h2>
          </div>
        </div>
        <hr className='text-[#969696]'/>
        <div className="flex flex-col text-[12px] gap-5 justify-between md:flex-row">
          <p>© Redesigned by Man kind</p>
          <p>All rights reserved</p>
        </div>
      </div>
      
    </div>
  )
}
