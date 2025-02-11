import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Loginform.css';

const Loginform = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        interestedFor: '',
        email: '',
        enquiry: ''
    });

    const [emailError, setEmailError] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'email') {
            validateEmail(value);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailError) {
            console.log('Form submitted:', formData);
            // Here you would typically send the data to a server
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100">
            {/* First Card */}
            {/*<div className="bg-white p-4  flex-1">*/}
            {/*    <img src={`/src/assets/join_team_img.png`} alt="Join Pathlogic Technologics" className="join-team-img"/>*/}
            {/*    <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Join Pathlogic Technologics?</h2>*/}
            {/*    <p className="mb-4">*/}
            {/*        Aspirants, who are willing to shape their career as an expert in Embedded Systems and Full Stack*/}
            {/*        Development can come to our institute and get the benefits of our training courses. We provide best*/}
            {/*        in-class training courses that would reform your concept regarding the subject matter.*/}
            {/*    </p>*/}
            {/*    <Link to="/quickenquiry" className="w-full">*/}
            {/*        <button*/}
            {/*            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600">*/}
            {/*            Apply Now*/}
            {/*        </button>*/}
            {/*    </Link>*/}

            {/*</div>*/}
            <div className="join-team-card">
                <img src={`/src/assets/join_team_img.png`} alt="Join Pathlogic Technologics" className="join-team-img"/>
                <h2 className="why-join-heading">Why Join Pathlogics Technologies?</h2>

                <div className="why-join-sub-heading">
                    <p className="mb-2">At Pathlogics, we are dedicated to fostering innovation, growth, and
                        collaboration. Here’s why you should join our team:</p>
                </div>

                <div className="why-join-content-list">
                    <div className="why-join-content-list-item">
                        <p>Innovative Environment: Creativity and innovation are at the heart
                            of our work.</p>
                    </div>

                    <div className="why-join-content-list-item">
                        <p>Career Growth: We offer continuous learning and mentorship
                            programs.</p>
                    </div>

                    <div className="why-join-content-list-item">
                        <p>Work-Life Balance: Flexible hours and remote work options for a
                            balanced lifestyle.</p>
                    </div>
                    <div className="why-join-content-list-item">
                        <p>Competitive Compensation: Attractive pay and benefits for all our
                            employees.</p>
                    </div>
                </div>

                <Link to="/quickenquiry" className="flex w-full mt-4 md:mt-2 lg:mt-8">
                    <span
                        className="w-full bg-orange-500 text-white text-center font-semibold py-2 rounded-md hover:bg-orange-600">
                        Apply Now
                    </span>
                </Link>
            </div>


            {/* Second Card */}
            <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <div className="flex items-center mb-4">
                    <div className="bg-orange-500 p-2 rounded-full mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold">Quick Enquiry</h2>
                </div>
                <p className="mb-4">Know more about courses & placements</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="interestedFor"
                        placeholder="Interested For"
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                        onChange={handleInputChange}
                        required
                    />
                    {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
                    <textarea
                        name="enquiry"
                        placeholder="Enquiry"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <button type="submit"
                            className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                        Submit
                    </button>
                </form>
            </div>

            {/* Third Card */}
            {/* <div className="bg-white p-4 rounded-lg shadow-md flex-1">
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <h2 className="text-2xl font-bold">Additional Downloads</h2>
        </div>
        <ul className="space-y-2">
          <li><a href="#" className="text-orange-500 hover:underline">Admission Form for Embedded Systems</a></li>
          <li><a href="#" className="text-orange-500 hover:underline">Embedded System Brochure</a></li>
          <li><a href="#" className="text-orange-500 hover:underline">Embedded System Sample Paper</a></li>
          <li><a href="#" className="text-orange-500 hover:underline">Full Stack Development Brochure</a></li>
          <li><a href="#" className="text-orange-500 hover:underline">Full Stack Development Sample Paper</a></li>
        </ul>
      </div> */}
        </div>
    );
};

export default Loginform;