import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DigitalBanner from "./DigitalBanner";
import DigitalTraining from "./DigitalTraining";
import Courses from "../JavaDev/Courses";
import TopCarrerOption from "./TopCarrerOption";
import DigitalTools from "./DigitalTools";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
import DigitalOverview from "./DigitalOverview";
import DigitalInternship from "./DigitalInternship";
import DigitalCurriculum from "./DigitalCurriculum";
import DigitalModule from "./DigitalModule";
import DigitalRoadmap from "./DigitalRoadmap";
import DigitalCourses from "./DigitalCourses";
import CertificationSection from "./CertificationSection";
import DigitalCertification from "./DigitalCertification";
import DigitalFaqs from "./DigitalFaqs";
import AdvisorBanner from "../FullStackSoftwareTesting/Talk_to_Our_Advisor";

function DigitalComp() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Digital Marketing Course In Pune With Placement Support</title>
          <meta
            name="description"
            content="Join the best Digital Marketing Course in Pune with Placement. 100% practical training, 15+ certifications with affordable fees. Start your career now!"
          />
        </Helmet>
        <DigitalBanner />
       
        <DigitalTraining />
        <DigitalOverview />
        <TopCarrerOption />
        <DigitalTools />
        <DigitalInternship />
        <DigitalRoadmap />
        <DigitalCourses />

        <DigitalModule />
        <CertificationSection />
        {/* <DigitalCertification /> */}
        <Courses />

        {/* <Testimonials/> */}
        <Placement />
        <JavaComp />
        <DigitalFaqs />
        <AdvisorBanner />
      </HelmetProvider>
    </>
  );
}
export default DigitalComp;
