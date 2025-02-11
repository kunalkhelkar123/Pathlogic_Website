import {FaArrowRight} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import {useState} from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        phone: "",
        college: "",
        year: "",
        course: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData({...formData, [id]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = "service_db5sgob";
        const templateId = "template_326m16e";
        const publicKey = "k05tTTCLechKDk94r";

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    city: formData.city,
                    phone: formData.phone,
                    college: formData.college,
                    year: formData.year,
                    course: formData.course,
                    message: formData.message,
                },
                publicKey
            );
            setIsSent(true);
            setFormData({
                name: "",
                email: "",
                city: "",
                phone: "",
                college: "",
                year: "",
                course: "",
                message: "",
            });
        } catch (err) {
            console.error("Failed to send email:", err);
            setError("Failed to send your message. Please try again later.");
        }
    };

    return (
        <div className="max-w-screen-lg w-full h-full m-0 p-0 grid grid-cols-1 sm:space-x-6 lg:grid-cols-2 items-start justify-evenly mx-auto px-2">
            {/* Google Map */}
            <div className="md:mt-8 relative w-full h-[348px] lg:h-[60vh] lg:w-full !rounded-md sm:mb-4">
                <p className={`text-2xl my-6 text-center font-semibold mb-4 lg:mb-16 capitalize`}>Meet us on workplace</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.5638323165733!2d73.796702684464!3d18.555285671181206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0d96f14a2b%3A0xcdee7da371757f6a!2sPathlogics%20Technologies!5e1!3m2!1sen!2sin!4v1737109013326!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="w-full h-full rounded-md mb-4"
                ></iframe>
            </div>
            {/* Contact Form */}
            <div className="flex flex-col bg-white shadow-lg m-4 px-8 py-10 rounded-md ">
                <h2 className=" text-2xl font-semibold text-gray-800 text-center w-full mt-6 lg:mt-0 capitalize">
                    Send a message
                </h2>
                {isSent && (
                    <div className="w-full mb-4 text-green-600 font-medium">
                        Your message has been sent successfully!
                    </div>
                )}
                {error && (
                    <div className="w-full mb-4 text-red-600 font-medium">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 !gird grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                    {/* Field 1 */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    {/* Field 2 */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    {/* Field 3 */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    {/* Field 4 */}
                    <div>
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    {/* Field 5 */}
                    <div>
                        <label
                            htmlFor="college"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Current College Name
                        </label>
                        <input
                            type="text"
                            id="college"
                            value={formData.college}
                            onChange={handleChange}
                            placeholder="Current College Name"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    {/* Field 6 */}
                    <div>
                        <label
                            htmlFor="year"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Current Year
                        </label>
                        <input
                            type="text"
                            id="year"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="Current Year"
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    {/* Field 7 */}
                    <div>
                        <label
                            htmlFor="course"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Interested Course
                        </label>
                        <select
                            id="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select a course</option>
                            <option value="Full Stack Development">Full Stack Development</option>
                            <option value="MERN Stack">MERN Stack</option>
                            <option value="Java Development">Java Development</option>
                            <option value="Python Data Science">Python Data Science</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Software Testing">Software Testing</option>
                        </select>
                    </div>
                    {/* Field 8 */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message to HR Team
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            required
                            className="mt-1 w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <div className="col-span-2 flex justify-end">
                        <button
                            type="submit"
                            className="bg-orange-600 text-white py-4 px-6 text-base rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Send Message <FaArrowRight className="inline-block ml-1"/>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ContactForm;
