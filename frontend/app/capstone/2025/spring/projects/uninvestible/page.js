'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaExternalLinkAlt, FaGithub, FaPlayCircle, FaFilePdf } from 'react-icons/fa';

const ProjectDetailPage = ({ projectId }) => {
  // Project data
  const [project, setProject] = useState({
    id: projectId || 'uninvestible',
    name: 'Uninvestible',
    projectLink: 'https://pitch.com/v/uninvestable-final-pitch-29u6bm',
    linkedinProfile: 'https://www.linkedin.com/in/klx205/',
    githubProfile: 'https://github.com/klx205',
    teamMembers: [
      { name: 'Kevin Xiong', role: 'Founder & Developer', avatar: '/projects/spring2025/uninvestible/kevin_headshot.jpg' }
    ],
    banner: null, // We'll create a custom background instead
    logo: '/projects/spring2025/uninvestible/Logo.png',
    description: [
      'UNINVESTIBLE is a dual AI business intelligence platform and brokerage platform that assists retail investors in the Chinese markets with a macro focus.',
      'It utilizes a custom AI business intelligence assistant to translate foreign publications directly and provide relevant forward guidance based on signaled industries.',
      'It provides company names, corporate structures, and financial information on major foreign companies.',
      'Its main value proposition lies in the business intelligence offering that is much cheaper than Bloomberg and Capital IQ subscriptions while providing incentives for direct trade execution.',
      'Furthermore, it would allow for direct equity investments and the option of overriding HKEX minimum stock order requirements once the business scales.',
    ],
    media: {
      type: 'image',
      url: '/projects/spring2025/uninvestible/Main Page.png',
      alt: 'Uninvestible Main Interface'
    },
    story: `The idea for UNINVESTIBLE emerged from Kevin Xiong's personal investing and internship experiences. During a previous bull market, Kevin's investments in blue chip Chinese stocks outperformed the S&P 500, sparking a deep interest in overseas alpha generation. His time at a securities firm in Beijing exposed the fragmented structure of Chinese markets and the inefficiencies within them—insights that inspired the creation of a more accessible and data-rich investment platform for American retail investors. By blending AI with macro research and trade execution, UNINVESTIBLE aims to democratize access to China's equity markets.`,
    problemSolution: `This project addresses the information asymmetry that American retail investors face in discovering alpha and trading opportunities in the Chinese markets. Through AI infrastructure, UNINVESTIBLE allows users to gather relevant and bespoke information on companies in the Chinese market. The pricing of $20 per month significantly undercuts Bloomberg and Capital IQ while offering personalized information. Furthermore, it provides in-depth information on market conditions and government publications through web scraping local news platforms and government announcements. By participating in the StockConnect program, this platform allows users to invest directly into the HK, SZ, and SH equity markets. This opens more equities to American retail investors, while clearing systems within the platform will avoid the restrictive minimum lot sizes required by the HKEX.`,
    marketAnalysis: [
      '50 million retail investors in the U.S.',
      'Growing appetite for macro diversification due to U.S. market volatility',
      'Retail investors often priced out of U.S. equities or unaware of foreign opportunities',
      'American investors face barriers like high data costs (Bloomberg, Capital IQ) and limited access to foreign markets'
    ],
    advisors: ['Diego (Faculty Advisor)'],
    moreInfo: {
      github: 'https://github.com/klx205',
      presentation: 'https://pitch.com/v/uninvestable-final-pitch-29u6bm',
      video: '/projects/spring2025/uninvestible/UNINVESTABLE_demo_video.mp4'
    },
    features: [
      {
        title: 'AI Business Intelligence Assistant',
        description: 'Translates foreign publications and extracts macro signals to help users discover trading opportunities.'
      },
      {
        title: 'Equity Market Access',
        description: 'Allows users to invest directly in HK, SZ, and SH equities through the StockConnect program.'
      },
      {
        title: 'Affordable Pricing',
        description: 'At $20/month, it undercuts Bloomberg and Capital IQ while offering personalized, actionable data.'
      },
      {
        title: 'Market Condition Aggregator',
        description: 'Scrapes and synthesizes data from government sources and financial news to inform trading decisions.'
      },
      {
        title: 'Business Intelligence AI',
        description: 'Scrapes and translates global publications, surfacing relevant signals and company-level data.',
        image: '/projects/spring2025/uninvestible/Business Intelligence AI Prototype.png'
      },
      {
        title: 'Macro Market Dashboard',
        description: 'Provides a clean, informative overview of China\'s economic direction and relevant sectors.',
        image: '/projects/spring2025/uninvestible/Business Intelligence Landing.png'
      }
    ],
    lessons: `Feasibility is a key aspect of every project—one needs a supportive team to scale complex ideas. It's also crucial to manage expectations and adapt the project to regulatory realities. While the technical prototype is complete, the legal hurdles for a cross-border brokerage platform are significant. Due to this, the project will likely not continue in the near term.`,
    technical: `Developed using NextJS, React, and OpenAI. The frontend prototype and AI assistant were built independently by Kevin Xiong, without a technical team, using available co-pilot tools. There were no major technical challenges reported.`
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative">
        {/* Cover Banner */}
        <div className="h-48 sm:h-64 md:h-80 w-full relative overflow-hidden">
          {/* Gradient background */}
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 25%, #43a047 50%, #4caf50 75%, #66bb6a 100%)',
              backgroundSize: '200% 200%',
              animation: 'swirl 15s ease infinite',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Add swirly elements */}
            <div style={{
              position: 'absolute',
              width: '300%',
              height: '300%',
              top: '-100%',
              left: '-100%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)',
              transform: 'rotate(0deg)',
              animation: 'rotate 30s linear infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              width: '200%',
              height: '200%',
              top: '-50%',
              left: '-50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
              transform: 'rotate(0deg)',
              animation: 'rotate 20s linear infinite reverse'
            }}></div>
            <style jsx>{`
              @keyframes swirl {
                0% { background-position: 0% 50% }
                50% { background-position: 100% 50% }
                100% { background-position: 0% 50% }
              }
              @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-16 sm:-mt-20 mb-6 px-4">
            
            {/* Project Logo/Image */}
            <div className="absolute left-0 -top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-lg border-4 border-white shadow-md overflow-hidden bg-white">
              {project.logo ? (
                <img 
                  src={project.logo} 
                  alt={`${project.name} logo`}
                  className="w-full h-full object-contain p-2" 
                />
              ) : (
                <div className="w-full h-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">{project.name.charAt(0)}</span>
                </div>
              )}
            </div>
            
            {/* Project Name & Actions */}
            <div className="ml-0 sm:ml-36 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
                <p className="text-gray-600 text-sm">AI-Powered Business Intelligence & Brokerage Platform</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Project Description */}
            <div className="md:col-span-5 bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Project Description</h2>
              <ul className="space-y-3">
                {project.description.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">Key Features</h2>
              <div className="space-y-4">
                {project.features.filter(feature => !feature.image).map((feature, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-medium text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4">Market Analysis</h2>
              <ul className="space-y-2">
                {project.marketAnalysis.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Media and Story Section */}
            <div className="md:col-span-7 space-y-6">
              {/* Media Section */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Platform Interface</h2>
                <div className="relative aspect-video bg-gray-200 flex items-center justify-center overflow-hidden rounded-lg">
                  {project.media.url ? (
                    <img 
                      src={project.media.url} 
                      alt={project.media.alt} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p className="text-gray-500">Media Content</p>
                  )}
                </div>
                <p className="text-gray-600 mt-3 text-sm">The UNINVESTIBLE platform provides a clean, intuitive interface for accessing Chinese market data and executing trades.</p>
              </div>

              {/* Story Section */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700">{project.story}</p>
              </div>
              
              {/* Problem & Solution Section */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Problem & Solution</h2>
                <p className="text-gray-700">{project.problemSolution}</p>
              </div>

              {/* Feature Screenshots Section */}
              <div className="bg-white p-6 shadow-md rounded-lg mt-6">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.features.filter(feature => feature.image).map((feature, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
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

              {/* Technical Approach */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Technical Approach</h2>
                <p className="text-gray-700">{project.technical}</p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-6">About the Creator</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                <img src={project.teamMembers[0].avatar} alt={project.teamMembers[0].name} className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-xl">{project.teamMembers[0].name}</h3>
                <p className="text-gray-600">{project.teamMembers[0].role}</p>
                <p className="text-gray-600 mt-2">
                  Senior at NYU studying Business, Technology, and Computer Science. Kevin brings a unique perspective from both his investing and 
                  international finance internship experience. He&apos;s currently seeking a full-time role in finance—specifically investing, trading, or asset management.
                </p>
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

          {/* Lessons Learned Section */}
          <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Lessons Learned & Future Plans</h2>
            <p className="text-gray-700">{project.lessons}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-12 py-6">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start">
            <div>
              <Link href="/capstone/2025/spring" className="text-green-600 hover:underline">
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
                  <a href={project.moreInfo.github} target="_blank" rel="noopener noreferrer" className="block text-green-600 hover:underline flex items-center">
                    <FaGithub className="mr-2" /> 
                    GitHub Repository
                  </a>
                )}
                {project.moreInfo.presentation && (
                  <a href={project.moreInfo.presentation} target="_blank" rel="noopener noreferrer" className="block text-green-600 hover:underline flex items-center">
                    <FaFilePdf className="mr-2" />
                    Presentation Deck
                  </a>
                )}
                {project.moreInfo.video && (
                  <a href={project.moreInfo.video} target="_blank" rel="noopener noreferrer" className="block text-green-600 hover:underline flex items-center">
                    <FaPlayCircle className="mr-2" />
                    Demo Video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
