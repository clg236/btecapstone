import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ArrowRight, Linkedin, Users, BookOpen, Code } from 'lucide-react';

import ProjectShowcaseHeader from './_components/ProjectShowcase';

const ProjectShowcase = () => {
  const projects = [
    {
      name: "Style Cycle",
      description: "A membership-based clothing swap platform offering NYC women an affordable way to refresh wardrobes while reducing fashion waste.",
      link: "projects/stylecycle",
      tech: "Shopify, Google Forms, Calendly",
      image: "/projects/style-cycle/hero.png",
      team: [
        { name: "Mariangel Sumo", email: "mas10129@stern.nyu.edu" }
      ]
    },
    {
      name: "TableTango",
      description: "API Infrastructure for real-time waitlists, reservations, and up-to-date menu information for enhanced dining experiences.",
      link: "projects/table-tango",
      tech: "React.js, GraphQL, PostgreSQL",
      image: "/projects/table-tango/hero.png",
      team: [
        { name: "Yura Li", email: "yl8324@stern.nyu.edu" },
        { name: "Selina Lu", email: "yl8929@stern.nyu.edu" }
      ]
    },
    {
      name: "Risky Business",
      description: "Automated trading algorithm targeting S&P 500 momentum with smart execution and risk management.",
      link: "projects/risky",
      tech: "Python, Alpaca Trading API",
      image: "/projects/risky-business/hero.png",
      team: [
        { name: "Phat Do", email: "d2226@stern.nyu.edu" }
      ]
    },
    {
      name: "KaSa Batteries",
      description: "A peer-to-peer platform connecting certified battery recyclers with businesses accumulating battery stock.",
      link: "projects/kasa",
      tech: "Web, Octopus CRM",
      image: "/projects/kankyo/hero.png",
      team: [
        { name: "Dimash Shubay", email: "ds6704@stern.nyu.edu" }
      ]
    },
    {
      name: "Spenser",
      description: "A Chrome extension that automates expense management with smart receipt processing and AI-powered categorization, saving businesses time and money.",
      link: "projects/spenser",
      tech: "Python, Flask, Google Cloud Vision",
      image: "/projects/spenser/hero.png",
      team: [
        { name: "Julian Singer", email: "jes9815@stern.nyu.edu" },
        { name: "Karan Raval", email: "kr2680@stern.nyu.edu" },
        { name: "Pranavi Veeramachaneni", email: "pv2115@stern.nyu.edu" },
        { name: "Cynthia Zhang", email: "cz2496@stern.nyu.edu" },
        { name: "Jonathan Fung", email: "jf4382@stern.nyu.edu" }
      ]
    },
    {
      name: "Musiconnect",
      description: "Platform connecting artists across genres and borders, enabling seamless collaboration and celebrating music as a universal language.",
      link: "projects/musiconnect",
      tech: "Wix",
      image: "/projects/musiconnect/hero.png",
      team: [
        { name: "Aaya Anan", email: "ha9216@stern.nyu.edu" }
      ]
    },
    {
      name: "Innovest",
      description: "Simplifies startup investing through an intuitive platform offering exclusive insights and streamlined tools.",
      link: "projects/innovest",
      tech: "Figma, Rebel Corp",
      image: "/projects/innovest/hero.png",
      team: [
        { name: "Maitri Choksey", email: "mrc9447@stern.nyu.edu" }
      ]
    },
    {
      name: "Eden",
      description: "Creates living documentation contextualized to the viewer, eliminating search-time and redundancy.",
      link: "projects/eden",
      tech: "NextJS, MongoDB, OpenAI",
      image: "/projects/eden/hero.png",
      team: [
        { name: "Alex Talamonti", email: "alt9035@stern.nyu.edu" },
        { name: "Kayln Kwan", email: "kk4620@stern.nyu.edu" }
      ]
    },
    {
      name: "Mikro",
      description: "A peer-to-peer platform for friendly situational wagers, enabling users to create and participate in micro-bets with friends on everyday activities.",
      link: "projects/mikro",
      tech: "Swift, Firebase, Firestore",
      image: "/projects/brobets/hero.png",
      team: [
        { name: "Rafed Abbassi", email: "rja9695@stern.nyu.edu" },
        { name: "Michael Shen", email: "mrs9938@stern.nyu.edu" },
        { name: "Jonathan Yu", email: "jpy8185@stern.nyu.edu" }
      ]
    },
    {
      name: "Dreaming Daytrip",
      description: "Travel aid program that visualizes the planning experience and allows for easy sharing.",
      link: "projects/daydreaming",
      tech: "WeChat Mini-Program, Tencent Cloud",
      image: "/projects/dreaming-daytrip/hero.png",
      team: [
        { name: "Lynn Li", email: "yl8892@stern.nyu.edu" },
        { name: "Scarlett Ying", email: "my2165@stern.nyu.edu" }
      ]
    },
    {
      name: "Altfolio",
      description: "A no-code search tool to scrape and aggregate alternative data from websites like Reddit.",
      link: "projects/altfolio",
      tech: "React, AWS Lambda, OpenAI",
      image: "/projects/altfolio/hero.gif",
      team: [
        { name: "Edison Chen", email: "ebc5802@stern.nyu.edu" },
        { name: "Harry Du", email: "hd1202@stern.nyu.edu" },
        { name: "Isaiah Gomez", email: "ieg4653@stern.nyu.edu" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px_16px]" />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Fall 2024 BTE Capstone Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <Users className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold">25</div>
                <div className="text-sm opacity-80">Student Founders</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <BookOpen className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm opacity-80">Innovative Projects</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
              <Code className="h-8 w-8" />
              <div>
                <div className="text-2xl font-bold">BTE</div>
                <div className="text-sm opacity-80">Program</div>
              </div>
            </div>
          </div>
          <p className="text-lg max-w-3xl leading-relaxed opacity-90">
            Showcasing cutting-edge solutions from NYU Stern&apos;s emerging entrepreneurs across fintech, 
            sustainability, documentation, travel, music, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.name} className="group flex flex-col h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/50">
              <CardHeader className="flex-shrink-0 p-0">
                <div className="relative w-full pt-[56.25%] bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.description}</p>
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {project.tech}
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3 text-gray-900">
                      {project.team.length === 1 ? 'Founder' : 'Founders'}
                    </h4>
                    <div className="space-y-2">
                      {project.team.map((member, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{member.name}</span>
                          <a
                            href="#"
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                            title="Connect on LinkedIn"
                          >
                            <Linkedin className="h-4 w-4 text-blue-600" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;