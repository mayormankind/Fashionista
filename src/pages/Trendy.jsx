import React from 'react';

export default function Trendy() {

    const Accessories = [
        {label:'Leather bags', desc:"Totes, crossbodies, satchels, and other bags can't wait to see you in our online and offline stores.", img:'assets/handBag.svg'},
        {label:'Hats and Caps', desc:"Straw hat or sports cap? Choose what suits you best for the current occasion and your style.", img:'assets/hat.svg'},
        {label:'Gloves and Scarves', desc:"Thin lace gloves became trendy again last year! Look for these accessories, as well as for silk and woven scarves in our store!", img:'assets/gloves.svg'},
    ]
  return (
    <div style={{backgroundImage:'url(assets/trendy.png)'}} className='flex py-8 w-full h-full min-h-screen bg-cover bg-center bg-no-repeat relative font-nunito' >
        <div className="flex flex-col gap-16 w-full h-full max-w-6xl m-auto md:flex-row" >
            <div className="flex flex-col text-lightGray gap-7 w-full text-[17px] px-4 md:w-1/2">
                <div className="">
                    <h2 className="text-blackText text-[12px]">TRENDY</h2>
                    <span className="flex gap-2 items-center">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-2xl text-left text-wrap text-headerBlack font-rufina font-bold w-10/12 md:text-7xl">SPRING COLLECTION</span>
                    </span>
                </div>
                <div className="flex gap-5 flex-col md:items-center md:flex-row">
                    <button className="bg-[#383838] text-white p-3 font-semibold w-2/5 text-[17px] md:mt-6 md:w-2/6 ">Learn More +</button>
                    <button className="hover:bg-[#747373] hover:text-white box-border text-black border-4 border-[#383838] bg-white p-3 font-semibold w-2/5 text-[17px] md:mt-6 md:w-2/6 ">Shop now +</button>
                </div>
            </div>
        </div>      
    </div>
  )
}
