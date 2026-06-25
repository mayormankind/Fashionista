import React from 'react';
import useInView from '../hooks/useInView';

export default function About() {
  const leftRef  = useInView();
  const rightRef = useInView();

  return (
    <div className='bg-white py-8 md:py-32' id='aboutUs'>
        <div className="flex flex-col gap-16 w-full max-w-6xl m-auto p-6 md:p-4 md:flex-row">
            <div ref={leftRef} className="anim-slide-left flex flex-col gap-4 text-lightGray w-full md:w-7/12">
                <img src="assets/5.webp" alt="Fashion editorial" className="w-full object-cover" />
                <img src="assets/quotation.svg" alt="" className='w-[50px]'/>
                <p className='text-[20px] italic md:text-[25px]'>"I have always had difficulties with buying clothes for every-day wear. Therefore, together with Linda, we decided to create our own brand.</p>
                <p className="font-semibold text-[#383838]">— Johanna Innsbruck</p>
            </div>
            <div ref={rightRef} className="anim-slide-right flex flex-col text-lightGray gap-4 w-full text-[17px] md:w-5/12">
                <div>
                    <h2 className="text-blackText text-[12px] tracking-widest">ABOUT US</h2>
                    <span className="flex gap-2 items-center">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-left text-wrap text-headerBlack font-light w-10/12 font-rufina md:text-5xl">Comfort and Quality Come First.</span>
                    </span>
                </div>
                <p>Johanna Innsbruck and Linda Copperfield have always dreamed of comfortable women's clothing that would look appropriate in any circumstances.</p>
                <p>This is how the Jolly House brand appeared – it is a brand for women who like to feel confident, seductive, and stylish in any situation. We use only natural fabrics and pay great attention to details that make the difference.</p>
                <div className="flex flex-col overflow-hidden">
                    <img src="assets/1.webp" alt="Our brand" className="w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
            </div>
        </div>
    </div>
  )
}
