import React from "react";
import AiFirstPage from "./AiFirstPage";
import DotJourney from "../DotNet/DotJourney";
import AiOverview from "./AiOverview";
import AiStack from "./AiStack";
import AiCurriculum from "./AiCurriculum";
import AiModule from "./Rodmap";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
import Roadmap from "./Rodmap";
import AiCurriculum2 from "./AiCurriculum2"
import AiCertificateSection from "./AiCertificateSection";
import AiCourses from "./AiCourses";
import AiFAQ from "./Aifaq";
import Aiadvisor from "./Aiadvisor";
import Aiipt from "./Aiipt";
import AiBlogs from "../DotNet/DotJourney";
import AiRoadmap from "../FullStackJavaDevelopement/AiRoadmap";

function AiComp() {
  return (
    <>
      <AiFirstPage />
      <AiBlogs/>
      {/* <AiOverview /> */}
      <AiStack />
      <AiRoadmap/>
      <AiCurriculum />
      <Aiipt/>
      <Roadmap/>
      <Courses/>
    {/* <Testimonials/> */}
    <AiCurriculum2/>
    <AiCertificateSection/>
    <AiCourses/>
    <Placement/>
    <AiFAQ/>
    <Aiadvisor/>
   <JavaComp/>
    </>
  );
}
export default AiComp;
