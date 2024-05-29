import React from 'react';
import CatalogCard from '../Components/CatalogCard';

export default function Catalog() {
  return (
    <div className='bg-white py-8 md:py-28' id='catlog'>
        <div className="flex flex-col gap-16 w-full max-w-6xl m-auto p-6 md:p-4">
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] text-center px-6 md:px-3">
                <div className="">
                    <h2 className="text-blackText font-semibold text-[12px]">CATALOG</h2>
                    <span className="flex gap-2 items-center mx-auto w-fit">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Designer Clothes for Every Taste.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">We create fashion clothes that are ready to wear. We love simple looks and share our vision with you.</p>
                <div className="relative p-6">
                    <span className="absolute left-0 top-1/2">b</span>
                    <ul className="grid grid-cols-1 gap-6 overflow-hidden md:grid-cols-3">
                        <CatalogCard img={'assets/2.webp'} heading={'Dresses'} text={'Casual and evening dresses in mini and midi lengths for your amazing looks.'}/>
                        <CatalogCard img={'assets/6.webp'} heading={'Pants'} text={'Pants made from natural fabrics and our own collection of jeans that will last you for years.'}/>
                        <CatalogCard img={'assets/3.webp'} heading={'Accessories'} text={'Belts, rings,gloves, necklaces and more for the finishing touch of your look.'}/>
                        {/* <CatalogCard img={'assets/4.webp'} heading={'Shirts & Tops'} text={'Light shirt and tops made from natural materials such as linen, silk and others.'}/> */}
                    </ul>
                    <span className="absolute right-0 top-1/2">f</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
