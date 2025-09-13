'use client';
import React from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaSnapchat, 
  FaLinkedin, 
  FaShopify, 
  FaAmazon 
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const FloatingIcon = ({ Icon, className, animationDelay }) => (
  <div 
    className={`absolute ${className}`}
    style={{ 
      animationDelay: `${animationDelay}s`,
      animationDuration: '8s',
      transform: 'translate(0px, 0px)',
      animation: `floatLarge 8s ease-in-out infinite ${animationDelay}s`
    }}
  >
    <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-400/20 shadow-lg shadow-emerald-400/10">
      <Icon className="text-emerald-400/60 text-3xl" />
    </div>
  </div>
);

const Hero = () => {
  const router = useRouter();
  const floatingIcons = [
    { Icon: FaFacebook, className: 'top-20 left-20', delay: 0 },
    { Icon: FaInstagram, className: 'top-32 left-40', delay: 1 },
    { Icon: FaTwitter, className: 'top-16 right-32', delay: 2 },
    { Icon: FaYoutube, className: 'top-40 right-20', delay: 0.5 },
    { Icon: FaSnapchat, className: 'bottom-40 left-16', delay: 1.5 },
    { Icon: FaLinkedin, className: 'bottom-32 right-40', delay: 2.5 },
    { Icon: FaShopify, className: 'bottom-20 right-16', delay: 3 },
    { Icon: FaAmazon, className: 'top-60 left-60', delay: 1.8 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* CSS Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatLarge {
            0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(-40px, -60px) rotate(90deg) scale(1.1); }
            50% { transform: translate(60px, -40px) rotate(180deg) scale(0.9); }
            75% { transform: translate(-20px, 40px) rotate(270deg) scale(1.05); }
            100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
          }
        `
      }} />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }} />
      
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <FloatingIcon
          key={index}
          Icon={icon.Icon}
          className={icon.className}
          animationDelay={icon.delay}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-white">Connecting Brands with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Influencers in India
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help Indian brands grow through authentic influencer partnerships on Instagram, YouTube, Facebook, and regional social media platforms. Enhance your digital presence and reach the right audience with our tailored marketing strategies.
          </p>

          {/* Single Centered CTA Button */}
          <div className="flex items-center justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              onClick={() => router.push("/contact")}
            >
              Start Your Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
