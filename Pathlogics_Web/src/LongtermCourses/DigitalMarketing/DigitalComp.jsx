import React from "react";
import DigitalFirst from "./DigitalFirst";
import Courses from "../JavaDev/Courses";
//import Testimonials from "../../Testimonials/Testimonials";
import Placement from "../JavaDev/Placement";
import JavaComp from "../JavaDev/JavaComp";
import DigitalOverview from "./DigitalOverview";
import DigitalStack from "./DigitalStack";
import DigitalCurriculum from "./DigitalCurriculum";
import DigitalModule from "./DigitalModule";
import DotJourney from "../DotNet/DotJourney";
function DigitalComp(){
    return(<>
    <DigitalFirst/>
    <DotJourney/>
    <DigitalOverview/>

    <DigitalStack/>
    <DigitalCurriculum/>
    <DigitalModule/>
    <Courses/>
    {/* <Testimonials/> */}
    <Placement/>
   <JavaComp/>
  
    </>)
}
export default DigitalComp;