import React from 'react';
import CatalogCard from '../Components/CatalogCard';
import SocialCard from '../Components/SocialCard';

export default function SocialHero() {

    const Pictures = [
        {img:'assets/k.png'},
        {img:'assets/e.png'},
        {img:'assets/j.png'},
        {img:'assets/h.png'},
        {img:'assets/g.png'},
        {img:'assets/b.png'},
        // {img:'assets/n.png'},
    ]
  return (
    <div className='bg-white py-8 md:py-28'>
        <div className="flex flex-col gap-16 w-full m-auto pl-6">
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] text-center px-6 md:px-3">
                <div className="">
                    <h2 className="text-blackText font-semibold text-[12px]">INSTAGRAM</h2>
                    <span className="flex gap-2 items-center mx-auto w-fit">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Follow Us on Social Networks.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">Be the first to know about the new collections and discounts!</p>
                <div className="relative p-6">
                    <span className="absolute left-0 top-1/2">b</span>
                    <ul className="grid grid-cols-2 gap-6 overflow-hidden md:grid-cols-6">
                        {Pictures.map((pic,id)=>(
                            <SocialCard img={pic.img} key={id}/>
                        ))}
                    </ul>
                    <span className="absolute right-0 top-1/2">f</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
