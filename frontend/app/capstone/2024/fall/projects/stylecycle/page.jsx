import React from 'react';
import { ArrowRight, Linkedin, Calendar, Recycle } from 'lucide-react';

const StyleCycleProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                StyleCycle
              </h1>
              <p className="text-2xl text-gray-600">
                Refresh your wardrobe sustainably through our membership-based clothing swap platform.
              </p>
              <a 
                href="https://bgvtaj-hv.myshopify.com/"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Visit Platform
              </a>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://storage.cloud.google.com/bte-capstone-images/stylecycle/style-hero.png"
                alt="StyleCycle Platform"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img 
              src="https://storage.cloud.google.com/bte-capstone-images/stylecycle/mariangel.png"
              alt="Mariangel Sumoza"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
              <p className="text-xl mb-6">
                Mariangel Sumoza brings her passion for sustainable fashion to NYC&apos;s style-conscious community.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/mariangelsumoza" className="text-emerald-600 hover:text-emerald-700">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Communal Closet</h3>
              <p>Browse and swap quality pieces from NYC&apos;s style community with ease.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
              <p>Every item is reviewed to ensure high standards and wearability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Social Features</h3>
              <p>Follow users with similar style and get notified of new items.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process & Traction */}
      <div className="bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <img 
                src="https://storage.cloud.google.com/bte-capstone-images/stylecycle/order_form.png"
                alt="StyleCycle Order Form"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Platform Traction</h2>
              <img 
                src="https://storage.cloud.google.com/bte-capstone-images/stylecycle/traction.png"
                alt="StyleCycle Traction"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <p>Shopify platform with custom theme integration</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold mb-4">Backend</h3>
              <p>Google Forms/Sheets for data management, Calendly for scheduling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleCycleProject;