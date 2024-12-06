import React from 'react';
import { ArrowRight, Linkedin, ExternalLink, Search, Database, BarChart, Calculator } from 'lucide-react';

const ScaleSearchProject = () => {
  const team = [
    { name: "Vincent Su", email: "vls8142@stern.nyu.edu" },
    { name: "Arjun Kumar", email: "amk9604@stern.nyu.edu" },
    { name: "Pranav Srigiriraju" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-violet-800 to-purple-800">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-20"
            autoPlay
            loop
            muted
            playsInline
            src="https://storage.cloud.google.com/bte-capstone-images/scalesearch/Screen%20Recording%202024-11-07%20at%202.51.49%E2%80%AFPM.mov"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-800/90 to-purple-800/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">ScaleSearch</h1>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            Investment discovery powered by human-based intelligence and precision-ranked insights.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Database className="h-6 w-6 text-violet-600" />,
              title: "Platform Integration",
              description: "Seamless integration with CRM systems like Salesforce and HubSpot."
            },
            {
              icon: <Search className="h-6 w-6 text-violet-600" />,
              title: "Humanistic Search",
              description: "Natural language search across CRM databases for intuitive discovery."
            },
            {
              icon: <BarChart className="h-6 w-6 text-violet-600" />,
              title: "Real-time Ranking",
              description: "Dynamic ranking based on latest company news and updates."
            },
            {
              icon: <Calculator className="h-6 w-6 text-violet-600" />,
              title: "Investment Scoring",
              description: "Data-driven scoring of investment opportunities for better decision making."
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshots Gallery */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://storage.cloud.google.com/bte-capstone-images/scalesearch/Screenshot%202024-11-26%20at%204.15.33%E2%80%AFPM.png",
              "https://storage.cloud.google.com/bte-capstone-images/scalesearch/Screenshot%202024-11-26%20at%204.15.41%E2%80%AFPM.png",
              "https://storage.cloud.google.com/bte-capstone-images/scalesearch/Screenshot%202024-11-26%20at%204.16.48%E2%80%AFPM.png",
              "https://storage.cloud.google.com/bte-capstone-images/scalesearch/Screenshot%202024-11-26%20at%204.17.07%E2%80%AFPM.png",
              "https://storage.cloud.google.com/bte-capstone-images/scalesearch/Screenshot%202024-11-26%20at%204.17.59%E2%80%AFPM.png"
            ].map((screenshot, index) => (
              <img 
                key={index}
                src={screenshot}
                alt={`ScaleSearch Screenshot ${index + 1}`}
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Evolution Timeline */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Project Evolution</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Original Concept</h3>
                  <p className="text-gray-600">
                    Started as a &quot;Tinder for investors&quot; — a marketplace platform connecting 
                    startups with potential investors.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">Current Version</h3>
                  <p className="text-gray-600">
                    Evolved into a sophisticated search platform integrating humanistic search 
                    functions with CRM systems for precision-based investment sourcing.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Development Timeline</h2>
              <div className="space-y-4">
                {[
                  { date: "September 2024", event: "20+ customer interviews conducted" },
                  { date: "October 2024", event: "Pivoted to semantic search sourcing" },
                  { date: "November 2024", event: "MVP launch and user testing" },
                  { date: "December 2024", event: "Prototype completion" }
                ].map((milestone) => (
                  <div key={milestone.date} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-violet-600 font-medium">{milestone.date}</div>
                    <div className="font-medium">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">CSS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">AI Integration</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">OpenAI</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Semantic Search</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Real-time Ranking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="flex justify-center gap-12">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="font-medium mb-2">{member.name}</div>
                <a href="#" className="text-violet-600 hover:text-violet-800">
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

export default ScaleSearchProject;