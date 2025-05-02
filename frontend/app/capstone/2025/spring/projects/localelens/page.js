'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const ProjectDetailPage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const project = {
    title: "LocaleLens",
    subtitle: "Your Virtual Apartment Broker",
    description: "LocaleLens is not only a better apartment search platform, it acts as a virtual broker. It brings new data to users through apartment listing descriptions, making the apartment search easier than ever before with nuanced, natural language search. When users save their favorite search terms, LocaleLens acts as a virtual broker by sending notifications when new apartment listings get uploaded through StreetEasy integration.",
    heroImage: "/projects/spring2025/localelens/LocaleLens_HeroImage.png",
    logoImage: "/projects/spring2025/localelens/LocaleLens_Logo.png",
    problem: "The NYC apartment search is competitive, time-consuming, and broker fees are expensive.",
    solution: "Smarter search and real-time alerts of new listings that match what NYC renters want give them a head start on their dream apartment with a 'virtual broker.'",
    marketAnalysis: [
      "Target Market: First-time movers to NYC",
      "Market Size: 1.5 million movers annually, user value estimated at $50 → $75 million",
      "Competitors: StreetEasy, Zillow, Redfin",
      "Insight: People prioritize convenience and are willing to pay premiums for time-saving tools."
    ],
    story: "We were motivated to pursue this project because of the struggles we faced when finding a new apartment. We've both experienced the competitiveness of the apartment hunt, gone on multiple (disappointing) tours, and spent weeks trying to find the best apartment for us.",
    keyFeatures: [
      {
        title: "Smart Search",
        description: "Natural language understanding improves search relevance.",
        image: "/projects/spring2025/localelens/LocaleLens_KeyFeatures_Search bar with different filters.png"
      },
      {
        title: "Saved Searches",
        description: "Users save their preferences to get targeted results.",
        image: "/projects/spring2025/localelens/LocaleLens_KeyFeatures_Search results.png"
      },
      {
        title: "Real-Time Notifications",
        description: "Users are alerted instantly when a new match is listed.",
        image: "/projects/spring2025/localelens/LocaleLens_KeyFeatures_Account creation page.png"
      },
      {
        title: "Virtual Broker Experience",
        description: "The platform proactively serves apartment suggestions based on saved preferences.",
        image: "/projects/spring2025/localelens/LocaleLens_Wireframe1.png"
      }
    ],
    technical: "Backend: Google CloudRun, semantic search (Python GitHub repo)\nDatabase: MySQL\nAPIs: RapidAPI (StreetEasy data)\nFrontend: Vercel (Vite + TypeScript + React + Tailwind CSS + shadcn-ui)\n\nEffective search functionality required switching between semantic search and ChatGPT-based processing to get the desired speed and relevance. Additionally, developing a modern frontend proved difficult, so the team used new tools such as Lovable and Vercel to deliver a robust and clean user experience.",
    lessonsLearned: [
      "Understanding the apartment search process from the renter's perspective enabled deeper empathy in product design.",
      "Search algorithms require a careful balance of complexity and speed.",
      "Notification systems must be efficient and timely to offer a true competitive advantage."
    ],
    futurePlans: [
      "Finish real-time notification system integration with saved search queries.",
      "Refine the AI broker component to handle more complex preferences.",
      "Launch MVP with new user onboarding and feedback system.",
      "Expand data coverage beyond StreetEasy listings."
    ],
    teamMembers: [
      {
        name: "Jonathan Sidi",
        role: "Co-Founder",
        bio: "Jonathan is a junior at NYU Stern studying Business, Technology, and Entrepreneurship with a minor in Math and Computer Science. He has always loved digging into data, and most recently worked as a product management intern at Baton Media. Jonathan plans to use his technical and entrepreneurial skills to explore a career in making better product decisions as a product manager.",
        avatar: "/projects/spring2025/localelens/LocaleLens_JonathanPicture.png",
        linkedin: "https://www.linkedin.com/in/jonathan-sidi"
      },
      {
        name: "Charlie Hu",
        role: "Co-Founder",
        bio: "Charlie is a junior at NYU Stern studying Business, Technology, and Entrepreneurship. He's passionate about trying new things and exploring different industries. Because of this, he has experience in venture capitalism, consulting, and product management.",
        avatar: "/projects/spring2025/localelens/LocaleLens_CharliePicture.jpg",
        linkedin: "https://www.linkedin.com/in/charles-hu-15447a250/"
      }
    ],
    demoVideo: "/projects/spring2025/localelens/LocaleLens_Demo.mp4",
    teamAdvisor: "Phil Hayes",
    acknowledgements: "Professors Ashish Bhatia and Christian Grewell – for guidance, refinement, and support throughout the semester. Phil Hayes – for mentoring us through product challenges and giving strategic direction to our vision."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Hero */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/4 right-1/4 w-full h-full bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8">
          <div className={`transition-all duration-1000 ${animationComplete ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-xl md:text-2xl mb-6">{project.subtitle}</p>
              <p className="text-md md:text-lg opacity-90">{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/capstone/2025/spring" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <FaArrowLeft className="mr-2" /> Back to All Projects
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Project Overview */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <div className="flex justify-center mb-8">
                  <img 
                    src={project.logoImage} 
                    alt={`${project.title} Logo`} 
                    className="max-w-full h-auto max-h-60 object-contain"
                  />
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Problem We&apos;re Solving</h2>
                <p className="text-gray-700 mb-6">{project.problem}</p>
                
                <h2 className="text-xl font-semibold mb-4">Our Solution</h2>
                <p className="text-gray-700 mb-6">{project.solution}</p>
                
                {/* Main Image */}
                <div className="my-8 flex justify-center">
                  <img 
                    src={project.heroImage} 
                    alt={project.title} 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <h2 className="text-xl font-semibold mb-4">Market Analysis</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-6">
                  {project.marketAnalysis.map((point, index) => (
                    <li key={index} className="mb-2">{point}</li>
                  ))}
                </ul>
                
                <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700">{project.story}</p>
              </div>
              
              {/* Key Features */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.keyFeatures.map((feature, index) => (
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

              {/* Technical Approach */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Technical Approach</h2>
                <p className="text-gray-700 whitespace-pre-line">{project.technical}</p>
                
                <div className="mt-6 flex justify-center">
                  <img 
                    src="/projects/spring2025/localelens/LocaleLens_Wireframe_Teardown.png" 
                    alt="Technical Wireframe" 
                    className="max-w-full h-auto rounded-lg shadow"
                  />
                </div>
              </div>
              
              {/* Demo Video */}
              {project.demoVideo && (
                <div className="bg-white p-6 shadow-md rounded-lg">
                  <h2 className="text-xl font-semibold mb-4">Demo Video</h2>
                  <div className="aspect-w-16 aspect-h-9 relative pt-[56.25%]">
                    <video
                      className="absolute inset-0 w-full h-full rounded-lg"
                      controls
                      poster="/projects/spring2025/localelens/LocaleLens_HeroImage.png"
                    >
                      <source src={project.demoVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="mt-8 lg:mt-0">
            {/* Team Section */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-6">About the Creators</h2>
              <div className="space-y-6">
                {project.teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                        <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{member.name}</h3>
                        <p className="text-gray-600">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaLinkedin className="text-xl" />
                      </a>
                    </div>
                    {index < project.teamMembers.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Lessons Learned</h2>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                {project.lessonsLearned.map((lesson, index) => (
                  <li key={index} className="mb-2">{lesson}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Future Plans</h2>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                {project.futurePlans.map((plan, index) => (
                  <li key={index} className="mb-2">{plan}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Team Advisor</h2>
              <p className="text-gray-700 mb-4">{project.teamAdvisor}</p>
              
              {project.acknowledgements && (
                <>
                  <h2 className="text-xl font-semibold mb-4">Acknowledgements</h2>
                  <p className="text-gray-700">{project.acknowledgements}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            This project was created as part of the{" "}
            <a
              href="https://www.stern.nyu.edu/programs-admissions/undergraduate/academics/bs-degree-business-technology-and-entrepreneurship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800"
            >
              NYU Stern Anand Khubani Business, Technology, and Entrepreneurship Program
            </a>
          </p>
          <p className="text-gray-600 mt-2">© 2025 LocaleLens</p>
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
        .aspect-w-16 {
          position: relative;
          padding-bottom: 56.25%;
        }
        .aspect-w-16 > * {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailPage;
