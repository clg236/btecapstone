'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaExternalLinkAlt, FaGithub, FaPlayCircle, FaFilePdf, FaArrowLeft } from 'react-icons/fa';

const ProjectDetailPage = ({ projectId }) => {
  // Project data
  const [project, setProject] = useState({
    id: projectId || 'loadwise',
    name: 'LoadWise',
    projectLink: '#',
    linkedinProfile: 'https://www.linkedin.com/',
    githubProfile: 'https://github.com/',
    teamMembers: [
      { name: 'Ben Trask', role: 'Co-Founder', avatar: '/projects/spring2025/loadwise/LoadWiseLogo.png' },
      { name: 'Conor Kelly', role: 'Co-Founder', avatar: '/projects/spring2025/loadwise/LoadWiseLogo.png' }
    ],
    banner: null, // We'll create a custom background instead
    logo: '/projects/spring2025/loadwise/LoadWiseLogo.png',
    description: [
      'LoadWise is a mobile application that helps marathon runners and triathletes optimize their training and recovery through personalized load management metrics.',
      'The platform integrates with Strava and Apple Health to analyze real-time training data.',
      'Smart algorithms provide actionable, personalized rest and training suggestions based on user performance.',
      'Advanced analytics track cumulative workload and potential injury risks to prevent overtraining.',
      'The system seamlessly connects with popular fitness tracking platforms for a smooth user experience.',
    ],
    media: {
      type: 'image',
      url: '/projects/spring2025/loadwise/LoadWiseLogo.png',
      alt: 'LoadWise Logo'
    },
    story: "The idea for LoadWise was born when Ben Trask and Conor Kelly, both seniors at NYU Stern with a passion for sports and fitness, identified a significant gap in the tools available to inexperienced marathon runners and triathletes. Through extensive research and user feedback, they developed a platform that addresses the challenge of training optimization and injury prevention. The development process involved iterative prototyping based on constant user feedback, resulting in a platform that's both powerful and intuitive. LoadWise is designed to make a meaningful impact for athletes who lack access to sophisticated training management tools.",
    problemSolution: "Marathon runners lack accessible tools to track cumulative workload and personalized help to make data-informed decisions about training intensity and recovery, which can lead to overtraining and injury. LoadWise integrates with Strava and Apple Health, analyzes real-time training load, provides actionable, personalized rest & training suggestions, and tracks injury risk using proven load algorithms.",
    marketAnalysis: [
      "Total Addressable Market: 750 million",
      "Serviceable Addressable Market: 30 million",
      "Serviceable Obtainable Market: 600,000",
      "50 million regular runners in the US",
      "2.1+ million half-marathon runners per year"
    ],
    advisors: ['Daniel Nelson'],
    moreInfo: {
      github: 'https://github.com/',
      presentation: '#',
      video: '#'
    },
    features: [
      {
        title: 'Training Load Analysis',
        description: 'Utilizes proven load algorithms to track cumulative workload and analyze training intensity to prevent overtraining.',
        image: '/projects/spring2025/loadwise/LoadWiseLogo.png'
      },
      {
        title: 'Personalized Recommendations',
        description: 'Provides actionable, data-driven suggestions for training intensity and recovery based on individual performance metrics.',
        image: '/projects/spring2025/loadwise/LoadWiseLogo.png'
      },
      {
        title: 'Injury Risk Assessment',
        description: 'Monitors fatigue levels and training patterns to identify potential injury risks before they become problems.',
        image: '/projects/spring2025/loadwise/LoadWiseLogo.png'
      },
      {
        title: 'Integration with Popular Platforms',
        description: 'Works seamlessly with Strava, Apple Health, and other fitness tracking platforms to consolidate all training data.',
        image: '/projects/spring2025/loadwise/LoadWiseLogo.png'
      }
    ],
    technical: "We developed LoadWise using Windsurf and XCode, with assistance from ChatGPT. As co-founders with limited coding experience, we leveraged AI tools to overcome technical challenges and create a functional prototype.",
    
    // Additional data specific to this project
    ben: "Senior at NYU Stern in BTE. Former NYU Varsity Men's soccer player. Driven by a passion for sports and fitness, with a vision to create technology that makes a meaningful impact for athletes.",
    conor: "Senior at NYU Stern in BTE. Originally from Riverside, CT. Passionate about combining technology with athletic performance to help runners and triathletes optimize their training.",
    lessons: "Through this project, we gained a deeper understanding of the struggles that competitive runners face due to the lack of accessible tools. We realized the power of AI tools like ChatGPT and Windsurf co-pilot in app development, even with limited experience. We plan to continue exploring how we can expand this project and integrate tools specifically designed for triathletes."
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Custom Background */}
      <header className="relative">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 h-64 md:h-80">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-50">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute top-1/4 right-1/4 w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/3 left-1/3 w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90">Optimize Your Training, Prevent Injuries</p>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 -mt-12 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                  <img 
                    src={project.logo} 
                    alt={project.name} 
                    className="w-40 h-40 object-contain"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-xl font-semibold mb-2">About the Project</h2>
                  <div className="space-y-2">
                    {project.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Problem & Solution</h2>
                    <p className="text-gray-700">{project.problemSolution}</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Market Analysis</h2>
                    <ul className="list-disc pl-5 text-gray-700">
                      {project.marketAnalysis.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700">{project.story}</p>
              </div>
              
              {/* Main Screenshot/Media */}
              <div className="mt-8 flex justify-center">
                <img 
                  src={project.media.url} 
                  alt={project.media.alt} 
                  className="max-w-full h-auto max-h-96 object-contain rounded-lg shadow"
                />
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-lg">{feature.title}</h3>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            
          {/* Technical Approach Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Technical Approach</h2>
              <p className="text-gray-700">{project.technical}</p>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">About the Creators</h2>
              
              <div className="space-y-8">
                {/* Ben's Bio */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                    <img src={project.teamMembers[0].avatar} alt={project.teamMembers[0].name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl">{project.teamMembers[0].name}</h3>
                    <p className="text-gray-600">{project.teamMembers[0].role}</p>
                    <p className="text-gray-600 mt-2">{project.ben}</p>
                    <div className="mt-3 flex space-x-3">
                      <a href={project.linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a href={project.githubProfile} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <FaGithub className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Conor's Bio */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                    <img src={project.teamMembers[1].avatar} alt={project.teamMembers[1].name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl">{project.teamMembers[1].name}</h3>
                    <p className="text-gray-600">{project.teamMembers[1].role}</p>
                    <p className="text-gray-600 mt-2">{project.conor}</p>
                    <div className="mt-3 flex space-x-3">
                      <a href={project.linkedinProfile} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a href={project.githubProfile} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <FaGithub className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons Learned Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Lessons Learned & Future Plans</h2>
              <p className="text-gray-700">{project.lessons}</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-12 py-6">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start">
            <div>
              <Link href="/capstone/2025/spring" className="text-blue-600 hover:underline">
                &larr; Back to All Projects
              </Link>
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="font-semibold mb-2">Advisor</h3>
              <ul className="text-gray-700">
                {project.advisors.map((advisor, index) => (
                  <li key={index}>{advisor}</li>
                ))}
              </ul>
              
              <h3 className="font-semibold mt-4 mb-2">More Info</h3>
              <div className="space-y-1">
                {project.moreInfo.github && (
                  <a href={project.moreInfo.github} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline flex items-center">
                    <FaGithub className="mr-2" /> 
                    GitHub Repository
                  </a>
                )}
                {project.moreInfo.presentation && (
                  <a href={project.moreInfo.presentation} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline flex items-center">
                    <FaFilePdf className="mr-2" />
                    Presentation Deck
                  </a>
                )}
                {project.moreInfo.video && (
                  <a href={project.moreInfo.video} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline flex items-center">
                    <FaPlayCircle className="mr-2" />
                    Demo Video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(40px, -40px);
          }
          66% {
            transform: scale(0.9) translate(-40px, 40px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;
