"use client"

import { Cpu, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// The workshops data is now a regular JavaScript array
const workshops = [
  {
    id: 1,
    title: "IOT and Beyond",
    description: "IOT and beyond focuses on this digital revolution that engaging in digital technology and investment.",
    duration: "10 Hours",
    mode: "Online / Offline"
  },
  {
    id: 2,
    title: "AI/ML on Embedded Systems",
    description: "With embedded AI /ML devices have the ability to run AI/ML models at the device level and then directly use the results to perform an appropriate task or action.",
    duration: "12 Hours",
    mode: "Online / Offline"
  },
  {
    id: 3,
    title: "Make your own Alexa",
    description: "Not everyone can afford that amount of money just for a speaker. There is one thing you can do; You can build your own Alexa for free",
    duration: "8 Hours",
    mode: "Online / Offline"
  },
  {
    id: 4,
    title: "Python Programming",
    description: "It is an easy way to learn Python that you can do it in 2 days. Cut through the noise and get real results with a step-by-step approach to learning Python.",
    duration: "14 Hours",
    mode: "Online / Offline"
  }
]

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="absolute inset-0 bg-black/5 pattern-grid-lg" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-white/80">
              <li>
                <a href="/" className="hover:text-white">
                  HOME
                </a>
              </li>
              <li>/</li>
              <li>WORKSHOPS</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Workshops
          </h1>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {workshops.map((workshop) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 p-8"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50" />
              
              {/* Icon */}
              <div className="relative mb-4">
                <Cpu className="h-12 w-12 text-orange-500" />
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold text-orange-500">
                  {workshop.title}
                </h3>
                <p className="text-gray-600">
                  {workshop.description}
                </p>

                {/* Details */}
                <div className="space-y-2 pt-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>Duration: {workshop.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>Course Mode: {workshop.mode}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-6">
                  {/* <Link to="/quickenquiry" className="w-full">
                    <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600">
                      Apply Now
                    </button>
                  </Link> */}
                  <button className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
                  <Link to="/quickenquiry" className="w-full">Contact Us  </Link>
                  </button>
                  <button className="rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-900">
                   
                  <Link to="/Aboutus" className="w-full"> Know More </Link>

                  </button>
                  {/* <button className="rounded-md border border-gray-800 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-800 hover:text-white">
                    Brochure
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
