import React from 'react';
import { ArrowRight, Linkedin, Music, Users, MessageSquare, Search } from 'lucide-react';

const MusiconnectProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="absolute inset-0">
          <img 
            src="/projects/musiconnect/hero.png"
            alt="Musiconnect Hero"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">Musiconnect</h1>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            Bridging artists across genres and borders, making music collaboration seamless and universal.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Born from personal experiences of music&apos;s universal language, Musiconnect aims to break down barriers 
            between artists worldwide, making collaboration accessible to independent and emerging musicians.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Artist Profiles</h3>
              <p className="text-gray-600">
                Create detailed profiles showcasing your skills, interests, and work to attract potential collaborators.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Search</h3>
              <p className="text-gray-600">
                Find your perfect collaborator with filters for genre, skills, location, and collaboration type.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect & Chat</h3>
              <p className="text-gray-600">
                Follow artists, stay updated on their projects, and communicate seamlessly through integrated messaging.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Our Journey</h2>
          <div className="space-y-12">
            {[
              {
                date: "September 2024",
                title: "Initial Idea",
                description: "Musiconnect was conceived from personal experiences with music as a universal language."
              },
              {
                date: "September - October 2024",
                title: "Research & Pivot",
                description: "Conducted artist interviews and shifted focus to independent and emerging artists."
              },
              {
                date: "November 2024",
                title: "Instagram Prototype",
                description: "Tested core features through an Instagram DM prototype."
              },
              {
                date: "November - December 2024",
                title: "Website Launch",
                description: "Launched first iteration with profile creation, search, and chat features."
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

      {/* Tech Stack Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Frontend Development</h3>
                  <p className="text-gray-600">Built with Wix platform for responsive design and seamless user experience</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Backend Services</h3>
                  <p className="text-gray-600">Powered by Wix&apos;s integrated tools for database management and functionality</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Dynamic Profiles</h3>
                  <p className="text-gray-600">Customizable artist profiles with Wix&apos;s form and template tools</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Integrated Communication</h3>
                  <p className="text-gray-600">Built-in messaging and follow system using Wix&apos;s user management features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Founder</h2>
            <div className="inline-flex flex-col items-center">
              <div className="text-xl font-semibold mb-2">Aaya Anan</div>
              <div className="flex gap-2">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusiconnectProject;