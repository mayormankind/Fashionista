import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex bg-[#212121] py-20 text-center text-[#969696]'>
      <div className="flex w-full flex-col max-w-6xl gap-6 mx-auto">
        <div className="flex w-full gap-10 md:gap-12 justify-between">
          <div className="flex flex-col gap-4 w-1/3 px-5">
            <h2 className="text-white font-bold text-lg">Navigation</h2>
            <ul className="flex justify-between">
              <a href="#about" className='hover:text-white hover:border-b hover:border-b-white'>About Us</a>
              <a href="#catalog" className='hover:text-white hover:border-b hover:border-b-white'>Catalog</a>
              <a href="#collection" className='hover:text-white hover:border-b hover:border-b-white'>Collection</a>
            </ul>
          </div>
          <div className="flex gap-5 flex-col w-1/3 px-5">
            <div className="flex mx-auto">
              <img src="assets/logo.svg" alt="" />
            </div>
            <p className="text-[15px]">Jolly House is your destination for designer and comfortable clothes for any occasion. We use only natural fabrics and pay great attention to details.</p>
          </div>
          <div className="flex flex-col gap-4 w-1/3 px-5">
            <h2 className="text-white font-bold text-lg">Social</h2>
          </div>
        </div>
        <hr className='text-[#969696] h-[1px]'/>
        <div className="flex text-[12px] justify-between">
          <p>© Created by</p>
          <p>All rights reserved</p>
        </div>
      </div>
      
    </div>
  )
}
