import React from 'react';
import { ArrowRight, Linkedin, Github, ExternalLink, Check, FileText, Search } from 'lucide-react';

const KaSaProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="absolute inset-0">
          <img 
            src="https://storage.cloud.google.com/bte-capstone-images/kasa/kasa_logo.png"
            alt="KaSa Logo"
            className="w-full h-full object-contain p-12 opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-600/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-4">KaSa Batteries</h1>
          <div className="text-xl text-white/80 mb-6">環境再生 | Kankyō Saisei</div>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            Connecting battery recyclers with repair shops to streamline the recycling process and reduce waste.
          </p>
        </div>
      </div>

      {/* First Deal Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-emerald-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">First Major Success</h2>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-2">
              <div className="text-lg font-medium">1,000 metric tonnes</div>
              <div className="text-emerald-600">12-month contract</div>
              <div className="text-sm text-gray-600">Between TechPoly (Brazil) and Rybit (New York)</div>
            </div>
            <div className="text-5xl font-bold text-emerald-600">$2/tonne</div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">KaSa Seal of Approval</h3>
              <p className="text-gray-600">
                Pre-screened and verified recyclers and repair shops, eliminating the need for additional due diligence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Price Comparison</h3>
              <p className="text-gray-600">
                Comprehensive list of matched recyclers and repair shops with transparent pricing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Standardized Documentation</h3>
              <p className="text-gray-600">
                Streamlined documentation process with standardized formats for all necessary paperwork.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Our Journey</h2>
          <div className="space-y-12">
            {[
              {
                date: "September 5, 2024",
                title: "Inspiration & Validation",
                description: "Discovered inefficiencies in lithium-ion battery recycling during battery metals trading internship."
              },
              {
                date: "October 1, 2024",
                title: "Strategic Pivot",
                description: "Shifted focus from UK to US market due to regulatory constraints and market opportunities."
              },
              {
                date: "October 22, 2024",
                title: "Website Launch",
                description: "Launched kasabatteries.com with business contact forms and SEO-optimized content."
              },
              {
                date: "November 5, 2024",
                title: "First Major Deal",
                description: "Facilitated 1,000-tonne contract between TechPoly and Rybit."
              }
            ].map((milestone) => (
              <div key={milestone.date} className="flex items-start space-x-6">
                <div className="w-32 flex-shrink-0">
                  <div className="text-sm font-medium text-gray-500">{milestone.date}</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
              <div className="space-y-4">
                <div className="text-xl font-medium">Dimash Shubay</div>
                <p className="text-gray-600 leading-relaxed">
                  Inspired by experiences in battery metals trading to create a more efficient 
                  and transparent battery recycling ecosystem.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect
                  </a>
                  <a 
                    href="http://kasabatteries.com" 
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://storage.cloud.google.com/bte-capstone-images/kasa/dimash.png"
                alt="Dimash Shubay"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaSaProject;