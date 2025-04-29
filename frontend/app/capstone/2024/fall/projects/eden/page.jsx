import React from 'react';
import { ArrowRight, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Page() {
  const team = [
    { name: "Alex Talamonti", email: "alt9035@stern.nyu.edu" },
    { name: "Kayln Kwan", email: "kk4620@stern.nyu.edu" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <video 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
          autoPlay 
          loop 
          muted 
          playsInline
          src="/projects/eden/hero.png"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-white mb-6">Eden</h1>
          <p className="text-2xl text-white/90 max-w-2xl">
            Living documentation contextualized to the viewer, eliminating search-time and redundancy.
          </p>
          <div className="flex gap-4 mt-8">
            <a 
              href="https://crescent-v1.vercel.app/flows" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Live Demo <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">Project Evolution</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Original Concept</h3>
                  <p className="text-gray-600">
                    Initially designed as a tool to help developers onboard to complex codebases quicker using LLMs to explain codebase functions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Current Version</h3>
                  <p className="text-gray-600">
                    Evolved to address the root cause of onboarding challenges by focusing on documentation creation, organization, and accessibility.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Flow Creator",
                    description: "Create and publish node-based flows for projects and documentation"
                  },
                  {
                    title: "AI Generated Flows",
                    description: "Generate flows with prompts as starting points"
                  },
                  {
                    title: "Template Flows",
                    description: "Fork and customize template flows for specific use cases"
                  },
                  {
                    title: "Run Flow",
                    description: "Interactive flow mode for improved learning experience"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src="https://storage.cloud.google.com/bte-capstone-images/eden/eden/Example%20Flows%20Page.png"
                  alt="Flows Page"
                  className="rounded-lg shadow-sm"
                />
                <img 
                  src="https://storage.cloud.google.com/bte-capstone-images/eden/eden/NYU%20Startup%20Bootcamp%20Pres.png"
                  alt="Bootcamp Presentation"
                  className="rounded-lg shadow-sm"
                />
              </div>
            </section>
          </div>

          {/* Right Column - Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Team</h3>
              <div className="space-y-3">
                {team.map((member) => (
                  <div key={member.email} className="flex items-center justify-between">
                    <span>{member.name}</span>
                    <div className="flex gap-2">
                      <a href="https://www.linkedin.com/in/alexander-talamonti/" className="text-gray-500 hover:text-blue-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="https://github.com/kaylnlkwan/" className="text-gray-500 hover:text-gray-800">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Frontend</span>
                  <span className="text-gray-600">NextJS, Tailwind</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Backend</span>
                  <span className="text-gray-600">NextJS, MongoDB</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">AI</span>
                  <span className="text-gray-600">OpenAI API</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Timeline</h3>
              <div className="space-y-4">
                {[
                  { date: "October 2024", event: "30+ User Interviews" },
                  { date: "November 2024", event: "Deployment to Vercel" },
                  { date: "December 2024", event: "Pitch Deck Finished" },
                  { date: "December 2024", event: "User Tests Completed" }
                ].map((milestone) => (
                  <div key={milestone.event} className="flex flex-col">
                    <span className="text-sm text-gray-500">{milestone.date}</span>
                    <span>{milestone.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};