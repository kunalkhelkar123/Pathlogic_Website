import React from "react";
import TestFirstPage from "./TestFirstPage";
import DotJourney from "../DotNet/DotJourney";
import TestOverview from "./TestOverview";
import TestStack from "./TestStack";
import TestCurriculum from "./TestCurriculum";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
TestCurriculum
function TestingComp(){
    return(<>
    <TestFirstPage/>
    <DotJourney/>
    <TestOverview/>
    <TestStack/>
    <TestCurriculum/>
    <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
    </>)
}
export default TestingComp;