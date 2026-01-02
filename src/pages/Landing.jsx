import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Catalog from './Catalog'
import History from './History'
import Gallery from './Gallery'
import Accessory from './Accessory'
import Trendy from './Trendy'
import Presentation from './Presentation'
import Customization from './Customization'
import Articles from './Articles'
import SocialHero from './SocialHero'
import Footer from '../Components/Footer'
import Contact from './Contact'
import Collection from './Collection'
import Header from '../Components/Header';
import HeaderMobile from '../Components/HeaderMobile';

export default function Landing() {
  return (
    <div className='w-full h-full font-nunito'>
        {/* Sticky Header - outside all sections */}
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="md:hidden">
          <HeaderMobile />
        </div>
        <div className="w-full flex flex-col">
            <Home/>
            <About/>
            <Services/>
            <Catalog/>
            <Accessory/>
            <History/>
            <Gallery/>
            <Trendy/>
            <Contact/>
            <Presentation/>
            <Collection/>
            <Customization/>
            <Articles/>
            <SocialHero/>
            <Footer/>
        </div>      
    </div>
  )
}
