// HeaderMobile.jsx
import React, { useState, useEffect } from 'react';

const Navs = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#aboutUs' },
  { label: 'Catalog', href: '#catlog' },
  { label: 'Collection', href: '#collection' },
  { label: 'Contact Us', href: '#contactUs' },
];

export default function HeaderMobile() {
  const [toggle, setToggle] = useState(false);

  // Close menu on route/hash change (optional but good UX)
  useEffect(() => {
    const handleHashChange = () => setToggle(false);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Overlay */}
      {toggle && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setToggle(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-white/90 backdrop-blur-lg border-l border-white/30 transform transition-transform duration-300 ease-in-out ${
          toggle ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6 pt-16">
          <button
            onClick={() => setToggle(false)}
            className="self-end text-gray-700 hover:text-black mb-8"
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav className="flex flex-col space-y-6 font-semibold">
            {Navs.map((nav, id) => (
              <a
                key={id}
                href={nav.href}
                className="text-gray-900 hover:text-black transition-colors"
                onClick={() => setToggle(false)}
              >
                {nav.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Top Bar */}
      {/* <header className="sticky top-0 z-30 w-full bg-transparent py-4 px-6"> */}
        {/* <div className="flex items-center justify-between max-w-6xl mx-auto"> */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent py-4 px-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
          <a href="#home" aria-label="Go to homepage">
            <img src="assets/logo.svg" alt="Company Logo" className="h-8" />
          </a>
          <button
            onClick={() => setToggle(true)}
            className="p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open navigation menu"
            aria-expanded={toggle}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </header>
    </>
  );
}
