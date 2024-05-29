import React from 'react';
import CollectionCard from '../Components/CollectionCard';

export default function Collection() {

    const Collections = [
        {img:'assets/2.webp', label:'Dresses', desc:'Casual and evening dresses'},
        {img:'assets/6.webp', label:'Pants', desc:'Pants made from natural fabrics'},
        {img:'assets/3.webp', label:'Accessories', desc:'Belts, rings,gloves, necklaces.'},
        // {img:'assets/4.webp', label:'Shirts & Tops', desc:'Light shirt and tops.'}
    ]

  return (
    <div className='bg-white py-8 md:py-28' id='collection'>
        <div className="flex flex-col gap-16 w-full max-w-6xl m-auto p-6 md:p-4">
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] text-center px-3 md:px-3">
                <div className="">
                    <h2 className="text-blackText font-semibold text-[12px]">COLLECTION</h2>
                    <span className="flex gap-2 items-center mx-auto w-fit">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Select Your Perfect Look.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">Check out our new capsule collection and add items you like the most to the shopping cart!</p>
                <ul className="h-full grid grid-cols-1 gap-4 w-full overflow-x-scroll md:gap-6 md:grid-cols-3">
                    {Collections.map((item,id)=>(
                        <CollectionCard key={id} label={item.label} desc={item.desc} img={item.img}/>
                    ))}
                </ul>
            </div>
        </div>
      
    </div>
  )
}
