import React from 'react'

export default function ArticleCard( props ) {
  return (
    <div className='flex p-10 border border-browny'>
        <div className="flex flex-col gap-7 w-full md:flex-row">
            <div className="flex w-1/2">
                <img src={props.img} alt=""/>
            </div>
            <div className="flex flex-col gap-4 text-[17px] md:w-1/2">
                <p className='font-semibold text-[12px]'>{props.title}</p>
                <p className='font-bold text-headerBlack text-[19px]'>{props.subtitle}</p>
                <p>{props.body}</p>
                <button className="bg-[#383838] text-white p-2 font-semibold w-4/5 mt-4 text-[17px]">Read More +</button>              
            </div>
        </div>
    </div>
  )
}
