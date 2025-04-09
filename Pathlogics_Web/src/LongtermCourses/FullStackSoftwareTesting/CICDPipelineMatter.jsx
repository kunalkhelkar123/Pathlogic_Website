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
        {
            title: "Scalability",
            desc: "With CI/CD, it’s easier to scale development efforts across teams. As the codebase grows, the pipeline can handle more changes and tests, supporting faster and more reliable growth.",
        },
    ];

    return (
        <div className="p-6 bg-white    max-w-full py-10">
            <h3 className="text-2xl text-center sm:mt-0 -mt-10 font-extrabold sm:text-2xl ">
                Why CI/CD Pipeline Matters: Speeding Up Development and Deployment
            </h3>
            <div className="px-44">

                <p className="text-gray-600 mb-4">
                    The CI/CD pipeline is essential for modern software development because it automates and streamlines the process of integrating code changes and delivering them to production. Here’s why it matters.
                </p>

                {!expanded && (
                    <button
                        onClick={() => setExpanded(true)}
                        className="text-sm text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700 transition"
                    >
                        View more…
                    </button>
                )}

                {expanded && (
                    <div className="mt-6 space-y-4">
                        {benefits.map((item, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-black text-lg">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )}


            </div>
        </div>
    );
}
