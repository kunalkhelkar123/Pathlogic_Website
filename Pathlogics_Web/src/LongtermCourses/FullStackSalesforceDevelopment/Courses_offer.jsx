import React from 'react';
import fullstockimage from '../../assets/fullstockimage.jpg';
import { Link } from 'react-router-dom';
import { Users, Briefcase, DollarSign, Clock } from "lucide-react";
// import images from ""

const courses = [
  {
    id: 1,
    title: 'Full Stack MERN Development',
    description: 'An advanced, full-stack JavaScript framework perfect for developing modern, high-performance web applications',
    duration: '4 Months',
    mode: 'Offline',
    image: fullstockimage,
    link: '/Reactjs'
  },
  {
    id: 2,
    title: 'Full Stack MEAN Development',
    description: ' A popular JavaScript-based stack tailored for building scalable, maintainable web applications that require extensive data management and enterprise-level solutions.',
    duration: '4 Months',
    mode: 'Offline',
    image: fullstockimage,
    link: '/Angularjs'
  },
  // {
  //   id: 3,
  //   title: 'Full Stack .DotNet Development',
  //   description: 'A deep dive into the DotNet standard for automotive software developer with real-time systems.',
  //   duration: '4 Months',
  //   mode: 'Offline',
  //   image: fullstockimage,
  //   link: '/DotNet'
  // },
  // {
  //   id: 4,
  //   title: 'Full Stack DevOps Engineer',
  //   description: 'Explore MEAN Stack Development and its use in  development with practical, hands-on projects.',
  //   duration: '6 Months',
  //   mode: 'Offline',
  //   image: fullstockimage,
  //   link: "/Devops"
  // },
];

const statsData = [
  { icon: Users, value: "1200+", label: "Students Trained" },
  { icon: Briefcase, value: "1400+", label: "MNC’s & Mid Scale Companies" },
  { icon: DollarSign, value: "16 LPA", label: "Highest Salary Package" },
  { icon: Users, value: "120+", label: "Student Internships Done" },
];


