'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaExternalLinkAlt, FaGithub, FaPlayCircle, FaFilePdf } from 'react-icons/fa';

const ProjectDetailPage = ({ projectId }) => {
  // This would be replaced by actual data fetching from your API or data source
  const [project, setProject] = useState({
    id: projectId || 'icerynk',
    name: 'Icerynk',
    projectLink: 'https://icerynk.edu',
    linkedinProfile: 'https://linkedin.com/in/christian-grewell',
    teamMembers: [
      { name: 'Christian Grewell', role: 'Lead Developer, Founder & Professor', avatar: '/projects/icerynk/christian_headshot.jpeg' }
    ],
    banner: null, // We'll create a custom background instead
    logo: '/projects/icerynk/icerynk_logo.svg', // Default logo - replace with actual image
    description: [
      'Icerynk is a next-generation learning management system designed to revolutionize educational technology.',
      'The platform utilizes AI-powered learning algorithms to deliver personalized educational experiences to students.',
      'Real-time chat and collaboration features enable seamless interaction between instructors and students.',
      'Advanced analytics dashboard helps instructors track student progress and identify areas for improvement.',
      'The system integrates with existing educational tools and platforms for a smooth transition.',
      'Mobile app allows students to access course materials and participate in discussions on-the-go.',
      'Adaptive learning technology adjusts difficulty based on individual student performance.',
      'Successfully implemented with pilot programs at several educational institutions.',
    ],
    media: {
      type: 'image',
      url: '/projects/icerynk/icerynk_chat.png',
      alt: 'Icerynk Chat Interface'
    },
    story: `The idea for Icerynk was born when Christian Grewell, an educator with over 15 years of experience, identified significant gaps in existing learning management systems. Through extensive research and collaboration with students and faculty, Christian developed a platform that addresses the evolving needs of modern education. The development process involved multiple iterations based on real classroom feedback, resulting in a platform that's both powerful and intuitive. Icerynk is designed to foster meaningful connections between students and instructors, making the learning process more engaging and effective.`,
    advisors: ['Dr. Emily Chang (Education Technology Expert)', 'Prof. Robert Jackson (Instructional Design)', 'John Miller (Industry Partner)'],
    moreInfo: {
      github: 'https://github.com/christiangrewell/icerynk',
      demo: 'https://demo.icerynk.edu',
      presentation: '/projects/icerynk/presentation.pdf'
    },
    features: [
      {
        title: 'AI-Powered Learning',
        description: 'Utilizes machine learning algorithms to adapt content to individual learning styles and paces.'
      },
      {
        title: 'Interactive Collaboration',
        description: 'Real-time discussion boards, group projects, and peer review capabilities enhance collaborative learning.'
      },
      {
        title: 'Comprehensive Analytics',
        description: 'Detailed insights into student engagement, performance trends, and content effectiveness.'
      },
      {
        title: 'Seamless Integration',
        description: 'Works with existing tools like Google Classroom, Microsoft Teams, and popular video conferencing platforms.'
      }
    ],
    testimonials: [
      {
        quote: "Icerynk has transformed how I teach my courses. The analytics alone have given me insights I never had access to before.",
        author: "Professor Maria Rodriguez, Computer Science Department"
      },
      {
        quote: "As a student who struggled with traditional learning platforms, Icerynk's personalized approach has made a tremendous difference in my academic performance.",
        author: "Alex Thompson, Engineering Student"
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* LinkedIn-style Header Section */}
      <header className="relative">
        {/* Cover Banner */}
        <div className="h-48 sm:h-64 md:h-80 w-full relative overflow-hidden">
          {/* Ice blue swirly background */}
          <div 
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 25%, #4dd0e1 50%, #26c6da 75%, #00bcd4 100%)',
              backgroundSize: '200% 200%',
              animation: 'swirl 15s ease infinite',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Add some swirly elements */}
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
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{project.name.charAt(0)}</span>
                </div>
              )}
            </div>
            
            {/* Project Name & Actions */}
            <div className="ml-0 sm:ml-36 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
                <p className="text-gray-600 text-sm">Next-Generation Learning Management System</p>
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
                {project.features.map((feature, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Media and Story Section */}
            <div className="md:col-span-7 space-y-6">
              {/* Media Section */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Icerynk Chat Interface</h2>
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
                <p className="text-gray-600 mt-3 text-sm">The Icerynk chat interface facilitates real-time communication between instructors and students, creating an interactive learning environment.</p>
              </div>

              {/* Story Section */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700">{project.story}</p>
              </div>
              
              {/* Testimonials Section */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
                <div className="space-y-6">
                  {project.testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-gray-300 pl-4 py-2">
                      <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
                      <p className="text-gray-600 mt-2 text-sm">— {testimonial.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-6">About the Creator</h2>
            <div className="flex items-center space-x-4">
              <div className="h-24 w-24 rounded-full overflow-hidden">
                <img src={project.teamMembers[0].avatar} alt={project.teamMembers[0].name} className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-xl">{project.teamMembers[0].name}</h3>
                <p className="text-gray-600">{project.teamMembers[0].role}</p>
                <p className="text-gray-600 mt-2">
                  Christian is an educator and technologist with over 15 years of experience in the education sector.
                  Icerynk was born from his vision to create a more engaging and effective learning experience for students
                  and teachers alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-12 py-6">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start">
            <div>
              <Link href="/" className="text-blue-600 hover:underline">
                &larr; Back to All Projects
              </Link>
            </div>
            <div className="mt-4 sm:mt-0">
              <h3 className="font-semibold mb-2">Advisors</h3>
              <ul className="text-gray-700">
                {project.advisors.map((advisor, index) => (
                  <li key={index}>{advisor}</li>
                ))}
              </ul>
              
              <h3 className="font-semibold mt-4 mb-2">More Info</h3>
              <div className="space-y-1">
                {project.moreInfo.github && (
                  <Link href={project.moreInfo.github} target="_blank" className="block text-blue-600 hover:underline">
                    GitHub Repository
                  </Link>
                )}
                {project.moreInfo.demo && (
                  <Link href={project.moreInfo.demo} target="_blank" className="block text-blue-600 hover:underline">
                    Live Demo
                  </Link>
                )}
                {project.moreInfo.presentation && (
                  <Link href={project.moreInfo.presentation} target="_blank" className="block text-blue-600 hover:underline">
                    Presentation
                  </Link>
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