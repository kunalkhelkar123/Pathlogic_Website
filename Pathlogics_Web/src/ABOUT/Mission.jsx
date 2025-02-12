import { Link } from "react-router-dom"
export default function Mission() {
    return (
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Column with Pattern */}
            <div className="lg:col-span-4">
              <div className="relative">
                {/* Decorative Pattern */}
                {/* <div className="absolute -left-4 top-12 grid grid-cols-6 gap-4 opacity-20">
                  {[...Array(60)].map((_, i) => (
                    <div
                      key={i}
                      className="h-3 w-3 rotate-45 transform rounded-sm bg-gray-500"
                    />
                  ))}
                </div> */}
                
                {/* Mission Title */}
                <div className="relative">
                  <h2 className="text-lg font-semibold leading-8 text-gray-600">
                    Our Mission
                  </h2>
                  <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Transforming Tech Skills...!
                  </p>
                </div>
              </div>
            </div>
  
            {/* Right Column Content */}
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {/* Tagline */}
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  "Driving Careers, Leading Technology"
                </h3>
                
                {/* Introduction */}
                <p className="text-lg leading-8 text-gray-600">
                  We pride ourselves on offering comprehensive training programs that encompass the latest technologies, tools, and methodologies.
                </p>
  
                {/* Two Column Text */}
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-base leading-7 text-gray-600">
                      Our mission is to bridge the gap between academia and industry by providing industry-aligned courses that cater to the evolving needs of the IT sector. We believe in the transformative power of education and its ability to unlock opportunities, broaden horizons, and shape successful futures.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-base leading-7 text-gray-600">
                      With a relentless commitment to quality, we ensure that our courses are designed and delivered by experienced industry professionals. Our faculty members bring their real-world insights, expertise, and practical examples to the classroom, creating a dynamic learning environment that prepares students for the challenges and opportunities in their chosen fields.
                    </p>
                  </div>
                  
                </div>
                
              </div>
          
            </div>
          </div>
        </div>
        <div className="space-y-4 p-9 mx-auto  pt-[70px] bg-gradient-to-br from-gray-200 to-gray-400 pr-[10px] flex flex-col">
          <div className="w-[100vw]"><h1 className="text-center text-base text-center leading-7 font-bold text-black-600"> LETS CONNECT....</h1>
          <h3 className="text-center text-base text-center leading-7 font-semibold text-black-600">Get Trained Get Hired.</h3>
          </div>
          <div className="w-[100vw] p-2 flex justify-center item-center">
            <Link to="/QuickEnquiry">
          <button className="bg-orange-600 p-2 flex justify-center items-center  rounded-[5px] text-base text-center leading-7 font-semibold text-black-600">Are You Interested ? </button>
          </Link></div>
        </div>
        <div className="space-y-4 mx-auto w-[80vw] pt-[70px] pr-[10px]">
                    <p className="text-base text-center leading-7 font-semibold text-black-600 ">
                    <h1 className="text-center" >ARE YOU LOCATED IN ANY OF THESE AREAS IN PUNE ?</h1>  
                    <h3 className="text-center">You can conviniently travel to PathLogics if you are loacted in any of these areas.</h3>
                    Baner, Katraj, Narhe, JM Road, Hinjewadi, Wakad, Shivaji Nagar, Kothrud, Pashan, Bavdhan, Aundh, Karve Nagar, Warje.
                    <h3 className="text-center">We have a lot of students from these areas in Pune.</h3>
                    PathLogics Technologies is the best IT Training Institute in Pune.
                    </p> 
                  </div>
      </section>

    )
  }
  
  