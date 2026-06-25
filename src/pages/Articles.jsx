import React from 'react';
import ArticleCard from '../Components/ArticleCard';
import useInView from '../hooks/useInView';

const articleList = [
  { img: 'assets/9.png', title: 'MARIE CLAIRE', subtitle: 'Preppy Style Is the Hot Trend Again!',       body: 'The Jolly House brand presented its fresh look at the preppy style that has become popular again...' },
  { img: 'assets/a.png', title: 'VOGUE',        subtitle: 'Discovery of the Year — the Jolly House Brand', body: 'A new show of the Jolly House brand was a total discovery for everyone. New capsule outfits...' },
];

export default function Articles() {
  const headingRef = useInView();
  const listRef    = useInView();

  return (
    <div className='bg-white py-8 md:py-28'>
      <div className="flex flex-col gap-10 w-full max-w-6xl m-auto p-4 md:p-6">
        <div ref={headingRef} className="anim-fade-up flex flex-col text-lightGray gap-4 w-full text-[17px] text-left">
          <div>
            <h2 className="text-blackText font-semibold text-[12px] tracking-widest">PRESS</h2>
            <span className="flex gap-2 items-center w-fit">
              <span className='text-browny font-normal text-[48px]'>—</span>
              <span className="text-xl text-headerBlack font-light font-rufina md:text-5xl">Featured Articles.</span>
            </span>
          </div>
          <p className="text-[19px] font-normal">Read more about our brand and collection in the articles below.</p>
        </div>
        <ul ref={listRef} className="anim-fade-up flex flex-col gap-6 md:flex-row">
          {articleList.map((article, id) => (
            <li key={id} className={`flex-1 anim-fade-up delay-${id + 1}`}>
              <ArticleCard img={article.img} title={article.title} subtitle={article.subtitle} body={article.body} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
