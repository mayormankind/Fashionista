import React from 'react'

export default function CollectionCard( props ) {
  return (
    <div className='group flex shadow-md hover:shadow-xl transition-shadow duration-400 bg-white overflow-hidden'>
        <div className="flex flex-col gap-4 text-left w-full">
            <div className="overflow-hidden">
                <img
                  src={props.img}
                  alt={props.label}
                  className='w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105'
                />
            </div>
            <div className="flex flex-col gap-3 p-4">
              <h2 className='text-[22px] text-[#212121] font-semibold group-hover:text-browny transition-colors duration-300'>{props.label}</h2>
              <p className='text-[16px] text-[#747474] font-normal'>{props.desc}</p>
              <button className="mt-2 bg-[#383838] hover:bg-browny text-white px-5 py-2.5 font-semibold w-fit text-[15px] transition-colors duration-300 hover:-translate-y-0.5 transform">
                Add Item +
              </button>
            </div>
        </div>
    </div>
  )
}
