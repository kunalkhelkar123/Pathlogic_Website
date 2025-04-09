import { FaUser, FaFileAlt, FaUserTie, FaEye, FaHourglassHalf, FaCogs } from "react-icons/fa";

const services = [
    { icon: <FaUser />, title: "Better Usability Testing", subtitle: "Session" },
    { icon: <FaFileAlt />, title: "Cost-Effective for Small Projects", subtitle: "Preparation" },
    { icon: <FaUserTie />, title: "Early Bug Detection", subtitle: "Interview" },
    { icon: <FaEye />, title: "Flexible Testing Approach", subtitle: "Interview", },
    // { icon: <FaHourglassHalf />, title: "Time-Consuming but Effective", subtitle: "Interview", },
    // { icon: <FaCogs />, title: "Complement to Automation", subtitle: "Interview", },
];

export default function InterviewSupportCards() {
    return (
        <div className="max-w-6xl mx-auto px-4  mb-10">
            <h1 className="text-3xl md:text-3xl font-bold text-center  mb-6">
                What is Manual Testing? A Complete Guide
            </h1>

            <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed sm:px-20 mb-10">
                Manual testing is a <strong>process of manually executing test cases</strong> on a software application to
                identify defects, errors, or inconsistencies. It requires <strong>human intervention</strong>, making it
                essential for detecting usability and functionality issues that automation tools might
                overlook.
                Manual testing is the <strong>foundation of software testing</strong>, ensuring that applications function
                as intended before being released. It involves the step-by-step execution of test cases
                without using automation tools, helping testers identify bugs, defects, or deviations from
                expected behavior
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
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
                        {/* <p className="text-sm text-gray-500">{service.subtitle}</p> */}
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
