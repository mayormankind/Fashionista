import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import SocialCard from '../Components/SocialCard';
import useInView from '../hooks/useInView';

const Pictures = [
  { img: 'assets/k.png' },
  { img: 'assets/e.png' },
  { img: 'assets/j.png' },
  { img: 'assets/h.png' },
  { img: 'assets/g.png' },
  { img: 'assets/b.png' },
];

export default function SocialHero() {
  const headingRef = useInView();
  const gridRef = useInView();

  return (
    <div className='bg-white py-8 md:py-28'>
      <div className="flex flex-col gap-10 w-full max-w-6xl m-auto px-6 md:px-4">

        {/* Heading */}
        <div ref={headingRef} className="anim-fade-up flex flex-col text-lightGray gap-4 w-full text-[17px] text-center">
          <div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <FaInstagram size={20} className="text-browny" />
              <h2 className="text-blackText font-semibold text-[12px] tracking-widest">INSTAGRAM</h2>
            </div>
            <span className="flex gap-2 items-center mx-auto w-fit">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Follow Us on Social Networks.</span>
            </span>
          </div>
          <p className="text-[19px] font-normal">Be the first to know about the new collections and discounts!</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex items-center gap-2 text-browny font-semibold text-[15px] hover:underline transition-all duration-200"
          >
            <FaInstagram size={18} />
            @jollyhouse
          </a>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="anim-zoom-in">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {Pictures.map((pic, id) => (
              <SocialCard img={pic.img} key={id} />
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
