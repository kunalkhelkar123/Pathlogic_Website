// // ##########################################################

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const TestQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [correctAnswerVisible, setCorrectAnswerVisible] = useState(false);
//   const [faqData, setFaqData] = useState([    
//         {
//           question: "What is an Embedded System?",
//           options: [
//             "A system that runs on a computer",
//             "A system designed to perform specific tasks with real-time constraints",
//             "A system that only works in industrial applications",
//             "A system that can be used for any general purpose",
//           ],
//           correctOption: "Option B",
//         },
//         {
//           question: "Which of the following is a common microcontroller used in embedded systems?",
//           options: [
//             "Intel Core i7",
//             "ARM Cortex-M",
//             "AMD Ryzen 5",
//             "Qualcomm Snapdragon",
//           ],
//           correctOption: "Option B",
//         },
//         {
//           question: "What is the primary function of an Embedded Operating System?",
//           options: [
//             "Manage large-scale server applications",
//             "Control and manage hardware resources for a specific task",
//             "Run multiple applications simultaneously on a desktop",
//             "Control the server environment in cloud computing",
//           ],
//           correctOption: "Option B",
//         },
//         {
//           question: "Which of the following is NOT an example of an embedded system?",
//           options: [
//             "Smartphone",
//             "Washing machine",
//             "Smart thermostat",
//             "Laptop",
//           ],
//           correctOption: "Option D",
//         },
//         {
//           question: "Which programming language is commonly used for embedded system development?",
//           options: [
//             "Python",
//             "C",
//             "JavaScript",
//             "PHP",
//           ],
//           correctOption: "Option B",
//         },
//         {
//           question: "What is the main benefit of using real-time operating systems (RTOS) in embedded systems?",
//           options: [
//             "It provides faster processing speed",
//             "It ensures that tasks are completed within strict time limits",
//             "It simplifies the development process",
//             "It reduces power consumption drastically",
//           ],
//           correctOption: "Option B",
//         },
//         {
//           question: "What is the purpose of an embedded system's watchdog timer?",
//           options: [
//             "Monitor system performance",
//             "Provide backup power during failure",
//             "Reset the system if it becomes unresponsive",
//             "Increase system clock speed",
//           ],
//           correctOption: "Option C",
//         },
//         {
//           question: "Which of the following is a key characteristic of an embedded system?",
//           options: [
//             "It can handle multiple tasks simultaneously",
//             "It is often designed for low power consumption",
//             "It requires a high-end graphics card",
//             "It is designed for general-purpose use",
//           ],
//           correctOption: "Option B",
//         },
//         {
//           question: "Which tool is commonly used to design and simulate embedded systems?",
//           options: [
//             "AutoCAD",
//             "Proteus",
//             "Photoshop",
//             "Blender",
//           ],
//           correctOption: "Option B",
//         },
//       ]);

//   const [newQuestion, setNewQuestion] = useState({
//     question: "",
//     options: ["", "", "", ""],
//     correctOption: "Option A",
//   });

//   const [isAddQuestionVisible, setIsAddQuestionVisible] = useState(false);

//   const toggleQuestion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//     setSelectedOption(null); // Reset the selected option on question toggle
//     setCorrectAnswerVisible(false); // Hide correct answer when a new question is opened
//   };

//   const handleSelectOption = (index, option) => {
//     setSelectedOption(option);
//     setCorrectAnswerVisible(false); // Hide the correct answer before submitting
//   };

//   const handleSubmitAnswer = () => {
//     setCorrectAnswerVisible(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewQuestion((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleOptionChange = (e, index) => {
//     const { value } = e.target;
//     const newOptions = [...newQuestion.options];
//     newOptions[index] = value;
//     setNewQuestion((prev) => ({
//       ...prev,
//       options: newOptions,
//     }));
//   };

//   const handleAddNewQuestion = () => {
//     setFaqData([
//       ...faqData,
//       {
//         question: newQuestion.question,
//         options: newQuestion.options,
//         correctOption: newQuestion.correctOption,
//       },
//     ]);
//     setNewQuestion({
//       question: "",
//       options: ["", "", "", ""],
//       correctOption: "Option A",
//     });
//     setIsAddQuestionVisible(false); // Hide the form after adding the question
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//           Test Your Embedded Systems Knowledge
//         </h2>

