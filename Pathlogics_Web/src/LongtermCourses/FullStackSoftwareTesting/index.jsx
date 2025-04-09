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
import CICDPipelineMatter from "./CICDPipelineMatter"



function WebCourses() {
    return (
        <>
            <Helmet>
                <title>Software Testing Course in Pune with Placement Assistance</title>
                <meta name="title" content="Software Testing Course in Pune with Placement Assistance" />
                <meta name="description" content="Start your career in Software Testing course in pune. Learn the latest tools, techniques, and gain hands-on experience. Enroll Now!" />
            </Helmet>

            <Banner />
            <FullStackTraining />
            <Courses_offer />
            <Programveiw />
            <QualityAssurance/>
            <RoadmapSteps />
           
            <TestingCourses/>
            <PaidInternship />
            <CICDPipelineMatter/>
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
