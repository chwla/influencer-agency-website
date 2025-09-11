'use client';

import { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, User, Mail, Building2, MessageSquare, Phone, Globe, Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xeolnpqq");
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    campaignGoals: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object with all form fields
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key]) {
        submitData.append(key, formData[key]);
      }
    });

    await handleSubmit(submitData);
    
    // Reset form after successful submission
    if (state.succeeded) {
      setTimeout(() => {
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          website: '',
          industry: '',
          campaignGoals: '',
          budget: '',
          timeline: '',
          message: ''
        });
      }, 3000);
    }
  };

  const floatingIcons = [
    { Icon: Target, className: "top-20 left-16 text-teal-400" },
    { Icon: TrendingUp, className: "top-32 right-20 text-purple-400" },
    { Icon: Users, className: "top-64 left-8 text-blue-400" },
    { Icon: Zap, className: "top-96 right-16 text-pink-400" },
    { Icon: Globe, className: "bottom-32 left-20 text-green-400" },
    { Icon: MessageSquare, className: "bottom-48 right-12 text-orange-400" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, className }, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center animate-pulse ${className}`}
            style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index * 0.5}s`
            }}
          >
            <Icon size={24} className="opacity-60" />
          </div>
        ))}
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-teal-400 bg-clip-text text-transparent">
              Let&apos;s Create Something
              <span className="block text-teal-400">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your brand presence in the creator economy? Share your vision with us and let&apos;s craft a campaign that resonates with your audience.
            </p>
          </div>


          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl border border-gray-800/50 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Animated Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl animate-pulse opacity-30"></div>
            
            <div className="relative z-10">
              {state.succeeded ? (
                <div className="text-center py-16 animate-fade-in-up">
                  <div className="w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
                  <p className="text-gray-400 text-lg">We&apos;ve received your inquiry and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <div ref={formRef} className="space-y-8">
                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <Building2 size={16} className="mr-2 text-teal-400" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600"
                        placeholder="Your Company Name"
                        required
                      />
                      <ValidationError 
                        prefix="Company Name" 
                        field="companyName"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <User size={16} className="mr-2 text-teal-400" />
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600"
                        placeholder="Your Full Name"
                        required
                      />
                      <ValidationError 
                        prefix="Contact Person" 
                        field="contactPerson"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <Mail size={16} className="mr-2 text-teal-400" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600"
                        placeholder="your@email.com"
                        required
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <Phone size={16} className="mr-2 text-teal-400" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <ValidationError 
                        prefix="Phone" 
                        field="phone"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Website and Industry */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                        <Globe size={16} className="mr-2 text-teal-400" />
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600"
                        placeholder="https://yourwebsite.com"
                      />
                      <ValidationError 
                        prefix="Website" 
                        field="website"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3">Industry *</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white transition-all duration-300 group-hover:border-gray-600"
                        required
                      >
                        <option value="">Select Industry</option>
                        <option value="technology">Technology</option>
                        <option value="fashion">Fashion &amp; Lifestyle</option>
                        <option value="beauty">Beauty &amp; Cosmetics</option>
                        <option value="food">Food &amp; Beverage</option>
                        <option value="fitness">Health &amp; Fitness</option>
                        <option value="travel">Travel &amp; Tourism</option>
                        <option value="finance">Finance &amp; Banking</option>
                        <option value="education">Education</option>
                        <option value="gaming">Gaming &amp; Entertainment</option>
                        <option value="other">Other</option>
                      </select>
                      <ValidationError 
                        prefix="Industry" 
                        field="industry"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Campaign Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3">Campaign Budget (INR)</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white transition-all duration-300 group-hover:border-gray-600"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                        <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                        <option value="5L-10L">₹5,00,000 - ₹10,00,000</option>
                        <option value="10L-25L">₹10,00,000 - ₹25,00,000</option>
                        <option value="25L+">₹25,00,000+</option>
                      </select>
                      <ValidationError 
                        prefix="Budget" 
                        field="budget"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-3">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white transition-all duration-300 group-hover:border-gray-600"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP (Within 2 weeks)</option>
                        <option value="1month">Within 1 month</option>
                        <option value="2-3months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                      <ValidationError 
                        prefix="Timeline" 
                        field="timeline"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Campaign Goals */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-3">Campaign Goals</label>
                    <textarea
                      name="campaignGoals"
                      value={formData.campaignGoals}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600 resize-none"
                      placeholder="What are your main objectives? (Brand awareness, lead generation, sales, etc.)"
                    ></textarea>
                    <ValidationError 
                      prefix="Campaign Goals" 
                      field="campaignGoals"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Additional Message */}
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                      <MessageSquare size={16} className="mr-2 text-teal-400" />
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 group-hover:border-gray-600 resize-none"
                      placeholder="Tell us more about your brand, target audience, preferred platforms, or any specific requirements..."
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      type="button"
                      onClick={onSubmit}
                      disabled={state.submitting}
                      className="group bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 hover:from-teal-600 hover:to-green-600 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3"
                    >
                      {state.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Start Your Campaign</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="text-center p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-gray-400">Get a detailed proposal within 24 hours of your inquiry.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tailored Strategy</h3>
              <p className="text-gray-400">Custom campaigns designed specifically for your brand goals.</p>
            </div>
            
            <div className="text-center p-6 bg-gray-900/30 rounded-2xl border border-gray-800/50 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Track record of successful campaigns with measurable ROI.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}