import { Link } from 'react-router-dom';
import fullstockimage from '../../assets/fullstockimage.jpg';

export default function Workweoffers() {
  const courses = [
    {
      id: 1,
      title: 'Embedded Systems Development',
      description: 'Learn the fundamentals of embedded systems with hands-on experience in hardware and software integration.',
      duration: '6 Months',
      mode: 'Offline',
      image: fullstockimage,
    },
    {
      id: 2,
      title: 'Automotive Embedded Systems',
      description: 'Master the principles and practices of embedded systems in the automotive industry.',
      duration: '5 Months',
      mode: 'Offline',
      image: fullstockimage,
    },
    {
      id: 3,
      title: 'AUTOSAR',
      description: 'A deep dive into the AUTOSAR standard for automotive software architecture with real-time systems.',
      duration: '4 Months',
      mode: 'Online',
      image: fullstockimage,
    },
  ]
  return (
    <>
      <section className="bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Workshops we offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Organizing a workshop can be an exciting way to strengthen your relationship with current clients,
            establish new relationships, and further develop yourself in your area of business.
          </p>
        </div>
      </section>

      <div className="flex justify-center items-center min-h-screen bg-cover bg-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
          {courses.map(course => (
            <div
              key={course.id}
              className="relative flex flex-col justify-between bg-cover bg-center rounded-lg shadow-lg border border-black"
              style={{
                backgroundImage: `url(${course.image})`,
                height: "400px",
                position: "relative",
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

              {/* Course details */}
              <div className="relative z-10 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-2 sm:mb-4">{course.title}</h2>
                <p className="text-gray-300 mb-2 sm:mb-4">{course.description}</p>
                <div>
                  <p className="text-orange-500 font-semibold">Duration: {course.duration}</p>
                  <p className="text-orange-500 font-semibold">Course Mode: {course.mode}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="relative z-10 p-4 sm:p-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 bg-black">
                <Link to="/quickenquiry" className="w-full">
                  <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600">
                    Apply Now
                  </button>
                </Link>

                <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-100">
                  Know More
                </button>
                {/* <button className="w-full bg-transparent border border-orange-500 text-orange-500 font-semibold py-2 rounded-md hover:bg-orange-100">
                  Brochure
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center my-8 px-4">
        <button className="bg-gradient-to-r from-orange-400 to-blue-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          VIEW ALL WORKSHOPS
        </button>
      </div>
    </>
  );
}