//         <div className="space-y-4">
//           {faqData.map((faq, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
//               <button
//                 onClick={() => toggleQuestion(index)}
//                 className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
//                 aria-expanded={openIndex === index}
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 <ChevronDown
//                   className={`w-5 h-5 text-[#ff6b33] transition-transform ${
//                     openIndex === index ? "transform rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {openIndex === index && (
//                 <div className="px-6 py-4 text-gray-600 border-t">
//                   <div className="space-y-2 mb-4">
//                     {faq.options.map((option, idx) => (
//                       <div key={idx} className="flex items-center">
//                         <input
//                           type="radio"
//                           name={`question-${index}`}
//                           id={`option-${index}-${idx}`}
//                           className="mr-2"
//                           checked={selectedOption === `Option ${String.fromCharCode(65 + idx)}`}
//                           onChange={() => handleSelectOption(index, `Option ${String.fromCharCode(65 + idx)}`)}
//                         />
//                         <label htmlFor={`option-${index}-${idx}`} className="text-gray-800">
//                           {`Option ${String.fromCharCode(65 + idx)}: ${option}`}
//                         </label>
//                       </div>
//                     ))}
//                   </div>

//                   {selectedOption && !correctAnswerVisible && (
//                     <div className="mt-4">
//                       <button
//                         onClick={handleSubmitAnswer}
//                         className="bg-[#ff6b33] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors"
//                       >
//                         Submit Answer
//                       </button>
//                     </div>
//                   )}

//                   {correctAnswerVisible && (
//                     <p className="mt-4 text-gray-800 font-medium">
//                       {selectedOption === faq.correctOption
//                         ? "Correct! 🎉"
//                         : `Incorrect. The correct answer is ${faq.correctOption}`}
//                     </p>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Button to toggle the "Add New Question" Form */}
//         <div className="text-center mt-8">
//           <button
//             onClick={() => setIsAddQuestionVisible(!isAddQuestionVisible)}
//             className="bg-[#ff6b33] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors"
//           >
//             {isAddQuestionVisible ? "Cancel" : "Add New Question"}
//           </button>
//         </div>

//         {/* Add New Question Form */}
//         {isAddQuestionVisible && (
//           <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
//             <h3 className="text-2xl font-bold mb-4 text-gray-900">Add New Question</h3>

//             <div className="space-y-4">
//               <div>
//                 <label className="block text-gray-800 font-medium">Question</label>
//                 <input
//                   type="text"
//                   name="question"
//                   value={newQuestion.question}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                   placeholder="Enter your question"
//                 />
//               </div>

//               {newQuestion.options.map((option, index) => (
//                 <div key={index}>
//                   <label className="block text-gray-800 font-medium">{`Option ${String.fromCharCode(65 + index)}`}</label>
//                   <input
//                     type="text"
//                     value={option}
//                     onChange={(e) => handleOptionChange(e, index)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                     placeholder={`Option ${String.fromCharCode(65 + index)} text`}
//                   />
//                 </div>
//               ))}

//               <div>
//                 <label className="block text-gray-800 font-medium">Correct Option</label>
//                 <select
//                   name="correctOption"
//                   value={newQuestion.correctOption}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 >
//                   <option value="Option A">Option A</option>
//                   <option value="Option B">Option B</option>
//                   <option value="Option C">Option C</option>
//                   <option value="Option D">Option D</option>
//                 </select>
//               </div>

//               <div className="text-center">
//                 <button
//                   onClick={handleAddNewQuestion}
//                   className="bg-[#ff6b33] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors"
//                 >
//                   Add Question
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestQ;


