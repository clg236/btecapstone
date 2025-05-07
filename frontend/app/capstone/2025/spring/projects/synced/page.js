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
    title: "Synced",
    subtitle: "Bridging the Care Gap for Aging Parents & Family Caregivers",
    description: "Synced is a digital platform that eases the emotional and practical tensions between aging parents and their family caregivers. Through guided questionnaires, AI-mediated conversations, and access to professionals, Synced empowers families to make shared, respectful care decisions.",
    heroImage: "/projects/spring2025/synced/hero_image.jpg",
    logoImage: "/projects/spring2025/synced/SYNCED_Logo.png",
    keyFeatures: [
      {
        title: "Guided Questionnaires",
        description: "Reveal areas of misalignment in values, expectations, and care goals.",
        image: "/projects/spring2025/synced/app_survey.png"
      },
      {
        title: "AI-Mediated Conversations",
        description: "Help families simulate difficult discussions and uncover mutual understanding.",
        image: "/projects/spring2025/synced/hero_2.png"
      },
      {
        title: "Access to Professionals",
        description: "Optional access to healthcare experts for mediation and guidance.",
        image: "/projects/spring2025/synced/100_1279.jpeg"
      },
      {
        title: "Shared Decision-Making Tools",
        description: "Encourage both sides to collaborate instead of creating control hierarchies.",
        image: "/projects/spring2025/synced/paper_prototype.png"
      }
    ],
    problem: "Aging parents often fear losing independence, while family caregivers struggle with how to help without overstepping. This mismatch can lead to conflict, resentment, and unclear care decisions.",
    solution: "A web-based platform powered by AI that helps families navigate tough caregiving conversations with empathy. Interactive tools and personalized dialogue simulations empower aging parents to feel heard while guiding caregivers toward collaborative, trust-based decisions.",
    marketAnalysis: [
      "Elderly Care Services: $833.3B (2023) projected to $1.1T by 2029 (5% CAGR)",
      "Caregiver Apps: $1.38B (2023) projected to $3.67B by 2031 (15% CAGR)",
      "Elderly Care Apps: $11.4B by 2032 (13.9% CAGR)",
      "60% of surveyed community members used AI for quick support; 47% used AI as a personal therapist"
    ],
    story: "Synced was born when students Claudia Chacón and Julia Elefant teamed up to make aging a more connected, compassionate journey for families. Inspired by their grandmothers’ experiences, they saw firsthand the challenges of transitioning to daily support.",
    technical: "Built with Canva Website Builder for layout, Typeform for structured survey data, and ChatGPT for simulating emotionally sensitive conversations. The platform leverages AI to mediate and guide family discussions.",
    lessonsLearned: [
      "Effective caregiving is about trust, communication, and mutual respect.",
      "Facilitating honest, balanced conversations requires tools that validate both voices.",
      "Building for real families means iterating based on lived experience."
    ],
    futurePlans: [
      "Redefine control in aging by fostering collaborative decision-making.",
      "Build trust between aging parents and adult children through empathetic tools.",
      "Help families plan proactively for major transitions.",
      "Empower elderly individuals to feel respected and included.",
      "Provide educational and emotional resources to adult children in caregiving roles."
    ],
    teamMembers: [
      {
        name: "Claudia Chacón",
        role: "Co-Founder",
        bio: "Claudia is a senior at NYU Stern with a passion for elder care, inspired by her grandmother’s diagnosis and a drive to design thoughtful solutions for aging populations.",
        avatar: "/projects/spring2025/synced/claudia_headshot.jpg",
        linkedin: "https://www.linkedin.com/in/claudiachacon03"
      },
      {
        name: "Julia Elefant",
        role: "Co-Founder",
        bio: "Julia is a senior at NYU Stern who, after bonding with Claudia over their grandmothers’ stories, became passionate about designing for the geriatric care industry.",
        avatar: "/projects/spring2025/synced/julia_headshot.jpg",
        linkedin: "https://www.linkedin.com/in/julia-elefant-380175238/"
      }
    ],
    teamAdvisor: "Shivani Verma",
    acknowledgements: "Thank you to our families, interviewees, and mentors for their guidance and inspiration.",
    slideDeck: "https://www.canva.com/design/DAGkQ6SJqVE/8UGswXlotBtegnEODiW6Nw/edit?utm_content=DAGkQ6SJqVE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    documentation: "https://docs.google.com/document/d/1eHae-ZR6unW6G2_gEU5ATFmF8_aK0Ol7mtubI2I70jg/edit?usp=sharing",
    imageFolder: "https://drive.google.com/drive/folders/16KxWDZiTCWbMsADQETVozpVeAGDbj9-R"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-72 md:h-96">
        <img src={project.heroImage} alt="Synced Hero" className="w-full h-full object-cover object-center" />
        <Link href="/capstone/2025/spring" className="absolute top-4 left-4 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition">
          <FaArrowLeft className="text-purple-700 text-2xl" />
        </Link>
        {project.logoImage && <img src={project.logoImage} alt="Synced Logo" className="absolute bottom-4 right-4 h-20 w-20 object-contain bg-white bg-opacity-80 rounded-full p-2 shadow-md" />}
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
            {project.slideDeck && (
              <li className="mb-2"><a href={project.slideDeck} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Presentation Deck</a></li>
            )}
            {project.documentation && (
              <li className="mb-2"><a href={project.documentation} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Documentation</a></li>
            )}
            {project.imageFolder && (
              <li className="mb-2"><a href={project.imageFolder} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">Image Folder</a></li>
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
          <p className="text-gray-600 mt-2">© 2025 Synced</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
