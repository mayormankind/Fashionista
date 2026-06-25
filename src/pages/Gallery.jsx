import React from 'react';
import useInView from '../hooks/useInView';

const galleryImages = [
  { src: 'assets/c.webp', alt: 'Spring look 1' },
  { src: 'assets/i.webp', alt: 'Spring look 2' },
  { src: 'assets/d.webp', alt: 'Spring look 3' },
  { src: 'assets/7.webp', alt: 'Spring look 4' },
  { src: 'assets/f.webp', alt: 'Spring look 5' },
  { src: 'assets/m.webp', alt: 'Spring look 6' },
];

export default function Gallery() {
  const headingRef = useInView();
  const gridRef    = useInView();

  return (
    <div className='bg-white py-8 md:py-28'>
      <div className="flex flex-col gap-10 w-full max-w-6xl m-auto p-6 md:p-4">
        <div ref={headingRef} className="anim-fade-up flex flex-col text-lightGray gap-4 w-full text-[17px] text-center">
          <div>
            <h2 className="text-blackText font-semibold text-[12px] tracking-widest">GALLERY</h2>
            <span className="flex gap-2 items-center mx-auto w-fit">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Trendy Looks of Your Spring.</span>
            </span>
          </div>
          <p className="text-[19px] font-normal">Stay playful and romantic this spring with the new collection by Jolly House.</p>
        </div>

        <div ref={gridRef} className="anim-zoom-in">
          <ul className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, id) => (
              <li key={id} className="group relative overflow-hidden break-inside-avoid mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full block transition-transform duration-700 group-hover:scale-110'
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                  <div className="p-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {image.alt}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
