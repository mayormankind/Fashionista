import React from 'react'
import { FaInstagram, FaFacebook, FaPinterest, FaTiktok } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'

const socials = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaFacebook,  href: 'https://facebook.com',  label: 'Facebook'  },
  { icon: FaXTwitter,  href: 'https://x.com',         label: 'X / Twitter' },
  { icon: FaPinterest, href: 'https://pinterest.com', label: 'Pinterest' },
  { icon: FaTiktok,    href: 'https://tiktok.com',    label: 'TikTok'    },
]

export default function Footer() {
  return (
    <div className='w-full flex bg-[#212121] pt-20 pb-10 text-center text-[#969696]'>
      <div className="flex w-full flex-col max-w-6xl px-5 gap-10 mx-auto md:px-0 md:gap-6">
        <div className="flex flex-col w-full gap-10 md:gap-12 justify-between md:flex-row">

          {/* Navigation */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 px-5">
            <h2 className="text-white font-bold text-lg">Navigation</h2>
            <ul className="flex flex-col mx-auto w-fit gap-4">
              {[
                { label: 'Home',        href: '#home'       },
                { label: 'About Us',    href: '#aboutUs'    },
                { label: 'Catalog',     href: '#catlog'     },
                { label: 'Collection',  href: '#collection' },
                { label: 'Contact Us',  href: '#contactUs'  },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className='text-center hover:text-white transition-colors duration-200 hover:border-b hover:border-b-white w-fit mx-auto'
                >
                  {link.label}
                </a>
              ))}
            </ul>
          </div>

          {/* Logo & tagline */}
          <div className="flex gap-5 flex-col w-full md:w-1/3 px-5 items-center">
            <img src="assets/logo.svg" alt="Jolly House logo" className="brightness-0 invert" />
            <p className="text-[15px]">Jolly House is your destination for designer and comfortable clothes for any occasion. We use only natural fabrics and pay great attention to details.</p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-5 w-full md:w-1/3 px-5 items-center md:items-start">
            <h2 className="text-white font-bold text-lg">Follow Us</h2>
            <p className="text-[14px]">Stay inspired — follow us on social media for new drops and styling tips.</p>
            <div className="flex gap-4 justify-center md:justify-start">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#969696] hover:text-white transition-colors duration-200 hover:-translate-y-1 inline-block transform"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

        </div>
        <hr className='border-[#3a3a3a]' />
        <div className="flex flex-col text-[12px] gap-5 justify-between md:flex-row">
          <p>© Jolly House — Redesigned by Mankind</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  )
}
