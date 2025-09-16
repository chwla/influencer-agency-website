'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  ArrowUp,
  Zap,
  Users,
  TrendingUp,
  Target,
  Bell,
  CheckCircle
} from 'lucide-react';

export default function Footer() {
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [updates, setUpdates] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Instagram, href: 'https://www.instagram.com/convogue.in/?igsh=MWNmb3NrODVrdHh6dA%3D%3D&utm_source=qr', color: 'hover:text-pink-400', label: 'Instagram' },
    { Icon: Linkedin, href: '#', color: 'hover:text-blue-500', label: 'LinkedIn' }
  ];

  const services = [
    'Influencer Marketing',
    'Meme Marketing',
    'Event Management',
    'Reputation Management',
    'Content Creation',
    'Brand Partnerships'
  ];

  const quickLinks = [
    { text: 'Home', href: '/' },
    { text: 'Contact Us', href: '/contact' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'About Us', href: '/about' }
  ];

  const resources = [
    'Blog',
    'Influencer Guide',
    'Marketing Tips',
    'Industry Reports',
    'Webinars',
    'FAQ'
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-16 left-1/4 w-8 h-8 text-teal-400/30 animate-float">
          <Zap size={32} />
        </div>
        <div className="absolute top-32 right-1/4 w-8 h-8 text-purple-400/30 animate-float-delayed">
          <Users size={32} />
        </div>
        <div className="absolute bottom-20 left-1/2 w-8 h-8 text-blue-400/30 animate-float">
          <TrendingUp size={32} />
        </div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 text-pink-400/30 animate-float-delayed">
          <Target size={32} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-gray-900 dark:text-white">Con</span>
                <span className="text-teal-400">vogue</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Bridging brands and creators in the digital ecosystem. We specialize in authentic partnerships that drive real results and meaningful connections.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Mail size={18} className="mr-3 text-teal-400" />
                <a href="mailto:team@convogue.in?subject=Inquiry%20from%20Convogue%20Website&body=Hi%20Convogue%20Team," className="hover:underline">
                  team@convogue.in
                </a>
              </div>
              <div className="flex items-start text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="mr-3 text-teal-400 mt-1" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 relative">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, color, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    aria-label={label}
                    className={`w-10 h-10 bg-white/50 dark:bg-gray-800/50 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:shadow-lg backdrop-blur-sm border border-gray-300 dark:border-gray-700/50`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-6">
              <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                © {currentYear} Convogue. All rights reserved.
              </p>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group w-10 h-10 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-500/25"
                aria-label="Back to top"
              >
                <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  );
}