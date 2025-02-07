import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const CoursesQuestions = () => {
    const [questions, setQuestions] = useState([]);


    const location = useLocation();
    const { courseName } = location.state || {}; // Get the passed data

    console.log(" courseName", courseName)


    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:4000/api/admin/questionsbycoursename",
                    { activecourse_name: courseName }, // Send data in request body
                    { headers: { "Content-Type": "application/json" } }
                );

                console.log("Questions data:", response.data);

                if (response.data && Array.isArray(response.data.data)) {
                    setQuestions(response.data.data); // Corrected to access response.data.data
                    console.log("Questions set successfully:", response.data.data);
                } else {
                    console.error("Invalid data format received:", response.data);
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-5 px-4 w-full h-full">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                    All Question Set
                </h2>

                {questions.length > 0 ? (
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 border">S.No</th>
                                <th className="py-3 px-4 border">Question</th>
                                <th className="py-3 px-4 border">Option A</th>
                                <th className="py-3 px-4 border">Option B</th>
                                <th className="py-3 px-4 border">Option C</th>
                                <th className="py-3 px-4 border">Option D</th>
                                <th className="py-3 px-4 border">Correct Answer</th>
                                <th className="py-3 px-4 border">Exam Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, index) => (  // Renamed from faq to question
                                <tr key={index} className="text-center border-t">
                                    <td className="py-3 px-4 border">{index + 1}</td>
                                    <td className="py-3 px-4 border text-left">{question.question || "N/A"}</td>  {/* Renamed faq to question */}
                                    <td className="py-3 px-4 border">{question.option_a || "N/A"}</td>
                                    <td className="py-3 px-4 border">{question.option_b || "N/A"}</td>
                                    <td className="py-3 px-4 border">{question.option_c || "N/A"}</td>
                                    <td className="py-3 px-4 border">{question.option_d || "N/A"}</td>
                                    <td className="py-3 px-4 border">{question.correct_answer || "N/A"}</td>
                                    <td className="py-3 px-4 border">{question.level || "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500">No questions available</p>
                )}
            </div>
        </div>
    );
};

export default CoursesQuestions;