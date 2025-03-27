import { FaFileAlt, FaMicrophone, FaBuilding } from "react-icons/fa";

const PlacementAssistance = () => {
    return (
      <div className="bg-white sm:p-8 mt-[-20px]  rounded-lg ">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-5">
          Placement Assistance You Can Trust
        </h2>
        <p className="text-lg text-gray-700  sm:px-60 px-2 text-center mb-6">
          We understand that securing a job after completing your course is a priority. 
          As one of the top <strong>IT training institutes</strong> in Pune with placement, we go the extra mile by offering:
        </p>
      {/* ////////////////////// */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    {
      icon: <FaFileAlt />,
      title: "Resume-Building",
      description: "Learn how to create a professional resume that stands out.",
      bgColor: "from-blue-200 to-blue-400",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaMicrophone />,
      title: "Mock Interviews",
      description: "Gain confidence with mock interviews conducted by industry experts.",
      bgColor: "from-purple-200 to-purple-400",
      iconColor: "text-purple-600",
    },
    {
      icon: <FaBuilding />,
      title: "Direct Recruitment",
      description: "Leverage our partnerships with top IT companies for seamless hiring.",
      bgColor: "from-green-200 to-green-400",
      iconColor: "text-green-600",
    },
  ].map((item, index) => (
    <div
      key={index}
      className={`flex flex-col items-center p-6 py-6 rounded-lg shadow-md transition-transform transform hover:scale-105 
      bg-gradient-to-br ${item.bgColor} hover:from-gray-200 hover:to-gray-400`}
    >
      <span
        className={`${item.iconColor} text-4xl py-6 transition-transform duration-300 hover:scale-125`}
      >
        {item.icon}
      </span>
      <h4 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h4>
      <p className="text-center text-gray-900">{item.description}</p>
    </div>
  ))}
</div>


      {/* ////////////////// */}

      </div>
    );
  };
  
  export default PlacementAssistance;
  