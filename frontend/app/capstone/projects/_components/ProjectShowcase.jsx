import React from 'react';

const ProjectShowcaseHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">
          Fall 2024 Capstone Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg mb-8">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👥</span>
            <span>19 Student Founders</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💡</span>
            <span>9 Innovative Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span>Business Technology & Entrepreneurship</span>
          </div>
        </div>
        <p className="text-lg max-w-3xl">
          Showcasing innovative solutions in fintech, sustainability, documentation, travel, music, and more. 
          Each project represents months of ideation, user research, and technical development from NYU Stern's 
          emerging entrepreneurs.
        </p>
      </div>
    </div>
  );
};

export default ProjectShowcaseHeader;