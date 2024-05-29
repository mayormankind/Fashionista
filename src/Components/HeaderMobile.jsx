import React, { useState } from 'react'

export default function Header() {

    const [ toggle, setToggle ] = useState(false);

    const Navs = [
        {label:"Home", href:'#home'},
        {label:"About us", href:'#aboutUs'},
        {label:"Catlog", href:'#catlog'},
        {label:"Collection", href:'#collection'},
        {label:"Contact us", href:'#contactUs'},
    ]
  return (
    <div className='w-full flex p-5 h-fit'>
        <div className="flex justify-between items-center text-white w-full max-w-6xl mx-auto">
            <img src="assets/logo.svg" alt="" className='z-50'/>
            <div className={`${!toggle ? 'hidden' : 'flex'} fixed z-40 top-0 left-0 bottom-0 right-0 bg-[#00000094] w-full h-full`}>
                <ul className="flex flex-col space-y-12 items-center font-semibold m-auto overflow-hidden">
                    {Navs.map((nav,id)=>(
                        <a href={nav.href} key={id}>{nav.label}</a>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col sticky top-0 bg-transparent gap-1 p-2 z-50 hover:bg-slate-400" onClick={()=>setToggle(!toggle)}>
                <span className="bg-[#212121] w-6 h-1"></span>
                <span className="bg-[#212121] w-6 h-1"></span>
                <span className="bg-[#212121] w-6 h-1"></span>
            </div>
        </div>
    </div>
  )
}
