import Image from 'next/image'
import Link from 'next/link'

export default function BrobetsPage() {
  const timeline = [
    { date: "September 2023", event: "Project Inception - Initial market research and concept validation" },
    { date: "October 2023", event: "Design Sprint - Created initial mockups and user flows" },
    { date: "November 2023", event: "Development Begins - Started iOS app development" },
    { date: "January 2024", event: "Beta Testing - Launched beta version with select users" },
    { date: "March 2024", event: "App Store Launch - Official release on the App Store" },
  ]

  return (
    <div>
      {/* Hero Video Background */}
      <div className="relative h-screen mb-16">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/projects/brobets/video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-6xl font-bold mb-6">BroBets / Mikro</h1>
          <p className="text-2xl mb-8">
            A social betting platform that transforms everyday moments into engaging experiences
          </p>
          <Link 
            href="https://apps.apple.com/app/mikro"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors w-fit"
          >
            Download Mikro
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Project Evolution</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">BroBets: The Original Vision</h3>
              <p className="text-gray-700">
                BroBets began as a simple idea: allow friends to bet on everyday activities and win bragging rights. 
                The concept resonated with early testers who loved the idea of friendly competition without real money stakes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Mikro: The Evolution</h3>
              <p className="text-gray-700">
                As the project evolved, we recognized its potential in professional settings. Mikro emerged as a refined version, 
                designed to enhance team dynamics and workplace engagement through friendly social betting.
              </p>
            </div>
          </div>
        </section>

        {/* Rest of sections remain the same */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/projects/brobets/hero.png"
                alt="Mikro App Interface"
                width={400}
                height={800}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Core Features</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customizable Betting System</h3>
                  <p>Create custom bets with flexible outcomes and deadlines. Perfect for office pools, friendly wagers, and team building.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Integration</h3>
                  <p>Form groups, track statistics, and maintain a comprehensive betting history. Build friendly rivalry and engagement.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy Controls</h3>
                  <p>Granular privacy settings allow you to manage different groups and control who sees your activity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Development Timeline</h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-32 flex-shrink-0 font-semibold">{item.date}</div>
                <div className="flex-1 p-4 bg-gray-50 rounded-lg">{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technical Overview</h2>
          <div className="space-y-4">
            <p>Built using Swift and SwiftUI for native iOS performance. The backend utilizes Firebase for real-time updates 
            and secure data management. We implemented a custom algorithm for bet resolution and scoring.</p>
            <p>The app features offline capability, push notifications for bet updates, and seamless social integration.</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">See Demo</h2>
          <video 
            className="w-full rounded-lg"
            controls
            poster="/projects/brobets/hero.png"
          >
            <source src="/projects/brobets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </div>
  )
}