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
                <title> Dot Net Full Stack Course Pune | Internship at Pathologics </title>
                <meta name="description" content="Join our Dot Net Full Stack course in Pune and get an internship with a stipend after completion. Gain real-world experience and job-ready skills. Enroll now!" />
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
