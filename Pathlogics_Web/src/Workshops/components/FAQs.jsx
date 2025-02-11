import { useState } from "react";
import {motion} from "framer-motion"

/**
 * A single FAQ item component.
 *
 * @param {object} props - Component props
 * @param {string} props.question - The FAQ question
 * @param {string} props.answer - The FAQ answer
 * @param {boolean} props.isOpen - Whether the FAQ item is currently open or closed
 * @param {() => void} props.onToggle - The function to call when the FAQ item is toggled open or closed
 * @param {number} props.animationDelay - The delay to apply to the animation of this FAQ item
 * @returns A JSX element representing the FAQ item
 */
const FaqItem = ({ question, answer, isOpen, onToggle, animationDelay }) => {
    return (
        <motion.div
            // Initial animation state
            initial={{ opacity: 0, y: 20 }}
            // Animate the FAQ item into view
            animate={{ opacity: 1, y: 0, scale: isOpen && onToggle ? 1.02 : 1 }}
            // Apply a delay to the animation so that the FAQ items don't all animate at the same time
            transition={{ duration: 0.5, delay: animationDelay, type: "spring", stiffness: 300, damping: 20  }}
            className="mb-4"
            whileHover={{ scale: 1.04 }}
        >
            <button
                className={
                    // If the FAQ item is open, add styles to make it look like it's been opened
                    isOpen && onToggle
                        ? `w-full rounded-lg rounded-b-none !bg-gray-100  border-b-0 shadow-md px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-all duration-200`
                        : `w-full bg-white rounded-lg shadow-md px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-all duration-200`
                }
                onClick={onToggle}
            >
                <h3
                    className={
                        // If the FAQ item is open, add styles to make the question text orange
                        isOpen && onToggle
                            ? `font-bold text-orange-500 transform transition-all duration-300 `
                            : `font-bold transform transition-all duration-300 text-gray-800`
                    }
                >
                    {question}
                </h3>
                <svg
                    className={
                        // If the FAQ item is open, add styles to make the icon orange
                        isOpen
                            ? `w-6 h-6 text-orange-500 transform transition-transform duration-300 rotate-180`
                            : `w-6 h-6 text-orange-500 transform transition-transform duration-300`
                    }
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <motion.div
                // Initial animation state
                initial={{ opacity: 0, y: 20 }}
                // Animate the FAQ answer into view
                animate={{ opacity: 1, y: 0 }}
                // Apply a delay to the animation so that the FAQ items don't all animate at the same time
                transition={{ duration: 0.5, delay: animationDelay }}
                className={
                    // If the FAQ item is open, make the answer visible
                    isOpen
                        ? `overflow-hidden transition-all duration-300 ease-in-out max-h-[500px] opacity-100`
                        : `overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0`
                }
            >
                <div className="bg-white px-6 py-4 rounded-b-lg shadow-md mt-0">
                    <p>{answer}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

/**
 * FaQs component that displays a list of FAQs and allows users to toggle individual sections,
 * as well as show/hide all FAQs.
 *
 * @param {object} props Component props
 * @param {array} props.faqs List of FAQs to display. Each FAQ should have a `question` and `answer` property.
 *
 * @returns {ReactElement} FaQs component
 */
const FaQs = ({ faqs }) => {
    const [openSection, setOpenSection] = useState(null);
    const [showAll, setShowAll] = useState(false);  // To toggle between showing 8 FAQs and all FAQs

    // Limit the number of FAQs displayed
    const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);  // Show all if showAll is true, else show first 8

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // className="space-y-2"
        >
            {visibleFaqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openSection === index}
                    onToggle={() => setOpenSection(openSection === index ? null : index)}
                    animationDelay={index * 0.1}
                />
            ))}

            {/* "Show More" or "Show Less" button */}
            <motion.div
                className="text-center mt-6 transition-all duration-500 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-white font-semibold py-2 px-4 hover:text-orange-500 rounded-lg hover:bg-orange-100 transition-all duration-100"
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </motion.div>
        </motion.div>
    );
};

export default FaQs;
