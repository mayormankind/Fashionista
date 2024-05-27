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

export default function Landing() {
  return (
    <div className='w-full h-full font-nunito'>
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
            <Customization/>
            <Articles/>
            <SocialHero/>
            <Footer/>
        </div>      
    </div>
  )
}
