import React from 'react';
import { ArrowRight, Linkedin, ExternalLink, Bookmark, Users, Filter, FileCheck, PieChart } from 'lucide-react';

const InnovestProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-60"
            autoPlay
            loop
            muted
            playsInline
            src="https://storage.cloud.google.com/bte-capstone-images/innovest/Innnovest%20video.mov"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">Innovest</h1>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            Making startup investing as seamless as online shopping through KRChoksey's platform.
          </p>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Reimagining Startup Investment</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Exclusive platform for KRChoksey clients offering streamlined startup discovery, 
              due diligence, and investment opportunities in the Indian startup ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bookmark className="h-6 w-6 text-blue-600" />,
                title: "Save & Tag Startups",
                description: "Bookmark and categorize startups for easy tracking and monitoring."
              },
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "Team Profiles",
                description: "Access comprehensive insights including pitch decks and founder backgrounds."
              },
              {
                icon: <Filter className="h-6 w-6 text-blue-600" />,
                title: "Industry Filtering",
                description: "Discover startups by industry verticals matching your preferences."
              },
              {
                icon: <FileCheck className="h-6 w-6 text-blue-600" />,
                title: "Simplified Due Diligence",
                description: "Pre-aggregated financial and market research at your fingertips."
              },
              {
                icon: <PieChart className="h-6 w-6 text-blue-600" />,
                title: "SPV Options",
                description: "Pool investments for participation in high-value deals."
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Project Timeline</h2>
          <div className="space-y-8">
            {[
              {
                date: "August 2024",
                title: "Project Inception",
                description: "Identified need for centralized startup investment platform at KRChoksey"
              },
              {
                date: "September 2024",
                title: "Prototype Development",
                description: "Created Figma prototype and gathered client feedback"
              },
              {
                date: "October 2024",
                title: "Value Proposition Evolution",
                description: "Recognized potential as VC due diligence tool"
              },
              {
                date: "November 2024",
                title: "Pilot Program Launch",
                description: "Initiated testing with KRChoksey clients and VCs"
              },
              {
                date: "December 2024",
                title: "Platform Development",
                description: "Built web platform with e-commerce-inspired interface"
              }
            ].map((milestone) => (
              <div key={milestone.date} className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-32 flex-shrink-0">
                  <div className="text-sm font-medium text-blue-600">{milestone.date}</div>
                </div>
                <div className="flex-grow bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet the Founder</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Maitri Choksey</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building on KRChoksey's legacy to revolutionize startup investment accessibility
                  and streamline the due diligence process for the next generation of investors.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://storage.cloud.google.com/bte-capstone-images/innovest/maitri.png"
                alt="Maitri Choksey"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovestProject;