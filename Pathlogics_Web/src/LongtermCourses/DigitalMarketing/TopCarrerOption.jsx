import React, { useRef, useEffect } from "react";
import {
  FaBullhorn,       // Digital Marketing Executive
  FaSearch,         // SEO
  FaFacebookF,      // Social Media
  FaGoogle,         // Google Ads
  FaPenFancy,       // Content Marketing
  FaEnvelopeOpenText, // Email Marketing
  FaHandshake,      // Affiliate Marketing
  FaUserTie         // Freelancer
} from "react-icons/fa";

const RoadmapCard = ({ icon: Icon, title, offer }) => {
  return (
    <div className="min-w-[250px] sm:h-60 md:h-60 lg:h-60 sm:mx-12 md:mx-12 lg:mx-12 sm:min-w-[280px] hover:scale-105 bg-gradient-to-br from-gray-900 to-teal-600 text-white shadow-lg p-4 sm:p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-sm sm:text-lg font-semibold">{title}</h3>
      <p className="text-xs sm:text-sm mt-2">{offer}</p>
    </div>
  );
};

export default function TopCarrerOption() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const roadmapSteps = [
    {
      icon: FaBullhorn,
      title: "Digital Marketing Executive / Specialist",
      offer:
        "Manage end-to-end digital strategies including SEO, social media, and paid ads for brands.",
    },
    {
      icon: FaSearch,
      title: "SEO Executive / Specialist",
      offer:
        "Optimize websites to rank higher on search engines like Google and drive organic traffic.",
    },
    {
      icon: FaFacebookF,
      title: "Social Media Manager",
      offer:
        "Create and manage content, strategy, and campaigns across platforms like Instagram, Facebook, LinkedIn, and more.",
    },
    {
      icon: FaGoogle,
      title: "Google Ads / PPC Expert",
      offer:
        "Plan and manage paid advertising campaigns on Google and other platforms for maximum ROI.",
    },
    {
      icon: FaPenFancy,
      title: "Content Marketing Specialist",
      offer:
        "Develop engaging blog posts, videos, and marketing content to attract and retain customers.",
    },
    {
      icon: FaEnvelopeOpenText,
      title: "Email Marketing Executive",
      offer:
        "Build and manage email campaigns to nurture leads and drive conversions.",
    },
    {
      icon: FaHandshake,
      title: "Affiliate Marketing Manager",
      offer:
        "Work with affiliate partners to drive sales and leads through commission-based marketing.",
    },
    {
      icon: FaUserTie,
      title: "Digital Marketing Freelancer",
      offer:
        "Work independently with multiple clients or agencies, offering flexible services across various domains.",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-7 py-6">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black leading-tight px-2">
          Top Career Options After Digital Marketing Course in Pune
        </h3>
        <p className="text-lg md:text-xl text-black mt-4 max-w-4xl mx-auto leading-relaxed">
          After completing a Digital Marketing course, you'll be ready to explore a wide range of exciting career opportunities in the digital space. From managing social media to running ad campaigns and optimizing websites, you'll have the practical skills that businesses are actively looking for. As a digital marketer, you’ll be a key player in helping brands grow online and reach the right audience.
        </p>
      </div>
      <div
        className="relative w-full flex flex-col overflow-x-auto sm:flex-row items-center px-1 space-y-4 sm:space-y-0 sm:space-x-6 py-4 sm:py-6"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {roadmapSteps.map((step, index) => (
          <RoadmapCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
}
