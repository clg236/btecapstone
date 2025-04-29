'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BTEHomePage = () => {
  // Search functionality
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for Spring 2024 projects
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      title: 'Icerynk', 
      description: 'A next-generation learning management system created by Christian Grewell, designed to enhance student engagement and facilitate seamless knowledge transfer.',
      imageUrl: '/projects/icerynk/icerynk_chat.png',
      route: '/capstone/2024/spring/projects/icerynk',
      teamAvatars: [
        '/projects/icerynk/christian_headshot.jpeg'
      ] 
    },
    { 
      id: 2, 
      title: 'EcoTrack', 
      description: 'A sustainable living app that helps users track and reduce their carbon footprint through personalized recommendations and community challenges.',
      imageUrl: 'https://source.unsplash.com/random/800x600/?sustainability',
      route: '/capstone/2024/spring/projects/ecotrack',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/68.jpg', 
        'https://randomuser.me/api/portraits/men/75.jpg'
      ] 
    },
    { 
      id: 3, 
      title: 'MindfulMoments', 
      description: 'A mental wellness platform offering guided meditation, mood tracking, and personalized mental health resources for students.',
      imageUrl: 'https://source.unsplash.com/random/800x600/?meditation',
      route: '/capstone/2024/spring/projects/mindfulmoments',
      teamAvatars: [
        'https://randomuser.me/api/portraits/men/32.jpg', 
        'https://randomuser.me/api/portraits/women/90.jpg'
      ] 
    },
    { 
      id: 4, 
      title: 'UrbanFarmer', 
      description: 'An innovative solution for urban agriculture that leverages IoT sensors to optimize growing conditions for small-scale food production.',
      imageUrl: 'https://source.unsplash.com/random/800x600/?urban-garden',
      route: '/capstone/2024/spring/projects/urbanfarmer',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/44.jpg', 
        'https://randomuser.me/api/portraits/men/78.jpg'
      ] 
    },
    { 
      id: 5, 
      title: 'AccessAble', 
      description: 'A platform that maps and rates accessibility features of public spaces to help people with disabilities navigate urban environments more easily.',
      imageUrl: 'https://source.unsplash.com/random/800x600/?accessibility',
      route: '/capstone/2024/spring/projects/accessable',
      teamAvatars: [
        'https://randomuser.me/api/portraits/men/15.jpg', 
        'https://randomuser.me/api/portraits/women/24.jpg'
      ] 
    },
    { 
      id: 6, 
      title: 'LocalTalent', 
      description: 'A marketplace connecting local artists and performers with venue owners, helping the creative economy thrive in communities.',
      imageUrl: 'https://source.unsplash.com/random/800x600/?performance',
      route: '/capstone/2024/spring/projects/localtalent',
      teamAvatars: [
        'https://randomuser.me/api/portraits/women/45.jpg', 
        'https://randomuser.me/api/portraits/men/22.jpg'
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
    'The Spring 2024 Business Technology and Entrepreneurship Capstone showcases innovative student projects that solve real-world problems.',
    'Each project demonstrates technical excellence, entrepreneurial thinking, and focuses on creating sustainable and scalable solutions.',
    'Students develop hands-on experience in product development, user research, and business model creation.',
    'Industry partnerships provide authentic challenges and mentorship throughout the capstone experience.',
    'Final presentations demonstrate both technical implementation and business strategy considerations.',
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
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" 
              alt="Tech collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-blue-900/50"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Spring 2024 <span className="text-cyan-300">Capstone</span> Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-8">
              Innovative solutions developed by BTE students that combine technical expertise with entrepreneurial mindsets.
            </p>
            <div>
              <Link 
                href="#projects" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium inline-block transition-colors duration-300"
              >
                Explore Projects
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
                <p className="text-gray-600 text-lg">No projects found matching "{searchTerm}"</p>
                <button 
                  className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors"
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

        {/* Call to Action Section */}
        <div className="mt-12 bg-cyan-600 text-white p-8 rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Want to learn more?</h2>
            <p className="text-lg">Contact us to discover how our students can bring innovation to your organization.</p>
          </div>
          <div>
            {/* Logo Placeholder */}
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
              <span className="text-cyan-600 font-bold text-xs">BTE Logo</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">BTE Capstone Program</h3>
              <p className="text-gray-300">&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-cyan-300">Contact</Link>
              <Link href="#" className="hover:text-cyan-300">Projects</Link>
              <Link href="#" className="hover:text-cyan-300">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BTEHomePage;
