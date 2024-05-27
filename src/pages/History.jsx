import React from 'react';
import HistoryCard from '../Components/HistoryCard';

export default function History() {
    
    const Histories = [
        {label:'Beginning', desc:'Johanna met Linda, and together they decided to create a fashion brand.', img:'assets/1997.svg'},
        {label:'Featured in Vogue', desc:"We were featured as the Editor's Pick for Spring-Summer 2001.", img:'assets/2001.svg'},
        {label:'First Offline Store', desc:'In 2019, we opened our first boutique on the 5th Ave in New York.', img:'assets/2019.svg'},
    ]
  return (
    <div className='bg-white py-8 md:py-28'>
        <div className="flex flex-col gap-16 w-full max-w-6xl m-auto p-6 md:p-4">
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] text-center px-6 md:px-3">
                <div className="">
                    <h2 className="text-blackText font-semibold text-[12px]">HISTORY</h2>
                    <span className="flex gap-2 items-center mx-auto w-fit">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Moments That Matter for Us.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">A few words about how our brand of designer clothes was created and developed.</p>
                <ul className="flex flex-col gap-6 md:flex-row">
                    {Histories.map((hist,id)=>(
                        <HistoryCard desc={hist.desc} img={hist.img} label={hist.label}/>
                    ))}
                </ul>
            </div>
        </div>
      
    </div>
  )
}
