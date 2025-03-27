import { FaChalkboardTeacher, FaUserTie, FaLaptopCode, FaUsers, FaClipboardList, FaHandshake } from "react-icons/fa";

const FullStackHighlights = () => {
  const highlights = [
    {
      icon: <FaClipboardList className="text-white text-6xl" />,
      title: "Full Stack Developer Course with Certification",
      bgColor: "bg-blue-500",
      description:" Learn from industry experts with real project experience."
    },
    {
      icon: <FaChalkboardTeacher className="text-white text-6xl" />,
      title: "Internship with Stipend ",
      bgColor: "bg-red-500",
      description:" Gain skills and earn a stipend with our practical internship program!."
      
    },
    {
      icon: <FaLaptopCode className="text-white text-6xl" />,
      title: "Flexible Learning Options",
      bgColor: "bg-green-500",
      description:" We offer both offline classes or online training formats to suit your schedule."
    },
    {
      icon: <FaUsers className="text-white text-6xl" />,
      title: "Complete Placement Assistance ",
      bgColor: "bg-purple-500",
      description:"Our placement team works with you to secure interviews and get your first job."
    },
    {
      icon: <FaUserTie className="text-white text-6xl" />,
      title: "Resume Building ",
      bgColor: "bg-blue-400",
      description:"Create a professional resume that highlights your skills, experience, and projects."
    },
    {
      icon: <FaHandshake className="text-white text-6xl" />,
      title: "Soft Skill Development ",
      bgColor: "bg-yellow-500",
      description:"Improve your communication and professional skills to excel in corporate environments."
    },
  ];

  return (
    <div className="container mx-auto sm:px-6 px-2 py-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Key Highlights of Full-Stack Developer Program
      </h2>
      <p className="text-center text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
      In order to satisfy the changing demands of the industry, our <strong>Full Stack Developer 
      Course in Pune</strong> makes sure that you have practical experience with the newest technologies. 
      Our curriculum offers a perfect path to success, no matter whether you are a recent graduate 
      or an experienced professional aiming to improve your abilities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center px-6 py-4 hover:scale-105 transform transition duration-300 rounded-lg shadow-md text-white ${item.bgColor}`}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold py-2 text-center">{item.title}</h3>
            <p className="text-sm  text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStackHighlights;
