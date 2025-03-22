import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import img from "../.././assets/FAQ.jpg";

const AccordionItem = ({ question, answer, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm">
      <button
        className={`w-full flex justify-between items-center p-4 text-sm font-semibold transition-all duration-300 ${
          isOpen ? "text-orange-500 bg-orange-100" : "text-gray-900 bg-white"
        }`}
        onClick={onClick}
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-gray-900 transition-all duration-300">
          <p className="leading-relaxed">{answer}</p>
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={img} 
            alt="FAQ"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side FAQ */}
        <div className="w-full">
          <h2
            className="text-3xl font-bold mb-6 text-orange-600 text-center md:text-left"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Have Any Questions?
          </h2>

          <AccordionItem
            question="1. How do I Arrange a Visit to the Center?"
            answer="Our Center Addresses."
            isOpen={openIndex === 1}
            onClick={() => toggleAccordion(1)}
          >
            <div className="p-4 bg-white rounded-lg shadow-md mt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 shadow-sm rounded-lg">
                  <h2 className="font-semibold text-orange-600">Baner</h2>
                  <p className="text-sm text-gray-700">
                    Office Number 203, Mont Vert Spectra, Baner, Pune.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 shadow-sm rounded-lg">
                  <h2 className="font-semibold text-orange-600">Katraj</h2>
                  <p className="text-sm text-gray-700">
                    Sr. No. 30/2/31, 3rd Floor, Vyankatesh Developer, Pune.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 shadow-sm rounded-lg">
                  <h2 className="font-semibold text-orange-600">JM Road</h2>
                  <p className="text-sm text-gray-700">
                    5th floor, Dangat Patil Empire, Vadgaon Budruk, Pune.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md mt-4">
              <p className="text-gray-700">
                Once you inquire about our IT courses, our career guides will
                contact you and provide counseling for courses like Full Stack
                Web Development, Java Development, .NET Development, and more.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            question="2. Do Pathlogics Provide Online & Offline Programs?"
            answer="Yes, Pathlogics offers both online and offline programs, giving students flexibility."
            isOpen={openIndex === 2}
            onClick={() => toggleAccordion(2)}
          />

          <AccordionItem
            question="3. How Pathlogics’ Placement Procedure Works?"
            answer="After completing the course, we conduct mock interviews and tests. You'll receive unlimited job calls until placement."
            isOpen={openIndex === 3}
            onClick={() => toggleAccordion(3)}
          />

          <AccordionItem
            question="4. Why Pathlogic Institute for Embedded Systems Training?"
            answer="We teach the basics and advanced Embedded Systems concepts with hands-on training and strong placement support."
            isOpen={openIndex === 4}
            onClick={() => toggleAccordion(4)}
          />

          <AccordionItem
            question="5. What Happens If I Miss a Session?"
            answer="We provide guidance and ensure you stay on track with learning."
            isOpen={openIndex === 5}
            onClick={() => toggleAccordion(5)}
          />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
