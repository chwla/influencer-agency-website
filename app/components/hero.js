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
    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-400/20 shadow-lg shadow-emerald-400/10">
      <Icon className="text-emerald-400/60 text-2xl md:text-3xl" />
    </div>
  </div>
);

const Hero = () => {
  const router = useRouter();
  const floatingIcons = [
    { Icon: FaFacebook, className: 'top-16 left-4 md:top-20 md:left-20', delay: 0 },
    { Icon: FaInstagram, className: 'top-24 left-16 md:top-32 md:left-40', delay: 1 },
    { Icon: FaTwitter, className: 'top-12 right-16 md:top-16 md:right-32', delay: 2 },
    { Icon: FaYoutube, className: 'top-32 right-4 md:top-40 md:right-20', delay: 0.5 },
    { Icon: FaSnapchat, className: 'bottom-32 left-4 md:bottom-40 md:left-16', delay: 1.5 },
    { Icon: FaLinkedin, className: 'bottom-24 right-16 md:bottom-32 md:right-40', delay: 2.5 },
    { Icon: FaShopify, className: 'bottom-16 right-4 md:bottom-20 md:right-16', delay: 3 },
    { Icon: FaAmazon, className: 'top-48 left-1/3 md:top-60 md:left-60', delay: 1.8 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* CSS Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes floatLarge {
            0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
            25% { transform: translate(-30px, -40px) rotate(90deg) scale(1.1); }
            50% { transform: translate(40px, -30px) rotate(180deg) scale(0.9); }
            75% { transform: translate(-15px, 30px) rotate(270deg) scale(1.05); }
            100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
          }
          
          @media (min-width: 768px) {
            @keyframes floatLarge {
              0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
              25% { transform: translate(-40px, -60px) rotate(90deg) scale(1.1); }
              50% { transform: translate(60px, -40px) rotate(180deg) scale(0.9); }
              75% { transform: translate(-20px, 40px) rotate(270deg) scale(1.05); }
              100% { transform: translate(0px, 0px) rotate(360deg) scale(1); }
            }
          }
        `
      }} />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
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
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16"
           style={{ minHeight: 'calc(100vh - 5rem)' }}>
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-white">Connecting Brands with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Influencers in India
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            We help Indian brands grow through authentic influencer partnerships on Instagram, YouTube, Facebook, and regional social media platforms. Enhance your digital presence and reach the right audience with our tailored marketing strategies.
          </p>

          {/* Single Centered CTA Button */}
          <div className="flex items-center justify-center">
            <button 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
              onClick={() => router.push("/contact")}
            >
              Start Your Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;