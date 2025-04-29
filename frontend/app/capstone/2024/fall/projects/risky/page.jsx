import React from 'react';
import { ArrowRight, Linkedin, Github, ExternalLink, TrendingUp, Clock, Factory, LineChart } from 'lucide-react';

const RiskyBusinessProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="absolute inset-0">
          <img 
            src="/projects/risky-business/hero.png"
            alt="Risky Business Trading"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">Risky Business</h1>
          <div className="text-3xl text-white/90 font-light mb-4">
            Smarter trades. Faster execution. Better returns.
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Automated momentum trading strategy for the S&P 500
          </p>
        </div>
      </div>

      {/* Strategy Overview */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Trading Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Market Scan</h3>
              <p className="text-gray-600">
                Daily analysis of S&P 500 top and bottom performers
              </p>
            </div>
            <div className="space-y-3">
              <LineChart className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Position Taking</h3>
              <p className="text-gray-600">
                Long top 10 and short bottom 10 performers at market open
              </p>
            </div>
            <div className="space-y-3">
              <Clock className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Risk Management</h3>
              <p className="text-gray-600">
                All positions closed at market close to avoid overnight exposure
              </p>
            </div>
            <div className="space-y-3">
              <Factory className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold">Automation</h3>
              <p className="text-gray-600">
                Fully automated execution via Alpaca Trading API
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Evolution Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Strategy Evolution</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Original Concept</h3>
                  <p className="text-gray-600">
                    Initially focused on S&P 500 options trading based on VIX levels, 
                    selling when expensive and buying when cheap.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Current Version</h3>
                  <p className="text-gray-600">
                    Evolved to a simpler, more executable strategy focusing on daily 
                    momentum trading of S&P 500 stocks.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Development Timeline</h2>
              <div className="space-y-4">
                {[
                  { date: "October 3, 2024", event: "Initial Strategy Demo" },
                  { date: "November 8, 2024", event: "Pitch Deck Presentation" },
                  { date: "November 19, 2024", event: "Trading Bot Launch" },
                  { date: "November 20, 2024", event: "First Profitable Day" }
                ].map((milestone) => (
                  <div key={milestone.date} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-blue-600 font-medium">{milestone.date}</div>
                    <div className="font-medium">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Creator</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Phat Do</h3>
                <p className="text-gray-600 leading-relaxed">
                  Combining financial expertise with programming skills to create 
                  automated trading strategies that remove emotional decision-making.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                  <a href="#" className="inline-flex items-center text-gray-600 hover:text-gray-800">
                    <Github className="h-5 w-5 mr-2" />
                    View on Github
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://storage.cloud.google.com/bte-capstone-images/risky/phat.png"
                alt="Phat Don"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Trading Platform</h3>
              <div className="space-x-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Alpaca Trading API</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Alpaca Markets API</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="space-x-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Automated Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskyBusinessProject;