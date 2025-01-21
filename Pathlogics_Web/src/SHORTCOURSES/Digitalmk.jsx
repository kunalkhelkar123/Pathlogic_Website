import React, { useState } from "react";
import marketingImage from "../../src/assets/dmgirl.jpg"; // Ensure the path and file extension are correct

const Card = ({ title, description, icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
    <div className="text-4xl mb-4 text-orange-600">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MarketingCardsSection = () => {
  const marketingItems = [
    { title: "Email Marketing", description: "Reach customers directly through targeted email campaigns. Build relationships with personalized content.", icon: "📧" },
    { title: "Social Media Marketing", description: "Engage your audience on platforms like Facebook, Instagram, Twitter, and LinkedIn. Build your brand and increase conversions.", icon: "📱" },
    { title: "Content Marketing", description: "Create valuable, relevant content to attract, engage, and retain customers. Utilize blogs, videos, infographics, and more.", icon: "✍️" },
    { title: "Website Marketing", description: "Optimize your website for higher traffic and better user experience. Focus on SEO, UI/UX design, and conversion rates.", icon: "🌐" },
    { title: "Video Marketing", description: "Create compelling video content to engage with your audience. Utilize platforms like YouTube, Instagram, and TikTok.", icon: "🎥" },
    { title: "Text Messaging", description: "Connect with your customers through SMS campaigns. Send timely updates, promotions, and reminders directly to their phones.", icon: "💬" },
    { title: "PPC Advertising", description: "Leverage paid search campaigns to target high-intent customers. Platforms like Google Ads, Facebook Ads, and more.", icon: "💰" },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-orange-400 to-orange-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Marketing Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingItems.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProgramModules = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const modules = [
    { title: "SEO Mastery", description: "Learn everything about SEO, from keyword research to technical SEO. Understand how to rank high on search engines.", topics: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO", "SEO Tools"] },
    { title: "Content Strategy", description: "Understand content planning, creation, and distribution. Learn to optimize content for maximum reach.", topics: ["Content Planning", "Content Creation", "Blogging", "Video Marketing", "Content Distribution"] },
    { title: "Social Media Marketing", description: "Master social media platforms, learn to schedule posts, and engage with your audience. Advertising strategies included.", topics: ["Social Media Strategy", "Content Scheduling", "Engagement Tactics", "Advertising on Social Platforms", "Analytics and Reporting"] },
    { title: "Real-World Projects", description: "Hands-on experience in creating campaigns, performing market analysis, and tracking performance. Collaborate and optimize strategies.", topics: ["Campaign Creation", "Market Analysis", "Team Collaboration", "Performance Tracking", "Optimization Techniques"] },
  ];

  return (
    <div className="bg-orange-500 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Program Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <button
                  className="text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded-full"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {activeIndex === index ? "Show Less" : "Show More"}
                </button>
              </div>
              {activeIndex === index && (
                <div className="px-6 py-4 border-t border-gray-300">
                  <ul className="list-disc ml-6 space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="text-gray-600">{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseOverview = () => {
  const topics = [
    { title: "SEO & SEM", description: "Master search engine optimization and marketing techniques to drive traffic and conversions." },
    { title: "Content Marketing", description: "Learn how to create valuable content that attracts, engages, and retains customers." },
    { title: "Social Media Strategies", description: "Master social media marketing to grow brand presence across various platforms." },
    { title: "Email Marketing", description: "Leverage email campaigns to communicate directly with your audience and drive conversions." },
    { title: "Data Analytics", description: "Understand the power of data and analytics to improve your marketing strategies and decisions." },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-600 to-orange-800 text-white text-center py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold leading-tight">Digital Marketing Course Overview</h2>
        <p className="mt-4 text-lg">Unlock your potential with our comprehensive digital marketing training. Master key skills and tools to boost your career.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:bg-orange-700 hover:text-white transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function DigitalMarketing() {
  const cards = [
    { title: "SEO & SEM", description: "Learn search engine optimization to increase visibility. Use SEM for paid results.", icon: "🔍" },
    { title: "Content Marketing", description: "Develop content strategies to engage audiences with blogs, videos, and more.", icon: "✍️" },
    { title: "Social Media Marketing", description: "Leverage platforms to build brand awareness and engage customers.", icon: "📱" },
    { title: "Email Marketing", description: "Master email campaigns for customer engagement and retention.", icon: "📧" },
  ];

  return (
    <div>
      <div className="bg-orange-600 text-white px-8 relative">
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <circle cx="250" cy="250" r="250" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide">Transform Your Career!</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Learn Digital Marketing <br /> and Boost Your <br /> Career Growth.</h1>
            <p className="text-lg text-white">Join Our Expert-Led Offline Batches with 100% Job Assurance</p>
            <div className="flex space-x-4 mt-6">
              <button className="bg-white text-orange-600 font-semibold py-2 px-6 rounded shadow hover:bg-gray-200">Enroll Now!</button>
              <button className="bg-orange-700 text-white font-semibold py-2 px-6 rounded shadow hover:bg-orange-800">Download Brochure</button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={marketingImage} alt="Digital marketing illustration" className="rounded-xl w-[500px] h-[500px] object-cover" />
          </div>
        </div>
      </div>

      <MarketingCardsSection />
      <ProgramModules />
      <CourseOverview />
    </div>
  );
}
