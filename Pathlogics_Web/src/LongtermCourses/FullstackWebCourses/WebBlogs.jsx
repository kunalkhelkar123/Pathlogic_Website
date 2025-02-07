'use client'

import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick' // Import the Slider component
import 'slick-carousel/slick/slick.css' // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css' // Import slick theme styles
import image1 from '../../assets/embeded.jpg';
import image2 from '../../assets/rust.jpeg';
import image3 from '../../assets/machinelearning.webp';
import image4 from '../../assets/paython.webp';
import image5 from '../../assets/Next.webp';
import image6 from '../../assets/cloud.jpeg';

const blogPosts = [
  {
    id: 1,
    title: "The role of Embedded Systems during COVID-19",
    description: "COVID-19 left us vulnerable to unprepared dangers that we have never encountered before. Due to it...",
    date: "26, May 2021",
    tag: "C++",
    image: image1
  },
  {
    id: 2,
    title: "The Rise of Rust in System Programming",
    description: "Rust is gaining popularity among developers for its memory safety and performance. Learn how it's changi...",
    date: "15, Nov 2021",
    tag: "Rust",
    image: image2
  },
  {
    id: 3,
    title: "Machine Learning with Go",
    description: "Explore the growing ecosystem of machine learning libraries in Go and how they're being used in producti...",
    date: "7, Dec 2021",
    tag: "Go",
    image: image3
  },
  {
    id: 4,
    title: "Introduction to Python for Data Science",
    description: "Learn the basics of Python programming and its applications in data science and analysis...",
    date: "3, Jan 2022",
    tag: "Python",
    image: image4
  },
  {
    id: 5,
    title: "Web Development with React and Next.js",
    description: "Discover how to build modern, server-side rendered web applications using React and Next.js...",
    date: "18, Feb 2022",
    tag: "JavaScript",
    image: image5
  },
  {
    id: 6,
    title: "Cloud Computing Fundamentals",
    description: "Explore the basics of cloud computing and learn about different cloud service models and providers...",
    date: "5, Mar 2022",
    tag: "Cloud",
    image: image6
  }
]

export default function OurBlogs() {


  // Slick Slider settings with autoplay
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3, // You can adjust this number to show more or fewer slides at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds (3000ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-serif text-orange-600 text-center mb-6">Our Blogs</h1>

      {/* Slider Component */}
      <Slider  {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="flex-none w-80 h-96 p-4" style={{backgroundImage:`url(${post.image})`,backgroundsize:'cover',backgroundPosition:'center'}}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col h-full">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">{post.tag}</span>
                </div>
                <div className="mt-4 px-2 py-1 bg-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button aria-label="Like" className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </button>
                      <button aria-label="Comment" className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button aria-label="Share" className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
