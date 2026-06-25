import React from 'react';
import CollectionCard from '../Components/CollectionCard';
import useInView from '../hooks/useInView';

const Collections = [
  { img: 'assets/2.webp', label: 'Dresses',      desc: 'Casual and evening dresses for any occasion.' },
  { img: 'assets/6.webp', label: 'Pants',         desc: 'Pants made from natural fabrics and our jeans.' },
  { img: 'assets/3.webp', label: 'Accessories',   desc: 'Belts, rings, gloves, necklaces and more.' },
  { img: 'assets/4.webp', label: 'Shirts & Tops', desc: 'Light shirts and tops from natural materials.' },
];

export default function Collection() {
  const headingRef = useInView();
  const gridRef    = useInView();

  return (
    <div className='bg-white py-8 md:py-28' id='collection'>
      <div className="flex flex-col gap-12 w-full max-w-6xl m-auto p-6 md:p-4">
        <div ref={headingRef} className="anim-fade-up flex flex-col text-lightGray gap-4 w-full text-[17px] text-center">
          <div>
            <h2 className="text-blackText font-semibold text-[12px] tracking-widest">COLLECTION</h2>
            <span className="flex gap-2 items-center mx-auto w-fit">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Select Your Perfect Look.</span>
            </span>
          </div>
          <p className="text-[19px] font-normal">Check out our new capsule collection and add items you like the most to the shopping cart!</p>
        </div>
        <ul ref={gridRef} className="anim-fade-up grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {Collections.map((item, id) => (
            <li key={id} className={`anim-fade-up delay-${id + 1}`}>
              <CollectionCard label={item.label} desc={item.desc} img={item.img} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
