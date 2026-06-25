import React from 'react'

export default function CatalogCard(props) {
  return (
    <div className='group cursor-pointer'>
      <div className="flex flex-col gap-4 text-left">
        <div className="relative overflow-hidden">
          <img
            src={props.img}
            alt={props.heading}
            className='w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105'
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button className="w-full bg-white text-[#383838] py-2 px-4 text-sm font-semibold hover:bg-browny hover:text-white transition-colors duration-200">
              View Collection →
            </button>
          </div>
        </div>
        <h2 className='text-[24px] text-[#212121] font-semibold group-hover:text-browny transition-colors duration-300'>{props.heading}</h2>
        <p className='text-[16px] text-[#747474] font-normal'>{props.text}</p>
      </div>
    </div>
  )
}
