import React from "react";
import DotNetFirstPage from "./DotNetFirstPage";
import DotJourney from "./DotJourney";
import DotOverview from "./DotOverview";
import DotCurriculum from "./DotCurriculum";
import DotModules from "./DotModules";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
import DotStack from "./DotStack";
function DotNerComponent(){
    return(<>
    
    <DotNetFirstPage/>
    <DotJourney/>
    <DotOverview/>
    <DotStack/>
    <DotCurriculum/>
    <DotModules/>
    <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
    </>)
}
export default DotNerComponent;