import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Test = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswerVisible, setCorrectAnswerVisible] = useState(false);
  const [faqData, setFaqData] = useState([    
    {
      question: "What is an Embedded System?",
      options: [
        "A system that runs on a computer",
        "A system designed to perform specific tasks with real-time constraints",
        "A system that only works in industrial applications",
        "A system that can be used for any general purpose",
      ],
      correctOption: "Option B",
    },
    {
      question: "Which of the following is a common microcontroller used in embedded systems?",
      options: [
        "Intel Core i7",
        "ARM Cortex-M",
        "AMD Ryzen 5",
        "Qualcomm Snapdragon",
      ],
      correctOption: "Option B",
    },
    {
      question: "What is the primary function of an Embedded Operating System?",
      options: [
        "Manage large-scale server applications",
        "Control and manage hardware resources for a specific task",
        "Run multiple applications simultaneously on a desktop",
        "Control the server environment in cloud computing",
      ],
      correctOption: "Option B",
    },
    {
      question: "Which of the following is NOT an example of an embedded system?",
      options: [
        "Smartphone",
        "Washing machine",
        "Smart thermostat",
        "Laptop",
      ],
      correctOption: "Option D",
    },
    {
      question: "Which programming language is commonly used for embedded system development?",
      options: [
        "Python",
        "C",
        "JavaScript",
        "PHP",
      ],
      correctOption: "Option B",
    },
    {
      question: "What is the main benefit of using real-time operating systems (RTOS) in embedded systems?",
      options: [
        "It provides faster processing speed",
        "It ensures that tasks are completed within strict time limits",
        "It simplifies the development process",
        "It reduces power consumption drastically",
      ],
      correctOption: "Option B",
    },
    {
      question: "What is the purpose of an embedded system's watchdog timer?",
      options: [
        "Monitor system performance",
        "Provide backup power during failure",
        "Reset the system if it becomes unresponsive",
        "Increase system clock speed",
      ],
      correctOption: "Option C",
    },
    {
      question: "Which of the following is a key characteristic of an embedded system?",
      options: [
        "It can handle multiple tasks simultaneously",
        "It is often designed for low power consumption",
        "It requires a high-end graphics card",
        "It is designed for general-purpose use",
      ],
      correctOption: "Option B",
    },
    {
      question: "Which tool is commonly used to design and simulate embedded systems?",
      options: [
        "AutoCAD",
        "Proteus",
        "Photoshop",
        "Blender",
      ],
      correctOption: "Option B",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    correctOption: "Option A",
  });

  const [isAddQuestionVisible, setIsAddQuestionVisible] = useState(false);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedOption(null); // Reset the selected option on question toggle
    setCorrectAnswerVisible(false); // Hide correct answer when a new question is opened
  };

  const handleSelectOption = (index, option) => {
    setSelectedOption(option);
    setCorrectAnswerVisible(false); // Hide the correct answer before submitting
  };

  const handleSubmitAnswer = () => {
    setCorrectAnswerVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (e, index) => {
    const { value } = e.target;
    const newOptions = [...newQuestion.options];
    newOptions[index] = value;
    setNewQuestion((prev) => ({
      ...prev,
      options: newOptions,
    }));
  };

  const handleAddNewQuestion = () => {
    setFaqData([
      ...faqData,
      {
        question: newQuestion.question,
        options: newQuestion.options,
        correctOption: newQuestion.correctOption,
      },
    ]);
    setNewQuestion({
      question: "",
      options: ["", "", "", ""],
      correctOption: "Option A",
    });
    setIsAddQuestionVisible(false); // Hide the form after adding the question
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Button displaying the number of questions */}
        <div className="text-center mb-4">
          <button className="bg-[#ff6b33] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors">
            Number of Questions: {faqData.length}
          </button>
        </div>

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Test Your Embedded Systems Knowledge
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#ff6b33] transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t">
                  <div className="space-y-2 mb-4">
                    {faq.options.map((option, idx) => (
                      <div key={idx} className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          id={`option-${index}-${idx}`}
                          className="mr-2"
                          checked={selectedOption === `Option ${String.fromCharCode(65 + idx)}`}
                          onChange={() => handleSelectOption(index, `Option ${String.fromCharCode(65 + idx)}`)}
                        />
                        <label htmlFor={`option-${index}-${idx}`} className="text-gray-800">
                          {`Option ${String.fromCharCode(65 + idx)}: ${option}`}
                        </label>
                      </div>
                    ))}
                  </div>

                  {selectedOption && !correctAnswerVisible && (
                    <div className="mt-4">
                      <button
                        onClick={handleSubmitAnswer}
                        className="bg-[#ff6b33] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors"
                      >
                        Submit Answer
                      </button>
                    </div>
                  )}

                  {correctAnswerVisible && (
                    <p className="mt-4 text-gray-800 font-medium">
                      {selectedOption === faq.correctOption
                        ? "Correct! 🎉"
                        : `Incorrect. The correct answer is ${faq.correctOption}`}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button to toggle the "Add New Question" Form */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAddQuestionVisible(!isAddQuestionVisible)}
            className="bg-[#ff6b33] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors"
          >
            {isAddQuestionVisible ? "Cancel" : "Add New Question"}
          </button>
        </div>

        {/* Add New Question Form */}
        {isAddQuestionVisible && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Add New Question</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-800 font-medium">Question</label>
                <input
                  type="text"
                  name="question"
                  value={newQuestion.question}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your question"
                />
              </div>

              {newQuestion.options.map((option, index) => (
                <div key={index}>
                  <label className="block text-gray-800 font-medium">{`Option ${String.fromCharCode(65 + index)}`}</label>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(e, index)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder={`Option ${String.fromCharCode(65 + index)} text`}
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-800 font-medium">Correct Option</label>
                <select
                  name="correctOption"
                  value={newQuestion.correctOption}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Option A">Option A</option>
                  <option value="Option B">Option B</option>
                  <option value="Option C">Option C</option>
                  <option value="Option D">Option D</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  onClick={handleAddNewQuestion}
                  className="bg-[#ff6b33] text-white px-6 py-2 rounded-md hover:bg-[#ff5722] transition-colors"
                >
                  Add Question
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
