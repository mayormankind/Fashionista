// Header.jsx
import React, { useState, useEffect } from 'react';

const Navs = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#aboutUs' },
  { label: 'Catalog', href: '#catlog' },
  { label: 'Collection', href: '#collection' },
  { label: 'Contact Us', href: '#contactUs' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/0 py-5'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 max-w-6xl mx-auto">
        <a href="#home" aria-label="Go to homepage">
          <img src="assets/logo.svg" alt="Company Logo" className="h-8" />
        </a>
        <nav className="hidden md:flex space-x-8 font-semibold">
          {Navs.map((nav, id) => (
            <a
              key={id}
              href={nav.href}
              className="text-[#383838] hover:text-browny transition-colors duration-200 relative group text-sm tracking-wide"
            >
              {nav.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-browny transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
