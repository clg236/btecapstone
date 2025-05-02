'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BTEHomePage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      title: 'Uninvestible', 
      description: 'A dual AI business intelligence and brokerage platform that helps retail investors access Chinese markets. It provides affordable macro analysis, translates foreign publications, and offers direct equity trading options at a fraction of traditional costs.',
      imageUrl: '/projects/spring2025/uninvestible/Hero%20Image.png',
      route: '/capstone/2025/spring/projects/uninvestible',
      teamAvatars: [
        '/projects/spring2025/uninvestible/kevin_headshot.jpg'
      ],
      teamMembers: ['Kevin Xiong']
    },
    { 
      id: 2, 
      title: 'Synced', 
      description: 'A digital platform designed to ease emotional and practical tensions between aging parents and their family caregivers. Uses AI-mediated conversations and guided questionnaires to foster mutual understanding and collaborative care decisions.',
      imageUrl: '/projects/spring2025/synced/hero_image.jpg',
      route: '/capstone/2025/spring/projects/synced',
      teamAvatars: [
        '/projects/spring2025/synced/julia_headshot.jpg', 
        '/projects/spring2025/synced/claudia_headshot.jpg'
      ],
      teamMembers: ['Julia Elefant', 'Claudia Chacon']
    },
    { 
      id: 3, 
      title: 'LoadWise', 
      description: 'Smart logistics solution that optimizes shipping routes and load distribution for increased efficiency and reduced environmental impact.',
      imageUrl: '/projects/spring2025/loadwise/LoadWiseLogo.png',
      route: '/capstone/2025/spring/projects/loadwise',
      teamAvatars: [
        '/projects/spring2025/loadwise/ben_headshot.jpeg', 
        '/projects/spring2025/loadwise/conor_headshot.jpeg'
      ],
      teamMembers: ['Ben Trask', 'Conor Kelly']
    },
    { 
      id: 4, 
      title: 'TradeTribe', 
      description: 'An emotional training platform for beginner student options traders, designed to build discipline and reduce impulsive trading behavior through structured trade logging, emotional check-ins, and AI-powered feedback.',
      imageUrl: '/projects/spring2025/tradetribe/hero.png',
      route: '/capstone/2025/spring/projects/tradetribe',
      teamAvatars: [
        '/projects/spring2025/tradetribe/kaylen_headshot.jpeg'
      ],
      teamMembers: ['Kaylen Tolliver']
    },
    { 
      id: 5, 
      title: 'Quitly', 
      description: 'An innovative habit-breaking platform that uses behavioral science and gamification to help users overcome addictions.',
      imageUrl: '/projects/spring2025/quitly/Quitly_Homepage.png',
      route: '/capstone/2025/spring/projects/quitly',
      teamAvatars: [
        '/projects/spring2025/quitly/Quitly_Daniel.jpg'
      ],
      teamMembers: ['Daniel Luo']
    },
    { 
      id: 6, 
      title: 'Muscle Memory', 
      description: 'Wearable technology that tracks and analyzes movement patterns to improve athletic performance and prevent injuries.',
      imageUrl: '/projects/spring2025/musclememory/MuscleMemory_png_HeroImage.png',
      route: '/capstone/2025/spring/projects/muscle-memory',
      teamAvatars: [
        '/projects/spring2025/musclememory/MuscleMemory_jpg_headshot.jpg',
        '/projects/spring2025/musclememory/MuscleMemory_png_GeorgeHeadshot.png'
      ],
      teamMembers: ['Jarrett Zheng', 'George Ai']
    },
    { 
      id: 7, 
      title: 'LocaleLens', 
      description: 'Augmented reality application that provides cultural and historical context to travelers exploring new locations.',
      imageUrl: '/projects/spring2025/localelens/LocaleLens_HeroImage.png',
      route: '/capstone/2025/spring/projects/localelens',
      teamAvatars: [
        '/projects/spring2025/localelens/LocaleLens_CharliePicture.jpg',
        '/projects/spring2025/localelens/LocaleLens_JonathanPicture.png'
      ],
      teamMembers: ['Charlie Hu', 'Jonathan Sidi']
    },
    { 
      id: 8, 
      title: 'Roomi', 
      description: 'A smart roommate-matching platform that connects proactive movers based on what really matters—timing, budget, and neighborhood preferences—rather than personality traits. Designed for young professionals moving to NYC.',
      imageUrl: '/projects/spring2025/roomi/Roomi Hero Image.png',
      route: '/capstone/2025/spring/projects/roomi',
      teamAvatars: [
        '/projects/spring2025/roomi/karla_headshot.jpg',
        '/projects/spring2025/roomi/sarah_headshot.JPG'
      ],
      teamMembers: ['Karla Murueta', 'Sarah Munis']
    },
    { 
      id: 9, 
      title: 'Nisa Focus', 
      description: 'An educational platform that provides personalized learning experiences for students with attention challenges.',
      imageUrl: '/projects/spring2025/nisafocus/IMG_2244%202.PNG',
      route: '/capstone/2025/spring/projects/nisa-focus',
      teamAvatars: [
        '/projects/spring2025/nisafocus/IMG_1746.jpg'
      ],
      teamMembers: ['Mariam Ouedraogo']
    }
  ]);

  // Filter projects based on search term
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // About section content
  const aboutContent = [
    'The Anand Khubani BTE Capstone showcases how students apply business fundamentals, technical skills, and entrepreneurial mindsets to solve real-world challenges.',
    'Spring 2025 projects span multiple industries including fintech (Uninvestible, TradeTribe), healthcare (Synced, Muscle Memory), logistics (LoadWise), education (Nisa Focus), and consumer applications (Roomi, LocaleLens, Quitly).',
    'Throughout their four years at NYU Stern, BTE students develop expertise in data analytics, AI applications, product design, and business model development—all evident in these capstone projects.',
    'Each project represents the culmination of collaborative work with industry mentors and faculty advisors, demonstrating both technical innovation and market viability.',
    'Many of these solutions address critical needs identified through the BTE Design Sprint methodology, where students immerse themselves in solving real NYC business challenges.',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full-width Hero Banner */}
      <header className="w-full relative">
        {/* Navigation and Search Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-white font-semibold mr-2">NYU Stern</div>
              <div className="text-purple-300 font-bold">BTE Capstone</div>
            </div>
            <div className="flex space-x-4 text-white">
              <Link href="#about" className="hover:text-purple-300">About</Link>
              <Link href="#projects" className="hover:text-purple-300">Projects</Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[500px] relative overflow-hidden">
          {/* Animated Hero background - using NYU Stern purple color scheme */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full"
              style={{
                background: 'linear-gradient(135deg, #57068c 0%, #5c068f 25%, #662a9e 50%, #793eb2 75%, #8a4ec5 100%)',
                backgroundSize: '200% 200%',
                animation: 'swirl 15s ease infinite',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Add animated swirly elements */}
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

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <div className="text-sm font-medium text-purple-300 mb-2">NYU STERN</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              Anand Khubani <span className="text-purple-300">BTE</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Spring 2025 Capstone Projects
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              Tomorrow&apos;s solutions created by today&apos;s visionaries: Transforming business through technology and entrepreneurship.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Link 
                href="#projects" 
                className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors duration-300"
              >
                Discover Projects
              </Link>
              <div className="relative mt-4 md:mt-0 w-full md:w-96">
                <input 
                  type="text" 
                  placeholder="Search projects..." 
                  className="w-full bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section - Now at the top, full width */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">About Spring 2025 Capstone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-purple-800 mb-3">The BTE Experience</h3>
              <p className="text-gray-700 mb-4">
                The NYU Stern BTE Program is a cutting-edge four-year undergraduate degree that integrates business, technology, and entrepreneurship. 
                Through immersive coursework and experiential learning, students develop the skills to lead in today&apos;s technology-driven business landscape.
              </p>
              <p className="text-gray-700 mb-4">
                The capstone project represents the culmination of students&apos; BTE journey, where they apply their cross-disciplinary expertise
                to solve real business challenges using technology and entrepreneurial thinking.
              </p>
              
              <div className="mt-6">
                <a href="https://www.stern.nyu.edu/programs-admissions/undergraduate/academics/bs-degree-business-technology-and-entrepreneurship" 
                  className="text-purple-700 hover:text-purple-900 font-medium inline-flex items-center" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  Learn more about the NYU Stern BTE program
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-purple-800 mb-3">Spring 2025 Projects</h3>
              <p className="text-gray-700 mb-3">{aboutContent[0]}</p>
              <p className="text-gray-700 mb-3">{aboutContent[1]}</p>
              <p className="text-gray-700 mb-3">{aboutContent[2]}</p>
              <p className="text-gray-700 mb-3">{aboutContent[3]}</p>
              <p className="text-gray-700 mb-4">{aboutContent[4]}</p>
              
              <h4 className="text-lg font-medium text-purple-700 mt-5 mb-2">Industry Focus Areas</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-purple-50 p-2 rounded">
                  <span className="font-medium text-purple-900">Fintech</span>
                  <p className="text-gray-600">Uninvestible, TradeTribe</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <span className="font-medium text-purple-900">Healthcare</span>
                  <p className="text-gray-600">Synced, Muscle Memory</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <span className="font-medium text-purple-900">Logistics</span>
                  <p className="text-gray-600">LoadWise</p>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <span className="font-medium text-purple-900">Consumer</span>
                  <p className="text-gray-600">Roomi, LocaleLens, Quitly</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section - Now full width */}
        <div id="projects">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-purple-900">Student Projects</h2>
            {searchTerm && (
              <div className="text-gray-600">
                {filteredProjects.length === 0 ? (
                  <span>No projects found matching &quot;{searchTerm}&quot; </span>
                ) : (
                  <span>Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} </span>
                )}
                <button 
                  className="ml-2 text-purple-600 hover:text-purple-800 font-medium"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-600 text-lg">No projects found matching &quot;{searchTerm}&quot;</p>
              <button 
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  {/* Project thumbnail */}
                  <Link href={project.route}>
                    <div className="h-48 bg-gray-300 relative flex items-center justify-center overflow-hidden">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  </Link>
                  {/* Project title and team avatars */}
                  <div className="p-5 flex flex-col justify-between items-start relative">
                    <div>
                      <Link href={project.route}>
                        <h3 className="font-medium text-lg mb-2 text-purple-900">{project.title}</h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <p className="text-gray-500 text-xs mb-4">
                        {project.teamMembers.join(' & ')}
                      </p>
                    </div>
                    <div className="flex -space-x-4 mt-2">
                      {project.teamAvatars.map((avatar, index) => (
                        <div 
                          key={index} 
                          className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white relative overflow-hidden shadow-md"
                          style={{ zIndex: project.teamAvatars.length - index }}
                        >
                          <div 
                            className="h-full w-full bg-cover bg-center"
                            style={{ 
                              backgroundImage: `url(${avatar})`,
                              backgroundSize: '100% 100%'
                            }}
                            aria-label="Team member avatar"
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer with NYU Stern branding */}
      <footer className="bg-purple-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-xl mb-2">NYU Stern School of Business</div>
              <div className="text-sm text-purple-200">Anand Khubani BS in Business, Technology and Entrepreneurship</div>
            </div>
            <div className="text-sm text-purple-200">
              <p> 2023 New York University Leonard N. Stern School of Business</p>
              <p>44 West Fourth Street, New York, NY 10012</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BTEHomePage;
