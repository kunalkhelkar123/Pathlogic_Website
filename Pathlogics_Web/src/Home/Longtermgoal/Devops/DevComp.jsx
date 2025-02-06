import React from "react";
import DevFirstPage from "./DevFirstPage";
import DotJourney from "../DotNet/DotJourney";
import DevOverview from "./DevOverview";
import DevStack from "./DevStack";
import DevCurriculum from "./DevCurriculum";
import DevModule from "./DevModule";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
function DevComp(){
    return(<>
    <DevFirstPage/>
    <DotJourney/>
    <DevOverview/>
    <DevStack/>
    <DevCurriculum/>
    <DevModule/>
    <Courses/>
    <Placement/>
   <JavaComp/>
    
    </>)
}
export default DevComp;