import technologies from "../data/technologies.js";
import {Link, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import FaQs from "./FAQs.jsx";
// import {Helmet} from "react-helmet-async";
//import WorkshopHeader from "./WorkshopHeader.jsx";

const WorkshopTechnologyPage = () => {
    const {techUri} = useParams();

    // Find the technology data by techUri
    const technology = technologies.find(tech => tech.techUri === techUri);

    const {title, backgroundImage, flowChartImage, description, largeDescription, mode, details, duration, faq} = technology;

    const {preRequisites, courseContent, softwareRequirements, hardwareRequirements,} = details;

    if (!technology) {
        // TODO: Return Component Not Found.
        return <div>Technology not found</div>;
    }

    // Function to render the content with indentation
    const renderIndentedList = (items) => {
        return items.map((item, index) => {
            if (item.startsWith("\n\t")) {
                // Apply inline style for indenting sub-items
                return (
                    <motion.li
                        key={`content-${index}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        style={{marginLeft: '2rem', opacity: 0.8, fontWeight: 400, }}
                    >
                        {item.trim()}
                    </motion.li>
                );
            }
            return (
                <motion.li
                    key={`content-${index}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    {item}
                </motion.li>
            );
        });
    };

    return (
        <motion.div
            id={`workshop-${techUri}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="square-bg-pattern"
        >
            {/*/!* Page Meta Tags *!/*/}
            {/*<Helmet>*/}
            {/*    <title>{title} | Pathlogics</title>*/}
            {/*    <meta name="description" content={description} />*/}

            {/*    /!* Open Graph Meta Tags *!/*/}
            {/*    <meta property="og:title" content={title} />*/}
            {/*    <meta property="og:description" content={description} />*/}
            {/*    <meta property="og:image" content={backgroundImage} />*/}
            {/*    <meta property="og:url" content={`https://www.pathlogics.in/${techUri}`} />*/}
            {/*    <meta property="og:type" content="website" />*/}
            {/*</Helmet>*/}

            {/* Header Section with route navigation */}
            {/*<WorkshopHeader techUri={techUri} title={title} />*/}

            {/* workshop page hero image. */}
            {backgroundImage && <motion.div layout className="w-full">
                <motion.img layout="position" src={backgroundImage} alt={title} className="workshop-hero-image opacity-100 hover:opacity-90 transform transition duration-500 " loading={'lazy'}/>
            </motion.div>}

            {/* workshop title heading */}
            <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:mt-[-80px] md:mt-[-120px] relative rounded-t-2xl bg-white z-100">
                <h1 className="workshop-page-title leading-normal">{title}</h1>

                {/* workshop description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-tl from-gray-50 to-gray-200 p-8 shadow-md"
                >
                    {largeDescription && largeDescription.split("\n\n").map((paragraph, index) => (
                        <motion.p
                            key={`para-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1.01 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-lg font-semibold  text-gray-700 p-2 text-justify"
                        >
                            {paragraph}
                        </motion.p>
                    ))}

                    <div className='w-full !min-h-5 mt-8 mb-8 mx-auto flex flex-row justify-center items-center relative'>
                        <div className='flex flex-row-reverse '>
                            {/*<span className="relative flex size-6 transform -translate-x-[50%] -translate-y-[100%]">*/}
                            {/*    <span className="absolute inline-flex group-hover:hidden h-full w-full animate-ping rounded-full bg-orange-200 opacity-75"></span>*/}
                            {/*    <span className="relative inline-flex group-hover:hidden size-6 rounded-full bg-orange-400"></span>*/}
                            {/*</span>*/}
                            {/*<motion.div*/}
                            {/*    whileHover={{ scale: 1.1 }}*/}
                            {/*    transition={{ type: "spring", stiffness: 300 }}*/}
                            {/*>*/}
                            {/*    <Link to='/quickenquiry' className='apply-now'>Apply Now</Link>*/}
                            {/*</motion.div>*/}
                            <motion.div
                                whileHover={{ scale: 1.4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link to="/quickenquiry" className="relative inline-flex items-center shadow-md justify-center px-6 p-4 font-bold bg-orange-500 rounded-lg text-white focus:outline-none group">
                                    <span className="absolute inline-flex group-hover:hidden h-full w-full animate-ping rounded-lg bg-orange-200 opacity-75"></span>
                                        Apply Now
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Flowchart Image */}
                {flowChartImage && <motion.div
                    key={technology.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "ease-in-out" }}
                    className="my-12 bg-white rounded-2xl shadow-lg py-6 overflow-hidden ">
                    <motion.img
                        src={flowChartImage}
                        alt={`Flowchart-${title}`}
                        className="mx-auto "
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        loading={'lazy'}
                        whileHover={{ scale: 1.1 }}
                    />
                </motion.div>}

                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/3 text-lg my-1 p-2.5 font-bold text-gray-900 bg-gray-300 rounded border-l-8 border-orange-500 capitalize"
                >
                    mode: <span className='text-orange-500 font-bold'>{mode}</span>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/4 mt-4 !mb-8 text-lg my-1 p-2.5 font-bold text-gray-900 bg-gray-300 rounded border-l-8 border-orange-500 capitalize"
                >
                    Duration: <span className='text-orange-500 font-bold'>{duration}</span>
                </motion.p>
            </div>

            {/* workshop details */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="workshop-details-wrapper blue-gradient"
            >
                {/* course pre requisites */}
                {preRequisites && preRequisites.length > 0 && <div className="list-content-wrapper">
                    <h1 className="workshop-session-heading">Course
                        Pre-Requisites</h1>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className='content-list'
                    >
                        {preRequisites.map((preRequisite, index) => (
                            <motion.li
                                key={`preRequisite-${index}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {preRequisite}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>}

                {/* course contents */}
                {courseContent && courseContent.length > 0 && <div className="list-content-wrapper">
                    <h1 className="workshop-session-heading">Course
                        Content</h1>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className='content-list'
                    >
                        {renderIndentedList(courseContent)}
                    </motion.ul>
                </div>}

                {/* course software Requirements */}
                {softwareRequirements && softwareRequirements.length > 0 && <div className="list-content-wrapper">
                    <h1 className="workshop-session-heading">Course
                        Software Requirements</h1>
                    <motion.ul
                        className='content-list'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {softwareRequirements.map((softwareRequirement, index) => (
                            <motion.li
                                key={`softwareRequirement-${index}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {softwareRequirement}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>}

                {/* course hardware Requirements */}
                {hardwareRequirements && hardwareRequirements.length > 0 && <div className="list-content-wrapper">
                    <h1 className="workshop-session-heading">Course
                        Hardware Requirements</h1>
                    <ul className='content-list'>
                        {hardwareRequirements.map((hardwareRequirement, index) => (
                            <motion.li
                                key={`hardwareRequirement-${index}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {hardwareRequirement}
                            </motion.li>
                        ))}
                    </ul>
                </div>}
            </motion.div>

            {/* Apply Now Session */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !py-16 flex flex-col justify-center items-center gap-4"
            >
                <h2 className='text-4xl font-bold text-center text-gray-700'>Ready to level up your skills?</h2>
                <p className='text-lg mb-8 text-gray-700 font-semibold'>Enroll Now and Unlock Your Potential in {title}</p>
                <motion.div
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="pb-4"
                >
                    <Link to='/quickenquiry' className='apply-now '>Apply Now</Link>
                </motion.div>
            </motion.div>

            {/* FAQ Session */}
            {faq && faq.length > 0 && <div className='mx-auto px-4 sm:px-6 lg:px-8 py-16 orange-pink-gradient'>
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h1 className="workshop-session-heading mb-16 text-white">Frequently Asked Questions</h1>
                    <FaQs faqs={faq}/>
                </motion.div>
            </div>}
        </motion.div>
    );
};

export default WorkshopTechnologyPage;