'use client'
import React, { useState, useEffect } from 'react';
import ProjectCard from "@/components/ui/ProjectCard";
import TextCard from "@/components/ui/TextCard";
import Header from "@/components/ui/Header";

const initialProjects = [
  {"year": "2024", "description": "An innovative solution to streamline online learning experiences.", "name": "Christian Grewell", "cover": "/assets/images/cover_1.png"},
  {"text": "B"},
  {"year": "2024", "description": "A breakthrough app for real-time language translation using AI.", "name": "Alexa Smith", "cover": "/assets/images/cover_2.png"},
  {"text": "T"},
  {"year": "2024", "description": "A wearable device to monitor and improve posture in real-time.", "name": "Jordan Lee", "cover": "/assets/images/cover_3.png"},
  {"year": "2024", "description": "A platform for connecting freelance artists with global opportunities.", "name": "Mia Wong", "cover": "/assets/images/cover_1.png"},
  {"year": "2024", "description": "An AI-driven tool for personalized nutrition and diet planning.", "name": "Ethan Gonzalez", "cover": "/assets/images/cover_3.png"},
  {"year": "2024", "description": "A virtual reality experience for immersive historical education.", "name": "Sophia Patel", "cover": "/assets/images/cover_5.png"},
  {"text": "E"},
  {"year": "2024", "description": "A virtual reality experience for immersive historical education.", "name": "Sophia Patel", "cover": "/assets/images/cover_4.png"},

];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Page() {
  const [projects, setProjects] = useState(initialProjects.slice(0, 9));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProjects(prevProjects => shuffleArray([...prevProjects]));
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
            <ProjectCard
              key={index}
              year={project.year}
              description={project.description}
              name={project.name}
              cover={project.cover}
            />
          ) : (
            <TextCard key={index} text={project.text}/>
          ))}
      </div>
    </div>
  );
}