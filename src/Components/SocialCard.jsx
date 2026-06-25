import React from 'react'
import { FaInstagram } from 'react-icons/fa6'

export default function SocialCard( props ) {
  return (
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden aspect-square"
    >
      <img
        src={props.img}
        alt="Instagram post"
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-center justify-center">
        <FaInstagram
          size={32}
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 transform"
        />
      </div>
    </a>
  )
}
