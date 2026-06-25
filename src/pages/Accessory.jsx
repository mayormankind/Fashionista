import React from 'react';
import useInView from '../hooks/useInView';

const Accessories = [
  { label: 'Leather Bags',      desc: "Totes, crossbodies, satchels, and other bags can't wait to see you in our online and offline stores.", img: 'assets/handBag.svg' },
  { label: 'Hats and Caps',     desc: "Straw hat or sports cap? Choose what suits you best for the current occasion and your style.",           img: 'assets/hat.svg'     },
  { label: 'Gloves and Scarves',desc: "Thin lace gloves became trendy again last year! Look for these accessories, as well as for silk and woven scarves in our store!", img: 'assets/gloves.svg' },
];

export default function Accessory() {
  const ref = useInView();

  return (
    <div style={{backgroundImage:'url(assets/Frame2.jpg)'}} className='py-8 w-full h-full min-h-screen bg-cover bg-center bg-no-repeat relative font-nunito'>
      <div className="flex flex-col gap-16 w-full h-full max-w-6xl mx-auto md:flex-row">
        <div ref={ref} className="anim-slide-left flex flex-col text-lightGray gap-5 w-full text-[17px] px-6 md:px-4 py-12 md:py-20 md:w-1/2 bg-white/90 backdrop-blur-sm">
          <div>
            <h2 className="text-blackText text-[12px] tracking-widest">ACCESSORIES</h2>
            <span className="flex gap-2 items-center">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-left text-wrap text-headerBlack font-rufina font-light w-10/12 md:text-5xl">Treat Yourself to New Accessories.</span>
            </span>
          </div>
          <p className="text-[19px] font-normal text-[#595959]">We create accessories that perfectly match the outfits.</p>
          <p className="text-[16px] font-normal text-[#747474]">Your look will not be complete without accessories. We create beautiful and sophisticated accessories that highlight your natural beauty.</p>
          <div className="flex flex-col gap-8">
            {Accessories.map((acc, id) => (
              <div className="flex gap-5 items-start group" key={id}>
                <div className="bg-lightBrown p-3 rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-browny">
                  <img src={acc.img} alt={acc.label} className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className='font-semibold text-xl text-headerBlack group-hover:text-browny transition-colors duration-300'>{acc.label}</h2>
                  <p className="text-[15px]">{acc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
