'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Portfolio data - replace with your actual images
  const portfolioItems = [
    {
      id: 1,
      image: '/photos/portfolio1.jpeg'
    },
    {
      id: 2,
      image: '/photos/portfolio2.jpeg'
    },
    {
      id: 3,
      image: '/photos/portfolio3.jpeg'
    },
    {
      id: 4,
      image: '/photos/portfolio4.jpeg'
    },
    {
      id: 5,
      image: '/photos/portfolio5.jpeg'
    },
    {
      id: 6,
      image: '/photos/portfolio6.jpeg'
    },
    {
      id: 7,
      image: '/photos/portfolio7.jpeg'
    },
    {
      id: 8,
      image: '/photos/portfolio8.jpeg'
    },
    {
      id: 9,
      image: '/photos/portfolio9.jpeg'
    },
    {
      id: 10,
      image: '/photos/portfolio10.jpeg'
    },
    {
      id: 11,
      image: '/photos/portfolio11.jpeg'
    },
    {
      id: 12,
      image: '/photos/portfolio12.jpeg'
    }
  ];



  const filteredItems = portfolioItems;

  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      {/* Header */}
      <div className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold">
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From celebrity collaborations to memorable moments, explore our photo gallery 
              showcasing authentic connections and partnerships that create lasting impact 
              in the entertainment and marketing world.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transition-all duration-500 hover-grow ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(item, index)}
              >
                <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/30 hover:border-gray-300 dark:hover:border-gray-500/50 transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={`Photo ${item.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full max-h-full flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={closeLightbox}
                className="p-2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            {/* Image and Content */}
            <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Details */}
              <div className="text-white space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Photo {selectedImage.id}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    One of our memorable moments and connections in the industry.
                  </p>
                </div>
                
                <div className="text-sm text-gray-400">
                  {currentIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300%;
        }
        
        .hover-grow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-grow:hover {
          transform: scale(1.02) translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}