// Main Component
export default function Component() {

  const TechLogo = ({ children, color }) => (
    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center ${color} shadow-lg transform transition-transform duration-300 hover:scale-110`}>
      {children}
    </div>
  );



  return (
    <>
      {/* Main Section */}
      <div
        className=" justify-center items-center  sm:-mt-36 py-6 px-2   bg-cover bg-center"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-extrabold sm:px-24 text-black">
            A Complete Software Testing Course: Manual & Automation Testing
          </h3>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 sm:px-8 sm:gap-12 gap-6 max-w-6xl mx-auto">

          {/* {courses.map(course => ( */}
          <div
            // key={course.id}
            className="relative flex bg-white   flex-col justify-between bg-cover bg-center rounded-lg shadow-lg border border-black"
            style={{
              backgroundImage: `url(${fullstockimage})`,
              // opacity: "90px",
              height: "350px",
              position: "relative",
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              // boxShadow: 'inset -20px 0px 0px 20px rgba(0, 0, 0, 0.7), inset 20px 0px 0px 20px rgba(0, 0, 0, 0.5)' 
            }}
          >
            <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

            <div className="relative z-10 p-6">
              <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">Automation Testing</h2>

              {/* <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-6">
                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-green-500">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6   lg:w-6 lg:h-6  md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                    </svg>
                  </TechLogo>
                  <span className="text-xl font-bold text-green-600">M</span>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-gray-800">
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.5 3h19A1.5 1.5 0 0 1 23 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 19.5v-15A1.5 1.5 0 0 1 2.5 3m7.92 13h1.43L8.5 12l3.36-4H10.4L7.77 11.1 5.15 8.96H3.5l3.35 3.04-3.35 3.99h1.67l2.44-2.94L10.42 16m7.62-6.64h-1.62L13.5 16h1.6l2.07-3.39L19.3 16h1.55l-3.81-6.64Z" />
                    </svg>
                  </TechLogo>

                  <span className="text-xl font-bold text-white">E</span>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-blue-400">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6   lg:w-6 lg:h-6  md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                    </svg>
                  </TechLogo>
                  <span className="text-xl font-bold text-blue-500">R</span>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-green-500">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6   lg:w-6 lg:h-6  md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.165.11.201l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.203-.221h.926c.11 0 .203.092.203.221v8.347c0 1.449-.788 2.294-2.156 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.275.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.204-.221h.943c.101 0 .186.074.203.174.138.909.547 1.357 2.52 1.357 1.55 0 2.208-.35 2.208-1.175 0-.477-.186-.825-2.587-1.063-1.989-.2-3.212-.636-3.212-2.23 0-1.47 1.24-2.35 3.303-2.35 2.323 0 3.473.809 3.62 2.533a.19.19 0 01-.055.166c-.037.037-.091.055-.146.055h-.943a.211.211 0 01-.202-.164c-.22-1.045-.789-1.376-2.274-1.376-1.669 0-1.871.584-1.871 1.021 0 .53.237.696 2.515.99 2.256.293 3.284.715 3.284 2.285 0 1.586-1.321 2.53-3.63 2.53z" />
                    </svg>
                  </TechLogo>
                  <span className="text-xl font-bold text-green-500">N</span>
                </div>
              </div> */}


              <p className="text-white mt-6 text-center iten-center justify-center">

                Master test automation with tools like Selenium. Our course teaches you to automate repetitive tasks and boost software efficiency


              </p>
              <div className='mt-6'>
                <p className="text-orange-500 font-semibold">Course duration - 4 month</p>
                <p className="text-orange-500 font-semibold">Course mode- offline</p>
              </div>


            </div>

            <div className="relative z-10 p-6 flex space-x-2 bg-black">
              <Link to="/quickenquiry" className="w-full">
                  <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600">
                    Apply Now
                  </button>
                </Link>


              <Link
                to="/softweretesting"
                state="Full Stack MERN Development"
                className="w-full"
              >
                <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 
                rounded-md hover:bg-gray-200 hover:text-black">
                  Know More
                </button>
              </Link>

              {/* <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-100">
                  Brochure
                </button> */}
            </div>
          </div>


          <div
            // key={course.id}
            className="relative flex bg-white   flex-col justify-between bg-cover bg-center rounded-lg shadow-lg border border-black"
            style={{
              backgroundImage: `url(${fullstockimage})`,
              // opacity: "90px",
              height: "350px",
              position: "relative",
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              // boxShadow: 'inset -20px 0px 0px 20px rgba(0, 0, 0, 0.7), inset 20px 0px 0px 20px rgba(0, 0, 0, 0.5)' 
            }}
          >
            <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

            <div className="relative z-10 p-6">
              <h2 className="text-2xl font-bold text-orange-500 text-center mb-4">Manual Testing</h2>

              {/* <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-6">
                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-green-500">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6   lg:w-6 lg:h-6  md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                    </svg>
                  </TechLogo>
                  <span className="text-xl font-bold text-green-600">M</span>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-gray-800">
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.5 3h19A1.5 1.5 0 0 1 23 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 19.5v-15A1.5 1.5 0 0 1 2.5 3m7.92 13h1.43L8.5 12l3.36-4H10.4L7.77 11.1 5.15 8.96H3.5l3.35 3.04-3.35 3.99h1.67l2.44-2.94L10.42 16m7.62-6.64h-1.62L13.5 16h1.6l2.07-3.39L19.3 16h1.55l-3.81-6.64Z" />
                    </svg>
                  </TechLogo>

                  <span className="text-xl font-bold text-white">E</span>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-red-500">
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M10.48 14.59h3.05L12 9.5l-1.52 5.09z"></path>
                      <path d="M12 0L1.71 4.5l1.63 12.75L12 24l8.66-6.75L22.29 4.5 12 0zm6.19 16.5h-2.48l-1.07-3h-4.28l-1.07 3H6.81L12 3.84l6.19 12.66z"></path>
                    </svg>
                  </TechLogo>

                  <span className="text-xl font-bold text-blue-500">A</span>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <TechLogo color="bg-green-500">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6   lg:w-6 lg:h-6  md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.165.11.201l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.203-.221h.926c.11 0 .203.092.203.221v8.347c0 1.449-.788 2.294-2.156 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.275.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.204-.221h.943c.101 0 .186.074.203.174.138.909.547 1.357 2.52 1.357 1.55 0 2.208-.35 2.208-1.175 0-.477-.186-.825-2.587-1.063-1.989-.2-3.212-.636-3.212-2.23 0-1.47 1.24-2.35 3.303-2.35 2.323 0 3.473.809 3.62 2.533a.19.19 0 01-.055.166c-.037.037-.091.055-.146.055h-.943a.211.211 0 01-.202-.164c-.22-1.045-.789-1.376-2.274-1.376-1.669 0-1.871.584-1.871 1.021 0 .53.237.696 2.515.99 2.256.293 3.284.715 3.284 2.285 0 1.586-1.321 2.53-3.63 2.53z" />
                    </svg>
                  </TechLogo>
                  <span className="text-xl font-bold text-green-500">N</span>
                </div>
              </div> */}


              <p className="text-white text-center iten-center justify-center mt-6">
                Master manual testing with hands-on training in test case creation, bug identification, and effective software testing.


                .</p>




              <div className='mt-6'>
                <p className="text-orange-500 font-semibold">Course duration - 4 month</p>
                <p className="text-orange-500 font-semibold">Course mode- offline</p>
              </div>



            </div>

            <div className="relative z-10 p-6 flex space-x-2 bg-black">
              <Link to="/quickenquiry" className="w-full">
                  <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600">
                    Apply Now
                  </button>
                </Link>


              <Link
                to="/manualtesting"
                state="Full Stack MERN Development"
                className="w-full"
              >
                <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 
                rounded-md hover:bg-gray-200 hover:text-black">
                  Know More
                </button>
              </Link>

              {/* <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-100">
                  Brochure
                </button> */}
            </div>
          </div>
          {/* // ))} */}

        </div>
      </div>



    </>
  );
}