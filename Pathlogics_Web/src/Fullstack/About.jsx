import React, { useRef, useEffect, useState } from 'react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded-md font-semibold text-sm ${className}`} {...props}>
    {children}
  </button>
);

export default function BlogLayout() {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true); // For toggling auto-scrolling

  const blogPosts = [
    {
      id: 1,
      title: "Attrition on rise in IT firms",
      description: "The attrition rate of leading IT firms in India is now at an all-time high and companies are facing issues in executing large projects.",
      date: "30, Oct 2021",
      language: "JavaScript",
    },
    {
      id: 2,
      title: "Adoption of Security by Design for IoT Devices",
      description: "It is quite evident that rapid increase in billions of IoT devices has already created a weak spot in the ecosystem due to lack of security.",
      date: "3, Sept 2021",
      language: "Python",
    },
    {
      id: 3,
      title: "The role of Embedded Systems during COVID-19",
      description: "COVID-19 left us vulnerable to unprepared dangers that we have never encountered before. Due to its high transmissibility and the lack..",
      date: "26, May 2021",
      language: "C++",
    },
    {
      id: 4,
      title: "The Rise of Rust in System Programming",
      description: "Rust is gaining popularity among developers for its memory safety and performance. Learn how it's changing the landscape of system programming.",
      date: "15, Nov 2021",
      language: "Rust",
    },
    {
      id: 5,
      title: "Machine Learning with Go",
      description: "Explore the growing ecosystem of machine learning libraries in Go and how they're being used in production environments.",
      date: "7, Dec 2021",
      language: "Go",
    },
  ];

  // Auto-scrolling function
  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += scrollRef.current.offsetWidth; // Scroll right automatically
        }
      }, 2000); // Scroll every 3 seconds

      return () => clearInterval(interval); // Cleanup the interval on unmount
    }
  }, [isAutoScrolling]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-12">Our Blog</h1>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {blogPosts.map((post) => (
              <Card key={post.id} className="snap-start">
                <div className="p-0">
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                    Image Placeholder
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {post.language}
                  </span>
                </div>
                <div className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex gap-4">
                    <Button className="text-gray-600 hover:text-gray-900">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button className="text-gray-600 hover:text-gray-900">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button className="text-gray-600 hover:text-gray-900">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Fixed Action Buttons */}
        {/* <div className="fixed bottom-4 right-4 flex flex-col gap-2">
          <Button className="bg-gray-800 hover:bg-gray-900 text-white">
            Apply Online
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Quick Enquiry
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Chat with us
          </Button>
        </div> */}
      </div>
    </div>
  );
}
