import React from 'react';
import { ArrowRight, Linkedin, ExternalLink, Clock, Crown, Calendar, Menu, MessageSquare } from 'lucide-react';

const TableTangoProject = () => {
  const team = [
    { name: "Yura Li", email: "yl8324@stern.nyu.edu" },
    { name: "Selina Lu", email: "yl8929@stern.nyu.edu" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0">
          <img 
            src="/projects/table-tango/hero.png"
            alt="TableTango Interface"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-600/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">TableTango</h1>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            Revolutionizing restaurant waitlists and reservations with real-time availability and priority access.
          </p>
          <div className="flex gap-4 mt-8">
            <a 
              href="https://www.figma.com/proto/a5I2E8BX49CVBgenEspg30/restaurant?node-id=5-6" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
            >
              View Demo <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="h-6 w-6 text-orange-600" />,
              title: "Real-Time Waitlist",
              description: "View and join live waitlists with transparent position tracking."
            },
            {
              icon: <Crown className="h-6 w-6 text-orange-600" />,
              title: "Priority Access",
              description: "Skip the line with premium priority access options."
            },
            {
              icon: <Calendar className="h-6 w-6 text-orange-600" />,
              title: "Integrated Reservations",
              description: "Seamless booking and payment management in one platform."
            },
            {
              icon: <Menu className="h-6 w-6 text-orange-600" />,
              title: "Dynamic Menus",
              description: "Real-time menu updates for accurate dining information."
            },
            {
              icon: <MessageSquare className="h-6 w-6 text-orange-600" />,
              title: "Customer Interaction",
              description: "Direct feedback and communication between diners and restaurants."
            }
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Evolution Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Project Evolution</h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Original Concept</h3>
                  <p className="text-gray-600">
                    Initially focused on solving NYC restaurant reservation challenges through 
                    personalized recommendations and reservation trading.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Current Version</h3>
                  <p className="text-gray-600">
                    Evolved to address restaurant operations with real-time waitlist management, 
                    creating a win-win solution for both restaurants and diners.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Timeline</h2>
              <div className="space-y-6">
                {[
                  { date: "September 2024", event: "Project Kickoff", details: "Initial brainstorming and concept development" },
                  { date: "October 2024", event: "Market Research", details: "Interviews with restaurant owners and diners" },
                  { date: "November 2024", event: "Prototype Development", details: "Built functional prototype with core features" },
                  { date: "December 2024", event: "Pilot Testing", details: "Launched with select restaurants for feedback" },
                  { date: "January 2025", event: "Public Beta", details: "Planned wider release in NYC" }
                ].map((milestone) => (
                  <div key={milestone.date} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-orange-600 font-medium">{milestone.date}</div>
                    <div className="font-medium">{milestone.event}</div>
                    <div className="text-sm text-gray-600">{milestone.details}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="flex flex-col items-center">
            <img 
              src="https://storage.cloud.google.com/bte-capstone-images/tabletango/team.png"
              alt="TableTango Team"
              className="rounded-xl shadow-lg mb-8 max-w-2xl w-full"
            />
            <div className="grid grid-cols-2 gap-8 max-w-xl w-full">
              {team.map((member) => (
                <div key={member.email} className="text-center">
                  <div className="font-medium">{member.name}</div>
                  <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-800 mt-2">
                    <Linkedin className="h-4 w-4 mr-1" />
                    Connect
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TailwindCSS</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTangoProject;