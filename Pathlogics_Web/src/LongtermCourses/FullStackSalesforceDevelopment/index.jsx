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
                <title>Salesforce Classes in Pune with 100% Placement Assistance
                </title>
                <meta name="title" content="Salesforce Classes in Pune with 100% Placement Assistance" />
                <meta name="description" content=" Join the best Salesforce classes in Pune with 100% placement support. Learn from industry experts  & real-time projects. Limited seats – Enroll now!" />
            </Helmet>

            <Banner />
            <FullStackTraining />
            {/* <Courses_offer /> */}
            <Programveiw />
            {/* <QualityAssurance/>  */}
         
            <RoadmapSteps />
              <TestingCourses/>
           
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
