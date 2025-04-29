'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BTE2024Page() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with NYU Stern Branding */}
      <header className="bg-[#57068c] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold">NYU Stern</h1>
              <h2 className="text-xl">Business, Technology &amp; Entrepreneurship</h2>
            </div>
            <div className="bg-white text-[#57068c] px-4 py-2 rounded font-bold">
              2024 Capstone Projects
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#57068c]/70 to-[#57068c]/30 z-10"></div>
          <img 
            src="https://www.stern.nyu.edu/sites/default/files/styles/header_1920/public/assets/main_image/2022-10/BTE_Hero_Desktop.png" 
            alt="NYU Stern BTE Program" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className={`transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-6">Where Business Meets Innovation</h2>
              <p className="text-xl mb-8">The BTE Capstone represents the culmination of undergraduate study at the intersection of business, technology, and entrepreneurship at NYU Stern.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/capstone/2024/spring" className="bg-white text-[#57068c] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Spring 2024 Projects
                </Link>
                <Link href="/capstone/2024/fall" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                  Fall 2024 Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About BTE Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#57068c]">About the BTE Program</h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Business, Technology, and Entrepreneurship (BTE) program at NYU Stern is designed for students who are passionate about developing innovative solutions at the intersection of business and technology.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The curriculum integrates business fundamentals, technology skills, and an entrepreneurial mindset, preparing students to lead digital transformation and innovation in any industry.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Through experiential learning, industry collaborations, and a capstone project, BTE students develop both the technical and business acumen needed to thrive in today&apos;s rapidly evolving business landscape.
                </p>
                <div className="border-l-4 border-[#57068c] pl-4 italic text-gray-600">
                  &ldquo;The BTE program prepares students to be architects of change, equipped with the knowledge and skills to reimagine industries and create solutions for tomorrow&apos;s challenges.&rdquo;
                </div>
              </div>
              
              <div className="order-first md:order-last">
                <div className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[#57068c]/5 to-[#57068c]/10 p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#57068c]">Program Highlights</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">Integrated Curriculum</strong>
                        <p className="text-gray-600">Combines business, technology, and entrepreneurship</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">Industry Partnerships</strong>
                        <p className="text-gray-600">Collaborations with leading tech companies</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">Capstone Project</strong>
                        <p className="text-gray-600">Culminating experience solving real-world challenges</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">Entrepreneurial Mindset</strong>
                        <p className="text-gray-600">Cultivating innovation and strategic thinking</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capstone Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#57068c]">2024 Capstone Journey</h2>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#57068c]/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24 relative">
              {/* Spring 2024 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-bold text-[#57068c] mb-2">Spring 2024</h3>
                  <p className="text-gray-600 mb-4">The spring semester projects focused on educational technology, sustainability, mental wellness, and urban solutions.</p>
                  <Link 
                    href="/capstone/2024/spring" 
                    className="inline-flex items-center text-[#57068c] font-medium hover:underline"
                  >
                    View Projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#57068c] shadow-lg">
                  <span className="text-[#57068c] font-bold">S</span>
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <p className="italic text-gray-600">
                      &ldquo;The Spring 2024 capstone showcased innovative solutions that harmonize business needs with technological advancements, creating sustainable and impactful products.&rdquo;
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-[#57068c]/10 flex items-center justify-center text-[#57068c] font-bold">
                        PD
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Professor Davis</p>
                        <p className="text-sm text-gray-500">Faculty Advisor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Fall 2024 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                  <h3 className="text-2xl font-bold text-[#57068c] mb-2">Fall 2024</h3>
                  <p className="text-gray-600 mb-4">The fall semester focused on financial technology, music industry transformation, urban agriculture, and sustainable fashion.</p>
                  <Link 
                    href="/capstone/2024/fall" 
                    className="inline-flex items-center text-[#57068c] font-medium hover:underline"
                  >
                    View Projects
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#57068c] shadow-lg">
                  <span className="text-[#57068c] font-bold">F</span>
                </div>
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <p className="italic text-gray-600">
                      &ldquo;Our BTE students consistently demonstrate their ability to imagine transformative solutions and build viable products that address real market needs.&rdquo;
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-[#57068c]/10 flex items-center justify-center text-[#57068c] font-bold">
                        JT
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Dr. Jennifer Thompson</p>
                        <p className="text-sm text-gray-500">BTE Program Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#57068c] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Explore the Innovation Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">Discover how NYU Stern BTE students are reimagining industries and creating solutions for tomorrow&apos;s challenges.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/capstone/2024/spring" className="bg-white text-[#57068c] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Spring 2024 Projects
            </Link>
            <Link href="/capstone/2024/fall" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors">
              Fall 2024 Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">NYU Stern</h2>
              <p className="text-gray-400">Business, Technology &amp; Entrepreneurship</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} New York University. All rights reserved.</p>
              <Link 
                href="https://www.stern.nyu.edu/programs-admissions/undergraduate/academics/bs-degree-business-technology-and-entrepreneurship" 
                target="_blank" 
                className="text-gray-400 hover:text-white underline"
              >
                Learn more about BTE
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
