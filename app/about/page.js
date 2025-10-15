"use client";

import React, { useState, useEffect } from 'react';
import { Crown, Code, Lightbulb, Target, Zap, Users, Rocket } from 'lucide-react';

export default function About() {
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

      {/* Floating Social Icons */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 left-16 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center animate-float backdrop-blur-sm border border-emerald-500/30">
          <Crown className="w-5 h-5 text-emerald-400" />
        </div>
        <div className="absolute top-64 right-24 w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center animate-float-delay-1 backdrop-blur-sm border border-cyan-500/30">
          <Code className="w-6 h-6 text-cyan-400" />
        </div>
        <div className="absolute bottom-96 left-12 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center animate-float-delay-2 backdrop-blur-sm border border-purple-500/30">
          <Lightbulb className="w-7 h-7 text-purple-400" />
        </div>
        <div className="absolute bottom-32 right-16 w-13 h-13 bg-pink-500/20 rounded-full flex items-center justify-center animate-float-delay-3 backdrop-blur-sm border border-pink-500/30">
          <Rocket className="w-6 h-6 text-pink-400" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300 inline-block">
                Convogue
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-1">
              At Convogue, we&apos;re on a mission to simplify and elevate the way brands and creators collaborate. 
              Our team combines deep knowledge of influencer marketing, hands-on industry experience, and strong 
              technical expertise to build a platform that makes authentic partnerships effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Team
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Raghav Goyal */}
            <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-emerald-500/50 transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden animate-fade-in-up">
              <div className="relative z-10">
                <div className="w-32 h-32 rounded-2xl mb-6 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                  <img
                    src="/photos/about1.jpeg"
                    alt="Raghav Goyal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">Raghav Goyal</h3>
                <p className="text-emerald-300 mb-4 font-medium group-hover:text-emerald-200 transition-colors duration-300">Campaign Manager</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Raghav has spent the past three years in London studying Influencer Marketing and Digital Media. 
                  His academic focus and on-the-ground involvement with global brands and student entrepreneurs 
                  give him a clear view of the challenges creators and companies face when trying to work together. 
                  At Convogue, he leads strategy, vision, and business development.
                </p>
              </div>
            </div>

            {/* Priyam Varshney */}
            <div className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-emerald-500/50 transition-all duration-500 hover-grow group cursor-pointer relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative z-10">
                <div className="w-32 h-32 rounded-2xl mb-6 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                  <img
                    src="/photos/about3.jpeg"
                    alt="Priyam Varshney"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors duration-300">Priyam Varshney</h3>
                <p className="text-emerald-300 mb-4 font-medium group-hover:text-emerald-200 transition-colors duration-300">Senior Advisor</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  With over four years of hands-on experience in the influencer marketing industry and a current 
                  role at Lovely Professional University, Priyam brings invaluable insight into market trends, 
                  brand expectations, and creator needs. He advises on industry best practices, growth strategies, 
                  and partnership models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Background effect for mission section */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-emerald-50/10 to-white/20 dark:from-gray-800/20 dark:via-emerald-900/10 dark:to-gray-800/20 rounded-3xl backdrop-blur-sm border border-gray-300 dark:border-gray-700/30"></div>
          
          <div className="relative z-10 p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 hover:scale-110 hover:rotate-12 transition-all duration-300 animate-pulse-glow">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                Mission
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-delay-2">
              Together, we blend strategy, technology, and industry expertise to create a platform that 
              truly empowers brands and creators to connect, collaborate, and grow.
            </p>
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
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3); }
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
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
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
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}