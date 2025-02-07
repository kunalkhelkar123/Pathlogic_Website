import { useState } from "react";
//import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "../components/ui/button";

export default function WebCamping() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-around p-6">
      <div className="max-w-lg space-y-4">
        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">For professionals</span>
        <h1 className="text-5xl font-bold">Full Stack Web Development. </h1>
        <p className="text-gray-300">Choose MERN stack  acquire expertise through practical application and real-world projects.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-green-700 px-3 py-1 rounded-lg">Placement assistance</span>
          <span className="bg-purple-700 px-3 py-1 rounded-lg">AI-infused curriculum</span>
          <span className="bg-orange-600 px-3 py-1 rounded-lg">1:1 Mentorship</span>
          {/* <span className="bg-blue-700 px-3 py-1 rounded-lg">Faculty from MAANG</span> */}
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex flex-wrap gap-10">
          <div className="text-center">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-gray-400 text-sm">placement rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">650+</p>
            <p className="text-gray-400 text-sm">Companies Hiring</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">128%</p>
            <p className="text-gray-400 text-sm">Average hike</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">1.5L+</p>
            <p className="text-gray-400 text-sm">Learners</p>
          </div>
        </div>
      </div>
      <div className="bg-white text-black p-6 w-full max-w-md mt-6 md:mt-0 md:ml-10">
        <div>
          <h2 className="text-xl font-bold mb-4">Book a <span className="text-pink-800">Free Live Webinar</span> to know more</h2>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter name" className="w-full p-2 border rounded-lg mb-3" onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-lg mb-3" onChange={handleChange} />
          <label>Phone Number:</label>
          <input type="tel" name="phone" placeholder="Phone number" className="w-full p-2 border rounded-lg mb-3" onChange={handleChange} />
          <fieldset className="mb-4">
            <legend className="font-semibold">Experience</legend>
            <div className="space-y-2 mt-2">
              <label className="flex items-center"><input type="radio" name="experience" value="technical" onChange={handleChange} /> Working professional - Technical roles</label>
              <label className="flex items-center"><input type="radio" name="experience" value="non-technical" onChange={handleChange} /> Working professional - Non technical</label>
              <label className="flex items-center"><input type="radio" name="experience" value="final-year" onChange={handleChange} /> College student</label>
              
              <label className="flex items-center"><input type="radio" name="experience" value="others" onChange={handleChange} /> Others</label>
            </div>
          </fieldset>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">Book Now →</button>
        </div>
      </div>
    </div>
  );
}
