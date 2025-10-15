"use client";

import React, { useState, useEffect } from 'react';

export default function EthicsValues() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const prohibitedCategories = [
    {
      title: 'Adult Content',
      desc: 'Adult-content platforms or creators whose primary activity is explicit adult material (e.g., OnlyFans and similar).'
    },
    {
      title: 'Tobacco & Vaping',
      desc: 'Brands that promote or sell tobacco, cigarettes, vaping products, or related paraphernalia.'
    },
                {
      title: 'Irresponsible Alcohol',
      desc: 'Brands that promote hard alcohol where promotion would be irresponsible for the creator&apos;s audience or in violation of local advertising laws.'
    },
    {
      title: 'Animal Cruelty',
      desc: 'Companies that test products on animals or are demonstrably involved in animal cruelty.'
    },
    {
      title: 'Illegal & Harmful Activity',
      desc: 'Organizations involved in illegal activity, hate speech, extremist content, human-rights abuses, or exploitative labour practices.'
    },
    {
      title: 'Unethical Creators',
      desc: 'Creators who repeatedly breach disclosure requirements, promote misinformation, or otherwise act in ways that harm audiences.'
    }
  ];

  const enforcementSteps = [
    {
      title: 'Vetting Process',
      desc: 'All creators and brands undergo thorough vetting before onboarding.'
    },
    {
      title: 'Contract Clauses',
      desc: 'Contracts include ethical and disclosure clauses; we may terminate agreements for breaches.'
    },
    {
      title: 'Ongoing Monitoring',
      desc: 'We perform ongoing monitoring of creator content and brand practices.'
    },
    {
      title: 'Investigation Protocol',
      desc: 'If we identify potential concerns during a campaign, we pause activity and investigate.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/3 rounded-full animate-float-delay-1 blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/4 rounded-full animate-float-delay-2 blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-pink-500/3 rounded-full animate-float-delay-3 blur-2xl"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Dynamic gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-emerald-500/5 via-transparent to-transparent transition-all duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.05), transparent 50%)`
          }}
        ></div>
        
        {/* Shimmer effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-500/3 to-transparent animate-shimmer"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ethics &{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300 inline-block">
                Values
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-1">
              At Convogue, we believe influence carries responsibility. We partner only with creators and brands 
              that align with our commitment to safety, integrity, and positive social impact. We reserve the right 
              to decline or terminate any partnership that conflicts with these values.
            </p>
          </div>
        </div>
      </section>

      {/* What We Will Not Work With Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We{' '}
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-500 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Will Not
              </span>
              {' '}Work With
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
              We will refuse collaborations with creators or brands that fall into any of the following categories:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prohibitedCategories.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-red-200 dark:border-red-900/30 hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-emerald-50/10 to-white/20 dark:from-gray-800/20 dark:via-emerald-900/10 dark:to-gray-800/20 rounded-3xl backdrop-blur-sm border border-gray-300 dark:border-gray-700/30"></div>
          
          <div className="relative z-10 p-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why This{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Matters
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-delay-2">
              We build long-term trust between creators, communities, and brands. Working with partners who 
              compromise safety, legality, or human dignity undermines that trust and the effectiveness of campaigns. 
              Our guidelines protect creators&apos; reputations and the brands that work with them — and ensure audiences 
              are treated with respect.
            </p>
          </div>
        </div>
      </section>

      {/* How We Enforce It Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Enforce It
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {enforcementSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-emerald-500/50 transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-cyan-500/50 transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                We simplify influencer marketing with a human-first approach and smart tools that turn great 
                creators into repeatable growth channels for brands.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-purple-500/50 transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Our Vision
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Our mission is to transform influencer marketing into a scalable, predictable growth engine for 
                every brand — from startups to enterprises — by becoming the leading platform where brands find 
                the perfect creator match in minutes and partnerships scale with transparency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions or Concerns Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-emerald-500/50 transition-all duration-500 hover-grow relative overflow-hidden text-center">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions or{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                  Concerns?
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                If you have questions about our policy or believe a partnership may comply despite an appearance 
                to the contrary, please contact us at{' '}
                <a 
                  href="mailto:ethics@convogue.in" 
                  className="text-emerald-400 hover:text-emerald-300 font-semibold underline transition-colors duration-300"
                >
                  ethics@convogue.in
                </a>
                . We review requests and appeals on a case-by-case basis.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                Convogue may update this policy as our business and community evolve. Any material changes will be posted here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delay-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(7deg); }
        }
        @keyframes float-delay-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-5deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float-delay-1 7s ease-in-out infinite 1s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 5.5s ease-in-out infinite 2s;
        }
        .animate-float-delay-3 {
          animation: float-delay-3 6.5s ease-in-out infinite 3s;
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
        .animate-fade-in-delay-1 {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out both;
        }
        .bg-300\\% {
          background-size: 300%;
        }
        
        /* Grid pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Hover grow effect */
        .hover-grow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-grow:hover {
          transform: scale(1.03) translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}