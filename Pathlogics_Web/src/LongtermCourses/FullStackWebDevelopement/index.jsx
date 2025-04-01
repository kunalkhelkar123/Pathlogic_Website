import React from "react";
import { Helmet } from "react-helmet";

import RoadmapSteps from "./RoadmapSteps";
import Courses_offer from "./Courses_offer";
import PaidInternship from "./PaidInternship";
import CourseOverview from "./CourseOverview";
import Curriculum from "./Curriculum";
import Banner from "./Banner";
import Programveiw from "./Programveiw";
import Certification from "./Certification";
import FullStackTraining from "./FullStackTraining";
import Courses from "../More_Courses/Courses";
import Testimonials from "../Reviews/Testimonials";
import Companies from "../Companies/Companie";
import FAQ from "./FAQ";
import Talk_to_Our_Advisor from "./Talk_to_Our_Advisor";

function WebCourses() {
    return (
        <>
            <Helmet>
                <title> Master Full Stack Web Development in Pune | Pathlogics Course</title>
                <meta name="description" content="Learn Full Stack  Web Development in Pune with Pathlogics. Build dynamic websites and secure top industry skills through hands-on training. Enroll Now!" />
            </Helmet>

            <Banner />
            <FullStackTraining />
            <Programveiw />
            <RoadmapSteps />
            <Courses_offer />
            <PaidInternship />
            <CourseOverview />
            <Curriculum />
            <Certification />
            <Courses />
            <Testimonials />
            <Companies />
            <FAQ />
            <Talk_to_Our_Advisor />
        </>
    );
}

export default WebCourses;
