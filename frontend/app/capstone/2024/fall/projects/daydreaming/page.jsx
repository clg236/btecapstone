import React from 'react';
import { ArrowRight, Linkedin, Map, Library, Share, Users } from 'lucide-react';

const DreamingDaytripProject = () => {
  const team = [
    { name: "Lynn Li", email: "yl8892@stern.nyu.edu" },
    { name: "Scarlett Ying", email: "my2165@stern.nyu.edu" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="absolute inset-0">
          <img 
            src="https://storage.cloud.google.com/bte-capstone-images/daydreaming/dreaming-hero.png"
            alt="Dreaming Daytrip App"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-emerald-600/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="space-y-2">
            <h1 className="text-7xl font-bold text-white mb-2">Dreaming Daytrip</h1>
            <div className="text-2xl text-white/80">白日梦行记</div>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mt-6 leading-relaxed">
            Visualizing your travel plans with interactive routes and easy sharing.
          </p>
        </div>
      </div>

      {/* Core Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Map className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Dynamic Route Planning</h3>
            <p className="text-gray-600">
              Create personalized, optimized travel routes by selecting and arranging multiple locations on an interactive map.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Library className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personal Travel Library</h3>
            <p className="text-gray-600">
              Save and organize your travel plans for future reference, making trip planning more efficient.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Share className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Community Sharing</h3>
            <p className="text-gray-600">
              Share your travel experiences and itineraries with the community, inspiring others&apos; adventures.
            </p>
          </div>
        </div>
      </div>

      {/* Project Evolution */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Project Evolution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Original Vision</h3>
                <p className="text-gray-600">
                  Started as a platform for travel content creators, focusing on visual storytelling 
                  and interactive map features for sharing travel experiences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Current Direction</h3>
                <p className="text-gray-600">
                  Evolved to serve young group travelers with practical planning tools while maintaining 
                  the engaging visual experience that makes trip planning enjoyable.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Development Timeline</h3>
              <div className="space-y-4">
                {[
                  { date: "August 2024", event: "Initial concept development" },
                  { date: "September 2024", event: "Project vision refinement" },
                  { date: "September 2024", event: "Prototype design and testing" },
                  { date: "October 2024", event: "WeChat Mini-Program development" },
                  { date: "November 2024", event: "WeChat marketing launch" }
                ].map((milestone) => (
                  <div key={milestone.date} className="flex items-start">
                    <div className="w-32 flex-shrink-0">
                      <div className="text-sm text-teal-600 font-medium">{milestone.date}</div>
                    </div>
                    <div className="flex-grow">
                      <div className="text-gray-600">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="space-x-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">WeChat Mini-Program</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Tencent Map SDK</span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="space-x-2">
                <span className="px-3 py-1 bg-white rounded-full text-sm">Tencent Cloud</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm">Cloud Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Founders</h2>
          <div className="flex justify-center gap-12">
            {team.map((member) => (
              <div key={member.email} className="text-center">
                <div className="font-medium mb-2">{member.name}</div>
                <a href="#" className="text-teal-600 hover:text-teal-800">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamingDaytripProject;