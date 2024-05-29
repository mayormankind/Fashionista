import React from 'react'

export default function CollectionCard( props ) {
  return (
    <div className='flex shadow-lg'>
        <div className="flex flex-col gap-4 text-left p-4">
            <div className="w-full h-full">
                <img src={props.img} alt="" className='rounded-lg  h-full'/>
            </div>
            <h2 className='text-[24px] text-[#212121] font-semibold'>{props.label}</h2>
            <p className='text-[17px] text-[#747474] font-normal'>{props.desc}</p>
            <button className="bg-[#383838] hover:bg-[#292929] text-white px-5 py-2 font-semibold w-fit text-[17px]">Add Item +</button>              
        </div>
    </div>
  )
}
