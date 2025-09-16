'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/20 backdrop-blur-sm border-b border-gray-200 dark:border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold transition-colors flex items-center">
              <span className="text-gray-900 dark:text-white">Con</span>
              <span className="text-emerald-400">vogue</span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 px-3 py-2 text-base font-semibold transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 px-3 py-2 text-base font-semibold transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 px-3 py-2 text-base font-semibold transition-colors duration-200"
              >
                Portfolio
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 px-3 py-2 text-base font-semibold transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="https://calendly.com/team-convogue-dem_/new-meeting"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full text-base font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:text-gray-900 dark:focus:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Close icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/90 dark:bg-black/40 backdrop-blur-sm rounded-b-lg border-b border-gray-200 dark:border-emerald-500/20">
            <Link 
              href="/" 
              onClick={closeMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 block px-3 py-3 text-base font-semibold transition-colors duration-200 rounded-md hover:bg-emerald-500/10"
            >
              Home
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 block px-3 py-3 text-base font-semibold transition-colors duration-200 rounded-md hover:bg-emerald-500/10"
            >
              Contact Us
            </Link>
            <Link 
              href="/portfolio" 
              onClick={closeMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 block px-3 py-3 text-base font-semibold transition-colors duration-200 rounded-md hover:bg-emerald-500/10"
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              onClick={closeMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-400 block px-3 py-3 text-base font-semibold transition-colors duration-200 rounded-md hover:bg-emerald-500/10"
            >
              About Us
            </Link>
            <div className="pt-4">
              <Link 
                href="https://calendly.com/team-convogue-dem_/new-meeting"
                onClick={closeMenu}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-200 transform hover:scale-105 block text-center"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;