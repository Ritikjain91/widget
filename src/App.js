import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from 'lucide-react';

const SalesRepProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop'
  ]);

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddImage = () => {
    const newImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop';
    setImages([...images, newImage]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-8">
      <div className="w-full max-w-7xl flex gap-6">
        {/* Left side - empty but responsive */}
        <div className="hidden lg:block lg:w-1/2"></div>
        
        {/* Right side - content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* About Me Widget */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <div className="flex items-center gap-4 mb-6">
              <button className="text-gray-400 hover:text-gray-300 transition-colors">
                <HelpCircle size={24} />
              </button>
              
              {/* Tab Navigation */}
              <div className="flex bg-gray-900/80 rounded-2xl p-2 flex-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gray-700 text-white shadow-lg'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area with Scrollbar */}
            <div className="relative">
              <div className="max-h-64 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                <p className="text-gray-300 leading-relaxed text-base">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                </p>
                <p className="text-gray-300 leading-relaxed text-base mt-4">
                  I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                </p>
              </div>
              {/* Scrollbar indicator on the right */}
              <div className="absolute right-0 top-0 w-1 h-full bg-gray-700/30 rounded-full">
                <div className="w-full h-20 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Gallery Widget */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button className="text-gray-400 hover:text-gray-300 transition-colors">
                  <HelpCircle size={24} />
                </button>
                <div className="bg-gray-900/80 rounded-2xl py-3 px-8">
                  <h2 className="text-white font-medium text-lg">Gallery</h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddImage}
                  className="bg-gray-900/80 hover:bg-gray-900 text-white rounded-2xl py-3 px-6 font-medium transition-all duration-300 shadow-lg flex items-center gap-2 hover:shadow-xl"
                >
                  <Plus size={18} />
                  ADD IMAGE
                </button>
                <button
                  onClick={handlePrevImage}
                  className="bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-full p-3 transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="bg-gray-900/50 hover:bg-gray-800/50 text-gray-500 hover:text-gray-400 rounded-full p-3 transition-all duration-300 shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {images.slice(currentImageIndex, currentImageIndex + 3).map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRepProfile;