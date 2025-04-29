'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BTEHomePage = () => {
  // Search functionality
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for Fall 2024 projects
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      title: 'BroBets', 
      description: 'A comprehensive fantasy sports and social betting platform that enhances the sports viewing experience through friendly competition.',
      imageUrl: '/projects/brobets/hero.png',
      route: '/capstone/2024/fall/projects/brobets',
      teamAvatars: [
        'https://randomuser.me/api/portraits/men/33.jpg', 
        'https://randomuser.me/api/portraits/women/45.jpg'
      ] 
    },
    { 
      id: 2, 
      title: 'MusiConnect', 
      description: 'A platform connecting independent musicians with venues, fans, and industry professionals to streamline the live music booking process.',
      imageUrl: '/projects/musiconnect/hero.png',
      route: '/capstone/2024/fall/projects/musiconnect',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/62.jpg', 
        'https://randomuser.me/api/portraits/men/71.jpg'
      ] 
    },
    { 
      id: 3, 
      title: 'Eden', 
      description: 'An AI-driven system for optimizing urban gardens and small-scale agricultural projects to promote sustainable food production.',
      imageUrl: '/projects/eden/hero.png',
      route: '/capstone/2024/fall/projects/eden',
      teamAvatars: [
        'https://randomuser.me/api/portraits/men/31.jpg', 
        'https://randomuser.me/api/portraits/women/91.jpg'
      ] 
    },
    { 
      id: 4, 
      title: 'Table Tango', 
      description: 'A restaurant reservation and table management system that optimizes dining experiences for both restaurants and customers.',
      imageUrl: '/projects/table-tango/hero.png',
      route: '/capstone/2024/fall/projects/table-tango',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/42.jpg', 
        'https://randomuser.me/api/portraits/men/79.jpg'
      ] 
    },
    { 
      id: 5, 
      title: 'Innovest', 
      description: 'An investment platform that democratizes access to venture capital opportunities for everyday investors.',
      imageUrl: '/projects/innovest/hero.png',
      route: '/capstone/2024/fall/projects/innovest',
      teamAvatars: [
        'https://randomuser.me/api/portraits/men/14.jpg', 
        'https://randomuser.me/api/portraits/women/25.jpg'
      ] 
    },
    { 
      id: 6, 
      title: 'Style Cycle', 
      description: 'A circular fashion marketplace that extends the lifecycle of clothing through AI-powered matching and sustainable practices.',
      imageUrl: '/projects/style-cycle/hero.png',
      route: '/capstone/2024/fall/projects/style-cycle',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/41.jpg', 
        'https://randomuser.me/api/portraits/men/21.jpg'
      ] 
    },
    { 
      id: 7, 
      title: 'Dreaming Daytrip', 
      description: 'An AI-powered travel recommendation system that creates personalized day trip itineraries based on user preferences.',
      imageUrl: '/projects/dreaming-daytrip/hero.png',
      route: '/capstone/2024/fall/projects/dreaming-daytrip',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/51.jpg', 
        'https://randomuser.me/api/portraits/men/52.jpg'
      ] 
    },
    { 
      id: 8, 
      title: 'Risky Business', 
      description: 'A risk management platform that helps small businesses identify, assess, and mitigate operational and financial risks.',
      imageUrl: '/projects/risky-business/hero.png',
      route: '/capstone/2024/fall/projects/risky-business',
      teamAvatars: [
        'https://randomuser.me/api/portraits/men/61.jpg', 
        'https://randomuser.me/api/portraits/men/62.jpg'
      ] 
    },
    { 
      id: 9, 
      title: 'Spenser', 
      description: 'A personal finance management tool that helps young professionals budget, save, and invest through behavioral economics principles.',
      imageUrl: '/projects/spenser/hero.png',
      route: '/capstone/2024/fall/projects/spenser',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/71.jpg', 
        'https://randomuser.me/api/portraits/women/72.jpg'
      ] 
    },
    { 
      id: 10, 
      title: 'Kankyo', 
      description: 'An environmental monitoring platform that helps businesses track and reduce their carbon footprint through IoT sensors and analytics.',
      imageUrl: '/projects/kankyo/hero.png',
      route: '/capstone/2024/fall/projects/kankyo',
      teamAvatars: [
        'https://randomuser.me/api/portraits/men/81.jpg', 
        'https://randomuser.me/api/portraits/women/82.jpg'
      ] 
    },
  ]);

  // Filter projects based on search term
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // About section content
  const aboutContent = [
    'The Fall 2024 Business Technology and Entrepreneurship Capstone showcases innovative solutions developed by our talented students.',
    'Projects address real-world challenges across various industries including finance, music, agriculture, and fashion.',
    'Each project demonstrates technical excellence and entrepreneurial thinking in solving complex problems.',
    'Industry partnerships provided students with real-world insights and mentorship throughout the semester.',
    'Final presentations delivered in December 2024 highlighted both technical implementation and business strategy.',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full-width Hero Banner */}
      <header className="w-full relative">
        {/* Navigation and Search Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-white font-semibold">BTE Capstone</div>
            <div className="relative w-1/2 max-w-md">
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <div className="flex space-x-4 text-white">
              <Link href="#about" className="hover:text-blue-300">About</Link>
              <Link href="#projects" className="hover:text-blue-300">Projects</Link>
              <Link href="#contact" className="hover:text-blue-300">Contact</Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[500px] relative overflow-hidden">
          {/* Hero image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" 
              alt="Tech students collaborating" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Fall 2024 <span className="text-blue-300">Capstone</span> Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              Innovative solutions created by BTE students that showcase technical skills and entrepreneurial thinking.
            </p>
            <div>
              <Link 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* About Section (Sidebar) */}
          <div className="md:w-1/4 bg-white p-6 shadow-md h-fit rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <ul className="space-y-3">
              {aboutContent.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>

          {/* Projects Grid */}
          <div className="md:w-3/4" id="projects">
            <h2 className="text-2xl font-semibold mb-6">Student Projects</h2>
            {filteredProjects.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-600 text-lg">No projects found matching &quot;{searchTerm}&quot;</p>
                <button 
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300">
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
                          <h3 className="font-medium text-lg mb-2">{project.title}</h3>
                        </Link>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
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
        </div>
      </main>
    </div>
  );
};

export default BTEHomePage;
