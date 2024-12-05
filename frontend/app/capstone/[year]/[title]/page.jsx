'use client'
import { Card } from "@/components/ui/card";
import Header from "@/components/ui/Header";
import MusicPlayer from "@/components/ui/MusicPlayer";

export default function CapstonePage() {
  const milestones = [
    {
      date: "September 2023",
      title: "Project Inception",
      description: "Initial research and project scope definition. Explored various technologies and frameworks to determine the best stack for implementation."
    },
    {
      date: "December 2023",
      title: "Core Development",
      description: "Implemented main features including interactive visualizations and data processing algorithms. Established backend infrastructure."
    },
    {
      date: "February 2024",
      title: "User Testing",
      description: "Conducted extensive user testing with focus groups. Gathered feedback and made iterative improvements to the interface and functionality."
    },
    {
      date: "April 2024",
      title: "Final Implementation",
      description: "Refined all features, optimized performance, and prepared final documentation for project submission."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Project Hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg">
            <h1 className="text-7xl font-bold mb-6 tracking-tight">SUCH A COOL PROJECT!</h1>
            <p className="text-2xl font-medium tracking-wide border-t border-white pt-4">Christian Grewell</p>
            <p className="text-xl mt-2 font-light">Class of 2024</p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="leading-relaxed">
            This capstone project explores innovative approaches to environmental data visualization, 
            focusing on making complex ecological datasets more accessible and understandable to the 
            general public. By combining advanced data processing techniques with intuitive user 
            interfaces, we've created a platform that bridges the gap between scientific research 
            and public understanding.
          </p>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Entrepreneurship Impact</h3>
            <ul className="space-y-2">
              <li>Market validation with 50+ stakeholders</li>
              <li>2 potential venture partners identified</li>
              <li>$25K in pre-seed commitments</li>
              <li>Successful MVP demonstration</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Tech Impact</h3>
            <ul className="space-y-2">
              <li>5000+ data points processed</li>
              <li>98% accuracy in predictions</li>
              <li>3 research papers published</li>
              <li>Open-source community adoption</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Business Impact</h3>
            <ul className="space-y-2">
              <li>$100K potential cost savings</li>
              <li>35% efficiency improvement</li>
              <li>4 enterprise pilots launched</li>
              <li>Industry partnership formed</li>
            </ul>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 ml-2"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  <p className="text-sm mb-2">{milestone.date}</p>
                  <p>{milestone.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}