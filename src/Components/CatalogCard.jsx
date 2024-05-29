import React from 'react'

export default function CatalogCard(props) {
  return (
    <div className='p-2'>
      <div className="flex flex-col gap-4 text-left">
        <img src={props.img} alt="" className='h-full'/>
        <h2 className='text-[24px] text-[#212121] font-semibold'>{props.heading}</h2>
        <p className='text-[17px] text-[#747474] font-normal'>{props.text}</p>
      </div>
    </div>
  )
}
