'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BTE2025Page() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.parallax-element');
      scrollElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.2;
        const yPos = window.scrollY * speed;
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Header with NYU Stern Branding */}
      <header className="bg-[#57068c] text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold">NYU Stern</h1>
              <h2 className="text-xl">Business, Technology &amp; Entrepreneurship</h2>
            </div>
            <div className="bg-white text-[#57068c] px-4 py-2 rounded font-bold">
              2025 Capstone Projects
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#57068c]/80 to-[#57068c]/40 z-10"></div>
          <img 
            src="https://www.stern.nyu.edu/sites/default/files/assets/main_image/BTE%20Hero%20Mobile%20%281%29.jpg" 
            alt="NYU Stern BTE Program" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <div className={`transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl font-bold mb-6">Innovating for Tomorrow</h2>
              <p className="text-xl mb-8">The 2025 BTE Capstone showcases the cutting-edge projects at the intersection of business savvy and technological innovation, representing NYU Stern&apos;s forward-thinking approach to business education.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/capstone/2025/spring" className="bg-white text-[#57068c] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Spring 2025 Projects
                </Link>
                <Link href="/capstone/2024" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                  View 2024 Archive
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute right-10 top-20 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm z-5 parallax-element" data-speed="0.3"></div>
        <div className="absolute left-20 bottom-20 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm z-5 parallax-element" data-speed="0.2"></div>
        <div className="absolute right-1/4 bottom-1/4 w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm z-5 parallax-element" data-speed="0.4"></div>
      </section>

      {/* About 2025 Capstone */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#57068c]">The 2025 BTE Experience</h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The 2025 BTE Capstone represents a culmination of innovative thinking, technical expertise, and entrepreneurial spirit cultivated throughout our students&apos; academic journey at NYU Stern.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This year&apos;s projects tackle emerging challenges across diverse sectors including healthcare technology, educational innovation, sustainable systems, and urban mobility solutions.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Through collaboration with industry partners and faculty mentorship, students have developed solutions that not only demonstrate technical proficiency but also address real-world problems with viable business models.
                </p>
                <div className="border-l-4 border-[#57068c] pl-4 italic text-gray-600">
                  &ldquo;The 2025 capstone projects represent the innovative spirit that defines NYU Stern&apos;s approach to business education in the digital age.&rdquo;
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-[#57068c]/5 to-[#57068c]/10 p-6 z-10 relative">
                  <h3 className="text-2xl font-bold mb-4 text-[#57068c]">2025 Themes</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">AI for Good</strong>
                        <p className="text-gray-600">Leveraging artificial intelligence to solve social challenges</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">Climate Tech</strong>
                        <p className="text-gray-600">Sustainable business models addressing climate challenges</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">Future of Work</strong>
                        <p className="text-gray-600">Reimagining workplace tools and collaboration</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#57068c] text-white p-2 rounded-full mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <strong className="font-medium">Health Innovation</strong>
                        <p className="text-gray-600">Technology solutions improving healthcare access and outcomes</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#57068c]/20 to-[#57068c]/5 rounded-full z-0 parallax-element" data-speed="0.1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Insights */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute -right-20 top-10 w-80 h-80 rounded-full bg-[#57068c]/5 parallax-element" data-speed="0.15"></div>
          <div className="absolute -left-10 bottom-10 w-60 h-60 rounded-full bg-[#57068c]/5 parallax-element" data-speed="0.1"></div>
          
          <h2 className="text-3xl font-bold text-center mb-16 text-[#57068c] relative z-10">Faculty Insights</h2>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <svg className="h-10 w-10 text-[#57068c] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  The interdisciplinary nature of the BTE program enables students to approach problems from multiple perspectives. This year&apos;s capstone projects demonstrate how technical skills, business acumen, and creative thinking can converge to create truly innovative solutions.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#57068c]/10 flex items-center justify-center text-[#57068c] font-bold">
                    MK
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">Dr. Michael Kaplan</p>
                    <p className="text-gray-500">Associate Professor of Technology and Innovation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg transform transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <svg className="h-10 w-10 text-[#57068c] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  What impresses me most about the Spring 2025 capstone projects is how students have embraced complexity and uncertainty. They&apos;ve gone beyond creating technological solutions to developing comprehensive business models that address real market needs.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-[#57068c]/10 flex items-center justify-center text-[#57068c] font-bold">
                    SL
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">Professor Sarah Lee</p>
                    <p className="text-gray-500">BTE Capstone Faculty Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#57068c]">Spring 2025 Showcase</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore the innovative projects from our BTE students that combine technical expertise, 
            business acumen, and creative problem-solving.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-2xl mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#57068c]/80 to-[#57068c]/40 z-10"></div>
              <img 
                src="https://source.unsplash.com/random/1200x600/?technology-education" 
                alt="Spring 2025 Showcase" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white mb-4">Spring 2025</h3>
                  <Link 
                    href="/capstone/2025/spring" 
                    className="inline-block bg-white text-[#57068c] px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#57068c] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join the Innovation Journey</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            The BTE program at NYU Stern is shaping the future of business through technology and entrepreneurship. 
            Explore how our students are creating solutions for tomorrow&apos;s challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/capstone/2025/spring" className="bg-white text-[#57068c] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Spring 2025 Projects
            </Link>
            <Link 
              href="https://www.stern.nyu.edu/programs-admissions/undergraduate/academics/bs-degree-business-technology-and-entrepreneurship" 
              target="_blank"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              Learn About BTE
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
