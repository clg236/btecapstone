'use client'
import React, { useState, useEffect } from 'react';
import ProjectCard from "@/components/ui/ProjectCard";
import TextCard from "@/components/ui/TextCard";
import Header from "@/components/ui/Header";
import Link from 'next/link';

// Real projects from 2024 and 2025
const realProjects = [
  // 2024 Fall Projects
  {
    year: "2024",
    description: "Peer-to-peer platform for placing friendly bets with friends",
    name: "BroBets",
    cover: "/projects/brobets/hero.png",
    route: "/capstone/2024/fall/projects/brobets"
  },
  {
    year: "2024",
    description: "Connecting talented musicians with gig opportunities",
    name: "MusiConnect",
    cover: "/projects/musiconnect/hero.png",
    route: "/capstone/2024/fall/projects/musiconnect"
  },
  {
    year: "2024",
    description: "Sustainable urban gardening solutions",
    name: "Eden",
    cover: "/projects/eden/hero.png",
    route: "/capstone/2024/fall/projects/eden"
  },
  {
    year: "2024",
    description: "Restaurant reservation and table management system",
    name: "Table Tango",
    cover: "/projects/table-tango/hero.png",
    route: "/capstone/2024/fall/projects/table-tango"
  },
  {
    year: "2024",
    description: "Investment platform for retail investors",
    name: "Innovest",
    cover: "/projects/innovest/hero.png",
    route: "/capstone/2024/fall/projects/innovest"
  },
  // 2025 Spring Projects
  {
    year: "2025",
    description: "A dual AI business intelligence and brokerage platform for retail investors",
    name: "Uninvestible",
    cover: "/projects/spring2025/uninvestible/Hero Image.png",
    route: "/capstone/2025/spring/projects/uninvestible"
  },
  {
    year: "2025",
    description: "Digital platform for aging parents and family caregivers",
    name: "Synced",
    cover: "/projects/spring2025/synced/hero_image.jpg",
    route: "/capstone/2025/spring/projects/synced"
  },
  {
    year: "2025", 
    description: "Smart logistics solution that optimizes shipping routes",
    name: "LoadWise", 
    cover: "/projects/spring2025/loadwise/LoadWiseLogo.png",
    route: "/capstone/2025/spring/projects/loadwise"
  },
  {
    year: "2025", 
    description: "Emotional training platform for student options traders",
    name: "TradeTribe", 
    cover: "/projects/spring2025/tradetribe/hero.png",
    route: "/capstone/2025/spring/projects/tradetribe"
  },
  {
    year: "2025", 
    description: "Habit-breaking platform using behavioral science and gamification",
    name: "Quitly", 
    cover: "/projects/spring2025/quitly/Quitly_Homepage.png",
    route: "/capstone/2025/spring/projects/quitly"
  },
  // Text cards for "BTE" letters
  { text: "B" },
  { text: "T" },
  { text: "E" }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Page() {
  // Select initial projects (mix of real projects and text cards)
  const [projects, setProjects] = useState(() => {
    // Get 6 random real projects
    const selectedProjects = shuffleArray([...realProjects.filter(p => p.year)]).slice(0, 6);
    // Add BTE text cards
    const textCards = realProjects.filter(p => p.text);
    // Mix them together
    return shuffleArray([...selectedProjects, ...textCards]);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get new selection of projects for rotation
      const realProjectsPool = realProjects.filter(p => p.year);
      const selectedProjects = shuffleArray([...realProjectsPool]).slice(0, 6);
      const textCards = realProjects.filter(p => p.text);
      setProjects(shuffleArray([...selectedProjects, ...textCards]));
    }, 7000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Header />
      <div className="text-center my-8">
        <h1 className="text-4xl font-semibold">BTE</h1>
        <h2 className="text-2xl font-semibold">Capstone Archive</h2>
      </div>
      <div className="max-w-[900px] gap-4 grid grid-cols-3 px-8">
        {projects.map((project, index) => project.year ? (
            <Link href={project.route} key={index}>
              <ProjectCard
                year={project.year}
                description={project.description}
                name={project.name}
                cover={project.cover}
              />
            </Link>
          ) : (
            <TextCard key={index} text={project.text}/>
          ))}
      </div>
    </div>
  );
}