import React from "react";
import AiFirstPage from "./AiFirstPage";
import DotJourney from "../DotNet/DotJourney";
import AiOverview from "./AiOverview";
import AiStack from "./AiStack";
import AiCurriculum from "./AiCurriculum";
import AiModule from "./AiModule";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
function AiComp() {
  return (
    <>
      <AiFirstPage />
      <DotJourney />
      <AiOverview />
      <AiStack />
      <AiCurriculum />
      <AiModule/>
      <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
    </>
  );
}
export default AiComp;
