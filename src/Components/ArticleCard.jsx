import React from 'react'

export default function ArticleCard( props ) {
  return (
    <div className='flex p-6 border-2 border-lightBrown md:p-10'>
        <div className="flex flex-col gap-7 w-full md:flex-row">
            <div className="flex w-full md:w-1/2">
                <img src={props.img} alt="" className='w-full'/>
            </div>
            <div className="flex flex-col gap-4 text-[17px] md:w-1/2">
                <p className='font-semibold text-[12px]'>{props.title}</p>
                <p className='font-bold text-headerBlack text-[19px]'>{props.subtitle}</p>
                <p>{props.body}</p>
                <button className="bg-headerBlack hover:bg-[#292929] text-white py-2 px-4 w-fit font-semibold mt-4 text-[17px]">Read More +</button>              
            </div>
        </div>
    </div>
  )
}
