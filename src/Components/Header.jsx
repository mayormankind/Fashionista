import React from 'react'

export default function Header() {

    const Navs = [
        {label:"Home", href:'#home'},
        {label:"About us", href:'#aboutUs'},
        {label:"Catlog", href:'#catlog'},
        {label:"Collection", href:'#collection'},
        {label:"Contact us", href:'#contactUs'},
    ]
  return (
    <div className='w-full flex p-10 h-fit md:p-0 md:py-10'>
        <div className="flex justify-between items-center text-white w-full max-w-6xl mx-auto">
            <img src="assets/logo.svg" alt=""/>
            <div className="flex space-x-5 items-center font-semibold">
                {Navs.map((nav,id)=>(
                    <a href={nav.id} key={id} className='hover:border-b cursor-pointer hover:text-black hover:border-b-black'>{nav.label}</a>
                ))}
            </div>
        </div>
    </div>
  )
}
