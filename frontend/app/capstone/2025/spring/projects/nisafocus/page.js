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
    title: "Nisa Focus",
    subtitle: "A Quran Memorization and Retention App for Muslim Women",
    description: "Nisa Focus helps Muslim women organize, track, and improve their Quran memorization and revision routines. Inspired by personal experience and community interviews, the app tackles the real challenges of consistency, motivation, and retention in hifdh (memorization) journeys.",
    heroImage: "/projects/spring2025/nisafocus/app_hero.jpg",
    logoImage: "/projects/spring2025/nisafocus/logo.png",
    keyFeatures: [
      {
        title: "Personalized Hifdh Tracker",
        description: "Track your memorization, revision, and progress with a clear dashboard.",
        image: "/projects/spring2025/nisafocus/app_1.PNG"
      },
      {
        title: "Motivational Reminders",
        description: "Custom reminders and motivational messages to keep you on track.",
        image: "/projects/spring2025/nisafocus/app_2.PNG"
      },
      {
        title: "Insights and Analytics",
        description: "Visualize your strengths and areas for improvement.",
        image: "/projects/spring2025/nisafocus/value_prop.jpeg"
      },
      {
        title: "Community and Support",
        description: "Connect with a network of women on the same journey for encouragement and advice.",
        image: "/projects/spring2025/nisafocus/exhibit_1.jpg"
      }
    ],
    problem: "Many Muslims struggle to retain and review their Quran memorization due to busy schedules, lack of structure, and limited access to regular classes or teachers. This can lead to burnout, frustration, and loss of previously memorized material.",
    solution: "An app that acts as a digital organizer and teacher—helping users schedule, track, and motivate their Quran memorization and revision, so they can maintain consistency and achieve their hifdh goals.",
    marketAnalysis: [
      "Existing apps: Quranexplorer, quran.com, Al Muqri.",
      "Target audience: Muslim women memorizing the Quran.",
      "Key pain points: Consistency, motivation, discipline, routine, distractions, revision, and access to female teachers."
    ],
    story: "Inspired by my own journey and the struggles of fellow students, Nisa Focus was created to provide the structure and support I wish I had during my hifdh journey.",
    technical: "Low-fidelity wireframes, clickable prototype, and user interviews guided the design and features. The app is planned for mobile and web, with a focus on privacy and ease of use.",
    lessonsLearned: [
      "Lots of repetition and focused sessions are key for memorization.",
      "User interviews reveal the importance of structure and encouragement.",
      "Building for a specific audience leads to more impactful solutions."
    ],
    futurePlans: [
      "Launch MVP for early adopters and gather feedback.",
      "Integrate advanced analytics and personalized recommendations.",
      "Partner with organizations for broader reach."
    ],
    teamMembers: [
      {
        name: "Mariam Ouedraogo",
        role: "Founder & Designer",
        bio: "Mariam is a senior at NYU Stern, passionate about faith, technology, and community. She built Nisa Focus to help Muslim women like herself achieve their Quran memorization goals.",
        avatar: "",
        linkedin: ""
      }
    ],
    teamAdvisor: "[Advisor Name, if available]",
    acknowledgements: "Thanks to all the women who shared their hifdh journeys and struggles, and to my mentors and classmates for their support.",
    slideDeck: "",
    prototype: "",
    processPresentation: "/projects/spring2025/nisafocus/ Nisa Focus -Midterm Process Presentation.pptx"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-72 md:h-96">
        <img src={project.heroImage} alt="Nisa Focus Hero" className="w-full h-full object-cover object-center" />
        <Link href="/capstone/2025/spring" className="absolute top-4 left-4 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition">
          <FaArrowLeft className="text-purple-700 text-2xl" />
        </Link>
        {project.logoImage && <img src={project.logoImage} alt="Nisa Focus Logo" className="absolute bottom-4 right-4 h-20 w-20 object-contain bg-white bg-opacity-80 rounded-full p-2 shadow-md" />}
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
            {project.processPresentation && (
              <li className="mb-2"><a href={project.processPresentation} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Midterm Process Presentation</a></li>
            )}
            {project.slideDeck && (
              <li className="mb-2"><a href={project.slideDeck} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Final Slide Deck</a></li>
            )}
            {project.prototype && (
              <li className="mb-2"><a href={project.prototype} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Prototype</a></li>
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
          <p className="text-gray-600 mt-2">© 2025 Nisa Focus</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
