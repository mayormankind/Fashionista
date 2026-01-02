// Header.jsx
import React from 'react';

const Navs = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#aboutUs' },
  { label: 'Catalog', href: '#catlog' },
  { label: 'Collection', href: '#collection' },
  { label: 'Contact Us', href: '#contactUs' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="flex items-center justify-between px-6 py-4 md:px-10 max-w-6xl mx-auto">
        <a href="#home" aria-label="Go to homepage">
          <img src="assets/logo.svg" alt="Company Logo" className="h-8" />
        </a>
        <nav className="hidden md:flex space-x-6 font-semibold">
          {Navs.map((nav, id) => (
            <a
              key={id}
              href={nav.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
            >
              {nav.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
