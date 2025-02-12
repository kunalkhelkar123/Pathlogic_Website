"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Aboutus() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-orange-900" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-8 font-bold tracking-tight text-orange-900 sm:text-5xl lg:text-6xl">
            We Believe That Every Individual Has The Power To Transform Their IT Aspirations Into Reality.
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-orange-900/80">
            At Pathlogics Technologies, we are dedicated to providing the platform for individuals to excel, grow, and make their mark in the IT world.
          </p>

          {/* CTA Button */}
          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#learn-more"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-orange-800"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="absolute -bottom-px left-0 right-0 h-px bg-orange-100/10" />
    </section>
  )
}

