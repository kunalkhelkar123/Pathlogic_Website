import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseTest = () => {
    const [questions, setQuestions] = useState([]); // Holds fetched questions
    const [answers, setAnswers] = useState({}); // Holds selected answers
    const [submitted, setSubmitted] = useState(false); // Tracks submission status
    const [score, setScore] = useState(0); // Holds the score
    const [activeCourse, setActiveCourse] = useState(""); // Holds the active course name

    // Fetch User Data from Session Storage
    useEffect(() => {
        const userdata = sessionStorage.getItem("userData");

        if (userdata) {
            try {
                const parsedData = JSON.parse(userdata);
                console.log("Active Course:", parsedData.user.activecourse_name);
                setActiveCourse(parsedData.user.activecourse_name);
            } catch (error) {
                console.error("Error parsing userdata:", error);
            }
        } else {
            console.log("No userdata found in sessionStorage.");
        }
    }, []);

    // Fetching questions based on activeCourse
    // useEffect(() => {
    //     if (!activeCourse) return; // Prevent API call if activeCourse is empty

    //     const fetchQuestions = async () => {
    //         try {
    //             console.log("Fetching questions for course:", activeCourse);

    //             const response = await axios.get("http://localhost:4000/api/admin/get-questions");

    //             if (response.data && Array.isArray(response.data.data)) {
    //                 setQuestions(response.data.data); // Update questions state
    //             } else {
    //                 console.error("Invalid data format received:", response.data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching questions:", error);
    //         }
    //     };

    //     fetchQuestions();
    // }, [activeCourse]); // Runs whenever `activeCourse` updates

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                console.log("isActivecourse01 ==>", activeCourse);

                const response = await axios.get("http://localhost:4000/api/admin/diplomadigitalmarketing");

                if (response.data && Array.isArray(response.data.data)) {
                    setQuestions(response.data.data);  // Update questions state with the fetched data
                } else {
                    console.error("Invalid data format received:", response.data.data);
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, []); // Runs only once on mount

    // Handle answer selection
    const handleAnswerChange = (questionId, option) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: option, // Store the selected option text
        }));
    };

    // Handle form submission and calculate score
    const handleSubmit = () => {
        let totalScore = 0;

        questions.forEach((question) => {
            const correctAnswerText = question["option_" + question.correct_answer.toLowerCase()];
            if (answers[question.id] === correctAnswerText) {
                totalScore += 1;
            }
        });

        setScore(totalScore);
        setSubmitted(true);
    };

    // Display results if the test is submitted
    if (submitted) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-200">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg">
                    <h2 className="text-2xl mb-4 font-semibold text-green-600">Test Submitted</h2>
                    <p className="text-lg text-gray-700">
                        Your answers have been submitted. Thank you for completing the test!
                    </p>
                    <p className="text-xl text-gray-800 mt-4">
                        You scored: {score}/{questions.length}
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                        {score === questions.length ? "Perfect Score! Well done!" : "Review your answers for improvement."}
                    </p>
                </div>
            </div>
        );
    }

    // Loading state if questions haven't been loaded yet
    if (questions.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading questions...</p>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
                <h2 className="text-3xl mb-6 text-center font-bold text-indigo-600">Course Test</h2>
                <p className="text-lg mb-4 text-center text-gray-600">Answer the following questions:</p>
                {questions.map((question) => (
                    <div key={question.id} className="mb-8 border-b-2 pb-4">
                        <p className="text-lg font-semibold text-gray-800 mb-3">
                            <span className="text-indigo-500">Q{question.id}: </span>
                            {question.question}
                        </p>
                        <div className="space-y-3">
                            {["A", "B", "C", "D"].map((optionKey) => {
                                const optionText = question["option_" + optionKey.toLowerCase()];
                                return (
                                    <label
                                        key={optionKey}
                                        className="flex items-center space-x-2 hover:bg-blue-50 rounded-md transition-all duration-300 ease-in-out"
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${question.id}`}
                                            value={optionText}
                                            checked={answers[question.id] === optionText}
                                            onChange={() => handleAnswerChange(question.id, optionText)}
                                            className="form-radio text-indigo-500 focus:ring-indigo-500"
                                        />
                                        <span className="text-gray-700">{optionText}</span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                ))}
                <div className="mt-8 text-center">
                    <button
                        onClick={handleSubmit}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
                    >
                        Submit Test
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseTest;
