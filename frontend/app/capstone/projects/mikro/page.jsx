import React from 'react';
import { ArrowRight, Linkedin, ExternalLink, Users, Shield, Clock, ChartBar, Lock } from 'lucide-react';

const MikroProject = () => {
  const team = [
    { 
      name: "Rafed Abbassi", 
      linkedin: "https://www.linkedin.com/in/rafed-abbassi/"
    },
    { 
      name: "Jonathan Yu", 
      linkedin: "https://www.linkedin.com/in/jonathan-nyc/"
    },
    { 
      name: "Michael Shen", 
      linkedin: "https://www.linkedin.com/in/michashen/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="absolute inset-0">
          <img 
            src="/projects/brobets/hero.png"
            alt="Mikro App"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-blue-600/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">Mikro</h1>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            Friendly situational wagers for everyone.
          </p>
          <div className="flex gap-4 mt-8">
            <a 
              href="https://testflight.apple.com/join/HwWacksc"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Try on TestFlight <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* App Screenshots */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img 
            src="https://storage.cloud.google.com/bte-capstone-images/mikro/IMG_0256.PNG"
            alt="Mikro Screenshot 1"
            className="rounded-xl shadow-lg"
          />
          <img 
            src="https://storage.cloud.google.com/bte-capstone-images/mikro/IMG_0257.PNG"
            alt="Mikro Screenshot 2"
            className="rounded-xl shadow-lg"
          />
          <img 
            src="https://storage.cloud.google.com/bte-capstone-images/mikro/IMG_0258.PNG"
            alt="Mikro Screenshot 3"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "Peer-to-Peer Betting",
                description: "Create and participate in micro-bets with friends on everyday activities."
              },
              {
                icon: <Shield className="h-6 w-6 text-blue-600" />,
                title: "Bet Management",
                description: "Oversee and resolve bets with transparency and accountability."
              },
              {
                icon: <Lock className="h-6 w-6 text-blue-600" />,
                title: "Privacy Controls",
                description: "Control bet visibility with customizable privacy settings."
              },
              {
                icon: <ChartBar className="h-6 w-6 text-blue-600" />,
                title: "User Profiles & Stats",
                description: "Track win rates and betting statistics for friendly competition."
              },
              {
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                title: "Time-Limited Bets",
                description: "Set deadlines for bets to ensure timely engagement."
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Evolution Timeline */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Project Evolution</h2>
          <div className="space-y-8">
            {[
              {
                date: "September 2024",
                title: "BroBets Launch",
                description: "Initial launch targeting college students with peer-to-peer betting."
              },
              {
                date: "October 2024",
                title: "Rapid Development",
                description: "Created business model and developed app prototype based on user feedback."
              },
              {
                date: "October 2024",
                title: "Mikro Rebranding",
                description: "Evolved to Mikro to appeal to a broader audience beyond college students."
              },
              {
                date: "November 2024",
                title: "User Testing",
                description: "Launched to BTE community for testing and feedback collection."
              },
              {
                date: "November 2024",
                title: "Marketing Tests",
                description: "Conducted A/B testing with multiple domains and landing pages."
              }
            ].map((milestone) => (
              <div key={milestone.title} className="flex flex-col md:flex-row gap-6">
                <div className="w-32 flex-shrink-0">
                  <div className="text-sm font-medium text-blue-600">{milestone.date}</div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="font-medium mb-2">{member.name}</div>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="space-x-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Swift</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Firebase SDK</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="space-x-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Firestore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MikroProject;