import React from 'react';
import ArticleCard from '../Components/ArticleCard';

export default function Articles() {

    const Articles = [
        {img:"assets/9.png",title:"MARIE CLAIRE", subtitle:"Preppy Style Is the Hot Trend Again!", body:"The Jolly House brand presented its fresh look at the preppy style that has popular again..."},
        {img:"assets/a.png",title:"VOGUE", subtitle:"Discovery of the Year –the Jolly House Brand", body:"A new show of the Jolly House brand was a total discovery for everyone. New capsule outfits..."}
    ]
  return (
    <div className='bg-white py-8 md:py-28'>
        <div className="flex flex-col gap-16 w-full max-w-6xl m-auto p-6 md:p-4">
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] text-left px-6 md:px-3">
                <div className="">
                    <h2 className="text-blackText font-semibold text-[12px]">PRESS</h2>
                    <span className="flex gap-2 items-center w-fit">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Featured Articles.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">Read more about our brand and collection in the articles below.</p>
                <ul className="flex gap-6 overflow-hidden">
                    {Articles.map((article,id)=>(
                        <ArticleCard img={article.img} key={id} title={article.title} subtitle={article.subtitle} body={article.body}/>
                    ))}
                </ul>
            </div>
        </div>
      
    </div>
  )
}
