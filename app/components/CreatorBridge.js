"use client";

import React, { useState, useEffect } from 'react';

const ConvogueSections = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-hidden relative">
      {/* Section 1: Why Convogue */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Why{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300 inline-block">
                  Convogue
                </span>
                <span className="animate-bounce inline-block ml-2">?</span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-1">
                We&apos;re not just an agency – we&apos;re the bridge between brands and 
                the creator economy. At our core, we connect brands with the right creators and conversations. We specialize in organizing influencer-led events, managing brand campaigns, and executing strategic digital marketing across platforms like Instagram, YouTube, and Twitter.
              </p>
              
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed animate-fade-in-delay-2">
                From influencer marketing and meme marketing to Twitter trends and offline creator meets, we create campaigns that spark attention and drive real impact. Every campaign is designed to boost brand awareness, engagement, and ultimately consumer trust.
              </p>
            </div>
            
            {/* Clean stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700/30 hover:border-emerald-500/50 transition-all duration-500 hover-grow group">
                <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:animate-pulse">500+</div>
                <div className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors duration-300">Active Creators</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover-grow group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:animate-pulse">98%</div>
                <div className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white transition-colors duration-300">Client Retention</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Clean Feature Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {[
              {
                title: 'Creator-First Approach',
                desc: 'We prioritize authentic partnerships over transactional relationships',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                title: 'Data-Driven Results',
                desc: 'Advanced analytics and performance tracking for measurable ROI',
                color: 'from-blue-400 to-purple-500'
              },
              {
                title: 'Multi-Platform Expertise',
                desc: 'Native understanding of each platform&apos;s unique audience and culture',
                color: 'from-emerald-400 to-cyan-500'
              },
              {
                title: 'Viral Content Engine',
                desc: 'Proven strategies for creating shareable, engaging content at scale',
                color: 'from-red-400 to-pink-500'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/80 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700/30 hover:border-gray-300 dark:hover:border-gray-500/50 transition-all duration-500 hover-grow group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Our Services */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold">
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive solutions that transform your brand presence in the creator economy
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Influencer Marketing',
                desc: 'Connect with top creators across YouTube, Instagram, LinkedIn, and Twitter to amplify your brand message.',
                features: ['Multi-platform campaigns', 'Micro to macro influencers', 'Performance analytics', 'Brand safety guaranteed'],
                color: 'from-yellow-400 to-orange-500',
                hoverColor: 'hover:border-orange-500/50'
              },
              {
                title: 'Meme Marketing',
                desc: 'Viral content that resonates with Gen-Z and millennial audiences through authentic, shareable moments.',
                features: ['Trending meme campaigns', 'Soft PR via humor', 'Brand-safe messaging', 'Community engagement'],
                color: 'from-pink-400 to-red-500',
                hoverColor: 'hover:border-red-500/50'
              },
              {
                title: 'Event Management',
                desc: 'We organize influencer-led events and creator meets like Linkfluence, Techfluence, and Agrifluence.',
                features: ['Linkfluence summits', 'Techfluence conferences', 'Agrifluence expos', 'Hybrid experiences'],
                color: 'from-emerald-400 to-cyan-500',
                hoverColor: 'hover:border-cyan-500/50'
              },
              {
                title: 'Reputation Management',
                desc: 'Protect and enhance your brand image through strategic content and crisis communication.',
                features: ['Handling negative content', 'Managing comments', 'Creator coordination', 'Community building'],
                color: 'from-blue-400 to-purple-500',
                hoverColor: 'hover:border-purple-500/50'
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white/80 dark:bg-gray-800/20 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/30 ${service.hoverColor} transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Clean card - no gradients */}
                
                <div className="relative z-10">
                  
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 dark:text-gray-400 mb-6 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300 ${activeCard === index ? 'translate-x-2' : ''}`}
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: How We Work */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold">
              How We{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
              A transparent, proven process that transforms your brand presence in the creator economy
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Deep dive into your brand goals, target audience, and campaign objectives to create a tailored strategy.',
                features: ['Brand audit & analysis', 'Audience research', 'Goal setting', 'Strategy development'],
                color: 'from-blue-400 to-cyan-500'
              },
              {
                step: '02',
                title: 'Matching',
                desc: 'Leverage our network and AI-powered tools to find creators who perfectly align with your brand values.',
                features: ['Creator database search', 'Audience alignment check', 'Performance analysis', 'Brand safety screening'],
                color: 'from-yellow-400 to-orange-500'
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'Seamlessly manage campaign rollout across all platforms with real-time monitoring and optimization.',
                features: ['Content creation oversight', 'Multi-platform deployment', 'Real-time monitoring', 'Performance optimization'],
                color: 'from-pink-400 to-red-500'
              },
              {
                step: '04',
                title: 'Results',
                desc: 'Comprehensive analytics and ROI tracking with actionable insights for future campaign improvements.',
                features: ['Detailed analytics reports', 'ROI measurement', 'Performance insights', 'Future recommendations'],
                color: 'from-green-400 to-emerald-500'
              }
            ].map((process, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/25 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/30 hover:border-gray-300 dark:hover:border-gray-500/50 transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 400}ms` }}
              >
                <div className="relative z-10">
                  {/* Clean step number */}
                  <div className="text-6xl font-bold text-gray-200 dark:text-gray-800 mb-4 group-hover:text-gray-300 dark:group-hover:text-gray-700 transition-colors duration-300">
                    {process.step}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {process.title}
                  </h3>
                  
                  <p className="text-gray-500 dark:text-gray-400 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                    {process.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {process.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Simple connection line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-600 group-hover:text-emerald-400 transition-colors duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in-delay-1 {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        .bg-300\\% {
          background-size: 300%;
        }
        
        .hover-grow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-grow:hover {
          transform: scale(1.02) translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default ConvogueSections;