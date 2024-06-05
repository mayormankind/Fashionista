import React from 'react';
// import '../App.css';

export default function Gallery() {
  return (
    <div className='bg-white py-8 md:py-28'>
        <div className="flex flex-col gap-16 w-full max-w-6xl m-auto p-6 md:p-4">
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] text-center px-3 md:px-3">
                <div className="">
                    <h2 className="text-blackText font-semibold text-[12px]">GALLERY</h2>
                    <span className="flex gap-2 items-center mx-auto w-fit">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Trendy Looks of Your Spring.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">Stay playful and romantic this spring with the new collection by Jolly House.</p>
                <ul className="h-full w-full gap-6 columns-1 sm:columns-2 md:columns-3">
                    <li className="mb-6"><img src="assets/c.webp" alt="" className="w-full"/></li>
                    <li className="mb-6"><img src="assets/i.webp" alt="" className="w-full"/></li>
                    <li className="mb-6"><img src="assets/d.webp" alt="" className="w-full"/></li>
                    <li className="mb-6"><img src="assets/7.webp" alt="" className="w-full"/></li>
                    <li className="mb-6"><img src="assets/f.webp" alt="" className="w-full"/></li>
                    <li className="mb-6"><img src="assets/m.webp" alt="" className="w-full"/></li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}
