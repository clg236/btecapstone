import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Linkedin, ExternalLink, BookOpen } from 'lucide-react';

const AdvisorsPage = () => {
  const advisors = [
    {
      name: "James Walsh",
      image: "/advisors/james.jpg",
      title: "Product Manager, Capital One Small Business Bank",
      bio: "James Walsh is a product manager at Capital One's Small Business Bank, where he leads the digital servicing experience and contributes to community impact through Pro Bono Consulting. With a background in architecture and urban design, he previously led an innovation lab at NYU and is excited to support the next generation of innovators.",
      quote: "What an incredible and talented group! It was truly a joy to work with Jonathan, Pranavi, Karan, Julian, and Cynthia. They demonstrated creativity, innovation, and a mastery of the most difficult skill of all—knowing when to pivot!"
    },
    {
      name: "Phil Hayes",
      image: "/advisors/phil.png",
      title: "Data Science Leader, Meta",
      bio: "Phil Hayes is a Data Science Leader at Meta, helping to roll out Meta AI worldwide.",
      quote: "It has been incredible to watch Kayln and Alex go from ideation to developing a working product — leveraging their own personal experiences working in tech and deeply empathizing with their end user to try to build and iterate on something valuable and delightful."
    },
    {
      name: "Aurelio Yrigoyen",
      image: "/advisors/aurelio.jpg",
      title: "Tech MBA Graduate, NYU Stern",
      bio: "Aurelio Yrigoyen is a graduate of the Tech MBA program at NYU Stern, where he developed expertise in leveraging technology for business innovation. With a career spanning roles at industry leaders like Amazon and Walmart, he has focused on e-commerce and last-mile delivery systems.",
      quote: "The program was a great way to connect with the entrepreneurial spirit of young students who have technical skills and big ambitions, with practical conversations where we worked together to refine strategies and turn their ideas into reality—a learning experience for everyone involved!"
    },
    {
      name: "Diego Arias",
      image: "/advisors/diego.jpg",
      title: "Senior Investor, Africa-focused VC Fund",
      bio: "Diego Arias García is a Senior Investor at an Africa-focused VC fund based out of Morocco. Currently, he leads investment activities for Fund II, focused on managing the investment process and portfolio.",
      quote: "Supporting the inaugural BTE class as they tackled venture capital, storytelling, and fundraising for their final projects was a great experience—I can't wait to see the amazing entrepreneurs this program will produce!"
    },
    {
      name: "Christian Maynard-Philipp",
      image: "/advisors/christian.jpg",
      title: "CEO, Pattern",
      bio: "Christian Maynard-Philipp is the CEO of Pattern, a wealth management platform connecting investors with financial advisors and providing asset management. With a career spanning wealth management and FinTech, she has held leadership roles at Vault and Third Party Technologies.",
      quote: "My mentees have well-thought-out business ideas that could be monetized in the real world!"
    },
    {
      name: "Lauren Pearl",
      image: "/advisors/lauren.jpg",
      title: "Independent CFO Consultant & Lecturer",
      bio: "Lauren is an expert in crafting winning strategies for growing teams. An independent CFO consultant, lecturer, and podcast host who's worked with over 150 growing companies, Lauren supports teams across diverse sectors.",
      quote: "I was impressed with how talented, prepared, and engaged my team was, and how quickly they progressed and responded to feedback - it was a true pleasure to work with them!"
    },
    {
      name: "Guthrie Collin",
      image: "/advisors/guthrie.jpg",
      title: "VP of Product, Roundel at Target",
      bio: "Guthrie Collin is VP of Product at Roundel, Target's retail media network, and previously held data, product and technology leadership roles at Amazon, Dow Jones, Nielsen, and The Associated Press.",
      quote: "Mentoring the BTE Capstone's Mikro team was an energizing experience for me because I was able to both learn from the students and make a meaningful contribution to their project and education."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Advisors</h1>
<p className="text-xl text-white/90 max-w-3xl mx-auto">
  Members of the Stern community providing mentorship and guidance throughout the capstone process
</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor) => (
            <Card key={advisor.name} className="flex flex-col hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex-shrink-0 p-0">
                <div className="relative w-full pt-[100%] bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={`${advisor.image}`}
                    alt={advisor.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-bold mb-1">{advisor.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{advisor.title}</p>
                <p className="text-gray-600 mb-6 text-sm">{advisor.bio}</p>
                <div className="mt-auto">
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 italic">
                    &quot;{advisor.quote}&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisorsPage;