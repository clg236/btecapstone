import React from 'react';
import { ArrowRight, Linkedin, Github, ExternalLink } from 'lucide-react';

const AltfolioProject = () => {
  const team = [
    { name: "Edison Chen", email: "ebc5802@stern.nyu.edu" },
    { name: "Harry Du", email: "hd1202@stern.nyu.edu" },
    { name: "Isaiah Gomez", email: "ieg4653@stern.nyu.edu" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-black">
        <img 
          src="https://storage.cloud.google.com/bte-capstone-images/altfolio/ezgif-6-8d1fa663c3-1.gif"
          alt="Altfolio Demo"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">Altfolio</h1>
          <p className="text-3xl text-white/90 max-w-2xl font-light">
            Harness the power of alternative data with our no-code scraping and analysis platform.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
              <p className="text-xl text-gray-600 mb-8">
                A dedicated group of founders bringing alternative data analysis to retail investors.
              </p>
              <div className="space-y-4">
                {team.map((member) => (
                  <div key={member.email} className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <div className="flex gap-2 mt-1">
                        <a href="#" className="text-gray-500 hover:text-blue-600">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-800">
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://storage.cloud.google.com/bte-capstone-images/altfolio/1.%20altfolio_first_day.jpg"
                alt="Altfolio Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Core Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Altbot</h3>
              <p className="text-gray-600">
                Interactive AI-powered query tool for customizing search parameters and conducting sentiment analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Data Filters</h3>
              <p className="text-gray-600">
                Powerful filtering options for keywords, dates, regions, and industries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Flexible Plans</h3>
              <p className="text-gray-600">
                Subscription tiers with varying data scraping limits to match your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Platform Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="https://storage.cloud.google.com/bte-capstone-images/altfolio/Screenshot%202024-11-26%20at%204.35.02%E2%80%AFPM.png"
              alt="Screenshot 1"
              className="rounded-lg shadow-sm"
            />
            <img 
              src="https://storage.cloud.google.com/bte-capstone-images/altfolio/Screenshot%202024-11-26%20at%204.36.40%E2%80%AFPM.png"
              alt="Screenshot 2"
              className="rounded-lg shadow-sm"
            />
            <img 
              src="https://storage.cloud.google.com/bte-capstone-images/altfolio/Screenshot%202024-12-04%20at%204.32.30%E2%80%AFPM.png"
              alt="Screenshot 3"
              className="rounded-lg shadow-sm"
            />
            <img 
              src="https://storage.cloud.google.com/bte-capstone-images/altfolio/Screenshot%202024-12-04%20at%204.33.09%E2%80%AFPM.png"
              alt="Screenshot 4"
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Tech & Timeline Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Frontend</span>
                  <span>React (Framer, WebFlow)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Backend</span>
                  <span>AWS Lambda</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">AI</span>
                  <span>OpenAI API</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Timeline</h2>
              <div className="space-y-6">
                {[
                  { date: "September 30 2024", event: "Pivoted to ESG investors" },
                  { date: "October 15 2024", event: "Created first design iteration" },
                  { date: "November 10 2024", event: "Finalized website design" },
                  { date: "December 3 2024", event: "Prototype running on AWS" }
                ].map((milestone) => (
                  <div key={milestone.date} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-500">{milestone.date}</div>
                    <div className="font-medium">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltfolioProject;