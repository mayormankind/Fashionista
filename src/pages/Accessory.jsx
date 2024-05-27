import React from 'react';

export default function Accessory() {

    const Accessories = [
        {label:'Leather bags', desc:"Totes, crossbodies, satchels, and other bags can't wait to see you in our online and offline stores.", img:'assets/handBag.svg'},
        {label:'Hats and Caps', desc:"Straw hat or sports cap? Choose what suits you best for the current occasion and your style.", img:'assets/hat.svg'},
        {label:'Gloves and Scarves', desc:"Thin lace gloves became trendy again last year! Look for these accessories, as well as for silk and woven scarves in our store!", img:'assets/gloves.svg'},
    ]
  return (
    <div style={{backgroundImage:'url(assets/Frame2.jpg)'}} className='py-8 w-full h-full min-h-screen bg-cover bg-center bg-no-repeat relative font-nunito' >
        <div className="flex flex-col gap-16 w-full h-full max-w-6xl mx-auto md:flex-row" >
            <div className="flex flex-col text-lightGray gap-4 w-full text-[17px] px-4 md:w-1/2">
                <div className="">
                    <h2 className="text-blackText text-[12px]">ACCESSORIES</h2>
                    <span className="flex gap-2 items-center">
                        <span className='text-browny font-normal text-[48px]'>—</span>
                        <span className="text-xl text-left text-wrap text-headerBlack font-rufina font-light w-10/12 md:text-5xl">Treat Yourself to New Accessories.</span>
                    </span>
                </div>
                <p className="text-[19px] font-normal">We create accessories that perfectly match the outfits.</p>
                <p className="text-[17px] font-normal">Your look will not be complete without accessories. We create beautiful and sophisticated accessories that highlight your natural beauty.</p> 
                <div className="flex flex-col gap-10">
                    {Accessories.map((acc,id)=>(
                        <div className="flex gap-6" key={acc.id}>
                            <img src={acc.img} alt="" className="w-12"/>
                            <div className="flex flex-col gap-4">
                                <h2 className='font-semibold text-2xl text-headerBlack'>{acc.label}</h2>
                                <p>{acc.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>               
            </div>
        </div>      
    </div>
  )
}
