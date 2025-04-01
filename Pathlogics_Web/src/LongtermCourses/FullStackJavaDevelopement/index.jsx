import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

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
import ProgramWorkRoadmap from "./ProgramWorkRoadmap"


function WebCourses() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Java Full Stack Developer Course in Pune - Pathlogics</title>
                <meta name="description" content="Join Pathlogics' Java Full Stack Developer course in Pune. Master Java, front-end, and back-end development. for Expert training Enroll now!" />
            </Helmet>
            
            <Banner />
            <FullStackTraining />
            <Programveiw />
            <RoadmapSteps />
            <Courses_offer />
            <PaidInternship />
            <ProgramWorkRoadmap />
            <CourseOverview />
            <Curriculum />
            <Certification />
            <Courses />
            <Testimonials />
            <Companies />
            <FAQ />
            <Talk_to_Our_Advisor />
        </HelmetProvider>
    );
}

export default WebCourses;
