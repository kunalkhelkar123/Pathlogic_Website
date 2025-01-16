import React, { useState } from 'react';

const AccordionItem = ({ question, answer, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 mb-4">
      <button
        className={`w-full text-left p-4 font-semibold text-lg focus:outline-none ${isOpen ? 'bg-white text-orange-500' : 'bg-white text-gray-900'}`}
        onClick={onClick}
        style={{ fontFamily: "'Open Sans', sans-serif" }}  // Use a similar font to the one in the screenshot
      >
        {question}
        <span className="float-right">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-gray-900" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          <p>{answer}</p>
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
    <section className="py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center  text-orange-600" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          Have Any Questions?
        </h2>

        <AccordionItem
          question="1. What are the courses offered at Pathlogics Technologies?"
          answer="Pathlogic Technologics offers both long term and short-term courses."
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        >
          <div className="p-4 bg-white shadow-md mb-4 text-gray-900">
            <h3 className="text-xl font-bold">Course: Embedded Systems</h3>
            <p className="mb-2">Duration: 6 Months</p>
            <p>Admission through Online Scholarship Test</p>
          </div>

          <div className="p-4 bg-gray-100">
            <h3 className="text-lg font-bold mb-4">Short Term Courses:</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-md">
                <h4 className="font-semibold">Automotive Embedded</h4>
                <p>Duration: 72 Hours</p>
                <p>Direct Admission</p>
              </div>
              <div className="p-4 bg-white shadow-md">
                <h4 className="font-semibold">AUTOSAR</h4>
                <p>Duration: 72 Hours</p>
                <p>Direct Admission</p>
              </div>
              <div className="p-4 bg-white shadow-md">
                <h4 className="font-semibold">Micro Python</h4>
                <p>Duration: 2 Weeks</p>
                <p>Direct Admission</p>
              </div>
              <div className="p-4 bg-white shadow-md">
                <h4 className="font-semibold">Embedded C</h4>
                <p>Duration: 6 Weeks</p>
                <p>Direct Admission</p>
              </div>
              <div className="p-4 bg-white shadow-md">
                <h4 className="font-semibold">Python</h4>
                <p>Duration: 30 Days</p>
                <p>Direct Admission</p>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          question="2. What is Embedded Systems? Where is it Used?"
          answer="Embedded systems are self-contained programs that are embedded within a piece of hardware. We can say it’s a specialized computer system that is part of a larger system or machine. Typically, an embedded system is housed on a single microprocessor board with the programs stored in ROM. Embedded system can also be defined as a computer system that is created with optimal efficiency, thereby allowing it to complete specific functions as quickly as possible. Embedded systems microprocessors are programmed to automate certain tasks. Cell phones, computers, copiers, medical equipment, programmable logic controllers, and numerous other products rely on embedded systems. Real time embedded systems can be used to replace traditional software applications.

Embedded systems are used in any application or which requires certain level of automation or intelligence. As more and more intelligent devices make their way into our lives, the demand for embedded telecom will increase. In addition, even in areas where telecom companies are in the grips of a slowdown, companies are not making cuts in introducing new features.

The range is really very wide, limited only by human imagination,” B J Ram Rao, CEO, eSmartNet (a division of Zicom Electronic Security Systems) admitted in a recent interview with Zee India. “I would think that, broadly, the embedded system application areas would be wireless, Internet and mobile communications, industrial control, test and measurement, networking, aerospace and automotive control, consumer electronics, digital imaging and defence.”"
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        />

        <AccordionItem
          question="3. What is the Scope of Embedded Systems?"
          answer="Embedded System is the future. Every industry needs some artificial intelligence into it, and that intelligence can be provided by embedded systems. No electronic product in the market exists without embedded systems."
          isOpen={openIndex === 3}
          onClick={() => toggleAccordion(3)}
        >
          <p>The embedded system market is estimated to grow from $86.5 billion in 2020 to $116.2 billion by 2025, at a CAGR of 6.1%.</p>
          <p>The increase in R&D activities related to embedded systems, demand for ADAS, electromobility solutions, and rise in use of multicore processors in military applications make this field highly sought after.</p>
        </AccordionItem>

        <AccordionItem
          question="4. Why Pathlogic Technologics Institute for Embedded Systems & VLSI Training?"
          answer="Pathlogic Technologics  Institute teaches the basics and underlying concepts of Embedded Systems in detail, along with real-time practical experience. Our courses include modules like Object-Oriented Concepts with C++, RT-Linux, and ARM porting. We have a strong placement record with a dedicated placement cell."
          isOpen={openIndex === 4}
          onClick={() => toggleAccordion(4)}
        />

        <AccordionItem
          question="5. Admission process followed at Pathlogic Technologics  INSTITUTE for training into long-term courses?"
          answer="The admission into Embedded Systems course is based on the Pathlogic Technologics  Online Entrance examination. Working professionals with relevant experience are eligible for direct admission."
          isOpen={openIndex === 5}
          onClick={() => toggleAccordion(5)}
        />
      </div>
    </section>
  );
};

export default Accordion;
