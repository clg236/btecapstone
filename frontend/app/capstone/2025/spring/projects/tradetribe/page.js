'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
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
    title: "TradeTribe",
    subtitle: "Emotional Training for Student Options Traders",
    description: "TradeTribe is an emotional training platform for beginner student options traders, designed to build discipline and reduce impulsive trading behavior through structured trade logging, emotional check-ins, and AI-powered feedback. The platform targets emotional triggers—such as FOMO, revenge trading, and overconfidence—that often cause beginners to lose money and quit.",
    heroImage: "/projects/spring2025/tradetribe/hero.png",
    keyFeatures: [
      {
        title: "Emotional Check-Ins",
        description: "Guided pre- and post-trade questions help users recognize their emotional state and decision-making process.",
        image: "/projects/spring2025/tradetribe/post_trade_feeling.png"
      },
      {
        title: "Readiness Score",
        description: "AI-generated score tracks emotional readiness and offers personalized feedback based on journal entries.",
        image: "/projects/spring2025/tradetribe/post_trade_reflection.png"
      },
      {
        title: "Trade Logging",
        description: "Users log trade details to monitor patterns like revenge trading and hesitation.",
        image: "/projects/spring2025/tradetribe/ios_2.png"
      },
      {
        title: "Integration with TradingView",
        description: "Users simulate trades externally and return to TradeTribe for reflection and scoring.",
        image: "/projects/spring2025/tradetribe/ios_1.png"
      }
    ],
    problem: "Over 90% of beginner options traders lose their capital within the first 3 months—not due to a lack of knowledge, but because of emotional triggers. Most trading platforms focus on execution and market access, offering little to no support for managing the psychological side of trading.",
    solution: "An emotional trading platform where beginner student options traders build discipline and confidence through structured trade logging and AI-powered feedback. Users complete guided pre- and post-trade emotional check-ins, log trade details, and receive a personalized Readiness Score that evolves over time.",
    marketAnalysis: [
      "30% of options traders are under 30 years old.",
      "Retail investing surged 150% post-2020, but emotional readiness tools have not evolved alongside this growth. (Bloomberg)",
      "Options trading volume exceeds $12B/day.",
      "FOMO, revenge trading, and overconfidence are consistently cited in research as top reasons for poor trade outcomes. (The Journal of Behavioral Finance)",
      "Emotional errors account for more than 80% of trading mistakes. (Forbes)",
      "Platforms like Robinhood saw 22.5 million users by 2023, but provide no emotional analytics or psychological tools. (Internal Market Research)"
    ],
    story: "TradeTribe was born from firsthand experience with the emotional highs and lows of trading. I battled with emotional discipline—and honestly, I’m still working on it. I wiped out my starter capital not due to strategy, but due to emotional triggers. That’s when I realized—success in the markets isn’t just about strategy, it’s about mindset. That’s what TradeTribe is here to train.",
    technical: "Built on Glide for the front-end, including form logic, user accounts, and AI integrations. Glide AI used for emotional feedback generation based on user check-ins. Glide Tables structured trade logs, emotional check-in responses, and scoring logic. TradingView used for realistic market simulation; users paper trade outside the app and log results within TradeTribe.",
    lessonsLearned: [
      "Emotional design requires empathy, not just features.",
      "Simplicity is harder to achieve than complexity.",
      "Real user feedback always reveals what you can’t predict.",
      "Tracking behavior over time is more powerful than one-time inputs.",
      "Emotional wins matter just as much as a good trade."
    ],
    futurePlans: [
      "Expand the AI model to include deeper emotion tagging and context analysis.",
      "Build a more transparent scoring system that shows users how their Readiness Score evolves.",
      "Integrate with more trading platforms beyond TradingView.",
      "Add data visualizations to show emotional trends over weeks and months.",
      "Launch a small trading program to test growth and user feedback."
    ],
    teamMembers: [
      {
        name: "Kaylen Tolliver",
        role: "Founder",
        bio: "Senior at NYU studying Business, Technology, and Entrepreneurship through the BTE program. Originally from Chicago, passionate about using creativity to solve real-world problems.",
        avatar: "",
        linkedin: ""
      }
    ],
    teamAdvisor: "James Walsh",
    acknowledgements: "Thanks to all the early users and mentors who provided feedback and support.",
    appLink: "",
    visuals: [
      "/projects/spring2025/tradetribe/community.png",
      "/projects/spring2025/tradetribe/ios_3.png"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-72 md:h-96">
        <img src={project.heroImage} alt="TradeTribe Hero" className="w-full h-full object-cover object-center" />
        <Link href="/capstone/2025/spring" className="absolute top-4 left-4 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition">
          <FaArrowLeft className="text-purple-700 text-2xl" />
        </Link>
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
            {project.appLink && (
              <li className="mb-2"><a href={project.appLink} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">App Link</a></li>
            )}
            {project.visuals && project.visuals.map((img, idx) => (
              <li key={idx} className="mb-2"><img src={img} alt={`Visual ${idx + 1}`} className="w-full max-w-md rounded shadow" /></li>
            ))}
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
          <p className="text-gray-600 mt-2">© 2025 TradeTribe</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
