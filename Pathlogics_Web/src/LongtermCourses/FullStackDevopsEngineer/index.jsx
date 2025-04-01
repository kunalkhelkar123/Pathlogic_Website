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
import ProgramWorkRoadmap from "./ProgramWorkRoadmap"

function WebCourses() {
    return (
        <>
            <Helmet>
                <title> Certified DevOps Training in Pune | Pathlogics </title>
                <meta name="description" content="Get certified with Pathlogics' DevOps Training in Pune. Learn automation, cloud management, and CI/CD to boost your career. Enroll Now!" />
            </Helmet>

            <Banner />
            <FullStackTraining />
            <Programveiw />
            <RoadmapSteps />
            <Courses_offer />
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
