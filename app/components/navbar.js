'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold transition-colors flex items-center">
              <span className="text-white">Con</span>
              <span className="text-emerald-400">vogue</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-emerald-400 px-3 py-2 text-base font-semibold transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-base font-semibold transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-base font-semibold transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* CTA Button */}
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
            <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;