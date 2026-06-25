import React from 'react'

export default function ArticleCard( props ) {
  return (
    <div className='group flex p-6 border-2 border-lightBrown hover:border-browny transition-colors duration-300 md:p-10'>
        <div className="flex flex-col gap-7 w-full md:flex-row">
            <div className="flex w-full overflow-hidden md:w-1/2">
                <img
                  src={props.img}
                  alt={props.subtitle}
                  className='w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
            </div>
            <div className="flex flex-col gap-4 text-[17px] md:w-1/2">
                <p className='font-semibold text-[11px] tracking-widest text-browny'>{props.title}</p>
                <p className='font-bold text-headerBlack text-[19px] leading-snug'>{props.subtitle}</p>
                <p className='text-lightGray'>{props.body}</p>
                <button className="bg-headerBlack hover:bg-browny text-white py-2 px-5 w-fit font-semibold mt-2 text-[15px] transition-colors duration-300 hover:-translate-y-0.5 transform">
                  Read More →
                </button>
            </div>
        </div>
    </div>
  )
}
