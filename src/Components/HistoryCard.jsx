import React from 'react'

export default function HistoryCard(props) {
  return (
    <div className='border-2 flex border-[rgba(155,155,155,0.3)] p-8 text-center'>
        <div className="flex gap-6 flex-col mx-auto items-center">
            <img src={props.img} alt="" className='w-40' />
            <div className="flex flex-col gap-4 items-center">
                <h2 className='w-fit text-headerBlack font-semibold text-xl'>{props.label}</h2>
                <span className='w-[40px] bg-browny h-[2px]'></span>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}
