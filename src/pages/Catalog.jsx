import React, { useState, useEffect, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import CatalogCard from '../Components/CatalogCard';
import useInView from '../hooks/useInView';

const items = [
  { img: 'assets/2.webp', heading: 'Dresses',      text: 'Casual and evening dresses in mini and midi lengths for your amazing looks.' },
  { img: 'assets/6.webp', heading: 'Pants',         text: 'Pants made from natural fabrics and our own collection of jeans that will last you for years.' },
  { img: 'assets/3.webp', heading: 'Accessories',   text: 'Belts, rings, gloves, necklaces and more for the finishing touch of your look.' },
  { img: 'assets/4.webp', heading: 'Shirts & Tops', text: 'Light shirts and tops made from natural materials such as linen, silk and others.' },
];

export default function Catalog() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const headingRef = useInView();

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => { setCurrent(0); }, [perView]);

  const maxIndex = items.length - perView;
  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <div className='bg-white py-8 md:py-28' id='catlog'>
      <div className="flex flex-col gap-12 w-full max-w-6xl m-auto p-6 md:p-4">

        {/* Heading */}
        <div ref={headingRef} className="anim-fade-up flex flex-col text-lightGray gap-4 w-full text-[17px] text-center">
          <div>
            <h2 className="text-blackText font-semibold text-[12px] tracking-widest">CATALOG</h2>
            <span className="flex gap-2 items-center mx-auto w-fit">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Designer Clothes for Every Taste.</span>
            </span>
          </div>
          <p className="text-[19px] font-normal">We create fashion clothes that are ready to wear. We love simple looks and share our vision with you.</p>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div className="overflow-hidden">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {items.map((item, id) => (
                <div
                  key={id}
                  style={{ minWidth: `${100 / perView}%` }}
                  className="px-3"
                >
                  <CatalogCard img={item.img} heading={item.heading} text={item.text} />
                </div>
              ))}
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className={`absolute -left-5 top-[40%] -translate-y-1/2 bg-white hover:bg-browny hover:text-white text-[#383838] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 transition-all duration-200 ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:shadow-lg'
            }`}
            aria-label="Previous"
          >
            <MdChevronLeft size={22} />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            className={`absolute -right-5 top-[40%] -translate-y-1/2 bg-white hover:bg-browny hover:text-white text-[#383838] rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10 transition-all duration-200 ${
              current === maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:shadow-lg'
            }`}
            aria-label="Next"
          >
            <MdChevronRight size={22} />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {Array.from({ length: maxIndex + 1 }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? 'bg-browny w-6' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
