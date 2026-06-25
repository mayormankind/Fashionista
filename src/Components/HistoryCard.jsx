import React from 'react'

export default function HistoryCard(props) {
  return (
    <div className='group border-2 flex border-[rgba(155,155,155,0.3)] hover:border-browny p-8 text-center transition-all duration-400 hover:-translate-y-1 hover:shadow-lg bg-white'>
        <div className="flex gap-6 flex-col mx-auto items-center">
            <img src={props.img} alt={props.label} className='w-36 transition-transform duration-500 group-hover:scale-110' />
            <div className="flex flex-col gap-4 items-center">
                <h2 className='w-fit text-headerBlack font-semibold text-xl group-hover:text-browny transition-colors duration-300'>{props.label}</h2>
                <span className='w-[40px] bg-browny h-[2px]'></span>
                <p className='text-lightGray'>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}
