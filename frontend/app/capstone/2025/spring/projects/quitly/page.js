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
    title: "Quitly",
    subtitle: "Break Habits Together: Social Accountability for Lasting Change",
    description: "Quitly is a habit-breaking app that uses group accountability and positive peer pressure to help people quit bad habits. Users join small groups, check in daily, and track progress on a group leaderboard. Inspired by Atomic Habits and behavioral psychology, Quitly turns quitting into a shared, supportive challenge.",
    heroImage: "/projects/spring2025/quitly/Quitly_Homepage.png",
    logoImage: "/projects/spring2025/quitly/Quitly_Logo.png",
    keyFeatures: [
      {
        title: "Group Accountability",
        description: "Join a small group and track your progress together.",
        image: "/projects/spring2025/quitly/Quitly_Feature.png"
      },
      {
        title: "Daily Check-Ins",
        description: "Check in each day to maintain group streaks and build consistency.",
        image: "/projects/spring2025/quitly/Quitly_Feature(1).png"
      },
      {
        title: "Leaderboard",
        description: "Friendly competition encourages consistency and progress.",
        image: "/projects/spring2025/quitly/Quitly_Homepage.png"
      },
      {
        title: "Science-Backed Design",
        description: "Built on behavioral science and Atomic Habits principles.",
        image: "/projects/spring2025/quitly/Quitly_Logo.png"
      }
    ],
    problem: "Quitting is not just a physical challenge—it’s deeply social and behavioral. Most quit attempts fail because people try to do it alone, in environments full of triggers and without consistent support.",
    solution: "Quitly turns quitting into a shared challenge. Through daily check-ins, group streaks, and leaderboards, it creates a supportive environment where positive peer pressure and accountability drive real behavior change.",
    marketAnalysis: [
      "Inspired by Duolingo’s reward-driven model, Quitly emphasizes fun and accountability for quitting habits.",
      "Existing tools lack the group element and engaging design that Quitly provides."
    ],
    story: "As someone personally working to quit vaping, I understand the challenges of breaking nicotine addiction. This project is driven by the need for a fun, engaging, and effective solution that helps others on the same journey.",
    technical: "ChatGPT assisted with logic and structure. Early backend experimentation was done with Python and Firebase; iOS version attempted with Xcode. Ultimately, an AI platform was used to generate the demo.",
    lessonsLearned: [
      "Quitting is difficult, but consistency is key.",
      "Find meaning in the work you do.",
      "Tech can be hard, but AI can simplify the process.",
      "Seek help and take feedback seriously."
    ],
    futurePlans: [
      "Have the app running and use it with friends.",
      "Test more thoroughly and gather user feedback.",
      "Analyze retention and usefulness of features."
    ],
    teamMembers: [
      {
        name: "Daniel Luo",
        role: "Founder",
        bio: "Student in BTE, with experience in consulting. Loves to play golf. Quit smoking for 5 months and going strong.",
        avatar: "/projects/spring2025/quitly/Quitly_Daniel.jpg",
        linkedin: "https://www.linkedin.com/in/daniel-luo-b82606235"
      }
    ],
    teamAdvisor: "Tomi Odunsi",
    acknowledgements: "Thanks to everyone who provided feedback, encouragement, and support along the way.",
    slideDeck: "https://docs.google.com/presentation/d/1ajXW-o83NYjk5tmYW9r4YjGlhPmh8OIcoO-YwULvonU/edit?usp=sharing",
    documentation: "https://docs.google.com/document/d/1gI6XbJCRVxyVAvDqqAlFOYsi2ZuDdgOMMm5VBDC75xw/edit?usp=sharing",
    demoVideo: "https://www.loom.com/share/b187f346b4c44232983a2353213ddd59?sid=8f09cc6f-6c18-4ce0-a48e-89d484b26f6f"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-72 md:h-96">
        <img src={project.heroImage} alt="Quitly Hero" className="w-full h-full object-cover object-center" />
        <Link href="/capstone/2025/spring" className="absolute top-4 left-4 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition">
          <FaArrowLeft className="text-purple-700 text-2xl" />
        </Link>
        {project.logoImage && <img src={project.logoImage} alt="Quitly Logo" className="absolute bottom-4 right-4 h-20 w-20 object-contain bg-white bg-opacity-80 rounded-full p-2 shadow-md" />}
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
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Team Member</h2>
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
            {project.slideDeck && (
              <li className="mb-2"><a href={project.slideDeck} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Slide Deck</a></li>
            )}
            {project.documentation && (
              <li className="mb-2"><a href={project.documentation} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Documentation</a></li>
            )}
            {project.demoVideo && (
              <li className="mb-2"><a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Demo Video</a></li>
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
          <p className="text-gray-600 mt-2">© 2025 Quitly</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
