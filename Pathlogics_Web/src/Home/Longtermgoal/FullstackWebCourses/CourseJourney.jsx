export default function CourseJourney() {
    return (
      <div className="bg-black min-h-screen flex flex-col items-center p-8">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <h2 className="text-purple-600 text-lg font-semibold">FullStack Web Journey</h2>
          <h1 className="text-5xl font-extrabold text-white mt-4 leading-tight">
            It's not just a Course;
            <br />
            <span className="text-blue-600">It's an Experience.</span>
          </h1>
          <button className="bg-orange-500 text-white px-8 py-3 mt-6 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600">
            Book a free webinar
          </button>
  
          {/* Timeline Section */}
          <div className="mt-16 space-y-16 relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300"></div>
  
            {/* Step 1 */}
            <div className="flex items-center relative">
              <div className="w-16 h-16 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full shadow-lg absolute -left-10">
                🚀
              </div>
              <span className="ml-16 bg-yellow-300 px-4 py-2 rounded-md text-sm font-medium">Excited!</span>
              <div className="ml-6 bg-white p-6 shadow-lg rounded-lg w-3/4 border border-gray-200">
                <h3 className="text-lg font-semibold">Kickstart your journey</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>Orientation by Avinash Jadhav</li>
                  <li>Meet your program instructors</li>
                  <li>Meet your peers</li>
                </ul>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="flex items-center relative">
              <div className="w-16 h-16 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full shadow-lg absolute -left-10">
                😎
              </div>
              <span className="ml-16 bg-red-300 px-4 py-2 rounded-md text-sm font-medium">Confident</span>
              <div className="ml-6 bg-white p-6 shadow-lg rounded-lg w-3/4 border border-gray-200">
                <h3 className="text-lg font-semibold">Master full stack by solving real problems</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>Build real-world projects</li>
                  <li>Get doubts resolved via 1:1 sessions</li>
                  <li>Meet industry experts</li>
                </ul>
              </div>
            </div>
  
            {/* Step 3 */}
            <div className="flex items-center relative">
              <div className="w-16 h-16 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full shadow-lg absolute -left-10">
                😇
              </div>
              <span className="ml-16 bg-green-300 px-4 py-2 rounded-md text-sm font-medium">Supported</span>
              <div className="ml-6 bg-white p-6 shadow-lg rounded-lg w-3/4 border border-gray-200">
                <h3 className="text-lg font-semibold">Experts to help you prepare for interviews</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>Resume and profile creation</li>
                  <li>Mock interviews</li>
                  <li>Soft-skill training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  