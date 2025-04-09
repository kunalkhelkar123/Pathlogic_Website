import { useState } from "react";

export default function CiCdOverview() {
  const [expanded, setExpanded] = useState(false);

  const benefits = [
    {
      title: "Faster Software Delivery",
      desc: "CI/CD automates testing and deployment, significantly reducing the time it takes to release new features or bug fixes. This means faster delivery of updates to users, keeping the software fresh and competitive.",
    },
    {
      title: "Improved Code Quality",
      desc: "By integrating code changes frequently and running automated tests, CI/CD helps detect issues early. This leads to fewer bugs in production and ensures higher quality code.",
    },
    {
      title: "Increased Efficiency",
      desc: "Automation reduces manual work, allowing developers to focus more on writing new features and less on repetitive tasks like manual testing or deployments. This boosts overall productivity.",
    },
    {
      title: "Seamless Collaboration",
      desc: "CI/CD enables smooth collaboration among development, testing, and operations teams. It ensures that all team members work with the latest code and reduces conflicts, making collaboration more effective.",
    },
    {
      title: "Continuous Feedback",
      desc: "The pipeline provides real-time feedback on code quality, test results, and deployment status. This helps developers identify problems early and address them before they become bigger issues.",
    },
    {
      title: "Consistent and Reliable Releases",
      desc: "CI/CD pipelines ensure that the same set of steps is followed every time code is deployed. This consistency leads to more predictable releases, reducing the chances of errors during deployment.",
    },
    // {
    //   title: "Scalability",
    //   desc: "With CI/CD, it’s easier to scale development efforts across teams. As the codebase grows, the pipeline can handle more changes and tests, supporting faster and more reliable growth.",
    // },
  ];

  return (
    <div className="px-4 py-10 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6">
          Why CI/CD Pipeline Matters:
          <br className="hidden sm:block" />
          <span className="text-indigo-600"> Speeding Up Development and Deployment</span>
        </h3>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8 text-base sm:text-lg">
          The CI/CD pipeline is essential for modern software development because it automates and streamlines the process of integrating code changes and delivering them to production. Here’s why it matters.
        </p>

        {!expanded && (
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(true)}
              className="text-sm sm:text-base text-white bg-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-md"
            >
              View more…
            </button>
          </div>
        )}

        {expanded && (
          <>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-black0 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-black text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={() => setExpanded(false)}
                className="text-sm sm:text-base text-black border border-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-50 transition-all duration-300 shadow-sm"
              >
                Hide
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
