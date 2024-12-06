import React from 'react';
import { ArrowRight, Linkedin, ExternalLink, Receipt, FileSearch, Tag } from 'lucide-react';

const SpenserProject = () => {
  const team = [
    { name: "Julian Singer", email: "jes9815@stern.nyu.edu" },
    { name: "Karan Raval", email: "kr2680@stern.nyu.edu" },
    { name: "Pranavi Veeramachaneni", email: "pv2115@stern.nyu.edu" },
    { name: "Cynthia Zhang", email: "cz2496@stern.nyu.edu" },
    { name: "Jonathan Fung", email: "jf4382@stern.nyu.edu" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-purple-700 to-indigo-700">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
            src="https://storage.cloud.google.com/bte-capstone-images/spencer/Screen%20Recording%202024-11-26%20at%204.33.37%E2%80%AFPM.mov"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/90 to-indigo-700/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-white mb-6">Spenser</h1>
          <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
            Automating expense management to save businesses time and money.
          </p>
        </div>
      </div>

      {/* Product Demo */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Smart Receipt Processing</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our Chrome extension seamlessly processes receipts and automatically populates 
              expense reports, eliminating manual data entry and reducing errors.
            </p>
          </div>
          <div>
            <img 
              src="https://storage.cloud.google.com/bte-capstone-images/spencer/reciept.png"
              alt="Processed Receipt"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Receipt className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Scanning</h3>
              <p className="text-gray-600">
                Google Cloud Vision powered OCR extracts text from digital and physical receipts.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <FileSearch className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Information Extraction</h3>
              <p className="text-gray-600">
                Advanced parsing algorithms identify and extract key information like vendor, items, and amounts.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Tag className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Categorization</h3>
              <p className="text-gray-600">
                AI-powered expense categorization with custom Chart of Accounts support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Evolution Timeline */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12">Project Evolution</h2>
          <div className="space-y-8">
            {[
              {
                date: "September 2024",
                title: "Initial Concept",
                description: "Explored pet insurance automation solutions based on team's personal experiences."
              },
              {
                date: "October 2024",
                title: "Strategic Pivot",
                description: "Shifted focus to expense management after market research invalidated initial concept."
              },
              {
                date: "November 2024",
                title: "First Customer Meeting",
                description: "Validated product concept with St. Mary's College VP of Strategy and Finance."
              },
              {
                date: "December 2024",
                title: "Product Enhancement",
                description: "Added categorization feature and pitched to NYU's finance team."
              }
            ].map((milestone) => (
              <div key={milestone.date} className="flex flex-col md:flex-row gap-6">
                <div className="w-32 flex-shrink-0">
                  <div className="text-sm font-medium text-purple-600">{milestone.date}</div>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="px-3 py-1 bg-white rounded-full text-sm inline-block">Python</div>
                <div className="px-3 py-1 bg-white rounded-full text-sm inline-block ml-2">Flask</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">AI & ML</h3>
              <div className="space-y-2">
                <div className="px-3 py-1 bg-white rounded-full text-sm inline-block">Google Cloud Vision</div>
                <div className="px-3 py-1 bg-white rounded-full text-sm inline-block ml-2">PyTorch</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="space-y-2">
                <div className="px-3 py-1 bg-white rounded-full text-sm inline-block">Flask-SQLAlchemy</div>
                <div className="px-3 py-1 bg-white rounded-full text-sm inline-block ml-2">Transformers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member) => (
              <div key={member.email} className="text-center">
                <div className="font-medium mb-2">{member.name}</div>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <Linkedin className="h-5 w-5 mx-auto" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpenserProject;