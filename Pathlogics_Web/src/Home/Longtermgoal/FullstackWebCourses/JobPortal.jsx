import { motion } from "framer-motion";

export default function JobPortal() {
  return (
    <div className="max-w-8xl mx-auto py-10 px-5 text-center " style={{backgroundColor:"azure"}}>
      <motion.h2 
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Placement Benefits
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[ 
          { icon: "🏃", title: "Profiles highlighted on pathlogics.com", description: "Make a distinct mark for yourself on India's leading job portal." },
          { icon: "👥", title: "650+ Companies Hiring", description: "Expanded job search with a vast network of companies hiring." },
          { icon: "✈️", title: "500+ monthly job openings", description: "Get access to an abundance of job openings every month." },
          { icon: "👔", title: "Dedicated placement team", description: "Guiding and motivating you every step of the way." },
          { icon: "💼", title: "20+ Members placement team", description: "A dedicated team to help you get placed in your dream company." },
          { icon: "📱", title: "Job openings shared every day", description: "We send job openings daily to your WhatsApp directly." }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center space-y-2 p-5 border rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-4xl">{item.icon}</span>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="md:col-span-3 flex justify-center space-x-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">Request callback</button>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition duration-300">Book a free webinar</button>
      </motion.div>
    </div>
  );
}
