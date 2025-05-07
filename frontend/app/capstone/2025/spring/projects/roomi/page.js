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
    title: "Roomi",
    subtitle: "Smart Roommate Matching for NYC Movers",
    description: "Roomi is a roommate-matching service based on the logistics that truly matter: move-in timelines, budgets, and preferred neighborhoods.",
    heroImage: "/projects/spring2025/roomi/Roomi Hero Image.png",
    logoImage: "/projects/spring2025/roomi/Roomi Logo.png",
    keyFeatures: [
      {
        title: "Smart Matching",
        description: "Connects users based on timing, budget, and location—not personality.",
        image: "/projects/spring2025/roomi/Design_Mockup1.png"
      },
      {
        title: "Survey-Based Profiles",
        description: "Users fill out a short form to create a profile that captures critical move-in logistics.",
        image: "/projects/spring2025/roomi/Design_Mockup_2.png"
      },
      {
        title: "NYC Focus",
        description: "Tailored specifically for young movers looking for roommates in New York City.",
        image: "/projects/spring2025/roomi/Design_Mockup_3.png"
      },
      {
        title: "Matching Algorithm",
        description: "Back-end algorithm built in Excel using logic informed by survey inputs and matching rules.",
        image: "/projects/spring2025/roomi/Design_Mockup_4.png"
      }
    ],
    problem: "Proactive movers often plan ahead and want a roommate for affordability, safety, companionship, etc., BUT struggle to find someone in their network who is also looking and meets their criteria.",
    solution: "Roomi is a smart roommate-matching platform that connects proactive movers based on what really matters—timing, budget, and neighborhood.",
    marketAnalysis: [
      "Shared accommodation market includes Roomster, Craigslist, and Airbnb.",
      "Roomi is focused specifically on NYC.",
      "There are about 120K young movers actively seeking roommates in NYC."
    ],
    story: "As college seniors preparing to graduate and move to new cities, we are actively thinking about how we are going to find housing with great roommates. That’s what led to the creation of Roomi.",
    technical: "Canva: Used to host and create a website. Jotform: Used for Roomi survey creation. Excel: Used to track Roomi users and implement a matching algorithm. ChatGPT: Used to assist with the matching algorithm.",
    lessonsLearned: [
      "Pivoting from personality-based to logistics-based matching captured a clear niche in the market.",
      "Concise, well-designed surveys increase trust and participation.",
      "Audiences respond better to design-forward platforms when sharing personal info."
    ],
    futurePlans: [
      "Partnership with NYC universities, starting with NYU Residential Life and Housing Services.",
      "Allow students to opt-in and create a Roomi profile and access roommate matches with fellow students."
    ],
    teamMembers: [
      {
        name: "Karla Murueta",
        role: "Co-founder",
        bio: "Karla is a senior at NYU Stern in the BTE program. She has experience in Product Management and Business Analytics, and a passion for education. Karla will be working full-time at Verisk Analytics as a Product Specialist following graduation.",
        avatar: "/projects/spring2025/roomi/karla_headshot.jpg",
        linkedin: "https://www.linkedin.com/in/karla-murueta/"
      },
      {
        name: "Sarah Munis",
        role: "Co-founder",
        bio: "Sarah is a senior at Stern’s BTE program and is minoring in producing at NYU Tisch. She has experience in consulting. She will be working full-time at Accenture Song as a Consulting Analyst in San Francisco after graduation! Wish her luck!",
        avatar: "/projects/spring2025/roomi/sarah_headshot.JPG",
        linkedin: "https://www.linkedin.com/in/sarah-munis-240816181/"
      }
    ],
    teamAdvisor: "Guthrie Collins",
    acknowledgements: "Shout-out to our amazing mentor, Guthrie! He was such a supportive, helpful, and reliable mentor!",
    demoVideo: "https://www.loom.com/share/8b7a8a95cdb841e4a96710dceea07dfc?sid=a53898ab-8bb4-4eb5-b172-73f550b22fe4",
    slideDeck: "https://www.canva.com/design/DAGl2e-4nwQ/BxWbLRZjgkOQc2Nsa5vXaw/edit?utm_content=DAGl2e-4nwQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-72 md:h-96">
        <img src={project.heroImage} alt="Roomi Hero" className="w-full h-full object-cover object-center" />
        <Link href="/capstone/2025/spring" className="absolute top-4 left-4 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition">
          <FaArrowLeft className="text-purple-700 text-2xl" />
        </Link>
        <img src={project.logoImage} alt="Roomi Logo" className="absolute bottom-4 right-4 h-20 w-20 object-contain bg-white bg-opacity-80 rounded-full p-2 shadow-md" />
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
                {member.linkedin && (
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
            <li className="mb-2"><a href={project.demoVideo} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Demo Video</a></li>
            <li className="mb-2"><a href={project.slideDeck} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Final Slide Deck</a></li>
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
          <p className="text-gray-600 mt-2">© 2025 Roomi</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
