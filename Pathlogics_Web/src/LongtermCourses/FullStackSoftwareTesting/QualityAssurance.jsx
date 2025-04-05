import { FaUser, FaFileAlt, FaUserTie, FaEye, FaHourglassHalf, FaCogs } from "react-icons/fa";

const services = [
    { icon: <FaUser />, title: "Human-Driven Process", subtitle: "Session" },
    { icon: <FaFileAlt />, title: "Ideal for Exploratory Testing", subtitle: "Preparation" },
    { icon: <FaUserTie />, title: "Test Case Creation", subtitle: "Interview" },
    { icon: <FaEye />, title: "Usability Focus", subtitle: "Interview",   },
    { icon: <FaHourglassHalf />, title: "Time-Consuming but Effective", subtitle: "Interview",   },
    { icon: <FaCogs />, title: "Complement to Automation", subtitle: "Interview",   },
];

export default function InterviewSupportCards() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-3xl font-bold text-center  mb-6">
                Manual Testing: The Foundation of Software Quality Assurance
            </h1>

            <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed sm:px-20 mb-10">
                Manual testing is the process of manually checking software for defects without the use of automated tools. 
                It involves the tester actively executing test cases, interacting with the software, and identifying bugs or 
                issues based on the expected behavior of the application. This type of testing requires a deep understanding 
                of the software's requirements and a keen eye for detail. Manual testing is ideal for applications that require 
                human judgment or are in the early stages of development. It is often used for exploratory testing, where testers 
                explore the software to uncover unexpected issues that automated scripts may miss.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white border border-purple-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 ease-in-out flex flex-col items-center text-center"
                    >
                        <div className="bg-purple-100 text-purple-600 p-4 rounded-full text-2xl mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-800">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-500">{service.subtitle}</p>
                        {service.typo && (
                            <p className="text-xs text-red-500 mt-2">
                                * Typo corrected: "Calls" should be "Interview"
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
