'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaLinkedin } from 'react-icons/fa';
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
    title: "Muscle Memory",
    subtitle: "Fitness Motivation for Couples",
    description: "Muscle Memory encourages couples to stay consistent with their gym routines by offering reward-based incentives for working out together. The app tracks joint attendance and offers rewards for completing 'muscle missions'.",
    heroImage: "/projects/spring2025/musclememory/MuscleMemory_png_HeroImage.png",
    logoImage: "/projects/spring2025/musclememory/MuscleMemoryLogo.png",
    keyFeatures: [
      {
        title: "Muscle Missions",
        description: "Customizable goals that couples can complete together.",
        image: "/projects/spring2025/musclememory/muscle_missions.png"
      },
      {
        title: "Progress Tracking",
        description: "Check-in verification system tracks gym visits and logs progress.",
        image: "/projects/spring2025/musclememory/MuscleMemory_png_GymStatistics.png"
      },
      {
        title: "Rewards Dashboard",
        description: "Earn and redeem rewards from local business partners.",
        image: "/projects/spring2025/musclememory/MuscleMemory_png_CardCollection.png"
      },
      {
        title: "Customization & Gamification",
        description: "Users can create their own rewards and celebrate achievements with a congratulations screen.",
        image: "/projects/spring2025/musclememory/MuscleMemory_png_TestGameLoop.png"
      }
    ],
    problem: "Many beginners struggle to maintain a consistent gym routine due to busy schedules, lack of motivation, or limited accountability. Traditional fitness apps are effective when the user has individual motivation, but there is a need for a solution that encourages people to stay committed to their fitness journeys together by rewarding them for their consistency and teamwork.",
    solution: "An app that motivates couples to maintain a consistent gym routine by tracking their joint attendance and rewarding them for meeting shared fitness goals. By partnering with local businesses to provide rewards and leveraging the inherent accountability within relationships, Muscle Memory bridges the motivational gap between starting to work out and seeing progress.",
    marketAnalysis: [
      "27.5% of adults do not meet recommended physical activity levels.",
      "50% of new gym users drop out within 6 months; one-third cancel memberships annually.",
      "Two-thirds of gym members have memberships but don’t go regularly.",
      "Only 6% of people with a partner dropped out, compared to 43% without a partner."
    ],
    story: "Both of us enjoy working out and are very familiar with the lack of motivation when it comes to going to the gym. We also know that there are many fitness apps available, yet they all rely on the user’s personal motivation. We wanted to build a solution for people who understand the value of fitness, but have trouble prioritizing it.",
    technical: "Xcode Swift for iOS app development\nSwiftUI framework for user interface\nObservableObject pattern for state management\nSwiftUI animations for a dynamic congrats page",
    lessonsLearned: [
      "Building a game isn’t as easy as making a fun feature and hoping engagement will follow.",
      "Building without a clear image of a user in mind leads to many features but no direction.",
      "Targeting a niche market and designing around a key user problem creates more actionable insights."
    ],
    futurePlans: [
      "Target couples that are beginner gym-goers for initial adoption.",
      "Refine reward types and difficulty levels.",
      "Expand market reach to include general gym-goers as engagement improves."
    ],
    teamMembers: [
      {
        name: "Jarrett Zheng",
        role: "Co-Founder, Product Manager, UI/UX Designer",
        bio: "Jarrett is a junior in NYU’s BTE major. He’s worked on several apps, focusing on user experience and integration. Loves working out with friends and is excited to motivate people to stay consistent in their fitness journey.",
        avatar: "/projects/spring2025/musclememory/MuscleMemory_jpg_headshot.jpg",
        linkedin: "https://www.linkedin.com/in/jarrett-zheng-b01370263"
      },
      {
        name: "George Ai",
        role: "Co-Founder, App Developer",
        bio: "George is a junior in NYU’s BTE program with experience in Product Management and Software development. Loves working out and is excited to build Muscle Memory into an impeccable fitness experience.",
        avatar: "/projects/spring2025/musclememory/MuscleMemory_png_GeorgeHeadshot.png",
        linkedin: ""
      }
    ],
    teamAdvisor: "Tomer Molovinsky",
    acknowledgements: "Tomer Molovinsky – for business partnership ideas. Professor Ashish Bhatia – for helping refine our focus. Professor Christian Grewell – for AI and prototyping advice. BTE Spring Capstone Class of 2025 – for product feedback and story support.",
    demoVideo: "/projects/spring2025/musclememory/MuscleMemory_mov_demo.mov",
    slideDeck: "",
    userFlowchart: "/projects/spring2025/musclememory/MuscleMemory_png_UserFlowchart.png",
    businessDiagram: "/projects/spring2025/musclememory/MuscleMemory_png_BusinessValueDiagram.png"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-72 md:h-96">
        <img src={project.heroImage} alt="Muscle Memory Hero" className="w-full h-full object-cover object-center" />
        <Link href="/capstone/2025/spring" className="absolute top-4 left-4 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition">
          <FaArrowLeft className="text-purple-700 text-2xl" />
        </Link>
        {project.logoImage && <img src={project.logoImage} alt="Muscle Memory Logo" className="absolute bottom-4 right-4 h-20 w-20 object-contain bg-white bg-opacity-80 rounded-full p-2 shadow-md" />}
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">{project.title}</h1>
        <h2 className="text-xl text-purple-700 mb-4">{project.subtitle}</h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {project.keyFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
              <img src={feature.image} alt={feature.title} className="h-40 w-auto object-contain mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">The Problem</h2>
          <p className="text-gray-700 mb-4">{project.problem}</p>
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Our Solution</h2>
          <p className="text-gray-700">{project.solution}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Market Analysis</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {project.marketAnalysis.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Our Story</h2>
          <p className="text-gray-700">{project.story}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Technical Approach</h2>
          <p className="text-gray-700 whitespace-pre-line">{project.technical}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Lessons Learned</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            {project.lessonsLearned.map((lesson, idx) => (
              <li key={idx} className="mb-2">{lesson}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Future Plans</h2>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            {project.futurePlans.map((plan, idx) => (
              <li key={idx} className="mb-2">{plan}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Team Members</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {project.teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} className="h-20 w-20 rounded-full object-cover mb-2" />
                ) : (
                  <div className="h-20 w-20 rounded-full bg-purple-200 flex items-center justify-center text-2xl font-bold text-purple-700 mb-2">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm mb-2 text-center">{member.bio}</p>
                {member.linkedin && member.linkedin !== "" && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <FaLinkedin className="text-xl" /> LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Team Advisor</h2>
          <p className="text-gray-700 mb-4">{project.teamAdvisor}</p>
          {project.acknowledgements && (
            <>
              <h2 className="text-2xl font-semibold text-purple-900 mb-4">Acknowledgements</h2>
              <p className="text-gray-700">{project.acknowledgements}</p>
            </>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Project Materials</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {project.demoVideo && (
              <li className="mb-2"><a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Demo Video</a></li>
            )}
            {project.slideDeck && (
              <li className="mb-2"><a href={project.slideDeck} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Final Slide Deck</a></li>
            )}
            {project.userFlowchart && (
              <li className="mb-2"><a href={project.userFlowchart} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">User Flowchart</a></li>
            )}
            {project.businessDiagram && (
              <li className="mb-2"><a href={project.businessDiagram} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Business Value Diagram</a></li>
            )}
          </ul>
        </div>
      </div>
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            This project was created as part of the{' '}
            <a
              href="https://www.stern.nyu.edu/programs-admissions/undergraduate/academics/bs-degree-business-technology-and-entrepreneurship"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800"
            >
              NYU Stern Anand Khubani Business, Technology, and Entrepreneurship Program
            </a>
          </p>
          <p className="text-gray-600 mt-2">© 2025 Muscle Memory</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
