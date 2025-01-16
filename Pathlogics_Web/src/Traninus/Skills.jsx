import React from 'react';

const UpskillSection = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-700 mb-8 tracking-tight"
            style={{ fontFamily: 'var(--thm-font)',fontWeight:"200" }}>
          Upskill Your Organization
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          Talent management has become a strategic priority for every corporate organization. Pathlogic Technologies helps in 
          unlocking your team's full potential by making them obtain and hone skills to progress professionally and 
          personally. We offer a comprehensive suite of training programs and co-develop possibilities to hire, raise and 
          grow your employees.
        </p>
      </div>
    </section>
    <section className="min-h-[400px] w-full bg-gradient-to-br from-orange-600 to-orange-400 flex flex-col items-center justify-center px-4 py-16 text-white">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        Contact us for more details
      </h2>
      <div 
        className="inline-block bg-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-shadow"
      >
        <a 
          href="mailto:hr@pathlogicstech.in"
          className="text-orange-600 text-xl md:text-2xl font-medium hover:text-orange-700 transition-colors"
          aria-label="Email us at hr@pathlogicstech.in"
        >
          Pathologics123@gmail.com
        </a>
      </div>
    </div>
  </section>
  </>
  );
};

export default UpskillSection;
