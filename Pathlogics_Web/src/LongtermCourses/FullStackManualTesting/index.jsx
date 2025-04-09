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
import QualityAssurance from "./QualityAssurance"
import TestingCourses from "./TestingCourses"
import ProgramWorkRoadmap from "./ProgramWorkRoadmap"



function WebCourses() {
    return (
        <>
            <Helmet>
                <title>Practical Manual Testing Course in Pune -Pathlogics
                </title>
                <meta name="title" content="Practical Manual Testing Course in Pune -Pathlogics" />
                <meta name="description" content="Advance your career with our Manual Testing course in Pune. Learn essential testing skills, methodologies, and gain practical experience. Enroll Now!" />
            </Helmet>

            <Banner />
            <FullStackTraining />
            {/* <Courses_offer /> */}
            <Programveiw />
            <QualityAssurance/> 
            {/* <TestingCourses/> */}
            <RoadmapSteps />
           
           
            <PaidInternship />
            <ProgramWorkRoadmap/>
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
